import { motion } from 'framer-motion'
import { galleryImages } from '../data/weddings'

function ImageItem({ item }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden"
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.23,1,0.32,1] }}
      data-hover
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#141414,#1E1E1E)' }} />
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0 bg-obsidian-900/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400"
      >
        <span className="ornament text-2xl text-gold-400/80">✦</span>
      </motion.div>
    </motion.div>
  )
}

export default function GalleryStrip() {
  const doubled = [...galleryImages, ...galleryImages]

  return (
    <section className="py-0 bg-obsidian-900 overflow-hidden">
      {/* Row 1 — scrolls left */}
      <div className="flex gap-1 sm:gap-1.5 pause-hover overflow-hidden">
        <motion.div
          className="flex gap-1 sm:gap-1.5 flex-shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((item, i) => <ImageItem key={`a-${i}`} item={item} />)}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 pause-hover overflow-hidden">
        <motion.div
          className="flex gap-1 sm:gap-1.5 flex-shrink-0"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((item, i) => <ImageItem key={`b-${i}`} item={item} />)}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative py-10 sm:py-12 bg-obsidian-900 text-center border-t border-obsidian-700/50">
        <p className="label-caps text-ivory-200/25 mb-2">Follow the Journey</p>
        <a
          href="#"
          className="font-serif italic text-lg sm:text-xl font-light text-ivory-300/50 hover:text-gold-400 transition-colors duration-400"
        >
          @bondstudio
        </a>
      </div>
    </section>
  )
}
