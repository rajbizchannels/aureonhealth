// Single source of facts about AureonCare, used by page metadata, structured
// data (JSON-LD), the sitemap and llms.txt. Keep claims here in line with the
// product: if a feature isn't shipped, it doesn't belong in this file.

export const SITE_URL = 'https://www.aureoncare.tech'

export const site = {
  name: 'AureonCare',
  tagline: 'Health | Efficiency | Growth',
  shortDescription:
    'AureonCare is an all-in-one practice management platform for clinics: electronic health records, scheduling, e-prescribing, telehealth, patient portal and revenue cycle management in one system.',
  description:
    'AureonCare is an all-in-one healthcare practice management platform for private practices, multi-specialty clinics and healthcare groups. It combines electronic health records (EHR), appointment scheduling with reminders and waitlists, e-prescribing with interaction checks, telehealth video visits, a patient portal, claims and revenue cycle management, analytics and CRM in a single system. It supports FHIR R4 and HL7 interoperability, role-based access control, 8 languages, and runs in the cloud or on-premises. AureonCare is based in Lohr am Main, Bavaria, Germany.',
  email: 'info@aureoncare.tech',
  phone: '+49 176 203 80707',
  phoneE164: '+4917620380707',
  address: {
    locality: 'Lohr am Main',
    postalCode: '97816',
    region: 'Bavaria',
    country: 'DE',
  },
  logo: `${SITE_URL}/logos/aureoncare-full-logo.png`,
  sameAs: [
    'https://www.linkedin.com/company/aureoncare',
    'https://www.facebook.com/aureoncare',
    'https://x.com/aureoncare',
    'https://www.instagram.com/aureoncare',
    'https://www.youtube.com/@aureoncare',
  ],
}

export const audiences = [
  'Private medical practices',
  'Multi-specialty clinics',
  'Healthcare groups with multiple sites',
  'Telehealth providers',
  'Ambulatory care centers',
]

export const features = [
  'Electronic health records (EHR) with templates and complete patient history',
  'Appointment scheduling with day, week and month calendars, reminders, waitlist and double-booking prevention',
  'E-prescribing with drug interaction checks',
  'Telehealth video visits',
  'Patient portal for appointments, medical records and prescriptions',
  'Revenue cycle management: claims lifecycle tracking, denial follow-up and payments',
  'Reports and analytics for revenue, appointments, claims and patients',
  'CRM, tasks and workflow, and real-time notifications',
  'FHIR R4 and HL7 interoperability',
  'Role-based access control with granular permissions',
  'GDPR and HIPAA ready security',
  'Available in 8 languages (English, German, French, Spanish, Portuguese, Chinese, Arabic, Hindi)',
  'Cloud-based or on-premises deployment',
]

// Plain-language answers, written so they make sense when quoted on their own.
export const faqs: { q: string; a: string }[] = [
  {
    q: 'What is AureonCare?',
    a: 'AureonCare is an all-in-one practice management platform for clinics. It brings electronic health records, appointment scheduling, e-prescribing, telehealth, a patient portal and revenue cycle management into one system, so clinical and administrative teams work from the same records.',
  },
  {
    q: 'Who is AureonCare for?',
    a: 'AureonCare is built for private medical practices, multi-specialty clinics, healthcare groups with several sites, telehealth providers and ambulatory care centers. It has dedicated roles for doctors, nurses, receptionists, billing managers and administrators, plus a separate portal for patients.',
  },
  {
    q: 'How does AureonCare help reduce no-shows?',
    a: 'AureonCare sends automated appointment reminders, tracks confirmations and keeps a waitlist so cancelled slots can be offered to other patients. Double-booking prevention and conflict detection keep the calendar accurate.',
  },
  {
    q: 'Does AureonCare include billing and claims management?',
    a: 'Yes. AureonCare includes revenue cycle management: it tracks every claim from pending and submitted through approved, denied and paid, stores diagnosis and procedure codes, records payments, and reports on revenue and claims so denials can be followed up quickly.',
  },
  {
    q: 'Is AureonCare GDPR and HIPAA compliant?',
    a: 'AureonCare is built to be GDPR and HIPAA ready, with encrypted data storage, role-based access control with granular permissions, and audit logging. Compliance also depends on how each practice configures and uses the system.',
  },
  {
    q: 'Does AureonCare support FHIR and HL7?',
    a: 'Yes. AureonCare supports FHIR R4 and HL7, so it can exchange data with labs, pharmacies, other EHR systems and billing platforms through open standards and a RESTful API.',
  },
  {
    q: 'Can AureonCare run on-premises?',
    a: 'Yes. AureonCare can run in the cloud or on-premises, so practices and groups can choose the deployment that fits their data protection and IT requirements.',
  },
  {
    q: 'Which languages does AureonCare support?',
    a: 'AureonCare is available in 8 languages: English, German, French, Spanish, Portuguese, Chinese, Arabic and Hindi.',
  },
  {
    q: 'Does AureonCare offer telehealth?',
    a: 'Yes. AureonCare includes secure telehealth video visits linked to appointments, and patients can join from the patient portal.',
  },
  {
    q: 'How do I get started with AureonCare?',
    a: 'Book a 20-minute demo or a free practice efficiency assessment through the contact page at aureoncare.tech. The team reviews your workflow, shows AureonCare set up for your specialty, and guides you through setup.',
  },
]

// Pages for the sitemap and llms.txt. The team page is left out on purpose.
export const pages = [
  { path: '/', title: 'Home', priority: 1.0, summary: 'Overview of AureonCare for owners, clinicians, front desk teams, patients and healthcare groups.' },
  { path: '/product', title: 'Product', priority: 0.9, summary: 'All AureonCare platform features and integrations.' },
  { path: '/resources', title: 'Free resources', priority: 0.8, summary: 'Free tools for practice leaders.' },
  { path: '/resources/revenue-leak-checklist', title: 'The Revenue Leak Checklist', priority: 0.8, summary: '15 places medical practices lose revenue between booking and payment, and how to fix each one.' },
  { path: '/resources/no-show-calculator', title: 'No-show cost calculator', priority: 0.8, summary: 'Calculate what missed appointments cost a practice per month and per year.' },
  { path: '/about', title: 'About', priority: 0.6, summary: 'AureonCare’s story, mission and values.' },
  { path: '/contact', title: 'Contact', priority: 0.7, summary: 'Book a demo, request a free assessment, talk to sales, partner with AureonCare or get support.' },
  { path: '/privacy-policy', title: 'Privacy policy', priority: 0.3, summary: 'How AureonCare handles personal data under GDPR and HIPAA.' },
  { path: '/terms-of-service', title: 'Terms of service', priority: 0.3, summary: 'Terms governing use of AureonCare.' },
]
