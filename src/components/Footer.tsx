import Link from 'next/link'
import Logo from './Logo'
import NewsletterSignup from './NewsletterSignup'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { type Locale, getDictionary, localePath } from '@/i18n'

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const f = t.footer
  const href = (path: string) => localePath(locale, path)

  return (
    <footer className="bg-gradient-to-r from-aureon-ocean to-aureon-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo size={44} theme="dark" />
            </div>
            <p className="text-gray-200 mb-4">{f.blurb}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aureoncare" aria-label="Facebook" className="hover:text-aureon-amber transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/aureoncare" aria-label="X" className="hover:text-aureon-amber transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/aureoncare" aria-label="LinkedIn" className="hover:text-aureon-amber transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/aureoncare" aria-label="Instagram" className="hover:text-aureon-amber transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@aureoncare" aria-label="YouTube" className="hover:text-aureon-amber transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
            <div className="mt-6 max-w-md">
              <h4 className="mb-2 text-lg font-semibold text-aureon-amber">{f.newsletterTitle}</h4>
              <NewsletterSignup t={t.newsletter} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aureon-amber">{f.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                [href('/about'), f.about],
                [href('/product'), f.product],
                [href('/resources'), f.resources],
                [href('/contact'), f.contact],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link href={to} className="hover:text-aureon-amber transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aureon-amber">{f.contactTitle}</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <a href="mailto:info@aureoncare.tech" className="hover:text-aureon-amber transition-colors">
                  info@aureoncare.tech
                </a>
              </li>
              <li>
                <a href="tel:+4917620380707" className="hover:text-aureon-amber transition-colors">
                  +49 176 203 80707
                </a>
              </li>
              <li>97816 Lohr am Main</li>
              <li>{f.region}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-aureon-teal/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 text-sm">
            <p>
              &copy; {new Date().getFullYear()} AureonCare. {f.rights}
            </p>
            <div className="flex gap-6">
              {/* Legal pages are English only */}
              <Link href="/privacy-policy" hrefLang="en" className="hover:text-aureon-amber transition-colors">
                {f.privacy}
              </Link>
              <Link href="/terms-of-service" hrefLang="en" className="hover:text-aureon-amber transition-colors">
                {f.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
