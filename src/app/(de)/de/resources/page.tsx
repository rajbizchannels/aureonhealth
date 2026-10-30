import { ResourcesView } from '@/views/ResourceViews'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('de', 'resources', '/resources')

export default function Page() {
  return <ResourcesView locale="de" />
}
