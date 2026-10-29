import { pageMetadata } from '@/lib/seo'
import JsonLd, { breadcrumbSchema, organizationId } from '@/components/JsonLd'
import { SITE_URL, audiences, features, site } from '@/lib/site'

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/product#software`,
  name: site.name,
  url: `${SITE_URL}/product`,
  description: site.description,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Healthcare practice management software',
  operatingSystem: 'Web browser',
  featureList: features,
  audience: audiences.map((a) => ({ '@type': 'Audience', audienceType: a })),
  availableLanguage: ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Chinese', 'Arabic', 'Hindi'],
  image: site.logo,
  publisher: { '@id': organizationId },
}

export const metadata = pageMetadata({
  title: 'EHR & Practice Management Software Features',
  description:
    'AureonCare features: EHR, scheduling, e-prescribing, telehealth, patient portal, claims and revenue cycle management, analytics, FHIR & HL7. Cloud or on-premises.',
  path: '/product',
})

import {
  FaUserMd,
  FaCalendarAlt,
  FaChartLine,
  FaPrescriptionBottleAlt,
  FaFileMedical,
  FaShieldAlt,
  FaMobileAlt,
  FaCloud,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaDollarSign,
} from 'react-icons/fa'
import PlatformHub from '@/components/PlatformHub'

export default function Product() {
  const features = [
    {
      icon: <FaUserMd className="text-5xl" />,
      title: 'Patient Management',
      description:
        'Comprehensive patient records, history tracking, and streamlined workflows to enhance patient care and reduce administrative burden.',
    },
    {
      icon: <FaCalendarAlt className="text-5xl" />,
      title: 'Smart Scheduling',
      description:
        'Intelligent appointment scheduling with automated reminders, waitlist management, and calendar synchronization.',
    },
    {
      icon: <FaPrescriptionBottleAlt className="text-5xl" />,
      title: 'E-Prescribing',
      description:
        'Secure electronic prescribing with drug interaction checking, formulary integration, and direct pharmacy communication.',
    },
    {
      icon: <FaFileMedical className="text-5xl" />,
      title: 'Electronic Health Records',
      description:
        'Complete EHR solution with customizable templates, clinical decision support, and seamless documentation.',
    },
    {
      icon: <FaDollarSign className="text-5xl" />,
      title: 'Revenue Cycle Management',
      description:
        'Integrated Claims Management to streamline billing processes, reduce claim denials, and improve cash flow.',
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: 'Analytics & Reporting',
      description:
        'Real-time insights and comprehensive reports to track performance, outcomes, and operational efficiency.',
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'HIPAA Compliance',
      description:
        'Enterprise-grade security with full HIPAA compliance, encrypted data storage, and role-based access control.',
    },
    {
      icon: <FaMobileAlt className="text-5xl" />,
      title: 'Mobile Access',
      description:
        'Access your practice anywhere with our responsive mobile app, enabling care delivery on the go.',
    },
    {
      icon: <FaCloud className="text-5xl" />,
      title: 'Cloud-Based and On-Premises',
      description:
        'Reliable solution with automatic backups, and archiving.',
    },
  ]

  return (
    <div>
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Product', path: '/product' }])} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-aureon-blue via-aureon-ocean to-aureon-blue py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-aureon-amber/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-aureon-teal/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-aureon-amber ring-1 ring-white/20">
              One platform · every workflow
            </span>
            <h1 className="mt-6 text-5xl font-bold text-white md:text-6xl">
              AureonCare <span className="text-aureon-amber">Platform</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/85 lg:mx-0">
              A comprehensive healthcare management solution designed to streamline operations,
              enhance patient care, and drive better outcomes
            </p>
            <a
              href="/contact?interest=demo"
              className="mt-8 inline-block rounded-full bg-aureon-amber px-10 py-4 text-lg font-semibold text-aureon-blue shadow-lg transition-all duration-300 hover:bg-white"
            >
              Request a Demo
            </a>
          </div>
          <PlatformHub />
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-aureon">
              Transform Your Healthcare Practice
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              AureonCare provides an all-in-one platform that integrates seamlessly into
              your workflow, helping you focus on what matters most: delivering exceptional
              patient care. Our solution combines powerful features with an intuitive
              interface, making advanced healthcare technology accessible to practices of all
              sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-aureon-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient-aureon">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Everything you need to run a modern, efficient healthcare practice
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-aureon-ocean mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-aureon-ocean">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient-aureon">
            Why AureonCare
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-aureon-gold-deep mb-4">50%</div>
              <h3 className="text-2xl font-semibold mb-3 text-aureon-ocean">
                Time Savings
              </h3>
              <p className="text-gray-700">
                Reduce administrative time with automated workflows and intelligent scheduling
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-aureon-green mb-4">95%</div>
              <h3 className="text-2xl font-semibold mb-3 text-aureon-ocean">
                User Satisfaction
              </h3>
              <p className="text-gray-700">
                Healthcare providers rate our platform highly for ease of use and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-aureon-ocean mb-4">30%</div>
              <h3 className="text-2xl font-semibold mb-3 text-aureon-ocean">
                Revenue Growth
              </h3>
              <p className="text-gray-700">
                Improve billing efficiency and patient throughput to grow your practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-aureon-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient-aureon">
            Seamless Integration
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            AureonCare integrates with the tools you already use, including major EHR
            systems, laboratory information systems, pharmacy networks, and billing platforms.
            Our open API ensures that your data flows seamlessly across your entire healthcare
            ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white px-8 py-4 rounded-lg shadow">HL7 Compatible</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow">FHIR Integration</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow">RESTful API</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow">Lab Interfaces</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow">Pharmacy Networks</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See it with your own workflow
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            A 20-minute demo, set up for your specialty and your team. No slides, just the platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?interest=demo"
              className="bg-aureon-amber text-aureon-blue px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aureon-ocean transition-all duration-300 shadow-lg"
            >
              Request a Demo
            </a>
            <a
              href="/contact?interest=sales"
              className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
          <p className="mt-8 text-gray-200">
            Not ready for a demo?{' '}
            <a href="/resources/revenue-leak-checklist" className="font-semibold text-aureon-amber underline underline-offset-4 hover:text-white">
              Start with the free Revenue Leak Checklist
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
