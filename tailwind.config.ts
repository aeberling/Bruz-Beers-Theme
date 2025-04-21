import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B6922E', // Updated gold color from original site
        secondary: '#333333', // Dark color for text
        dark: '#1A1A1A',  // Super dark sections
        light: '#F5F5F5', // Light sections
      },
      fontFamily: {
        sans: ['Catamaran', 'sans-serif'],
        display: ['"Grand Hotel"', 'cursive'],
        cursive: ['"Grand Hotel"', 'cursive'],
      },
      backgroundImage: {
        'hero-slide-1': "url('/images/hero-slide-1.jpg')",
        'hero-slide-2': "url('/images/hero-slide-2.jpg')",
        'hero-slide-3': "url('/images/hero-slide-3.jpg')",
        'brewing': "url('/images/bg-brewing.jpg')",
        'events': "url('/images/bg-events.jpg')",
        'awards': "url('/images/bg-awards.jpg')",
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
export default config 