import { pageMetadata } from '@/lib/seo'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import ResourceCards from '@/components/ResourceCards'
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd'

export const metadata = pageMetadata({
  title: 'Free Resources for Practice Leaders',
  description:
    'Free tools for clinics: the Revenue Leak Checklist, a no-show cost calculator and a practice efficiency assessment.',
  path: '/resources',
})

export default function Resources() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }])} />
      <section className="bg-gradient-to-b from-aureon-beige to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
            Free resources
          </span>
          <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
            Run a healthier, <span className="text-gradient-aureon">more profitable practice</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Practical tools for practice owners, clinicians and managers. Use them on their own, or let us
            walk through the results with you.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResourceCards />

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-aureon-ocean to-aureon-blue p-10 text-center text-white">
            <h2 className="text-2xl font-bold md:text-3xl">Prefer to learn by watching or reading?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-200">
              Follow AureonCare for product walkthroughs, practice tips and invitations to the events where you can
              meet our team.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://www.linkedin.com/company/aureoncare" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-aureon-blue hover:bg-aureon-amber">
                <FaLinkedin /> Follow on LinkedIn
              </a>
              <a href="https://www.youtube.com/@aureoncare" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-aureon-blue">
                <FaYoutube /> Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
