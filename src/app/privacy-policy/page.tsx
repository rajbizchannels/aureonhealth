import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AureonCare',
  description: 'AureonCare Privacy Policy — GDPR and HIPAA compliant data protection notice for our healthcare technology platform.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200">
            Last updated: 1 March 2026 &nbsp;·&nbsp; Effective date: 1 March 2026
          </p>
          <p className="mt-3 text-sm text-gray-300">
            This policy covers both <strong>GDPR</strong> (EU/Germany) and{' '}
            <strong>HIPAA</strong> (United States) obligations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-slate max-w-none space-y-10 text-gray-700 leading-relaxed">

          {/* 1. Controller */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">1. Data Controller / Covered Entity</h2>
            <p>
              The data controller within the meaning of the General Data Protection Regulation
              (GDPR) and, where applicable, the covered entity / business associate within the
              meaning of the Health Insurance Portability and Accountability Act of 1996 (HIPAA)
              and its implementing regulations is:
            </p>
            <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-200 text-sm">
              <p className="font-semibold text-aureon-blue text-base">AureonCare</p>
              <p>97816 Lohr am Main</p>
              <p>Bavaria (Bayern), Germany</p>
              <p className="mt-2">Email: <a href="mailto:info@aureoncare.tech" className="text-aureon-ocean underline">info@aureoncare.tech</a></p>
              <p>Phone: <a href="tel:+4917620380707" className="text-aureon-ocean underline">+49 176 203 80707</a></p>
            </div>
            <p className="mt-3">
              For all privacy-related enquiries please contact our Data Protection Officer (DPO)
              at:{' '}
              <a href="mailto:privacy@aureoncare.tech" className="text-aureon-ocean underline">
                privacy@aureoncare.tech
              </a>
            </p>
          </div>

          {/* 2. Scope */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">2. Scope of This Policy</h2>
            <p>
              This Privacy Policy applies to all personal data and protected health information
              (PHI) processed by AureonCare through:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Our website at <span className="font-medium">aureoncare.tech</span> and all sub-domains.</li>
              <li>The AureonCare SaaS platform and mobile applications.</li>
              <li>Any communication channels (email, telephone, contact forms, chat).</li>
              <li>Business relationships with healthcare providers, clinics, and partners.</li>
            </ul>
          </div>

          {/* 3. Data We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">3. Categories of Data We Collect</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">3.1 Website Visitors</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>IP addresses and browser / device metadata (server logs, max. 7 days).</li>
              <li>Contact form submissions: name, email address, company, message content.</li>
              <li>Newsletter subscriptions: name, email address, opt-in timestamp.</li>
              <li>Cookies and similar tracking technologies (see Section 9).</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">3.2 Healthcare Provider Accounts</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Account credentials (name, work email, hashed password).</li>
              <li>Organisation name, specialty, address, NPI / registration number.</li>
              <li>Billing and payment information (processed by PCI-DSS–compliant payment processor; we do not store full card numbers).</li>
              <li>Platform usage logs and audit trails (required for HIPAA §164.312).</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">3.3 Protected Health Information (PHI)</h3>
            <p>
              Where a healthcare provider uses AureonCare as a Business Associate (as defined in
              45 CFR §160.103), AureonCare may process PHI on behalf of the provider. PHI
              includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Patient demographics (name, date of birth, address, contact details).</li>
              <li>Medical record numbers, diagnoses (ICD codes), medications, and treatment notes.</li>
              <li>Insurance identifiers and claims information.</li>
              <li>Electronic health records (EHR) and e-prescriptions.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500 italic">
              AureonCare processes PHI solely as instructed by the covered entity under a signed
              Business Associate Agreement (BAA). Patients wishing to exercise rights over their
              PHI should contact their healthcare provider directly.
            </p>
          </div>

          {/* 4. Legal Bases (GDPR) */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">4. Legal Bases for Processing (GDPR — Art. 6 & 9)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-aureon-ocean text-white">
                    <th className="border border-gray-200 px-4 py-2 text-left">Processing Activity</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">Contact form enquiries</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(b) — pre-contractual measures</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Platform service delivery</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(b) — contract performance</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">Tax and accounting records</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(c) — legal obligation (§ 147 AO, § 257 HGB)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Security, fraud prevention, audit logs</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(f) — legitimate interests</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">Marketing newsletters</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(a) — consent (freely withdrawable)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Processing health data (PHI / Art. 9 GDPR)</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 9(2)(h) — healthcare provision; Art. 9(2)(a) — explicit consent where required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. HIPAA Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">5. HIPAA Compliance</h2>
            <p>
              AureonCare implements and maintains administrative, physical, and technical
              safeguards required by the HIPAA Security Rule (45 CFR Part 164, Subpart C) and
              complies with the HIPAA Privacy Rule (45 CFR Part 164, Subpart E):
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.1 Technical Safeguards</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>End-to-end encryption (TLS 1.3) for all data in transit.</li>
              <li>AES-256 encryption for PHI at rest.</li>
              <li>Unique user identification and automatic session timeouts.</li>
              <li>Role-based access controls (RBAC) with least-privilege principle.</li>
              <li>Audit logs capturing user access, modifications, and disclosures of PHI.</li>
              <li>Multi-factor authentication (MFA) for all platform accounts.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.2 Administrative Safeguards</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Designated Security and Privacy Officer.</li>
              <li>Annual workforce training on HIPAA privacy and security obligations.</li>
              <li>Risk analysis and risk management programme reviewed at least annually.</li>
              <li>Business Associate Agreements (BAAs) executed with all sub-processors handling PHI.</li>
              <li>Incident response and breach notification procedures compliant with 45 CFR §164.400–414.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.3 Physical Safeguards</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Data hosted in ISO 27001–certified data centres with restricted physical access.</li>
              <li>Workstation use and device disposal policies in place.</li>
              <li>Media re-use and destruction procedures compliant with NIST SP 800-88.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.4 Breach Notification</h3>
            <p>
              In the event of a breach of unsecured PHI, AureonCare will notify affected covered
              entities without unreasonable delay and no later than 60 calendar days after
              discovery, in accordance with 45 CFR §164.410. Covered entities remain responsible
              for notifying individuals and, where applicable, the U.S. Department of Health &amp;
              Human Services (HHS) and media outlets pursuant to 45 CFR §164.404–408.
            </p>
          </div>

          {/* 6. How We Use Data */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">6. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide, maintain, and improve the AureonCare platform and website.</li>
              <li>Respond to enquiries, support requests, and contact form submissions.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Send transactional communications (e.g., invoices, system alerts, security notices).</li>
              <li>Send marketing communications where you have provided consent (opt-out available at any time).</li>
              <li>Comply with applicable legal obligations (tax law, accounting, regulatory reporting).</li>
              <li>Detect and prevent fraud, misuse, and security incidents.</li>
              <li>Conduct anonymised product analytics to improve user experience.</li>
            </ul>
            <p className="mt-3 text-sm">
              We will never sell, rent, or trade personal data or PHI to third parties for their
              own commercial purposes.
            </p>
          </div>

          {/* 7. Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">7. Data Sharing and Recipients</h2>
            <p>
              We share personal data only when necessary and with appropriate contractual
              safeguards:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <span className="font-medium">Cloud infrastructure providers</span> — hosting, storage, CDN (under DPA / BAA).
              </li>
              <li>
                <span className="font-medium">Payment processors</span> — PCI-DSS–certified providers for billing.
              </li>
              <li>
                <span className="font-medium">Email service providers</span> — transactional and marketing emails (under DPA).
              </li>
              <li>
                <span className="font-medium">Analytics providers</span> — anonymised/pseudonymised usage metrics only.
              </li>
              <li>
                <span className="font-medium">Professional advisors</span> — lawyers, accountants, auditors (under confidentiality obligations).
              </li>
              <li>
                <span className="font-medium">Regulatory authorities</span> — where required by law (e.g., tax authorities, supervisory authorities).
              </li>
            </ul>
            <p className="mt-3">
              A current list of sub-processors is available on request at{' '}
              <a href="mailto:privacy@aureoncare.tech" className="text-aureon-ocean underline">
                privacy@aureoncare.tech
              </a>.
            </p>
          </div>

          {/* 8. International Transfers */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">8. International Data Transfers</h2>
            <p>
              Where personal data is transferred outside the European Economic Area (EEA),
              AureonCare relies on one or more of the following transfer mechanisms:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>European Commission adequacy decisions (Art. 45 GDPR).</li>
              <li>Standard Contractual Clauses (SCCs) adopted by the European Commission (Art. 46(2)(c) GDPR).</li>
              <li>Binding Corporate Rules where applicable (Art. 47 GDPR).</li>
            </ul>
            <p className="mt-3">
              PHI transferred to or from U.S.-based systems is subject to HIPAA requirements and
              is handled exclusively within environments covered by a valid BAA.
            </p>
          </div>

          {/* 9. Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">9. Cookies and Tracking Technologies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-aureon-ocean text-white">
                    <th className="border border-gray-200 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2 font-medium">Strictly necessary</td>
                    <td className="border border-gray-200 px-4 py-2">Session management, authentication, security</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(b)/(f) — no consent required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 font-medium">Functional</td>
                    <td className="border border-gray-200 px-4 py-2">User preferences, language, layout settings</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(a) — consent</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2 font-medium">Analytics</td>
                    <td className="border border-gray-200 px-4 py-2">Anonymised page views and feature usage</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(a) — consent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 font-medium">Marketing</td>
                    <td className="border border-gray-200 px-4 py-2">Personalised advertising and retargeting</td>
                    <td className="border border-gray-200 px-4 py-2">Art. 6(1)(a) — consent (not currently active)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">
              You can adjust cookie preferences at any time via your browser settings or our
              cookie consent banner. Withdrawing consent does not affect the lawfulness of
              processing before withdrawal.
            </p>
          </div>

          {/* 10. Retention */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">10. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-medium">Contact form data:</span> 3 years from last contact.</li>
              <li><span className="font-medium">Account data:</span> Duration of contract + 3 years after termination.</li>
              <li><span className="font-medium">Financial / invoicing records:</span> 10 years (§ 147 AO, § 257 HGB).</li>
              <li><span className="font-medium">PHI / EHR data:</span> As directed by the covered entity; minimum retention periods apply per applicable state/federal law (typically 6–10 years after last service date; paediatric records until age of majority + retention period).</li>
              <li><span className="font-medium">Audit logs (HIPAA §164.312):</span> 6 years.</li>
              <li><span className="font-medium">Server access logs:</span> 7 days (then automatically purged).</li>
              <li><span className="font-medium">Marketing consent records:</span> Until consent is withdrawn + 3 years.</li>
            </ul>
            <p className="mt-3 text-sm">
              After the applicable retention period expires, data is securely deleted or
              anonymised in accordance with NIST SP 800-88 and DIN 66399 guidelines.
            </p>
          </div>

          {/* 11. GDPR Rights */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">11. Your Rights under the GDPR</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have the following
              rights regarding your personal data:
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { right: 'Right of Access (Art. 15)', desc: 'Obtain confirmation of and access to your personal data.' },
                { right: 'Right to Rectification (Art. 16)', desc: 'Have inaccurate data corrected without undue delay.' },
                { right: 'Right to Erasure (Art. 17)', desc: 'Request deletion ("right to be forgotten") where conditions are met.' },
                { right: 'Right to Restriction (Art. 18)', desc: 'Restrict processing while accuracy or legality is disputed.' },
                { right: 'Right to Portability (Art. 20)', desc: 'Receive data in a structured, machine-readable format.' },
                { right: 'Right to Object (Art. 21)', desc: 'Object to processing based on legitimate interests or for direct marketing.' },
                { right: 'Right to Withdraw Consent (Art. 7(3))', desc: 'Withdraw consent at any time without affecting prior lawful processing.' },
                { right: 'Right not to be Subject to Automated Decisions (Art. 22)', desc: 'Not be subject to solely automated decisions with significant effects.' },
              ].map(({ right, desc }) => (
                <div key={right} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="font-semibold text-aureon-blue text-sm">{right}</p>
                  <p className="text-sm mt-1">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@aureoncare.tech" className="text-aureon-ocean underline">
                privacy@aureoncare.tech
              </a>. We will respond within <strong>30 days</strong> (extendable by two further months where necessary). We may ask you to verify your identity before fulfilling a request.
            </p>
            <p className="mt-3">
              You also have the right to lodge a complaint with the competent supervisory
              authority. For AureonCare, the lead supervisory authority is:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <p className="font-semibold text-aureon-blue">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
              <p>Promenade 18, 91522 Ansbach, Bavaria, Germany</p>
              <p>
                Web:{' '}
                <span className="text-aureon-ocean">www.lda.bayern.de</span>
              </p>
            </div>
          </div>

          {/* 12. HIPAA Patient Rights */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">12. Patient Rights under HIPAA</h2>
            <p>
              As a Business Associate, AureonCare supports covered entities in fulfilling the
              following patient rights under HIPAA (45 CFR §164.520–528):
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><span className="font-medium">Right to access PHI</span> — Patients may request copies of their medical records from their provider.</li>
              <li><span className="font-medium">Right to amend PHI</span> — Patients may request corrections to inaccurate or incomplete records.</li>
              <li><span className="font-medium">Right to an accounting of disclosures</span> — Patients may request a list of certain disclosures of PHI.</li>
              <li><span className="font-medium">Right to request restrictions</span> — Patients may request limits on uses and disclosures of PHI.</li>
              <li><span className="font-medium">Right to confidential communications</span> — Patients may request alternative means or locations for communications.</li>
              <li><span className="font-medium">Right to a Notice of Privacy Practices</span> — Covered entities must provide this notice to patients.</li>
            </ul>
            <p className="mt-3 text-sm">
              Patients should direct all HIPAA rights requests to their healthcare provider.
              AureonCare will assist covered entities in responding to such requests as required
              by the applicable BAA.
            </p>
          </div>

          {/* 13. Security */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">13. Data Security</h2>
            <p>
              AureonCare implements industry-standard technical and organisational measures
              (TOMs) to protect personal data and PHI against unauthorised access, alteration,
              disclosure, or destruction:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>TLS 1.3 encryption for all data in transit.</li>
              <li>AES-256 encryption for all data at rest.</li>
              <li>SOC 2 Type II–aligned security programme.</li>
              <li>Penetration testing conducted at minimum annually by independent third parties.</li>
              <li>Vulnerability management and patch management programme.</li>
              <li>24/7 security monitoring and intrusion detection systems.</li>
              <li>Disaster recovery and business continuity plans tested regularly.</li>
              <li>Background checks and confidentiality agreements for all staff with data access.</li>
            </ul>
            <p className="mt-3 text-sm">
              Despite these measures, no method of transmission over the Internet is 100% secure.
              We encourage users to use strong, unique passwords and enable MFA on their accounts.
            </p>
          </div>

          {/* 14. Children */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">14. Children&apos;s Privacy</h2>
            <p>
              Our website and platform are not directed to children under 16 years of age. We do
              not knowingly collect personal data from children under 16 without verifiable
              parental or guardian consent. Where PHI of minors is processed within our platform,
              this is done solely at the direction of the covered entity and in compliance with
              applicable law (including the Children&apos;s Online Privacy Protection Act (COPPA) and
              Art. 8 GDPR).
            </p>
            <p className="mt-3">
              If you believe we have inadvertently collected personal data from a child, please
              contact{' '}
              <a href="mailto:privacy@aureoncare.tech" className="text-aureon-ocean underline">
                privacy@aureoncare.tech
              </a>{' '}
              immediately.
            </p>
          </div>

          {/* 15. Changes */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">15. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, legal requirements, or for other operational reasons. We will
              notify you of material changes by posting a prominent notice on our website and, where
              appropriate, by sending an email notification to registered users at least 30 days
              before the change takes effect. The &quot;Last updated&quot; date at the top of this page
              indicates when the most recent revision was made.
            </p>
            <p className="mt-3">
              Your continued use of our services after the effective date constitutes your
              acceptance of the revised policy.
            </p>
          </div>

          {/* 16. Contact */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">16. Contact Us</h2>
            <p>
              For any questions, concerns, or requests relating to this Privacy Policy or our
              data processing activities, please contact:
            </p>
            <div className="mt-4 p-5 bg-gradient-to-r from-aureon-ocean/10 to-aureon-blue/10 rounded-xl border border-aureon-ocean/20">
              <p className="font-semibold text-aureon-blue">AureonCare — Data Protection</p>
              <p className="text-sm mt-1">97816 Lohr am Main, Bavaria, Germany</p>
              <p className="text-sm mt-1">
                Email:{' '}
                <a href="mailto:privacy@aureoncare.tech" className="text-aureon-ocean underline">
                  privacy@aureoncare.tech
                </a>
              </p>
              <p className="text-sm">
                Phone:{' '}
                <a href="tel:+4917620380707" className="text-aureon-ocean underline">
                  +49 176 203 80707
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
