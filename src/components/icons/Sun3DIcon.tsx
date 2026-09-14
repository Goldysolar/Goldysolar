import React from 'react';

interface Sun3DIconProps {
  size?: number;
  className?: string;
}

export default function Sun3DIcon({ size = 80, className = '' }: Sun3DIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Solar Sun Icon"
    >
      <defs>
        <radialGradient id="sunCenterGradTS" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF4A3" />
          <stop offset="35%" stopColor="#FFD700" />
          <stop offset="80%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>

        <linearGradient id="rayGradTS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF066" />
          <stop offset="100%" stopColor="#E6A800" />
        </linearGradient>

        <linearGradient id="boltGradTS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>

        <filter id="sunShadowTS" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#sunShadowTS)">
        {/* 8 3D Sonnen-Strahlen wie im 3D-Render */}
        <rect x="44" y="6" width="12" height="16" rx="6" fill="url(#rayGradTS)" />
        <rect x="71" y="17" width="12" height="16" rx="6" transform="rotate(45 77 25)" fill="url(#rayGradTS)" />
        <rect x="78" y="44" width="16" height="12" rx="6" fill="url(#rayGradTS)" />
        <rect x="71" y="71" width="12" height="16" rx="6" transform="rotate(-45 77 79)" fill="url(#rayGradTS)" />
        <rect x="44" y="78" width="12" height="16" rx="6" fill="url(#rayGradTS)" />
        <rect x="17" y="71" width="12" height="16" rx="6" transform="rotate(45 23 79)" fill="url(#rayGradTS)" />
        <rect x="6" y="44" width="16" height="12" rx="6" fill="url(#rayGradTS)" />
        <rect x="17" y="17" width="12" height="16" rx="6" transform="rotate(-45 23 25)" fill="url(#rayGradTS)" />

        {/* Zentrale Sonnenkugel */}
        <circle cx="50" cy="50" r="28" fill="url(#sunCenterGradTS)" />
      </g>

      {/* Energie-Blitz */}
      <path
        d="M53 32L41 49H51L47 68L61 47H50L53 32Z"
        fill="url(#boltGradTS)"
        opacity="0.95"
      />
    </svg>
  );
}
