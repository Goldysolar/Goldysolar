import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GoldyChatAssistant from '@/components/common/GoldyChatAssistant';
import CookieConsent from '@/components/common/CookieConsent';
import { COMPANY_INFO } from '@/data/companyData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://goldysolar.de'),
  title: {
    default: 'Goldy Solar GmbH | PV. Speicher. Wallboxen in Heidelberg & Deutschland',
    template: '%s | Goldy Solar GmbH',
  },
  description:
    'Goldy Solar GmbH: Ihr zertifizierter Fachbetrieb für Photovoltaik (PV), Batteriespeicher und Wallboxen in Heidelberg und bundesweit. Meisterhafte Planung, VDE-Montage und schlüsselfertige Inbetriebnahme für Eigenheim, Gewerbe & Solarparks.',
  keywords: [
    'Goldy Solar GmbH',
    'Photovoltaik Heidelberg',
    'PV Anlage kaufen',
    'Batteriespeicher nachrüsten',
    'Wallbox Installation Heidelberg',
    'Solaranlagen Heidelberg',
    'Gewerbe Solar C&I',
    'EPC Solar Nachunternehmer',
    'Solarpark AC Installation',
    'Solarteur Heidelberg',
    'Zählerschrank Modernisierung',
    'Netzanschluss Photovoltaik',
    'Sabah Altaweel',
    'Photovoltaik Baden-Württemberg',
  ],
  authors: [{ name: 'Goldy Solar GmbH', url: 'https://goldysolar.de' }],
  creator: 'Goldy Solar GmbH',
  publisher: 'Goldy Solar GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Goldy Solar GmbH | PV. Speicher. Wallboxen',
    description:
      'Zertifizierter Fachbetrieb für Photovoltaik, Batteriespeicher und Wallboxen. Meisterhafte Planung, Montage und Inbetriebnahme aus einer Hand.',
    url: 'https://goldysolar.de',
    siteName: 'Goldy Solar GmbH',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://goldysolar.de/logo.png',
        width: 1200,
        height: 630,
        alt: 'Goldy Solar GmbH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goldy Solar GmbH | PV. Speicher. Wallboxen',
    description:
      'Ihr zuverlässiger Fachbetrieb für Photovoltaik, Batteriespeicher und Wallboxen in Deutschland.',
    images: ['https://goldysolar.de/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  category: 'energy',
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
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://goldysolar.de/#organization',
                  name: 'Goldy Solar GmbH',
                  legalName: 'Goldy Solar GmbH',
                  url: 'https://goldysolar.de',
                  logo: 'https://goldysolar.de/logo.png',
                  founder: {
                    '@type': 'Person',
                    name: 'Sabah Altaweel',
                    jobTitle: 'Elektroingenieur und Geschäftsführer',
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: COMPANY_INFO.contact.phone,
                    contactType: 'customer service',
                    areaServed: 'DE',
                    availableLanguage: ['German', 'English'],
                  },
                },
                {
                  '@type': ['LocalBusiness', 'SolarEnergyContractor', 'Electrician'],
                  '@id': 'https://goldysolar.de/#localbusiness',
                  name: COMPANY_INFO.name,
                  image: 'https://goldysolar.de/logo.png',
                  url: 'https://goldysolar.de',
                  telephone: COMPANY_INFO.contact.phone,
                  email: COMPANY_INFO.contact.email,
                  priceRange: '€€€',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: COMPANY_INFO.address.street,
                    addressLocality: COMPANY_INFO.address.city,
                    postalCode: COMPANY_INFO.address.zip,
                    addressCountry: 'DE',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 49.398,
                    longitude: 8.672,
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      opens: '08:00',
                      closes: '18:00',
                    },
                  ],
                  areaServed: [
                    { '@type': 'Country', name: 'Deutschland' },
                    { '@type': 'AdministrativeArea', name: 'Baden-Württemberg' },
                    { '@type': 'City', name: 'Heidelberg' },
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Solar & Energiedienstleistungen',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Photovoltaikanlagen für Privathäuser',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Gewerbe- & Industrie-Solaranlagen (C&I)',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Batteriespeicher & Energiemanagement',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Wallboxen & Ladeinfrastruktur für E-Mobilität',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Zählerschrankmodernisierung & VDE-Netzanmeldung',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'EPC Nachunternehmer für Solarparks & Freiflächen',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://goldysolar.de/#website',
                  url: 'https://goldysolar.de',
                  name: 'Goldy Solar GmbH',
                  publisher: {
                    '@id': 'https://goldysolar.de/#organization',
                  },
                  inLanguage: 'de-DE',
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

