'use client'

import { useEffect, useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { submitLead } from '@/lib/submitLead'
import type { Dictionary } from '@/i18n/en'
import { fill } from '@/i18n/config'

type Props = {
  /** Subject code sent to the contact API, e.g. "checklist". */
  subject: string
  /** Name of the resource, shown on the form and in the lead email. */
  resource: string
  children: React.ReactNode
  t: Dictionary['leadGate']
  /** Link to the privacy policy. */
  privacyHref?: string
}

// Shows a short form, then reveals the resource. If sending fails, the
// visitor still gets the resource: we never hold content hostage to an error.
export default function LeadGate({ subject, resource, children, t, privacyHref = '/privacy-policy' }: Props) {
  const storageKey = `aureon-unlocked-${subject}`
  const [unlocked, setUnlocked] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', organization: '', role: '', website: '' })

  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey)) setUnlocked(true)
    } catch {}
  }, [storageKey])

  const unlock = () => {
    try {
      localStorage.setItem(storageKey, '1')
    } catch {}
    setUnlocked(true)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await submitLead({
        ...form,
        subject,
        message: fill(t.downloaded, { resource }),
        source: fill(t.source, { resource }),
      })
    } catch (err) {
      console.error('Lead capture failed:', err)
    } finally {
      setSending(false)
      unlock()
    }
  }

  if (unlocked) return <>{children}</>

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value })
  const input =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-aureon-gold'

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-2xl shadow-aureon-blue/10 ring-1 ring-aureon-blue/5">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-aureon-amber/25 text-aureon-gold-deep">
          <FaLock />
        </span>
        <div>
          <div className="font-semibold text-aureon-blue">{t.title}</div>
          <div className="text-sm text-gray-600">{t.subtitle}</div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder={t.name} value={form.name} onChange={set('name')} className={input} aria-label={t.name.replace(' *', '')} />
        <input required type="email" placeholder={t.email} value={form.email} onChange={set('email')} className={input} aria-label={t.email.replace(' *', '')} />
        <input placeholder={t.practice} value={form.organization} onChange={set('organization')} className={input} aria-label={t.practice} />
        <select value={form.role} onChange={set('role')} className={input} aria-label={t.role}>
          <option value="">{t.role}</option>
          {t.roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} className="hidden" aria-hidden="true" />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-full bg-aureon-amber py-4 font-semibold text-aureon-blue shadow-lg hover:bg-aureon-gold disabled:opacity-60"
      >
        {sending ? t.sending : fill(t.unlock, { resource })}
      </button>
      <p className="mt-3 text-center text-xs text-gray-500">
        {t.privacyBefore}{' '}
        <a href={privacyHref} className="underline">{t.privacyLink}</a>.
      </p>
    </form>
  )
}
