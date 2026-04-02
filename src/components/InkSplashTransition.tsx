import { motion } from 'framer-motion'

interface Props {
  isDark: boolean
}

export default function InkSplashTransition({ isDark }: Props) {
  return (
    <motion.div
      className={`fixed inset-0 z-[100] ${isDark ? 'bg-manga-ink' : 'bg-manga-offwhite'}`}
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Ink splatter decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? 'bg-manga-charcoal' : 'bg-manga-paper'}`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  )
}
