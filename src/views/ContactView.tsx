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

import type { Dictionary } from '@/i18n/en'
import { type Locale, localePath } from '@/i18n/config'

// Icons for the ways to connect, in the same order as the dictionary.
const pathIcons = [FaVideo, FaStethoscope, FaBriefcase, FaHandshake, FaLifeRing]

export default function ContactView({ locale, t }: { locale: Locale; t: Dictionary['contact'] }) {
  const paths = t.paths.map((p, i) => ({ ...p, icon: pathIcons[i] }))
  const subjects = t.subjects
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
    paths.find((p) => p.id === formData.subject)?.placeholder || t.messagePlaceholder

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
        body: JSON.stringify({ ...formData, source: t.source }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
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
      setError(t.error)
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
            {t.titleStart} <span className="text-gradient-aureon">{t.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-600">
            {t.sub}
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
                {t.infoTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {t.infoSub}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-amber to-aureon-gold rounded-full flex items-center justify-center">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">{t.phone}</h3>
                    <p className="text-gray-600">+49 176 203 80707</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-gold to-aureon-ocean rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">{t.email}</h3>
                    <p className="text-gray-600">info@aureoncare.tech</p>
                    <p className="text-gray-600">support@aureoncare.tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-ocean to-aureon-blue rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">{t.address}</h3>
                    {/*<p className="text-gray-600">Ostlandstr 35</p>*/}
                    <p className="text-gray-600">97816 Lohr am Main</p>
                    <p className="text-gray-600">{t.country}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aureon-amber to-aureon-ocean rounded-full flex items-center justify-center">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aureon-ocean mb-1">
                      {t.hours}
                    </h3>
                    <p className="text-gray-600">{t.hoursWeek}</p>
                    <p className="text-gray-600">{t.hoursWeekend}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-aureon-ocean mb-4">{t.follow}</h3>
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
              <h2 className="text-3xl font-bold mb-6 text-gradient-aureon">{t.formTitle}</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  {t.success}
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
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder={t.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    {t.organization}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                    placeholder={t.organizationPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-aureon-ocean mb-2"
                  >
                    {t.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                  >
                    <option value="">{t.subjectPlaceholder}</option>
                    {subjects.map(([id, label]) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-aureon-ocean mb-2">
                    {t.role}
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aureon-gold focus:border-transparent"
                  >
                    <option value="">{t.rolePlaceholder}</option>
                    {t.roles.map((r) => (
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
                    {t.message}
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
                  {loading ? t.sending : t.send}
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
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            {t.ctaSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={localePath(locale, '/product')}
              className="bg-aureon-amber text-aureon-blue px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="tel:+4917620380707"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-aureon-ocean transition-all duration-300"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
