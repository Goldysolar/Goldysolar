import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt & Fachberatung | Goldy Solar GmbH Heidelberg',
  description:
    'Kontaktieren Sie Goldy Solar in Heidelberg: Telefonisch, per E-Mail oder vor Ort. Kostenlose, unverbindliche Fachberatung zu Photovoltaik, Batteriespeichern und Wallboxen.',
  keywords: [
    'Kontakt Goldy Solar',
    'Photovoltaik Beratung Heidelberg',
    'Solarteur Kontakt',
    'Goldy Solar Telefon',
    'Solar Fachbetrieb Heidelberg',
    'Sabah Altaweel Kontakt',
  ],
  alternates: {
    canonical: 'https://goldysolar.de/kontakt',
  },
  openGraph: {
    title: 'Kontakt & Fachberatung | Goldy Solar GmbH',
    description:
      'Nehmen Sie Kontakt mit unserem Ingenieur- und Handwerksteam auf. Schnelle Rückmeldung und kompetente Beratung.',
    url: 'https://goldysolar.de/kontakt',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
