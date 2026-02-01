import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function NotificationBadge() {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => setCount(c => c + 1)}
      className="relative w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center"
    >
      <span className="text-xl">🔔</span>
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
