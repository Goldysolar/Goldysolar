'use client';

import React, { useState } from 'react';
import PageHeroBanner from '@/components/common/PageHeroBanner';
import Accordion from '@/components/common/Accordion';
import ContactCtaBox from '@/components/common/ContactCtaBox';
import { FAQ_LEFT_COLUMN, FAQ_RIGHT_COLUMN } from '@/data/faqData';
import { HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function FaqPage() {
  const allQuestions = [...FAQ_LEFT_COLUMN, ...FAQ_RIGHT_COLUMN];
  const [activeTab, setActiveTab] = useState<'all' | 'privat' | 'gewerbe' | 'technik'>('all');

  const getFilteredItems = () => {
    if (activeTab === 'all') {
      return { left: FAQ_LEFT_COLUMN, right: FAQ_RIGHT_COLUMN };
    }
    if (activeTab === 'privat') {
      const items = allQuestions.filter(
        (q) =>
          q.question.includes('Photovoltaikanlage') ||
          q.question.includes('Zählerschrank') ||
          q.question.includes('Wärmepumpe') ||
          q.question.includes('Förderung') ||
          q.question.includes('Batteriespeicher')
      );
      const half = Math.ceil(items.length / 2);
      return { left: items.slice(0, half), right: items.slice(half) };
    }
    if (activeTab === 'gewerbe') {
      const items = allQuestions.filter(
        (q) =>
          q.question.includes('C&I') ||
          q.question.includes('EPC') ||
          q.question.includes('amortisiert') ||
          q.question.includes('bundesweit')
      );
      const half = Math.ceil(items.length / 2);
      return { left: items.slice(0, half), right: items.slice(half) };
    }
    // Technik
    const items = allQuestions.filter(
      (q) =>
        q.question.includes('Genehmigung') ||
        q.question.includes('Überwachung') ||
        q.question.includes('Garantie') ||
        q.question.includes('Angebot')
    );
    const half = Math.ceil(items.length / 2);
    return { left: items.slice(0, half), right: items.slice(half) };
  };

  const { left, right } = getFilteredItems();

  return (
    <div>
      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        category="HÄUFIG GESTELLTE FRAGEN (FAQ)"
        title="Antworten auf Ihre wichtigsten Fragen"
        subtitle="Alles Wissenswerte zu Photovoltaik, Batteriespeichern, Zählerschrankmodernisierung, Fördermitteln und Netzanmeldung."
        trustTags={['12 Fragen & Antworten', 'Privatkunden & Gewerbe', 'Persönliche Fachberatung']}
      />

      <div className="container" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        {/* Quick Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '45px',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-blue'}`}
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Alle 12 Fragen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('privat')}
            className={`btn ${activeTab === 'privat' ? 'btn-primary' : 'btn-outline-blue'}`}
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Eigenheim & Speicher
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('gewerbe')}
            className={`btn ${activeTab === 'gewerbe' ? 'btn-primary' : 'btn-outline-blue'}`}
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Gewerbe & EPC
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('technik')}
            className={`btn ${activeTab === 'technik' ? 'btn-primary' : 'btn-outline-blue'}`}
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Technik & Netzanmeldung
          </button>
        </div>

        {/* 2-Spalten-Akkordeon */}
        <div className="faq-columns-grid">
          <div>
            <Accordion items={left} defaultOpenIndex={0} />
          </div>
          <div>
            <Accordion items={right} defaultOpenIndex={0} />
          </div>
        </div>

        {/* Quick Contact Helper Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '36px',
            border: '1px solid #E1DFDD',
            boxShadow: '0 8px 24px rgba(15, 71, 97, 0.06)',
            marginBottom: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F4761', marginBottom: '8px' }}>
              Ihre Frage war nicht dabei?
            </h3>
            <p style={{ fontSize: '15px', color: '#595959', lineHeight: 1.6 }}>
              Unser deutsches Ingenieurteam beantwortet Ihre individuellen technischen und wirtschaftlichen
              Fragen gerne persönlich per Telefon oder WhatsApp.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="btn btn-outline-blue"
              style={{ padding: '12px 24px' }}
            >
              <Phone size={16} />
              <span>{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
            <a
              href="https://wa.me/4962215026666?text=Hallo%20Goldy%20Solar%20Team%2C%20ich%20habe%20eine%20Frage"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* CTA Banner Box */}
        <ContactCtaBox
          title="Bereit für Ihre persönliche Solarberatung?"
          subtitle="Fordern Sie eine unverbindliche Potenzialanalyse für Ihr Haus oder Unternehmen an."
          buttonText="Beratungstermin vereinbaren"
          buttonLink="/kontakt"
        />
      </div>
    </div>
  );
}
