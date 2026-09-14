'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '100px' }}>
      <div className="container" style={{ paddingTop: '70px' }}>
        
        {/* Abschnitts-Überschrift (Merged from top) */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(66, 133, 244, 0.1)',
              color: '#4285F4',
              border: '1px solid rgba(66, 133, 244, 0.25)',
              fontSize: '12px',
              fontWeight: 800,
              padding: '4px 16px',
              borderRadius: '9999px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            ÜBER UNS
          </span>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 900,
              color: '#0E2841',
              lineHeight: 1.25,
            }}
          >
            <span style={{ color: '#FFD700' }}>Technik. Erfahrung. Zuverlässigkeit.</span>
          </h1>
        </div>

        {/* Unternehmensprofil (New Content) */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 12px 32px rgba(15, 71, 97, 0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ height: '6px', width: '100%', background: 'linear-gradient(90deg, #4285F4 0%, #FFD700 100%)', position: 'absolute', top: 0, left: 0 }} />
          
          <div style={{ fontSize: '17px', lineHeight: 1.85, color: '#334155' }}>
            <p style={{ marginBottom: '20px' }}>
              Die Goldy Solar GmbH verbindet elektrotechnisches Handwerk mit professioneller Ingenieurkompetenz.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Unter der Leitung von Sabah Altaweel, Elektroingenieur und Geschäftsführer, verfügt unser Unternehmen über mehr als 15 Jahre Erfahrung in den Bereichen Photovoltaik, Elektrotechnik, Netzintegration, Projektmanagement und Inbetriebnahme von Energieanlagen.
            </p>
            <p style={{ margin: 0 }}>
              Unser Ziel ist es, Kunden hochwertige und wirtschaftliche Energielösungen anzubieten und Projekte termingerecht sowie nach höchsten Qualitätsstandards umzusetzen.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
