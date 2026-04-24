import { motion } from 'framer-motion'
import { galleryImages } from '../data/weddings'

function ImageItem({ item }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-52 h-52 sm:w-64 sm:h-64 overflow-hidden"
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.23,1,0.32,1] }}
      data-hover
    >
      <div
        className="absolute inset-0 bg-obsidian-800"
        style={{ background: 'linear-gradient(135deg,#1a1610,#2c2218)' }}
      />
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        loading="lazy"
      />
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-obsidian-900/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400"
      >
        <span className="ornament text-3xl text-gold-400/80">✦</span>
      </motion.div>
    </motion.div>
  )
}

export default function GalleryStrip() {
  const doubled = [...galleryImages, ...galleryImages]

  return (
    <section className="py-0 bg-obsidian-900 overflow-hidden group">
      {/* Row 1 — scrolls left */}
      <div className="flex gap-1.5 pause-hover">
        <motion.div
          className="flex gap-1.5"
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((item, i) => <ImageItem key={`a-${i}`} item={item} />)}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex gap-1.5 mt-1.5 pause-hover">
        <motion.div
          className="flex gap-1.5"
          animate={{ x: ['-50%', 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((item, i) => <ImageItem key={`b-${i}`} item={item} />)}
        </motion.div>
      </div>

      {/* Overlay text */}
      <div className="relative py-12 bg-obsidian-900 text-center border-t border-obsidian-700">
        <p className="label-caps text-ivory-200/30 mb-2">Follow the Journey</p>
        <a
          href="#"
          className="font-serif italic text-xl font-light text-ivory-300/60 hover:text-gold-400 transition-colors duration-400"
        >
          @elenamarchettiphoto
        </a>
      </div>
    </section>
  )
}
