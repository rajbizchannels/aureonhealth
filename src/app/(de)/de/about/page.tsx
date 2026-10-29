import AboutView from '@/views/AboutView'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('de', 'about', '/about')

export default function Page() {
  return <AboutView locale="de" />
}
