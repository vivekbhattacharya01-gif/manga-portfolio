import { motion } from 'framer-motion'

interface Props {
  number: string
  title: string
  accentColor?: 'red' | 'blue' | 'gold'
}

export default function ChapterTitle({ number, title, accentColor = 'red' }: Props) {
  const accentClasses = {
    red: 'text-manga-blood dark:text-manga-crimson',
    blue: 'text-blue-700 dark:text-blue-400',
    gold: 'text-yellow-600 dark:text-yellow-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-16 mb-8 overflow-hidden"
    >
      {/* Speed lines background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full speed-lines-radial" />
      </div>
      
      {/* Chapter content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`font-bangers text-6xl md:text-8xl ${accentClasses[accentColor]}`}
        >
          {number}
        </motion.p>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bangers text-4xl md:text-6xl mt-4"
        >
          {title}
        </motion.h2>
        
        {/* Ink splatter decoration */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className={`absolute -top-4 right-1/4 w-16 h-16 rounded-full opacity-20 ${
            accentColor === 'red' ? 'bg-manga-blood dark:bg-manga-crimson' :
            accentColor === 'blue' ? 'bg-blue-700 dark:bg-blue-400' :
            'bg-yellow-600 dark:bg-yellow-400'
          }`}
        />
      </div>
    </motion.div>
  )
}
