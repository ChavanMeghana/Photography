import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import WeddingStoryCard from '../components/WeddingStoryCard'
import WeddingModal from '../components/WeddingModal'
import ScrollReveal from '../components/ScrollReveal'
import ParallaxBand from '../components/ParallaxBand'
import { SectionLabel } from '../components/GoldDivider'
import { weddings } from '../data/weddings'

const filters = ['All', 'Portrait', 'Fashion', 'Landscape', 'Wedding', 'Commercial', 'Street']

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? weddings
    : weddings.filter(w => w.type === filter)

  return (
    <PageTransition>
      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-end bg-obsidian-900">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.04] }}
          transition={{ duration: 16, ease: 'easeOut' }}
        >
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse at 50% 60%, rgba(240,195,100,0.45) 0%, transparent 55%),
              linear-gradient(158deg,#1a0e04,#4a2c10,#8a5820,#c09040)`
          }} />
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&h=900&q=80"
            alt="Wedding stories"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="grain absolute inset-0 pointer-events-none" />
        </motion.div>

        <div className="absolute inset-0 overlay-cinematic" />
        <div className="absolute inset-0 overlay-vignette" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{ background: 'linear-gradient(to top, rgba(14,12,9,0.7) 0%, transparent 100%)' }} />

        <div className="relative z-10 container-site px-6 sm:px-10 lg:px-16 pb-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <span className="label-caps text-gold-400/50 block mb-3">Selected Work</span>
            <h1 className="heading-display text-display text-ivory-100">Portfolio</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-ivory-100 border-b border-ivory-400">
        <div className="container-site max-w-2xl mx-auto text-center">
          <ScrollReveal preset="fadeUp">
            <p className="italic-serif text-xl sm:text-2xl text-warm-600 leading-[1.7]">
              Each project here is a complete story — a world that existed for one extraordinary moment,
              and now lives forever in these photographs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 sm:px-10 lg:px-16 bg-ivory-100 sticky top-[72px] z-30 border-b border-ivory-400 shadow-warm-xs">
        <div className="container-site">
          <ScrollReveal preset="fadeIn" className="flex flex-wrap items-center gap-2">
            <span className="label-caps-sm text-warm-400 mr-3 hidden sm:block">Filter</span>
            {filters.map(f => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilter(f)}
                className={`font-sans text-2xs tracking-ultra uppercase py-2 px-5 transition-all duration-400 ${
                  f === filter
                    ? 'bg-obsidian-900 text-ivory-100 shadow-warm-sm'
                    : 'border border-ivory-500 text-warm-500 hover:border-warm-400 hover:text-warm-800'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 px-6 sm:px-10 lg:px-16 bg-ivory-100">
        <div className="container-site">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((w, i) => (
                <motion.div
                  key={w.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23,1,0.32,1] }}
                  className="h-[380px]"
                >
                  <WeddingStoryCard wedding={w} onClick={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-28">
              <p className="italic-serif text-warm-400 text-xl">No projects found for this selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Parallax divider */}
      <ParallaxBand
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&h=700&q=75"
        gradient="radial-gradient(ellipse at 50% 55%, rgba(245,166,35,0.20) 0%, transparent 65%), linear-gradient(160deg,#080808,#141414,#1E1E1E)"
        height="45vh"
        overlay="overlay-full"
      >
        <div className="text-center max-w-xl px-6">
          <ScrollReveal preset="fadeUp">
            <p className="label-caps text-gold-400/50 mb-4">Now Accepting Projects</p>
            <h2 className="heading-serif text-2xl sm:text-3xl text-ivory-200 mb-5">2025 — 2026</h2>
            <Link to="/contact" className="btn-gold">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* Footer */}
      <footer className="bg-obsidian-900 py-12 border-t border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-serif italic text-xl font-light text-ivory-300/50 mb-1">Bond Studio</p>
          <p className="font-sans text-xs text-ivory-400/25">© {new Date().getFullYear()} Bond Studio. All rights reserved.</p>
        </div>
      </footer>

      <WeddingModal wedding={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
