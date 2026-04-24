import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import HeroSlideshow from '../components/HeroSlideshow'
import WeddingStoryCard from '../components/WeddingStoryCard'
import WeddingModal from '../components/WeddingModal'
import TestimonialsSection from '../components/TestimonialsSection'
import GalleryStrip from '../components/GalleryStrip'
import ParallaxBand from '../components/ParallaxBand'
import ScrollReveal from '../components/ScrollReveal'
import { GoldDivider, SectionLabel } from '../components/GoldDivider'
import { weddings } from '../data/weddings'

const stats = [
  { value: '248', sup: '+', label: 'Love Stories' },
  { value: '18', sup: '', label: 'Countries' },
  { value: '9', sup: '', label: 'Years' },
  { value: '★★★★★', sup: '', label: 'Rated' },
]

const featured = weddings.filter(w => w.featured).slice(0, 3)

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <PageTransition>

      {/* ── Hero Slideshow ───────────────────────────── */}
      <HeroSlideshow />

      {/* ── Intro Statement ─────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal preset="fadeIn">
              <SectionLabel centered>The Art of Love</SectionLabel>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.15} className="mt-10">
              <h2 className="heading-serif text-display-sm text-warm-800 text-balance">
                Every wedding is a singular story.
                <br /><em>I am here to tell yours.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.3} className="mt-8">
              <p className="font-sans text-sm text-warm-500 leading-[1.9] max-w-xl mx-auto">
                Based in Florence and available worldwide, I photograph weddings the way you will remember them —
                with intimacy, grace, and an unwavering eye for the moments that define a lifetime.
                I believe in beauty that is real, light that is honest, and love that is worth preserving forever.
              </p>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.45} className="mt-10">
              <Link to="/about" className="btn-ghost-dark">
                Meet Elena
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Split feature — full-bleed photo left ───── */}
      <section className="overflow-hidden">
        <div className="lg:grid lg:grid-cols-2">
          {/* Image side */}
          <ScrollReveal preset="fadeLeft" className="relative h-[65vw] lg:h-full min-h-[460px]">
            <div className="absolute inset-0" style={{
              background: `radial-gradient(ellipse at 45% 55%, rgba(240,195,100,0.6) 0%, transparent 55%),
                linear-gradient(158deg,#2E1A08,#8B5020,#D08040)`
            }} />
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&h=1100&q=85"
              alt="Couple portrait"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="grain absolute inset-0 pointer-events-none" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 70%, rgba(253,250,246,0.15) 100%)' }} />
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal preset="fadeRight" className="bg-ivory-200 flex flex-col justify-center px-10 sm:px-16 lg:px-20 py-20 lg:py-0">
            <SectionLabel centered={false} className="mb-8">Philosophy</SectionLabel>
            <h2 className="heading-serif text-display-xs text-warm-800 leading-[1.12] mb-7">
              I don't just photograph weddings.
              <br />
              <em className="text-warm-600">I preserve how they felt.</em>
            </h2>
            <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-5">
              The trembling hands before the vows. The first glance across a crowded room.
              The quiet moments between all the planned ones — the ones you only notice when
              you look at your photographs years later and feel your breath catch.
            </p>
            <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-8">
              That is what I am here to capture. Not just images, but the irreplaceable feeling of
              being deeply in love on the most beautiful day of your life.
            </p>
            <Link to="/about" className="btn-outline-warm self-start">
              My Approach
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────── */}
      <section className="py-14 bg-obsidian-900 border-y border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} preset="fadeUp" delay={i * 0.08} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-light text-ivory-100 mb-1.5">
                  {s.value}<sup className="text-gold-400 text-xl">{s.sup}</sup>
                </div>
                <div className="label-caps text-ivory-400/40">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Stories ─────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site">
          <ScrollReveal className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel centered={false}>Portfolio</SectionLabel>
              <h2 className="heading-serif text-display-sm text-warm-800 mt-5">
                Recent <em>Stories</em>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-ghost-dark hidden sm:flex">
              All Stories
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {featured[0] && (
              <ScrollReveal preset="fadeRight" className="md:col-span-7">
                <WeddingStoryCard wedding={featured[0]} onClick={setSelected} size="full" />
              </ScrollReveal>
            )}
            <div className="md:col-span-5 grid grid-cols-1 gap-3">
              {featured.slice(1).map((w, i) => (
                <ScrollReveal key={w.id} preset="fadeLeft" delay={i * 0.1}>
                  <WeddingStoryCard wedding={w} onClick={setSelected} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/portfolio" className="btn-outline-warm">View All Stories</Link>
          </div>
        </div>
      </section>

      {/* ── Parallax divider ─────────────────────────── */}
      <ParallaxBand
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&h=900&q=80"
        gradient="radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 70%), linear-gradient(160deg,#0e0c09,#2c2018,#4a3020)"
        height="55vh"
        overlay="overlay-full"
      >
        <div className="text-center max-w-2xl px-6">
          <ScrollReveal preset="scaleIn">
            <span className="font-serif italic text-6xl text-gold-400/20 leading-none select-none">"</span>
            <blockquote className="font-serif text-2xl sm:text-3xl italic font-light text-ivory-200 leading-[1.65] -mt-4 text-balance">
              The wedding day passes in the blink of an eye.
              The photographs last forever.
            </blockquote>
            <div className="w-8 h-px bg-gold-400/50 mx-auto my-5" />
            <p className="font-sans text-xs text-ivory-300/50 tracking-ultra uppercase">Elena Marchetti</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* ── Testimonials ─────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Gallery Strip ────────────────────────────── */}
      <GalleryStrip />

      {/* ── CTA Section ──────────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center max-w-5xl mx-auto">
            <ScrollReveal preset="fadeRight">
              <SectionLabel centered={false} className="mb-7">Limited Availability</SectionLabel>
              <h2 className="heading-serif text-display-sm text-warm-800 leading-[1.1] mb-6">
                Begin Your <em>Love Story</em>
              </h2>
              <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-8">
                I photograph a select number of weddings each year — ensuring every couple receives
                my full artistry and personal attention. I would love to hear about yours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">Inquire About Your Date</Link>
                <Link to="/portfolio" className="btn-outline-warm">View Portfolio</Link>
              </div>
            </ScrollReveal>

            {/* Mini image grid */}
            <ScrollReveal preset="fadeLeft" className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: 'photo-1583939003579-730e3918a45a', h: 'h-52' },
                  { src: 'photo-1465495976277-4387d4b0e4a6', h: 'h-52' },
                  { src: 'photo-1519225421980-715cb0215aed', h: 'h-36' },
                  { src: 'photo-1537633552985-df8429e8048b', h: 'h-36' },
                ].map(({ src, h }, i) => (
                  <motion.div
                    key={i}
                    className={`relative ${h} overflow-hidden`}
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-warm-300" />
                    <img
                      src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=400&h=400&q=75`}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="bg-obsidian-900 py-16 border-t border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <p className="font-serif italic text-2xl font-light text-ivory-200 mb-1">Elena Marchetti Photography</p>
            <p className="font-sans text-xs text-ivory-400/40 tracking-wider">Based in Florence · Available Worldwide</p>
          </div>
          <div className="flex justify-center gap-10 mb-10">
            {[['Portfolio', '/portfolio'], ['About', '/about'], ['Inquire', '/contact']].map(([l, to]) => (
              <Link key={l} to={to} className="font-sans text-2xs tracking-ultra uppercase text-ivory-400/35 hover:text-gold-400 transition-colors duration-400">
                {l}
              </Link>
            ))}
          </div>
          <div className="w-20 h-px bg-obsidian-700 mx-auto mb-8" />
          <p className="font-sans text-xs text-ivory-400/25 text-center">
            © {new Date().getFullYear()} Elena Marchetti Photography. All rights reserved.
          </p>
        </div>
      </footer>

      <WeddingModal wedding={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
