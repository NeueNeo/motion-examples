import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

export function Odometer() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => (v + 1) % 10)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-8 h-10 bg-zinc-800 rounded overflow-hidden border border-zinc-600">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          exit={{ y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl font-mono font-bold text-cyan-400">{value}</span>
        </motion.div>
      </AnimatePresence>
      {/* Highlight line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-cyan-500/30" />
    </div>
  )
}
