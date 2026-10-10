import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { AnfrageFormData } from '@/components/anfrage/types';

interface Step6ContactFormProps {
  formData: AnfrageFormData;
  onChange: (field: keyof AnfrageFormData, value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onPrev: () => void;
  isSubmitting: boolean;
  errorMessage: string;
}

export default function Step6ContactForm({
  formData,
  onChange,
  onSubmit,
  onPrev,
  isSubmitting,
  errorMessage,
}: Step6ContactFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <span
          className="category-pill"
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            color: '#059669',
            borderColor: 'rgba(16, 185, 129, 0.3)',
            padding: '4px 14px',
            fontSize: '12px',
            fontWeight: 800,
          }}
        >
          ✓ Fast geschafft • Letzter Schritt
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841', marginTop: '10px' }}>
          Wohin dürfen wir Ihre kostenlose Auswertung senden?
        </h2>
        <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
          Unser Ingenieurteam unter Leitung von Sabah Altaweel erstellt Ihre individuelle Ertragssimulation innerhalb von 24 Stunden.
        </p>
      </div>

      {/* Error Box */}
      {errorMessage && (
        <div style={{ background: '#FEE2E2', border: '1px solid #F87171', color: '#B91C1C', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', fontSize: '14px', fontWeight: 600 }}>
          {errorMessage}
        </div>
      )}

      {/* Form Fields Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        {/* Anrede */}
        <div>
          <label htmlFor="form-anrede" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Anrede</label>
          <select
            id="form-anrede"
            value={formData.anrede}
            onChange={(e) => onChange('anrede', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841', background: '#FFFFFF' }}
          >
            <option value="Privat">Privat</option>
            <option value="Firma">Firma</option>
          </select>
        </div>

        {/* Vorname */}
        <div>
          <label htmlFor="form-vorname" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Vorname *</label>
          <input
            id="form-vorname"
            type="text"
            required
            placeholder="Max"
            value={formData.vorname}
            onChange={(e) => onChange('vorname', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
          />
        </div>

        {/* Nachname */}
        <div>
          <label htmlFor="form-nachname" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Nachname *</label>
          <input
            id="form-nachname"
            type="text"
            required
            placeholder="Mustermann"
            value={formData.nachname}
            onChange={(e) => onChange('nachname', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
          />
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="form-email" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>E-Mail-Adresse *</label>
          <input
            id="form-email"
            type="email"
            required
            placeholder="max@beispiel.de"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
          />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="form-telefon" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Telefonnummer (optional)</label>
          <input
            id="form-telefon"
            type="tel"
            placeholder="+49 170 1234567"
            value={formData.telefon}
            onChange={(e) => onChange('telefon', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
          />
        </div>

        {/* PLZ & Ort */}
        <div>
          <label htmlFor="form-plz" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>PLZ & Ort (optional)</label>
          <input
            id="form-plz"
            type="text"
            placeholder="69115 Heidelberg"
            value={formData.plzOrt}
            onChange={(e) => onChange('plzOrt', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
          />
        </div>
      </div>

      {/* Notizen */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="form-nachricht" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>
          Besondere Wünsche oder Notizen (optional)
        </label>
        <textarea
          id="form-nachricht"
          rows={3}
          placeholder="z.B. Interesse an Wallbox, Batteriespeicher oder Notstromversorgung..."
          value={formData.nachricht}
          onChange={(e) => onChange('nachricht', e.target.value)}
          style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841', resize: 'vertical' }}
        />
      </div>

      {/* Honeypot field (hidden from humans, traps automated spam bots) */}
      <div style={{ position: 'absolute', opacity: 0, zIndex: -1, pointerEvents: 'none', height: 0, overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input
          id="website_url"
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_url || ''}
          onChange={(e) => onChange('website_url', e.target.value)}
        />
      </div>

      {/* Checkbox Datenschutz */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '28px' }}>
        <input
          type="checkbox"
          id="privacy"
          checked={formData.privacyAccepted}
          onChange={(e) => onChange('privacyAccepted', e.target.checked)}
          style={{ width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer', accentColor: '#4285F4' }}
        />
        <label htmlFor="privacy" style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5, cursor: 'pointer' }}>
          Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen gespeichert und verarbeitet werden. Weitere Hinweise in der{' '}
          <Link href="/datenschutz" target="_blank" style={{ color: '#4285F4', fontWeight: 700, textDecoration: 'underline' }}>
            Datenschutzerklärung
          </Link>
          .
        </label>
      </div>

      {/* Submit Button & Back Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <button
          type="button"
          onClick={onPrev}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
        >
          <ArrowLeft size={16} />
          <span>Zurück</span>
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-gold"
          style={{
            padding: '16px 36px',
            fontSize: '16px',
            fontWeight: 800,
            borderRadius: '9999px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? (
            <span>Wird gesendet...</span>
          ) : (
            <>
              <span>Unverbindliches Angebot anfordern</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
