import ProductView from '@/views/ProductView'
import { dictMetadata } from '@/lib/seo'

export const metadata = dictMetadata('de', 'product', '/product')

export default function Page() {
  return <ProductView locale="de" />
}
