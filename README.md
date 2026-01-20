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

The contact form uses Nodemailer with Gmail SMTP to send emails.

### 1. Gmail SMTP Setup

**Important Notes:**
- If you have 2-Factor Authentication enabled on Gmail, you MUST use an App Password
- Generate App Password at: https://myaccount.google.com/apppasswords
- Select "Mail" as the app and "Other" as the device
- Use the generated 16-character password instead of your regular Gmail password

### 2. Configure Environment Variables

The `.env.local` file is already configured with Gmail SMTP credentials:

```bash
# Gmail SMTP Configuration
SMTP_USER=rajbizchannels@gmail.com
SMTP_PASS=nwatzedyfkksfdun

# Email recipient (where contact form submissions are sent)
EMAIL_TO=rajbizchannels@gmail.com
```

**Note:** If Gmail authentication fails, you may need to:
1. Enable "Less secure app access" in Gmail settings (not recommended), OR
2. Use an App Password (recommended if 2FA is enabled)

### 3. Deploy with Environment Variables

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add the following variables:
   - `SMTP_USER` = rajbizchannels@gmail.com
   - `SMTP_PASS` = nwatzedyfkksfdun
   - `EMAIL_TO` = rajbizchannels@gmail.com
3. Redeploy

**Local Testing:**
- Environment variables are already configured in `.env.local`
- Run `npm install` to install nodemailer dependency
- Test the contact form at http://localhost:3000/contact

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
