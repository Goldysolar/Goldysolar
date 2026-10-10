import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  IconSatteldach,
  IconPultdach,
  IconFlachdach,
  IconWalmdach,
  IconQuestion,
} from '@/components/anfrage/QuestionIcons';

interface Step2RoofShapeProps {
  selected: string;
  onSelect: (value: string) => void;
  onPrev: () => void;
}

export default function Step2RoofShape({ selected, onSelect, onPrev }: Step2RoofShapeProps) {
  const options = [
    { label: 'Satteldach', tag: 'Optimaler Ertrag', stat: '30°-35° Neigung', icon: <IconSatteldach size={48} /> },
    { label: 'Pultdach', tag: 'Top Süd-Ausrichtung', stat: 'Große Modulfläche', icon: <IconPultdach size={48} /> },
    { label: 'Flachdach', tag: 'Ost-West Optimiert', stat: 'Mit Aufständerung', icon: <IconFlachdach size={48} /> },
    { label: 'Walmdach', tag: 'Mehrseiten-Belegung', stat: 'Allround-Einstrahlung', icon: <IconWalmdach size={48} /> },
    { label: 'Sonstiges', tag: 'Sonderauslegung', stat: 'Individuelle Statik', icon: <IconQuestion size={48} /> },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
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
          Schritt 2 von 5 • Dachgeometrie
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
          Welche Dachform hat das Haus?
        </h2>
        <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
          Die Dachform bestimmt das optimale Montagesystem und den Neigungswinkel der Solarmodule.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
        {options.map((item) => {
          const isSelected = selected === item.label;
          return (
            <div
              key={item.label}
              onClick={() => onSelect(item.label)}
              className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 6px',
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
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#4285F4' : '#0F4761',
                  marginBottom: '8px',
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0E2841', marginBottom: '3px' }}>
                  {item.label}
                </h4>
                <span style={{ fontSize: '11px', color: '#64748B', display: 'block' }}>
                  {item.stat}
                </span>

                <div className="step-progress-indicator">
                  <div
                    className="step-progress-fill"
                    style={{
                      width: isSelected ? '100%' : '40%',
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
