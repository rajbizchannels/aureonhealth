'use client'

import { useState } from 'react'
import { submitLead } from '@/lib/submitLead'

// Compact email signup for the footer.
export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [trap, setTrap] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    try {
      await submitLead({
        name: email.split('@')[0],
        email,
        subject: 'newsletter',
        message: 'Please add me to the AureonCare practice insights newsletter.',
        source: 'Footer newsletter signup',
        website: trap,
      })
      setState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Please try again.')
      setState('error')
    }
  }

  if (state === 'done') {
    return <p className="text-sm text-aureon-amber">Thanks! You&apos;re on the list.</p>
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <label htmlFor="newsletter-email" className="text-sm text-gray-200">
        Practice insights, product news and event invites. Monthly, no spam.
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@clinic.com"
          className="min-w-0 flex-1 rounded-full border-0 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-aureon-amber"
        />
        <input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} className="hidden" aria-hidden="true" />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="shrink-0 rounded-full bg-aureon-amber px-4 py-2 text-sm font-semibold text-aureon-blue hover:bg-aureon-gold disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : 'Subscribe'}
        </button>
      </div>
      {state === 'error' && <p className="text-xs text-red-200">{error}</p>}
    </form>
  )
}
