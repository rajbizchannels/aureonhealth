import Link from 'next/link'
import {
  FaArrowRight,
  FaChartLine,
  FaEnvelope,
  FaHeartbeat,
  FaLinkedin,
  FaPhoneAlt,
  FaRocket,
  FaVideo,
  FaComments,
  FaBolt,
} from 'react-icons/fa'
import HeroCarousel from '@/components/banners/HeroCarousel'
import FeatureHighlights from '@/components/FeatureHighlights'
import ResourceCards from '@/components/ResourceCards'

// The brand promise, "Health | Efficiency | Growth", tied to the features that deliver it.
const pillars = [
  {
    icon: FaHeartbeat,
    name: 'Health',
    hook: 'Give every patient your full attention.',
    text: 'The complete history, structured notes and safe prescribing in one place, plus a portal and video visits that keep patients connected.',
    features: ['EHR & templates', 'e-Prescribing', 'Patient portal', 'Telehealth'],
  },
  {
    icon: FaBolt,
    name: 'Efficiency',
    hook: 'Give your team back hours every week.',
    text: 'Conflict-free scheduling, automatic reminders, tasks and notifications take the busywork off the front desk.',
    features: ['Smart scheduling', 'Reminders & waitlist', 'Tasks & workflow', 'Role-based access'],
  },
  {
    icon: FaChartLine,
    name: 'Growth',
    hook: 'Get paid for all the care you deliver.',
    text: 'Track every claim to payment, follow up on denials and see which services and sites drive your revenue.',
    features: ['Claims management', 'Revenue reports', 'Analytics', 'CRM'],
  },
]

const steps = [
  { icon: FaComments, title: 'Discovery call', text: 'Tell us how your practice runs today and where it hurts. 30 minutes, no obligation.' },
  { icon: FaVideo, title: 'Tailored demo', text: 'See AureonCare set up for your specialty, your team and your workflow.' },
  { icon: FaRocket, title: 'Go live, guided', text: 'Cloud or on-premises. We help configure roles, templates and schedules so your team starts confidently.' },
]

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <FeatureHighlights />

      {/* Brand promise */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-aureon-gold-deep">Health · Efficiency · Growth</span>
            <h2 className="mt-3 text-4xl font-bold text-aureon-blue md:text-5xl">
              Running a practice shouldn&apos;t feel like <span className="text-gradient-aureon">running two businesses</span>
            </h2>
            <p className="mt-5 text-xl text-gray-600">
              One platform for the clinical side and the business side, so the whole team works from the same page.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map(({ icon: Icon, name, hook, text, features }) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnets */}
      <section className="bg-gradient-to-b from-aureon-beige/60 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-aureon-gold-deep">Free for practice leaders</span>
            <h2 className="mt-3 text-4xl font-bold text-aureon-blue md:text-5xl">
              Find the hidden costs <span className="text-gradient-aureon">in your practice</span>
            </h2>
            <p className="mt-5 text-xl text-gray-600">Start with a free tool. No sales call required.</p>
          </div>
          <ResourceCards />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-aureon-blue md:text-5xl">
              From first call to <span className="text-gradient-aureon">go-live</span>
            </h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative rounded-3xl border border-gray-100 p-8">
                <span className="absolute -top-4 left-8 rounded-full bg-aureon-blue px-3 py-1 text-sm font-bold text-aureon-amber">
                  Step {i + 1}
                </span>
                <Icon className="text-3xl text-aureon-teal" />
                <h3 className="mt-4 text-xl font-bold text-aureon-blue">{title}</h3>
                <p className="mt-2 text-gray-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white md:text-5xl">See it with your own workflow</h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-200">
            Book a 20-minute demo tailored to your specialty, or reach us however suits you best.
          </p>
          <Link
            href="/contact?interest=demo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-aureon-amber px-10 py-4 text-lg font-semibold text-aureon-blue shadow-lg transition-all duration-300 hover:bg-white"
          >
            Book my demo <FaArrowRight />
          </Link>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <a href="tel:+4917620380707" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white hover:bg-white/20">
              <FaPhoneAlt className="text-aureon-amber" />
              <span>
                <span className="block text-sm text-gray-300">Call us</span>+49 176 203 80707
              </span>
            </a>
            <a href="mailto:info@aureoncare.tech" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white hover:bg-white/20">
              <FaEnvelope className="text-aureon-amber" />
              <span>
                <span className="block text-sm text-gray-300">Email us</span>info@aureoncare.tech
              </span>
            </a>
            <a href="https://www.linkedin.com/company/aureoncare" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white hover:bg-white/20">
              <FaLinkedin className="text-aureon-amber" />
              <span>
                <span className="block text-sm text-gray-300">Connect on</span>LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
