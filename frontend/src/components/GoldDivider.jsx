import { motion } from 'framer-motion'

export function GoldDivider({ centered = true, className = '' }) {
  return (
    <motion.div
      className={`${centered ? 'flex justify-center' : ''} ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.23,1,0.32,1] }}
      style={{ originX: centered ? 0.5 : 0 }}
    >
      <span className="block w-10 h-px bg-gold-400" />
    </motion.div>
  )
}

export function GoldOrnament({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="block flex-1 h-px bg-gold-400/25" />
      <span className="ornament text-xl leading-none">✦</span>
      <span className="block flex-1 h-px bg-gold-400/25" />
    </div>
  )
}

export function SectionLabel({ children, centered = true, className = '' }) {
  return (
    <motion.div
      className={`${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="label-caps text-warm-400">{children}</span>
      <GoldDivider centered={centered} className="mt-3" />
    </motion.div>
  )
}
