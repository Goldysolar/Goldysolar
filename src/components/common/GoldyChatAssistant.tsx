'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
}

const STEPS = [
  { id: 'NAME', question: 'Hallo! Ich bin Ihr Goldy Assistent 🤖. Wie lautet Ihr vollständiger Name?', options: [] },
  { id: 'GEBAEUDEART', question: 'Für welche Gebäudeart interessieren Sie sich?', options: ['Einfamilienhaus', 'Firmengebäude', 'Freilandfläche', 'Sonstiges'] },
  { id: 'DACHGEOMETRIE', question: 'Welche Dachform hat das Gebäude?', options: ['Satteldach', 'Pultdach', 'Flachdach', 'Walmdach', 'Sonstiges'] },
  { id: 'DACHEINDECKUNG', question: 'Aus welchem Material besteht die Dacheindeckung?', options: ['Ziegel', 'Bitumen', 'Blech / Metall', 'Asbest / Eternit', 'Sonstiges'] },
  { id: 'FLAECHE', question: 'Wie groß ist die zur Verfügung stehende Dachfläche ca.?', options: ['Über 100 m²', '20 - 100 m²', 'Unter 20 m²'] },
  { id: 'RECHTLICHES', question: 'Sind Sie Eigentümer des Gebäudes?', options: ['Ja', 'Ja, Eigentümergemeinschaft', 'Nein'] },
  { id: 'EMAIL', question: 'Vielen Dank! Wie lautet Ihre E-Mail Adresse?', options: [] },
  { id: 'PHONE', question: 'Unter welcher Telefonnummer können wir Sie erreichen? (Optional)', options: ['Überspringen'] },
  { id: 'PLZ_ORT', question: 'Wie lautet Ihre Postleitzahl und Ort? (Optional)', options: ['Überspringen'] },
  { id: 'STREET', question: 'Wie lautet Ihre Straße und Hausnummer?', options: [] }
];

