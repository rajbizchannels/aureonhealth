import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-aureon-ocean to-aureon-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logos/aureoncare-logo.png"
                alt="AureonCare"
                width={40}
                height={40}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold text-aureon-amber">AureonCare</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Transforming healthcare delivery with innovative solutions that empower
              providers and improve patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aureoncare" className="hover:text-aureon-amber transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/aureoncare" className="hover:text-aureon-amber transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/aureoncare" className="hover:text-aureon-amber transition-colors">
                <FaLinkedin size={24} />
              </a>
              {/*<a href="#" className="hover:text-aureon-amber transition-colors">
                <FaInstagram size={24} />
              </a>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aureon-amber">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-aureon-amber transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-aureon-amber transition-colors">
                  Our Product
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-aureon-amber transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-aureon-amber transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aureon-amber">Contact</h4>
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
              <li>Bavaria, Germany</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} AureonCare. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-aureon-amber transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-aureon-amber transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
