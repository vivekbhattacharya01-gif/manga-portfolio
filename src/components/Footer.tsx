import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 relative overflow-hidden border-t-4 border-manga-ink dark:border-manga-offwhite">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone opacity-5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* End of Volume text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="manga-panel border-manga-ink dark:border-manga-offwhite p-8 inline-block relative"
        >
          <p className="font-bangers text-4xl md:text-5xl mb-4 opacity-30">
            END OF VOLUME 01
          </p>
          
          <h2 className="font-bangers text-3xl md:text-4xl mb-6">
            VIVEK BHATTACHARYA
          </h2>
          
          <p className="font-kalam text-lg mb-6">
            Built with React & ❤️
          </p>
          
          <p className="font-sans text-sm opacity-60 mb-4">
            © {currentYear} All rights reserved.
          </p>
          
          {/* Manga ending text */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-manga-ink dark:bg-manga-offwhite" />
            <span className="font-bangers text-xl text-manga-blood dark:text-manga-crimson">
              — TO BE CONTINUED —
            </span>
            <div className="h-0.5 w-16 bg-manga-ink dark:bg-manga-offwhite" />
          </div>
          
          {/* Page curl effect */}
          <motion.div
            animate={{ 
              rotateY: [0, -15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-12 h-12"
            style={{
              background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
              borderBottomRightRadius: '4px',
            }}
          />
        </motion.div>
      </div>
    </footer>
  )
}
