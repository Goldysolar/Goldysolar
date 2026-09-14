import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import SolarHouseVisual from '@/components/icons/SolarHouseVisual';
import SolarCommercialVisual from '@/components/icons/SolarCommercialVisual';
import SolarUtilityVisual from '@/components/icons/SolarUtilityVisual';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Sun,
  Home,
  Factory,
  Wind,
  Check,
  TrendingUp,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* =========================================================================
          1. HERO SECTION
          Himmel mit Wolken, grüne Wiese, Windrad, modernes Branding
          ========================================================================= */}
      <section className="hero-wrapper">
        {/* Wiesen- & Landschafts-Hintergrund */}
        <div className="hero-landscape-bg">
          {/* Geometrische Windrad-Illustration rechts */}
          <div
            style={{
              position: 'absolute',
              right: '8%',
              bottom: '10%',
              width: '260px',
              height: '340px',
              opacity: 0.9,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Rotor-Nabe & Flügel */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '4px solid rgba(255, 255, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Wind size={72} color="#FFFFFF" />
            </div>
            {/* Windrad-Turm */}
            <div
              style={{
                width: '12px',
                height: '240px',
                background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.4) 100%)',
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              }}
            />
          </div>

          {/* Solar-Symbolik Visual */}
          <div
            style={{
              position: 'absolute',
              left: '42%',
              bottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#FFFFFF',
              zIndex: 5,
            }}
          >
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.6)',
                marginBottom: '8px',
              }}
            >
              <Sun size={52} color="#FFD700" />
            </div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1px',
                background: 'rgba(15, 71, 97, 0.7)',
                padding: '4px 12px',
                borderRadius: '9999px',
              }}
            >
              Zukunft & Nachhaltigkeit
            </span>
          </div>
        </div>

        {/* Hero Inhalt Links */}
        <div className="container" style={{ position: 'relative', zIndex: 6 }}>
          
          <div className="hero-content-inner">
            {/* Firmenname Prominent mit transparentem GmbH gleicher Schriftgröße */}
            <div className="hero-company-title">
              <span className="hero-company-name">
                GOLDY SOLAR
              </span>
              <span className="hero-company-suffix">
                GmbH
              </span>
            </div>

            {/* Haupt-Headline mit eleganten Trennpunkten */}
            <h1 className="hero-main-headline">
              Solaranlagen • Speicher • Montage
            </h1>

            {/* Untertitel */}
            <p className="hero-subtitle">
              Ihr Fachbetrieb für Photovoltaik
            </p>

            {/* 3 Punkte unter dem Untertitel mit zusätzlichem vertikalen Abstand */}
            <ul className="hero-features-list">
              <li className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Von der ersten Beratung bis zur fachgerechten Installation und Inbetriebnahme.</span>
              </li>
              <li className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Ob Eigenheim, Gewerbebetrieb oder Solarpark: Wir liefern zuverlässige Lösungen.</span>
              </li>
              <li className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Zuverlässige Lösungen für eine sichere und nachhaltige Energieversorgung.</span>
              </li>
            </ul>

            {/* Professioneller Hero CTA Button mit ausgewogenen Dimensionen */}
            <div>
              <Link href="/anfrage" className="hero-cta-button">
                <span>1 Minute Anfrage</span>
                <div className="hero-cta-icon-wrapper">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </Link>
            </div>
          </div>

          {/* Realistische Deutschland Solar-Statistik 2026 (Desktop Widget) */}
          <div className="hero-stat-widget-desktop">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  background: 'rgba(66, 133, 244, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <TrendingUp size={22} color="#4285F4" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '10.5px', color: '#8898AA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' }}>
                  Stand 2026
                </div>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#0E2841', lineHeight: 1 }}>
                  5,2 Mio.<span style={{ color: '#FFD700' }}>+</span> <span style={{ fontSize: '15px' }}>Anlagen</span>
                </div>
                <div style={{ fontSize: '11.5px', color: '#64748B', fontWeight: 500, marginTop: '4px' }}>
                  bei Haushalten & Unternehmen
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bogenförmige weiße Wölbung unten */}
        <div className="hero-bottom-curve" />
      </section>

      {/* =========================================================================
          2. UNSERE SERVICES FÜR (3 KUNDENSEGMENTE: Einfamilienhaus, C&I, Solar Park Ingenieur)
          ========================================================================= */}
      <section id="unsere-leistungen" style={{ padding: '70px 0 90px', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="category-pill">unsere Leistungen</span>
            <h2>Solarlösungen für jeden Bedarf</h2>
          </div>

          <div className="customer-service-grid">
            {/* 1. Karte: Einfamilienhaus */}
            <article className="customer-service-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/privatkunden" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
                <div className="customer-card-header" style={{ padding: 0, height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="/solar-haus.jpg"
                    alt="Photovoltaik Einfamilienhaus"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Overlay gradient */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,71,97,0.85) 0%, rgba(15,71,97,0.2) 60%, transparent 100%)' }} />
                  {/* Badge */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    <span style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' as const }}>
                      Privatkunden
                    </span>
                  </div>
                  {/* Title overlay */}
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#FFFFFF', marginTop: '2px' }}>Einfamilienhaus</h3>
                  </div>
                </div>
              </Link>
              <div className="customer-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <Link href="/privatkunden" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h4 className="customer-card-title" style={{ color: '#FFD700', cursor: 'pointer' }}>Photovoltaik für Ihr Zuhause</h4>
                  </Link>
                  <p className="customer-card-desc">
                    Senken Sie Ihre monatlichen Stromkosten dauerhaft um bis zu 80% mit hochmodernen
                    Glas-Glas Solarmodulen, Batteriespeichern und Wallbox-Ladelösungen.
                  </p>
                  <ul className="customer-card-features">
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Glas-Glas Module mit bis zu 30 Jahren Leistungsgarantie</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Hochvolt-Batteriespeicher mit Notstrom-Automatik</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Solares Überschussladen für E-Autos (Wallbox)</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Zählerschrankmodernisierung &amp; Netzanmeldung inklusive</span></li>
                  </ul>
                </div>
                <Link href="/anfrage" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', fontWeight: 800, borderRadius: '9999px', padding: '14px 24px', marginTop: '16px' }}>
                  <span>1 Minute Anfrage</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* 2. Karte: C&I (Commercial & Industrial) */}
            <article className="customer-service-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/gewerbe-industrie" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
                <div className="customer-card-header" style={{ padding: 0, height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="/solar-ci.jpg"
                    alt="Gewerbe und Industrie Solar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,71,97,0.85) 0%, rgba(15,71,97,0.2) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    <span style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' as const }}>
                      Gewerbe &amp; Industrie
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#FFFFFF', marginTop: '2px' }}>C&amp;I</h3>
                  </div>
                </div>
              </Link>
              <div className="customer-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <Link href="/gewerbe-industrie" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h4 className="customer-card-title" style={{ color: '#FFD700', cursor: 'pointer' }}>Solar &amp; Speicher für Unternehmen</h4>
                  </Link>
                  <p className="customer-card-desc">
                    Wirtschaftliche Großdachanlagen für Hallen, Betriebe und Logistikzentren zur gezielten
                    Lastspitzenkappung (Peak Shaving) und Verbesserung der CO2-Bilanz.
                  </p>
                  <ul className="customer-card-features">
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Große Dachanlagen (50 kWp – 2+ MWp) auf Trapez- &amp; Flachdach</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Gewerbespeicher zur Spitzenlastkappung (Peak Shaving)</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Solar-Carports &amp; Ladeinfrastruktur für Firmenfuhrparks</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Trafostationen, Wandlermessung &amp; Steuervorteile (AfA/IAB)</span></li>
                  </ul>
                </div>
                <Link href="/anfrage" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', fontWeight: 800, borderRadius: '9999px', padding: '14px 24px', marginTop: '16px' }}>
                  <span>1 Minute Anfrage</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* 3. Karte: Solar Park Ingenieur (EPC & Utility) */}
            <article className="customer-service-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/epc-utility" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
                <div className="customer-card-header" style={{ padding: 0, height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="/solar-park.jpg"
                    alt="Solar Park Utility Scale"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,40,65,0.85) 0%, rgba(14,40,65,0.2) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    <span style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' as const }}>
                      EPC &amp; Megawatt
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#FFFFFF', marginTop: '2px' }}>Solar Park Ingenieur</h3>
                  </div>
                </div>
              </Link>
              <div className="customer-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <Link href="/epc-utility" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h4 className="customer-card-title" style={{ color: '#FFD700', cursor: 'pointer' }}>EPC &amp; Utility Scale Großprojekte</h4>
                  </Link>
                  <p className="customer-card-desc">
                    Schlüsselfertiger Bau, Detail-Engineering und Mittelspannungsanbindung für Freiflächenanlagen,
                    Agri-PV und Megawatt-Solarparks unter deutscher Ingenieursleitung.
                  </p>
                  <ul className="customer-card-features">
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Projektentwicklung, Ertragsprognosen (PVsyst) &amp; Machbarkeit</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Turnkey EPC Generalunternehmer-Bau &amp; Bauüberwachung</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>Mittelspannungsanbindung nach VDE-AR-N 4110 / 4120</span></li>
                    <li><CheckCircle2 size={17} color="#4285F4" style={{ flexShrink: 0 }} /><span>SCADA Parkregler (EZA), Schutzprüfung &amp; 24/7 O&amp;M Service</span></li>
                  </ul>
                </div>
                <Link href="/anfrage" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', fontWeight: 800, borderRadius: '9999px', padding: '14px 24px', marginTop: '16px' }}>
                  <span>1 Minute Anfrage</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        style={{
          padding: '80px 0 90px',
          background: '#F8FAFC',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #E1DFDD',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="category-pill">
              WARUM GOLDY SOLAR
            </span>
            <h3 style={{ fontSize: 'clamp(12px, 3.8vw, 32px)', fontWeight: 900, lineHeight: 1.25, marginTop: '16px', color: '#FFD700', whiteSpace: 'nowrap' }}>
              Über 15 Jahre Erfahrung in PV-Technik
            </h3>
          </div>

          {/* 4 Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Alles aus einer Hand', desc: 'Von der Planung bis zur Inbetriebnahme.' },
              { title: 'Ingenieurwissen trifft Handwerk', desc: 'Praxisnahe Lösungen auf Basis langjähriger Erfahrung.' },
              { title: 'Deutschlandweite Projekte', desc: 'Flexible Einsatzmöglichkeiten im gesamten Bundesgebiet.' },
              { title: 'Höchste Qualitätsstandards', desc: 'Arbeiten nach aktuellen VDE-Richtlinien und den Anforderungen der Netzbetreiber.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px 28px',
                border: '1px solid #E1DFDD',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(255,215,0,0.15)', color: '#B28900',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <strong style={{ fontSize: '15px', color: '#0F4761', display: 'block', marginBottom: '4px' }}>{item.title}</strong>
                  <span style={{ fontSize: '13.5px', color: '#595959', lineHeight: 1.5 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* VDE Badge */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#0F4761', color: '#FFD700', fontWeight: 700,
              fontSize: '14px', padding: '10px 24px', borderRadius: '9999px',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              100% VDE-konforme Elektro- und Netzinstallationen
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
