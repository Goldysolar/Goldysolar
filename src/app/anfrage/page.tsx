'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Info,
  SunMedium,
  Check,
  TrendingUp,
  Award,
  Phone,
  Mail,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import {
  IconSingleHouse,
  IconMultiHouse,
  IconCompany,
  IconField,
  IconQuestion,
  IconSatteldach,
  IconPultdach,
  IconFlachdach,
  IconWalmdach,
  IconZiegel,
  IconBitumen,
  IconBlech,
  IconAsbest,
  IconAreaLarge,
  IconAreaMedium,
  IconAreaSmall,
  IconCheckYes,
  IconCommunity,
  IconCrossNo,
} from '@/components/anfrage/QuestionIcons';

export default function AnfragePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalQuestionSteps = 5;

  // Form State
  const [formData, setFormData] = useState({
    gebauedeTyp: '',
    dachform: '',
    dacheindeckung: '',
    dachflaeche: '',
    eigentuemer: '',
    anrede: 'Privat',
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    plzOrt: '',
    strasse: '',
    nachricht: '',
    privacyAccepted: true,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSelectOption = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 240);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.vorname || !formData.nachname || !formData.email) {
      setErrorMessage('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }
    // Email Domain Validation
    const validDomains = ['gmail.com', 'googlemail.com', 'outlook.com', 'outlook.de', 'hotmail.com', 'hotmail.de', 'live.com', 'live.de', 'yahoo.com', 'yahoo.de', 'gmx.de', 'gmx.net', 'web.de', 't-online.de', 'icloud.com', 'me.com', 'mac.com', 'freenet.de', 'protonmail.com', 'proton.me', 'mail.com', 'mail.de', 'aol.com'];
    const domain = formData.email.toLowerCase().split('@')[1];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || !domain || !validDomains.includes(domain)) {
      setErrorMessage("Bitte geben Sie eine gültige E-Mail Adresse eines bekannten Anbieters ein (z.B. gmail, gmx, web.de, outlook, yahoo).");
      return;
    }

    if (!formData.privacyAccepted) {
      setErrorMessage('Bitte akzeptieren Sie die Datenschutzhinweise.');
      return;
    }

    // Rate limiting
    const lastSub = localStorage.getItem('last_anfrage_submission');
    if (lastSub && Date.now() - parseInt(lastSub) < 60000) {
      setErrorMessage("Bitte warten Sie eine Minute, bevor Sie eine neue Anfrage senden.");
      return;
    }
    localStorage.setItem('last_anfrage_submission', Date.now().toString());

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await res.json();
      if (res.ok && resData.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(resData.error || 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    } catch (err: any) {
      setErrorMessage('Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = Math.min(100, Math.round(((currentStep - 1) / totalQuestionSteps) * 100));

  return (
    <div className="anfrage-page-wrapper">
      {/* =========================================================================
          CUSTOM 2026 STYLES & MICRO-ANIMATIONS (DESIGN #5 ROOF SIMULATOR)
          ========================================================================= */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.04); }
        }
        @keyframes popInCheck {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmerLine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .anfrage-page-wrapper {
          background: #F8FAFC;
          min-height: 88vh;
          padding: 40px 16px 80px;
          color: #0E2841;
        }

        .simulator-main-card {
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 16px 45px rgba(14, 40, 65, 0.07);
          padding: 38px 32px;
          position: relative;
          overflow: hidden;
        }

        .simulator-option-card {
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: 22px;
          padding: 22px 18px;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          user-select: none;
        }
        .simulator-option-card:hover {
          transform: translateY(-7px) scale(1.02);
          border-color: #FFD700;
          box-shadow: 0 16px 32px rgba(255, 215, 0, 0.22);
        }
        .simulator-option-card.selected {
          border-color: #4285F4;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F9FF 100%);
          box-shadow: 0 0 0 3.5px #4285F4, 0 20px 40px rgba(66, 133, 244, 0.22);
          transform: translateY(-5px) scale(1.02);
        }

        .step-progress-indicator {
          width: 100%;
          height: 4px;
          background: #F1F5F9;
          border-radius: 9999px;
          overflow: hidden;
          margin-top: 10px;
        }
        .step-progress-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.3s ease, background 0.3s ease;
        }

        @media (max-width: 640px) {
          .simulator-main-card {
            padding: 24px 16px;
            border-radius: 20px;
          }
        }
      `}</style>

      <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>
        
        {/* Top Header Banner */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span
            className="category-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#EBF7FD',
              color: '#0F4761',
              border: '1px solid #BAE6FD',
              padding: '5px 16px',
            }}
          >
            <Sparkles size={15} color="#FFD700" />
            <span>1-MINUTE SOLAR- & ENERGIE-ANFRAGE</span>
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#FFD700', marginTop: '12px', marginBottom: '8px', letterSpacing: '-0.5px' }}>
            Ihr Umstieg auf saubere & erneuerbare Energie
          </h1>
          <p style={{ fontSize: '15.5px', color: '#64748B', maxWidth: '680px', margin: '0 auto', lineHeight: 1.5 }}>
            Erhalten Sie in wenigen Schritten die beste Auswertung für Ihren Umstieg auf saubere, erneuerbare Energie – mit einem Einsparpotenzial von bis zu 80%.
          </p>
        </div>

        {/* Card Container (Design #5 Smart Roof Simulator) */}
        <div className="simulator-main-card">
          
          {/* Progress Bar Header */}
          {!isSuccess && (
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#4285F4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {currentStep <= totalQuestionSteps ? `Schritt ${currentStep} von ${totalQuestionSteps}` : 'Abschluss: Ihre Kontaktdaten'}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F4761' }}>
                  {progressPercentage}% abgeschlossen
                </span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#EDF2F7', borderRadius: '9999px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #4285F4 0%, #FFD700 100%)',
                    borderRadius: '9999px',
                    transition: 'width 0.35s ease',
                  }}
                />
              </div>
            </div>
          )}

          {/* ========================================================
              SCHRITT 1: Wo möchten Sie die Anlage installieren?
              ======================================================== */}
          {currentStep === 1 && !isSuccess && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span
                  style={{
                    background: 'rgba(66, 133, 244, 0.1)',
                    color: '#4285F4',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'inline-block',
                    marginBottom: '8px',
                  }}
                >
                  Schritt 1 von 5 • Gebäudeart
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
                  Wo möchten Sie die Solaranlage & Energiesysteme installieren?
                </h2>
                <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
                  Wählen Sie die Art der Immobilie für eine exakte statische Auslegung und Wirtschaftlichkeit.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '16px' }}>
                {[
                  { label: 'Einfamilienhaus', tag: 'Beliebteste Wahl', stat: '10–25 kWp', icon: <IconSingleHouse size={48} /> },
                  { label: 'Firmengebäude', tag: 'Gewerbe-Tarif', stat: '50–500+ kWp', icon: <IconCompany size={48} /> },
                  { label: 'Freilandfläche', tag: 'Großprojekt', stat: 'Ab 100 kWp', icon: <IconField size={48} /> },
                  { label: 'Sonstiges', tag: 'Individuell', stat: 'Flexible Auslegung', icon: <IconQuestion size={48} /> },
                ].map((item) => {
                  const isSelected = formData.gebauedeTyp === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleSelectOption('gebauedeTyp', item.label)}
                      className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: isSelected ? '#4285F4' : '#F1F5F9',
                            color: isSelected ? '#FFFFFF' : '#64748B',
                          }}
                        >
                          {item.tag}
                        </span>
                        {isSelected && (
                          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900, animation: 'popInCheck 0.2s' }}>
                            ✓ Gewählt
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? '#4285F4' : '#0F4761',
                          marginBottom: '8px',
                          transition: 'color 0.2s',
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0E2841', marginBottom: '3px', lineHeight: 1.3 }}>
                          {item.label}
                        </h4>
                        <span style={{ fontSize: '11.5px', color: '#64748B', display: 'block' }}>
                          {item.stat}
                        </span>

                        <div className="step-progress-indicator">
                          <div
                            className="step-progress-fill"
                            style={{
                              width: isSelected ? '100%' : '20%',
                              background: isSelected ? '#4285F4' : '#CBD5E1',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================
              SCHRITT 2: Welche Dachform hat das Haus?
              ======================================================== */}
          {currentStep === 2 && !isSuccess && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span
                  style={{
                    background: 'rgba(66, 133, 244, 0.1)',
                    color: '#4285F4',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'inline-block',
                    marginBottom: '8px',
                  }}
                >
                  Schritt 2 von 5 • Dachgeometrie
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
                  Welche Dachform hat das Haus?
                </h2>
                <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
                  Die Dachform bestimmt das optimale Montagesystem und den Neigungswinkel der Solarmodule.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                {[
                  { label: 'Satteldach', tag: 'Optimaler Ertrag', stat: '30°-35° Neigung', icon: <IconSatteldach size={48} /> },
                  { label: 'Pultdach', tag: 'Top Süd-Ausrichtung', stat: 'Große Modulfläche', icon: <IconPultdach size={48} /> },
                  { label: 'Flachdach', tag: 'Ost-West Optimiert', stat: 'Mit Aufständerung', icon: <IconFlachdach size={48} /> },
                  { label: 'Walmdach', tag: 'Mehrseiten-Belegung', stat: 'Allround-Einstrahlung', icon: <IconWalmdach size={48} /> },
                  { label: 'Sonstiges', tag: 'Sonderauslegung', stat: 'Individuelle Statik', icon: <IconQuestion size={48} /> },
                ].map((item) => {
                  const isSelected = formData.dachform === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleSelectOption('dachform', item.label)}
                      className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: isSelected ? '#4285F4' : '#F1F5F9',
                            color: isSelected ? '#FFFFFF' : '#64748B',
                          }}
                        >
                          {item.tag}
                        </span>
                        {isSelected && (
                          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900 }}>
                            ✓ Gewählt
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? '#4285F4' : '#0F4761',
                          marginBottom: '8px',
                          transition: 'color 0.2s',
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0E2841', marginBottom: '3px' }}>
                          {item.label}
                        </h4>
                        <span style={{ fontSize: '11.5px', color: '#64748B', display: 'block' }}>
                          {item.stat}
                        </span>

                        <div className="step-progress-indicator">
                          <div
                            className="step-progress-fill"
                            style={{
                              width: isSelected ? '100%' : '40%',
                              background: isSelected ? '#4285F4' : '#CBD5E1',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '28px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                >
                  <ArrowLeft size={16} />
                  <span>Zurück</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================
              SCHRITT 3: Womit ist Ihr Dach gedeckt?
              ======================================================== */}
          {currentStep === 3 && !isSuccess && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span
                  style={{
                    background: 'rgba(66, 133, 244, 0.1)',
                    color: '#4285F4',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'inline-block',
                    marginBottom: '8px',
                  }}
                >
                  Schritt 3 von 5 • Dacheindeckung
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
                  Womit ist Ihr Dach gedeckt?
                </h2>
                <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
                  Wichtig für die Auswahl der zertifizierten Dachhaken, Schienen und Unterkonstruktion.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                {[
                  { label: 'Ziegel', tag: 'Standardmontage', stat: 'Ton- / Betondachsteine', icon: <IconZiegel size={48} /> },
                  { label: 'Bitumen', tag: 'Flachdach-Optimum', stat: 'Schweißbahn / Folie', icon: <IconBitumen size={48} /> },
                  { label: 'Blech / Metall', tag: 'Leichtmontage', stat: 'Trapez- & Stehfalz', icon: <IconBlech size={48} /> },
                  { label: 'Asbest / Eternit', tag: 'Sonderprüfung', stat: 'Faserzement / Welleternit', icon: <IconAsbest size={48} /> },
                  { label: 'Sonstiges', tag: 'Individuell', stat: 'Schiefer, Reet, etc.', icon: <IconQuestion size={48} /> },
                ].map((item) => {
                  const isSelected = formData.dacheindeckung === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleSelectOption('dacheindeckung', item.label)}
                      className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: isSelected ? '#4285F4' : '#F1F5F9',
                            color: isSelected ? '#FFFFFF' : '#64748B',
                          }}
                        >
                          {item.tag}
                        </span>
                        {isSelected && (
                          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900 }}>
                            ✓ Gewählt
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? '#4285F4' : '#0F4761',
                          marginBottom: '8px',
                          transition: 'color 0.2s',
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0E2841', marginBottom: '3px' }}>
                          {item.label}
                        </h4>
                        <span style={{ fontSize: '11px', color: '#64748B', display: 'block' }}>
                          {item.stat}
                        </span>

                        <div className="step-progress-indicator">
                          <div
                            className="step-progress-fill"
                            style={{
                              width: isSelected ? '100%' : '60%',
                              background: isSelected ? '#4285F4' : '#CBD5E1',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '28px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                >
                  <ArrowLeft size={16} />
                  <span>Zurück</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================
              SCHRITT 4: Wie groß ist Ihre geschätzte freie Dachfläche?
              ======================================================== */}
          {currentStep === 4 && !isSuccess && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span
                  style={{
                    background: 'rgba(66, 133, 244, 0.1)',
                    color: '#4285F4',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'inline-block',
                    marginBottom: '8px',
                  }}
                >
                  Schritt 4 von 5 • Flächenkapazität
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
                  Wie groß ist Ihre geschätzte freie Dachfläche?
                </h2>
                <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
                  Gibt einen ersten Richtwert für die maximale Anlagenleistung in kWp und Ertragsberechnung.
                </p>
              </div>

              {/* Helper badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#F0F9FF',
                  border: '1px solid #BAE6FD',
                  borderRadius: '12px',
                  padding: '10px 18px',
                  maxWidth: '480px',
                  margin: '0 auto 28px',
                  color: '#0369A1',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                <Info size={16} color="#0284C7" />
                <span>Tipp: 1 kWp Leistung benötigt ca. 5 bis 6 m² Dachfläche</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
                {[
                  { label: 'Über 100 m²', tag: 'Maximaler Ertrag', sub: 'Großdach / Gewerbe / Großes EFH', stat: 'Bis 30+ kWp', icon: <IconAreaLarge size={52} /> },
                  { label: '20 - 100 m²', tag: 'Ideal für Eigenheim', sub: 'Standard Ein-/Zweifamilienhaus', stat: 'Ca. 10–20 kWp', icon: <IconAreaMedium size={52} /> },
                  { label: 'Unter 20 m²', tag: 'Kompakt-Anlage', sub: 'Garage / Carport / Kleinfläche', stat: 'Ca. 3–8 kWp', icon: <IconAreaSmall size={52} /> },
                ].map((item) => {
                  const isSelected = formData.dachflaeche === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleSelectOption('dachflaeche', item.label)}
                      className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
                      style={{ padding: '26px 18px' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            padding: '2px 7px',
                            borderRadius: '4px',
                            background: isSelected ? '#4285F4' : '#F1F5F9',
                            color: isSelected ? '#FFFFFF' : '#64748B',
                          }}
                        >
                          {item.tag}
                        </span>
                        {isSelected && (
                          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900 }}>
                            ✓ Gewählt
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          height: '66px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? '#4285F4' : '#0F4761',
                          marginBottom: '10px',
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0E2841', marginBottom: '4px' }}>
                          {item.label}
                        </h4>
                        <span style={{ fontSize: '12px', color: '#64748B', display: 'block', marginBottom: '4px' }}>
                          {item.sub}
                        </span>
                        <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#4285F4', display: 'block' }}>
                          {item.stat}
                        </span>

                        <div className="step-progress-indicator">
                          <div
                            className="step-progress-fill"
                            style={{
                              width: isSelected ? '100%' : '80%',
                              background: isSelected ? '#4285F4' : '#CBD5E1',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '28px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                >
                  <ArrowLeft size={16} />
                  <span>Zurück</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================
              SCHRITT 5: Sind Sie Eigentümer der Immobilie?
              ======================================================== */}
          {currentStep === 5 && !isSuccess && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span
                  style={{
                    background: 'rgba(66, 133, 244, 0.1)',
                    color: '#4285F4',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'inline-block',
                    marginBottom: '8px',
                  }}
                >
                  Schritt 5 von 5 • Rechtliche Prüfung
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841' }}>
                  Sind Sie Eigentümer der Immobilie?
                </h2>
                <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
                  Rechtliche Voraussetzung für die baugenehmigungsfreie Montage und den Netzanschluss beim Energieversorger.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
                {[
                  { label: 'Ja', tag: 'Direkt umsetzbar', sub: 'Allein- oder Miteigentümer', stat: '100% Entscheidungsfreiheit', icon: <IconCheckYes size={52} /> },
                  { label: 'Ja, Eigentümer-gemeinschaft', tag: 'WEG-Modell', sub: 'WEG mit Beschlussrecht', stat: 'Gemeinschafts-PV', icon: <IconCommunity size={52} /> },
                  { label: 'Nein', tag: 'Vermieter-Freigabe', sub: 'Mieter / Pächter', stat: 'Zustimmung erforderlich', icon: <IconCrossNo size={52} /> },
                ].map((item) => {
                  const isSelected = formData.eigentuemer === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleSelectOption('eigentuemer', item.label)}
                      className={`simulator-option-card ${isSelected ? 'selected' : ''}`}
                      style={{ padding: '26px 18px' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            padding: '2px 7px',
                            borderRadius: '4px',
                            background: isSelected ? '#4285F4' : '#F1F5F9',
                            color: isSelected ? '#FFFFFF' : '#64748B',
                          }}
                        >
                          {item.tag}
                        </span>
                        {isSelected && (
                          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 900 }}>
                            ✓ Gewählt
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          height: '66px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h4 style={{ fontSize: '16.5px', fontWeight: 900, color: '#0E2841', marginBottom: '4px' }}>
                          {item.label}
                        </h4>
                        <span style={{ fontSize: '12px', color: '#64748B', display: 'block', marginBottom: '4px' }}>
                          {item.sub}
                        </span>
                        <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#4285F4', display: 'block' }}>
                          {item.stat}
                        </span>

                        <div className="step-progress-indicator">
                          <div
                            className="step-progress-fill"
                            style={{
                              width: isSelected ? '100%' : '95%',
                              background: isSelected ? '#4285F4' : '#CBD5E1',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '28px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                >
                  <ArrowLeft size={16} />
                  <span>Zurück</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================
              SCHRITT 6: Kontaktdaten & Absenden (Resend API)
              ======================================================== */}
          {currentStep === 6 && !isSuccess && (
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span
                  className="category-pill"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#059669',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    padding: '4px 14px',
                    fontSize: '12px',
                    fontWeight: 800,
                  }}
                >
                  ✓ Fast geschafft • Letzter Schritt
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0E2841', marginTop: '10px' }}>
                  Wohin dürfen wir Ihre kostenlose Auswertung senden?
                </h2>
                <p style={{ color: '#64748B', fontSize: '14.5px', marginTop: '4px' }}>
                  Unser Ingenieurteam unter Leitung von Sabah Altaweel erstellt Ihre individuelle Ertragssimulation innerhalb von 24 Stunden.
                </p>
              </div>

              {/* Error Box */}
              {errorMessage && (
                <div style={{ background: '#FEE2E2', border: '1px solid #F87171', color: '#B91C1C', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', fontSize: '14px', fontWeight: 600 }}>
                  {errorMessage}
                </div>
              )}

              {/* Form Fields Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                {/* Anrede */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Anrede</label>
                  <select
                    value={formData.anrede}
                    onChange={(e) => setFormData({ ...formData, anrede: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841', background: '#FFFFFF' }}
                  >
                    <option value="Privat">Privat</option>
                    <option value="Firma">Firma</option>
                  </select>
                </div>

                {/* Vorname */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Vorname *</label>
                  <input
                    type="text"
                    required
                    placeholder="Max"
                    value={formData.vorname}
                    onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
                  />
                </div>

                {/* Nachname */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Nachname *</label>
                  <input
                    type="text"
                    required
                    placeholder="Mustermann"
                    value={formData.nachname}
                    onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
                  />
                </div>

                {/* E-Mail */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>E-Mail-Adresse *</label>
                  <input
                    type="email"
                    required
                    placeholder="max@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>Telefonnummer (optional)</label>
                  <input
                    type="tel"
                    placeholder="+49 170 1234567"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
                  />
                </div>

                {/* PLZ & Ort */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>PLZ & Ort (optional)</label>
                  <input
                    type="text"
                    placeholder="69115 Heidelberg"
                    value={formData.plzOrt}
                    onChange={(e) => setFormData({ ...formData, plzOrt: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841' }}
                  />
                </div>
              </div>

              {/* Notizen */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0E2841', marginBottom: '6px' }}>
                  Besondere Wünsche oder Notizen (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="z.B. Interesse an Wallbox, Batteriespeicher oder Notstromversorgung..."
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0E2841', resize: 'vertical' }}
                />
              </div>

              {/* Checkbox Datenschutz */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '28px' }}>
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                  style={{ width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer' }}
                />
                <label htmlFor="privacy" style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5, cursor: 'pointer' }}>
                  Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen gespeichert und verarbeitet werden. Weitere Hinweise in der{' '}
                  <Link href="/datenschutz" target="_blank" style={{ color: '#4285F4', fontWeight: 700, textDecoration: 'underline' }}>
                    Datenschutzerklärung
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button & Back Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                >
                  <ArrowLeft size={16} />
                  <span>Zurück</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold"
                  style={{
                    padding: '16px 36px',
                    fontSize: '16px',
                    fontWeight: 800,
                    borderRadius: '9999px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    <span>Wird gesendet...</span>
                  ) : (
                    <>
                      <span>Unverbindliches Angebot anfordern</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* ========================================================
              SCHRITT 7: Erfolgs-Bildschirm (Success State)
              ======================================================== */}
          {isSuccess && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)',
                }}
              >
                <CheckCircle2 size={46} />
              </div>

              <span className="category-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                Erfolgreich übermittelt
              </span>

              <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0E2841', marginTop: '12px', marginBottom: '12px' }}>
                Vielen Dank für Ihre Anfrage, {formData.anrede} {formData.nachname}!
              </h2>

              <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '580px', margin: '0 auto 30px', lineHeight: 1.6 }}>
                Wir haben Ihre Angaben erfolgreich erhalten. Unser leitender Ingenieur{' '}
                <strong style={{ color: '#0E2841' }}>Sabah Altaweel</strong> prüft Ihre Dachdaten und setzt sich innerhalb von{' '}
                <strong style={{ color: '#4285F4' }}>24 Stunden</strong> mit Ihrer kostenfreien Auswertung bei Ihnen in Verbindung.
              </p>

              {/* Summary Box */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid #E2E8F0',
                  textAlign: 'left',
                  maxWidth: '540px',
                  margin: '0 auto 32px',
                }}
              >
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0E2841', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Ihre übermittelten Projektdaten:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13.5px' }}>
                  <div>
                    <span style={{ color: '#64748B' }}>Gebäude:</span> <strong>{formData.gebauedeTyp || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Dachform:</span> <strong>{formData.dachform || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Eindeckung:</span> <strong>{formData.dacheindeckung || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Dachfläche:</span> <strong>{formData.dachflaeche || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Eigentümer:</span> <strong>{formData.eigentuemer || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Standort:</span> <strong>{formData.plzOrt || '—'}</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                  <span>Zurück zur Startseite</span>
                </Link>
                <a
                  href="https://wa.me/4915731063775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: '#4285F4', color: '#FFFFFF', padding: '14px 28px', border: 'none' }}
                >
                  <span>Direkt WhatsApp Chat</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Trust Badges under Questionnaire */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', marginTop: '36px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13.5px', fontWeight: 600 }}>
            <ShieldCheck size={18} color="#4285F4" />
            <span>100% VDE-konforme Planung</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13.5px', fontWeight: 600 }}>
            <Clock size={18} color="#4285F4" />
            <span>Rückmeldung innerhalb 24h</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13.5px', fontWeight: 600 }}>
            <CheckCircle2 size={18} color="#4285F4" />
            <span>Kostenfrei & unverbindlich</span>
          </div>
        </div>
      </div>
    </div>
  );
}
