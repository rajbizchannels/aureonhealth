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

import type { Dictionary } from '@/i18n/en'
import { type Locale, fill, localePath } from '@/i18n/config'

// Illustration for each audience slide; the slide text lives in the dictionaries.
const visuals = {
  owners: RevenueVisual,
  clinicians: ClinicianVisual,
  'front-desk': SchedulingVisual,
  patients: PatientPortalVisual,
  groups: NetworkVisual,
} as const

const INTERVAL = 8000

export default function HeroCarousel({
  locale,
  t,
  v,
}: {
  locale: Locale
  t: Dictionary['carousel']
  v: Dictionary['visuals']
}) {
  const slides = t.slides
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const touchX = useRef<number | null>(null)

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length])
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
      aria-label={t.ariaLabel}
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
          {t.h1}
        </h1>
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label={t.tabsLabel}>
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
            const Visual = visuals[s.id as keyof typeof visuals]
            return (
              <div
                key={s.id}
                id={`slide-${s.id}`}
                role="tabpanel"
                aria-roledescription="slide"
                aria-label={fill(t.slideLabel, { n: i + 1, total: slides.length, audience: s.audience })}
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
                      href={localePath(locale, s.cta.href)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-aureon-amber px-7 py-4 font-semibold sm:whitespace-nowrap text-aureon-blue shadow-lg shadow-aureon-amber/30 transition-all duration-300 hover:bg-aureon-gold"
                    >
                      {s.cta.label} <FaArrowRight />
                    </Link>
                    <Link
                      href={localePath(locale, s.secondary.href)}
                      className="inline-flex items-center justify-center rounded-full border-2 border-aureon-ocean px-7 py-4 font-semibold sm:whitespace-nowrap text-aureon-ocean transition-all duration-300 hover:bg-aureon-ocean hover:text-white"
                    >
                      {s.secondary.label}
                    </Link>
                  </div>
                </div>
                <Visual v={v} />
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <button onClick={prev} aria-label={t.prev} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-aureon-ocean shadow ring-1 ring-aureon-teal/30 hover:bg-aureon-beige">
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                aria-label={fill(t.goTo, { n: i + 1 })}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-aureon-gold' : 'w-2.5 bg-aureon-teal/40 hover:bg-aureon-teal'}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label={t.next} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-aureon-ocean shadow ring-1 ring-aureon-teal/30 hover:bg-aureon-beige">
            <FaChevronRight />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? t.pause : t.play}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-aureon-ocean shadow ring-1 ring-aureon-teal/30 hover:bg-aureon-beige"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </section>
  )
}
