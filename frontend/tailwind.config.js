/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Dark obsidian backgrounds
        obsidian: {
          950: '#080704',
          900: '#0E0C09',
          800: '#161310',
          700: '#201C17',
          600: '#2C2620',
          500: '#3C342C',
          400: '#4E4438',
        },
        // Warm ivory/cream light
        ivory: {
          50:  '#FFFEFD',
          100: '#FDFAF6',
          200: '#FAF5EC',
          300: '#F5EFE6',
          400: '#EDE3D4',
          500: '#E0D4C0',
          600: '#D0C0A8',
        },
        // Antique gold
        gold: {
          100: '#F5E8C8',
          200: '#EDDA9E',
          300: '#DFC072',
          400: '#C9A84C',
          500: '#B8973A',
          600: '#A08030',
          700: '#886820',
          800: '#6A5018',
        },
        // Blush rose
        blush: {
          100: '#F8EEE9',
          200: '#F0DDD4',
          300: '#E4C8B8',
          400: '#D4AE9A',
          500: '#C0907A',
          600: '#A87060',
        },
        // Champagne
        champagne: {
          50:  '#FFFDF8',
          100: '#FBF3E8',
          200: '#F5E6CC',
          300: '#EDD5AA',
          400: '#E0C080',
        },
        // Warm brown text tones
        warm: {
          50:  '#FDFCFA',
          100: '#F8F5F0',
          200: '#EDE8E0',
          300: '#D8D0C4',
          400: '#BEB4A8',
          500: '#A09488',
          600: '#7A6E62',
          700: '#5A4E42',
          800: '#3A2E24',
          900: '#2C2018',
          950: '#1A1208',
        },
        // Sage green accent
        sage: {
          300: '#C8D4C0',
          400: '#A8BCA0',
          500: '#8AA080',
        },
      },
      spacing: {
        18: '4.5rem', 22: '5.5rem', 26: '6.5rem', 30: '7.5rem',
        34: '8.5rem', 38: '9.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
        '3xs': ['0.55rem',  { lineHeight: '1rem', letterSpacing: '0.15em' }],
        display:    ['clamp(3rem,   8vw,  7.5rem)', { lineHeight: '1.03', letterSpacing: '-0.015em' }],
        'display-sm':['clamp(2.1rem, 5vw,  4.25rem)', { lineHeight: '1.10', letterSpacing: '-0.01em' }],
        'display-xs':['clamp(1.6rem, 3.5vw, 3rem)',  { lineHeight: '1.14', letterSpacing: '-0.01em' }],
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
        'warm-xs': '0 1px 12px rgba(44,32,24,0.06)',
        'warm-sm': '0 2px 20px rgba(44,32,24,0.08)',
        'warm':    '0 4px 40px rgba(44,32,24,0.11)',
        'warm-lg': '0 8px 60px rgba(44,32,24,0.15)',
        'warm-xl': '0 16px 80px rgba(44,32,24,0.20)',
        'gold-sm': '0 2px 20px rgba(201,168,76,0.18)',
        'gold':    '0 4px 40px rgba(201,168,76,0.28)',
        'gold-lg': '0 8px 60px rgba(201,168,76,0.38)',
        'dark':    '0 20px 80px rgba(0,0,0,0.45)',
        'dark-xl': '0 40px 120px rgba(0,0,0,0.60)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '100rem',
      },
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
        floatSlow:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseGold:   { '0%,100%': { opacity: 0.4 }, '50%': { opacity: 0.9 } },
        scrollLeft:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        scrollRight: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        fadeIn:      { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        drawLine:    { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
      },
    },
  },
  plugins: [],
}
