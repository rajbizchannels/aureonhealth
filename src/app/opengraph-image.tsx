import { readFile } from 'fs/promises'
import { join } from 'path'
import { ImageResponse } from 'next/og'

// Default share image for every page (LinkedIn, WhatsApp, X, Slack, etc.).
export const alt = 'AureonCare: EHR, scheduling and billing software for clinics'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/logos/aureoncare-full-logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background: 'linear-gradient(135deg, #FFF6DB 0%, #FFFFFF 45%, #D9F4F0 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={450} height={150} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 60, fontWeight: 700, color: '#0B4F4A', lineHeight: 1.1 }}>
            One platform for records, scheduling,
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, color: '#B07A00', lineHeight: 1.1 }}>
            e-prescribing, telehealth & billing.
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: '#00857A' }}>
            Practice management for clinics · GDPR & HIPAA ready · FHIR & HL7
          </div>
        </div>
        <div style={{ display: 'flex', height: 12, width: '100%', borderRadius: 6, background: 'linear-gradient(90deg, #FDC000, #01B4A2)' }} />
      </div>
    ),
    size,
  )
}
