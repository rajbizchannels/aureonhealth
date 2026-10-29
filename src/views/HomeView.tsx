import Link from 'next/link'
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaComments,
  FaEnvelope,
  FaHeartbeat,
  FaLinkedin,
  FaPhoneAlt,
  FaRocket,
  FaVideo,
} from 'react-icons/fa'
import HeroCarousel from '@/components/banners/HeroCarousel'
import FeatureHighlights from '@/components/FeatureHighlights'
import ResourceCards from '@/components/ResourceCards'
import Faq from '@/components/Faq'
import { type Locale, fill, getDictionary, localePath } from '@/i18n'

const pillarIcons = [FaHeartbeat, FaBolt, FaChartLine]
const stepIcons = [FaComments, FaVideo, FaRocket]

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const h = t.home

  return (
    <div>
      <HeroCarousel locale={locale} t={t.carousel} v={t.visuals} />
      <FeatureHighlights locale={locale} />

      {/* Brand promise: Health | Efficiency | Growth */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-aureon-gold-deep">{h.promise.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-bold text-aureon-blue md:text-5xl">
              {h.promise.titleStart} <span className="text-gradient-aureon">{h.promise.titleHighlight}</span>
            </h2>
            <p className="mt-5 text-xl text-gray-600">{h.promise.sub}</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {h.pillars.map(({ name, hook, text, features }, i) => {
              const Icon = pillarIcons[i]
              return (
                <div key={name} className="flex flex-col rounded-3xl bg-gradient-aureon-light p-8 ring-1 ring-aureon-blue/5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aureon-amber to-aureon-teal text-xl text-white shadow-md">
                      <Icon />
                    </span>
                    <span className="text-2xl font-bold text-aureon-blue">{name}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-aureon-ocean">{hook}</h3>
                  <p className="mt-2 flex-1 text-gray-600">{text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {features.map((f) => (
                      <span key={f} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-aureon-blue ring-1 ring-aureon-teal/20">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lead magnets */}
      <section className="bg-gradient-to-b from-aureon-beige/60 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-aureon-gold-deep">{h.magnets.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-bold text-aureon-blue md:text-5xl">
              {h.magnets.titleStart} <span className="text-gradient-aureon">{h.magnets.titleHighlight}</span>
            </h2>
            <p className="mt-5 text-xl text-gray-600">{h.magnets.sub}</p>
          </div>
          <ResourceCards locale={locale} />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-aureon-blue md:text-5xl">
              {h.steps.titleStart} <span className="text-gradient-aureon">{h.steps.titleHighlight}</span>
            </h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {h.steps.items.map(({ title, text }, i) => {
              const Icon = stepIcons[i]
              return (
                <li key={title} className="relative rounded-3xl border border-gray-100 p-8">
                  <span className="absolute -top-4 left-8 rounded-full bg-aureon-blue px-3 py-1 text-sm font-bold text-aureon-amber">
                    {fill(h.steps.stepLabel, { n: i + 1 })}
                  </span>
                  <Icon className="text-3xl text-aureon-teal" />
                  <h3 className="mt-4 text-xl font-bold text-aureon-blue">{title}</h3>
                  <p className="mt-2 text-gray-600">{text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <Faq faqs={t.faqs} title={h.faqTitle} />

      {/* Connect */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white md:text-5xl">{h.connect.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-200">{h.connect.sub}</p>
          <Link
            href={localePath(locale, '/contact?interest=demo')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-aureon-amber px-10 py-4 text-lg font-semibold text-aureon-blue shadow-lg transition-all duration-300 hover:bg-white"
          >
            {h.connect.cta} <FaArrowRight />
          </Link>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <a href="tel:+4917620380707" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white hover:bg-white/20">
              <FaPhoneAlt className="text-aureon-amber" />
              <span>
                <span className="block text-sm text-gray-300">{h.connect.call}</span>+49 176 203 80707
              </span>
            </a>
            <a href="mailto:info@aureoncare.tech" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white hover:bg-white/20">
              <FaEnvelope className="text-aureon-amber" />
              <span>
                <span className="block text-sm text-gray-300">{h.connect.email}</span>info@aureoncare.tech
              </span>
            </a>
            <a href="https://www.linkedin.com/company/aureoncare" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white hover:bg-white/20">
              <FaLinkedin className="text-aureon-amber" />
              <span>
                <span className="block text-sm text-gray-300">{h.connect.connectOn}</span>LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
