'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import GoldyLogo from '@/components/icons/GoldyLogo';
import { COMPANY_INFO } from '@/data/companyData';
import { Mail, PhoneCall, Menu, X, Phone, ArrowRight } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleLeistungenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById('unsere-leistungen');
      if (el) {
        const headerHeight = document.querySelector('header')?.offsetHeight ?? 100;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        const offset = headerHeight + 32;
        window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
      }
    } else {
      router.push('/#unsere-leistungen');
    }
  };

  const navItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Anfrage', href: '/anfrage' },
    { label: 'Leistungen', href: '/#unsere-leistungen', onClick: handleLeistungenClick },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Über Uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header style={{ width: '100%', position: 'relative', zIndex: 100 }}>
      {/* 1. Haupt-Leiste (Sowohl Desktop als auch Mobile & iPad IMMER sichtbar) */}
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          {/* Logo - Immer sichtbar */}
          <div className="header-logo-container">
            <Link href="/">
              <img src="/logo.png" alt="Goldy Solar Logo" style={{ height: '45px', width: 'auto' }} />
            </Link>
          </div>

          {/* Desktop-Kontakte (Wird auf Mobile automatisch über CSS ausgeblendet) */}
          <div className="topbar-contacts">
            {/* E-Mail */}
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="topbar-item desktop-only-contact">
              <div className="topbar-item-icon">
                <Mail size={17} />
              </div>
              <div className="topbar-item-text">
                <span>Email:</span>
                <strong>{COMPANY_INFO.contact.email}</strong>
              </div>
            </a>

            {/* Mobile Nummer */}
            <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} className="topbar-item desktop-only-contact">
              <div className="topbar-item-icon">
                <PhoneCall size={17} />
              </div>
              <div className="topbar-item-text">
                <span>Mobile Nummer:</span>
                <strong>{COMPANY_INFO.contact.phoneDisplay}</strong>
              </div>
            </a>

            {/* WhatsApp Button (IMMER sichtbar auf Desktop, iPad und Mobile) */}
            <a
              href="https://wa.me/4915731063775"
              target="_blank"
              rel="noopener noreferrer"
              className="header-whatsapp-btn"
              title="WhatsApp Chat (+49 157 310 63775)"
              style={{ backgroundColor: '#4285F4', borderColor: '#4285F4' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-header-toggle"
              aria-label="Menü umschalten"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hauptnavigationsleiste für Desktop */}
      <nav className="main-navbar desktop-navbar">
        <div className="container navbar-inner">
          <ul className="nav-links">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === '/#unsere-leistungen' && pathname === '/');
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={item.onClick} className={`nav-link ${isActive ? 'active' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 3. Ausklappbares Mobile & Tablet Menü (Full Drawer) */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="container">
            <div style={{ padding: '20px 0' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#467886', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                NAVIGATION
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.onClick) item.onClick(e);
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        display: 'block',
                        fontSize: '16px',
                        fontWeight: pathname === item.href ? 800 : 600,
                        color: pathname === item.href ? '#4285F4' : '#0F4761',
                        padding: '4px 0',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Kontaktdaten im mobilen Menü (Telefon & E-Mail) */}
              <div className="mobile-drawer-contacts" style={{ marginTop: '24px' }}>
                <span className="mobile-drawer-contacts-title">
                  KONTAKT
                </span>

                {/* Notdienst / Telefon */}
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="mobile-drawer-contact-card"
                >
                  <div className="mobile-drawer-icon">
                    <Phone size={17} />
                  </div>
                  <div className="mobile-drawer-contact-info">
                    <span className="mobile-drawer-contact-label">Mobile Nummer</span>
                    <strong className="mobile-drawer-contact-val">{COMPANY_INFO.contact.phoneDisplay}</strong>
                  </div>
                </a>

                {/* E-Mail */}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="mobile-drawer-contact-card"
                >
                  <div className="mobile-drawer-icon">
                    <Mail size={17} />
                  </div>
                  <div className="mobile-drawer-contact-info">
                    <span className="mobile-drawer-contact-label">E-Mail Anfragen</span>
                    <strong className="mobile-drawer-contact-val">{COMPANY_INFO.contact.email}</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
