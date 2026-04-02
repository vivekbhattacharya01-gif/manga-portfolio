import { motion } from 'framer-motion'

export default function SpineIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-manga-ink dark:bg-manga-offwhite text-manga-paper dark:text-manga-charcoal py-8 px-2 writing-mode-vertical">
        <p className="font-bangers text-sm tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          VOL.01 — VIVEK BHATTACHARYA
        </p>
      </div>
    </motion.div>
  )
}
