import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hb-black':    '#080808',
        'hb-black-2':  '#0d0d0d',
        'hb-black-3':  '#111111',
        'hb-black-4':  '#161616',
        'hb-black-5':  '#1a1a1a',
        'hb-black-6':  '#222222',

        'hb-purple':   '#9333ea',
        'hb-purple-2': '#7c3aed',
        'hb-purple-3': '#6d28d9',
        'hb-purple-light': '#c084fc',
        'hb-purple-dark':  '#581c87',
        'hb-purple-glow':  'rgba(147, 51, 234, 0.15)',

        'hb-gold':     '#D4AF37',
        'hb-gold-mid': '#C9A227',
        'hb-gold-2':   '#F5D76E',
        'hb-gold-3':   '#B8860B',
        'hb-gold-dim': 'rgba(212, 175, 55, 0.15)',
        'hb-gold-border': 'rgba(212, 175, 55, 0.32)',

        'hb-white':    '#ffffff',
        'hb-off-white':'#f5f5f0',
        'hb-gray-1':   'rgba(255,255,255,0.65)',
        'hb-gray-2':   'rgba(255,255,255,0.45)',
        'hb-gray-3':   'rgba(255,255,255,0.25)',
        'hb-gray-4':   'rgba(255,255,255,0.08)',

        'hb-green':    '#4ade80',
      },
      fontFamily: {
        'display': ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        'body':    ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        'logo':    ['var(--font-cinzel)', 'Cinzel', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15' }],
        'label':      ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        'label-lg':   ['0.75rem',   { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      spacing: {
        'section':    '6rem',
        'section-sm': '4rem',
        'section-lg': '8rem',
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #B8860B 0%, #D4AF37 45%, #F5D76E 100%)',
        'purple-glow':     'radial-gradient(ellipse at center, rgba(147,51,234,0.25) 0%, transparent 70%)',
        'hero-gradient':   'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)',
        'section-fade':    'linear-gradient(180deg, #080808 0%, #0d0d0d 100%)',
        'gold-line':       'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
      },
      animation: {
        'fade-up':       'fadeUp 0.7s ease forwards',
        'fade-in':       'fadeIn 0.5s ease forwards',
        'ticker':        'ticker 30s linear infinite',
        'pulse-gold':    'pulseGold 2s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold-sm':  '0 0 20px rgba(212,175,55,0.15)',
        'gold-md':  '0 0 40px rgba(212,175,55,0.2)',
        'gold-lg':  '0 0 80px rgba(212,175,55,0.25)',
        'purple-sm':'0 0 20px rgba(147,51,234,0.2)',
        'purple-md':'0 0 40px rgba(147,51,234,0.3)',
        'inset-top':'inset 0 1px 0 rgba(212,175,55,0.2)',
      },
      borderColor: {
        'gold-dim':    'rgba(212,175,55,0.2)',
        'gold-mid':    'rgba(212,175,55,0.4)',
        'gold-bright': 'rgba(212,175,55,0.7)',
        'white-dim':   'rgba(255,255,255,0.08)',
        'white-mid':   'rgba(255,255,255,0.15)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
