import { Fragment } from 'react'
import {
  FaBell,
  FaCalendarCheck,
  FaCheckCircle,
  FaClinicMedical,
  FaExclamationTriangle,
  FaFileInvoiceDollar,
  FaFileMedical,
  FaFlask,
  FaGlobeEurope,
  FaHeartbeat,
  FaLock,
  FaPrescriptionBottleAlt,
  FaServer,
  FaShieldAlt,
  FaSyncAlt,
  FaUserClock,
  FaVideo,
} from 'react-icons/fa'
import type { Dictionary } from '@/i18n/en'

type V = Dictionary['visuals']

// Illustrations for the home banner carousel. All figures are sample data,
// and patients are shown by initials only.

function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl bg-white shadow-xl shadow-aureon-blue/10 ring-1 ring-aureon-blue/5 ${className}`}>
      {children}
    </div>
  )
}

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-aureon-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-aureon-teal" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        </div>
        <span className="text-xs font-medium text-gray-500">{title}</span>
        <span className="w-8" />
      </div>
      <div className="p-5">{children}</div>
    </Card>
  )
}

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[500px] sm:mt-6" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-aureon-amber/30 via-transparent to-aureon-teal/30 blur-2xl" />
      {children}
    </div>
  )
}

function Float({ className, children }: { className: string; children: React.ReactNode }) {
  return <Card className={`absolute hidden p-3 sm:block ${className}`}>{children}</Card>
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-aureon-ocean">{children}</div>
}

/* 1. Practice owners: revenue cycle */
export function RevenueVisual({ v }: { v: V }) {
  const t = v.revenue
  const stages = [
    { label: t.stages[0], value: 48, w: 'w-full' },
    { label: t.stages[1], value: 45, w: 'w-[94%]' },
    { label: t.stages[2], value: 43, w: 'w-[90%]' },
  ]
  const bars = [42, 55, 48, 63, 58, 72, 80]
  return (
    <Stage>
      <Frame title={t.frame}>
        <SectionLabel>{t.pipeline}</SectionLabel>
        <div className="space-y-2">
          {stages.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="w-20 text-xs text-gray-600">{s.label}</span>
              <div className="h-7 flex-1 rounded-lg bg-gray-50">
                <div className={`flex h-7 items-center justify-end rounded-lg bg-gradient-to-r from-aureon-amber to-aureon-teal pr-2 text-xs font-bold text-aureon-blue ${s.w}`}>
                  {s.value}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-gray-100 p-3">
          <div className="mb-2 flex items-center justify-between">
            <SectionLabel>{t.collections}</SectionLabel>
            <span className="mb-2 text-xs font-semibold text-aureon-green">{t.trending}</span>
          </div>
          <svg viewBox="0 0 280 80" className="h-20 w-full">
            <defs>
              <linearGradient id="rv-bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#01B4A2" />
                <stop offset="100%" stopColor="#FDC000" />
              </linearGradient>
            </defs>
            {bars.map((v, i) => (
              <rect key={i} x={10 + i * 38} y={80 - v} width="24" height={v} rx="6" fill="url(#rv-bar)" opacity={0.35 + i * 0.1} />
            ))}
            <polyline points={bars.map((v, i) => `${22 + i * 38},${74 - v}`).join(' ')} fill="none" stroke="#0B4F4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Frame>
      <Float className="animate-float -left-6 -top-9 w-52 lg:-left-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-amber/25 text-aureon-gold-deep"><FaFileInvoiceDollar /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.acceptedTitle}</div>
            <div className="text-[11px] text-gray-500">{t.acceptedSub}</div>
          </div>
        </div>
      </Float>
      <Float className="animate-float-delayed -bottom-6 -right-4 w-52 lg:-right-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-teal/15 text-aureon-ocean"><FaExclamationTriangle /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.deniedTitle}</div>
            <div className="text-[11px] text-gray-500">{t.deniedSub}</div>
          </div>
        </div>
      </Float>
    </Stage>
  )
}

/* 2. Doctors: EHR and e-prescribing */
export function ClinicianVisual({ v }: { v: V }) {
  const t = v.clinician
  return (
    <Stage>
      <Frame title={t.frame}>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-aureon-amber to-aureon-teal text-sm font-bold text-white">MK</span>
          <div>
            <div className="font-semibold text-aureon-blue">M.K. · 54</div>
            <div className="text-xs text-gray-500">{t.visit}</div>
          </div>
          <span className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700">{t.allergy}</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: t.vitals[0], v: '128/82' },
            { k: t.vitals[1], v: '72' },
            { k: t.vitals[2], v: '98%' },
          ].map((x) => (
            <div key={x.k} className="rounded-xl bg-aureon-beige/60 px-3 py-2">
              <div className="text-[11px] text-gray-600">{x.k}</div>
              <div className="text-lg font-bold text-aureon-blue">{x.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <SectionLabel>{t.note}</SectionLabel>
          <div className="space-y-2">
            <div className="h-2.5 w-full rounded bg-gray-100" />
            <div className="h-2.5 w-11/12 rounded bg-gray-100" />
            <div className="h-2.5 w-4/5 rounded bg-gray-100" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2">
          <FaPrescriptionBottleAlt className="text-aureon-ocean" />
          <span className="flex-1 text-sm text-aureon-blue">{t.medication}</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-aureon-green"><FaCheckCircle /> {t.noInteractions}</span>
        </div>
      </Frame>
      <Float className="animate-float -left-6 -top-9 w-52 lg:-left-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-teal/15 text-aureon-ocean"><FaPrescriptionBottleAlt /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.rxTitle}</div>
            <div className="text-[11px] text-gray-500">{t.rxSub}</div>
          </div>
        </div>
      </Float>
      <Float className="animate-float-delayed -right-4 -top-9 w-44 lg:-right-10">
        <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-aureon-blue">
          <FaHeartbeat className="text-aureon-gold" /> {t.vitalsTitle}
        </div>
        <svg viewBox="0 0 160 32" className="h-8 w-full">
          <polyline points="0,18 30,18 40,18 48,6 56,28 64,12 72,18 100,18 108,10 116,24 124,18 160,18" fill="none" stroke="#01B4A2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Float>
    </Stage>
  )
}

/* 3. Front desk: scheduling, reminders, waitlist */
export function SchedulingVisual({ v }: { v: V }) {
  const t = v.scheduling
  const days = t.days
  // 1 = booked, 2 = filled from waitlist, 0 = open
  const grid = [
    [1, 1, 0, 1, 1],
    [1, 2, 1, 1, 0],
    [1, 1, 1, 2, 1],
    [0, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
  ]
  const times = ['08:00', '09:00', '10:00', '11:00', '12:00']
  return (
    <Stage>
      <Frame title={t.frame}>
        <div className="grid grid-cols-[3rem_repeat(5,1fr)] gap-1.5 text-center">
          <span />
          {days.map((d) => (
            <span key={d} className="text-[11px] font-semibold text-gray-500">{d}</span>
          ))}
          {grid.map((row, r) => (
            <Fragment key={r}>
              <span className="self-center text-[11px] text-gray-500">{times[r]}</span>
              {row.map((c, i) => (
                <span
                  key={`${r}-${i}`}
                  className={`h-9 rounded-lg ${
                    c === 1
                      ? 'bg-aureon-teal/25'
                      : c === 2
                        ? 'bg-aureon-amber/60 ring-2 ring-aureon-amber'
                        : 'border border-dashed border-gray-200 bg-white'
                  }`}
                />
              ))}
            </Fragment>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-gray-600">
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-aureon-teal/25" /> {t.booked}</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-aureon-amber/60" /> {t.waitlist}</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded border border-dashed border-gray-300" /> {t.open}</span>
        </div>
      </Frame>
      <Float className="animate-float -left-6 -top-9 w-56 lg:-left-12">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-teal/15 text-aureon-ocean"><FaBell /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.reminderTitle}</div>
            <div className="text-[11px] text-gray-500">{t.reminderSub}</div>
          </div>
        </div>
      </Float>
      <Float className="animate-float-delayed -bottom-6 -right-4 w-52 lg:-right-10">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-amber/25 text-aureon-gold-deep"><FaUserClock /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.filledTitle}</div>
            <div className="text-[11px] text-gray-500">{t.filledSub}</div>
          </div>
        </div>
      </Float>
    </Stage>
  )
}

/* 4. Patient engagement: portal and telehealth */
export function PatientPortalVisual({ v }: { v: V }) {
  const t = v.portal
  return (
    <Stage>
      <div className="relative mx-auto w-64 rounded-[2.5rem] bg-aureon-blue p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <div className="bg-gradient-to-br from-aureon-amber to-aureon-teal px-5 pb-5 pt-6 text-white">
            <div className="text-xs opacity-90">{t.portal}</div>
            <div className="text-lg font-bold">{t.hello}</div>
          </div>
          <div className="space-y-3 p-4">
            <div className="rounded-xl bg-aureon-beige/70 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-aureon-ocean"><FaCalendarCheck /> {t.next}</div>
              <div className="mt-1 text-sm font-semibold text-aureon-blue">{t.when}</div>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-aureon-ocean py-2.5 text-sm font-semibold text-white">
              <FaVideo /> {t.join}
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gray-100 p-3 text-sm text-aureon-blue">
              <FaPrescriptionBottleAlt className="text-aureon-gold" /> {t.prescriptions}
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gray-100 p-3 text-sm text-aureon-blue">
              <FaFileMedical className="text-aureon-teal" /> {t.records}
            </div>
          </div>
        </div>
      </div>
      <Float className="animate-float -left-8 top-28 w-40 lg:-left-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-teal/15 text-aureon-ocean"><FaVideo /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.teleTitle}</div>
            <div className="text-[11px] text-gray-500">{t.teleSub}</div>
          </div>
        </div>
      </Float>
      <Float className="animate-float-delayed -right-8 bottom-8 w-40 lg:-right-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-amber/25 text-aureon-gold-deep"><FaGlobeEurope /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.langTitle}</div>
            <div className="text-[11px] text-gray-500">{t.langSub}</div>
          </div>
        </div>
      </Float>
    </Stage>
  )
}

/* 5. Healthcare groups and IT: multi-site, interoperability, security */
export function NetworkVisual({ v }: { v: V }) {
  const t = v.network
  const siteIcons = [FaClinicMedical, FaClinicMedical, FaFlask, FaPrescriptionBottleAlt]
  const sites = [
    { x: 14, y: 22, label: t.sites[0] },
    { x: 86, y: 22, label: t.sites[1] },
    { x: 14, y: 78, label: t.sites[2] },
    { x: 86, y: 78, label: t.sites[3] },
  ]
  return (
    <Stage>
      <Card className="relative aspect-[5/4] overflow-hidden p-5">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {sites.map((s) => (
            <line key={s.label} x1="50" y1="50" x2={s.x} y2={s.y} stroke="#01B4A2" strokeWidth="0.6" strokeDasharray="2 1.5" />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-aureon-amber to-aureon-teal text-3xl text-white shadow-xl">
            <FaServer />
          </span>
          <span className="mt-2 rounded-full bg-aureon-blue px-3 py-1 text-xs font-semibold text-white">AureonCare</span>
        </div>
        {sites.map((s, i) => {
          const SiteIcon = siteIcons[i]
          return (
          <div key={s.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg text-aureon-ocean shadow-lg ring-1 ring-aureon-blue/10">
              <SiteIcon />
            </span>
            <span className="text-[11px] font-semibold text-aureon-blue">{s.label}</span>
          </div>
          )
        })}
        <span className="absolute left-1/2 top-[22%] -translate-x-1/2 rounded-full bg-aureon-amber/25 px-2 py-0.5 text-[11px] font-bold text-aureon-gold-deep">FHIR R4</span>
        <span className="absolute left-1/2 top-[78%] -translate-x-1/2 rounded-full bg-aureon-teal/15 px-2 py-0.5 text-[11px] font-bold text-aureon-ocean">HL7</span>
      </Card>
      <Float className="animate-float -left-6 -top-9 w-52 lg:-left-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-teal/15 text-aureon-ocean"><FaShieldAlt /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.rbacTitle}</div>
            <div className="text-[11px] text-gray-500">{t.rbacSub}</div>
          </div>
        </div>
      </Float>
      <Float className="animate-float-delayed -right-4 -top-9 w-48 lg:-right-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-amber/25 text-aureon-gold-deep"><FaSyncAlt /></span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">{t.syncTitle}</div>
            <div className="text-[11px] text-gray-500">{t.syncSub}</div>
          </div>
        </div>
      </Float>
      <div className="animate-float-delayed absolute -bottom-4 right-6 hidden items-center gap-2 rounded-full bg-aureon-blue px-4 py-2 text-xs font-semibold text-white shadow-lg sm:flex">
        <FaLock className="text-aureon-amber" /> {t.deploy}
      </div>
    </Stage>
  )
}
