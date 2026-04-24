import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import ParallaxBand from '../components/ParallaxBand'
import { SectionLabel, GoldDivider, GoldOrnament } from '../components/GoldDivider'

const values = [
  { num: '01', title: 'Presence over performance', body: 'I do not direct your day — I feel it with you. The most extraordinary images emerge when people forget the camera exists.' },
  { num: '02', title: 'Light as a language', body: 'Whether golden hour flooding through ancient stone or a single candle at a winter table, I have spent my career learning to speak in light.' },
  { num: '03', title: 'Stories that last centuries', body: 'Your grandchildren will look at these photographs. That thought lives in every frame I take — I hold that responsibility with deep care.' },
]

const awards = [
  'WPJA Wedding Photographer of the Year — 2023',
  'Junebug Weddings Best of the Best — 2022, 2023, 2024',
  'Fearless Photographers — Collective Member since 2018',
  'Featured: Vogue Weddings & Condé Nast Brides',
  'Featured: Martha Stewart Weddings, The Knot',
]

const process = [
  { step: 'I',   title: 'First Conversation', body: 'A relaxed call to get to know each other and discuss your vision.' },
  { step: 'II',  title: 'Proposal & Booking', body: 'A personalised proposal and a simple contract secures your date.' },
  { step: 'III', title: 'Your Wedding Day',   body: 'I arrive early, stay present, and move quietly through your day.' },
  { step: 'IV',  title: 'Your Gallery',       body: 'Fully edited gallery delivered within eight weeks — timeless and print-ready.' },
]

