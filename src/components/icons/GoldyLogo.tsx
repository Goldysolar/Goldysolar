import React from 'react';
import Link from 'next/link';

interface GoldyLogoProps {
  theme?: 'light' | 'dark';
  size?: 'normal' | 'large';
}

export default function GoldyLogo({ theme = 'light', size = 'normal' }: GoldyLogoProps) {
  const isDark = theme === 'dark';

  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        textDecoration: 'none',
      }}
    >
      {/* Geometrisches Infinity / Solar-Wellen-Symbol (Royal Blue #4285F4 & Gold #FFD700) */}
      <svg
        width={size === 'large' ? '46' : '38'}
        height={size === 'large' ? '46' : '38'}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Goldy Solar Logo"
      >
        <defs>
          <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#0F4761" />
          </linearGradient>
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFF00" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>

        {/* Äußerer Bogen - Royal Blue */}
        <path
          d="M18 16C10 22 10 38 18 44C26 50 36 38 42 32C48 26 54 22 54 30C54 38 46 44 42 44"
          stroke="url(#logoBlueGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Innerer Gegenbogen - Sunflower Yellow Gold */}
        <path
          d="M42 44C50 38 50 22 42 16C34 10 24 22 18 28C12 34 6 38 6 30C6 22 14 16 18 16"
          stroke="url(#logoGoldGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Sonnen-Zentrumspunkt */}
        <circle cx="30" cy="30" r="4.5" fill="#FFD700" />
      </svg>

      {/* Schriftzug */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: size === 'large' ? '22px' : '19px',
            fontWeight: 900,
            letterSpacing: '0.5px',
            color: isDark ? '#FFFFFF' : '#0F4761',
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}
        >
          GOLDY <span style={{ color: '#4285F4' }}>SOLAR</span>
        </span>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.6px',
            color: isDark ? '#FFD700' : '#467886',
            textTransform: 'uppercase',
            marginTop: '2px',
          }}
        >
          GMBH • HEIDELBERG
        </span>
      </div>
    </Link>
  );
}
