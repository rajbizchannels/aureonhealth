import { CalculatorView } from '@/views/ResourceViews'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('en', 'calculator', '/resources/no-show-calculator')

export default function Page() {
  return <CalculatorView locale="en" />
}
