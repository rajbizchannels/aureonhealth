import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'
import { type Locale, getDictionary, localePath } from '@/i18n'

const pillarStyles = [
  { Icon: FaEye, gradient: 'from-aureon-amber to-aureon-gold' },
  { Icon: FaBullseye, gradient: 'from-aureon-gold to-aureon-ocean' },
  { Icon: FaHeart, gradient: 'from-aureon-ocean to-aureon-blue' },
]
const dotColors = ['bg-aureon-amber', 'bg-aureon-gold', 'bg-aureon-ocean', 'bg-aureon-blue']

export default function AboutView({ locale }: { locale: Locale }) {
  const a = getDictionary(locale).about
  const href = (path: string) => localePath(locale, path)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-aureon-amber to-aureon-ocean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">{a.title}</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow">{a.sub}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-aureon">{a.storyTitle}</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {a.story.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gradient-aureon-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {a.pillars.map(({ title, text }, i) => {
              const { Icon, gradient } = pillarStyles[i]
              return (
                <div key={title} className="text-center">
                  <div className={`inline-block p-6 bg-gradient-to-br ${gradient} rounded-full mb-6`}>
                    <Icon className="text-white text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-aureon-ocean">{title}</h3>
                  <p className="text-gray-700 text-lg">{text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-aureon">{a.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {a.why.map(({ title, text }, i) => (
              <div key={title} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${dotColors[i]}`}></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aureon-ocean">{title}</h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{a.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-8">{a.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={href('/product')}
              className="bg-aureon-amber text-aureon-blue px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              {a.ctaPrimary}
            </a>
            <a
              href={href('/contact')}
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              {a.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
