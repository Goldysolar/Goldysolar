# Goldy Solar GmbH - Web Platform

## Tech Stack & Architecture
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript / React 19
- **Styling:** CSS Modules & Global CSS (Custom Design System)
- **Icons:** Lucide React
- **Email/API:** Resend (for form/contact handling)
- **Deployment:** Vercel

## Security & Performance
- SSR/SSG rendering for high performance and core web vitals.
- DSGVO-compliant out of the box (System Fonts, explicit Cookie Consent).
- Zero third-party tracker dependencies on initial load.
- Modern structured API routing (`/api/send-anfrage`, `/api/contact`).

## Development
```bash
npm run dev
```

## Production
```bash
npm run build
npm start
```
