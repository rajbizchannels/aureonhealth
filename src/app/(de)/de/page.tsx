import HomeView from '@/views/HomeView'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('de', 'home', '/')

export default function Page() {
  return <HomeView locale="de" />
}
