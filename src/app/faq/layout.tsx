import React from 'react';
import type { Metadata } from 'next';
import { FAQ_LEFT_COLUMN, FAQ_RIGHT_COLUMN } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen (FAQ) | Goldy Solar GmbH',
  description:
    'Antworten auf die wichtigsten Fragen zu Photovoltaikanlagen, Batteriespeichern, Wallboxen, Zählerschrankmodernisierung, Kosten und Ablauf mit Goldy Solar.',
  keywords: [
    'Photovoltaik FAQ',
    'Fragen Solar Montage',
    'Batteriespeicher FAQ',
    'Zählerschrankmodernisierung PV',
    'Netzanschluss Photovoltaik Ablauf',
    'Solar Förderung Heidelberg',
  ],
  alternates: {
    canonical: 'https://goldysolar.de/faq',
  },
  openGraph: {
    title: 'Häufig gestellte Fragen (FAQ) | Goldy Solar GmbH',
    description:
      'Alles Wissenswerte zu Planung, Montage, Batteriespeichern und Fördermöglichkeiten Ihrer Solaranlage.',
    url: 'https://goldysolar.de/faq',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  const allFaqs = [...FAQ_LEFT_COLUMN, ...FAQ_RIGHT_COLUMN];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.replace(/\s*\[mock\]/g, ''),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\s*\[mock\]/g, ''),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
