import {
  FaCalendarAlt,
  FaChartLine,
  FaCloud,
  FaDollarSign,
  FaFileMedical,
  FaMobileAlt,
  FaPrescriptionBottleAlt,
  FaShieldAlt,
  FaUserMd,
} from 'react-icons/fa'
import PlatformHub from '@/components/PlatformHub'
import JsonLd, { breadcrumbSchema, organizationId } from '@/components/JsonLd'
import { SITE_URL, audiences, features as englishFeatures, site } from '@/lib/site'
import { type Locale, getDictionary, localePath } from '@/i18n'

const featureIcons = [FaUserMd, FaCalendarAlt, FaPrescriptionBottleAlt, FaFileMedical, FaDollarSign, FaChartLine, FaShieldAlt, FaMobileAlt, FaCloud]
const statColors = ['text-aureon-gold-deep', 'text-aureon-green', 'text-aureon-ocean']

export default function ProductView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const p = t.product
  const href = (path: string) => localePath(locale, path)

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/product#software`,
    name: site.name,
    url: `${SITE_URL}${href('/product')}`,
    description: t.site.description,
    inLanguage: locale,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: locale === 'de' ? 'Praxissoftware' : 'Healthcare practice management software',
    operatingSystem: 'Web browser',
    featureList: locale === 'en' ? englishFeatures : p.features.map((f) => `${f.title}: ${f.description}`),
    audience: audiences.map((a) => ({ '@type': 'Audience', audienceType: a })),
    availableLanguage: ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Chinese', 'Arabic', 'Hindi'],
    image: site.logo,
    publisher: { '@id': organizationId },
  }

  return (
    <div>
      <JsonLd data={softwareSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumbs.home, path: href('/') },
          { name: t.breadcrumbs.product, path: href('/product') },
        ])}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-aureon-blue via-aureon-ocean to-aureon-blue py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-aureon-amber/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-aureon-teal/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-aureon-amber ring-1 ring-white/20">
              {p.eyebrow}
            </span>
            <h1 className="mt-6 text-5xl font-bold text-white md:text-6xl">
              {p.titleStart} <span className="text-aureon-amber">{p.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/85 lg:mx-0">{p.sub}</p>
            <a
              href={href('/contact?interest=demo')}
              className="mt-8 inline-block rounded-full bg-aureon-amber px-10 py-4 text-lg font-semibold text-aureon-blue shadow-lg transition-all duration-300 hover:bg-white"
            >
              {p.demo}
            </a>
          </div>
          <PlatformHub labels={p.hubLabels} />
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-aureon">{p.overviewTitle}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{p.overview}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-aureon-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient-aureon">{p.featuresTitle}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">{p.featuresSub}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {p.features.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <div key={feature.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-aureon-ocean mb-4">
                    <Icon className="text-5xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-aureon-ocean">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient-aureon">{p.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {p.stats.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className={`text-5xl font-bold mb-4 ${statColors[i]}`}>{s.value}</div>
                <h3 className="text-2xl font-semibold mb-3 text-aureon-ocean">{s.title}</h3>
                <p className="text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-aureon-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient-aureon">{p.integrationTitle}</h2>
          <p className="text-xl text-gray-700 mb-8">{p.integration}</p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {p.integrations.map((name) => (
              <div key={name} className="bg-white px-8 py-4 rounded-lg shadow">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{p.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-8">{p.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={href('/contact?interest=demo')}
              className="bg-aureon-amber text-aureon-blue px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aureon-ocean transition-all duration-300 shadow-lg"
            >
              {p.ctaPrimary}
            </a>
            <a
              href={href('/contact?interest=sales')}
              className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              {p.ctaSecondary}
            </a>
          </div>
          <p className="mt-8 text-gray-200">
            {p.notReady}{' '}
            <a href={href('/resources/revenue-leak-checklist')} className="font-semibold text-aureon-amber underline underline-offset-4 hover:text-white">
              {p.notReadyLink}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
