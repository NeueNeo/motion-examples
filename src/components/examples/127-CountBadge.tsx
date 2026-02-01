import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

export function CountBadge() {
  const [count, setCount] = useState(3)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev % 12) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
      <span className="text-zinc-400 text-sm">📬</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-red-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0, y: 5 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          <span className="text-[10px] font-bold text-white">{count}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
