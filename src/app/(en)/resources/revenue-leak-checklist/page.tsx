import { ChecklistView } from '@/views/ResourceViews'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('en', 'checklist', '/resources/revenue-leak-checklist')

export default function Page() {
  return <ChecklistView locale="en" />
}
