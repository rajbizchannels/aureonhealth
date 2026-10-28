import Image from 'next/image'
import {
  FaCalendarAlt,
  FaChartLine,
  FaCloud,
  FaDollarSign,
  FaFileMedical,
  FaMobileAlt,
  FaPrescriptionBottleAlt,
  FaShieldAlt,
  FaUserMd,
} from 'react-icons/fa'

// "One platform" visual for the product banner: the logo at the centre with
// every product module arranged around it.
const modules = [
  { icon: FaUserMd, label: 'Patients' },
  { icon: FaCalendarAlt, label: 'Scheduling' },
  { icon: FaPrescriptionBottleAlt, label: 'e-Rx' },
  { icon: FaFileMedical, label: 'EHR' },
  { icon: FaDollarSign, label: 'Billing' },
  { icon: FaChartLine, label: 'Analytics' },
  { icon: FaShieldAlt, label: 'Compliance' },
  { icon: FaMobileAlt, label: 'Mobile' },
  { icon: FaCloud, label: 'Cloud / On-prem' },
]

const R = 40 // orbit radius, % of the box

export default function PlatformHub() {
  const points = modules.map((_, i) => {
    const angle = (i / modules.length) * 2 * Math.PI - Math.PI / 2
    return { x: 50 + R * Math.cos(angle), y: 50 + R * Math.sin(angle) }
  })

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-aureon-teal/20 blur-3xl" />

      {/* Orbit rings and spokes */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#FDC000" strokeOpacity="0.5" strokeWidth="0.4" strokeDasharray="1.5 1.5" className="animate-spin-slow origin-center" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="#01B4A2" strokeOpacity="0.5" strokeWidth="0.3" />
        {points.map((p, i) => (
          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#ffffff" strokeOpacity="0.25" strokeWidth="0.3" />
        ))}
      </svg>

      {/* Centre: the logo */}
      <div className="absolute left-1/2 top-1/2 flex h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl ring-4 ring-aureon-amber/60">
        <Image src="/logos/aureoncare-logo.png" alt="" width={96} height={96} className="h-3/4 w-3/4 rounded-full object-cover" />
      </div>

      {/* Modules */}
      {modules.map(({ icon: Icon, label }, i) => (
        <div
          key={label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
          style={{ left: `${points[i].x}%`, top: `${points[i].y}%` }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg text-aureon-ocean shadow-lg sm:h-12 sm:w-12">
            <Icon />
          </span>
          <span className="whitespace-nowrap rounded-full bg-aureon-blue/70 px-2 py-0.5 text-[10px] font-semibold text-white sm:text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
