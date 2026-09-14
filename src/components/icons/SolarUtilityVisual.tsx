import React from 'react';

export default function SolarUtilityVisual() {
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
        <linearGradient id="utilPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0B192C" />
        </linearGradient>
        <linearGradient id="utilSubstation" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F4761" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#082332" />
        </linearGradient>
      </defs>

      {/* Horizon & Soft Rolling Hills */}
      <path d="M50 140 Q 180 115 280 135 T 390 125 L 390 220 L 50 220 Z" fill="url(#groundGrad)" />

      {/* Utility Ground-Mounted Solar Tables Row 1 (Back) */}
      <g stroke="#93C5FD" strokeWidth="0.75">
        <polygon points="170,120 210,110 215,122 175,132" fill="url(#utilPanel)" />
        <polygon points="215,109 255,99 260,111 220,121" fill="url(#utilPanel)" />
        <polygon points="260,98 300,88 305,100 265,110" fill="url(#utilPanel)" />
        <polygon points="305,87 345,77 350,89 310,99" fill="url(#utilPanel)" />
      </g>
      {/* Table legs Back */}
      <line x1="192" y1="126" x2="192" y2="140" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="237" y1="115" x2="237" y2="132" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="282" y1="104" x2="282" y2="124" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="327" y1="93" x2="327" y2="116" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Utility Solar Tables Row 2 (Middle) */}
      <g stroke="#93C5FD" strokeWidth="0.85">
        <polygon points="140,142 185,130 192,146 147,158" fill="url(#utilPanel)" />
        <polygon points="190,129 235,117 242,133 197,145" fill="url(#utilPanel)" />
        <polygon points="240,116 285,104 292,120 247,132" fill="url(#utilPanel)" />
        <polygon points="290,103 335,91 342,107 297,119" fill="url(#utilPanel)" />
        <polygon points="340,90 380,80 387,96 347,106" fill="url(#utilPanel)" />
      </g>
      {/* Table legs Middle */}
      <line x1="166" y1="150" x2="166" y2="168" stroke="#94A3B8" strokeWidth="2" />
      <line x1="216" y1="137" x2="216" y2="157" stroke="#94A3B8" strokeWidth="2" />
      <line x1="266" y1="124" x2="266" y2="146" stroke="#94A3B8" strokeWidth="2" />
      <line x1="316" y1="111" x2="316" y2="135" stroke="#94A3B8" strokeWidth="2" />

      {/* Utility Solar Tables Row 3 (Front - Largest) */}
      <g stroke="#60CAF3" strokeWidth="1">
        <polygon points="110,168 160,154 168,174 118,188" fill="url(#utilPanel)" />
        <polygon points="166,152 216,138 224,158 174,172" fill="url(#utilPanel)" />
        <polygon points="222,136 272,122 280,142 230,156" fill="url(#utilPanel)" />
        <polygon points="278,120 328,106 336,126 286,140" fill="url(#utilPanel)" />
        <polygon points="334,104 384,90 392,110 342,124" fill="url(#utilPanel)" />
      </g>
      {/* Table legs Front */}
      <line x1="139" y1="178" x2="139" y2="200" stroke="#CBD5E1" strokeWidth="2.5" />
      <line x1="195" y1="162" x2="195" y2="188" stroke="#CBD5E1" strokeWidth="2.5" />
      <line x1="251" y1="146" x2="251" y2="176" stroke="#CBD5E1" strokeWidth="2.5" />
      <line x1="307" y1="130" x2="307" y2="164" stroke="#CBD5E1" strokeWidth="2.5" />

      {/* Concrete Substation & Inverter Central Station on Left */}
      <rect x="65" y="152" width="38" height="34" rx="2" fill="url(#utilSubstation)" stroke="#334155" strokeWidth="1.5" />
      {/* Substation Roof */}
      <polygon points="60,152 84,142 108,152" fill="#1E293B" />
      {/* Ventilation & Warning High Voltage */}
      <rect x="74" y="160" width="20" height="12" fill="#1E293B" rx="1" />
      <path d="M84 163 L87 163 L84 168 L88 168 L82 174 L84 169 L80 169 Z" fill="#FFD700" />

      {/* Grid High Voltage Pylon in distant background */}
      <g stroke="#94A3B8" strokeWidth="1" opacity="0.6">
        <line x1="365" y1="35" x2="355" y2="105" />
        <line x1="365" y1="35" x2="375" y2="105" />
        <line x1="355" y1="105" x2="375" y2="105" />
        <line x1="345" y1="55" x2="385" y2="55" />
        <line x1="340" y1="75" x2="390" y2="75" />
        <line x1="358" y1="45" x2="372" y2="65" />
        <line x1="372" y1="45" x2="358" y2="65" />
        <line x1="356" y1="65" x2="374" y2="85" />
        <line x1="374" y1="65" x2="356" y2="85" />
      </g>

      {/* SCADA Light Pulsing Dots */}
      <circle cx="200" cy="148" r="2.5" fill="#FFD700" />
      <circle cx="280" cy="112" r="2" fill="#60CAF3" />
      <circle cx="84" cy="142" r="2" fill="#22C55E" />
    </svg>
  );
}
