'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaGlobeEurope, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import type { Dictionary } from '@/i18n/en'
import { type Locale, localePath, translatedPaths } from '@/i18n/config'

// The same page in the other language, or that language's home page if the
// page only exists in one language (legal pages, team).
function switchHref(locale: Locale, pathname: string) {
  const englishPath = locale === 'de' ? pathname.replace(/^\/de(?=\/|$)/, '') || '/' : pathname
  const target: Locale = locale === 'de' ? 'en' : 'de'
  return translatedPaths.includes(englishPath) ? localePath(target, englishPath) : localePath(target, '/')
}

export default function Navbar({ locale, t }: { locale: Locale; t: Dictionary['nav'] }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() || '/'
  const href = (path: string) => localePath(locale, path)

  const navLinks = [
    { href: href('/'), label: t.home },
    { href: href('/about'), label: t.about },
    { href: href('/product'), label: t.product },
    { href: href('/resources'), label: t.resources },
    { href: href('/contact'), label: t.contact },
  ]

  const switcher = switchHref(locale, pathname)
  const otherLang = locale === 'de' ? 'en' : 'de'

  return (
    <nav className="bg-white shadow-lg border-b-4 border-aureon-amber sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={href('/')} aria-label={t.homeAria} className="hover:opacity-90 transition-opacity">
            <Logo size={55} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-aureon-blue hover:text-aureon-blue hover:bg-aureon-amber/25 px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={switcher}
              hrefLang={otherLang}
              lang={otherLang}
              aria-label={t.switchAria}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-aureon-ocean ring-1 ring-aureon-teal/40 hover:bg-aureon-beige"
            >
              <FaGlobeEurope /> {t.switchToShort}
            </a>
          </div>

          {/* Mobile: language + menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={switcher}
              hrefLang={otherLang}
              lang={otherLang}
              aria-label={t.switchAria}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-aureon-ocean ring-1 ring-aureon-teal/40"
            >
              <FaGlobeEurope /> {t.switchToShort}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-aureon-blue p-2 rounded-lg hover:bg-aureon-amber/25 transition-all"
              aria-label={t.toggleMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-aureon-ocean to-aureon-blue">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-lg text-base font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={switcher}
              hrefLang={otherLang}
              lang={otherLang}
              className="flex items-center gap-2 text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg text-base font-medium"
            >
              <FaGlobeEurope /> {t.switchTo}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
