import type { MetadataRoute } from 'next'
import { SITE_URL, pages } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path === '/' ? '' : p.path}`,
    lastModified: now,
    changeFrequency: p.priority >= 0.8 ? 'weekly' : 'monthly',
    priority: p.priority,
  }))
}
