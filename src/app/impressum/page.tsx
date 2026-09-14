import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Goldy Solar GmbH',
};

export default function ImpressumPage() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '40px', color: '#0F4761' }}>IMPRESSUM</h1>
      
      <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#404040' }}>
        <p style={{ marginBottom: '20px' }}><strong>Angaben gemäß § 5 TMG</strong></p>
        
        <p style={{ marginBottom: '20px' }}>
          Goldy Solar GmbH<br />
          Rudolf-Diesel-Straße 11<br />
          69115 Heidelberg<br />
          Deutschland
        </p>

        <p style={{ marginBottom: '20px' }}>
          Geschäftsführer: Sabah Altaweel<br />
          Telefon: +49 6221 502 6666<br />
          E-Mail: info@goldysolar.de
        </p>

        <p style={{ marginBottom: '20px' }}>
          Handelsregister: HRB 750394, Amtsgericht Mannheim<br />
          USt-IdNr.: DE367592744
        </p>

        <p style={{ marginBottom: '20px' }}>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
          Sabah Altaweel<br />
          Rudolf-Diesel-Straße 11<br />
          69115 Heidelberg
        </p>
      </div>
    </div>
  );
}
