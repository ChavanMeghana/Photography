import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import ParallaxBand from '../components/ParallaxBand'
import { SectionLabel, GoldDivider } from '../components/GoldDivider'
import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'The Essential',
    hours: '8 hours',
    desc: 'One photographer, ceremony through first dance. Ideal for intimate celebrations.',
    items: ['400+ curated images', 'Online gallery', 'Print release'],
  },
  {
    name: 'The Full Story',
    hours: '12 hours',
    desc: 'Complete coverage from getting ready through the last dance.',
    items: ['600+ curated images', 'Online gallery & print release', 'Engagement session', 'Fine art album consultation'],
    hot: true,
  },
  {
    name: 'The Collection',
    hours: '2 days',
    desc: 'For multi-day celebrations, destination weddings, and those who want everything.',
    items: ['800+ curated images', 'Online gallery & print release', 'Engagement session', 'Signature fine art album', 'Second photographer'],
  },
]

export default function Contact() {
  return (
    <PageTransition>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden flex items-end bg-obsidian-900">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.03] }}
          transition={{ duration: 14, ease: 'easeOut' }}
        >
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse at 40% 55%, rgba(240,215,160,0.50) 0%, transparent 55%),
              linear-gradient(160deg,#1c1008,#4a2c10,#8a5820,#c09040)`
          }} />
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&h=900&q=80"
            alt="Bridal"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="grain absolute inset-0 pointer-events-none" />
        </motion.div>
        <div className="absolute inset-0 overlay-cinematic" />
        <div className="absolute inset-0 overlay-vignette" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{ background: 'linear-gradient(to top, rgba(253,250,246,0.15) 0%, transparent 100%)' }} />

        <div className="relative z-10 container-site px-6 sm:px-10 lg:px-16 pb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <span className="label-caps text-gold-400/50 block mb-3">Let's Talk</span>
            <h1 className="heading-display text-display text-ivory-100">Inquire</h1>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────── */}
      <section className="py-16 bg-ivory-100">
        <div className="container-site px-6 sm:px-10 lg:px-16 max-w-2xl mx-auto text-center">
          <ScrollReveal preset="fadeUp">
            <SectionLabel>Begin Your Story</SectionLabel>
            <h2 className="heading-serif text-display-xs text-warm-800 mt-6 mb-5">
              I take on a select number of weddings each year
            </h2>
            <p className="font-sans text-sm text-warm-500 leading-[1.9]">
              To ensure every couple receives my full artistry and personal attention,
              I work with a small number of families per year. If you feel we might be a wonderful fit,
              I would love to hear about your day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Form + Info grid ────────────────────────── */}
      <section className="section-pad bg-ivory-100 pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-5xl mx-auto">

            {/* Info */}
            <ScrollReveal preset="fadeRight" className="lg:col-span-2 space-y-9">
              {/* Photographer card */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <div className="absolute inset-0" style={{
                  background: `radial-gradient(ellipse at 45% 38%, rgba(220,190,150,0.7) 0%, transparent 60%),
                    linear-gradient(158deg,#3a2818,#8a6040,#c49070)`
                }} />
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&h=750&q=80"
                  alt="Elena Marchetti"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="grain absolute inset-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: 'linear-gradient(to top, rgba(14,12,9,0.82) 0%, transparent 80%)' }}>
                  <p className="font-serif italic text-lg text-ivory-100">Elena Marchetti</p>
                  <p className="font-sans text-xs text-ivory-300/55 tracking-wider">Florence · Available Worldwide</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                {[
                  { label: 'Email', value: 'hello@elenamarchetti.com', href: 'mailto:hello@elenamarchetti.com' },
                  { label: 'Studio', value: 'Via delle Stelle, 14, Florence' },
                  { label: 'Response', value: 'Within 48 hours, personally' },
                ].map(({ label, value, href }) => (
                  <motion.div key={label} whileHover={{ x: 3 }} className="flex gap-4 items-start">
                    <div>
                      <p className="label-caps-sm text-warm-400 mb-1">{label}</p>
                      {href
                        ? <a href={href} className="font-sans text-sm text-warm-700 hover:text-gold-600 transition-colors">{value}</a>
                        : <p className="font-sans text-sm text-warm-600">{value}</p>
                      }
                    </div>
                  </motion.div>
                ))}

                <div>
                  <p className="label-caps-sm text-warm-400 mb-3">Follow</p>
                  <div className="flex gap-4">
                    {['Instagram', 'Pinterest', 'Facebook'].map(s => (
                      <a key={s} href="#"
                        className="font-sans text-2xs tracking-ultra uppercase text-warm-400 hover:text-gold-600 border-b border-transparent hover:border-gold-400 pb-0.5 transition-all duration-300">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal preset="fadeLeft" className="lg:col-span-3">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Investment packages ──────────────────────── */}
      <section className="section-pad bg-obsidian-900">
        <div className="container-site">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel><span className="text-gold-400/50">Investment</span></SectionLabel>
            <h2 className="heading-serif text-display-sm text-ivory-100 mt-5">Collections</h2>
            <p className="font-sans text-sm text-ivory-400/45 mt-4 max-w-md mx-auto">
              Each collection is a starting point. Every wedding is unique,
              and I'm happy to create a bespoke package for you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} preset="fadeUp" delay={i * 0.1}>
                <div className={`relative p-8 sm:p-10 h-full flex flex-col transition-all duration-500 ${
                  pkg.hot
                    ? 'bg-ivory-100 shadow-dark-xl'
                    : 'bg-obsidian-800 border border-obsidian-600 hover:border-obsidian-500'
                }`}>
                  {pkg.hot && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold-400 font-sans text-3xs text-obsidian-900 tracking-mega uppercase font-medium shadow-gold">
                      Most Popular
                    </div>
                  )}

                  <p className={`label-caps-sm mb-2 ${pkg.hot ? 'text-gold-500' : 'text-gold-400/50'}`}>{pkg.hours}</p>
                  <h3 className={`font-serif text-2xl font-light mb-3 ${pkg.hot ? 'text-warm-800' : 'text-ivory-200'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`font-sans text-xs leading-[1.8] mb-6 ${pkg.hot ? 'text-warm-500' : 'text-ivory-400/45'}`}>
                    {pkg.desc}
                  </p>
                  <div className={`w-8 h-px mb-6 ${pkg.hot ? 'bg-gold-400/50' : 'bg-obsidian-600'}`} />
                  <ul className="space-y-3 flex-1">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className={`w-3 h-3 mt-0.5 flex-shrink-0 ${pkg.hot ? 'text-gold-500' : 'text-gold-400/50'}`}
                          fill="none" stroke="currentColor" viewBox="0 0 14 14">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 7l3.5 3.5L12 3" />
                        </svg>
                        <span className={`font-sans text-xs leading-relaxed ${pkg.hot ? 'text-warm-600' : 'text-ivory-400/45'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a href="#inquiry-form"
                      className={`font-sans text-2xs tracking-ultra uppercase pb-0.5 border-b transition-all duration-400 ${
                        pkg.hot
                          ? 'text-gold-600 border-gold-400/50 hover:border-gold-500'
                          : 'text-ivory-400/35 border-obsidian-600 hover:text-gold-400 hover:border-gold-400/50'
                      }`}>
                      Inquire →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <p className="font-sans text-xs text-ivory-400/30 italic">
              Pricing available upon inquiry. Destination weddings warmly welcomed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian-900 py-14 border-t border-obsidian-700">
        <div className="container-site px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-serif italic text-xl font-light text-ivory-200/50 mb-1.5">Elena Marchetti Photography</p>
          <p className="font-sans text-xs text-ivory-400/30 tracking-wider mb-7">Based in Florence · Available Worldwide</p>
          <div className="flex justify-center gap-9 mb-8">
            {[['Portfolio', '/portfolio'], ['About', '/about'], ['Inquire', '/contact']].map(([l, to]) => (
              <Link key={l} to={to} className="font-sans text-2xs tracking-ultra uppercase text-ivory-400/25 hover:text-gold-400 transition-colors duration-400">
                {l}
              </Link>
            ))}
          </div>
          <p className="font-sans text-xs text-ivory-400/20">© {new Date().getFullYear()} Elena Marchetti Photography. All rights reserved.</p>
        </div>
      </footer>
    </PageTransition>
  )
}
