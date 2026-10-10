'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { AnfrageFormData } from '@/components/anfrage/types';
import Step1BuildingType from '@/components/anfrage/Step1BuildingType';
import Step2RoofShape from '@/components/anfrage/Step2RoofShape';
import Step3RoofCovering from '@/components/anfrage/Step3RoofCovering';
import Step4RoofArea from '@/components/anfrage/Step4RoofArea';
import Step5Ownership from '@/components/anfrage/Step5Ownership';
import Step6ContactForm from '@/components/anfrage/Step6ContactForm';
import StepSuccess from '@/components/anfrage/StepSuccess';

export default function AnfragePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalQuestionSteps = 5;

  // Form State
  const [formData, setFormData] = useState<AnfrageFormData>({
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
    nachricht: '',
    website_url: '',
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSelectOption = (field: keyof AnfrageFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 240);
  };

  const handleFieldChange = (field: keyof AnfrageFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
    } catch {
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
          border-color: #FFDD00;
          box-shadow: 0 16px 32px rgba(255, 221, 0, 0.22);
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
            <Sparkles size={15} color="#FFDD00" />
            <span>1-MINUTE SOLAR- & ENERGIE-ANFRAGE</span>
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#FFDD00', marginTop: '12px', marginBottom: '8px', letterSpacing: '-0.5px' }}>
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
                    background: 'linear-gradient(90deg, #4285F4 0%, #FFDD00 100%)',
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
            <Step1BuildingType
              selected={formData.gebauedeTyp}
              onSelect={(val) => handleSelectOption('gebauedeTyp', val)}
            />
          )}

          {/* ========================================================
              SCHRITT 2: Welche Dachform hat das Haus?
              ======================================================== */}
          {currentStep === 2 && !isSuccess && (
            <Step2RoofShape
              selected={formData.dachform}
              onSelect={(val) => handleSelectOption('dachform', val)}
              onPrev={handlePrevStep}
            />
          )}

          {/* ========================================================
              SCHRITT 3: Womit ist Ihr Dach gedeckt?
              ======================================================== */}
          {currentStep === 3 && !isSuccess && (
            <Step3RoofCovering
              selected={formData.dacheindeckung}
              onSelect={(val) => handleSelectOption('dacheindeckung', val)}
              onPrev={handlePrevStep}
            />
          )}

          {/* ========================================================
              SCHRITT 4: Wie groß ist Ihre geschätzte freie Dachfläche?
              ======================================================== */}
          {currentStep === 4 && !isSuccess && (
            <Step4RoofArea
              selected={formData.dachflaeche}
              onSelect={(val) => handleSelectOption('dachflaeche', val)}
              onPrev={handlePrevStep}
            />
          )}

          {/* ========================================================
              SCHRITT 5: Sind Sie Eigentümer der Immobilie?
              ======================================================== */}
          {currentStep === 5 && !isSuccess && (
            <Step5Ownership
              selected={formData.eigentuemer}
              onSelect={(val) => handleSelectOption('eigentuemer', val)}
              onPrev={handlePrevStep}
            />
          )}

          {/* ========================================================
              SCHRITT 6: Kontaktdaten & Absenden (Resend API)
              ======================================================== */}
          {currentStep === 6 && !isSuccess && (
            <Step6ContactForm
              formData={formData}
              onChange={handleFieldChange}
              onSubmit={handleSubmit}
              onPrev={handlePrevStep}
              isSubmitting={isSubmitting}
              errorMessage={errorMessage}
            />
          )}

          {/* ========================================================
              SCHRITT 7: Erfolgs-Bildschirm (Success State)
              ======================================================== */}
          {isSuccess && (
            <StepSuccess formData={formData} />
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
