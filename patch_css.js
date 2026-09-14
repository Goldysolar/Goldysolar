const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace .footer-split and its descendants completely
css = css.replace(/\.footer-split \{[\s\S]*?\.footer-cols \{[\s\S]*?\}\n/g, '');

// Append our new footer CSS at the end
css += `
/* ==================== FOOTER NEW STYLES ==================== */
.site-footer {
  position: relative;
  margin-top: 0;
  background: linear-gradient(to right, #FFFFFF 0%, #FFFFFF 25%, #4285F4 25%, #4285F4 100%);
}

.site-footer-inner {
  display: flex;
  min-height: 320px;
  padding-top: 4px;
}

.footer-logo-box {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 28px;
}

.footer-main-box {
  width: 75%;
  padding: 44px 0 32px 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FFFFFF;
}

.footer-cols-new {
  display: grid;
  grid-template-columns: 0.9fr 1.5fr 1.1fr;
  gap: 28px;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .site-footer {
    background: #4285F4; /* On mobile, blue everywhere except the logo box which is white */
  }
  .site-footer-inner {
    flex-direction: column;
  }
  .footer-logo-box {
    width: 100%;
    background: #FFFFFF; /* Explicitly white on mobile */
    padding: 30px 20px;
  }
  .footer-main-box {
    width: 100%;
    padding: 30px 20px;
  }
  .footer-cols-new {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
`;

fs.writeFileSync('src/app/globals.css', css);
