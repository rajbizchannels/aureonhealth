import SiteShell, { shellMetadata, shellViewport } from '@/components/SiteShell'

export const metadata = shellMetadata('de')
export const viewport = shellViewport

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="de">{children}</SiteShell>
}
