import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/weddings'
import ScrollReveal from './ScrollReveal'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="relative overflow-hidden bg-obsidian-900 py-28 lg:py-36">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&h=1080&q=70"
          alt=""
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/80 via-obsidian-900/70 to-obsidian-900/90" />
      </div>

      {/* Decorative */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-gold-400/30" />

      <div className="relative z-10 container-site px-6 sm:px-10 lg:px-16">

        {/* Label */}
        <ScrollReveal preset="fadeIn" className="text-center mb-16">
          <span className="label-caps text-gold-400/60">Words from Our Couples</span>
          <div className="w-10 h-px bg-gold-400/30 mx-auto mt-3" />
        </ScrollReveal>

        {/* Large quote mark */}
        <div className="text-center mb-4 select-none">
          <span className="font-serif italic text-8xl sm:text-9xl text-gold-400/12 leading-none font-light">"</span>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto min-h-[160px] sm:min-h-[200px] flex items-center justify-center px-2">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(3px)' }}
              transition={{ duration: 0.75, ease: [0.23,1,0.32,1] }}
              className="font-serif text-lg sm:text-2xl lg:text-3xl italic font-light text-ivory-200 leading-[1.65] text-center text-balance"
            >
              {t.quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Attribution with photo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`attr-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center mt-10 gap-3"
          >
            {/* Couple photo thumbnail */}
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gold-400/30 ring-1 ring-gold-400/10 ring-offset-2 ring-offset-obsidian-900">
              <img
                src={t.image}
                alt={t.couple}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <div className="w-8 h-px bg-gold-400/40 mx-auto mb-3" />
              <p className="font-serif text-base text-ivory-300/80">{t.couple}</p>
              <p className="font-sans text-xs text-ivory-400/40 tracking-wider mt-1">{t.location} · {t.year}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots + navigation */}
        {/* Navigation — large touch targets for mobile */}
        <div className="flex flex-col items-center gap-5 mt-10 sm:mt-12">
          {/* Prev / Next — wide tap area */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActive(i => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex items-center justify-center w-11 h-11 border border-obsidian-600 text-ivory-400/40 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-500 ease-luxury ${
                    i === active
                      ? 'w-7 h-0.5 bg-gold-400'
                      : 'w-1.5 h-1.5 rounded-full bg-ivory-300/20 hover:bg-ivory-300/50'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive(i => (i + 1) % testimonials.length)}
              className="flex items-center justify-center w-11 h-11 border border-obsidian-600 text-ivory-400/40 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Press row */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-obsidian-700">
          <p className="label-caps-sm text-ivory-300/25 text-center mb-5 sm:mb-7">As Seen In</p>
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4">
            {['Vogue Italia', 'National Geographic', 'Harper\'s Bazaar', 'Condé Nast', 'The Times'].map(p => (
              <span key={p} className="font-serif italic text-sm sm:text-base text-ivory-300/25 cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
