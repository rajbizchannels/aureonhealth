import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | AureonCare',
  description: 'AureonCare Terms of Service — the legal agreement governing use of our healthcare technology platform.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-aureon-ocean to-aureon-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-200">
            Last updated: 1 March 2026 &nbsp;·&nbsp; Effective date: 1 March 2026
          </p>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            Please read these Terms carefully before using AureonCare. By accessing or using our
            services, you agree to be bound by these Terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-slate max-w-none space-y-10 text-gray-700 leading-relaxed">

          {/* Parties */}
          <div className="p-5 bg-amber-50 border border-aureon-amber/30 rounded-xl text-sm">
            <p className="font-semibold text-aureon-blue mb-2">Important Notice</p>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you
              (&quot;Customer&quot;, &quot;User&quot;, or &quot;you&quot;) and <strong>AureonCare</strong>, 97816 Lohr am Main,
              Bavaria, Germany (&quot;AureonCare&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). If you are accepting on
              behalf of an organisation, you represent and warrant that you have authority to bind
              that organisation.
            </p>
          </div>

          {/* 1. Definitions */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">1. Definitions</h2>
            <ul className="space-y-2 list-none">
              {[
                ['"Services"', 'The AureonCare SaaS platform, website (aureoncare.tech), APIs, documentation, and any related products or features.'],
                ['"Account"', 'A registered account granting access to the Services.'],
                ['"Customer"', 'A healthcare provider, clinic, or organisation that enters into a subscription agreement with AureonCare.'],
                ['"User"', 'Any individual authorised by a Customer to access the Services.'],
                ['"Content"', 'All data, text, files, and information uploaded to or created in the Services.'],
                ['"PHI"', 'Protected Health Information as defined under HIPAA (45 CFR §160.103).'],
                ['"BAA"', 'Business Associate Agreement executed between AureonCare and a covered entity.'],
                ['"Subscription"', 'The paid licence to access and use the Services for a defined period.'],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-2 text-sm">
                  <span className="font-semibold text-aureon-blue whitespace-nowrap">{term}</span>
                  <span>{def}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Acceptance */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">2. Acceptance of Terms</h2>
            <p>
              By creating an Account, accessing, or using the Services, you acknowledge that you
              have read, understood, and agree to be bound by these Terms, our{' '}
              <Link href="/privacy-policy" className="text-aureon-ocean underline">
                Privacy Policy
              </Link>
              , and any additional agreements or policies incorporated by reference.
            </p>
            <p className="mt-3">
              If you do not agree to these Terms, you must not access or use the Services. We
              reserve the right to modify these Terms at any time (see Section 20).
            </p>
          </div>

          {/* 3. Eligibility */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">3. Eligibility</h2>
            <p>To use the Services, you must:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Be at least 18 years of age.</li>
              <li>Be a licensed healthcare professional, authorised clinic administrator, or duly authorised representative of a healthcare organisation.</li>
              <li>Have the legal capacity to enter into binding contracts in your jurisdiction.</li>
              <li>Not be prohibited from using the Services under any applicable law.</li>
            </ul>
          </div>

          {/* 4. Account Registration */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">4. Account Registration and Security</h2>
            <p>
              To access most features of the Services, you must create an Account. You agree to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide accurate, complete, and current registration information.</li>
              <li>Maintain and promptly update your account information.</li>
              <li>Keep your password and access credentials confidential.</li>
              <li>Enable multi-factor authentication (MFA) where offered and required by your organisation&apos;s security policy.</li>
              <li>Immediately notify AureonCare of any unauthorised use of your Account at <a href="mailto:security@aureoncare.tech" className="text-aureon-ocean underline">security@aureoncare.tech</a>.</li>
              <li>Accept responsibility for all activities that occur under your Account.</li>
            </ul>
            <p className="mt-3">
              AureonCare reserves the right to suspend or terminate any Account that it
              reasonably believes has been compromised or used in violation of these Terms.
            </p>
          </div>

          {/* 5. Subscriptions */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">5. Subscriptions, Fees, and Payment</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.1 Subscription Plans</h3>
            <p>
              AureonCare offers various subscription plans as described on our pricing page. Plan
              features, limits, and fees are subject to change with 30 days&apos; prior notice to
              existing Customers.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.2 Fees and Payment</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>All fees are quoted in Euros (EUR) unless otherwise agreed in writing.</li>
              <li>Fees are billed in advance on a monthly or annual basis, as selected at checkout.</li>
              <li>Payment is due within 14 days of invoice date.</li>
              <li>Late payments accrue interest at 9 percentage points above the European Central Bank base rate (§ 288(2) BGB).</li>
              <li>All fees are exclusive of applicable taxes (e.g., VAT). German VAT (Umsatzsteuer) will be added where applicable.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.3 Refunds</h3>
            <p>
              All subscription fees are non-refundable except as required by applicable law or
              as expressly stated in a separate order form. For annual subscriptions cancelled
              within 14 days of initial purchase, a full refund will be issued where required
              by EU consumer law (where applicable).
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">5.4 Free Trials</h3>
            <p>
              AureonCare may offer free trial periods at its discretion. At the end of the trial,
              your subscription will automatically convert to a paid plan unless cancelled before
              the trial end date. Credit card details may be required to start a trial.
            </p>
          </div>

          {/* 6. HIPAA and PHI */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">6. HIPAA Obligations and Protected Health Information</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">6.1 Business Associate Agreement</h3>
            <p>
              If you are a HIPAA Covered Entity (as defined in 45 CFR §160.103) or a Business
              Associate that will use the Services to create, receive, maintain, or transmit PHI,
              you must execute a Business Associate Agreement (BAA) with AureonCare prior to
              transmitting any PHI. Use of the Services to process PHI without a signed BAA is
              strictly prohibited and constitutes a material breach of these Terms.
            </p>
            <p className="mt-2">
              To request a BAA, contact:{' '}
              <a href="mailto:compliance@aureoncare.tech" className="text-aureon-ocean underline">
                compliance@aureoncare.tech
              </a>
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">6.2 Customer Responsibilities</h3>
            <p>As a Covered Entity using our Services, you agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Comply with all applicable HIPAA Privacy and Security Rules.</li>
              <li>Obtain all necessary patient authorisations and consents for data processing.</li>
              <li>Ensure Users are trained on HIPAA obligations before accessing PHI.</li>
              <li>Promptly notify AureonCare of any suspected security incidents involving PHI.</li>
              <li>Implement access controls to limit PHI access to authorised personnel only.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">6.3 Minimum Necessary Standard</h3>
            <p>
              Users must access and use PHI only to the minimum extent necessary to accomplish
              the intended purpose, in accordance with 45 CFR §164.502(b) and §164.514(d).
            </p>
          </div>

          {/* 7. GDPR and Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">7. GDPR and Data Protection Obligations</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">7.1 Data Processing Agreement</h3>
            <p>
              Where AureonCare processes personal data on behalf of a Customer as a data
              processor within the meaning of Art. 4(8) GDPR, the parties shall enter into a
              Data Processing Agreement (DPA) compliant with Art. 28 GDPR. The DPA forms an
              integral part of these Terms and is available at{' '}
              <a href="mailto:privacy@aureoncare.tech" className="text-aureon-ocean underline">
                privacy@aureoncare.tech
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">7.2 Customer as Data Controller</h3>
            <p>
              The Customer is the data controller for all personal data of their patients and
              staff processed through the Services. The Customer is solely responsible for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Establishing a lawful basis for all processing activities (Art. 6 GDPR).</li>
              <li>Providing data subjects with required privacy notices (Art. 13/14 GDPR).</li>
              <li>Responding to data subject rights requests (Art. 15–22 GDPR).</li>
              <li>Conducting and maintaining Data Protection Impact Assessments (DPIAs) where required (Art. 35 GDPR).</li>
              <li>Complying with applicable national data protection laws (e.g., BDSG in Germany).</li>
            </ul>
          </div>

          {/* 8. Acceptable Use */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">8. Acceptable Use Policy</h2>
            <p>You agree not to use the Services to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Violate any applicable law, regulation, or third-party rights.</li>
              <li>Upload, transmit, or store any unlawful, harmful, defamatory, or fraudulent content.</li>
              <li>Attempt to gain unauthorised access to any system, network, or account.</li>
              <li>Conduct penetration testing, vulnerability scanning, or security audits without prior written consent from AureonCare.</li>
              <li>Introduce viruses, malware, or any other malicious code.</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Services.</li>
              <li>Scrape, crawl, or use automated means to extract data from the Services.</li>
              <li>Sublicense, resell, or provide third-party access to the Services without authorisation.</li>
              <li>Use the Services in a way that could damage, disable, overburden, or impair infrastructure.</li>
              <li>Process PHI for any purpose not permitted under the BAA or HIPAA.</li>
            </ul>
            <p className="mt-3">
              Violation of this Acceptable Use Policy may result in immediate suspension or
              termination of access without refund.
            </p>
          </div>

          {/* 9. Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">9. Intellectual Property Rights</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">9.1 AureonCare IP</h3>
            <p>
              The Services, including all software, algorithms, interfaces, content,
              documentation, trademarks, and trade secrets, are owned by AureonCare or its
              licensors and are protected by applicable intellectual property laws. Nothing in
              these Terms grants you any rights in or to AureonCare&apos;s IP except as expressly
              provided.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">9.2 Licence to Use Services</h3>
            <p>
              Subject to these Terms and payment of applicable fees, AureonCare grants you a
              limited, non-exclusive, non-transferable, revocable licence to access and use the
              Services for your internal healthcare operations during your Subscription term.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">9.3 Customer Content</h3>
            <p>
              You retain all intellectual property rights in Content you upload to the Services.
              You grant AureonCare a limited licence to host, store, process, and display your
              Content solely to provide the Services to you. AureonCare will not use your Content
              (including PHI) for any other purpose without your consent.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">9.4 Feedback</h3>
            <p>
              If you provide AureonCare with feedback, suggestions, or ideas regarding the
              Services, you grant AureonCare a perpetual, worldwide, royalty-free licence to use
              such feedback without restriction and without any obligation to compensate you.
            </p>
          </div>

          {/* 10. Confidentiality */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">10. Confidentiality</h2>
            <p>
              Each party may have access to the other party&apos;s confidential information
              (&quot;Confidential Information&quot;) in connection with these Terms. Each party agrees to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Hold Confidential Information in strict confidence using at least the same degree of care as it uses for its own confidential information (but no less than reasonable care).</li>
              <li>Not disclose Confidential Information to any third party without prior written consent, except to employees or contractors who need to know and are bound by equivalent confidentiality obligations.</li>
              <li>Use Confidential Information solely to exercise rights or perform obligations under these Terms.</li>
            </ul>
            <p className="mt-3 text-sm">
              PHI is governed by the BAA and applicable HIPAA requirements, which take precedence
              over this general confidentiality clause where they conflict.
            </p>
          </div>

          {/* 11. Availability and SLA */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">11. Service Availability and Uptime</h2>
            <p>
              AureonCare targets a monthly uptime of <strong>99.9%</strong> for the core platform,
              excluding scheduled maintenance windows. Scheduled maintenance will be communicated
              at least 48 hours in advance via email and/or in-app notification and will be
              performed during low-usage periods where practicable.
            </p>
            <p className="mt-3">
              In the event of unplanned downtime exceeding the committed uptime level in any
              calendar month, Customers on paid plans may be eligible for a pro-rated service
              credit as set out in the applicable Service Level Agreement (SLA). Service credits
              are the sole and exclusive remedy for service unavailability.
            </p>
          </div>

          {/* 12. Warranties */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">12. Warranties and Disclaimers</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">12.1 AureonCare Warranties</h3>
            <p>AureonCare warrants that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The Services will perform materially as described in the documentation.</li>
              <li>It will implement and maintain appropriate security measures as described in the Privacy Policy and BAA.</li>
              <li>It has all necessary rights to grant the licences in these Terms.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">12.2 Disclaimers</h3>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <p>
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;. TO THE MAXIMUM EXTENT
                PERMITTED BY APPLICABLE LAW, AUREONCARE DISCLAIMS ALL OTHER WARRANTIES, EXPRESS
                OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-2">
                THE SERVICES ARE NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS,
                OR TREATMENT. AUREONCARE DOES NOT PROVIDE MEDICAL ADVICE. CLINICAL DECISIONS
                REMAIN THE SOLE RESPONSIBILITY OF LICENSED HEALTHCARE PROFESSIONALS.
              </p>
            </div>
          </div>

          {/* 13. Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">13. Limitation of Liability</h2>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AUREONCARE
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION,
                ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR USE OF THE SERVICES, EVEN IF
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-2">
                AUREONCARE&apos;S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR IN CONNECTION WITH
                THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE FEES PAID BY YOU TO
                AUREONCARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR (B) €500 EUR.
              </p>
            </div>
            <p className="mt-3 text-sm">
              Nothing in these Terms limits or excludes liability for death or personal injury
              caused by negligence, fraud or fraudulent misrepresentation, or any other liability
              that cannot be limited or excluded under applicable law (including §309 Nr. 7 BGB
              and consumer protection laws).
            </p>
          </div>

          {/* 14. Indemnification */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">14. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless AureonCare and its officers,
              directors, employees, contractors, and agents from and against any claims,
              damages, liabilities, costs, and expenses (including reasonable legal fees) arising
              out of or in connection with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your use of the Services in violation of these Terms.</li>
              <li>Your Content or data uploaded to the Services.</li>
              <li>Your violation of any applicable law, regulation, or third-party right.</li>
              <li>Any PHI breach attributable to your acts or omissions.</li>
              <li>Claims by your patients or staff arising from your use of the Services.</li>
            </ul>
          </div>

          {/* 15. Term and Termination */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">15. Term and Termination</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">15.1 Term</h3>
            <p>
              These Terms commence on the date you first access the Services and remain in effect
              until your Subscription expires or is terminated.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">15.2 Termination by You</h3>
            <p>
              You may terminate your Subscription at any time by providing written notice to{' '}
              <a href="mailto:info@aureoncare.tech" className="text-aureon-ocean underline">
                info@aureoncare.tech
              </a>{' '}
              or through your account dashboard. Termination takes effect at the end of the
              current billing period. No refunds are provided for unused portions of a
              prepaid Subscription unless required by law.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">15.3 Termination by AureonCare</h3>
            <p>
              AureonCare may suspend or terminate your access immediately upon written notice if:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>You materially breach these Terms and fail to cure within 30 days of notice.</li>
              <li>You use the Services in a manner that poses a risk to AureonCare, other customers, or third parties.</li>
              <li>You become insolvent, enter bankruptcy, or cease operations.</li>
              <li>Required by law or regulatory authority.</li>
            </ul>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">15.4 Effect of Termination</h3>
            <p>Upon termination:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All licences granted under these Terms cease immediately.</li>
              <li>You must cease all use of the Services.</li>
              <li>AureonCare will provide a data export window of 30 days for you to retrieve your Content, after which data will be deleted per Section 16.</li>
              <li>Sections that by their nature survive termination shall survive (including confidentiality, IP rights, limitation of liability, and governing law).</li>
            </ul>
          </div>

          {/* 16. Data Return and Deletion */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">16. Data Return and Deletion</h2>
            <p>
              Upon written request received within 30 days of termination, AureonCare will
              provide an export of your Content in a standard machine-readable format (CSV, JSON,
              or HL7 FHIR where applicable).
            </p>
            <p className="mt-3">
              After the 30-day export window, AureonCare will securely delete or anonymise your
              Content in accordance with NIST SP 800-88 and DIN 66399, unless retention is
              required by law (e.g., HIPAA 6-year retention, German tax law). Written
              confirmation of deletion can be provided upon request.
            </p>
          </div>

          {/* 17. Third-Party Services */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">17. Third-Party Services and Integrations</h2>
            <p>
              The Services may integrate with or allow access to third-party services and
              applications. AureonCare does not control and is not responsible for third-party
              services. Your use of any third-party service is subject to that provider&apos;s own
              terms and privacy policy. AureonCare shall not be liable for any harm caused by
              third-party services.
            </p>
          </div>

          {/* 18. Force Majeure */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">18. Force Majeure</h2>
            <p>
              Neither party shall be liable for any delay or failure to perform its obligations
              (other than payment obligations) to the extent such delay or failure is caused by
              events beyond that party&apos;s reasonable control, including acts of God, natural
              disasters, war, terrorism, civil unrest, government actions, internet outages,
              cyberattacks by third parties, or widespread power failures, provided that the
              affected party notifies the other promptly and uses reasonable efforts to resume
              performance.
            </p>
          </div>

          {/* 19. Governing Law and Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">19. Governing Law and Dispute Resolution</h2>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">19.1 Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              Federal Republic of Germany, excluding conflict of law principles and the UN
              Convention on Contracts for the International Sale of Goods (CISG). Where
              mandatory consumer protection laws of your country of residence apply, those laws
              shall take precedence to the extent required.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">19.2 Jurisdiction</h3>
            <p>
              Any disputes arising out of or in connection with these Terms shall be subject to
              the exclusive jurisdiction of the competent courts in <strong>Würzburg, Bavaria, Germany</strong>,
              unless mandatory law requires otherwise.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">19.3 EU Online Dispute Resolution</h3>
            <p>
              Pursuant to Regulation (EU) No. 524/2013, the European Commission provides an
              Online Dispute Resolution (ODR) platform. AureonCare is not obliged to participate
              in ODR proceedings but will consider requests submitted via the ODR platform in
              good faith. Our email for ODR purposes is:{' '}
              <a href="mailto:info@aureoncare.tech" className="text-aureon-ocean underline">
                info@aureoncare.tech
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-aureon-ocean mt-4 mb-2">19.4 U.S. Users — Arbitration</h3>
            <p>
              For Customers located in the United States, any dispute, claim, or controversy
              arising out of or relating to these Terms that is not resolved informally within
              30 days shall be finally settled by binding arbitration administered by the
              American Arbitration Association (AAA) under its Commercial Arbitration Rules.
              Class action waiver: disputes must be brought individually, not as part of a
              class action. Notwithstanding the foregoing, either party may seek injunctive
              relief in any court of competent jurisdiction.
            </p>
          </div>

          {/* 20. Changes to Terms */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">20. Changes to These Terms</h2>
            <p>
              AureonCare may update these Terms from time to time. We will notify you of
              material changes at least <strong>30 days before</strong> the effective date by:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Posting a notice on our website and/or the platform dashboard.</li>
              <li>Sending an email notification to the registered account email address.</li>
            </ul>
            <p className="mt-3">
              Your continued use of the Services after the effective date of the updated Terms
              constitutes your acceptance. If you do not agree to the updated Terms, you must
              stop using the Services and cancel your Subscription before the effective date.
            </p>
          </div>

          {/* 21. General */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">21. General Provisions</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">Entire Agreement:</span> These Terms, together with the Privacy Policy, DPA, and any signed BAA or order form, constitute the entire agreement between the parties regarding the Services and supersede all prior agreements.
              </li>
              <li>
                <span className="font-semibold">Severability:</span> If any provision of these Terms is held invalid or unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will continue in full force.
              </li>
              <li>
                <span className="font-semibold">Waiver:</span> Failure to enforce any provision of these Terms does not constitute a waiver of the right to enforce it in the future.
              </li>
              <li>
                <span className="font-semibold">Assignment:</span> You may not assign or transfer your rights under these Terms without AureonCare&apos;s prior written consent. AureonCare may assign these Terms in connection with a merger, acquisition, or sale of assets, with 30 days&apos; notice.
              </li>
              <li>
                <span className="font-semibold">Notices:</span> Notices to AureonCare must be sent by email to <a href="mailto:info@aureoncare.tech" className="text-aureon-ocean underline">info@aureoncare.tech</a> with confirmation by registered letter to 97816 Lohr am Main, Bavaria, Germany.
              </li>
              <li>
                <span className="font-semibold">Language:</span> These Terms are written in English. In case of conflict between an English version and any translation, the English version prevails.
              </li>
            </ul>
          </div>

          {/* 22. Contact */}
          <div>
            <h2 className="text-2xl font-bold text-aureon-blue mb-3">22. Contact Information</h2>
            <p>
              For questions about these Terms or to report violations, please contact:
            </p>
            <div className="mt-4 p-5 bg-gradient-to-r from-aureon-ocean/10 to-aureon-blue/10 rounded-xl border border-aureon-ocean/20">
              <p className="font-semibold text-aureon-blue">AureonCare — Legal</p>
              <p className="text-sm mt-1">97816 Lohr am Main, Bavaria, Germany</p>
              <p className="text-sm mt-1">
                Email:{' '}
                <a href="mailto:info@aureoncare.tech" className="text-aureon-ocean underline">
                  info@aureoncare.tech
                </a>
              </p>
              <p className="text-sm">
                Phone:{' '}
                <a href="tel:+4917620380707" className="text-aureon-ocean underline">
                  +49 176 203 80707
                </a>
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Also see our{' '}
              <Link href="/privacy-policy" className="text-aureon-ocean underline">
                Privacy Policy
              </Link>{' '}
              for information about how we handle your personal data.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
