import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GoldyChatAssistant from '@/components/common/GoldyChatAssistant';
import CookieConsent from '@/components/common/CookieConsent';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://goldysolar.de'),
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
        <CookieConsent />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Goldy Solar GmbH",
              "image": "https://goldysolar.de/logo.png",
              "url": "https://goldysolar.de",
              "telephone": "+4962215026666",
              "email": "info@goldysolar.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rudolf-Diesel-Straße 11",
                "addressLocality": "Heidelberg",
                "postalCode": "69115",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.398,
                "longitude": 8.672
              },
              "areaServed": "DE",
              "priceRange": "$$$"
            })
          }}
        />
      </body>
    </html>
  );
}

