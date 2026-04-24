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
  { value: '380', sup: '+', label: 'Projects Completed' },
  { value: '28', sup: '', label: 'Countries' },
  { value: '12', sup: '', label: 'Years' },
  { value: '★★★★★', sup: '', label: 'Rated' },
]

const services = [
  { icon: '◎', title: 'Portrait', desc: 'Fine art portraiture for individuals, families, and professionals.' },
  { icon: '◈', title: 'Fashion', desc: 'Editorial and commercial fashion photography for brands and publications.' },
  { icon: '◉', title: 'Landscape', desc: 'Expedition and fine art landscape photography across all continents.' },
  { icon: '◇', title: 'Wedding', desc: 'Cinematic, timeless wedding storytelling for the discerning couple.' },
  { icon: '◆', title: 'Commercial', desc: 'Campaign photography for luxury brands and global creative agencies.' },
  { icon: '◐', title: 'Event', desc: 'Documentary and editorial coverage of concerts, galas, and cultural events.' },
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
              <SectionLabel centered>Visual Storytelling</SectionLabel>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.15} className="mt-10">
              <h2 className="heading-serif text-display-sm text-warm-800 text-balance">
                We photograph everything —
                <br /><em>with the same obsessive care.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.3} className="mt-8">
              <p className="font-sans text-sm text-warm-500 leading-[1.9] max-w-xl mx-auto">
                Bond Studio is a photography collective based in Florence, available worldwide.
                From intimate portraits to epic landscapes, editorial fashion to cinematic weddings —
                we bring the same uncompromising eye and dedication to every frame we make.
              </p>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.45} className="mt-10">
              <Link to="/about" className="btn-ghost-dark">
                About the Studio
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Services Grid ───────────────────────────── */}
      <section className="section-pad-sm bg-ivory-200 border-y border-ivory-400">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ivory-400">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} preset="fadeUp" delay={i * 0.06}
                className="bg-ivory-100 p-6 lg:p-8 text-center group hover:bg-obsidian-900 transition-colors duration-500">
                <div className="font-serif text-2xl text-gold-400/50 mb-3 group-hover:text-gold-400 transition-colors duration-500">{s.icon}</div>
                <p className="label-caps text-warm-700 group-hover:text-ivory-200 transition-colors duration-500 mb-2">{s.title}</p>
                <p className="font-sans text-2xs text-warm-400 leading-relaxed group-hover:text-ivory-400/60 transition-colors duration-500 hidden lg:block">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Split feature ───────────────────────────── */}
      <section className="overflow-hidden">
        <div className="lg:grid lg:grid-cols-2">
          <ScrollReveal preset="fadeLeft" className="relative h-[65vw] lg:h-full min-h-[460px]">
            <div className="absolute inset-0" style={{
              background: `radial-gradient(ellipse at 45% 55%, rgba(245,166,35,0.45) 0%, transparent 55%),
                linear-gradient(158deg,#0C0804,#3A2010,#8A5020)`
            }} />
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&h=1100&q=85"
              alt="Photography session"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="grain absolute inset-0 pointer-events-none" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 70%, rgba(246,246,246,0.12) 100%)' }} />
          </ScrollReveal>

          <ScrollReveal preset="fadeRight" className="bg-ivory-200 flex flex-col justify-center px-10 sm:px-16 lg:px-20 py-20 lg:py-0">
            <SectionLabel centered={false} className="mb-8">Our Philosophy</SectionLabel>
            <h2 className="heading-serif text-display-xs text-warm-800 leading-[1.12] mb-7">
              We don't just take photographs.
              <br />
              <em className="text-warm-600">We make images that last.</em>
            </h2>
            <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-5">
              Every discipline of photography demands something different — different patience,
              different instincts, different light. We have spent over a decade mastering all of them,
              because the world is too varied and too beautiful to see it only one way.
            </p>
            <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-8">
              Our studio is built on a single conviction: that extraordinary photographs come from
              genuine connection — to the subject, the environment, and the story being told.
            </p>
            <Link to="/about" className="btn-outline-warm self-start">
              Our Approach
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

      {/* ── Recent Stories ───────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site">
          <ScrollReveal className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel centered={false}>Selected Work</SectionLabel>
              <h2 className="heading-serif text-display-sm text-warm-800 mt-5">
                Recent <em>Projects</em>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-ghost-dark hidden sm:flex">
              All Projects
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Asymmetric grid — explicit heights so cards always fill correctly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Large feature card */}
            {featured[0] && (
              <ScrollReveal preset="fadeRight" className="lg:col-span-7">
                <div className="h-[420px] sm:h-[500px]">
                  <WeddingStoryCard wedding={featured[0]} onClick={setSelected} />
                </div>
              </ScrollReveal>
            )}

            {/* Two stacked cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {featured.slice(1, 3).map((w, i) => (
                <ScrollReveal key={w.id} preset="fadeLeft" delay={i * 0.12} className="flex-1">
                  <div className="h-[200px] sm:h-[240px]">
                    <WeddingStoryCard wedding={w} onClick={setSelected} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile: view all */}
          <div className="mt-8 text-center sm:hidden">
            <Link to="/portfolio" className="btn-outline-warm">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── Parallax divider ─────────────────────────── */}
      <ParallaxBand
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&h=900&q=80"
        gradient="radial-gradient(ellipse at 50% 55%, rgba(60,120,200,0.30) 0%, transparent 65%), linear-gradient(160deg,#050810,#0C1828,#1C3050)"
        height="55vh"
        overlay="overlay-full"
      >
        <div className="text-center max-w-2xl px-6">
          <ScrollReveal preset="scaleIn">
            <span className="font-serif italic text-6xl text-gold-400/20 leading-none select-none">"</span>
            <blockquote className="font-serif text-2xl sm:text-3xl italic font-light text-ivory-200 leading-[1.65] -mt-4 text-balance">
              The best photograph is the one that comes closest to truth — whatever form that truth takes.
            </blockquote>
            <div className="w-8 h-px bg-gold-400/50 mx-auto my-5" />
            <p className="font-sans text-xs text-ivory-300/50 tracking-ultra uppercase">Bond Studio</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* ── Testimonials ─────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Gallery Strip ────────────────────────────── */}
      <GalleryStrip />

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center max-w-5xl mx-auto">
            <ScrollReveal preset="fadeRight">
              <SectionLabel centered={false} className="mb-7">Let's Work Together</SectionLabel>
              <h2 className="heading-serif text-display-sm text-warm-800 leading-[1.1] mb-6">
                Start Your <em>Project</em>
              </h2>
              <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-8">
                Whether you have a clear vision or just a feeling you want to capture,
                we would love to hear about it. Every great photograph starts with a conversation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">Get in Touch</Link>
                <Link to="/portfolio" className="btn-outline-warm">View Portfolio</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal preset="fadeLeft" className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: 'photo-1534528741775-53994a69daeb', h: 'h-52' },
                  { src: 'photo-1469334031218-e382a71b716b', h: 'h-52' },
                  { src: 'photo-1476514525535-07fb3b4ae5f1', h: 'h-36' },
                  { src: 'photo-1519741497674-611481863552', h: 'h-36' },
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
            <p className="font-serif italic text-2xl font-light text-ivory-200 mb-1">Bond Studio</p>
            <p className="font-sans text-xs text-ivory-400/40 tracking-wider">Based in Florence · Available Worldwide</p>
          </div>
          <div className="flex justify-center gap-10 mb-10">
            {[['Portfolio', '/portfolio'], ['About', '/about'], ['Contact', '/contact']].map(([l, to]) => (
              <Link key={l} to={to} className="font-sans text-2xs tracking-ultra uppercase text-ivory-400/35 hover:text-gold-400 transition-colors duration-400">
                {l}
              </Link>
            ))}
          </div>
          <div className="w-20 h-px bg-obsidian-700 mx-auto mb-8" />
          <p className="font-sans text-xs text-ivory-400/25 text-center">
            © {new Date().getFullYear()} Bond Studio. All rights reserved.
          </p>
        </div>
      </footer>

      <WeddingModal wedding={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
