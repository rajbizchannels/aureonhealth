import Link from 'next/link'
import {
  FaCalendarAlt,
  FaChartLine,
  FaFileMedical,
  FaFileInvoiceDollar,
  FaPrescriptionBottleAlt,
  FaShieldAlt,
} from 'react-icons/fa'
import { type Locale, getDictionary, localePath } from '@/i18n'

const icons = [FaFileMedical, FaCalendarAlt, FaPrescriptionBottleAlt, FaFileInvoiceDollar, FaChartLine, FaShieldAlt]

// Strip of feature tiles that overlaps the bottom of a banner.
export default function FeatureHighlights({ locale }: { locale: Locale }) {
  const items = getDictionary(locale).highlights
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-2xl shadow-aureon-blue/10 ring-1 ring-aureon-blue/5 md:grid-cols-3 lg:grid-cols-6">
        {items.map(({ title, text }, i) => {
          const Icon = icons[i]
          return (
            <Link
              key={title}
              href={localePath(locale, '/product')}
              className="group rounded-2xl p-4 transition-colors hover:bg-gradient-aureon-light"
            >
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-aureon-amber to-aureon-teal text-lg text-white shadow-md transition-transform group-hover:-translate-y-0.5">
                <Icon />
              </span>
              <div className="text-sm font-semibold text-aureon-blue">{title}</div>
              <div className="mt-0.5 text-xs leading-snug text-gray-600">{text}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
