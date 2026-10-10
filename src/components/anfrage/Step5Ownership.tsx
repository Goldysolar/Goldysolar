import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  IconCheckYes,
  IconCommunity,
  IconCrossNo,
} from '@/components/anfrage/QuestionIcons';

interface Step5OwnershipProps {
  selected: string;
  onSelect: (value: string) => void;
  onPrev: () => void;
}

export default function Step5Ownership({ selected, onSelect, onPrev }: Step5OwnershipProps) {
  const options = [
    { label: 'Ja', tag: 'Direkt umsetzbar', sub: 'Allein- oder Miteigentümer', stat: '100% Entscheidungsfreiheit', icon: <IconCheckYes size={52} /> },
    { label: 'Ja, Eigentümer-gemeinschaft', tag: 'WEG-Modell', sub: 'WEG mit Beschlussrecht', stat: 'Gemeinschafts-PV', icon: <IconCommunity size={52} /> },
    { label: 'Nein', tag: 'Vermieter-Freigabe', sub: 'Mieter / Pächter', stat: 'Zustimmung erforderlich', icon: <IconCrossNo size={52} /> },
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
          Schritt 5 von 5 • Rechtliche Prüfung
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
          Sind Sie Eigentümer der Immobilie?
        </h2>
        <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
          Rechtliche Voraussetzung für die baugenehmigungsfreie Montage und den Netzanschluss beim Energieversorger.
        </p>
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
                  marginBottom: '10px',
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 900, color: '#0E2841', marginBottom: '4px' }}>
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
                      width: isSelected ? '100%' : '95%',
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
