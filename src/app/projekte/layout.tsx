import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referenzprojekte & Installationen | Goldy Solar GmbH',
  description: 'Sehen Sie sich unsere erfolgreich abgeschlossenen Photovoltaik-Projekte an. Von Einfamilienhäusern bis zu industriellen Solaranlagen (EPC) in ganz Deutschland.',
  keywords: ['Photovoltaik Referenzen', 'Solaranlagen Projekte', 'C&I Solarprojekte', 'EPC Montage Referenzen', 'Goldy Solar Installationen'],
  alternates: {
    canonical: 'https://goldysolar.de/projekte',
  },
  openGraph: {
    title: 'Erfolgreiche Solar-Projekte von Goldy Solar',
    description: 'Entdecken Sie unsere Referenzen im Bereich Photovoltaik und Batteriespeicher.',
    url: 'https://goldysolar.de/projekte',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function ProjekteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
