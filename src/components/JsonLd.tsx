import { SITE_URL, site } from '@/lib/site'

// Renders schema.org structured data. "<" is escaped so the JSON can never
// close the script tag early.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const organizationId = `${SITE_URL}/#organization`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: site.name,
  url: SITE_URL,
  logo: site.logo,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  telephone: site.phoneE164,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      telephone: site.phoneE164,
      availableLanguage: ['English', 'German'],
    },
  ],
  sameAs: site.sameAs,
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  publisher: { '@id': organizationId },
  inLanguage: ['en', 'de'],
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
