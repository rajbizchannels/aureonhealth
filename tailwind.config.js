/** @type {import('tailwindcss').Config} */
// Brand palette, sampled from the AureonCare logo (gold "Aureon" + teal "Care").
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aureon: {
          amber: '#FDC000',     // bright logo gold – buttons, accents
          gold: '#F5A800',      // warm gold – gradients, rings
          'gold-deep': '#B07A00', // gold that reads on white
          teal: '#01B4A2',      // bright logo teal – gradients, accents
          ocean: '#00857A',     // brand teal that reads on white (text, links)
          blue: '#0B4F4A',      // deep teal – dark sections, body headings
          green: '#0E8254',     // tagline green
          beige: '#FFF6DB',     // warm cream
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 60s linear infinite',
      },
      backgroundImage: {
        'gradient-aureon': 'linear-gradient(135deg, #FDC000 0%, #F5A800 35%, #01B4A2 75%, #00857A 100%)',
        'gradient-aureon-light': 'linear-gradient(135deg, rgba(253, 192, 0, 0.12) 0%, rgba(1, 180, 162, 0.12) 100%)',
      },
    },
  },
  plugins: [],
}
