import ContactView from '@/views/ContactView'
import { dictMetadata } from '@/lib/seo'
import { getDictionary } from '@/i18n'

export const metadata = dictMetadata('de', 'contact', '/contact')

export default function Page() {
  return <ContactView locale="de" t={getDictionary('de').contact} />
}
