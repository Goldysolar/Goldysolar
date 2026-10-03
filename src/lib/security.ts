/**
 * Security & Anti-Abuse Utility for Goldy Solar Web App
 * Features:
 * 1. IP-based Rate Limiter (Sliding Window)
 * 2. Strict Input Sanitization & HTML Escaping (Anti-Injection)
 * 3. Honeypot Bot Trap Detector
 * 4. Cloudflare Turnstile Verification Hook
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// Global in-memory storage for rate limits
const ipRateLimitStore = new Map<string, RateLimitRecord>();

// Periodic garbage collection for expired IP entries
let lastCleanup = Date.now();
function cleanupExpiredRecords() {
  const now = Date.now();
  if (now - lastCleanup < 5 * 60 * 1000) return;
  lastCleanup = now;
  for (const [ip, record] of ipRateLimitStore.entries()) {
    if (now > record.resetTime) {
      ipRateLimitStore.delete(ip);
    }
  }
}

/**
 * Extracts client IP from standard request headers
 */
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return (
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    '127.0.0.1'
  );
}

/**
 * Checks if the client IP exceeds the allowed request rate.
 * Default: 5 requests per 15 minutes window.
 */
export function checkRateLimit(
  ip: string,
  maxRequests: number = 5,
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number; resetTime: number } {
  cleanupExpiredRecords();

  const now = Date.now();
  const record = ipRateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    ipRateLimitStore.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: now + windowMs,
    };
  }

  if (record.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * Escapes unsafe HTML characters to protect against HTML injection / XSS in emails & logs.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitizes and enforces maximum length on text input.
 */
export function sanitizeString(val: unknown, maxLength = 255): string {
  if (typeof val !== 'string') return '';
  return escapeHtml(val.trim()).slice(0, maxLength);
}

/**
 * Validates email format strictly.
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format.
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return true;
  if (phone.length > 35) return false;
  return /^[+0-9\s()/-]{5,35}$/.test(phone);
}

/**
 * Checks if a honeypot field has been filled by an automated bot.
 */
export function isHoneypotTriggered(
  body: Record<string, any>,
  honeypotKeys = ['website_url', 'hp_email_confirm', 'bot_trap']
): boolean {
  for (const key of honeypotKeys) {
    if (body[key] && String(body[key]).trim().length > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Cloudflare Turnstile token verifier (if secret key configured in environment).
 */
export async function verifyTurnstileToken(token?: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    return true;
  }

  if (!token) return false;

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (ip) formData.append('remoteip', ip);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const outcome = await res.json();
    return outcome.success === true;
  } catch (err) {
    console.error('Turnstile verification error:', err);
    return false;
  }
}
