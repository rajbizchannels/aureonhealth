import { CalculatorView } from '@/views/ResourceViews'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('de', 'calculator', '/resources/no-show-calculator')

export default function Page() {
  return <CalculatorView locale="de" />
}
