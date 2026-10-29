'use client'

import Link from 'next/link'
import { useState } from 'react'

const currencies = { EUR: '€', USD: '$', GBP: '£' } as const
type Currency = keyof typeof currencies

function Field({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  dark = false,
}: {
  label: string
  hint?: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  suffix?: string
  dark?: boolean
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className={`font-semibold ${dark ? 'text-white' : 'text-aureon-blue'}`}>{label}</span>
        <span className={`text-lg font-bold ${dark ? 'text-aureon-amber' : 'text-aureon-ocean'}`}>
          {value}
          {suffix}
        </span>
      </div>
      {hint && <div className="text-xs text-gray-500">{hint}</div>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`mt-2 w-full ${dark ? 'accent-[#FDC000]' : 'accent-[#00857A]'}`}
      />
    </label>
  )
}

// Every number here comes from the visitor. We show the arithmetic, not a promise.
export default function Calculator() {
  const [perDay, setPerDay] = useState(30)
  const [days, setDays] = useState(21)
  const [rate, setRate] = useState(8)
  const [value, setValue] = useState(80)
  const [recover, setRecover] = useState(25)
  const [currency, setCurrency] = useState<Currency>('EUR')

  const missedPerMonth = Math.round(perDay * days * (rate / 100))
  const lostPerMonth = missedPerMonth * value
  const lostPerYear = lostPerMonth * 12
  const recoveredPerYear = Math.round(lostPerYear * (recover / 100))
  const fmt = (n: number) => `${currencies[currency]}${n.toLocaleString('en-US')}`

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-aureon-blue/5 ring-1 ring-aureon-blue/5">
        <Field label="Appointments per day" value={perDay} onChange={setPerDay} min={5} max={200} />
        <Field label="Working days per month" value={days} onChange={setDays} min={10} max={26} />
        <Field label="No-show rate" hint="Share of booked patients who don't turn up" value={rate} onChange={setRate} min={1} max={30} suffix="%" />
        <div>
          <div className="flex items-baseline justify-between">
            <span className="font-semibold text-aureon-blue">Average revenue per visit</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="rounded-lg border border-gray-200 px-2 py-1 text-sm"
              aria-label="Currency"
            >
              {Object.keys(currencies).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <input
            type="number"
            min={0}
            value={value}
            onChange={(e) => setValue(Math.max(0, Number(e.target.value)))}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-semibold text-aureon-blue focus:outline-none focus:ring-2 focus:ring-aureon-gold"
            aria-label="Average revenue per visit"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-3xl bg-gradient-to-br from-aureon-blue to-aureon-ocean p-8 text-white shadow-xl">
        <div className="text-sm font-semibold uppercase tracking-wider text-aureon-amber">Your no-show cost</div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-3xl font-bold">{missedPerMonth}</div>
            <div className="text-sm text-gray-200">missed visits / month</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-3xl font-bold">{fmt(lostPerMonth)}</div>
            <div className="text-sm text-gray-200">lost / month</div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5 text-aureon-blue">
          <div className="text-sm text-gray-600">Revenue lost to no-shows each year</div>
          <div className="text-4xl font-bold text-aureon-gold-deep">{fmt(lostPerYear)}</div>
        </div>

        <div className="mt-6">
          <Field label="If you won back this share" value={recover} onChange={setRecover} min={5} max={60} step={5} suffix="%" dark />
          <p className="-mt-1 text-xs text-gray-300">
            Your own estimate, e.g. through reminders and waitlist fills. Results vary by practice.
          </p>
          <div className="mt-3 text-lg">
            that&apos;s <span className="text-2xl font-bold text-aureon-amber">{fmt(recoveredPerYear)}</span> a year back in your practice.
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
          <Link href="/contact?interest=calculator" className="flex-1 rounded-full bg-aureon-amber px-6 py-3 text-center font-semibold text-aureon-blue hover:bg-white">
            Get a tailored assessment
          </Link>
          <Link href="/resources/revenue-leak-checklist" className="flex-1 rounded-full border-2 border-white px-6 py-3 text-center font-semibold hover:bg-white hover:text-aureon-blue">
            Find other leaks
          </Link>
        </div>
      </div>
    </div>
  )
}
