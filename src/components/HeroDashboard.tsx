import {
  FaCalendarCheck,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaHeartbeat,
  FaLock,
  FaPrescriptionBottleAlt,
  FaUserMd,
} from 'react-icons/fa'

// Illustrative product preview for the home banner. All data is sample data;
// patients are shown by initials only.
const appointments = [
  { time: '08:30', initials: 'M.K.', type: 'Follow-up', status: 'Checked in', tone: 'teal' },
  { time: '09:15', initials: 'S.B.', type: 'New patient', status: 'Confirmed', tone: 'gold' },
  { time: '10:00', initials: 'J.W.', type: 'Lab review', status: 'Confirmed', tone: 'gold' },
]

const revenue = [42, 55, 48, 63, 58, 72, 80]

function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl bg-white shadow-xl shadow-aureon-blue/10 ring-1 ring-aureon-blue/5 ${className}`}>
      {children}
    </div>
  )
}

export default function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] sm:mt-8" aria-hidden="true">
      {/* Soft brand glow behind the preview */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-aureon-amber/30 via-transparent to-aureon-teal/30 blur-2xl" />

      {/* Main dashboard window */}
      <Card className="relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-aureon-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-aureon-teal" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
          </div>
          <span className="text-xs font-medium text-gray-500">Today · Clinic overview</span>
          <FaUserMd className="text-aureon-ocean" />
        </div>

        <div className="space-y-4 p-5">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Appointments', value: '32' },
              { label: 'Checked in', value: '18' },
              { label: 'Claims sent', value: '12' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-xl bg-aureon-beige/60 px-3 py-2.5">
                <div className="text-xl font-bold text-aureon-blue">{kpi.value}</div>
                <div className="text-[11px] text-gray-600">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-aureon-ocean">
              <FaCalendarCheck /> Schedule
            </div>
            <ul className="space-y-2">
              {appointments.map((a) => (
                <li key={a.time} className="flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2">
                  <span className="w-11 text-xs font-semibold text-gray-500">{a.time}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-aureon-amber to-aureon-teal text-[11px] font-bold text-white">
                    {a.initials.replace(/\./g, '')}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-aureon-blue">
                    {a.initials} <span className="text-gray-500">· {a.type}</span>
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      a.tone === 'teal'
                        ? 'bg-aureon-teal/15 text-aureon-ocean'
                        : 'bg-aureon-amber/20 text-aureon-gold-deep'
                    }`}
                  >
                    {a.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue chart */}
          <div className="rounded-xl border border-gray-100 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-aureon-ocean">Collections · 7 days</span>
              <span className="text-xs font-semibold text-aureon-green">▲ trending up</span>
            </div>
            <svg viewBox="0 0 280 80" className="h-20 w-full">
              <defs>
                <linearGradient id="hd-bar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#01B4A2" />
                  <stop offset="100%" stopColor="#FDC000" />
                </linearGradient>
              </defs>
              {revenue.map((v, i) => (
                <rect key={i} x={10 + i * 38} y={80 - v} width="24" height={v} rx="6" fill="url(#hd-bar)" opacity={0.35 + i * 0.1} />
              ))}
              <polyline
                points={revenue.map((v, i) => `${22 + i * 38},${74 - v}`).join(' ')}
                fill="none"
                stroke="#0B4F4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Card>

      {/* Floating cards */}
      <Card className="animate-float absolute -left-6 -top-9 hidden w-52 p-3 sm:block lg:-left-12">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-teal/15 text-aureon-ocean">
            <FaPrescriptionBottleAlt />
          </span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">e-Prescription sent</div>
            <div className="flex items-center gap-1 text-[11px] text-aureon-green">
              <FaCheckCircle /> Interaction check passed
            </div>
          </div>
        </div>
      </Card>

      <Card className="animate-float-delayed absolute -right-4 -top-9 hidden w-44 p-3 sm:block lg:-right-10">
        <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-aureon-blue">
          <FaHeartbeat className="text-aureon-gold" /> Vitals recorded
        </div>
        <svg viewBox="0 0 160 32" className="h-8 w-full">
          <polyline
            points="0,18 30,18 40,18 48,6 56,28 64,12 72,18 100,18 108,10 116,24 124,18 160,18"
            fill="none"
            stroke="#01B4A2"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Card>

      <Card className="animate-float absolute -bottom-6 -left-4 hidden w-48 p-3 sm:block lg:-left-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aureon-amber/25 text-aureon-gold-deep">
            <FaFileInvoiceDollar />
          </span>
          <div>
            <div className="text-sm font-semibold text-aureon-blue">Claim accepted</div>
            <div className="text-[11px] text-gray-500">Paid in full</div>
          </div>
        </div>
      </Card>

      <div className="animate-float-delayed absolute -bottom-4 right-6 hidden items-center gap-2 rounded-full bg-aureon-blue px-4 py-2 text-xs font-semibold text-white shadow-lg sm:flex">
        <FaLock className="text-aureon-amber" /> End-to-end encrypted
      </div>
    </div>
  )
}
