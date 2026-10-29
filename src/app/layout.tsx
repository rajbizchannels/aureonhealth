import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AureonCare | EHR, Scheduling & Billing for Clinics',
  description:
    'One platform for records, scheduling, e-prescribing, telehealth and billing. Less admin, fewer no-shows, fewer denied claims. Book a demo or get a free practice assessment.',
  icons: {
    icon: '/logos/aureoncare-logo.png',
    apple: '/logos/aureoncare-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
