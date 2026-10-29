import { FaChevronDown } from 'react-icons/fa'
import JsonLd, { faqSchema } from './JsonLd'

// Native <details> keeps every answer in the HTML for search engines and
// AI assistants, while staying collapsed for visitors.
export default function Faq({ faqs, title = 'Frequently asked questions' }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="bg-white py-24" aria-labelledby="faq-heading">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-center text-4xl font-bold text-aureon-blue md:text-5xl">
          {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-aureon">{title.split(' ').slice(-1)}</span>
        </h2>
        <div className="mt-12 divide-y divide-gray-100 rounded-3xl bg-white shadow-lg shadow-aureon-blue/5 ring-1 ring-aureon-blue/5">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-aureon-blue">{q}</h3>
                <FaChevronDown className="shrink-0 text-aureon-ocean transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
