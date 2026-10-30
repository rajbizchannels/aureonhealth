import ContactView from '@/views/ContactView'
import { dictMetadata } from '@/lib/seo'
import { getDictionary } from '@/i18n'

export const metadata = dictMetadata('en', 'contact', '/contact')

export default function Page() {
  return <ContactView locale="en" t={getDictionary('en').contact} />
}
