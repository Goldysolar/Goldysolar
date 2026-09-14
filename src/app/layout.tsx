import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GoldyChatAssistant from '@/components/common/GoldyChatAssistant';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GOLDY SOLAR | Solaranlagen, Speicher & Montage',
  description:
    'Goldy Solar GmbH: Ihr zuverlässiger Partner für Photovoltaik in Deutschland. Planung, Batteriespeicher und fachgerechte Montage aus einer Hand für Eigenheim & Gewerbe.',
  keywords: [
    'Goldy Solar GmbH',
    'Photovoltaik Deutschland',
    'Solaranlagen Heidelberg',
    'Batteriespeicher',
    'Elektrotechnik',
    'C&I Solar',
    'EPC Nachunternehmer',
    'Solarpark AC Installation',
    'SCADA',
    'Sabah Altaweel',
  ],
  authors: [{ name: 'Goldy Solar GmbH' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main id="main-content" style={{ minHeight: 'calc(100vh - 400px)' }}>
          {children}
        </main>
        <Footer />
        <GoldyChatAssistant />
      </body>
    </html>
  );
}

