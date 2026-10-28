import Link from 'next/link'
import {
  FaArrowRight,
  FaAward,
  FaCloud,
  FaHeartbeat,
  FaLightbulb,
  FaPlug,
  FaShieldAlt,
  FaStethoscope,
  FaUsers,
} from 'react-icons/fa'
import HeroDashboard from '@/components/HeroDashboard'
import FeatureHighlights from '@/components/FeatureHighlights'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-aureon-beige via-white to-white pb-28 pt-16 lg:pt-20">
        {/* Background accents */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-aureon-amber/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-aureon-teal/20 blur-3xl" />
        <svg className="pointer-events-none absolute inset-x-0 bottom-4 h-24 w-full text-aureon-teal/20" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline points="0,60 380,60 410,60 430,20 450,95 470,40 490,60 820,60 840,35 860,80 880,60 1200,60" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
              <FaStethoscope className="text-aureon-gold" /> All-in-one practice platform for clinics
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-aureon-blue sm:text-5xl lg:text-6xl">
              Better care.
              <br />
              Smoother operations.
              <br />
              <span className="text-gradient-aureon">Stronger growth.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 lg:mx-0">
              AureonCare brings records, scheduling, e-prescribing and billing into one secure
              platform, so your team spends less time on admin and more time with patients.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aureon-amber px-8 py-4 text-lg font-semibold text-aureon-blue shadow-lg shadow-aureon-amber/30 transition-all duration-300 hover:bg-aureon-gold"
              >
                Request a Demo <FaArrowRight />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full border-2 border-aureon-ocean px-8 py-4 text-lg font-semibold text-aureon-ocean transition-all duration-300 hover:bg-aureon-ocean hover:text-white"
              >
                Explore the Platform
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600 lg:justify-start">
              <li className="flex items-center gap-2"><FaShieldAlt className="text-aureon-ocean" /> GDPR &amp; HIPAA ready</li>
              <li className="flex items-center gap-2"><FaCloud className="text-aureon-ocean" /> Cloud or on-premises</li>
              <li className="flex items-center gap-2"><FaPlug className="text-aureon-ocean" /> HL7 &amp; FHIR</li>
            </ul>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <FeatureHighlights />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-aureon">
            Why Choose AureonCare?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We combine cutting-edge technology with compassionate care to deliver
            exceptional healthcare solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-gradient-aureon-light">
              <div className="inline-block p-4 bg-gradient-to-br from-aureon-amber to-aureon-gold rounded-full mb-4">
                <FaHeartbeat className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-aureon-ocean">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                Prioritizing patient needs and outcomes in every decision we make
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-gradient-aureon-light">
              <div className="inline-block p-4 bg-gradient-to-br from-aureon-gold to-aureon-ocean rounded-full mb-4">
                <FaLightbulb className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-aureon-ocean">
                Innovation First
              </h3>
              <p className="text-gray-600">
                Leveraging the latest technology to revolutionize healthcare delivery
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-gradient-aureon-light">
              <div className="inline-block p-4 bg-gradient-to-br from-aureon-amber to-aureon-ocean rounded-full mb-4">
                <FaUsers className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-aureon-ocean">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to healthcare excellence
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-gradient-aureon-light">
              <div className="inline-block p-4 bg-gradient-to-br from-aureon-gold to-aureon-blue rounded-full mb-4">
                <FaAward className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-aureon-ocean">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Track record of improving patient outcomes and satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join us in our mission to deliver exceptional healthcare solutions
          </p>
          <Link
            href="/contact"
            className="inline-block bg-aureon-amber text-aureon-blue px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aureon-ocean transition-all duration-300 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
