import { ResourcesView } from '@/views/ResourceViews'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('en', 'resources', '/resources')

export default function Page() {
  return <ResourcesView locale="en" />
}
