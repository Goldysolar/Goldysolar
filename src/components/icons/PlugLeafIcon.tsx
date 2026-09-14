import React from 'react';

interface PlugLeafIconProps {
  size?: number;
  className?: string;
}

export default function PlugLeafIcon({ size = 80, className = '' }: PlugLeafIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Eco Plug & Leaf Icon"
    >
      <defs>
        <linearGradient id="plugGradTS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60CAF3" />
          <stop offset="40%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#0F4761" />
        </linearGradient>

        <linearGradient id="pinGradTS" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        <linearGradient id="leafGradTS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F9ED5" />
          <stop offset="100%" stopColor="#156082" />
        </linearGradient>

        <filter id="plugShadowTS" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0F4761" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#plugShadowTS)">
        <rect x="42" y="10" width="5" height="12" rx="2.5" fill="url(#pinGradTS)" />
        <rect x="53" y="10" width="5" height="12" rx="2.5" fill="url(#pinGradTS)" />

        <path
          d="M38 22H62C65.3137 22 68 24.6863 68 28V44C68 50.6274 62.6274 56 56 56H44C37.3726 56 32 50.6274 32 44V28C32 24.6863 34.6863 22 38 22Z"
          fill="url(#plugGradTS)"
        />

        <path
          d="M51 28L45 39H51L49 50L57 37H51L51 28Z"
          fill="#FFD700"
        />

        <path
          d="M50 56V88"
          stroke="url(#leafGradTS)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M52 68C64 66 74 56 74 46C62 46 52 56 52 68Z"
          fill="url(#leafGradTS)"
        />

        <path
          d="M48 76C36 74 28 66 28 58C38 58 48 66 48 76Z"
          fill="url(#leafGradTS)"
        />
      </g>
    </svg>
  );
}
