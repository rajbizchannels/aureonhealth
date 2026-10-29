'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/product', label: 'Our Product' },
    { href: '/resources', label: 'Resources' },
/*    { href: '/team', label: 'Team' },*/
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-aureon-amber sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" aria-label="AureonCare home" className="hover:opacity-90 transition-opacity">
            <Logo size={55} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-aureon-blue hover:text-aureon-blue hover:bg-aureon-amber/25 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-aureon-blue p-2 rounded-lg hover:bg-aureon-amber/25 transition-all"
              aria-label="Toggle menu"
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
          </div>
        </div>
      )}
    </nav>
  )
}
