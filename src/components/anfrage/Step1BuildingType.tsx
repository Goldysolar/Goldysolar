import React from 'react';
import {
  IconSingleHouse,
  IconCompany,
  IconField,
  IconQuestion,
} from '@/components/anfrage/QuestionIcons';

interface Step1BuildingTypeProps {
  selected: string;
  onSelect: (value: string) => void;
}

export default function Step1BuildingType({ selected, onSelect }: Step1BuildingTypeProps) {
  const options = [
    { label: 'Einfamilienhaus', tag: 'Beliebteste Wahl', stat: '10–25 kWp', icon: <IconSingleHouse size={48} /> },
    { label: 'Firmengebäude', tag: 'Gewerbe-Tarif', stat: '50–500+ kWp', icon: <IconCompany size={48} /> },
    { label: 'Freilandfläche', tag: 'Großprojekt', stat: 'Ab 100 kWp', icon: <IconField size={48} /> },
    { label: 'Sonstiges', tag: 'Individuell', stat: 'Flexible Auslegung', icon: <IconQuestion size={48} /> },
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
          Schritt 1 von 5 • Gebäudeart
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
          Wo möchten Sie die Solaranlage & Energiesysteme installieren?
        </h2>
        <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
          Wählen Sie die Art der Immobilie für eine exakte statische Auslegung und Wirtschaftlichkeit.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '16px' }}>
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
                  <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900, animation: 'popInCheck 0.2s' }}>
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
                <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0E2841', marginBottom: '3px', lineHeight: 1.3 }}>
                  {item.label}
                </h4>
                <span style={{ fontSize: '11.5px', color: '#64748B', display: 'block' }}>
                  {item.stat}
                </span>

                <div className="step-progress-indicator">
                  <div
                    className="step-progress-fill"
                    style={{
                      width: isSelected ? '100%' : '20%',
                      background: isSelected ? '#4285F4' : '#CBD5E1',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
