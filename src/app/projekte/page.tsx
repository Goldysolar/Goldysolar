'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Zap, Award, Users, Building2, Sun, ArrowRight, Clock } from 'lucide-react';

/* ─────────────────────────────────────────────
   Echte Projektfotos aus dem Upload
   ───────────────────────────────────────────── */
const projektBilder = [
  {
    id: 1,
    src: '/projekt-1.jpg',
    alt: 'Wechselrichter-Installation – Übersicht',
    titel: 'Wechselrichter-Installation',
    beschreibung: 'Fachgerechte Installation und Verkabelung von SMA Sunny Tripower Wechselrichtern.',
    tag: 'Installation',
    tagColor: '#4285F4',
  },
  {
    id: 2,
    src: '/projekt-2.jpg',
    alt: 'SMA Wechselrichter – Nahaufnahme Reihe',
    titel: 'SMA Wechselrichter – Serieninstallation',
    beschreibung: 'Parallele Installation mehrerer SMA Wechselrichter mit sauber geführter Verkabelung gemäß VDE-Standard.',
    tag: 'Installation',
    tagColor: '#4285F4',
  },
  {
    id: 3,
    src: '/projekt-3.jpg',
    alt: 'Einzelner SMA Wechselrichter montiert',
    titel: 'Einzelwechselrichter – Präzisionsausführung',
    beschreibung: 'Einzelinstallation eines SMA Sunny Tripower mit professionellem Kabelmanagement und Schutzklasse IP65.',
    tag: 'Präzision',
    tagColor: '#0E2841',
  },
  {
    id: 4,
    src: '/projekt-4.jpg',
    alt: 'DC-Verkabelung mit MC4-Steckern beschriftet',
    titel: 'Verkabelung & Planung',
    beschreibung: 'Präzise Stringverkabelung mit beschrifteten MC4-Steckverbindern – vollständig dokumentiert und normkonform.',
    tag: 'Planung',
    tagColor: '#B28900',
  },
  {
    id: 5,
    src: '/projekt-5.jpg',
    alt: 'SMA Sunny Tripower – Wechselrichter 1 aktiv',
    titel: 'SMA Sunny Tripower – Aktivierung',
    beschreibung: 'Erfolgreiche Aktivierung eines SMA Sunny Tripower Wechselrichters mit aktivem Statusdisplay (grüne LED).',
    tag: 'Aktivierung',
    tagColor: '#16A34A',
  },
  {
    id: 7,
    src: '/projekt-7.jpg',
    alt: 'Solaranlage',
    titel: 'Solaranlage',
    beschreibung: 'Großflächige Installation einer Photovoltaikanlage für maximale Energieausbeute.',
    tag: 'Solaranlage',
    tagColor: '#B28900',
  },
  {
    id: 8,
    src: '/projekt-8.jpg',
    alt: 'Wechselrichter und Batteriespeicher',
    titel: 'Speicher-Lösung',
    beschreibung: 'Kompakte und effiziente Kombination aus Wechselrichter und leistungsstarkem Batteriespeicher.',
    tag: 'Speicher',
    tagColor: '#4285F4',
  },
  {
    id: 9,
    src: '/projekt-9.jpg',
    alt: 'Dachinstallation',
    titel: 'Dachinstallation – Schrägdach',
    beschreibung: 'Fachgerechte Installation von Solarmodulen auf einem klassischen Schrägdach (Ziegel).',
    tag: 'Dachinstallation',
    tagColor: '#0E2841',
  },
  {
    id: 10,
    src: '/projekt-10.jpg',
    alt: 'Dachinstallation mit Spezialtechnik',
    titel: 'Dachinstallation – Spezialtechnik-Einsatz',
    beschreibung: 'Sichere und effiziente Installation von Solarmodulen mit Hilfe professioneller Spezialtechnik.',
    tag: 'Installation',
    tagColor: '#16A34A',
  },
];

/* ─────────────────────────────────────────────
   Statistik-Zahlen
   ───────────────────────────────────────────── */
const stats = [
  { icon: <Sun size={22} color="#FFD700" />, wert: '15+', label: 'Jahre Erfahrung' },
  { icon: <Building2 size={22} color="#4285F4" />, wert: '200+', label: 'Realisierte Projekte' },
  { icon: <Zap size={22} color="#FFD700" />, wert: '5 MWp+', label: 'Installierte Leistung' },
  { icon: <Award size={22} color="#4285F4" />, wert: '100%', label: 'VDE-Konformität' },
];

export default function ProjectsPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════
          FOTO-GALERIE
          ═══════════════════════════════════════════ */}
      <section style={{ padding: '70px 0 80px' }}>
        <div className="container">

          {/* Abschnitts-Überschrift */}
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span className="category-pill">
              Unsere Arbeiten
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontWeight: 900,
                color: '#0E2841',
                lineHeight: 1.25,
                marginBottom: '10px',
              }}
            >
              Jedes Projekt – ein Zeichen{' '}
              <span style={{ color: '#FFD700' }}>unserer Qualität</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
              Alle Anlagen wurden nach aktuellen VDE-Richtlinien und höchsten Qualitätsstandards realisiert.
            </p>
          </div>

          {/* ── Foto-Grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {projektBilder.map((bild) => (
              <article
                key={bild.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(14, 40, 65, 0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(14, 40, 65, 0.14)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(14, 40, 65, 0.07)';
                }}
              >
                {/* Foto */}
                <div
                  style={{
                    position: 'relative',
                    height: '230px',
                    overflow: 'hidden',
                    background: '#E2E8F0',
                  }}
                >
                  <img
                    src={bild.src}
                    alt={bild.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                  
                  {/* Gradient-Overlay unten */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '70px',
                      background: 'linear-gradient(to top, rgba(14,40,65,0.55) 0%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Karten-Inhalt */}
                <div style={{ padding: '22px 22px 24px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 800,
                      color: '#0F4761',
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {bild.titel}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#64748B',
                      lineHeight: 1.6,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {bild.beschreibung}
                  </p>
                  {/* VDE-Hinweis */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '8px',
                      padding: '8px 12px',
                      background: '#F0FDF4',
                      borderRadius: '8px',
                      border: '1px solid #BBF7D0',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#16A34A' }}>VDE-konforme Ausführung</span>
                  </div>
                </div>
              </article>
            ))}

            {/* Projekte in Bearbeitung - Card */}
            <article
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px dashed #CBD5E1',
                boxShadow: '0 4px 20px rgba(14, 40, 65, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px 30px',
                minHeight: '400px',
                transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(14, 40, 65, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(14, 40, 65, 0.04)';
              }}
            >
              <div
                style={{
                  background: '#F1F5F9',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Clock size={32} color="#64748B" />
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#0F4761',
                  margin: '0 0 10px 0',
                }}
              >
                Projekte in Bearbeitung
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#64748B',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Weitere spannende Projekte befinden sich aktuell in der Umsetzung und werden bald hier veröffentlicht.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* 1 Minute Anfrage Button */}
      <div className="container" style={{ paddingBottom: '100px', display: 'flex', justifyContent: 'center' }}>
        <Link 
          href="/anfrage" 
          className="btn btn-gold" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '10px', 
            fontSize: '16px', 
            fontWeight: 800, 
            borderRadius: '9999px', 
            padding: '16px 36px',
            boxShadow: '0 4px 14px rgba(255, 215, 0, 0.3)'
          }}
        >
          <span>1 Minute Anfrage</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

