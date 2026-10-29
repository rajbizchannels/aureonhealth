import type { Metadata } from 'next'
import { site } from './site'
import { type Locale, getDictionary, localePath, ogLocale, translatedPaths } from '@/i18n'

// Share image per language, served by app/og/[locale]/route.ts.
function shareImage(locale: Locale) {
  return {
    url: `/og/${locale}`,
    width: 1200,
    height: 630,
    alt: getDictionary(locale).meta.ogAlt,
  }
}

// hreflang links between the English and German versions of a page.
export function languageAlternates(path: string) {
  if (!translatedPaths.includes(path)) return undefined
  return {
    en: path,
    de: localePath('de', path),
    'x-default': path,
  }
}

// Metadata for a whole language tree (used by each root layout).
export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale)
  return {
    title: { default: t.meta.home.title, template: '%s | AureonCare' },
    description: t.meta.siteDescription,
  }
}

// Per-page metadata: title, description, canonical, hreflang and share cards.
// `path` is the English path; the German URL is derived from it.
export function pageMetadata({
  title,
  description,
  path,
  locale = 'en',
  noindex = false,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  locale?: Locale
  noindex?: boolean
  absoluteTitle?: boolean
}): Metadata {
  const url = localePath(locale, path)
  const image = shareImage(locale)
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: ogLocale[locale],
      alternateLocale: Object.values(ogLocale).filter((l) => l !== ogLocale[locale]),
      url,
      title,
      description,
      images: [image],
    },
    twitter: { card: 'summary_large_image', site: '@aureoncare', title, description, images: [image.url] },
    ...(noindex && { robots: { index: false, follow: true } }),
  }
}

// Shortcut for pages whose text lives in the dictionary under meta.<key>.
export function dictMetadata(locale: Locale, key: keyof ReturnType<typeof getDictionary>['meta'] & string, path: string): Metadata {
  const m = getDictionary(locale).meta[key] as { title: string; description: string }
  return pageMetadata({ title: m.title, description: m.description, path, locale, absoluteTitle: key === 'home' })
}
