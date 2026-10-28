import Link from 'next/link'
import {
  FaCalendarAlt,
  FaChartLine,
  FaFileMedical,
  FaFileInvoiceDollar,
  FaPrescriptionBottleAlt,
  FaShieldAlt,
} from 'react-icons/fa'

const features = [
  { icon: FaFileMedical, title: 'Electronic Health Records', text: 'Templates & clinical decision support' },
  { icon: FaCalendarAlt, title: 'Smart Scheduling', text: 'Reminders, waitlists, calendar sync' },
  { icon: FaPrescriptionBottleAlt, title: 'E-Prescribing', text: 'Interaction checks, direct to pharmacy' },
  { icon: FaFileInvoiceDollar, title: 'Revenue Cycle', text: 'Claims management, fewer denials' },
  { icon: FaChartLine, title: 'Analytics', text: 'Real-time performance insights' },
  { icon: FaShieldAlt, title: 'GDPR & HIPAA', text: 'Encrypted, role-based access' },
]

// Strip of feature tiles that overlaps the bottom of a banner.
export default function FeatureHighlights() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-2xl shadow-aureon-blue/10 ring-1 ring-aureon-blue/5 md:grid-cols-3 lg:grid-cols-6">
        {features.map(({ icon: Icon, title, text }) => (
          <Link
            key={title}
            href="/product"
            className="group rounded-2xl p-4 transition-colors hover:bg-gradient-aureon-light"
          >
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-aureon-amber to-aureon-teal text-lg text-white shadow-md transition-transform group-hover:-translate-y-0.5">
              <Icon />
            </span>
            <div className="text-sm font-semibold text-aureon-blue">{title}</div>
            <div className="mt-0.5 text-xs leading-snug text-gray-600">{text}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
