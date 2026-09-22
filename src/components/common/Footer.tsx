"use client";
import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const leistungen = [
    'PV-Anlagen für Ein- & Mehrfamilienhäuser',
    'Gewerbe- & Industrie-Solar (C&I)',
    'Batteriespeicher & Energiemanagement',
    'Wallboxen & Ladeinfrastruktur',
    'E-Installation & Zählerschrank',
    'Netzanschluss & Inbetriebnahme',
    'Technische Planung & Engineering',
    'Nachunternehmer für EPC-Unternehmen',
    'AC-Installationen bei Solarparks',
    'SCADA-, Komm.- & IBN-Services',
  ];

  return (
    <footer style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Top Accent Gradient Bar */}
      <div style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, #4285F4 0%, #FFD700 50%, #FFFF00 100%)' }} />

      {/* TOP SECTION: Sleek White Bar with Centered Logo */}
      <div className="footer-logo-section">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="Goldy Solar Logo" 
            style={{ maxWidth: '180px', width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
          />
        </div>
      </div>

      {/* BOTTOM SECTION: Full-width Blue Panel with Content in Container */}
      <div className="footer-main-section">
        <div className="container">
          
          {/* 3 Columns Grid */}
          <div className="footer-cols-grid">
            {/* Unternehmen */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFD700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Unternehmen
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
                <li><Link href="/" style={{ color: '#EAF4FA', fontSize: '13.5px', textDecoration: 'none', fontWeight: 500 }}>Startseite</Link></li>
                <li><Link href="/ueber-uns" style={{ color: '#EAF4FA', fontSize: '13.5px', textDecoration: 'none', fontWeight: 500 }}>Über Uns</Link></li>
                <li><Link href="/projekte" style={{ color: '#EAF4FA', fontSize: '13.5px', textDecoration: 'none', fontWeight: 500 }}>Projekte</Link></li>
                <li><Link href="/kontakt" style={{ color: '#EAF4FA', fontSize: '13.5px', textDecoration: 'none', fontWeight: 500 }}>Kontakt</Link></li>
              </ul>
            </div>



            {/* Leistungen & Lösungen */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFD700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Leistungen &amp; Lösungen
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
                {leistungen.map((item, i) => (
                  <li key={i}>
                    <Link href="/#unsere-leistungen" style={{ color: '#EAF4FA', fontSize: '12.5px', textDecoration: 'none', fontWeight: 500 }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFD700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Kontakt
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Mail size={16} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ color: '#EAF4FA', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {COMPANY_INFO.contact.email}
                  </a>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Phone size={16} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ color: '#EAF4FA', fontSize: '13px' }}>
                    Tel: <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}>{COMPANY_INFO.contact.phoneDisplay}</a><br />
                    Mobil: <a href={`tel:${COMPANY_INFO.contact.mobile.replace(/\s+/g, '')}`} style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}>{COMPANY_INFO.contact.mobileDisplay}</a>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={16} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ color: '#EAF4FA', fontSize: '13px' }}>
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ color: '#EAF4FA', fontSize: '12.5px', opacity: 0.9 }}>
              © {new Date().getFullYear()} Goldy Solar GmbH. Alle Rechte vorbehalten.
            </span>
            <div style={{ display: 'flex', gap: '18px' }}>
              <Link href="/agb" style={{ color: '#CBE6F4', fontSize: '12.5px', textDecoration: 'none' }}>AGB</Link>
              <Link href="/impressum" style={{ color: '#CBE6F4', fontSize: '12.5px', textDecoration: 'none' }}>Impressum</Link>
              <Link href="/datenschutz" style={{ color: '#CBE6F4', fontSize: '12.5px', textDecoration: 'none' }}>Datenschutz</Link>
              <button 
                onClick={() => (window as any).openCookieSettings?.()} 
                style={{ background: 'none', border: 'none', color: '#CBE6F4', fontSize: '12.5px', cursor: 'pointer', padding: 0 }}
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
