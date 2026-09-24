import json

with open("datenschutz_raw.html", "r", encoding="utf-8") as f:
    html_content = f.read()

json_html = json.dumps(html_content)

jsx_code = f"""import React from 'react';
import type {{ Metadata }} from 'next';
import PageHeroBanner from '@/components/common/PageHeroBanner';

export const metadata: Metadata = {{
  title: 'Datenschutzerklärung | Goldy Solar GmbH Heidelberg',
  description: 'Datenschutzerklärung der Goldy Solar GmbH.',
}};

export default function DatenschutzPage() {{
  return (
    <div style={{{{ background: '#F8FAFC', minHeight: '100vh' }}}}>
      <PageHeroBanner
        category="RECHTLICHES"
        title="Datenschutzerklärung"
        subtitle="Informationen zur Erhebung und Verarbeitung Ihrer Daten."
        trustTags={{[]}}
        show3DIcons={{false}}
      />

      <div className="container" style={{{{ paddingTop: '50px', paddingBottom: '90px', maxWidth: '900px' }}}}>
        <div 
          className="legal-html-content"
          style={{{{ background: '#FFFFFF', padding: '50px', borderRadius: '16px', boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)' }}}}
          dangerouslySetInnerHTML={{{{ __html: {json_html} }}}}
        />
      </div>
    </div>
  );
}}
"""

with open("src/app/datenschutz/page.tsx", "w", encoding="utf-8") as f:
    f.write(jsx_code)
