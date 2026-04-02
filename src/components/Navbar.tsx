import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FiMenu, FiX } from 'react-icons/fi'
import { GiInkSwirl } from 'react-icons/gi'
import { BsMoonStarsFill } from 'react-icons/bs'

const chapters = [
  { id: 'hero', label: 'CH.00' },
  { id: 'about', label: 'CH.01' },
  { id: 'projects', label: 'CH.02' },
  { id: 'experience', label: 'CH.03' },
  { id: 'contact', label: 'CH.04' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState('hero')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveChapter(id)
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-manga-paper/95 dark:bg-manga-charcoal/95 backdrop-blur-sm border-b-4 border-manga-ink dark:border-manga-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Ink Stamp Style */}
          <motion.div 
            className="ink-stamp text-manga-ink dark:text-manga-offwhite cursor-pointer"
            whileHover={{ rotate: 5, scale: 1.1 }}
            onClick={() => scrollToSection('hero')}
          >
            <span className="font-bangers text-xl">VB</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {chapters.map((chapter) => (
              <motion.button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className={`px-4 py-2 font-bangers text-lg relative ${
                  activeChapter === chapter.id 
                    ? 'text-manga-blood dark:text-manga-crimson' 
                    : 'text-manga-ink dark:text-manga-offwhite'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {chapter.label}
                {activeChapter === chapter.id && (
                  <motion.div
                    layoutId="activeChapter"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-manga-blood dark:bg-manga-crimson"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="manga-panel p-2 border-manga-ink dark:border-manga-offwhite"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? (
                <GiInkSwirl className="w-6 h-6" />
              ) : (
                <BsMoonStarsFill className="w-6 h-6" />
              )}
            </motion.button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-y-0 right-0 w-64 bg-manga-paper dark:bg-manga-charcoal border-l-4 border-manga-ink dark:border-manga-offwhite md:hidden"
          >
            <div className="pt-20 px-4">
              <p className="font-bangers text-xl mb-4 text-manga-blood dark:text-manga-crimson">
                TABLE OF CONTENTS
              </p>
              {chapters.map((chapter, index) => (
                <motion.button
                  key={chapter.id}
                  onClick={() => scrollToSection(chapter.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block w-full text-left py-3 px-4 font-bangers text-lg border-b-2 border-manga-ink/20 dark:border-manga-offwhite/20 ${
                    activeChapter === chapter.id 
                      ? 'text-manga-blood dark:text-manga-crimson' 
                      : ''
                  }`}
                >
                  {chapter.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
