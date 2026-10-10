import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import {
  IconAreaLarge,
  IconAreaMedium,
  IconAreaSmall,
} from '@/components/anfrage/QuestionIcons';

interface Step4RoofAreaProps {
  selected: string;
  onSelect: (value: string) => void;
  onPrev: () => void;
}

export default function Step4RoofArea({ selected, onSelect, onPrev }: Step4RoofAreaProps) {
  const options = [
    { label: 'Über 100 m²', tag: 'Maximaler Ertrag', sub: 'Großdach / Gewerbe / Großes EFH', stat: 'Bis 30+ kWp', icon: <IconAreaLarge size={52} /> },
    { label: '20 - 100 m²', tag: 'Ideal für Eigenheim', sub: 'Standard Ein-/Zweifamilienhaus', stat: 'Ca. 10–20 kWp', icon: <IconAreaMedium size={52} /> },
    { label: 'Unter 20 m²', tag: 'Kompakt-Anlage', sub: 'Garage / Carport / Kleinfläche', stat: 'Ca. 3–8 kWp', icon: <IconAreaSmall size={52} /> },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <span
          style={{
            background: 'rgba(66, 133, 244, 0.1)',
            color: '#4285F4',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 800,
            display: 'inline-block',
            marginBottom: '8px',
          }}
        >
          Schritt 4 von 5 • Flächenkapazität
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
          Wie groß ist Ihre geschätzte freie Dachfläche?
        </h2>
        <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
          Gibt einen ersten Richtwert für die maximale Anlagenleistung in kWp und Ertragsberechnung.
        </p>
      </div>

      {/* Helper badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: '#F0F9FF',
          border: '1px solid #BAE6FD',
          borderRadius: '12px',
          padding: '10px 18px',
          maxWidth: '480px',
          margin: '0 auto 28px',
          color: '#0369A1',
          fontSize: '13px',
          fontWeight: 600,
        }}
      >
        <Info size={16} color="#0284C7" />
        <span>Tipp: 1 kWp Leistung benötigt ca. 5 bis 6 m² Dachfläche</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
        {options.map((item) => {
          const isSelected = selected === item.label;
          return (
            <div
              key={item.label}
              onClick={() => onSelect(item.label)}
              className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
              style={{ padding: '26px 18px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: isSelected ? '#4285F4' : '#F1F5F9',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                  }}
                >
                  {item.tag}
                </span>
                {isSelected && (
                  <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900 }}>
                    ✓ Gewählt
                  </span>
                )}
              </div>

              <div
                style={{
                  height: '66px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#4285F4' : '#0F4761',
                  marginBottom: '10px',
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0E2841', marginBottom: '4px' }}>
                  {item.label}
                </h4>
                <span style={{ fontSize: '12px', color: '#64748B', display: 'block', marginBottom: '4px' }}>
                  {item.sub}
                </span>
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#4285F4', display: 'block' }}>
                  {item.stat}
                </span>

                <div className="step-progress-indicator">
                  <div
                    className="step-progress-fill"
                    style={{
                      width: isSelected ? '100%' : '80%',
                      background: isSelected ? '#4285F4' : '#CBD5E1',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '28px' }}>
        <button
          type="button"
          onClick={onPrev}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
        >
          <ArrowLeft size={16} />
          <span>Zurück</span>
        </button>
      </div>
    </div>
  );
}
