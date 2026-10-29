'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Dictionary } from '@/i18n/en'
import { type Locale, localePath, numberLocale } from '@/i18n/config'

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
export default function Calculator({ locale, t }: { locale: Locale; t: Dictionary['calculator'] }) {
  const pct = locale === 'de' ? ' %' : '%'
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
  const fmt = (n: number) =>
    new Intl.NumberFormat(numberLocale[locale], { style: 'currency', currency, maximumFractionDigits: 0 }).format(n)

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-aureon-blue/5 ring-1 ring-aureon-blue/5">
        <Field label={t.perDay} value={perDay} onChange={setPerDay} min={5} max={200} />
        <Field label={t.days} value={days} onChange={setDays} min={10} max={26} />
        <Field label={t.rate} hint={t.rateHint} value={rate} onChange={setRate} min={1} max={30} suffix={pct} />
        <div>
          <div className="flex items-baseline justify-between">
            <span className="font-semibold text-aureon-blue">{t.value}</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="rounded-lg border border-gray-200 px-2 py-1 text-sm"
              aria-label={t.currency}
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
            aria-label={t.value}
          />
        </div>
      </div>

      <div className="flex flex-col rounded-3xl bg-gradient-to-br from-aureon-blue to-aureon-ocean p-8 text-white shadow-xl">
        <div className="text-sm font-semibold uppercase tracking-wider text-aureon-amber">{t.resultTitle}</div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-3xl font-bold">{missedPerMonth}</div>
            <div className="text-sm text-gray-200">{t.missed}</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-3xl font-bold">{fmt(lostPerMonth)}</div>
            <div className="text-sm text-gray-200">{t.lostMonth}</div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5 text-aureon-blue">
          <div className="text-sm text-gray-600">{t.lostYear}</div>
          <div className="text-4xl font-bold text-aureon-gold-deep">{fmt(lostPerYear)}</div>
        </div>

        <div className="mt-6">
          <Field label={t.recover} value={recover} onChange={setRecover} min={5} max={60} step={5} suffix={pct} dark />
          <p className="-mt-1 text-xs text-gray-300">
            {t.recoverHint}
          </p>
          <div className="mt-3 text-lg">
            {t.recoveredBefore} <span className="text-2xl font-bold text-aureon-amber">{fmt(recoveredPerYear)}</span> {t.recoveredAfter}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
          <Link href={localePath(locale, '/contact?interest=calculator')} className="flex-1 rounded-full bg-aureon-amber px-6 py-3 text-center font-semibold text-aureon-blue hover:bg-white">
            {t.ctaPrimary}
          </Link>
          <Link href={localePath(locale, '/resources/revenue-leak-checklist')} className="flex-1 rounded-full border-2 border-white px-6 py-3 text-center font-semibold hover:bg-white hover:text-aureon-blue">
            {t.ctaSecondary}
          </Link>
        </div>
      </div>
    </div>
  )
}
