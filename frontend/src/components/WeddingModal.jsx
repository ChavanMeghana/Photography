import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const GALLERY_CROPS = [
  { w: 800, h: 1000 }, { w: 800, h: 600 }, { w: 800, h: 1000 }, { w: 800, h: 600 },
]

export default function WeddingModal({ wedding, onClose }) {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    if (!wedding) return
    setHeroLoaded(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [wedding, onClose])

  return (
    <AnimatePresence>
      {wedding && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-obsidian-950/85 backdrop-blur-lg" />

          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-ivory-100 w-full max-w-4xl max-h-[94vh] overflow-y-auto shadow-dark-xl sm:rounded-none"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-30 w-10 h-10 flex items-center justify-center bg-obsidian-900/30 hover:bg-obsidian-900/60 text-ivory-200 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero */}
            <div className="h-72 sm:h-96 relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0" style={{ background: wedding.coverGradient }} />
              <motion.img
                src={wedding.coverImage}
                alt={wedding.couple}
                onLoad={() => setHeroLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
                animate={{ scale: [1, 1.03] }}
                transition={{ duration: 12, ease: 'easeOut' }}
              />
              <div className="grain absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 overlay-cinematic" />
              <div className="absolute bottom-0 left-0 right-0"
                style={{ background: 'linear-gradient(to top, rgba(14,12,9,0.8) 0%, transparent 80%)' }} />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="label-caps-sm text-gold-400/60 block mb-2">{wedding.region} · {wedding.date}</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100 leading-tight">
                  {wedding.couple}
                </h2>
                <p className="font-sans text-xs text-ivory-200/55 tracking-wide mt-1.5">{wedding.venue}</p>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 sm:px-12 lg:px-16 py-12">

              {/* Story */}
              <div className="max-w-xl mx-auto text-center mb-12">
                <p className="label-caps text-warm-400 mb-4">The Story</p>
                <div className="w-8 h-px bg-gold-400 mx-auto mb-7" />
                <p className="italic-serif text-lg sm:text-xl text-warm-600 leading-[1.75]">
                  {wedding.brief}
                </p>
                <p className="font-sans text-sm text-warm-400 leading-[1.9] mt-5">
                  {wedding.story}
                </p>
              </div>

              {/* Gallery grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-12">
                {GALLERY_CROPS.map((crop, i) => (
                  <motion.div
                    key={i}
                    className={`overflow-hidden ${i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0" style={{ background: wedding.coverGradient, filter: `hue-rotate(${i * 20}deg) brightness(${0.9 + i * 0.08})` }} />
                      <img
                        src={`${wedding.coverImage.split('?')[0]}?auto=format&fit=crop&w=${crop.w}&h=${crop.h}&q=75&crop=${['entropy','faces','edges','center'][i]}`}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              {wedding.highlights && (
                <div className="text-center mb-12">
                  <p className="label-caps text-warm-400 mb-5">Highlights</p>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {wedding.highlights.map(h => (
                      <span key={h} className="font-sans text-xs text-warm-600 border border-ivory-500 px-4 py-2 tracking-wide hover:border-gold-400 hover:text-gold-600 transition-colors duration-300">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {wedding.testimonial && (
                <div className="bg-obsidian-900 p-8 sm:p-12 text-center mb-10">
                  <span className="font-serif italic text-4xl text-gold-400/25 leading-none font-light">"</span>
                  <blockquote className="font-serif text-lg sm:text-xl italic font-light text-ivory-200/80 leading-[1.7] max-w-lg mx-auto -mt-3">
                    {wedding.testimonial.quote}
                  </blockquote>
                  <div className="w-8 h-px bg-gold-400/40 mx-auto my-5" />
                  <p className="font-sans text-xs text-ivory-400/40 tracking-ultra uppercase">
                    — {wedding.testimonial.author}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="text-center">
                <Link to="/contact" onClick={onClose} className="btn-gold">
                  Begin Your Story
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
