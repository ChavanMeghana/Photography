import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    year: '2023 – Present',
    role: 'Senior Frontend Engineer',
    company: 'TechNova Inc.',
    location: 'San Francisco, CA',
    description: 'Lead the frontend architecture for a SaaS platform serving 50k+ users. Implemented micro-frontend patterns, reduced bundle size by 40%, and mentored a team of 5 engineers.',
    tech: ['React', 'TypeScript', 'GraphQL', 'AWS'],
    type: 'work',
  },
  {
    year: '2021 – 2023',
    role: 'Full Stack Developer',
    company: 'Pixel Labs',
    location: 'Remote',
    description: 'Built end-to-end features for an e-commerce platform. Designed and implemented RESTful APIs, integrated payment gateways, and led mobile-responsive redesign.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    type: 'work',
  },
  {
    year: '2020 – 2021',
    role: 'UI/UX Engineer',
    company: 'DesignCraft Studio',
    location: 'New York, NY',
    description: 'Bridged design and development for client projects. Created design systems, animated prototypes, and shipped 12+ production websites.',
    tech: ['React', 'Figma', 'Framer', 'GSAP'],
    type: 'work',
  },
  {
    year: '2016 – 2020',
    role: 'B.Sc. Computer Science',
    company: 'MIT',
    location: 'Cambridge, MA',
    description: 'Graduated with honors. Specialized in Human-Computer Interaction and Distributed Systems. President of the Web Dev Club.',
    tech: [],
    type: 'education',
  },
]

export default function Timeline() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <ScrollReveal preset="fadeUp" className="text-center mb-16">
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Journey</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} preset={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 border-primary-400 bg-dark-900 -translate-x-1/2 z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                  </div>

                  {/* Year badge */}
                  <div className={`hidden md:flex w-5/12 ${i % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                    <span className="text-sm font-mono text-primary-400/70 mt-5">{exp.year}</span>
                  </div>

                  {/* Card */}
                  <div className="ml-14 md:ml-0 md:w-5/12 glass rounded-2xl p-5 hover:border-primary-500/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${exp.type === 'work' ? 'bg-primary-400' : 'bg-accent-400'}`} />
                      <span className="text-xs text-white/40 font-medium uppercase tracking-wider md:hidden">{exp.year}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg">{exp.role}</h3>
                    <p className="text-primary-400 text-sm font-medium">{exp.company}</p>
                    <p className="text-white/30 text-xs mb-3">{exp.location}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{exp.description}</p>
                    {exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-white/40 text-xs">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
