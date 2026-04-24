import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [atHero, setAtHero] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 24)
      setAtHero(window.scrollY < window.innerHeight * 0.65)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const onHero = atHero && !scrolled && location.pathname === '/'

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.23,1,0.32,1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-ivory-50/96 backdrop-blur-sm shadow-warm-sm border-b border-ivory-400/60'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site flex items-center justify-between h-[72px] px-6 sm:px-10 lg:px-16">

          {/* Left links */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to}
                className={({ isActive }) =>
                  `font-sans text-2xs tracking-ultra uppercase transition-all duration-500 pb-0.5 border-b ${
                    isActive
                      ? `${onHero ? 'text-gold-300 border-gold-300' : 'text-gold-600 border-gold-400'}`
                      : `border-transparent ${onHero ? 'text-ivory-300/60 hover:text-ivory-100' : 'text-warm-600 hover:text-warm-900'} hover:border-current`
                  }`
                }
              >{label}</NavLink>
            ))}
          </nav>

          {/* Center logo */}
          <NavLink to="/" className="absolute left-1/2 -translate-x-1/2 text-center group">
            <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
              <p className={`font-serif text-lg font-light tracking-[0.24em] uppercase transition-colors duration-600 ${onHero ? 'text-ivory-100' : 'text-warm-900'}`}>
                Elena Marchetti
              </p>
              <p className={`font-sans text-3xs tracking-mega uppercase mt-0.5 transition-colors duration-600 ${onHero ? 'text-ivory-300/50' : 'text-warm-400'}`}>
                Photography
              </p>
            </motion.div>
          </NavLink>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-7">
            <NavLink to="/contact"
              className={`font-sans text-2xs tracking-ultra uppercase pb-0.5 border-b border-transparent hover:border-current transition-all duration-400 ${onHero ? 'text-ivory-300/60 hover:text-ivory-100' : 'text-warm-600 hover:text-warm-900'}`}
            >
              Inquire
            </NavLink>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-400 ${onHero ? 'text-ivory-300/40 hover:text-ivory-100' : 'text-warm-400 hover:text-warm-700'}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden flex flex-col gap-1.5 items-end ml-auto ${onHero ? 'text-ivory-200' : 'text-warm-700'}`}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              className="block h-px bg-current" style={{ width: 18 }} />
            <motion.span animate={menuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 12 }}
              className="block h-px bg-current" style={{ width: 12 }} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              className="block h-px bg-current" style={{ width: 18 }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.23,1,0.32,1] }}
            className="fixed inset-x-0 top-[72px] z-40 bg-ivory-50/97 backdrop-blur-md border-b border-ivory-400 shadow-warm md:hidden"
          >
            <nav className="px-8 py-8 flex flex-col gap-5">
              {[...links, { to: '/contact', label: 'Inquire' }].map(({ to, label }, i) => (
                <motion.div key={to} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <NavLink to={to}
                    className={({ isActive }) =>
                      `font-sans text-xs tracking-ultra uppercase block pb-3 border-b transition-all duration-300 ${
                        isActive ? 'text-gold-600 border-gold-400' : 'text-warm-600 border-ivory-400 hover:text-warm-900'
                      }`
                    }
                  >{label}</NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
