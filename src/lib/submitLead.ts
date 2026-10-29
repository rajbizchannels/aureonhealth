export type Lead = {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
  organization?: string
  role?: string
  source?: string
  website?: string
}

// Sends a lead to the contact API. Throws with the server's message on failure.
export async function submitLead(lead: Lead) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
  return data
}
