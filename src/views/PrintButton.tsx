'use client'

import { FaPrint } from 'react-icons/fa'

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-aureon-ocean px-4 py-2 text-sm font-semibold text-aureon-ocean hover:bg-aureon-ocean hover:text-white print:hidden"
    >
      <FaPrint /> {label}
    </button>
  )
}
