import { renderOgImage } from '@/lib/ogImage'
import { type Locale, locales } from '@/i18n/config'

// Share images at fixed URLs: /og/en and /og/de (1200×630 PNG).
export const dynamic = 'force-static'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function GET(_req: Request, { params }: { params: { locale: string } }) {
  const locale: Locale = (locales as readonly string[]).includes(params.locale) ? (params.locale as Locale) : 'en'
  return renderOgImage(locale)
}
