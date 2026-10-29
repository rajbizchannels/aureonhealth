import Link from 'next/link'
import { FaArrowRight, FaCalculator, FaClipboardCheck, FaStethoscope } from 'react-icons/fa'

// The three lead magnets, shown on the home page and the Resources page.
export const resources = [
  {
    icon: FaClipboardCheck,
    tag: 'Checklist · 5 min read',
    title: 'The Revenue Leak Checklist',
    hook: '15 places practices quietly lose money, from booking to final payment, and how to plug each one.',
    cta: 'Get the checklist',
    href: '/resources/revenue-leak-checklist',
  },
  {
    icon: FaCalculator,
    tag: 'Calculator · 1 min',
    title: 'What do no-shows cost you?',
    hook: 'Enter your numbers and see the revenue that walks out the door each month and each year.',
    cta: 'Run the numbers',
    href: '/resources/no-show-calculator',
  },
  {
    icon: FaStethoscope,
    tag: 'Free · 30-minute call',
    title: 'Practice Efficiency Assessment',
    hook: 'We review your scheduling, documentation and billing workflow and send back a short, practical action list.',
    cta: 'Book your assessment',
    href: '/contact?interest=assessment',
  },
]

export default function ResourceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {resources.map(({ icon: Icon, tag, title, hook, cta, href }) => (
        <Link
          key={title}
          href={href}
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
      ))}
    </div>
  )
}
