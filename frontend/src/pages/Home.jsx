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
import { SectionLabel } from '../components/GoldDivider'
import { weddings } from '../data/weddings'

const stats = [
  { value: '380', sup: '+', label: 'Projects' },
  { value: '28',  sup: '',  label: 'Countries' },
  { value: '12',  sup: '',  label: 'Years' },
  { value: '5★',  sup: '',  label: 'Rated' },
]

const services = [
  { icon: '◎', title: 'Portrait',   desc: 'Individuals, families & professionals.' },
  { icon: '◈', title: 'Fashion',    desc: 'Editorial & commercial fashion.' },
  { icon: '◉', title: 'Landscape',  desc: 'Fine art & expedition photography.' },
  { icon: '◇', title: 'Wedding',    desc: 'Cinematic wedding storytelling.' },
  { icon: '◆', title: 'Commercial', desc: 'Campaigns for luxury brands.' },
  { icon: '◐', title: 'Events',     desc: 'Concerts, galas & cultural events.' },
]

const featured = weddings.filter(w => w.featured).slice(0, 3)

/* Images for the CTA mosaic background */
const ctaImages = [
  'photo-1534528741775-53994a69daeb',
  'photo-1519741497674-611481863552',
  'photo-1476514525535-07fb3b4ae5f1',
]

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
            <ScrollReveal preset="fadeUp" delay={0.15} className="mt-8 sm:mt-10">
              <h2 className="heading-serif text-display-sm text-warm-800 text-balance">
                We photograph everything —
                <br className="hidden sm:block" />
                <em> with the same obsessive care.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.3} className="mt-6 sm:mt-8">
              <p className="font-sans text-sm text-warm-500 leading-[1.9] max-w-xl mx-auto">
                Bond Studio is a photography collective based in Florence, available worldwide.
                From intimate portraits to epic landscapes, editorial fashion to cinematic weddings —
                we bring the same uncompromising eye to every frame.
              </p>
            </ScrollReveal>
            <ScrollReveal preset="fadeUp" delay={0.45} className="mt-8 sm:mt-10">
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
      <section className="bg-ivory-200 border-y border-ivory-400">
        <div className="container-site">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-ivory-400">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} preset="fadeUp" delay={i * 0.05}
                className="group flex flex-col items-center justify-center text-center p-5 sm:p-6 lg:p-8 min-h-[100px] sm:min-h-[120px] hover:bg-obsidian-900 transition-colors duration-500 cursor-default">
                <div className="font-serif text-xl sm:text-2xl text-gold-400/50 mb-2 group-hover:text-gold-400 transition-colors duration-500">
                  {s.icon}
                </div>
                <p className="label-caps text-warm-700 group-hover:text-ivory-200 transition-colors duration-500 text-3xs sm:text-2xs leading-tight">
                  {s.title}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Split feature ───────────────────────────── */}
      <section className="overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {/* Image */}
          <ScrollReveal preset="fadeLeft" className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[520px]">
            <div className="absolute inset-0" style={{
              background: `radial-gradient(ellipse at 45% 55%, rgba(245,166,35,0.40) 0%, transparent 55%),
                linear-gradient(158deg,#0C0804,#3A2010,#8A5020)`
            }} />
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&h=700&q=85"
              alt="Photography session"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="grain absolute inset-0 pointer-events-none" />
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal preset="fadeRight" className="bg-ivory-200 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-14 lg:py-0">
            <SectionLabel centered={false} className="mb-6 sm:mb-8">Our Philosophy</SectionLabel>
            <h2 className="heading-serif text-display-xs text-warm-800 leading-[1.12] mb-5 sm:mb-7">
              We don't just take photographs.
              <br />
              <em className="text-warm-600">We make images that last.</em>
            </h2>
            <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-4 sm:mb-5">
              Every discipline of photography demands something different — different patience,
              different instincts, different light. We have spent over a decade mastering all of them.
            </p>
            <p className="font-sans text-sm text-warm-500 leading-[1.9] mb-7 sm:mb-8">
              Our studio is built on a single conviction: extraordinary photographs come from
              genuine connection — to the subject, the environment, and the story being told.
            </p>
            <Link to="/about" className="btn-outline-warm self-start">
              Our Approach
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────── */}
      <section className="py-12 sm:py-14 bg-obsidian-900 border-y border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} preset="fadeUp" delay={i * 0.08} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-light text-ivory-100 mb-1">
                  {s.value}<sup className="text-gold-400 text-lg sm:text-xl">{s.sup}</sup>
                </div>
                <div className="label-caps text-ivory-400/40">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Projects ──────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site">
          <ScrollReveal className="flex items-end justify-between mb-10 sm:mb-12">
            <div>
              <SectionLabel centered={false}>Selected Work</SectionLabel>
              <h2 className="heading-serif text-display-sm text-warm-800 mt-4 sm:mt-5">
                Recent <em>Projects</em>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-ghost-dark hidden sm:flex shrink-0">
              All Projects
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Mobile: single column | Desktop: asymmetric 7+5 grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4">
            {/* Large feature card */}
            {featured[0] && (
              <ScrollReveal preset="fadeRight" className="lg:col-span-7">
                <div className="h-[300px] sm:h-[420px] lg:h-[500px]">
                  <WeddingStoryCard wedding={featured[0]} onClick={setSelected} />
                </div>
              </ScrollReveal>
            )}
            {/* Two stacked cards */}
            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
              {featured.slice(1, 3).map((w, i) => (
                <ScrollReveal key={w.id} preset="fadeLeft" delay={i * 0.12} className="flex-1">
                  <div className="h-[220px] sm:h-[260px] lg:h-[242px]">
                    <WeddingStoryCard wedding={w} onClick={setSelected} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-7 sm:mt-8 flex sm:hidden">
            <Link to="/portfolio" className="btn-outline-warm w-full justify-center">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Parallax quote ───────────────────────────── */}
      <ParallaxBand
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&h=900&q=80"
        gradient="radial-gradient(ellipse at 50% 55%, rgba(60,120,200,0.28) 0%, transparent 65%), linear-gradient(160deg,#050810,#0C1828,#1C3050)"
        height="50vh"
        overlay="overlay-full"
      >
        <div className="text-center max-w-2xl px-6">
          <ScrollReveal preset="scaleIn">
            <span className="font-serif italic text-5xl sm:text-6xl text-gold-400/20 leading-none select-none">"</span>
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl italic font-light text-ivory-200 leading-[1.65] -mt-2 sm:-mt-4 text-balance">
              The best photograph is the one that comes closest to truth.
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

      {/* ═══════════════════════════════════════════════
          START YOUR PROJECT  — split image + text
      ═══════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-obsidian-900">
        <div className="flex flex-col lg:flex-row">

          {/* ── Left: Photo panel ───────────────────── */}
          <div className="lg:w-[45%] flex flex-col h-[360px] lg:h-auto lg:min-h-[700px]">

            {/* Main image */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&h=1100&q=85"
                alt="Wedding photography"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian-900/25" />
              <div className="grain absolute inset-0 pointer-events-none" />
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <span className="label-caps text-ivory-100/60 bg-obsidian-900/50 px-3 py-1.5 backdrop-blur-sm">
                  Tuscany, Italy · 2024
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex h-[90px] sm:h-[110px] lg:h-[130px]">
              {ctaImages.map((src, i) => (
                <div key={i} className="relative flex-1 overflow-hidden border-l first:border-l-0 border-obsidian-700">
                  <img
                    src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=300&h=300&q=75`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-obsidian-900/20 hover:bg-obsidian-900/0 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: CTA content ──────────────────── */}
          <div className="lg:w-[55%] border-t lg:border-t-0 lg:border-l border-obsidian-700
                          flex flex-col justify-center
                          px-8 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-20">

            <ScrollReveal preset="fadeIn">
              <span className="label-caps text-gold-400/70">Let's Work Together</span>
              <div className="w-8 h-px bg-gold-400/30 mt-3 mb-8 sm:mb-10" />
            </ScrollReveal>

            <ScrollReveal preset="fadeUp" delay={0.1}>
              <h2 className="heading-serif text-display-sm text-ivory-100 leading-[1.05] mb-5 sm:mb-6">
                Start Your<br />
                <em className="text-gold-400">Project</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal preset="fadeUp" delay={0.2}>
              <p className="font-sans text-sm text-ivory-300/55 leading-[1.9] mb-8 sm:mb-10 max-w-md">
                Whether you have a clear vision or just a feeling you want to capture,
                we would love to hear about it. Every great photograph starts with a conversation.
              </p>
            </ScrollReveal>

            <ScrollReveal preset="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                <Link to="/contact" className="btn-gold justify-center sm:justify-start">
                  Get in Touch
                </Link>
                <Link to="/portfolio" className="btn-outline-ivory justify-center sm:justify-start">
                  View Portfolio
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal preset="fadeIn" delay={0.4}>
              <div className="flex flex-wrap gap-2 mb-12 sm:mb-16">
                {['Portrait', 'Fashion', 'Landscape', 'Wedding', 'Commercial', 'Events'].map(type => (
                  <span key={type}
                    className="font-sans text-2xs tracking-ultra uppercase text-ivory-400/40
                               border border-obsidian-600 hover:border-gold-400/40 hover:text-ivory-300/60
                               px-3 py-1.5 sm:px-4 sm:py-2 transition-colors duration-400 cursor-default">
                    {type}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal preset="fadeUp" delay={0.25}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-obsidian-700/50">
                {[
                  { val: '380+', label: 'Projects' },
                  { val: '28',   label: 'Countries' },
                  { val: '12yr', label: 'Experience' },
                  { val: '5★',   label: 'Rated' },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-obsidian-900 text-center py-5 sm:py-6 px-4">
                    <p className="font-serif text-2xl sm:text-3xl font-light text-ivory-200">{val}</p>
                    <p className="label-caps-sm text-ivory-400/40 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="bg-obsidian-900 py-14 sm:py-16 border-t border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-8 sm:mb-10">
            <p className="font-serif italic text-2xl font-light text-ivory-200 mb-1">Bond Studio</p>
            <p className="font-sans text-xs text-ivory-400/40 tracking-wider">Based in Florence · Available Worldwide</p>
          </div>
          <div className="flex justify-center gap-6 sm:gap-10 mb-8 sm:mb-10">
            {[['Portfolio', '/portfolio'], ['About', '/about'], ['Contact', '/contact']].map(([l, to]) => (
              <Link key={l} to={to}
                className="font-sans text-2xs tracking-ultra uppercase text-ivory-400/35 hover:text-gold-400 transition-colors duration-400 py-2">
                {l}
              </Link>
            ))}
          </div>
          <div className="w-20 h-px bg-obsidian-700 mx-auto mb-7 sm:mb-8" />
          <p className="font-sans text-xs text-ivory-400/25 text-center">
            © {new Date().getFullYear()} Bond Studio. All rights reserved.
          </p>
        </div>
      </footer>

      <WeddingModal wedding={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
