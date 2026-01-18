import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  organization?: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

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

    // Option 1: Send via Resend (recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'contact@aureoncare.com',
          to: process.env.EMAIL_TO || 'info@aureonhealth.com',
          reply_to: body.email,
          subject: `AureonCare Contact Form: ${body.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
            ${body.organization ? `<p><strong>Organization:</strong> ${body.organization}</p>` : ''}
            <p><strong>Subject:</strong> ${body.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      })

      if (!resendResponse.ok) {
        const error = await resendResponse.text()
        console.error('Resend API error:', error)
        throw new Error('Failed to send email via Resend')
      }

      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully!'
      })
    }

    // Option 2: Send via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: process.env.EMAIL_TO || 'info@aureonhealth.com' }],
              subject: `AureonCare Contact Form: ${body.subject}`,
            },
          ],
          from: {
            email: process.env.EMAIL_FROM || 'contact@aureoncare.com',
            name: 'AureonCare Website',
          },
          reply_to: { email: body.email, name: body.name },
          content: [
            {
              type: 'text/html',
              value: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
                ${body.organization ? `<p><strong>Organization:</strong> ${body.organization}</p>` : ''}
                <p><strong>Subject:</strong> ${body.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${body.message.replace(/\n/g, '<br>')}</p>
              `,
            },
          ],
        }),
      })

      if (!sendgridResponse.ok) {
        const error = await sendgridResponse.text()
        console.error('SendGrid API error:', error)
        throw new Error('Failed to send email via SendGrid')
      }

      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully!'
      })
    }

    // Fallback: Log to console (for testing without email service)
    console.log('Contact form submission:', body)

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully (email service not configured)',
      warning: 'Email service not configured. Add RESEND_API_KEY or SENDGRID_API_KEY to environment variables.',
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
