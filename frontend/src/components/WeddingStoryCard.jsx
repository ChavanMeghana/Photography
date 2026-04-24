import { useState } from 'react'
import { motion } from 'framer-motion'

export default function WeddingStoryCard({ wedding, onClick, size = 'half' }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7, ease: [0.23,1,0.32,1] }}
      onClick={() => onClick(wedding)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden group cursor-pointer ${
        size === 'full' ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[3/4]'
      }`}
      data-hover
    >
      {/* --- Gradient always rendered (fallback + loading state) --- */}
      <div className="absolute inset-0" style={{ background: wedding.coverGradient }} />

      {/* --- Real photo --- */}
      <motion.img
        src={wedding.coverImage}
        alt={wedding.couple}
        onLoad={() => setImgLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 1.0, ease: [0.23,1,0.32,1] }}
      />

      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Base overlay */}
      <div className="absolute inset-0 overlay-dark" />

      {/* Hover tint */}
      <motion.div
        className="absolute inset-0 bg-obsidian-900/20"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">

        {/* Season — reveals on hover */}
        <motion.div
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <span className="label-caps-sm text-gold-400/60">{wedding.season} · {wedding.date.split(' ')[1]}</span>
        </motion.div>

        {/* Couple */}
        <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory-100 leading-tight mb-1.5">
          {wedding.couple}
        </h3>

        {/* Location */}
        <p className="font-sans text-xs text-ivory-200/60 tracking-wide">
          {wedding.venue}
          <span className="mx-2 text-gold-400/40">·</span>
          {wedding.region}
        </p>

        {/* Brief */}
        <motion.p
          animate={hovered ? { opacity: 1, maxHeight: '80px', marginTop: '12px' } : { opacity: 0, maxHeight: '0px', marginTop: '0px' }}
          transition={{ duration: 0.45, ease: [0.23,1,0.32,1] }}
          className="font-serif italic text-sm font-light text-ivory-200/65 leading-relaxed overflow-hidden"
        >
          {wedding.brief}
        </motion.p>

        {/* CTA */}
        <motion.div
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, delay: 0.07 }}
          className="mt-5 flex items-center gap-2.5"
        >
          <span className="label-caps-sm text-gold-400">View Story</span>
          <motion.svg
            animate={hovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-3.5 h-3.5 text-gold-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </motion.div>
      </div>
    </motion.article>
  )
}
