import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  getClientIp,
  checkRateLimit,
  isHoneypotTriggered,
  sanitizeString,
  isValidEmail,
  isValidPhone,
  verifyTurnstileToken,
} from '@/lib/security';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey || 're_default_mock');

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. Rate Limiting (5 requests per 15 min per IP)
    const rateLimit = checkRateLimit(clientIp, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Zu viele Anfragen. Bitte warten Sie 15 Minuten, bevor Sie eine neue Anfrage senden.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '900',
          },
        }
      );
    }

    const data = await request.json();

    // 2. Honeypot check (Bot Trap)
    if (isHoneypotTriggered(data)) {
      console.warn(`[SECURITY] Bot caught via Honeypot from IP: ${clientIp}`);
      return NextResponse.json({ success: true, message: 'Anfrage verarbeitet.' });
    }

    // 3. Turnstile check (if configured)
    if (data.turnstileToken) {
      const isTurnstileValid = await verifyTurnstileToken(data.turnstileToken, clientIp);
      if (!isTurnstileValid) {
        return NextResponse.json(
          { success: false, error: 'Sicherheitsüberprüfung fehlgeschlagen.' },
          { status: 403 }
        );
      }
    }

    // 4. Sanitize inputs
    const name = sanitizeString(data.name, 80);
    const email = sanitizeString(data.email, 120);
    const phone = sanitizeString(data.phone, 35);
    const plzOrt = sanitizeString(data.plzOrt, 60);
    const gebaeudeart = sanitizeString(data.gebaeudeart, 60);
    const dachgeometrie = sanitizeString(data.dachgeometrie, 60);
    const dacheindeckung = sanitizeString(data.dacheindeckung, 60);
    const flaeche = sanitizeString(data.flaeche, 60);
    const rechtliches = sanitizeString(data.rechtliches, 60);

    // 5. Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Ungültiges Telefonnummernformat.' },
        { status: 400 }
      );
    }

    // 6. Send Email or Log in Dev Mode
    if (resendApiKey) {
      const { data: emailData, error } = await resend.emails.send({
        from: 'Goldy Solar <info@goldysolar.de>',
        to: process.env.CONTACT_EMAIL || 'info@goldysolar.de',
        replyTo: email,
        subject: `⚡ Neue Chat-Anfrage von ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #0E2841; padding: 20px;">
            <h2 style="color: #4285F4; border-bottom: 2px solid #FFDD00; padding-bottom: 8px;">
              Neue Projektanfrage via Chat-Assistent
            </h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #4285F4;">${email}</a></p>
            <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
            <p><strong>PLZ & Ort:</strong> ${plzOrt || 'Nicht angegeben'}</p>
            
            <h3 style="color: #0E2841; margin-top: 20px;">Projektdetails</h3>
            <ul style="line-height: 1.8;">
              <li><strong>Gebäudeart:</strong> ${gebaeudeart || 'Nicht angegeben'}</li>
              <li><strong>Dachgeometrie:</strong> ${dachgeometrie || 'Nicht angegeben'}</li>
              <li><strong>Dacheindeckung:</strong> ${dacheindeckung || 'Nicht angegeben'}</li>
              <li><strong>Flächenkapazität:</strong> ${flaeche || 'Nicht angegeben'}</li>
              <li><strong>Eigentümer:</strong> ${rechtliches || 'Nicht angegeben'}</li>
            </ul>
          </div>
        `,
      });

      if (error) {
        console.error('Resend error in contact API:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data: emailData });
    } else {
      console.log('--- [RESEND DEV MOCK - CHAT] Neue Anfrage erhalten ---');
      console.log({ name, email, phone, plzOrt, gebaeudeart, flaeche });
      return NextResponse.json({ success: true, mock: true });
    }
  } catch (error) {
    console.error('Internal contact API error:', error);
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}
