import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kostenlose PV-Anfrage | Goldy Solar GmbH',
  description: 'Fordern Sie jetzt Ihr unverbindliches Angebot für eine Photovoltaikanlage, Batteriespeicher oder Wallbox an. In nur 2 Minuten zum Solar-Angebot.',
  keywords: ['Photovoltaik Angebot', 'PV-Anlage berechnen', 'Solarstrom Angebot', 'Goldy Solar Anfrage', 'Heidelberg Solar Angebot'],
  alternates: {
    canonical: 'https://goldysolar.de/anfrage',
  },
  openGraph: {
    title: 'Kostenlose Photovoltaik-Anfrage | Goldy Solar',
    description: 'Fordern Sie jetzt Ihr maßgeschneidertes, unverbindliches Angebot für Ihre PV-Anlage an.',
    url: 'https://goldysolar.de/anfrage',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
