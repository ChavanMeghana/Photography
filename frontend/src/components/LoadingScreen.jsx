import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian-900"
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.9, ease: [0.23,1,0.32,1] }}
    >
      {/* Background photo hint */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1920&q=50"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-obsidian-900/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23,1,0.32,1] }}
        className="relative flex flex-col items-center gap-10"
      >
        {/* Monogram */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border border-gold-400/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-gold-400/30"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif italic text-4xl text-gold-400 font-light leading-none">E</span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.35em' }}
            animate={{ opacity: 1, letterSpacing: '0.22em' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-xl font-light text-ivory-200 tracking-[0.22em]"
          >
            ELENA MARCHETTI
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-sans text-3xs text-gold-400/50 tracking-mega uppercase mt-2"
          >
            Photography
          </motion.p>
        </div>

        {/* Progress line */}
        <div className="relative w-40 h-px bg-obsidian-700 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, ease: [0.23,1,0.32,1] }}
            style={{ originX: 0 }}
          />
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0,1,2].map(i => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-gold-400/50"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
