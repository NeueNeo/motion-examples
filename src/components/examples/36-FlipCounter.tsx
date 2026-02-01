import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

export function FlipCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount(c => (c + 1) % 100), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-12 h-16 bg-zinc-800 rounded overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-2xl font-mono text-white"
        >
          {count.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