export default function GoldyChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Collected data
  const [userData, setUserData] = useState<Record<string, string>>({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(STEPS[0].question, STEPS[0].options);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text: string, options?: string[]) => {
    setMessages(prev => [...prev, { id: Date.now().toString() + Math.random(), sender: 'bot', text, options }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString() + Math.random(), sender: 'user', text }]);
  };

  const handleSend = async (forcedText?: string) => {
    const text = (forcedText || inputValue).trim();
    if (!text) return;
    
    if (!forcedText) setInputValue('');
    addUserMessage(text);

    if (stepIndex >= STEPS.length) return; // Already finished

    const stepInfo = STEPS[stepIndex];
    let newData = { ...userData };

    setTimeout(async () => {
      // 1. Validation for NAME
      if (stepInfo.id === 'NAME') {
        if (!/^[a-zA-ZÄÖÜäöüß\s\-]{2,40}$/.test(text) || !text.trim().includes(' ')) {
          addBotMessage("Bitte geben Sie Ihren Vor- und Nachnamen ein (mit einem Leerzeichen dazwischen).");
          return;
        }
        const firstName = text.split(' ')[0];
        newData.name = text;
        newData.firstName = firstName;
        setUserData(newData);
        
        addBotMessage(`Freut mich, ${firstName}! ${STEPS[1].question}`, STEPS[1].options);
        setStepIndex(1);
        return;
      }

      // 2. Validation for Multiple Choice Options
      if (stepInfo.options && stepInfo.options.length > 0 && !['PHONE', 'PLZ_ORT'].includes(stepInfo.id)) {
        const matchedOption = stepInfo.options.find(opt => opt.toLowerCase() === text.toLowerCase());
        if (!matchedOption) {
          addBotMessage("Ich bin ein intelligenter Assistent, der nur auf die Dienste dieser Seite spezialisiert ist. Bitte wählen Sie eine der folgenden Optionen:", stepInfo.options);
          return;
        }
        newData[stepInfo.id.toLowerCase()] = matchedOption;
      } 
      // 3. Validation for Text Inputs
      else {
        if (stepInfo.id === 'EMAIL' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
          addBotMessage("Bitte geben Sie eine gültige E-Mail Adresse ein.");
          return;
        }
        newData[stepInfo.id.toLowerCase()] = text;
      }

      setUserData(newData);

      // Move to next step or submit
      const nextStepIndex = stepIndex + 1;
      if (nextStepIndex < STEPS.length) {
        addBotMessage(STEPS[nextStepIndex].question, STEPS[nextStepIndex].options);
        setStepIndex(nextStepIndex);
      } else {
        // Finished all steps
        setStepIndex(nextStepIndex);
        addBotMessage("Vielen Dank! Ihre Daten werden übermittelt...");
        setIsSubmitting(true);

        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: newData.name,
              email: newData.email,
              phone: newData.phone,
              plzOrt: newData.plz_ort,
              street: newData.street,
              gebaeudeart: newData.gebaeudeart,
              dachgeometrie: newData.dachgeometrie,
              dacheindeckung: newData.dacheindeckung,
              flaeche: newData.flaeche,
              rechtliches: newData.rechtliches
            })
          });

          if (res.ok) {
            addBotMessage("Vielen Dank für Ihre Anfrage! Wir haben Ihre Daten erfolgreich erhalten und werden uns innerhalb von maximal 2 Tagen bei Ihnen melden.");
          } else {
            addBotMessage("Es gab leider ein Problem beim Senden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.");
          }
        } catch (error) {
          addBotMessage("Es ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt.");
        } finally {
          setIsSubmitting(false);
        }
      }
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: '#FFD700',
            color: '#0F4761',
            border: 'none',
            borderRadius: '50%',
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'transform 0.25s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Bot size={34} />
        </button>
      )}

      {isOpen && (
        <div style={{
          width: '360px',
          height: '550px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 12px 40px rgba(15, 71, 97, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid #E1DFDD'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: '#0F4761',
            color: '#FFFFFF',
            padding: '18px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#FFD700', borderRadius: '50%', padding: '6px', color: '#0F4761' }}>
                <Bot size={22} />
              </div>
              <div>
                <span style={{ fontWeight: 800, fontSize: '16px', display: 'block' }}>Goldy Assistent</span>
                <span style={{ fontSize: '12px', color: '#CBD5E1' }}>Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '4px' }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Chat Area */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            backgroundColor: '#F8FAFC',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {messages.map((msg, idx) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                
                <div style={{ 
                  backgroundColor: msg.sender === 'user' ? '#4285F4' : '#FFFFFF',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#0F4761',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  maxWidth: '85%',
                  fontSize: '14.5px',
                  lineHeight: 1.5,
                  boxShadow: msg.sender === 'bot' ? '0 2px 8px rgba(15, 71, 97, 0.06)' : 'none',
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                }}>
                  {msg.text}
                </div>

                {/* Render Options if they exist and it's the last message */}
                {msg.options && msg.options.length > 0 && idx === messages.length - 1 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSend(opt)}
                        style={{
                          background: 'rgba(66, 133, 244, 0.1)',
                          color: '#4285F4',
                          border: '1px solid rgba(66, 133, 244, 0.2)',
                          padding: '8px 14px',
                          borderRadius: '99px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = '#4285F4';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(66, 133, 244, 0.1)';
                          e.currentTarget.style.color = '#4285F4';
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isSubmitting && (
              <div style={{ alignSelf: 'flex-start', color: '#64748B', fontSize: '13px', fontStyle: 'italic' }}>
                E-Mail wird gesendet...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '16px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E1DFDD',
            display: 'flex',
            gap: '10px'
          }}>
            <input 
              type="text" 
              placeholder={stepIndex >= STEPS.length ? "Chat beendet" : "Ihre Nachricht..."}
              disabled={stepIndex >= STEPS.length || isSubmitting}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '99px',
                border: '1px solid #CBD5E1',
                fontSize: '14.5px',
                outline: 'none',
                color: '#0F4761'
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={stepIndex >= STEPS.length || isSubmitting || !inputValue.trim()}
              style={{
                backgroundColor: inputValue.trim() ? '#4285F4' : '#E2E8F0',
                color: inputValue.trim() ? '#FFFFFF' : '#94A3B8',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s'
              }}
            >
              <Send size={18} style={{ marginLeft: '2px' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
