import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ContactCtaBoxProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ContactCtaBox({
  title = 'Noch Fragen zu Ihrem Solarprojekt?',
  subtitle = 'Unser deutsches Ingenieur- und Meisterteam berät Sie unverbindlich zu Technik, Wirtschaftlichkeit und Förderung.',
  buttonText = '1 Minute Anfrage',
  buttonLink = '/anfrage',
}: ContactCtaBoxProps) {
  return (
    <div className="cta-banner-box">
      <h2>{title}</h2>
      <p style={{ maxWidth: '680px', margin: '0 auto 24px', fontSize: '16px', color: 'var(--color-gray-800)' }}>
        {subtitle}
      </p>
      <Link href={buttonLink} className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
        <span>{buttonText}</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
