import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import ChapterTitle from './ChapterTitle'

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Next.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'REST APIs', level: 85 },
  { name: 'Git', level: 85 },
  { name: 'HTML5/CSS3', level: 95 },
]

const stats = [
  { label: 'EXPERIENCE', value: 2, suffix: '+ YEARS', icon: '⚡' },
  { label: 'PROJECTS', value: 10, suffix: '+ BUILT', icon: '🚀' },
  { label: 'COFFEE', value: 300, suffix: '+ CUPS', icon: '☕' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="font-bangers text-3xl md:text-4xl">
      {count}{suffix}
    </span>
  )
}

export default function ChapterAbout() {
  const skillsRef = useRef(null)
  const isSkillsInView = useInView(skillsRef, { once: true })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <ChapterTitle number="CHAPTER 01" title="THE ORIGIN" accentColor="blue" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Full Width Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="manga-panel border-manga-ink dark:border-manga-offwhite p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 speed-lines opacity-20" />
          <h3 className="font-bangers text-4xl md:text-5xl text-center relative z-10">
            WHO IS THIS PERSON...?
          </h3>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-2 right-4 font-boogaloo text-4xl text-manga-blood dark:text-manga-crimson"
          >
            DRAMATIC!
          </motion.span>
        </motion.div>
        
        {/* Middle Row - 3 Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Panel 1 - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="manga-panel border-manga-ink dark:border-manga-offwhite p-6 flex items-center justify-center panel-accent-blue"
          >
            <div className="relative">
              {/* Hexagonal frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-dashed border-manga-blood dark:border-manga-crimson rounded-full"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
              <div 
                className="w-40 h-40 bg-manga-ink dark:bg-manga-offwhite flex items-center justify-center"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="font-bangers text-5xl text-manga-paper dark:text-manga-charcoal">VB</span>
              </div>
              <p className="font-marker text-center mt-4 text-sm opacity-60">CHARACTER CARD</p>
            </div>
          </motion.div>
          
          {/* Panel 2 - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 manga-panel border-manga-ink dark:border-manga-offwhite p-6"
          >
            <div className="speech-bubble">
              <p className="font-kalam text-base leading-relaxed">
                B.Tech Computer Science student at Raj Kumar Goel Institute of Technology and Management, Ghaziabad. 
                Passionate about building modern, responsive, and scalable web applications with clean UI and smooth user experiences.
              </p>
              <p className="font-kalam text-base leading-relaxed mt-3">
                Currently mastering full-stack MERN development and TypeScript. Open to frontend developer roles, internships, and web development opportunities.
              </p>
            </div>
          </motion.div>
          
          {/* Panel 3 - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="manga-panel border-manga-ink dark:border-manga-offwhite p-6 panel-accent-gold"
          >
            <p className="font-bangers text-xl mb-4 text-center text-manga-blood dark:text-manga-crimson">
              POWER LEVEL READOUT
            </p>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-2xl mr-2">{stat.icon}</span>
                  <span className="font-marker text-sm">{stat.label}: </span>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Panel - Skills */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="manga-panel border-manga-ink dark:border-manga-offwhite p-8 page-curl"
        >
          <h3 className="font-bangers text-3xl mb-6 text-center text-manga-blood dark:text-manga-crimson">
            ⚔️ ABILITY LIST ⚔️
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="border-2 border-manga-ink dark:border-manga-offwhite p-3 relative overflow-hidden group"
              >
                {/* Impact star burst on hover */}
                <motion.div
                  className="absolute inset-0 bg-manga-blood/10 dark:bg-manga-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <p className="font-marker text-sm mb-2">{skill.name}</p>
                <div className="power-bar">
                  <motion.div
                    className="power-bar-fill bg-manga-ink dark:bg-manga-offwhite"
                    initial={{ width: 0 }}
                    animate={isSkillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
                  />
                </div>
                
                {/* Speed lines on hover */}
                <motion.div
                  className="absolute inset-0 speed-lines opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
