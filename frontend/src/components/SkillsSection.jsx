import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-primary-500 to-primary-400',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-accent-500 to-accent-400',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python / Django', level: 78 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'REST / GraphQL', level: 87 },
    ],
  },
  {
    category: 'Tools & Design',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'Git / CI/CD', level: 90 },
      { name: 'AWS / Vercel', level: 75 },
    ],
  },
]

const techIcons = [
  { name: 'React', bg: '#61DAFB22', color: '#61DAFB' },
  { name: 'TypeScript', bg: '#3178C622', color: '#3178C6' },
  { name: 'Next.js', bg: '#ffffff11', color: '#ffffff' },
  { name: 'Node.js', bg: '#68A06322', color: '#68A063' },
  { name: 'Python', bg: '#3776AB22', color: '#3776AB' },
  { name: 'Figma', bg: '#F24E1E22', color: '#F24E1E' },
  { name: 'Docker', bg: '#2496ED22', color: '#2496ED' },
  { name: 'PostgreSQL', bg: '#4169E122', color: '#4169E1' },
]

function SkillBar({ name, level, color, index }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs text-white/40 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <ScrollReveal preset="fadeUp" className="text-center mb-16">
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Expertise</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A toolkit built over years of building products that people love to use.
          </p>
        </ScrollReveal>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.category} preset="fadeUp" delay={gi * 0.1}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${group.color} bg-opacity-10 mb-6`}>
                  <span className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${group.color}`}>
                    {group.category}
                  </span>
                </div>
                <div className="space-y-5">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      color={group.color}
                      index={i + gi * 0.5}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech icon grid */}
        <ScrollReveal preset="fadeUp">
          <div className="text-center mb-8">
            <p className="text-white/30 text-sm font-medium tracking-widest uppercase">Tech I work with</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="glass px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-default"
                style={{ color: tech.color, background: tech.bg }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
