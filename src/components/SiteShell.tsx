import '@/app/globals.css'
import type { Metadata, Viewport } from 'next'
import Navbar from './Navbar'
import Footer from './Footer'
import JsonLd, { organizationSchema, websiteSchema } from './JsonLd'
import { SITE_URL, site } from '@/lib/site'
import { rootMetadata } from '@/lib/seo'
import { type Locale, getDictionary, htmlLang } from '@/i18n'

// Shared <html> shell for each language's root layout.
export function shellMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    ...rootMetadata(locale),
    applicationName: site.name,
    keywords:
      locale === 'de'
        ? ['Praxissoftware', 'Praxisverwaltungssoftware', 'digitale Patientenakte', 'Terminplanung Arztpraxis', 'Online-Terminvergabe', 'Abrechnung Arztpraxis', 'Videosprechstunde', 'Patientenportal', 'Terminausfälle', 'FHIR', 'HL7', 'DSGVO']
        : ['practice management software', 'EHR software', 'electronic health records', 'clinic management software', 'medical scheduling software', 'revenue cycle management', 'medical billing software', 'e-prescribing', 'telehealth platform', 'patient portal', 'FHIR', 'HL7', 'GDPR', 'HIPAA'],
    authors: [{ name: site.name, url: SITE_URL }],
    creator: site.name,
    publisher: site.name,
    category: locale === 'de' ? 'Software für das Gesundheitswesen' : 'Healthcare software',
    twitter: { card: 'summary_large_image', site: '@aureoncare', creator: '@aureoncare' },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    icons: { icon: '/logos/aureoncare-logo.png', apple: '/logos/aureoncare-logo.png' },
  }
}

export const shellViewport: Viewport = { themeColor: '#0B4F4A' }

export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale)
  return (
    <html lang={htmlLang[locale]}>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar locale={locale} t={t.nav} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}
