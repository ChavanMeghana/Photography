import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/weddings'

function Slide({ slide, isActive }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1.6, ease: 'easeInOut' }}
    >
      {/* Gradient fallback always visible */}
      <div className="absolute inset-0" style={{ background: slide.gradient }} />

      {/* Real photo loads on top */}
      <motion.img
        src={slide.image}
        alt={slide.couple}
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
        animate={isActive ? { scale: [1, 1.06] } : { scale: 1 }}
        transition={{ duration: 9, ease: 'easeOut' }}
      />

      {/* Grain texture */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 overlay-cinematic" />
      {/* Letterbox vignette */}
      <div className="absolute inset-0 overlay-vignette" />
      {/* Bottom darkening */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5"
        style={{ background: 'linear-gradient(to top, rgba(14,12,9,0.7) 0%, transparent 100%)' }} />
      {/* Top darkening */}
      <div className="absolute top-0 left-0 right-0 h-1/4"
        style={{ background: 'linear-gradient(to bottom, rgba(14,12,9,0.3) 0%, transparent 100%)' }} />
    </motion.div>
  )
}

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [textKey, setTextKey] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const goTo = useCallback((next) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(next)
      setTextKey(k => k + 1)
      setTimeout(() => setTransitioning(false), 600)
    }, 300)
  }, [transitioning])

  useEffect(() => {
    const t = setInterval(() => {
      goTo((current + 1) % heroSlides.length)
    }, 7500)
    return () => clearInterval(t)
  }, [current, goTo])

  const slide = heroSlides[current]

  const textVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
    exit:   { opacity: 0, y: -18 },
  }

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center">

      {/* All slides stacked */}
      <motion.div className="absolute inset-0" style={{ y: yParallax }}>
        {heroSlides.map((s, i) => (
          <Slide key={s.id} slide={s} isActive={i === current} />
        ))}
      </motion.div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full">

        {/* Location + couple */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${textKey}`}
            variants={textVariants}
            initial="hidden" animate="visible" exit="exit"
            transition={{ duration: 0.7, ease: [0.23,1,0.32,1] }}
            className="mb-6 flex flex-col items-center gap-1.5"
          >
            <span className="font-sans text-2xs tracking-mega uppercase text-ivory-300/65">{slide.location}</span>
            <span className="font-serif italic text-base text-ivory-200/50 font-light">{slide.couple}</span>
          </motion.div>
        </AnimatePresence>

        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`h1-${textKey}`}
            initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.23,1,0.32,1] }}
            className="heading-display text-display text-ivory-100 max-w-5xl text-balance"
          >
            {slide.headline}
          </motion.h1>
        </AnimatePresence>

        {/* Gold line */}
        <motion.div
          className="overflow-hidden my-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            className="gold-rule block w-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.23,1,0.32,1] }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Sub */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${textKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs text-ivory-200/60 tracking-ultra uppercase mb-10"
          >
            {slide.sub}
          </motion.p>
        </AnimatePresence>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link to="/portfolio" className="btn-gold">
            View Portfolio
          </Link>
          <Link to="/contact" className="btn-ghost-ivory">
            Begin Your Story
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-600 ease-luxury ${
              i === current ? 'w-8 h-0.5 bg-gold-400 rounded-none' : 'w-1.5 h-1.5 bg-ivory-300/30 hover:bg-ivory-300/60'
            }`}
          />
        ))}
      </div>

      {/* Vertical counter — right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
        <span className="font-serif italic text-2xl text-ivory-300/40 leading-none">
          {String(current + 1).padStart(2,'0')}
        </span>
        <div className="w-px h-14 bg-ivory-300/15 relative overflow-hidden">
          <motion.div
            key={current}
            className="absolute top-0 left-0 right-0 bg-gold-400"
            initial={{ height: '0%' }}
            animate={{ height: '100%' }}
            transition={{ duration: 7.5, ease: 'linear' }}
          />
        </div>
        <span className="font-serif italic text-2xl text-ivory-300/20 leading-none">
          {String(heroSlides.length).padStart(2,'0')}
        </span>
      </div>

      {/* Left side scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-8 lg:left-12 z-20 hidden sm:flex flex-col items-center gap-3"
      >
        <motion.div
          className="writing-vertical label-caps-sm text-ivory-300/35"
          animate={{ opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
        <motion.div
          className="w-px bg-ivory-300/20 origin-top"
          animate={{ scaleY: [0, 1, 0], height: 40 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ height: 40 }}
        />
      </motion.div>

      {/* Awards badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="absolute top-24 left-8 lg:left-16 z-20 hidden xl:block"
      >
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-3xs text-gold-400/60 tracking-mega uppercase">Vogue Weddings</span>
          <span className="font-sans text-3xs text-ivory-300/30 tracking-wider uppercase">As seen in</span>
        </div>
      </motion.div>
    </section>
  )
}
