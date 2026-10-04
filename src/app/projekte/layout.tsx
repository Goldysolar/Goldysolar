import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referenzprojekte: PV, Speicher & Solaranlagen | Goldy Solar GmbH',
  description:
    'Entdecken Sie unsere realisierten PV-Projekte, Batteriespeicher und Wallbox-Installationen – von privaten Dachanlagen bis zu industriellen Solarparks (EPC) in ganz Deutschland.',
  keywords: [
    'Photovoltaik Referenzen',
    'PV Projekte Deutschland',
    'Solaranlagen Projekte Heidelberg',
    'C&I Solarprojekte',
    'EPC Montage Referenzen',
    'Batteriespeicher Installation Referenz',
    'Goldy Solar Installationen',
  ],
  alternates: {
    canonical: 'https://goldysolar.de/projekte',
  },
  openGraph: {
    title: 'Referenzprojekte & Installationen | Goldy Solar GmbH',
    description:
      'Erfolgreich realisierte Solar- und Speicherprojekte in ganz Deutschland.',
    url: 'https://goldysolar.de/projekte',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function ProjekteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
