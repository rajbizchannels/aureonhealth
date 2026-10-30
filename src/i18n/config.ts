export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

// English lives at the root (existing URLs keep their rankings); German under /de.
export function localePath(locale: Locale, path: string) {
  if (locale === 'en') return path
  return path === '/' ? '/de' : `/de${path}`
}

// Pages that exist in both languages. Legal pages and the team page are English only.
export const translatedPaths = [
  '/',
  '/product',
  '/about',
  '/contact',
  '/resources',
  '/resources/revenue-leak-checklist',
  '/resources/no-show-calculator',
]

export const htmlLang: Record<Locale, string> = { en: 'en', de: 'de' }
export const ogLocale: Record<Locale, string> = { en: 'en_US', de: 'de_DE' }
export const numberLocale: Record<Locale, string> = { en: 'en-US', de: 'de-DE' }

// Fills {placeholders} in a string.
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ''))
}
