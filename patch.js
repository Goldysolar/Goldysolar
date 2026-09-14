const fs = require('fs');

// Patch page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove the small tags
page = page.replace(/<span style=\{\{ fontSize: '11px', color: '#FFD700'.*?Eigenheime &amp; Förderung<\/span>\n?/g, '');
page = page.replace(/<span style=\{\{ fontSize: '11px', color: '#FFD700'.*?Betriebskosten &amp; Rendite<\/span>\n?/g, '');
page = page.replace(/<span style=\{\{ fontSize: '11px', color: '#FFD700'.*?Freiflächen &amp; Solarparks<\/span>\n?/g, '');

// Change colors of the 3 h4 titles
page = page.replace(/<h4 className="customer-card-title">Photovoltaik für Ihr Zuhause<\/h4>/g, '<h4 className="customer-card-title" style={{ color: \'#FFD700\' }}>Photovoltaik für Ihr Zuhause</h4>');
page = page.replace(/<h4 className="customer-card-title">Solar &amp; Speicher für Unternehmen<\/h4>/g, '<h4 className="customer-card-title" style={{ color: \'#FFD700\' }}>Solar &amp; Speicher für Unternehmen</h4>');
page = page.replace(/<h4 className="customer-card-title">EPC &amp; Utility Scale Großprojekte<\/h4>/g, '<h4 className="customer-card-title" style={{ color: \'#FFD700\' }}>EPC &amp; Utility Scale Großprojekte</h4>');

// Change Kostenlose Beratung to 1 Minute Anfrage (in those specific buttons)
page = page.replace(/<span>Kostenlose Beratung<\/span>/g, '<span>1 Minute Anfrage</span>');

// Delete ERFAHRUNG & INGENIEURSKOMPETENZ
page = page.replace(/<div style=\{\{ fontSize: '12px', color: '#595959', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' \}\}>\s*ERFAHRUNG &amp; INGENIEURSKOMPETENZ\s*<\/div>/g, '');
// Wait, maybe it's just 'ERFAHRUNG & INGENIEURSKOMPETENZ'
page = page.replace(/<div[^>]*>\s*ERFAHRUNG &(?:amp;)? INGENIEURSKOMPETENZ\s*<\/div>\n?/g, '');

// Change background of 100% VDE-konforme...
// It was: background: '#FFD700', color: '#0E2841'
// Let's replace the whole style for that specific line
// Find: <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFD700', color: '#0E2841'
page = page.replace(/background: '#FFD700', color: '#0E2841'/g, "background: '#4285F4', color: '#FFFFFF'");

fs.writeFileSync('src/app/page.tsx', page);


// Patch Footer.tsx
let footer = fs.readFileSync('src/components/common/Footer.tsx', 'utf8');

// Change VDE text color to #FFD700
footer = footer.replace(/color: '#0F4761'/g, "color: '#FFD700'");
// Decrease white logo panel width and make logo centered. Move Impressum/Datenschutz to white area.
// Current:
// { display: 'flex', minHeight: '320px', paddingTop: '4px' }
// Left panel: width: '30%', right panel: width: '70%'
// Let's change Left to 25%, Right to 75%. Also handle mobile stacking!
// Let's rewrite Footer completely to be responsive properly and include Impressum.

