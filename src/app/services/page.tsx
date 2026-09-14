import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeroBanner from '@/components/common/PageHeroBanner';
import ProjectCard from '@/components/common/ProjectCard';
import ContactCtaBox from '@/components/common/ContactCtaBox';
import MockBadge from '@/components/common/MockBadge';
import { CORE_PROJECTS, SERVICE_BENTO_CARDS } from '@/data/projectsData';
import {
  Sun,
  BatteryCharging,
  Home,
  Zap,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Building2,
  Factory,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers,
  Sparkles,
  ChevronRight,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service & Leistungen | Goldy Solar GmbH',
  description:
    'Komplettes Leistungsspektrum der Goldy Solar GmbH: Privatkunden-PV, Gewerbe & Industrie Solaranlagen sowie EPC & Utility Services.',
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Sun: <Sun size={28} />,
    BatteryCharging: <BatteryCharging size={28} />,
    Home: <Home size={28} />,
    Zap: <Zap size={28} />,
    Cpu: <Cpu size={28} />,
  };

  return (
    <div>
      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        category="LEISTUNGEN & SERVICES"
        title="Ganzheitliche Solarlösungen"
        subtitle="Von privaten Aufdachanlagen über gewerbliche Speicher bis hin zu schlüsselfertigen Megawatt-Freiflächenparks."
        trustTags={['Privat & Gewerbe (C&I)', 'EPC & Solarparks', '100% VDE Konform']}
      />

      <div className="container" style={{ paddingTop: '40px', paddingBottom: '90px' }}>
        {/* =========================================================================
            QUICK JUMP NAVIGATION TABS
            ========================================================================= */}
        <nav className="service-jump-nav" aria-label="Schnellnavigation Leistungen">
          <a href="#privatkunden" className="service-jump-btn">
            <Home size={16} />
            <span>1. Privatkunden</span>
          </a>
          <a href="#gewerbe-industrie" className="service-jump-btn">
            <Building2 size={16} />
            <span>2. Gewerbe & Industrie</span>
          </a>
          <a href="#epc-utility" className="service-jump-btn">
            <Factory size={16} />
            <span>3. EPC & Utility Services</span>
          </a>
          <a href="#technologien" className="service-jump-btn">
            <Sparkles size={16} />
            <span>Technologien & Bento</span>
          </a>
          <a href="#projekte" className="service-jump-btn">
            <Layers size={16} />
            <span>Ausgewählte Projekte</span>
          </a>
        </nav>

        {/* =========================================================================
            SEKTION 1: PRIVATKUNDEN (EIGENHEIM & MEHRFAMILIENHÄUSER)
            ========================================================================= */}
        <section id="privatkunden" className="service-segment-block">
          <div className="service-segment-header">
            <span className="category-pill">01. PRIVATKUNDEN</span>
            <h2>Photovoltaik für Ihr Zuhause (Ein- & Mehrfamilienhäuser)</h2>
            <p>
              Senken Sie Ihre monatlichen Stromkosten um bis zu 80% und machen Sie sich dauerhaft unabhängig
              von steigenden Energiepreisen. Wir liefern schlüsselfertige High-End Solaranlagen inklusive
              Batteriespeicher, Wallbox, Zählerschrankmodernisierung und bürokratischer Netzanmeldung.
            </p>
          </div>

          {/* 6 Feature-Karten für Privatkunden */}
          <div className="grid-3-col" style={{ gap: '20px' }}>
            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Sun size={24} />
                </div>
                <h4>High-End Solarmodule</h4>
                <p>
                  Neueste Glas-Glas Halbzellen-Module mit bis zu 30 Jahren linearer Leistungsgarantie
                  und maximalem Ertrag auch bei diffuser Einstrahlung.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <BatteryCharging size={24} />
                </div>
                <h4>Intelligente Batteriespeicher</h4>
                <p>
                  Modulare Hochvolt-Speichersysteme (5 bis 30+ kWh) mit automatischer Notstrom- und
                  Ersatzstromumschaltung bei Netzausfall.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Zap size={24} />
                </div>
                <h4>Wallbox & Überschussladen</h4>
                <p>
                  Laden Sie Ihr Elektrofahrzeug direkt und 100% mit eigenem Sonnenstrom durch
                  dynamische PV-Überschusssteuerung.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Home size={24} />
                </div>
                <h4>Smart Home & Wärmepumpe</h4>
                <p>
                  SG-Ready Anbindung und intelligentes HEMS zur automatischen thermischen Speicherung
                  von Solarstrom in Wärmepumpe & Warmwasser.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <h4>Zählerschrankumbau nach TAB</h4>
                <p>
                  Fachgerechte Zählerschrankmodernisierung und normkonformer APZ/ÜSS-Einbau
                  direkt durch unsere eingetragenen Elektromeister.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <CheckCircle2 size={24} />
                </div>
                <h4>Komplette Netzanmeldung</h4>
                <p>
                  Wir übernehmen den gesamten bürokratischen Prozess mit dem Netzbetreiber,
                  die Eintragung im Marktstammdatenregister und die VDE-Inbetriebnahme.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights-Balken */}
          <div className="service-highlight-bar">
            <div className="service-highlight-item">
              <TrendingUp size={20} color="#FFD700" />
              <span>Bis zu 80% Stromautarkie</span>
            </div>
            <div className="service-highlight-item">
              <Award size={20} color="#FFD700" />
              <span>25–30 Jahre Leistungsgarantie</span>
            </div>
            <div className="service-highlight-item">
              <ShieldCheck size={20} color="#FFD700" />
              <span>100% schlüsselfertig aus Meisterhand</span>
            </div>
          </div>

          {/* Aktionen */}
          <div className="service-segment-actions">
            <Link href="/kontakt" className="btn btn-primary">
              <span>Privatkunden-Angebot anfordern</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/privatkunden" className="btn btn-outline-blue">
              <span>Details zu Privatkunden anzeigen</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SEKTION 2: GEWERBE & INDUSTRIE (C&I LÖSUNGEN)
            ========================================================================= */}
        <section id="gewerbe-industrie" className="service-segment-block">
          <div className="service-segment-header">
            <span className="category-pill">02. GEWERBE & INDUSTRIE</span>
            <h2>Photovoltaik & Speicher für Unternehmen & Hallendächer</h2>
            <p>
              Betriebskosten senken, CO2-Bilanz optimieren und Unabhängigkeit vom Strommarkt sichern.
              Wir entwickeln wirtschaftliche Großdachanlagen, Gewerbespeicher zur Lastspitzenkappung
              (Peak Shaving) und intelligente Ladeinfrastruktur für Ihren Firmenfuhrpark.
            </p>
          </div>

          {/* 6 Feature-Karten für Gewerbe */}
          <div className="grid-3-col" style={{ gap: '20px' }}>
            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Building2 size={24} />
                </div>
                <h4>Große Dachanlagen (50 kWp – 2+ MWp)</h4>
                <p>
                  Optimale Auslastung von Trapezblech-, Flach- und Bitumendächern für Produktionsbetriebe,
                  Lagerhallen, Logistikzentren und landwirtschaftliche Gebäude.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <TrendingUp size={24} />
                </div>
                <h4>Gewerbespeicher & Peak Shaving</h4>
                <p>
                  Gezielte Reduktion teurer Strom-Lastspitzen zur drastischen Senkung der Netzentgelte
                  sowie unterbrechungsfreie Absicherung kritischer Betriebsprozesse.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Zap size={24} />
                </div>
                <h4>Solar-Carports & Fuhrparkladen</h4>
                <p>
                  Überdachung von Firmen- und Kundenparkplätzen mit integrierter PV-Erzeugung
                  und intelligent gesteuerten Schnellladepunkten für die E-Flotte.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <h4>Trafostationen & Wandlermessung</h4>
                <p>
                  Projektierung und Errichtung kundeneigener Trafostationen, Wandlerschränke und
                  Schutztechnik nach VDE-AR-N 4110 für reibungslosen Mittelspannungsanschluss.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Award size={24} />
                </div>
                <h4>Wirtschaftlichkeit & Steuer (AfA/IAB)</h4>
                <p>
                  Schnelle Amortisation (bereits ab 4 bis 7 Jahren), volle steuerliche Abschreibungsmöglichkeiten
                  sowie attraktive Mieterstrom- und Pachtmodelle.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Sparkles size={24} />
                </div>
                <h4>ESG-Reporting & Dekarbonisierung</h4>
                <p>
                  Messbare Senkung des Corporate Carbon Footprint und Erfüllung aller europäischen
                  CSRD- und Nachhaltigkeitsanforderungen für Ihr Unternehmen.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights-Balken */}
          <div className="service-highlight-bar">
            <div className="service-highlight-item">
              <TrendingUp size={20} color="#FFD700" />
              <span>Bis zu 60% Senkung der Energiekosten</span>
            </div>
            <div className="service-highlight-item">
              <Building2 size={20} color="#FFD700" />
              <span>Montage im laufenden Betriebsablauf</span>
            </div>
            <div className="service-highlight-item">
              <ShieldCheck size={20} color="#FFD700" />
              <span>VDE-AR-N 4110 Mittelspannungskonform</span>
            </div>
          </div>

          {/* Aktionen */}
          <div className="service-segment-actions">
            <Link href="/kontakt" className="btn btn-primary">
              <span>Gewerbeprojekt unverbindlich anfragen</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/gewerbe-industrie" className="btn btn-outline-blue">
              <span>Details zu Gewerbe & Industrie anzeigen</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SEKTION 3: EPC & UTILITY SERVICES (MEGAVATT & FREIFLÄCHEN)
            ========================================================================= */}
        <section id="epc-utility" className="service-segment-block">
          <div className="service-segment-header">
            <span className="category-pill">03. EPC & UTILITY SERVICES</span>
            <h2>EPC & Utility Services (Freiflächen & Solarparks)</h2>
            <p>
              Vollumfängliche Generalunternehmer- und Ingenieursleistungen für Freiflächenanlagen,
              Agri-PV, Mittelspannungsanbindungen und Solarparks im Megawatt-Bereich. Wir übernehmen
              die gesamte Wertschöpfungskette von der Auslegung bis zur schlüsselfertigen Netzübergabe.
            </p>
          </div>

          {/* 6 Feature-Karten für EPC */}
          <div className="grid-3-col" style={{ gap: '20px' }}>
            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Cpu size={24} />
                </div>
                <h4>Projektentwicklung & Ertragssimulation</h4>
                <p>
                  Boden- und Verschattungsgutachten, PVsyst Ertragsprognosen, Blendgutachten
                  und technische Machbarkeitsstudien auf höchstem Niveau.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Layers size={24} />
                </div>
                <h4>Detail-Engineering & DC/AC-Design</h4>
                <p>
                  Präzise Kabeldimensionierung, Strangplanoptimierung, Schutzkonzepte,
                  Fundament- und Gestellstatik sowie Trassenplanung.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Factory size={24} />
                </div>
                <h4>Schlüsselfertiger Bau (Turnkey EPC)</h4>
                <p>
                  Komplette Bauüberwachung, Ramm- und Gestellmontage, DC-Verkabelung,
                  Zentral-/Stringwechselrichter-Montage und Einzäunung.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Zap size={24} />
                </div>
                <h4>Mittelspannung & 20/110 kV Trafostationen</h4>
                <p>
                  Planung, Lieferung und Anschluss eigener Umspannwerke und Trafostationen
                  gemäß VDE-AR-N 4110 / 4120 mit zertifizierter Schutztechnik.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <Sparkles size={24} />
                </div>
                <h4>SCADA & Parkregler (EZA)</h4>
                <p>
                  Integration normkonformer EZA-Parkregler, Fernwirktechnik für Übertragungsnetzbetreiber,
                  Direktvermarktungsschnittstellen und 24/7 Leitstandüberwachung.
                </p>
              </div>
            </div>

            <div className="service-feature-card">
              <div>
                <div className="service-feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <h4>O&M & Inbetriebnahmeservice</h4>
                <p>
                  VDE-Prüfprotokolle (DIN EN 62446), Kennlinien- und Thermografiemessungen
                  per Drohne sowie langfristige Wartung und Ertragssicherung.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights-Balken */}
          <div className="service-highlight-bar">
            <div className="service-highlight-item">
              <Factory size={20} color="#FFD700" />
              <span>Megawatt-Kompetenz (1 MWp – 100+ MWp)</span>
            </div>
            <div className="service-highlight-item">
              <ShieldCheck size={20} color="#FFD700" />
              <span>VDE-AR-N 4110 / 4120 Zertifiziert</span>
            </div>
            <div className="service-highlight-item">
              <Award size={20} color="#FFD700" />
              <span>Eigene Bauleiter & Elektroingenieure</span>
            </div>
          </div>

          {/* Aktionen */}
          <div className="service-segment-actions">
            <Link href="/kontakt" className="btn btn-primary">
              <span>EPC-Großprojekt anfragen</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/epc-utility" className="btn btn-outline-blue">
              <span>Details zu EPC & Utility anzeigen</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SEKTION 4: 5ER BENTO GRID (TECHNOLOGIEN)
            ========================================================================= */}
        <section id="technologien" style={{ marginTop: '70px', marginBottom: '80px', scrollMarginTop: '100px' }}>
          <div className="section-header">
            <span className="category-pill">SPECIALIZED SERVICES</span>
            <h2>Innovative Energy Solutions</h2>
            <p>
              Präzise abgestimmte Komponenten führender Premiumhersteller garantieren höchste Erträge,
              Sicherheit und überlegene Langlebigkeit.
            </p>
          </div>

          <div className="bento-grid">
            {/* Karte 1: Solar Panel */}
            <div className="bento-card bento-card-ocean">
              <div>
                <div className="bento-icon">{iconMap[SERVICE_BENTO_CARDS[0].iconName]}</div>
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>
                  {SERVICE_BENTO_CARDS[0].tag}
                </span>
                <h3>{SERVICE_BENTO_CARDS[0].title}</h3>
                <p>{SERVICE_BENTO_CARDS[0].description}</p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <a href="#privatkunden" className="btn btn-outline-white" style={{ padding: '8px 20px', fontSize: '13px' }}>
                  Privatkunden PV
                </a>
              </div>
            </div>

            {/* Karte 2: Hybrid Panel */}
            <div className="bento-card bento-card-royal">
              <div>
                <div className="bento-icon">{iconMap[SERVICE_BENTO_CARDS[1].iconName]}</div>
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>
                  {SERVICE_BENTO_CARDS[1].tag}
                </span>
                <h3>{SERVICE_BENTO_CARDS[1].title}</h3>
                <p>{SERVICE_BENTO_CARDS[1].description}</p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <a href="#privatkunden" className="btn btn-outline-white" style={{ padding: '8px 20px', fontSize: '13px' }}>
                  Speichersysteme
                </a>
              </div>
            </div>

            {/* Karte 3: Eco Smart Home */}
            <div className="bento-card bento-card-deep-slate bento-card-tall">
              <div>
                <div className="bento-icon">{iconMap[SERVICE_BENTO_CARDS[2].iconName]}</div>
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>
                  {SERVICE_BENTO_CARDS[2].tag}
                </span>
                <h3>{SERVICE_BENTO_CARDS[2].title}</h3>
                <p style={{ marginBottom: '20px' }}>{SERVICE_BENTO_CARDS[2].description}</p>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px', fontSize: '13px', lineHeight: 1.6 }}>
                  ✓ Dynamisches Überschussladen<br />
                  ✓ SG-Ready Wärmepumpensteuerung<br />
                  ✓ Intelligentes Energiemanagement
                </div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link href="/kontakt" className="btn btn-gold" style={{ padding: '10px 22px', fontSize: '14px' }}>
                  Smart Home anfragen
                </Link>
              </div>
            </div>

            {/* Karte 4: Hybrid System Construction */}
            <div className="bento-card bento-card-sky bento-card-wide">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ maxWidth: '480px' }}>
                  <div className="bento-icon">{iconMap[SERVICE_BENTO_CARDS[3].iconName]}</div>
                  <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {SERVICE_BENTO_CARDS[3].tag}
                  </span>
                  <h3>{SERVICE_BENTO_CARDS[3].title}</h3>
                  <p>{SERVICE_BENTO_CARDS[3].description}</p>
                </div>
                <a href="#epc-utility" className="btn btn-outline-white" style={{ alignSelf: 'flex-start' }}>
                  Elektro-Engineering
                </a>
              </div>
            </div>

            {/* Karte 5: Solar Hybrid */}
            <div className="bento-card bento-card-ocean">
              <div>
                <div className="bento-icon">{iconMap[SERVICE_BENTO_CARDS[4].iconName]}</div>
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>
                  {SERVICE_BENTO_CARDS[4].tag}
                </span>
                <h3>{SERVICE_BENTO_CARDS[4].title}</h3>
                <p>{SERVICE_BENTO_CARDS[4].description}</p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <a href="#epc-utility" className="btn btn-outline-white" style={{ padding: '8px 20px', fontSize: '13px' }}>
                  EPC Leistungen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SEKTION 5: AUSGEWÄHLTE PROJEKTE 4ER GRID
            ========================================================================= */}
        <section id="projekte" style={{ marginTop: '60px', marginBottom: '80px', scrollMarginTop: '100px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <span className="category-pill">SELECTED PROJECTS</span>
              <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0E2841' }}>
                Ausgewählte Projekte
              </h2>
            </div>
            <Link href="/projekte" className="btn btn-primary">
              <span>Alle Projekte ansehen</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="projects-grid">
            {CORE_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact CTA Box */}
        <ContactCtaBox
          title="Individuelle Lösung für Ihr Vorhaben?"
          subtitle="Ob Photovoltaik fürs Eigenheim, Gewerbespeicher, Zählerschrankumbau oder schlüsselfertiger Solarpark: Wir erstellen Ihr maßgeschneidertes Konzept."
        />
      </div>
    </div>
  );
}
