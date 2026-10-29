import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact Us · Book a Demo',
  description:
    'Book a 20-minute AureonCare demo, get a free practice efficiency assessment, talk to sales about multi-site or on-premises setups, or partner with us.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
