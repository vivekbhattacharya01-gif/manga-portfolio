import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ChapterTitle from './ChapterTitle'

const projects = [
  {
    name: 'AgencyAI',
    subtitle: 'AI Powered Agency Website',
    description: 'Production-grade multi-section agency website with React.js component architecture, smooth scrolling, and fully responsive layouts optimized for all devices.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    liveDemo: 'https://agency-ai-758.netlify.app/',
    github: 'https://github.com/vivekbhattacharya01-gif/agency-ai',
    color: 'red',
  },
  {
    name: 'CoinPulse',
    subtitle: 'Real-Time Crypto Tracker',
    description: 'Live crypto tracking dashboard powered by CoinGecko API with real-time updates and 20% improved page load performance.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    liveDemo: 'https://vivekbhattacharya01-gif.github.io/CoinPulse/',
    github: 'https://github.com/vivekbhattacharya01-gif/CoinPulse',
    color: 'gold',
  },
  {
    name: 'CodeWave',
    subtitle: 'QR Code Generator',
    description: 'QR code generator used by 50+ users during testing with 30% improved user satisfaction through clean, intuitive UI.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'API Integration'],
    liveDemo: 'https://vivek-codewave.netlify.app/',
    github: 'https://github.com/vivekbhattacharya01-gif/CodeWave',
    color: 'blue',
  },
]

export default function ChapterProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getColorClasses = (color: string) => ({
    border: color === 'red' ? 'border-manga-blood dark:border-manga-crimson' 
          : color === 'gold' ? 'border-yellow-600 dark:border-yellow-400' 
          : 'border-blue-700 dark:border-blue-400',
    bg: color === 'red' ? 'panel-accent-red' 
      : color === 'gold' ? 'panel-accent-gold' 
      : 'panel-accent-blue',
    text: color === 'red' ? 'text-manga-blood dark:text-manga-crimson'
        : color === 'gold' ? 'text-yellow-600 dark:text-yellow-400'
        : 'text-blue-700 dark:text-blue-400',
  })

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <ChapterTitle number="CHAPTER 02" title="THE MISSIONS" accentColor="gold" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Irregular manga grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color)
            const isHovered = hoveredIndex === index
            
            // Vary sizes like real manga
            const colSpan = index === 0 ? 'lg:col-span-4' : index === 1 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-4'
            
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.2 
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${colSpan} manga-panel border-manga-ink dark:border-manga-offwhite ${colors.bg} p-6 relative overflow-hidden group cursor-pointer`}
              >
                {/* Shake effect on hover */}
                <motion.div
                  animate={isHovered ? { x: [0, -2, 2, -2, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {/* Project name with speed lines */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 speed-lines opacity-0 group-hover:opacity-30 transition-opacity" />
                    <h3 className={`font-bangers text-3xl md:text-4xl ${colors.text}`}>
                      {project.name}
                    </h3>
                    <p className="font-marker text-sm opacity-60 mt-1">{project.subtitle}</p>
                  </div>
                  
                  {/* Image placeholder with halftone overlay */}
                  <div className="relative mb-4 border-2 border-manga-ink dark:border-manga-offwhite overflow-hidden">
                    <div className="aspect-video bg-linear-to-br from-manga-ink/10 to-manga-ink/30 dark:from-manga-offwhite/10 dark:to-manga-offwhite/30 flex items-center justify-center">
                      <div className="absolute inset-0 halftone-large opacity-20" />
                      <div className="text-center relative z-10">
                        <span className="font-bangers text-2xl opacity-50">MISSION FILE</span>
                        <div className="mt-2 border-2 border-dashed border-current p-2 transform -rotate-6">
                          <span className="font-marker text-sm text-manga-blood dark:text-manga-crimson">CLASSIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description in thought bubble style */}
                  <div className="thought-bubble mb-4">
                    <p className="font-kalam text-base">{project.description}</p>
                  </div>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-marker border-2 border-manga-ink dark:border-manga-offwhite bg-manga-paper dark:bg-manga-charcoal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`action-button flex-1 border-4 ${colors.border} py-2 px-4 flex items-center justify-center gap-2 font-bangers`}
                    >
                      LIVE DEMO <FaExternalLinkAlt className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="action-button flex-1 bg-manga-ink dark:bg-manga-offwhite text-manga-paper dark:text-manga-charcoal py-2 px-4 flex items-center justify-center gap-2 font-bangers"
                    >
                      GITHUB <FaGithub className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
                
                {/* ZAP! SFX on hover */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  className={`absolute top-4 right-4 font-boogaloo text-4xl ${colors.text} transform rotate-12`}
                >
                  ZAP!
                </motion.span>
                
                {/* Speed lines flash on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isHovered ? { opacity: [0, 0.3, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 speed-lines pointer-events-none"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
