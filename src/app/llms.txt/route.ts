import { SITE_URL, audiences, features, pages, site } from '@/lib/site'
import { en } from '@/i18n/en'
import { de } from '@/i18n/de'
import { localePath, translatedPaths } from '@/i18n/config'

// llms.txt: a plain-text summary of the site for AI assistants and answer
// engines (https://llmstxt.org). Built from the same facts as the pages.
export const dynamic = 'force-static'

export function GET() {
  const body = `# ${site.name}

> ${site.shortDescription}

${site.description}

Tagline: ${site.tagline}
Website: ${SITE_URL}
Contact: ${site.email} · ${site.phone}
Location: ${site.address.postalCode} ${site.address.locality}, ${site.address.region}, Germany

## Who it is for

${audiences.map((a) => `- ${a}`).join('\n')}

## Features

${features.map((f) => `- ${f}`).join('\n')}

## Pages

${pages.map((p) => `- [${p.title}](${SITE_URL}${p.path === '/' ? '' : p.path}): ${p.summary}`).join('\n')}

## Frequently asked questions

${en.faqs.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n')}

## Get in touch

- Book a demo: ${SITE_URL}/contact?interest=demo
- Free practice efficiency assessment: ${SITE_URL}/contact?interest=assessment
- Partnerships: ${SITE_URL}/contact?interest=partnership
- LinkedIn: https://www.linkedin.com/company/aureoncare
- YouTube: https://www.youtube.com/@aureoncare

## Deutsch

${de.site.description}

### Seiten

${pages
  .filter((p) => translatedPaths.includes(p.path))
  .map((p) => `- ${SITE_URL}${localePath('de', p.path)}`)
  .join('\n')}

### Häufig gestellte Fragen

${de.faqs.map(({ q, a }) => `#### ${q}\n\n${a}`).join('\n\n')}
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
