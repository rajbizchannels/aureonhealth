import AboutView from '@/views/AboutView'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('en', 'about', '/about')

export default function Page() {
  return <AboutView locale="en" />
}
