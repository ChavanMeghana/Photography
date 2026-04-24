import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect, Component } from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0E0C09', color: '#FDFAF6', fontFamily: 'sans-serif', padding: '2rem', flexDirection: 'column', gap: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem', color: '#C9A84C' }}>Something went wrong</h1>
          <pre style={{ fontSize: '0.75rem', color: '#a09488', whiteSpace: 'pre-wrap', maxWidth: '600px' }}>{this.state.error.message}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600)
    return () => clearTimeout(t)
  }, [])

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CustomCursor />
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loader" />
          ) : (
            <div key="app" className="bg-ivory-100 min-h-screen">
              <Navbar />
              <AnimatedRoutes />
            </div>
          )}
        </AnimatePresence>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
