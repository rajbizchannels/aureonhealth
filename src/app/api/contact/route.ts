import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  organization?: string
  subject: string
  message: string
  role?: string
  source?: string
  website?: string // hidden spam trap; real visitors leave it empty
}

// Readable labels for the subject codes the site sends.
const SUBJECT_LABELS: Record<string, string> = {
  demo: 'Demo request',
  assessment: 'Free efficiency assessment',
  sales: 'Sales inquiry',
  support: 'Technical support',
  partnership: 'Partnership',
  checklist: 'Revenue Leak Checklist download',
  calculator: 'No-show calculator follow-up',
  newsletter: 'Newsletter signup',
  other: 'Other',
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Bots fill every field; quietly accept and drop.
    if (body.website) {
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if SMTP credentials are configured
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials missing:', {
        hasUser: !!smtpUser,
        hasPass: !!smtpPass,
      })
      return NextResponse.json(
        {
          error: 'Email service not configured. Please contact the administrator.',
          details: 'SMTP credentials are missing from environment variables'
        },
        { status: 500 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Email content (visitor input is escaped before it goes into HTML)
    const subjectLabel = SUBJECT_LABELS[body.subject] || body.subject
    const row = (label: string, value?: string) =>
      value ? `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>` : ''
    const emailHtml = `
      <h2>New Website Lead: ${escapeHtml(subjectLabel)}</h2>
      ${row('Name', body.name)}
      ${row('Email', body.email)}
      ${row('Phone', body.phone)}
      ${row('Organization', body.organization)}
      ${row('Role', body.role)}
      ${row('Source', body.source)}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
    `

    // Send email
    await transporter.sendMail({
      from: `"AureonCare Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'rajbizchannels@gmail.com',
      replyTo: body.email,
      subject: `AureonCare Website: ${subjectLabel.replace(/[\r\n]/g, ' ')}`,
      html: emailHtml,
      text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ''}
${body.organization ? `Organization: ${body.organization}` : ''}
${body.role ? `Role: ${body.role}` : ''}
${body.source ? `Source: ${body.source}` : ''}
Subject: ${subjectLabel}

Message:
${body.message}
      `.trim(),
    })

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
