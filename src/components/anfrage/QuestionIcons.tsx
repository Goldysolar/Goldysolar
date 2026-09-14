import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// 1. Gebäude Icons
export function IconSingleHouse({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28L32 10L52 28V52C52 53.1046 51.1046 54 50 54H14C12.8954 54 12 53.1046 12 52V28Z" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 54V34C26 32.8954 26.8954 32 28 32H36C37.1046 32 38 32.8954 38 34V54" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconMultiHouse({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="36" height="40" rx="3" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="22" y="22" width="6" height="6" rx="1" fill={color}/>
      <rect x="36" y="22" width="6" height="6" rx="1" fill={color}/>
      <rect x="22" y="34" width="6" height="6" rx="1" fill={color}/>
      <rect x="36" y="34" width="6" height="6" rx="1" fill={color}/>
      <path d="M28 54V46H36V54" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconCompany({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 54V24L36 12V54H10Z" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 30L54 22V54H36" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="18" y="26" width="6" height="6" rx="1" fill={color}/>
      <rect x="18" y="38" width="6" height="6" rx="1" fill={color}/>
      <rect x="42" y="34" width="6" height="6" rx="1" fill={color}/>
    </svg>
  );
}

export function IconField({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 52H56" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
      {/* Baum 1 */}
      <path d="M22 52V38M22 38C22 38 14 34 14 26C14 18 22 14 22 14C22 14 30 18 30 26C30 34 22 38 22 38Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Baum 2 */}
      <path d="M42 52V42M42 42C42 42 36 38 36 32C36 26 42 22 42 22C42 22 48 26 48 32C48 38 42 42 42 42Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconQuestion({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" stroke={color} strokeWidth="3.5"/>
      <path d="M26 24C26 20.6863 28.6863 18 32 18C35.3137 18 38 20.6863 38 24C38 26.5 36.5 28.5 34 29.5V34" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="34" cy="42" r="2.5" fill={color}/>
    </svg>
  );
}

// 2. Dachformen Icons
export function IconSatteldach({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 32L32 14L54 32" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 32V52H48V32" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconPultdach({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20L54 32" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 22V52H50V31" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconFlachdach({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="48" height="6" rx="3" fill={color} stroke={color} strokeWidth="2"/>
      <path d="M16 26V52M48 26V52" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconWalmdach({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 34L24 16H40L54 34" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 16L32 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
      <path d="M16 34V52H48V34" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 3. Dacheindeckung Icons
export function IconZiegel({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C12 24 16 18 24 18C32 18 32 24 40 24C48 24 52 18 52 18" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M12 36C12 36 16 30 24 30C32 30 32 36 40 36C48 36 52 30 52 30" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M12 48C12 48 16 42 24 42C32 42 32 48 40 48C48 48 52 42 52 42" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBitumen({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="16" width="40" height="34" rx="3" stroke={color} strokeWidth="3.5"/>
      <path d="M12 28H52M12 40H52M26 16V28M38 28V40M22 40V50" stroke={color} strokeWidth="3"/>
    </svg>
  );
}

export function IconBlech({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14V50M22 14V50M32 14V50M42 14V50M52 14V50" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <path d="M12 14H22M32 14H42M22 50H32M42 50H52" stroke={color} strokeWidth="3"/>
    </svg>
  );
}

export function IconAsbest({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18Q18 26 24 18Q30 10 36 18Q42 26 48 18Q54 10 60 18" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M12 32Q18 40 24 32Q30 24 36 32Q42 40 48 32Q54 24 60 32" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M12 46Q18 54 24 46Q30 38 36 46Q42 54 48 46Q54 38 60 46" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// 4. Fläche Icons
export function IconAreaLarge({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="38" height="38" rx="4" fill="rgba(66, 133, 244, 0.12)" stroke={color} strokeWidth="3.5" strokeDasharray="5 5"/>
      <path d="M14 52V14H52" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 14L8 20M14 14L20 8M52 52L46 58M52 52L58 46" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function IconAreaMedium({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="28" height="28" rx="3" fill="rgba(66, 133, 244, 0.12)" stroke={color} strokeWidth="3.5" strokeDasharray="4 4"/>
      <path d="M20 48V20H48" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconAreaSmall({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="26" width="20" height="20" rx="2" fill="rgba(66, 133, 244, 0.12)" stroke={color} strokeWidth="3" strokeDasharray="3 3"/>
      <path d="M26 46V26H46" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 5. Eigentümer Icons
export function IconCheckYes({ size = 56, color = '#10B981' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" fill="rgba(16, 185, 129, 0.12)" stroke={color} strokeWidth="3.5"/>
      <path d="M22 33L29 40L43 24" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconCommunity({ size = 56, color = '#4285F4' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 22L32 12L44 22V28H20V22Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 28V36M20 40H44" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="20" cy="48" r="3.5" stroke={color} strokeWidth="2.5"/>
      <circle cx="32" cy="48" r="3.5" stroke={color} strokeWidth="2.5"/>
      <circle cx="44" cy="48" r="3.5" stroke={color} strokeWidth="2.5"/>
    </svg>
  );
}

export function IconCrossNo({ size = 56, color = '#EF4444' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" fill="rgba(239, 68, 68, 0.1)" stroke={color} strokeWidth="3.5"/>
      <path d="M24 24L40 40M40 24L24 40" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}
