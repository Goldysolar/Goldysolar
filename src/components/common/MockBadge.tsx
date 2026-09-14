import React from 'react';

interface MockBadgeProps {
  label?: string;
  className?: string;
}

export default function MockBadge({ label = 'mock', className = '' }: MockBadgeProps) {
  return (
    <span
      className={`mock-badge ${className}`}
      title="Dieser Inhalt ist ein Platzhalter (Mockup) und wird später durch finale Projektdaten ersetzt"
    >
      [{label}]
    </span>
  );
}
