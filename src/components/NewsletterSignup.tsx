'use client'

import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { submitLead } from '@/lib/submitLead'
import { site } from '@/lib/site'
import type { Dictionary } from '@/i18n/en'

// Footer signup for the AureonCare Insights newsletter. LinkedIn does not let
// other sites subscribe people, so we save the email as a lead and send the
// visitor to the newsletter on LinkedIn to finish subscribing there.
export default function NewsletterSignup({ t }: { t: Dictionary['newsletter'] }) {
  const [email, setEmail] = useState('')
  const [trap, setTrap] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')

    // Open LinkedIn straight away, inside the click, so pop-up blockers allow it.
    const tab = window.open(site.newsletterUrl, '_blank')
    if (tab) tab.opener = null

    try {
      await submitLead({
        name: email.split('@')[0],
        email,
        subject: 'newsletter',
        message: t.message,
        source: t.source,
        website: trap,
      })
    } catch (err) {
      // Saving the email failed; the visitor can still subscribe on LinkedIn.
      console.error('Newsletter signup failed:', err)
    }

    // Pop-up blocked: go to LinkedIn in this tab instead.
    if (!tab) {
      window.location.href = site.newsletterUrl
      return
    }
    setState('done')
  }

  if (state === 'done') {
    return (
      <div className="space-y-1 text-sm">
        <p className="text-aureon-amber">{t.thanks}</p>
        <a href={site.newsletterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-200 underline hover:text-aureon-amber">
          <FaLinkedin /> {t.openAgain}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <label htmlFor="newsletter-email" className="block text-sm text-gray-200">
        {t.label}
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          className="min-w-0 flex-1 rounded-full border-0 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-aureon-amber"
        />
        <input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} className="hidden" aria-hidden="true" />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-aureon-amber px-4 py-2 text-sm font-semibold text-aureon-blue hover:bg-aureon-gold disabled:opacity-60"
        >
          <FaLinkedin /> {state === 'sending' ? t.sending : t.subscribe}
        </button>
      </div>
      <p className="text-xs text-gray-300">{t.note}</p>
    </form>
  )
}
