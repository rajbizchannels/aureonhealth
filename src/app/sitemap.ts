import type { MetadataRoute } from 'next'
import { SITE_URL, pages } from '@/lib/site'
import { localePath, translatedPaths } from '@/i18n/config'

const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`

// Every page, plus its German version where one exists, each linked to the
// other via hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return pages.flatMap((p) => {
    const translated = translatedPaths.includes(p.path)
    const alternates = translated
      ? { languages: { en: abs(p.path), de: abs(localePath('de', p.path)) } }
      : undefined
    const entry = (url: string) => ({
      url,
      lastModified: now,
      changeFrequency: (p.priority >= 0.8 ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: p.priority,
      alternates,
    })
    return translated ? [entry(abs(p.path)), entry(abs(localePath('de', p.path)))] : [entry(abs(p.path))]
  })
}
