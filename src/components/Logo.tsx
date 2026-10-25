import Image from 'next/image'

type LogoProps = {
  /** Icon size in pixels. */
  size: number
  /** "light" for white backgrounds, "dark" for teal backgrounds. */
  theme?: 'light' | 'dark'
}

const TAGLINE = ['Health', 'Efficiency', 'Growth']

// Icon + "AureonCare" wordmark + tagline, matching the full brand logo.
export default function Logo({ size, theme = 'light' }: LogoProps) {
  const dark = theme === 'dark'

  return (
    <div className="flex items-center">
      <Image src="/logos/aureoncare-logo.png" alt="" width={size} height={size} />
      <div className="ml-3 flex flex-col leading-none">
        <span className="text-[1.65rem] font-bold">
          <span className={dark ? 'text-aureon-amber' : 'text-aureon-gold'}>Aureon</span>
          <span className="text-aureon-teal">Care</span>
        </span>
        <span
          className={`mt-1 text-[0.6875rem] font-semibold tracking-wide whitespace-nowrap ${
            dark ? 'text-aureon-beige' : 'text-aureon-green'
          }`}
        >
          {TAGLINE.map((word, i) => (
            <span key={word}>
              {i > 0 && <span className="mx-1.5 text-aureon-gold">|</span>}
              {word}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
