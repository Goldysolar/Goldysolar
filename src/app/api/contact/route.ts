import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// NOTE: You need to set RESEND_API_KEY in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY || 're_default_key');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields (basic)
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name und E-Mail sind erforderlich' }, { status: 400 });
    }

    const {
      name,
      email,
      phone,
      plzOrt,
      street,
      gebaeudeart,
      dachgeometrie,
      dacheindeckung,
      flaeche,
      rechtliches
    } = data;

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Glody Solar <onboarding@resend.dev>', // Update with a verified domain if available
      to: process.env.CONTACT_EMAIL || 'info@glody-solar.de', // Update with company email
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Projektanfrage via Chat-Assistent</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>PLZ & Ort:</strong> ${plzOrt}</p>
        <p><strong>Straße & Hausnummer:</strong> ${street}</p>
        
        <h3>Projektdetails</h3>
        <ul>
          <li><strong>Gebäudeart:</strong> ${gebaeudeart}</li>
          <li><strong>Dachgeometrie:</strong> ${dachgeometrie}</li>
          <li><strong>Dacheindeckung:</strong> ${dacheindeckung}</li>
          <li><strong>Flächenkapazität:</strong> ${flaeche}</li>
          <li><strong>Eigentümer:</strong> ${rechtliches}</li>
        </ul>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}
