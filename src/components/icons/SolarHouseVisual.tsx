import React from 'react';

export default function SolarHouseVisual() {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        right: '-10px',
        bottom: '0',
        width: '260px',
        height: '170px',
        opacity: 0.95,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <defs>
        <linearGradient id="skyGradHouse" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60CAF3" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#156082" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F4761" />
          <stop offset="100%" stopColor="#082332" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sun glow in background */}
      <circle cx="330" cy="40" r="32" fill="url(#sunGlow)" />
      <circle cx="330" cy="40" r="16" fill="#FFD700" />
      {/* Sun rays */}
      <line x1="330" y1="12" x2="330" y2="4" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="358" y1="40" x2="366" y2="40" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="350" y1="20" x2="356" y2="14" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="310" y1="20" x2="304" y2="14" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />

      {/* Ground & Grass hill */}
      <ellipse cx="250" cy="230" rx="190" ry="45" fill="#156082" fillOpacity="0.7" />

      {/* Modern Einfamilienhaus Building */}
      {/* Main House Base */}
      <rect x="150" y="105" width="170" height="95" rx="4" fill="url(#wallGrad)" />

      {/* Gable Roof Structure */}
      <polygon points="135,108 235,38 335,108" fill="url(#roofGrad)" />

      {/* Solar Panel Array on Roof Left */}
      <polygon points="152,102 230,48 230,72 165,102" fill="url(#panelGrad)" stroke="#60CAF3" strokeWidth="1" />
      <polygon points="170,102 230,58 230,82 185,102" fill="url(#panelGrad)" stroke="#60CAF3" strokeWidth="1" />
      <polygon points="190,102 230,68 230,92 205,102" fill="url(#panelGrad)" stroke="#60CAF3" strokeWidth="1" />

      {/* Solar Panel Array on Roof Right */}
      <polygon points="240,48 318,102 305,102 240,72" fill="url(#panelGrad)" stroke="#60CAF3" strokeWidth="1" />
      <polygon points="240,58 300,102 285,102 240,82" fill="url(#panelGrad)" stroke="#60CAF3" strokeWidth="1" />
      <polygon points="240,68 280,102 265,102 240,92" fill="url(#panelGrad)" stroke="#60CAF3" strokeWidth="1" />

      {/* Solar panel grid line glint */}
      <line x1="160" y1="98" x2="310" y2="98" stroke="#93C5FD" strokeWidth="0.75" strokeOpacity="0.8" />
      <line x1="180" y1="84" x2="290" y2="84" stroke="#93C5FD" strokeWidth="0.75" strokeOpacity="0.8" />
      <line x1="200" y1="70" x2="270" y2="70" stroke="#93C5FD" strokeWidth="0.75" strokeOpacity="0.8" />

      {/* Windows & Balcony Door */}
      <rect x="170" y="120" width="34" height="28" rx="2" fill="#0F4761" fillOpacity="0.85" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="187" y1="120" x2="187" y2="148" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="170" y1="134" x2="204" y2="134" stroke="#CBD5E1" strokeWidth="1" />

      <rect x="220" y="120" width="34" height="28" rx="2" fill="#0F4761" fillOpacity="0.85" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="237" y1="120" x2="237" y2="148" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="220" y1="134" x2="254" y2="134" stroke="#CBD5E1" strokeWidth="1" />

      {/* Front Entrance & Smart Door */}
      <rect x="275" y="138" width="28" height="62" rx="2" fill="#1E293B" />
      <circle cx="297" cy="170" r="2" fill="#FFD700" />

      {/* Modern Garage / Carport on left */}
      <rect x="90" y="145" width="60" height="55" rx="3" fill="url(#wallGrad)" />
      <rect x="95" y="152" width="50" height="48" rx="2" fill="#334155" />
      {/* Garage lines */}
      <line x1="95" y1="162" x2="145" y2="162" stroke="#64748B" strokeWidth="1" />
      <line x1="95" y1="172" x2="145" y2="172" stroke="#64748B" strokeWidth="1" />
      <line x1="95" y1="182" x2="145" y2="182" stroke="#64748B" strokeWidth="1" />
      <line x1="95" y1="192" x2="145" y2="192" stroke="#64748B" strokeWidth="1" />

      {/* Wallbox EV charging point on garage wall */}
      <rect x="153" y="152" width="8" height="14" rx="2" fill="#2563EB" />
      <circle cx="157" cy="157" r="1.5" fill="#22C55E" />
      <path d="M157 166 Q154 175 145 178" stroke="#2563EB" strokeWidth="1.5" fill="none" />

      {/* Energy Flow Particle Sparkles */}
      <circle cx="210" cy="55" r="2.5" fill="#FFD700" />
      <circle cx="260" cy="62" r="2" fill="#60CAF3" />
      <circle cx="180" cy="78" r="2" fill="#FFD700" />
    </svg>
  );
}
