"use client";
import React, { useState, useEffect } from 'react';

type CookieConsentState = {
  essential: boolean;
  optional: boolean;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsentState>({ essential: true, optional: false });

  useEffect(() => {
    const saved = localStorage.getItem('goldysolar_cookie_consent');
    if (!saved) {
      setShowBanner(true);
    } else {
      setConsent(JSON.parse(saved));
    }

    // Expose window method to open settings from footer link
    (window as any).openCookieSettings = () => {
      setShowSettings(true);
      setShowBanner(true);
    };
  }, []);

  const saveConsent = (newConsent: CookieConsentState) => {
    setConsent(newConsent);
    localStorage.setItem('goldysolar_cookie_consent', JSON.stringify(newConsent));
    setShowBanner(false);
    setShowSettings(false);
    
    // If optional is true, theoretically initialize tracking here
    // e.g., if (newConsent.optional) initAnalytics();
  };

  const acceptAll = () => saveConsent({ essential: true, optional: true });
  const rejectAll = () => saveConsent({ essential: true, optional: false });

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#FFFFFF',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
      zIndex: 99999,
      padding: '24px',
      borderTop: '4px solid #4285F4',
      fontFamily: 'sans-serif'
    }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {!showSettings ? (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: '#0E2841' }}>Ihre Privatsphäre ist uns wichtig</h3>
            <p style={{ fontSize: '14px', color: '#404040', marginBottom: '16px', lineHeight: 1.5 }}>
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige sind technisch notwendig, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern (Optionale Dienste / Externe Medien). 
              Sie können jederzeit Ihre Einstellungen anpassen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* Equal buttons to avoid Dark Patterns */}
              <button onClick={acceptAll} style={btnStyle('#4285F4', '#FFFFFF')}>Alle Akzeptieren</button>
              <button onClick={rejectAll} style={btnStyle('#E2E8F0', '#0E2841')}>Nur Notwendige</button>
              <button onClick={() => setShowSettings(true)} style={{ ...btnStyle('transparent', '#4285F4'), border: '1px solid #4285F4' }}>Einstellungen</button>
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: '#0E2841' }}>Cookie-Einstellungen</h3>
            <p style={{ fontSize: '14px', color: '#404040', marginBottom: '20px' }}>Passen Sie Ihre Präferenzen an. Technisch notwendige Cookies können nicht deaktiviert werden.</p>
            
            <div style={{ marginBottom: '16px', background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '14px', color: '#0E2841' }}>
                <input type="checkbox" checked disabled style={{ width: '18px', height: '18px' }} />
                Technisch notwendig
              </label>
              <p style={{ fontSize: '12px', color: '#64748B', marginTop: '6px', marginLeft: '28px' }}>Erforderlich für die grundlegende Funktion der Website (z. B. Speicherung Ihrer Cookie-Präferenzen).</p>
            </div>

            <div style={{ marginBottom: '24px', background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '14px', color: '#0E2841', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={consent.optional} 
                  onChange={(e) => setConsent({ ...consent, optional: e.target.checked })} 
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }} 
                />
                Optionale Dienste / Externe Medien
              </label>
              <p style={{ fontSize: '12px', color: '#64748B', marginTop: '6px', marginLeft: '28px' }}>Ermöglicht das Laden externer Medien (wie YouTube, Google Maps) und Analyse-Tools zur Verbesserung unseres Angebots.</p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => saveConsent(consent)} style={btnStyle('#4285F4', '#FFFFFF')}>Einstellungen speichern</button>
              <button onClick={rejectAll} style={btnStyle('#E2E8F0', '#0E2841')}>Alle ablehnen</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const btnStyle = (bg: string, color: string): React.CSSProperties => ({
  padding: '10px 20px',
  background: bg,
  color: color,
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'opacity 0.2s',
});
