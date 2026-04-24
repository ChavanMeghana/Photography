import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <PageTransition>
      <section className="section-padding pt-28">
        <div className="container-max">
          <ScrollReveal preset="fadeUp" className="text-center mb-16">
            <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Work</span>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold mt-3 mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              A collection of work I'm proud of — from side projects to production apps.
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal preset="fadeUp" className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map(tag => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === tag
                    ? 'bg-primary-500/20 border border-primary-500/40 text-primary-300'
                    : 'glass text-white/50 hover:text-white border border-transparent'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelected}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-white/30"
            >
              No projects found for this filter.
            </motion.div>
          )}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
