'use client'

import { useEffect, useState } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaVideo,
  FaStethoscope,
  FaHandshake,
  FaBriefcase,
  FaLifeRing,
} from 'react-icons/fa'

// Ways to connect. Picking one pre-fills the form's subject.
const paths = [
  { id: 'demo', icon: FaVideo, title: 'Book a demo', text: '20 minutes, tailored to your specialty', placeholder: 'Your specialty, team size and what you would like to see in the demo…' },
  { id: 'assessment', icon: FaStethoscope, title: 'Free assessment', text: 'A practical review of your workflow', placeholder: 'Where does your practice lose the most time or revenue today?' },
  { id: 'sales', icon: FaBriefcase, title: 'Talk to sales', text: 'Plans, multi-site and on-premises', placeholder: 'Number of sites and providers, and whether you prefer cloud or on-premises…' },
  { id: 'partnership', icon: FaHandshake, title: 'Partner with us', text: 'Labs, pharmacies, resellers, events', placeholder: 'Tell us about your organisation and the partnership you have in mind…' },
  { id: 'support', icon: FaLifeRing, title: 'Get support', text: 'For existing AureonCare customers', placeholder: 'Describe the issue and the steps that lead to it…' },
]

const subjects = [
  ['demo', 'Request a demo'],
  ['assessment', 'Free efficiency assessment'],
  ['calculator', 'Follow up on my no-show estimate'],
  ['sales', 'Sales inquiry'],
  ['partnership', 'Partnership opportunities'],
  ['support', 'Technical support'],
  ['other', 'Other'],
]

const roles = ['Practice owner / manager', 'Doctor / clinician', 'Front desk / admin', 'IT / compliance', 'Partner / vendor', 'Other']

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    role: '',
    website: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Links like /contact?interest=assessment pre-select the subject.
  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('interest')
    if (interest && subjects.some(([id]) => id === interest)) {
      setFormData((f) => ({ ...f, subject: interest }))
    }
  }, [])

  const choosePath = (id: string) => {
    setFormData((f) => ({ ...f, subject: id }))
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const placeholder =
    paths.find((p) => p.id === formData.subject)?.placeholder || 'Tell us how we can help you...'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, source: 'Contact page' }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        role: '',
        website: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-aureon-beige via-white to-white pb-16 pt-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-aureon-amber/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-aureon-teal/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-aureon-blue md:text-6xl">
            Let&apos;s talk about <span className="text-gradient-aureon">your practice</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-600">
            Whether you&apos;re exploring options, ready for a demo or want to partner with us, pick the way that suits you.
          </p>
          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
            {paths.map(({ id, icon: Icon, title, text }) => (
              <button
                key={id}
                type="button"
                onClick={() => choosePath(id)}
                className={`rounded-2xl bg-white p-5 text-left shadow-lg shadow-aureon-blue/5 ring-1 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  formData.subject === id ? 'ring-2 ring-aureon-amber' : 'ring-aureon-blue/5'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aureon-amber to-aureon-teal text-white">
                  <Icon />
                </span>
                <span className="mt-3 block font-semibold text-aureon-blue">{title}</span>
                <span className="mt-1 block text-sm text-gray-600">{text}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gradient-aureon">
                Contact Information
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions? We&apos;d love to hear from you. Send us a message and
                we&apos;ll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-amber to-aureon-gold rounded-full flex items-center justify-center">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">Phone</h3>
                    <p className="text-gray-600">+49 176 203 80707</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-gold to-aureon-ocean rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">Email</h3>
                    <p className="text-gray-600">info@aureoncare.tech</p>
                    <p className="text-gray-600">support@aureoncare.tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-ocean to-aureon-blue rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">Address</h3>
                    {/*<p className="text-gray-600">Ostlandstr 35</p>*/}
                    <p className="text-gray-600">97816 Lohr am Main</p>
                    <p className="text-gray-600">Germany</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-amber to-aureon-ocean rounded-full flex items-center justify-center">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-aureon-ocean mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/aureoncare"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-gradient-to-br from-aureon-amber to-aureon-gold rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                  <a
                    href="https://x.com/aureoncare"
                    aria-label="X"
                    className="w-10 h-10 bg-gradient-to-br from-aureon-gold to-aureon-ocean rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/aureoncare"
                    aria-label="Facebook"
                    className="w-10 h-10 bg-gradient-to-br from-aureon-ocean to-aureon-blue rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/aureoncare"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-gradient-to-br from-aureon-amber to-aureon-teal rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.youtube.com/@aureoncare"
                    aria-label="YouTube"
                    className="w-10 h-10 bg-gradient-to-br from-aureon-gold to-aureon-blue rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaYoutube className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="scroll-mt-28 bg-gradient-aureon-light p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gradient-aureon">Send a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to
                  you soon.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder="Your Healthcare Practice"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map(([id, label]) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-aureon-ocean mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    {roles.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder={placeholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-aureon-amber to-aureon-ocean text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) 
      <section className="py-20 bg-gradient-aureon-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-aureon">
            Visit Our Office
          </h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              [Interactive Map Placeholder - Integrate Google Maps or similar service]
            </p>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Schedule a demo today and see how AureonCare can transform your practice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/product"
              className="bg-aureon-amber text-aureon-blue px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              Learn More
            </a>
            <a
              href="tel:+4917620380707"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
