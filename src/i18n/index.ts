import { de } from './de'
import { en, type Dictionary } from './en'
import type { Locale } from './config'

export * from './config'
export type { Dictionary }

const dictionaries: Record<Locale, Dictionary> = { en, de }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
