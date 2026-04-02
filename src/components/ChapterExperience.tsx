import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ChapterTitle from './ChapterTitle'

const experiences = [
  {
    arc: 'ARC 01',
    year: 'Aug 2023 – Present',
    title: 'B.Tech in Computer Science',
    place: 'RKGIT&M, Ghaziabad',
    description: 'Pursuing Bachelor\'s in CSE with a deep focus on full-stack MERN web development.',
    color: 'blue',
  },
  {
    arc: 'ARC 02',
    year: 'Oct – Dec 2025',
    title: 'Web Exploit Hunting & Bug Bounty Intern',
    place: 'EduSkills (AICTE)',
    description: 'Identified and reported web vulnerabilities as part of a structured bug bounty internship program under AICTE.',
    color: 'red',
  },
  {
    arc: 'ARC 03',
    year: 'Mar 2026',
    title: 'Generative AI Program',
    place: 'NASSCOM Skill Development',
    description: 'Completed certified Generative AI program under NASSCOM\'s Skill Development initiative with hands-on AI exposure.',
    color: 'gold',
  },
]

export default function ChapterExperience() {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' })

  const getColorClasses = (color: string) => ({
    border: color === 'red' ? 'border-manga-blood dark:border-manga-crimson' 
          : color === 'gold' ? 'border-yellow-600 dark:border-yellow-400' 
          : 'border-blue-700 dark:border-blue-400',
    bg: color === 'red' ? 'bg-manga-blood/10 dark:bg-manga-crimson/10' 
      : color === 'gold' ? 'bg-yellow-600/10 dark:bg-yellow-400/10' 
      : 'bg-blue-700/10 dark:bg-blue-400/10',
    text: color === 'red' ? 'text-manga-blood dark:text-manga-crimson'
        : color === 'gold' ? 'text-yellow-600 dark:text-yellow-400'
        : 'text-blue-700 dark:text-blue-400',
    dot: color === 'red' ? 'bg-manga-blood dark:bg-manga-crimson'
       : color === 'gold' ? 'bg-yellow-600 dark:bg-yellow-400'
       : 'bg-blue-700 dark:bg-blue-400',
  })

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <ChapterTitle number="CHAPTER 03" title="THE JOURNEY SO FAR" accentColor="blue" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline container */}
        <div ref={timelineRef} className="relative">
          {/* Central spine/line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-manga-ink/20 dark:bg-manga-offwhite/20">
            <motion.div
              className="w-full bg-manga-ink dark:bg-manga-offwhite origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ height: '100%' }}
            />
          </div>
          
          {/* Experience entries */}
          <div className="relative">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color)
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={exp.arc}
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -100 : 100,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 100,
                    delay: index * 0.2
                  }}
                  className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-12`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colors.dot} rounded-full border-4 border-manga-paper dark:border-manga-charcoal z-10`}
                  />
                  
                  {/* Entry panel */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`manga-panel border-manga-ink dark:border-manga-offwhite ${colors.bg} p-6 relative`}
                    >
                      {/* Arc label */}
                      <span className={`font-bangers text-sm ${colors.text} absolute -top-3 ${isLeft ? 'right-4' : 'left-4'} bg-manga-paper dark:bg-manga-charcoal px-2`}>
                        {exp.arc}
                      </span>
                      
                      {/* Year */}
                      <p className={`font-bangers text-2xl md:text-3xl ${colors.text} mb-2`}>
                        {exp.year}
                      </p>
                      
                      {/* Title */}
                      <h3 className="font-sans font-bold text-lg mb-1">
                        {exp.title}
                      </h3>
                      
                      {/* Place */}
                      <p className="font-marker text-sm opacity-60 mb-3" style={{ textDecoration: 'underline', textDecorationStyle: 'wavy' }}>
                        {exp.place}
                      </p>
                      
                      {/* Description speech bubble */}
                      <div className={`speech-bubble ${isLeft ? 'text-left' : ''}`}>
                        <p className="font-kalam text-sm">
                          {exp.description}
                        </p>
                      </div>
                      
                      {/* Ink splash decoration */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`absolute ${isLeft ? '-left-2' : '-right-2'} -bottom-2 w-12 h-12 ${colors.dot} rounded-full blur-sm`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4"
          >
            <div className="font-bangers text-sm text-manga-blood dark:text-manga-crimson bg-manga-paper dark:bg-manga-charcoal px-4 py-2 border-2 border-manga-ink dark:border-manga-offwhite">
              TO BE CONTINUED...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
