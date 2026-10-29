'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaCheckCircle, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa'
import {
  ClinicianVisual,
  NetworkVisual,
  PatientPortalVisual,
  RevenueVisual,
  SchedulingVisual,
} from './SlideVisuals'

type Slide = {
  id: string
  audience: string
  tab: string
  pillar: 'Health' | 'Efficiency' | 'Growth'
  hook: string
  highlight: string
  body: string
  features: string[]
  cta: { label: string; href: string }
  secondary: { label: string; href: string }
  Visual: () => JSX.Element
}

// One slide per audience: who it is for, the hook, the features that answer
// it, and the next step that fits that reader.
const slides: Slide[] = [
  {
    id: 'owners',
    tab: 'Owners & managers',
    audience: 'For practice owners & managers',
    pillar: 'Growth',
    hook: 'Every denied claim is revenue',
    highlight: 'you already earned.',
    body: 'See exactly where money is stuck, from submission to payment, and act before it slips away.',
    features: ['Claims lifecycle tracking', 'Denial follow-up & resubmission', 'Revenue & claims analytics'],
    cta: { label: 'Get the free checklist', href: '/resources/revenue-leak-checklist' },
    secondary: { label: 'Estimate no-show cost', href: '/resources/no-show-calculator' },
    Visual: RevenueVisual,
  },
  {
    id: 'clinicians',
    tab: 'Clinicians',
    audience: 'For doctors & clinicians',
    pillar: 'Health',
    hook: 'Less charting.',
    highlight: 'More caring.',
    body: 'Templates, the full patient history and e-prescribing in one view, so the visit stays about the patient.',
    features: ['Electronic health records', 'e-Prescribing with interaction checks', 'Complete patient history at a glance'],
    cta: { label: 'Book a 20-minute demo', href: '/contact?interest=demo' },
    secondary: { label: 'See all features', href: '/product' },
    Visual: ClinicianVisual,
  },
  {
    id: 'front-desk',
    tab: 'Front desk',
    audience: 'For front desk & practice teams',
    pillar: 'Efficiency',
    hook: 'Fill every slot.',
    highlight: 'Quiet the phones.',
    body: 'Conflict-free booking, automated reminders and a waitlist that fills cancellations for you.',
    features: ['Day, week & month calendars', 'Automated appointment reminders', 'Waitlist & double-booking prevention'],
    cta: { label: 'Get a free assessment', href: '/contact?interest=assessment' },
    secondary: { label: 'Estimate no-show cost', href: '/resources/no-show-calculator' },
    Visual: SchedulingVisual,
  },
  {
    id: 'patients',
    tab: 'Patient experience',
    audience: 'For patient-centred practices',
    pillar: 'Health',
    hook: 'Care that meets patients',
    highlight: 'where they are.',
    body: 'A patient portal and secure video visits keep patients connected between appointments, in their own language.',
    features: ['Patient portal for records & prescriptions', 'Secure telehealth video visits', 'Available in 8 languages'],
    cta: { label: 'See the patient experience', href: '/contact?interest=demo' },
    secondary: { label: 'Explore the platform', href: '/product' },
    Visual: PatientPortalVisual,
  },
  {
    id: 'groups',
    tab: 'Groups & IT',
    audience: 'For healthcare groups & IT leads',
    pillar: 'Growth',
    hook: 'Scale across sites,',
    highlight: 'not across risk.',
    body: 'Connect clinics, labs and pharmacies on open standards, with access control and compliance built in.',
    features: ['FHIR R4 & HL7 interoperability', 'Role-based access control', 'GDPR & HIPAA ready · cloud or on-premises'],
    cta: { label: 'Talk to our solutions team', href: '/contact?interest=sales' },
    secondary: { label: 'Partner with us', href: '/contact?interest=partnership' },
    Visual: NetworkVisual,
  },
]

const INTERVAL = 8000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const touchX = useRef<number | null>(null)

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [])
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  // Respect reduced-motion: start paused.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false)
  }, [])

  useEffect(() => {
    if (!playing || hovered) return
    const t = setTimeout(next, INTERVAL)
    return () => clearTimeout(t)
  }, [playing, hovered, next])

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-aureon-beige via-white to-white pb-28 pt-12 lg:pt-16"
      aria-roledescription="carousel"
      aria-label="AureonCare for every role in your practice"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') prev()
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
        touchX.current = null
      }}
    >
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-aureon-amber/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-aureon-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Audience tabs */}
        <h1 className="mb-5 text-center text-base font-semibold text-aureon-ocean sm:text-lg">
          All-in-one EHR, scheduling, telehealth &amp; billing software for clinics
        </h1>
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Choose your role">
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              aria-controls={`slide-${s.id}`}
              onClick={() => go(i)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                i === index
                  ? 'bg-aureon-blue text-white shadow-md'
                  : 'bg-white/80 text-aureon-ocean ring-1 ring-aureon-teal/30 hover:bg-white'
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Slides are stacked in one grid cell so the banner keeps the height of the tallest slide */}
        <div className="grid">
          {slides.map((s, i) => {
            const active = i === index
            return (
              <div
                key={s.id}
                id={`slide-${s.id}`}
                role="tabpanel"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}: ${s.audience}`}
                aria-hidden={!active}
                {...(!active && { inert: '' as unknown as boolean })}
                className={`col-start-1 row-start-1 grid items-center gap-14 transition-all duration-700 lg:grid-cols-2 ${
                  active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
                }`}
              >
                <div className="text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
                      {s.audience}
                    </span>
                    <span className="rounded-full bg-aureon-amber/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-aureon-gold-deep">
                      {s.pillar}
                    </span>
                  </div>
                  <h2 className="mt-6 text-4xl font-bold leading-tight text-aureon-blue sm:text-5xl lg:text-[3.4rem]">
                    {s.hook} <span className="text-gradient-aureon">{s.highlight}</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600 lg:mx-0">{s.body}</p>
                  <ul className="mx-auto mt-5 inline-flex flex-col gap-2 text-left lg:mx-0">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-medium text-aureon-blue">
                        <FaCheckCircle className="shrink-0 text-aureon-teal" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                    <Link
                      href={s.cta.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-aureon-amber px-7 py-4 font-semibold sm:whitespace-nowrap text-aureon-blue shadow-lg shadow-aureon-amber/30 transition-all duration-300 hover:bg-aureon-gold"
                    >
                      {s.cta.label} <FaArrowRight />
                    </Link>
                    <Link
                      href={s.secondary.href}
                      className="inline-flex items-center justify-center rounded-full border-2 border-aureon-ocean px-7 py-4 font-semibold sm:whitespace-nowrap text-aureon-ocean transition-all duration-300 hover:bg-aureon-ocean hover:text-white"
                    >
                      {s.secondary.label}
                    </Link>
                  </div>
                </div>
                <s.Visual />
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <button onClick={prev} aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-aureon-ocean shadow ring-1 ring-aureon-teal/30 hover:bg-aureon-beige">
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-aureon-gold' : 'w-2.5 bg-aureon-teal/40 hover:bg-aureon-teal'}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-aureon-ocean shadow ring-1 ring-aureon-teal/30 hover:bg-aureon-beige">
            <FaChevronRight />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause carousel' : 'Play carousel'}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-aureon-ocean shadow ring-1 ring-aureon-teal/30 hover:bg-aureon-beige"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </section>
  )
}
