import React from 'react';
import type { Metadata } from 'next';
import PageHeroBanner from '@/components/common/PageHeroBanner';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Goldy Solar GmbH Heidelberg',
  description: 'Datenschutzerklärung der Goldy Solar GmbH.',
};

export default function DatenschutzPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHeroBanner
        category="RECHTLICHES"
        title="Datenschutzerklärung"
        subtitle="Informationen zur Erhebung und Verarbeitung Ihrer Daten."
        trustTags={[]}
        show3DIcons={false}
      />

      <div className="container" style={{ paddingTop: '50px', paddingBottom: '90px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)' }}>
          {/* HIER KÖNNEN SIE IHREN ECHTEN DATENSCHUTZ-TEXT EINFÜGEN */}
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0E2841', marginBottom: '20px' }}>1. Datenschutz auf einen Blick</h2>
          <p style={{ color: '#595959', lineHeight: 1.6 }}>Hier kommt der echte Datenschutz-Text hin...</p>
        </div>
      </div>
    </div>
  );
}
