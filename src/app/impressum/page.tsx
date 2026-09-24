import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Goldy Solar GmbH',
  description: 'Impressum und rechtliche Hinweise der Goldy Solar GmbH',
};

export default function ImpressumPage() {
  return (
    <div className="container" style={{ paddingTop: '80px', paddingBottom: '100px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '40px', color: '#0F4761' }}>Impressum</h1>
      
      <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#404040' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG):
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Goldy Solar GmbH<br />
          Rudolf-Diesel-Straße 11<br />
          69115 Heidelberg<br />
          Deutschland
        </p>

        <p style={{ marginBottom: '20px' }}>
          <strong>Vertreten durch den Geschäftsführer:</strong><br />
          Sabah Altaweel
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Kontakt:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Telefon: +49 6221 502 6666<br />
          E-Mail: info@goldysolar.de
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Registereintrag:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Mannheim<br />
          Registernummer: HRB 750394
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Umsatzsteuer-Identifikationsnummer:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz (UStG):<br />
          DE367592744
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV):
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Sabah Altaweel<br />
          Rudolf-Diesel-Straße 11<br />
          69115 Heidelberg
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          EU-Streitbeilegung:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#4285F4', textDecoration: 'underline' }}>https://ec.europa.eu/consumers/odr/</a><br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Verbraucherstreitbeilegung / Universalschlichtungsstelle:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
