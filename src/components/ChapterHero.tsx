import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDownload, HiArrowRight, HiChevronDown } from 'react-icons/hi'
import ChapterTitle from './ChapterTitle'

export default function ChapterHero() {
  const nameLetters = "VIVEK BHATTACHARYA".split('')

  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden">
      <ChapterTitle number="CHAPTER 00" title="THE PROTAGONIST" accentColor="red" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Manga Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Large Panel - Left 60% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 manga-panel border-manga-ink dark:border-manga-offwhite p-8 md:p-12 relative panel-accent-red page-curl"
          >
            {/* Speed lines background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 speed-lines-radial opacity-30" />
            </div>
            
            {/* Halftone shading edges */}
            <div className="absolute top-0 left-0 w-32 h-32 halftone opacity-10 dark:opacity-20" />
            <div className="absolute bottom-0 right-0 w-48 h-48 halftone opacity-10 dark:opacity-20" />
            
            <div className="relative z-10">
              {/* Name with slam effect */}
              <div className="flex flex-wrap justify-center md:justify-start gap-1 mb-6">
                {nameLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -50, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 200
                    }}
                    className={`font-bangers text-4xl md:text-6xl lg:text-7xl ${
                      letter === ' ' ? 'w-4' : ''
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Role tag as speech bubble */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="inline-block speech-bubble mt-4"
              >
                <span className="font-marker text-xl md:text-2xl">MERN Stack Developer</span>
              </motion.div>
              
              {/* Power aura effect */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(204, 0, 0, 0.3)',
                    '0 0 60px rgba(204, 0, 0, 0.5)',
                    '0 0 20px rgba(204, 0, 0, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-50"
              />
            </div>
            
            {/* SFX decoration */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-4 right-4 font-boogaloo text-6xl text-manga-blood dark:text-manga-crimson transform rotate-12"
            >
              WHOOSH!
            </motion.span>
          </motion.div>
          
          {/* Smaller Panels - Right 40% */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Panel 1 - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="manga-panel border-manga-ink dark:border-manga-offwhite p-6 panel-accent-blue"
            >
              <div className="thought-bubble">
                <p className="font-kalam text-lg">
                  Building modern, responsive, and scalable web experiences that push the boundaries of what&apos;s possible.
                </p>
              </div>
            </motion.div>
            
            {/* Panel 2 - Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="manga-panel border-manga-ink dark:border-manga-offwhite p-6 panel-accent-gold"
            >
              <div className="flex flex-col gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="action-button bg-manga-ink dark:bg-manga-offwhite text-manga-paper dark:text-manga-charcoal px-6 py-3 flex items-center justify-center gap-2"
                >
                  VIEW MY WORK <HiArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1ZxFBELyxLqQleWKmOAagFaZDXPArBkKl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="action-button border-4 border-manga-ink dark:border-manga-offwhite px-6 py-3 flex items-center justify-center gap-2"
                >
                  DOWNLOAD RESUME <HiDownload className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Panel 3 - Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="manga-panel border-manga-ink dark:border-manga-offwhite p-6"
            >
              <p className="font-marker text-sm mb-4 opacity-60">CONNECT WITH ME</p>
              <div className="flex gap-4 justify-center">
                <motion.a
                  href="https://github.com/vivekbhattacharya01-gif"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="ink-stamp p-3"
                >
                  <FaGithub className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vivek-bhattacharya-9a661528a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="ink-stamp p-3"
                >
                  <FaLinkedin className="w-8 h-8" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Strip Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 manga-panel border-manga-ink dark:border-manga-offwhite p-4 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center justify-center gap-2 font-bangers text-xl"
          >
            SCROLL TO CONTINUE READING <HiChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
