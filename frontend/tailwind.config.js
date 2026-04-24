/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Pure charcoal / near-black (was warm-brown obsidian)
        obsidian: {
          950: '#030303',
          900: '#080808',
          800: '#141414',
          700: '#1E1E1E',
          600: '#282828',
          500: '#363636',
          400: '#484848',
        },
        // Clean silver-white (was warm ivory/cream)
        ivory: {
          50:  '#FEFEFE',
          100: '#F6F6F6',
          200: '#EEEEEE',
          300: '#E4E4E4',
          400: '#D5D5D5',
          500: '#C0C0C0',
          600: '#A8A8A8',
        },
        // Vivid amber (was antique gold — works for all photography genres)
        gold: {
          100: '#FFF3D6',
          200: '#FFE09A',
          300: '#FFCA58',
          400: '#F5A623',
          500: '#E08A0C',
          600: '#C07008',
          700: '#9C5804',
          800: '#744002',
        },
        // Pure neutral grey scale (was warm-brown)
        warm: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D0D0D0',
          400: '#A0A0A0',
          500: '#747474',
          600: '#545454',
          700: '#3C3C3C',
          800: '#282828',
          900: '#1A1A1A',
          950: '#0C0C0C',
        },
        blush: {
          100: '#F8EEE9', 200: '#F0DDD4', 300: '#E4C8B8',
          400: '#D4AE9A', 500: '#C0907A', 600: '#A87060',
        },
        champagne: {
          50: '#FFFDF8', 100: '#FBF3E8', 200: '#F5E6CC',
          300: '#EDD5AA', 400: '#E0C080',
        },
        sage: { 300: '#C8D4C0', 400: '#A8BCA0', 500: '#8AA080' },
      },
      spacing: {
        18: '4.5rem', 22: '5.5rem', 26: '6.5rem', 30: '7.5rem',
        34: '8.5rem', 38: '9.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem',  letterSpacing: '0.12em' }],
        '3xs': ['0.55rem',  { lineHeight: '1rem',  letterSpacing: '0.15em' }],
        display:      ['clamp(3rem,   8vw,  7.5rem)', { lineHeight: '1.03', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(2.1rem, 5vw,  4.25rem)', { lineHeight: '1.10', letterSpacing: '-0.01em'  }],
        'display-xs': ['clamp(1.6rem, 3.5vw, 3rem)',   { lineHeight: '1.14', letterSpacing: '-0.01em'  }],
      },
      letterSpacing: {
        widest: '0.22em',
        ultra:  '0.32em',
        mega:   '0.45em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.23, 1, 0.32, 1)',
        soft:   'cubic-bezier(0.4, 0, 0.2, 1)',
        snap:   'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms', 600: '600ms', 800: '800ms',
        1000: '1000ms', 1200: '1200ms', 1500: '1500ms',
      },
      boxShadow: {
        'warm-xs': '0 1px 12px rgba(0,0,0,0.06)',
        'warm-sm': '0 2px 20px rgba(0,0,0,0.09)',
        'warm':    '0 4px 40px rgba(0,0,0,0.13)',
        'warm-lg': '0 8px 60px rgba(0,0,0,0.18)',
        'warm-xl': '0 16px 80px rgba(0,0,0,0.24)',
        'gold-sm': '0 2px 20px rgba(245,166,35,0.20)',
        'gold':    '0 4px 40px rgba(245,166,35,0.30)',
        'gold-lg': '0 8px 60px rgba(245,166,35,0.40)',
        'dark':    '0 20px 80px rgba(0,0,0,0.50)',
        'dark-xl': '0 40px 120px rgba(0,0,0,0.65)',
      },
      maxWidth: { '8xl': '88rem', '9xl': '100rem' },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float-slow':   'floatSlow 8s ease-in-out infinite',
        'pulse-gold':   'pulseGold 3s ease-in-out infinite',
        'scroll-left':  'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
        'fade-in':      'fadeIn 0.7s ease forwards',
        'draw-line':    'drawLine 1.2s ease forwards',
      },
      keyframes: {
        floatSlow:   { '0%,100%': { transform: 'translateY(0)' },       '50%': { transform: 'translateY(-10px)' } },
        pulseGold:   { '0%,100%': { opacity: 0.4 },                     '50%': { opacity: 0.9 } },
        scrollLeft:  { '0%': { transform: 'translateX(0)' },            '100%': { transform: 'translateX(-50%)' } },
        scrollRight: { '0%': { transform: 'translateX(-50%)' },         '100%': { transform: 'translateX(0)' } },
        fadeIn:      { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        drawLine:    { '0%': { transform: 'scaleX(0)' },                '100%': { transform: 'scaleX(1)' } },
      },
    },
  },
  plugins: [],
}
