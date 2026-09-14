import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Sun3DIcon from '@/components/icons/Sun3DIcon';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Goldy Solar GmbH',
  description: 'Die gesuchte Seite konnte leider nicht gefunden werden.',
};

export default function NotFound() {
  return (
    <div className="container not-found-container">
      {/* 4 [3D-Sonne] 4 Layout (Screenshot 4) */}
      <div className="not-found-code-wrapper">
        <span className="not-found-digit">4</span>
        <div className="not-found-sun-icon">
          <Sun3DIcon size={130} />
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
