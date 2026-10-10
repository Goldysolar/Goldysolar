import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { AnfrageFormData } from '@/components/anfrage/types';

interface StepSuccessProps {
  formData: AnfrageFormData;
}

export default function StepSuccess({ formData }: StepSuccessProps) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.12)',
          color: '#10B981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)',
        }}
      >
        <CheckCircle2 size={46} />
      </div>

      <span className="category-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
        Erfolgreich übermittelt
      </span>

      <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0E2841', marginTop: '12px', marginBottom: '12px' }}>
        Vielen Dank für Ihre Anfrage, {formData.anrede} {formData.nachname}!
      </h2>

      <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '580px', margin: '0 auto 30px', lineHeight: 1.6 }}>
        Wir haben Ihre Angaben erfolgreich erhalten. Unser leitender Ingenieur{' '}
        <strong style={{ color: '#0E2841' }}>Sabah Altaweel</strong> prüft Ihre Dachdaten und setzt sich innerhalb von{' '}
        <strong style={{ color: '#4285F4' }}>24 Stunden</strong> mit Ihrer kostenfreien Auswertung bei Ihnen in Verbindung.
      </p>

      {/* Summary Box */}
      <div
        style={{
          background: '#F8FAFC',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #E2E8F0',
          textAlign: 'left',
          maxWidth: '540px',
          margin: '0 auto 32px',
        }}
      >
        <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0E2841', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Ihre übermittelten Projektdaten:
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13.5px' }}>
          <div>
            <span style={{ color: '#64748B' }}>Gebäude:</span> <strong>{formData.gebauedeTyp || '—'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748B' }}>Dachform:</span> <strong>{formData.dachform || '—'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748B' }}>Eindeckung:</span> <strong>{formData.dacheindeckung || '—'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748B' }}>Dachfläche:</span> <strong>{formData.dachflaeche || '—'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748B' }}>Eigentümer:</span> <strong>{formData.eigentuemer || '—'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748B' }}>Standort:</span> <strong>{formData.plzOrt || '—'}</strong>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <Link href="/" className="btn btn-primary" style={{ padding: '14px 28px' }}>
          <span>Zurück zur Startseite</span>
        </Link>
        <a
          href="https://wa.me/4915731063775"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ background: '#4285F4', color: '#FFFFFF', padding: '14px 28px', border: 'none' }}
        >
          <span>Direkt WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
}
