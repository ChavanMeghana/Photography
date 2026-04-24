import { useState } from 'react'
import { motion } from 'framer-motion'

const typeColors = {
  Portrait:   'bg-amber-500/20 text-amber-300 border-amber-400/30',
  Fashion:    'bg-blue-500/20 text-blue-300 border-blue-400/30',
  Landscape:  'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
  Wedding:    'bg-rose-500/20 text-rose-300 border-rose-400/30',
  Commercial: 'bg-gold-400/20 text-gold-300 border-gold-400/30',
  Street:     'bg-orange-500/20 text-orange-300 border-orange-400/30',
}

export default function WeddingStoryCard({ wedding, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const badgeClass = typeColors[wedding.type] || 'bg-gold-400/20 text-gold-300 border-gold-400/30'

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
      className="relative overflow-hidden group cursor-pointer w-full h-full"
      data-hover
    >
      {/* Gradient fallback */}
      <div className="absolute inset-0" style={{ background: wedding.coverGradient }} />

      {/* Photo */}
      <motion.img
        src={wedding.coverImage}
        alt={wedding.couple}
        onLoad={() => setImgLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 1.0, ease: [0.23,1,0.32,1] }}
      />

      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 overlay-dark" />
      <motion.div
        className="absolute inset-0 bg-obsidian-900/20"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Type badge — top left */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`font-sans text-3xs tracking-mega uppercase px-2.5 py-1 border backdrop-blur-sm ${badgeClass}`}>
          {wedding.type}
        </span>
      </div>

      {/* Content — bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
        {/* Year — hover reveal */}
        <motion.span
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.35 }}
          className="label-caps-sm text-gold-400/70 mb-2 block"
        >
          {wedding.date}
        </motion.span>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory-100 leading-tight mb-1">
          {wedding.couple}
        </h3>

        {/* Location */}
        <p className="font-sans text-xs text-ivory-200/55 tracking-wide">
          {wedding.venue}
          <span className="mx-2 text-gold-400/40">·</span>
          {wedding.region}
        </p>

        {/* Brief — hover reveal */}
        <motion.p
          animate={hovered
            ? { opacity: 1, maxHeight: '80px', marginTop: '10px' }
            : { opacity: 0, maxHeight: '0px', marginTop: '0px' }}
          transition={{ duration: 0.4, ease: [0.23,1,0.32,1] }}
          className="font-serif italic text-sm font-light text-ivory-200/60 leading-relaxed overflow-hidden"
        >
          {wedding.brief}
        </motion.p>

        {/* CTA — hover reveal */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.35, delay: 0.06 }}
          className="mt-5 flex items-center gap-2.5"
        >
          <span className="label-caps-sm text-gold-400">View Project</span>
          <motion.svg
            animate={{ x: hovered ? 4 : 0 }}
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
