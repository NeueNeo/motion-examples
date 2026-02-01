import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

const words = ["Amazing", "Beautiful", "Creative", "Dynamic"]

export function FlipWords() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % words.length), 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="block text-xl font-bold text-purple-400"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
