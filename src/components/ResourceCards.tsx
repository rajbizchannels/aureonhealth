import Link from 'next/link'
import { FaArrowRight, FaCalculator, FaClipboardCheck, FaStethoscope } from 'react-icons/fa'
import { type Locale, getDictionary, localePath } from '@/i18n'

const icons = [FaClipboardCheck, FaCalculator, FaStethoscope]

// The three lead magnets, shown on the home page and the Resources page.
export default function ResourceCards({ locale }: { locale: Locale }) {
  const cards = getDictionary(locale).resourceCards
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map(({ tag, title, hook, cta, href }, i) => {
        const Icon = icons[i]
        return (
          <Link
            key={title}
            href={localePath(locale, href)}
            className="group flex flex-col rounded-3xl bg-white p-7 shadow-lg shadow-aureon-blue/5 ring-1 ring-aureon-blue/5 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aureon-amber to-aureon-teal text-xl text-white">
              <Icon />
            </span>
            <span className="mt-5 text-xs font-bold uppercase tracking-wider text-aureon-gold-deep">{tag}</span>
            <h3 className="mt-2 text-xl font-bold text-aureon-blue">{title}</h3>
            <p className="mt-2 flex-1 text-gray-600">{hook}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-aureon-ocean group-hover:gap-3 transition-all">
              {cta} <FaArrowRight />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
