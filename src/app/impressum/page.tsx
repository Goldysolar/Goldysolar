import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata: Metadata = {
  title: 'Impressum | Goldy Solar GmbH',
  description: 'Impressum und gesetzliche Anbieterkennzeichnung der Goldy Solar GmbH nach § 5 DDG.',
  alternates: {
    canonical: 'https://goldysolar.de/impressum',
  },
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
          {COMPANY_INFO.name}<br />
          {COMPANY_INFO.address.street}<br />
          {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
          {COMPANY_INFO.address.country}
        </p>

        <p style={{ marginBottom: '20px' }}>
          <strong>Vertreten durch den Geschäftsführer:</strong><br />
          {COMPANY_INFO.ceo}
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Kontakt:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Telefon: {COMPANY_INFO.contact.phone}<br />
          E-Mail: {COMPANY_INFO.contact.email}
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Registereintrag:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Eintragung im Handelsregister.<br />
          Registergericht: {COMPANY_INFO.legal.register}
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Umsatzsteuer-Identifikationsnummer:
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz (UStG):<br />
          {COMPANY_INFO.legal.vatId}
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginTop: '30px', marginBottom: '12px', color: '#0E2841' }}>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV):
        </h2>
        <p style={{ marginBottom: '20px' }}>
          {COMPANY_INFO.legal.mstvResponsible}
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
