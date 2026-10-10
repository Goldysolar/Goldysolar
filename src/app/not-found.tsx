import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import CustomSunLogo from '@/components/icons/CustomSunLogo';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden | Goldy Solar GmbH',
  description: 'Die gesuchte Seite konnte leider nicht gefunden werden.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function NotFound() {
  return (
    <div className="container not-found-container">
      {/* 4 [Hero-Sonne] 4 Layout */}
      <div className="not-found-code-wrapper">
        <span className="not-found-digit">4</span>
        <div className="not-found-sun-icon">
          <CustomSunLogo size={130} color="#FFDD00" />
        </div>
        <span className="not-found-digit">4</span>
      </div>

      <h1 className="not-found-title">Page Not Found!</h1>
      <p className="not-found-desc">
        Die von Ihnen gesuchte Seite existiert leider nicht oder wurde an eine andere Stelle verschoben.
      </p>

      <Link href="/" className="btn btn-primary" style={{ padding: '14px 34px', fontSize: '16px' }}>
        Back To Home
      </Link>
    </div>
  );
}