export default function About() {
  return (
    <PageTransition>

      {/* ── Hero ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-obsidian-900 overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 lg:grid lg:grid-cols-2 pointer-events-none">
          <div className="hidden lg:block" />
          <div className="relative h-full">
            <div className="absolute inset-0" style={{
              background: `radial-gradient(ellipse at 45% 35%, rgba(220,190,150,0.6) 0%, transparent 55%),
                linear-gradient(160deg,#2a1c10,#5a3820,#c09060)`
            }} />
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&h=1200&q=85"
              alt="Elena Marchetti"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="grain absolute inset-0 pointer-events-none" />
            <div className="absolute inset-0 lg:hidden overlay-full" />
            {/* Desktop: fade left into dark */}
            <div className="hidden lg:block absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(14,12,9,1) 0%, rgba(14,12,9,0.3) 35%, transparent 60%)' }} />
          </div>
        </div>

        <div className="relative z-10 container-site px-6 sm:px-10 lg:px-16 py-36">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <SectionLabel centered={false} className="mb-8">
                <span className="text-gold-400/60">My Story</span>
              </SectionLabel>
              <h1 className="heading-display text-display text-ivory-100 mb-8">
                I photograph <em className="text-gold-400">love</em> the way it feels
              </h1>
              <p className="font-sans text-sm text-ivory-300/65 leading-[1.9] mb-5">
                I grew up in the countryside outside Florence, surrounded by light that changed by the hour.
                My grandmother kept albums of faded photographs, and I spent hours as a child tracing the faces,
                imagining the worlds they contained.
              </p>
              <p className="font-sans text-sm text-ivory-300/65 leading-[1.9] mb-8">
                For nine years, I have traveled the world to bear witness to love. Each wedding has taught me
                something new about patience, about light, and about the extraordinary courage it takes to
                promise yourself to another person.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">Begin Your Story</Link>
                <a href="#philosophy" className="btn-outline-ivory">My Philosophy</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy pillars ───────────────── */}
      <section id="philosophy" className="section-pad bg-ivory-100">
        <div className="container-site">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="heading-serif text-display-sm text-warm-800 mt-6">
              How I approach <em>your day</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.num} preset="fadeUp" delay={i * 0.12}>
                <div className="text-center group">
                  <div className="font-serif italic text-5xl text-gold-400/20 mb-4 font-light group-hover:text-gold-400/40 transition-colors duration-500">
                    {v.num}
                  </div>
                  <GoldDivider className="mb-6 opacity-60" />
                  <h3 className="font-serif text-xl font-light text-warm-800 mb-4 leading-snug">{v.title}</h3>
                  <p className="font-sans text-sm text-warm-500 leading-[1.85]">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed image row ──────────────── */}
      <section className="overflow-hidden">
        <div className="flex gap-0.5 h-64 sm:h-80">
          {[
            { src: 'photo-1519741497674-611481863552', p: '50% 40%' },
            { src: 'photo-1606800052052-a08af7148866', p: '50% 30%' },
            { src: 'photo-1465495976277-4387d4b0e4a6', p: '50% 60%' },
            { src: 'photo-1583939003579-730e3918a45a', p: '50% 20%' },
          ].map(({ src, p }, i) => (
            <ScrollReveal
              key={i}
              preset="scaleIn"
              delay={i * 0.08}
              className="flex-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-warm-400" />
              <motion.img
                src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=600&h=500&q=80`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-107"
                loading="lazy"
                style={{ objectPosition: p }}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Pull quote ───────────────────────── */}
      <ParallaxBand
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&h=800&q=75"
        gradient="radial-gradient(ellipse at 50% 50%, rgba(80,165,215,0.3) 0%, transparent 70%), linear-gradient(150deg,#122840,#1E4A78)"
        height="50vh"
        overlay="overlay-full"
      >
        <div className="text-center max-w-2xl px-6">
          <ScrollReveal preset="scaleIn">
            <span className="font-serif italic text-6xl text-gold-400/18 leading-none select-none">"</span>
            <blockquote className="font-serif text-2xl sm:text-3xl italic font-light text-ivory-200 leading-[1.6] -mt-4 text-balance">
              The wedding day passes in the blink of an eye.
              The photographs last forever.
              I treat that responsibility as the most sacred part of my work.
            </blockquote>
            <div className="w-8 h-px bg-gold-400/50 mx-auto my-5" />
            <p className="font-sans text-xs text-ivory-300/50 tracking-ultra uppercase">Elena Marchetti</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* ── Awards ───────────────────────────── */}
      <section className="section-pad bg-ivory-200">
        <div className="container-site max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="heading-serif text-3xl text-warm-700 mt-5">Awards & Press</h2>
          </ScrollReveal>
          <div className="divide-y divide-ivory-400">
            {awards.map((a, i) => (
              <ScrollReveal key={i} preset="fadeLeft" delay={i * 0.07}>
                <div className="flex items-center gap-6 py-5">
                  <span className="font-serif italic text-gold-400/40 text-sm flex-shrink-0">
                    {String(i + 1).padStart(2,'0')}
                  </span>
                  <span className="font-sans text-sm text-warm-600 leading-relaxed">{a}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────── */}
      <section className="section-pad bg-obsidian-900">
        <div className="container-site">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel><span className="text-gold-400/50">Working Together</span></SectionLabel>
            <h2 className="heading-serif text-display-sm text-ivory-100 mt-5">
              What to <em>expect</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((s, i) => (
              <ScrollReveal key={s.step} preset="fadeUp" delay={i * 0.1}>
                <div className="text-center group">
                  <div className="font-serif italic text-5xl text-gold-400/15 group-hover:text-gold-400/35 transition-colors duration-500 mb-4">{s.step}</div>
                  <div className="w-8 h-px bg-obsidian-600 group-hover:bg-gold-400/40 mx-auto mb-5 transition-colors duration-500" />
                  <h3 className="font-serif text-lg font-light text-ivory-200 mb-3">{s.title}</h3>
                  <p className="font-sans text-xs text-ivory-400/40 leading-[1.85]">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="section-pad bg-ivory-100">
        <div className="container-site max-w-lg mx-auto text-center">
          <ScrollReveal preset="fadeUp">
            <GoldOrnament className="mb-10" />
            <h2 className="heading-serif text-display-sm text-warm-800 leading-[1.1] mb-5">
              Let's create something <em>beautiful</em>
            </h2>
            <p className="font-sans text-sm text-warm-500 mb-8 leading-[1.9]">
              If what you've read feels right, I would love to talk. Tell me about your wedding
              and let's see if we are the perfect fit.
            </p>
            <Link to="/contact" className="btn-gold">Inquire Now</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian-900 py-12 border-t border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-serif italic text-xl font-light text-ivory-300/60 mb-1">Elena Marchetti Photography</p>
          <p className="font-sans text-xs text-ivory-400/25">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </PageTransition>
  )
}
