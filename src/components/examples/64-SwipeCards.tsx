import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

const cards = ["🔥", "💎", "⚡", "🎯"]

export function SwipeCards() {
  const [stack, setStack] = useState(cards)

  const swipe = () => {
    setStack(prev => [...prev.slice(1), prev[0]])
  }

  return (
    <div className="relative w-14 h-16 cursor-pointer" onClick={swipe}>
      <AnimatePresence mode="popLayout">
        {stack.slice(0, 3).map((card, i) => (
          <motion.div
            key={card}
            layout
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ 
              scale: 1 - i * 0.08,
              y: i * 4,
              opacity: 1 - i * 0.2,
              zIndex: 3 - i
            }}
            exit={{ x: 80, rotate: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute inset-0 bg-zinc-800 border border-zinc-600 rounded-xl flex items-center justify-center text-2xl"
          >
            {card}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
