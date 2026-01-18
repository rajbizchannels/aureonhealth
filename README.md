# AureonCare - Marketing Website

A modern, responsive marketing and outreach website for AureonCare, showcasing our healthcare solutions and team.

## Overview

This website serves as the primary marketing platform for AureonCare, featuring:

- **Home Page**: Engaging hero section with key features and call-to-action
- **About Us**: Company story, mission, vision, and values
- **Product**: Comprehensive overview of the AureonCare platform and features
- **Team**: Meet our leadership team and departments
- **Contact**: Contact form and information for getting in touch

## Design

The website features a beautiful gradient color palette:
- **Gold/Amber**: #FFB347, #F4A460
- **Ocean Blue**: #0C4A6E, #1E3A8A
- Smooth gradient transitions throughout the site

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: React Icons
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aureoncare-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
aureoncare-website/
├── src/
│   ├── app/
│   │   ├── about/          # About Us page
│   │   ├── contact/        # Contact page
│   │   ├── product/        # Product page
│   │   ├── team/           # Team page
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation component
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Features

- ✅ Fully responsive design
- ✅ Modern gradient color scheme
- ✅ SEO optimized
- ✅ Fast page loads with Next.js
- ✅ Mobile-friendly navigation
- ✅ Contact form functionality
- ✅ TypeScript for type safety

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'aureon-gold': '#F4A460',
  'aureon-amber': '#FFB347',
  'aureon-blue': '#1E3A8A',
  'aureon-ocean': '#0C4A6E',
}
```

### Content

- Page content is located in `src/app/*/page.tsx`
- Update team members in `src/app/team/page.tsx`
- Modify contact information in `src/app/contact/page.tsx` and `src/components/Footer.tsx`

## Contact Form Setup

The contact form uses Vercel Edge Functions to send emails. To enable email functionality:

### 1. Choose an Email Service

**Option A: Resend (Recommended)**
- Sign up at [resend.com](https://resend.com)
- Get your API key
- Verify your domain or use a test email

**Option B: SendGrid**
- Sign up at [sendgrid.com](https://sendgrid.com)
- Get your API key
- Verify your sender email

### 2. Configure Environment Variables

Create a `.env.local` file:

```bash
# For Resend
RESEND_API_KEY=re_xxxxxxxxxx
EMAIL_FROM=contact@aureoncare.com
EMAIL_TO=info@aureoncare.tech

# OR for SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxx
EMAIL_FROM=contact@aureoncare.com
EMAIL_TO=info@aureoncare.tech
```

### 3. Deploy with Environment Variables

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add your API key and email addresses
3. Redeploy

**Local Testing:**
- Contact form will work without email service (logs to console)
- To test emails, add environment variables to `.env.local`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## License

Copyright © 2025 AureonCare. All rights reserved.

## Support

For questions or support, contact: info@aureoncare.tech
