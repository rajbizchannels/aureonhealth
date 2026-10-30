import SiteShell, { shellMetadata, shellViewport } from '@/components/SiteShell'

export const metadata = shellMetadata('en')
export const viewport = shellViewport

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>
}
