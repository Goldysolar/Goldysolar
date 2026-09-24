import re

with open("agb_raw.md", "r", encoding="utf-8") as f:
    lines = f.readlines()

jsx_output = """import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | Goldy Solar GmbH',
  description: 'Allgemeine Geschäftsbedingungen (AGB) der Goldy Solar GmbH',
};

export default function AGBPage() {
  return (
    <div className="container" style={{ paddingTop: '80px', paddingBottom: '100px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '40px', color: '#0F4761' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
      
      <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#404040' }}>
"""

in_list = False
for line in lines:
    line = line.strip()
    if not line:
        continue
    if line == "-------------------":
        jsx_output += "        <hr style={{ margin: '40px 0', borderColor: '#CBD5E1' }} />\n"
        continue

    # Escape HTML characters
    line = line.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    if line.startswith("Allgemeine Geschäftsbedingungen für"):
        jsx_output += f"        <h2 style={{{{ fontSize: '28px', fontWeight: 900, marginTop: '60px', marginBottom: '20px', color: '#0F4761' }}}}>{line}</h2>\n"
    elif line.startswith("für Planung"):
        jsx_output += f"        <p style={{{{ fontSize: '18px', fontWeight: 700, marginBottom: '30px', color: '#4285F4' }}}}>{line}</p>\n"
    elif line.startswith("§"):
        jsx_output += f"        <h3 style={{{{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '12px', color: '#0E2841' }}}}>{line}</h3>\n"
    elif line.startswith("(Rechtsgrundlage:"):
        jsx_output += f"        <p style={{{{ fontSize: '13px', fontStyle: 'italic', color: '#64748B', marginBottom: '16px' }}}}>{line}</p>\n"
    elif line in ["Widerrufsrecht", "Folgen des Widerrufs", "Vorzeitiges Erlöschen des Widerrufsrechts", "Widerrufsbelehrung", "Muster-Widerrufsformular"]:
        jsx_output += f"        <h4 style={{{{ fontSize: '18px', fontWeight: 700, marginTop: '24px', marginBottom: '12px', color: '#0E2841' }}}}>{line}</h4>\n"
    elif line.startswith("Goldy Solar GmbH") or line.startswith("Rudolf-Diesel-Straße") or line.startswith("Telefon:") or line.startswith("E-Mail:"):
        jsx_output += f"        <p style={{{{ marginBottom: '4px' }}}}>{line}</p>\n"
    else:
        # standard paragraph
        jsx_output += f"        <p style={{{{ marginBottom: '16px' }}}}>{line}</p>\n"

jsx_output += """      </div>
    </div>
  );
}
"""

with open("src/app/agb/page.tsx", "w", encoding="utf-8") as f:
    f.write(jsx_output)
