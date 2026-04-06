import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPaperAirplane } from 'react-icons/hi'
import ChapterTitle from './ChapterTitle'

export default function ChapterContact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      await fetch('https://formspree.io/f/meepznqk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <ChapterTitle number="CHAPTER 04" title="MAKE YOUR MOVE" accentColor="red" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Panel */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="manga-panel border-manga-ink dark:border-manga-offwhite p-12 text-center relative overflow-hidden panel-accent-gold"
          >
            <div className="absolute inset-0 speed-lines-radial opacity-30" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <span className="font-bangers text-6xl md:text-8xl text-manga-blood dark:text-manga-crimson">
                MISSION ACCEPTED!
              </span>
              <p className="font-marker text-2xl mt-6">✅ TO BE CONTINUED...</p>
              <p className="font-kalam text-lg mt-4 opacity-60">
                I&apos;ll get back to you soon!
              </p>
            </motion.div>
            
            {/* Impact lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ delay: i * 0.05 }}
                className="absolute bg-manga-blood dark:bg-manga-crimson"
                style={{
                  width: '200px',
                  height: '4px',
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'left center',
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </motion.div>
        ) : (
          <>
            {/* Top Large Panel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="manga-panel border-manga-ink dark:border-manga-offwhite p-8 mb-8 relative overflow-hidden panel-accent-red"
            >
              <div className="absolute inset-0 speed-lines opacity-20" />
              <div className="relative z-10 text-center">
                <h3 className="font-bangers text-4xl md:text-5xl mb-4">
                  LET&apos;S WORK TOGETHER
                </h3>
                <div className="speech-bubble inline-block">
                  <p className="font-kalam text-lg">Send a transmission. I don&apos;t bite.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Middle Panel - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="manga-panel border-manga-ink dark:border-manga-offwhite p-8 mb-8 page-curl"
            >
              <div className="text-center mb-6">
                <span className="font-bangers text-xl text-manga-blood dark:text-manga-crimson">
                  📜 SECRET MESSAGE 📜
                </span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="font-marker text-sm block mb-2">NAME:</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b-4 border-manga-ink dark:border-manga-offwhite py-2 px-1 font-kalam text-lg focus:outline-none focus:border-manga-blood dark:focus:border-manga-crimson transition-colors"
                    placeholder="Your hero name..."
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-manga-blood dark:bg-manga-crimson transition-all group-focus-within:w-full" />
                </div>
                
                {/* Email Field */}
                <div className="relative">
                  <label className="font-marker text-sm block mb-2">EMAIL:</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b-4 border-manga-ink dark:border-manga-offwhite py-2 px-1 font-kalam text-lg focus:outline-none focus:border-manga-blood dark:focus:border-manga-crimson transition-colors"
                    placeholder="Your transmission frequency..."
                  />
                </div>
                
                {/* Message Field */}
                <div className="relative">
                  <label className="font-marker text-sm block mb-2">MESSAGE:</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-4 border-manga-ink dark:border-manga-offwhite p-3 font-kalam text-lg focus:outline-none focus:border-manga-blood dark:focus:border-manga-crimson transition-colors resize-none"
                    placeholder="Your secret message..."
                  />
                </div>
                
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full action-button bg-manga-ink dark:bg-manga-offwhite text-manga-paper dark:text-manga-charcoal py-4 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ⏳
                      </motion.span>
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND IT <HiPaperAirplane className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Bottom Row - 2 Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Panel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="manga-panel border-manga-ink dark:border-manga-offwhite p-6 panel-accent-blue"
              >
                <p className="font-marker text-sm mb-3 opacity-60">DIRECT LINE</p>
                <motion.a
                  href="mailto:vivekbhattacharya01@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 font-kalam text-lg text-manga-blood dark:text-manga-crimson hover:underline"
                >
                  <HiMail className="w-6 h-6" />
                  vivekbhattacharya01@gmail.com
                </motion.a>
              </motion.div>
              
              {/* Social Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="manga-panel border-manga-ink dark:border-manga-offwhite p-6"
              >
                <p className="font-marker text-sm mb-3 opacity-60">CONNECT</p>
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
          </>
        )}
      </div>
    </section>
  )
}
