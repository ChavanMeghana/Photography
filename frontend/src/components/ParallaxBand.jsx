import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBand({ src, gradient, height = '60vh', overlay = 'overlay-full', children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-14%', '14%'])

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height }}>
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale: 1.3 }}
      >
        {/* Gradient base */}
        <div className="absolute inset-0" style={{ background: gradient }} />
        {/* Photo overlay */}
        {src && (
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        {/* Grain */}
        <div className="grain absolute inset-0 pointer-events-none" />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Children */}
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          {children}
        </div>
      )}
    </div>
  )
}
