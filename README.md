# Timothy Academy Performance Dashboard

Real-time student performance tracking, predictive insights, and automated reports for Kenyan schools.

**Website 40 in the 100 Website Challenge** - School Performance Tracking Dashboard

## Features

### Marketing Site
- **Hero Section** - Animated entrance with 3D Kenya county map showing subscribed schools
- **Scrollytelling** - 4-beat story showing school transformation journey
- **Features Grid** - 8 core features with icons
- **Interactive Demo** - Public dashboard with dummy Kenyan school data
- **Flipbook Guide** - "How It Works" 8-page interactive guide
- **Pricing** - 3 tiers (Primary, Secondary, County Package)
- **Testimonials** - Real quotes from school leaders
- **Contact Form** - School registration with reCAPTCHA
- **Newsletter** - Education insights subscription
- **WhatsApp Integration** - Floating button for demo booking

### Authenticated Dashboard (Technical Preview)
- **Overview Tab** - KPI cards, charts, activity feed
- **Class Performance** - Subject breakdown, top/bottom students
- **Students** - Search, cards, detail pages
- **Attendance** - Heatmap calendar, submission forms
- **Predictions** - KCSE/CBC grade predictions
- **Reports** - PDF generation, WhatsApp delivery
- **Staff** - Performance tracking, workload
- **Settings** - School profile, academic calendar

### Effects Implemented
- **EFFECT-01**: Three.js-style Kenya globe (SVG-based)
- **EFFECT-02**: Scrollytelling with IntersectionObserver
- **EFFECT-18**: Animated gradients on hero
- **EFFECT-23**: Sequenced hero entrance
- **EFFECT-28**: Glassmorphic scroll-aware nav
- **EFFECT-30**: Flipbook with 3D page flip

### Design System
- **Typography**: Body 15px minimum, Navigation 13px, Buttons 12px
- **Colors**: Kenya-inspired palette with school theme
- **Responsive**: 1440px, 1024px, 768px, 390px, 320px
- **WCAG AA**: All chart text passes contrast requirements

## Tech Stack

- **Framework**: React 19.3.0 with Vite
- **UI Library**: CoreUI React 5.13.0
- **Charts**: Chart.js via @coreui/react-chartjs
- **Styling**: SCSS with CSS custom properties
- **State**: Redux for global state
- **Routing**: React Router DOM 7.x
- **Icons**: CoreUI Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

## Project Structure

```
Timothy-Academy-Performance-Dashboard/
├── public/
│   ├── images/           # Pexels images
│   ├── favicon.ico
│   ├── manifest.json
│   └── image-credits.md
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── CookieConsent.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   ├── Captcha.jsx
│   │   └── marketing/
│   │       ├── KenyaGlobe.jsx
│   │       ├── Scrollytelling.jsx
│   │       ├── FeaturesGrid.jsx
│   │       ├── InteractiveDemo.jsx
│   │       ├── Flipbook.jsx
│   │       ├── PricingSection.jsx
│   │       ├── Testimonials.jsx
│   │       ├── ContactForm.jsx
│   │       ├── Newsletter.jsx
│   │       └── Footer.jsx
│   ├── data/
│   │   └── dummyData.js   # Kenyan school dummy data
│   ├── scss/
│   │   ├── global.scss
│   │   ├── variables.scss
│   │   ├── legal.scss
│   │   └── style.scss
│   ├── views/
│   │   ├── marketing/
│   │   │   └── Home.jsx
│   │   ├── legal/
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   ├── Terms.jsx
│   │   │   └── CookiePolicy.jsx
│   │   └── dashboard/
│   │       └── Dashboard.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── routes.js
├── .env.example
├── vercel.json
├── .nvmrc
├── package.json
└── index.html
```

## Environment Variables

See `.env.example` for all required environment variables:

- `RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` - reCAPTCHA v3
- `AUTH_SECRET` - NextAuth secret
- `KV_REST_API_URL` / `KV_REST_API_TOKEN` - Vercel KV
- `EMAIL_*` - Nodemailer SMTP settings
- `WHATSAPP_*` - WhatsApp Business API

## API Routes (Backend)

```
POST /api/register         - School sign-up
POST /api/dashboard/overview - KPI data
POST /api/dashboard/classes - Class performance
POST /api/dashboard/students - Student roster
POST /api/dashboard/attendance - Attendance CRUD
POST /api/dashboard/predictions - Grade predictions
POST /api/report/generate  - PDF generation
POST /api/report/deliver   - WhatsApp/email delivery
POST /api/report/schedule  - Schedule CRUD
POST /api/staff/invite     - Staff invite with OTP
POST /api/newsletter       - Newsletter subscription
POST /api/contact          - Contact form
POST /api/captcha          - reCAPTCHA verification
POST /api/ws              - WebSocket presence
```

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Data Protection

This project complies with:
- **Kenya Data Protection Act 2019**
- Student data never used for third-party marketing
- Schools own their data
- GDPR-compliant data handling practices

## License

MIT License - see LICENSE file for details.

## Future Dashboards in 100 Website Challenge

- **55**: Church Giving Dashboard
- **70**: Hotel Occupancy Dashboard  
- **85**: NGO Impact Metrics Dashboard
- **100**: Master Analytics Platform
