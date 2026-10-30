import Link from 'next/link'
import { FaCheckSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import ResourceCards from '@/components/ResourceCards'
import LeadGate from '@/components/LeadGate'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'
import Calculator from './Calculator'
import PrintButton from './PrintButton'
import { type Dictionary, type Locale, getDictionary, localePath } from '@/i18n'

/* Resources index */
export function ResourcesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const r = t.resourcesPage
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumbs.home, path: localePath(locale, '/') },
          { name: t.breadcrumbs.resources, path: localePath(locale, '/resources') },
        ])}
      />
      <section className="bg-gradient-to-b from-aureon-beige to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
            {r.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
            {r.titleStart} <span className="text-gradient-aureon">{r.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">{r.sub}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResourceCards locale={locale} />

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-aureon-ocean to-aureon-blue p-10 text-center text-white">
            <h2 className="text-2xl font-bold md:text-3xl">{r.followTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-200">{r.followSub}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://www.linkedin.com/company/aureoncare" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-aureon-blue hover:bg-aureon-amber">
                <FaLinkedin /> {r.linkedin}
              </a>
              <a href="https://www.youtube.com/@aureoncare" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-aureon-blue">
                <FaYoutube /> {r.youtube}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* Revenue Leak Checklist */
type Stage = Dictionary['checklist']['stages'][number]

function ChecklistStage({ stage, n, inAureon }: { stage: Stage; n: number; inAureon: string }) {
  return (
    <div className="mt-8 first:mt-0">
      <h2 className="text-xl font-bold text-aureon-blue">
        <span className="text-aureon-gold-deep">{n}.</span> {stage.title}
      </h2>
      <ul className="mt-4 space-y-3">
        {stage.items.map(([check, help]) => (
          <li key={check} className="flex gap-3 rounded-xl border border-gray-100 p-4">
            <FaCheckSquare className="mt-1 shrink-0 text-aureon-teal" />
            <div>
              <div className="text-aureon-blue">{check}</div>
              {help && (
                <div className="mt-1 text-sm text-aureon-ocean">
                  <span className="font-semibold">{inAureon}</span> {help}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const card = 'rounded-3xl bg-white p-8 shadow-xl shadow-aureon-blue/5 ring-1 ring-aureon-blue/5 print:shadow-none print:ring-0'

export function ChecklistView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const c = t.checklist
  const href = (path: string) => localePath(locale, path)

  return (
    <div className="bg-gradient-to-b from-aureon-beige to-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumbs.home, path: href('/') },
          { name: t.breadcrumbs.resources, path: href('/resources') },
          { name: t.breadcrumbs.checklist, path: href('/resources/revenue-leak-checklist') },
        ])}
      />
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
          {c.eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
          {c.titleStart} <span className="text-gradient-aureon">{c.titleHighlight}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">{c.intro}</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* The first stage is open to everyone (and to search engines); the rest unlocks with the form */}
        <div className={card}>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <p className="text-gray-600">{c.tickIntro}</p>
            <span className="rounded-full bg-aureon-teal/15 px-3 py-1 text-xs font-semibold text-aureon-ocean">{c.previewBadge}</span>
          </div>
          <ChecklistStage stage={c.stages[0]} n={1} inAureon={c.inAureon} />
        </div>

        <h2 className="mb-6 mt-12 text-center text-2xl font-bold text-aureon-blue print:hidden">{c.unlockHeading}</h2>
        <LeadGate subject="checklist" resource={c.resource} t={t.leadGate}>
          <div className={card}>
            <div className="mb-6 flex justify-end print:hidden">
              <PrintButton label={c.print} />
            </div>
            {c.stages.slice(1).map((stage, s) => (
              <ChecklistStage key={stage.title} stage={stage} n={s + 2} inAureon={c.inAureon} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-aureon-ocean to-aureon-blue p-8 text-center text-white print:hidden">
            <h2 className="text-2xl font-bold">{c.ctaTitle}</h2>
            <p className="mx-auto mt-2 max-w-xl text-gray-200">{c.ctaSub}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={href('/contact?interest=assessment')} className="rounded-full bg-aureon-amber px-6 py-3 font-semibold text-aureon-blue hover:bg-white">
                {c.ctaPrimary}
              </Link>
              <Link href={href('/resources/no-show-calculator')} className="rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-aureon-blue">
                {c.ctaSecondary}
              </Link>
            </div>
          </div>
        </LeadGate>
      </section>
    </div>
  )
}

/* No-show calculator */
export function CalculatorView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const c = t.calculator
  const href = (path: string) => localePath(locale, path)

  return (
    <div className="bg-gradient-to-b from-aureon-beige to-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumbs.home, path: href('/') },
          { name: t.breadcrumbs.resources, path: href('/resources') },
          { name: t.breadcrumbs.calculator, path: href('/resources/no-show-calculator') },
        ])}
      />
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
          {c.eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
          {c.titleStart} <span className="text-gradient-aureon">{c.titleHighlight}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">{c.intro}</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Calculator locale={locale} t={c} />
        <p className="mt-6 text-center text-xs text-gray-500">{c.privacy}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-aureon-blue">{c.howTitle}</h2>
        <p className="mt-4 leading-relaxed text-gray-700">{c.howIntro}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700">
          {c.howSteps.map(([term, formula]) => (
            <li key={term}>
              <strong>{term}</strong> {formula}
            </li>
          ))}
        </ol>
        <p className="mt-4 leading-relaxed text-gray-700">{c.howExample}</p>
        <h2 className="mt-10 text-2xl font-bold text-aureon-blue">{c.reduceTitle}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          {c.reduceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-gray-700">{c.reduceOutro}</p>
      </section>
    </div>
  )
}
