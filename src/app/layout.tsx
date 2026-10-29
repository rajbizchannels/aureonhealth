import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/JsonLd'
import { SITE_URL, site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AureonCare | EHR, Scheduling & Billing Software for Clinics',
    template: '%s | AureonCare',
  },
  description:
    'All-in-one software for clinics: EHR, scheduling, e-prescribing, telehealth and billing. Fewer no-shows and denied claims. GDPR & HIPAA ready.',
  applicationName: site.name,
  keywords: [
    'practice management software',
    'EHR software',
    'electronic health records',
    'clinic management software',
    'medical scheduling software',
    'revenue cycle management',
    'medical billing software',
    'e-prescribing',
    'telehealth platform',
    'patient portal',
    'FHIR',
    'HL7',
    'GDPR',
    'HIPAA',
    'Praxissoftware',
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: 'Healthcare software',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aureoncare',
    creator: '@aureoncare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: {
    icon: '/logos/aureoncare-logo.png',
    apple: '/logos/aureoncare-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B4F4A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
