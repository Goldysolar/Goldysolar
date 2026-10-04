import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-Minute Anfrage: PV, Speicher & Wallbox | Goldy Solar GmbH',
  description:
    'In nur 1 Minute zu Ihrem unverbindlichen Angebot für Photovoltaikanlage, Batteriespeicher oder Wallbox. Kostenlose Dachanalyse und Fachberatung aus Heidelberg.',
  keywords: [
    'Photovoltaik Angebot anfordern',
    'PV-Anlage berechnen',
    'Solarstrom Angebot',
    'Batteriespeicher Angebot',
    'Wallbox Angebot Heidelberg',
    'Goldy Solar Anfrage',
  ],
  alternates: {
    canonical: 'https://goldysolar.de/anfrage',
  },
  openGraph: {
    title: '1-Minute Solar-Anfrage | Goldy Solar GmbH',
    description:
      'Fordern Sie jetzt Ihr maßgeschneidertes, unverbindliches Angebot für PV-Anlage, Batteriespeicher und Wallbox an.',
    url: 'https://goldysolar.de/anfrage',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
