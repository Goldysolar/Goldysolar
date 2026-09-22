import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      gebauedeTyp,
      dachform,
      dacheindeckung,
      dachflaeche,
      eigentuemer,
      anrede,
      vorname,
      nachname,
      email,
      telefon,
      plzOrt,
      strasse,
      nachricht,
    } = data;

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@goldysolar.de';

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 20px; color: #0F4761; }
          .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #4285F4; padding: 24px 30px; color: #FFFFFF; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; color: #FFFFFF; }
          .header p { margin: 6px 0 0; color: #EAF4FA; font-size: 14px; }
          .badge { display: inline-block; background: #FFD700; color: #0E2841; font-weight: 800; font-size: 12px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-top: 10px; }
          .content { padding: 30px; }
          .section-title { font-size: 16px; font-weight: 800; color: #0E2841; border-bottom: 2px solid #4285F4; padding-bottom: 8px; margin-top: 24px; margin-bottom: 16px; }
          .data-table { width: 100%; border-collapse: collapse; }
          .data-table td { padding: 10px 12px; border-bottom: 1px solid #F1F5F9; font-size: 14px; }
          .data-table td.label { font-weight: 700; color: #64748B; width: 40%; background: #F8FAFC; }
          .data-table td.value { color: #0F4761; font-weight: 600; }
          .footer { background: #F8FAFC; padding: 16px; text-align: center; font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⚡ Neue 1-Minute Solar-Anfrage</h1>
            <p>Eingegangen über das Online-Formular von Goldy Solar</p>
            <span class="badge">Prioritäts-Lead</span>
          </div>

          <div class="content">
            <div class="section-title" style="margin-top: 0;">👤 Kontaktdaten des Kunden</div>
            <table class="data-table">
              <tr><td class="label">Name:</td><td class="value">${anrede ? anrede + ' ' : ''}${vorname || ''} ${nachname || ''}</td></tr>
              <tr><td class="label">E-Mail:</td><td class="value"><a href="mailto:${email}" style="color: #4285F4; text-decoration: none; font-weight: 700;">${email}</a></td></tr>
              <tr><td class="label">Telefon:</td><td class="value"><a href="tel:${telefon}" style="color: #4285F4; text-decoration: none; font-weight: 700;">${telefon}</a></td></tr>
              <tr><td class="label">PLZ & Ort:</td><td class="value">${plzOrt || 'Nicht angegeben'}</td></tr>
              <tr><td class="label">Straße & Nr.:</td><td class="value">${strasse || 'Nicht angegeben'}</td></tr>
            </table>

            <div class="section-title">🏠 Projektdaten & Dachanalyse</div>
            <table class="data-table">
              <tr><td class="label">1. Gebäude-Typ:</td><td class="value" style="color: #4285F4; font-weight: 700;">${gebauedeTyp || 'Nicht angegeben'}</td></tr>
              <tr><td class="label">2. Dachform:</td><td class="value">${dachform || 'Nicht angegeben'}</td></tr>
              <tr><td class="label">3. Dacheindeckung:</td><td class="value">${dacheindeckung || 'Nicht angegeben'}</td></tr>
              <tr><td class="label">4. Freie Dachfläche:</td><td class="value">${dachflaeche || 'Nicht angegeben'}</td></tr>
              <tr><td class="label">5. Eigentümer:</td><td class="value">${eigentuemer || 'Nicht angegeben'}</td></tr>
            </table>

            ${
              nachricht
                ? `
              <div class="section-title">💬 Anmerkungen des Kunden</div>
              <p style="background: #F8FAFC; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #4285F4; font-size: 14px; line-height: 1.6; margin: 0;">
                ${nachricht.replace(/\n/g, '<br/>')}
              </p>
            `
                : ''
            }
          </div>

          <div class="footer">
            Goldy Solar GmbH • Automatisierte Benachrichtigung • Datum: ${new Date().toLocaleString('de-DE')}
          </div>
        </div>
      </body>
      </html>
    `;

    // If Resend API Key is configured, send actual email
    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Goldy Solar Anfrage <info@goldysolar.de>',
          to: [recipientEmail],
          reply_to: email,
          subject: `⚡ Neue Solar-Anfrage von ${vorname} ${nachname} (${plzOrt || 'PV'})`,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Resend API Error:', errText);
        return NextResponse.json({ success: false, error: errText }, { status: 500 });
      }

      const resData = await response.json();
      return NextResponse.json({ success: true, id: resData.id });
    } else {
      // Dev mode: log payload
      console.log('--- [RESEND DEV MOCK] Anfrage erhalten ---');
      console.log(JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true, mock: true, message: 'Simulated email delivery (set RESEND_API_KEY in .env.local to send live emails)' });
    }
  } catch (error: any) {
    console.error('Error in send-anfrage API:', error);
    return NextResponse.json({ success: false, error: error?.message || 'Server error' }, { status: 500 });
  }
}
