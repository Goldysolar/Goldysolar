import React from 'react';

export default function SolarCommercialVisual() {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        right: '-10px',
        bottom: '0',
        width: '270px',
        height: '170px',
        opacity: 0.95,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <defs>
        <linearGradient id="commWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="commGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F9ED5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0F4761" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="commRoof" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="commPanels" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Background industrial horizon line */}
      <line x1="20" y1="195" x2="390" y2="195" stroke="#156082" strokeWidth="2" strokeOpacity="0.5" />

      {/* Main Logistics / Industrial Hall */}
      {/* Back Hall Structure */}
      <polygon points="120,110 240,65 370,105 250,150" fill="url(#commRoof)" stroke="#475569" strokeWidth="1" />

      {/* Solar Panel Array on Flat Industrial Roof (Rows of 3D-angled solar panels) */}
      {/* Row 1 */}
      <polygon points="145,105 180,92 205,102 170,115" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />
      <polygon points="190,88 225,75 250,85 215,98" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />
      <polygon points="235,71 270,58 295,68 260,81" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />

      {/* Row 2 */}
      <polygon points="175,118 210,105 235,115 200,128" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />
      <polygon points="220,101 255,88 280,98 245,111" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />
      <polygon points="265,84 300,71 325,81 290,94" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />

      {/* Row 3 */}
      <polygon points="205,131 240,118 265,128 230,141" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />
      <polygon points="250,114 285,101 310,111 275,124" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />
      <polygon points="295,97 330,84 355,94 320,107" fill="url(#commPanels)" stroke="#93C5FD" strokeWidth="0.8" />

      {/* Front Facade of Industrial Warehouse */}
      <polygon points="120,110 250,150 250,195 120,195" fill="url(#commWall)" stroke="#CBD5E1" strokeWidth="1" />
      {/* Right Facade */}
      <polygon points="250,150 370,105 370,195 250,195" fill="#64748B" fillOpacity="0.4" />

      {/* Industrial Sectional Loading Docks / Tore */}
      <rect x="135" y="160" width="28" height="35" rx="1" fill="#1E293B" />
      <line x1="135" y1="170" x2="163" y2="170" stroke="#475569" strokeWidth="1" />
      <line x1="135" y1="180" x2="163" y2="180" stroke="#475569" strokeWidth="1" />
      <line x1="135" y1="190" x2="163" y2="190" stroke="#475569" strokeWidth="1" />

      <rect x="175" y="160" width="28" height="35" rx="1" fill="#1E293B" />
      <line x1="175" y1="170" x2="203" y2="170" stroke="#475569" strokeWidth="1" />
      <line x1="175" y1="180" x2="203" y2="180" stroke="#475569" strokeWidth="1" />
      <line x1="175" y1="190" x2="203" y2="190" stroke="#475569" strokeWidth="1" />

      {/* Modern Office Front / Glass Facade on Right */}
      <polygon points="265,155 350,125 350,185 265,185" fill="url(#commGlass)" stroke="#60CAF3" strokeWidth="1" />
      {/* Window Mullions */}
      <line x1="293" y1="145" x2="293" y2="185" stroke="#93C5FD" strokeWidth="1" />
      <line x1="321" y1="135" x2="321" y2="185" stroke="#93C5FD" strokeWidth="1" />
      <line x1="265" y1="165" x2="350" y2="135" stroke="#93C5FD" strokeWidth="0.8" />

      {/* Commercial Transformer / Inverter Box Station on Ground */}
      <rect x="75" y="168" width="34" height="27" rx="2" fill="#0F4761" stroke="#FFD700" strokeWidth="1.2" />
      <path d="M88 174 L96 174 L90 182 L97 182 L87 192 L90 184 L85 184 Z" fill="#FFD700" />

      {/* Peak Shaving Pulsing Nodes */}
      <circle cx="215" cy="75" r="2.5" fill="#FFD700" />
      <circle cx="280" cy="65" r="2" fill="#60CAF3" />
      <circle cx="160" cy="90" r="2" fill="#FFD700" />
    </svg>
  );
}
