import React from 'react';

interface CustomSunLogoProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CustomSunLogo({
  size = 110,
  color = '#FFDD00',
  className = '',
  style = {},
}: CustomSunLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: 'drop-shadow(0 0 15px rgba(255, 221, 0, 0.7))',
        ...style,
      }}
      aria-label="Goldy Solar Sun Logo"
    >
      {/* Floating Rays */}
      <g fill={color}>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <polygon key={angle} points="50,0 44,17 56,17" transform={`rotate(${angle} 50 50)`} />
        ))}
      </g>

      {/* Single Yellow Ring */}
      <circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="8" />

      {/* Plug Body */}
      <path d="M 38 46 L 62 46 L 62 52 A 12 12 0 0 1 38 52 Z" fill={color} />

      {/* Plug Prongs (disconnected from ring) */}
      <rect x="42" y="34" width="4" height="12" fill={color} />
      <rect x="54" y="34" width="4" height="12" fill={color} />

      {/* Plug Cord (connected to ring bottom inner edge) */}
      <rect x="48" y="64" width="4" height="8" fill={color} />
    </svg>
  );
}
