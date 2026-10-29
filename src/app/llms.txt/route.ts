import { SITE_URL, audiences, faqs, features, pages, site } from '@/lib/site'

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

${faqs.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n')}

## Get in touch

- Book a demo: ${SITE_URL}/contact?interest=demo
- Free practice efficiency assessment: ${SITE_URL}/contact?interest=assessment
- Partnerships: ${SITE_URL}/contact?interest=partnership
- LinkedIn: https://www.linkedin.com/company/aureoncare
- YouTube: https://www.youtube.com/@aureoncare
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
