import type { Metadata } from 'next'
import Calculator from './Calculator'

export const metadata: Metadata = {
  title: 'No-Show Cost Calculator | AureonCare',
  description:
    'Work out how much revenue missed appointments cost your practice each month and each year, and what winning some back is worth.',
}

export default function NoShowCalculator() {
  return (
    <div className="bg-gradient-to-b from-aureon-beige to-white">
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-aureon-ocean shadow-sm ring-1 ring-aureon-teal/30">
          Free calculator · 1 minute
        </span>
        <h1 className="mt-6 text-4xl font-bold text-aureon-blue md:text-5xl">
          What do no-shows <span className="text-gradient-aureon">really cost you?</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          An empty chair still costs you staff time, room time and the patient who could have taken the slot.
          Move the sliders to match your practice.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Calculator />
        <p className="mt-6 text-center text-xs text-gray-500">
          Calculated in your browser from the numbers you enter. Nothing is stored or sent.
        </p>
      </section>
    </div>
  )
}
