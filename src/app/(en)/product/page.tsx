import ProductView from '@/views/ProductView'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('en', 'product', '/product')

export default function Page() {
  return <ProductView locale="en" />
}
