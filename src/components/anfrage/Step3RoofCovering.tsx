import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  IconZiegel,
  IconBitumen,
  IconBlech,
  IconAsbest,
  IconQuestion,
} from '@/components/anfrage/QuestionIcons';

interface Step3RoofCoveringProps {
  selected: string;
  onSelect: (value: string) => void;
  onPrev: () => void;
}

export default function Step3RoofCovering({ selected, onSelect, onPrev }: Step3RoofCoveringProps) {
  const options = [
    { label: 'Ziegel', tag: 'Standardmontage', stat: 'Ton- / Betondachsteine', icon: <IconZiegel size={48} /> },
    { label: 'Bitumen', tag: 'Flachdach-Optimum', stat: 'Schweißbahn / Folie', icon: <IconBitumen size={48} /> },
    { label: 'Blech / Metall', tag: 'Leichtmontage', stat: 'Trapez- & Stehfalz', icon: <IconBlech size={48} /> },
    { label: 'Asbest / Eternit', tag: 'Sonderprüfung', stat: 'Faserzement / Welleternit', icon: <IconAsbest size={48} /> },
    { label: 'Sonstiges', tag: 'Individuell', stat: 'Schiefer, Reet, etc.', icon: <IconQuestion size={48} /> },
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
          Schritt 3 von 5 • Dacheindeckung
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
          Womit ist Ihr Dach gedeckt?
        </h2>
        <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
          Wichtig für die Auswahl der zertifizierten Dachhaken, Schienen und Unterkonstruktion.
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
                  transition: 'color 0.2s',
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
                      width: isSelected ? '100%' : '60%',
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
