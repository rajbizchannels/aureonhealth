import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckSquare } from 'react-icons/fa'
import LeadGate from '@/components/LeadGate'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'The Revenue Leak Checklist | AureonCare',
  description:
    '15 places medical practices lose revenue, from booking to final payment, and how to fix each one. Free checklist for practice owners and managers.',
}

// Each item: the check, and (where it applies) how AureonCare supports it.
const stages = [
  {
    title: 'Before the visit',
    items: [
      ['Capture complete demographics and insurance details when the appointment is booked.', 'Patient records with insurance carrier and policy ID'],
      ['Verify insurance coverage before every visit, not only the first one.', ''],
      ['Send appointment reminders to every patient and track who confirms.', 'Automated reminders'],
      ['Keep a waitlist so cancellations are filled instead of lost.', 'Waitlist management'],
      ['Collect co-payments and open balances at check-in.', 'Payment tracking'],
    ],
  },
  {
    title: 'During the visit',
    items: [
      ['Record diagnosis and procedure codes while the visit is fresh, not days later.', 'Diagnosis and procedure codes on each claim'],
      ['Make sure the documentation supports every code you bill.', 'EHR templates and full patient history'],
      ['Document prescriptions in the record so nothing is billed or charted twice.', 'e-Prescribing linked to the patient record'],
    ],
  },
  {
    title: 'Submitting claims',
    items: [
      ['Check each claim for missing or invalid codes before it goes out.', ''],
      ['Submit within every payer’s filing deadline. Late claims are lost claims.', ''],
      ['Track every claim through submitted, accepted, denied and paid.', 'Claim status tracking'],
    ],
  },
  {
    title: 'After submission',
    items: [
      ['Work denials within days: record the reason, correct it, resubmit.', 'Claim notes and status history'],
      ['Review denial reasons every month and fix the root cause upstream.', 'Claims analytics'],
      ['Reconcile each payment against the amount you expected.', 'Payment records per claim'],
      ['Review revenue and claims reports monthly with your team.', 'Revenue reports with date filters and export'],
    ],
  },
]

export default function RevenueLeakChecklist() {
  return (
    <div className="bg-gradient-to-b from-aureon-beige to-white">
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
          Free checklist · for practice owners & managers
        </span>
        <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
          The Revenue Leak <span className="text-gradient-aureon">Checklist</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Most practices don&apos;t have a revenue problem. They have a leak problem: small gaps between booking
          and payment that add up every month. Here are the 15 places to look.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <LeadGate subject="checklist" resource="Revenue Leak Checklist">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-aureon-blue/5 ring-1 ring-aureon-blue/5 print:shadow-none print:ring-0">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-gray-600">Tick off what you already do. Every unticked box is a place to start.</p>
              <PrintButton />
            </div>
            {stages.map((stage, s) => (
              <div key={stage.title} className="mt-8 first:mt-0">
                <h2 className="text-xl font-bold text-aureon-blue">
                  <span className="text-aureon-gold-deep">{s + 1}.</span> {stage.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {stage.items.map(([check, help]) => (
                    <li key={check} className="flex gap-3 rounded-xl border border-gray-100 p-4">
                      <FaCheckSquare className="mt-1 shrink-0 text-aureon-teal" />
                      <div>
                        <div className="text-aureon-blue">{check}</div>
                        {help && (
                          <div className="mt-1 text-sm text-aureon-ocean">
                            <span className="font-semibold">In AureonCare:</span> {help}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-aureon-ocean to-aureon-blue p-8 text-center text-white print:hidden">
            <h2 className="text-2xl font-bold">Found a few unticked boxes?</h2>
            <p className="mx-auto mt-2 max-w-xl text-gray-200">
              Book a free efficiency assessment. We&apos;ll walk through your workflow and show you which leaks to fix first.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact?interest=assessment" className="rounded-full bg-aureon-amber px-6 py-3 font-semibold text-aureon-blue hover:bg-white">
                Book my free assessment
              </Link>
              <Link href="/resources/no-show-calculator" className="rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-aureon-blue">
                Calculate my no-show cost
              </Link>
            </div>
          </div>
        </LeadGate>
      </section>
    </div>
  )
}
