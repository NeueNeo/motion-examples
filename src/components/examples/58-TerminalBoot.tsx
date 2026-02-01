import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

const bootSequence = [
  "INIT...",
  "LOADING",
  "DECRYPT",
  "ACCESS",
  "GRANTED"
]

export function TerminalBoot() {
  const [index, setIndex] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        if (prev >= bootSequence.length - 1) {
          setTimeout(() => {
            setCycle(c => c + 1)
            setIndex(0)
          }, 1500)
          return prev
        }
        return prev + 1
      })
    }, 400)
    return () => clearInterval(interval)
  }, [cycle])

  return (
    <div className="font-mono text-sm w-20 h-6 flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${cycle}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className={index === bootSequence.length - 1 ? "text-green-500" : "text-cyan-400"}
        >
          {bootSequence[index]}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
