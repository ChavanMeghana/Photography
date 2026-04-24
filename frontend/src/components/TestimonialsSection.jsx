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
        <div className="max-w-3xl mx-auto min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(3px)' }}
              transition={{ duration: 0.75, ease: [0.23,1,0.32,1] }}
              className="font-serif text-xl sm:text-2xl lg:text-3xl italic font-light text-ivory-200 leading-[1.65] text-center text-balance"
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
        <div className="flex flex-col items-center gap-5 mt-12">
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-500 ease-luxury ${
                  i === active
                    ? 'w-8 h-0.5 bg-gold-400'
                    : 'w-1.5 h-1.5 rounded-full bg-ivory-300/20 hover:bg-ivory-300/50'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => setActive(i => (i - 1 + testimonials.length) % testimonials.length)}
              className="label-caps-sm text-ivory-400/30 hover:text-gold-400 transition-colors duration-300"
            >
              ← Prev
            </button>
            <button
              onClick={() => setActive(i => (i + 1) % testimonials.length)}
              className="label-caps-sm text-ivory-400/30 hover:text-gold-400 transition-colors duration-300"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Press row */}
        <div className="mt-20 pt-10 border-t border-obsidian-700">
          <p className="label-caps-sm text-ivory-300/25 text-center mb-7">As Seen In</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {['Vogue Weddings', 'Harper\'s Bazaar', 'Brides Magazine', 'Martha Stewart', 'The Knot'].map(p => (
              <span key={p} className="font-serif italic text-base text-ivory-300/25 hover:text-ivory-300/50 transition-colors duration-300 cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
