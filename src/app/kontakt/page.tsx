'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  User,
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <div className="container" style={{ paddingTop: '50px', paddingBottom: '90px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
          
          {/* Linke Spalte: Ansprechpartner & Kontakt */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px' }}>
              <span className="category-pill">ANSPRECHPARTNER</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              
              {/* Geschäftsführer Box */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: '#FFFFFF',
                  padding: '20px 22px',
                  borderRadius: '16px',
                  border: '1px solid #E1DFDD',
                  boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--color-sky-blue-tint)',
                    color: 'var(--color-royal-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <User size={22} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontSize: '15.5px', color: '#4285F4', fontWeight: 800 }}>
                    Geschäftsführer Sabah Altaweel
                  </div>
                </div>
              </div>

              {/* Telefon & Mobil */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: '#FFFFFF',
                  padding: '20px 22px',
                  borderRadius: '16px',
                  border: '1px solid #E1DFDD',
                  boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--color-sky-blue-tint)',
                    color: 'var(--color-royal-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#595959', fontWeight: 700, textTransform: 'uppercase' }}>
                    Telefon & Direkter Kontakt
                  </div>
                  <div style={{ fontSize: '15px', color: '#0F4761', marginTop: '3px' }}>
                    Festnetz:{' '}
                    <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} style={{ fontWeight: 700, color: 'var(--color-royal-blue)' }}>
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                    <br />
                    Mobil / Notdienst:{' '}
                    <a href={`tel:${COMPANY_INFO.contact.mobile.replace(/\s+/g, '')}`} style={{ fontWeight: 700, color: 'var(--color-royal-blue)' }}>
                      {COMPANY_INFO.contact.mobileDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* E-Mail */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: '#FFFFFF',
                  padding: '20px 22px',
                  borderRadius: '16px',
                  border: '1px solid #E1DFDD',
                  boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--color-sky-blue-tint)',
                    color: 'var(--color-royal-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#595959', fontWeight: 700, textTransform: 'uppercase' }}>
                    E-Mail Anfragen
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-royal-blue)', display: 'block', marginTop: '2px' }}
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: '#FFFFFF',
                  padding: '20px 22px',
                  borderRadius: '16px',
                  border: '1px solid #E1DFDD',
                  boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 215, 0, 0.15)',
                    color: '#B28900',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#595959', fontWeight: 700, textTransform: 'uppercase' }}>
                    Büro- & Servicezeiten
                  </div>
                  <div style={{ fontSize: '14px', color: '#0F4761', marginTop: '2px' }}>
                    Mo – Fr: 08:00 – 18:00 Uhr<br />
                    Sa: 09:00 – 14:00 Uhr (nach Vereinbarung)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Standort & Karte */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px' }}>
              <span className="category-pill">STANDORT</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              {/* Adresse */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: '#FFFFFF',
                  padding: '20px 22px',
                  borderRadius: '16px',
                  border: '1px solid #E1DFDD',
                  boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--color-sky-blue-tint)',
                    color: 'var(--color-royal-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#595959', fontWeight: 700, textTransform: 'uppercase' }}>
                    Hauptsitz / Adresse
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Goldy+Solar+GmbH+Heidelberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '15.5px', color: '#0F4761', display: 'block', marginTop: '2px', textDecoration: 'none', fontWeight: 700 }}
                  >
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                  </a>
                </div>
              </div>

              {/* Google Maps Embed (Stretches to fill remaining space) */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E1DFDD', boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)', flex: 1, display: 'flex' }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  style={{ minHeight: '300px', flex: 1 }}
                  src="https://maps.google.com/maps?q=Goldy%20Solar%20GmbH%20Heidelberg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Quick Action Button (Full Width Bottom) */}
        <div style={{ marginTop: '32px' }}>
          <a
            href="https://wa.me/4915731063775"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ width: '100%', justifyContent: 'center', padding: '16px 24px', fontSize: '16px', fontWeight: 800, backgroundColor: '#4285F4', color: '#FFFFFF', border: 'none', borderRadius: '16px' }}
          >
            <MessageCircle size={20} />
            <span>Direkt über WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
