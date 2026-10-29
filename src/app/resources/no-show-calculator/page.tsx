import { pageMetadata } from '@/lib/seo'
import Calculator from './Calculator'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'

export const metadata = pageMetadata({
  title: 'No-Show Cost Calculator for Clinics',
  description:
    'Work out how much revenue missed appointments cost your practice each month and each year, and what winning some back is worth.',
  path: '/resources/no-show-calculator',
})

export default function NoShowCalculator() {
  return (
    <div className="bg-gradient-to-b from-aureon-beige to-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
          { name: 'No-show cost calculator', path: '/resources/no-show-calculator' },
        ])}
      />
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
          Free calculator · 1 minute
        </span>
        <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
          What do no-shows <span className="text-gradient-aureon">really cost you?</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          An empty chair still costs you staff time, room time and the patient who could have taken the slot.
          Move the sliders to match your practice.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Calculator />
        <p className="mt-6 text-center text-xs text-gray-500">
          Calculated in your browser from the numbers you enter. Nothing is stored or sent.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-aureon-blue">How to calculate the cost of no-shows</h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          A no-show is a booked appointment the patient doesn&apos;t attend and doesn&apos;t cancel in time for the
          slot to be reused. To estimate what no-shows cost your practice:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700">
          <li>
            <strong>Missed visits per month</strong> = appointments per day × working days per month × no-show rate.
          </li>
          <li>
            <strong>Revenue lost per month</strong> = missed visits per month × average revenue per visit.
          </li>
          <li>
            <strong>Revenue lost per year</strong> = revenue lost per month × 12.
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-gray-700">
          For example, a practice with 30 appointments a day, 21 working days a month, an 8% no-show rate and €80
          average revenue per visit misses about 50 visits a month: roughly €4,000 a month or €48,000 a year.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-aureon-blue">How practices reduce no-shows</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          <li>Send automated reminders before every appointment and track who confirms.</li>
          <li>Keep a waitlist so cancelled or missed slots can be offered to other patients.</li>
          <li>Make rescheduling easy, so patients cancel instead of simply not turning up.</li>
          <li>Review no-show rates by appointment type and time of day to spot patterns.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-gray-700">
          AureonCare supports this with automated appointment reminders, a waitlist, double-booking prevention and
          appointment analytics.
        </p>
      </section>
    </div>
  )
}
