import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)
  const [state, setState] = useState('default') // default | hover | click

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.10)
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.10)
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onDown = () => setState('click')
    const onUp = () => setState('default')

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setState('hover')
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setState('default')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-500 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ring}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full border z-[9998] pointer-events-none
          transition-[width,height,border-color,background-color,opacity] duration-300 ${
          state === 'hover'
            ? 'border-gold-400 bg-gold-400/8 scale-[1.6]'
            : state === 'click'
            ? 'border-gold-500 scale-75'
            : 'border-gold-400/50'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
