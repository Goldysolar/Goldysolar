import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/common/PageHeroBanner';
import ContactCtaBox from '@/components/common/ContactCtaBox';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EPC & Solarparks | Goldy Solar GmbH',
  description: 'Engineering und Ausführung für Großprojekte, Solarparks, Agri-PV und Mittelspannungsanbindung.',
};

export default function EPCUtilityPage() {
  return (
    <div>
      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        category="EPC & GROSSPROJEKTE • UTILITY SCALE"
        title="Engineering & Ausführung für Großprojekte"
        subtitle="Goldy Solar unterstützt Projektentwickler, Generalübernehmer (EPC) und Investoren als hochqualifizierter technischer Partner und Nachunternehmer."
        trustTags={['Freiflächen & Solarparks', 'VDE-AR-N 4110 / 4120 Konform', 'Ingenieur-Bauleitung vor Ort']}
      />

      <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Top 1 Minute Anfrage CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <Link
            href="/anfrage"
            className="btn btn-gold"
            style={{
              padding: '16px 36px',
              fontSize: '16px',
              fontWeight: 800,
              borderRadius: '9999px',
              boxShadow: '0 8px 24px rgba(255, 215, 0, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>1 Minute Anfrage</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Dummy Content Section */}
        <div style={{ background: '#FFFFFF', padding: '40px 36px', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 6px 20px rgba(15, 71, 97, 0.05)', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0E2841', marginBottom: '16px' }}>
            Komplettlösungen für Solarparks und Freiflächenanlagen
          </h2>
          <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginBottom: '24px' }}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, nullam varius, turpis et commodo pharetra, est eros bibendum elit.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0E2841', marginBottom: '14px' }}>
            Technische Schwerpunkte & Nachunternehmerleistungen:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
              'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
              'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
            ].map((text, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="#4285F4" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: '#0E2841', fontWeight: 600 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 1 Minute Anfrage CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Link
            href="/anfrage"
            className="btn btn-gold"
            style={{
              padding: '16px 36px',
              fontSize: '16px',
              fontWeight: 800,
              borderRadius: '9999px',
              boxShadow: '0 8px 24px rgba(255, 215, 0, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>1 Minute Anfrage</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
