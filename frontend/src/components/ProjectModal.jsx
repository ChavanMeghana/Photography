import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative glass rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
          onClick={e => e.stopPropagation()}
        >
          {/* Hero image */}
          <div className="relative h-64 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: project.gradient }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl select-none">{project.emoji}</span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-dark-900/60 hover:bg-dark-900/80 flex items-center justify-center text-white/60 hover:text-white transition-colors backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-1">{project.title}</h2>
                <p className="text-primary-400 text-sm font-medium">{project.role}</p>
              </div>
              <div className="flex gap-2">
                {project.links?.github && (
                  <a href={project.links.github} className="btn-outline py-2 px-4 text-xs">
                    GitHub
                  </a>
                )}
                {project.links?.live && (
                  <a href={project.links.live} className="btn-primary py-2 px-4 text-xs text-white">
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-white/60 leading-relaxed mb-6">{project.longDescription || project.description}</p>

            {project.highlights && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                      <svg className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-xl glass text-sm text-primary-300 border border-primary-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
