import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

const colors = ["#a855f7", "#ec4899", "#f97316", "#22c55e", "#3b82f6"]

export function Confetti() {
  const [particles, setParticles] = useState<number[]>([])

  const burst = () => {
    const ids = Array.from({ length: 12 }, (_, i) => Date.now() + i)
    setParticles(ids)
    setTimeout(() => setParticles([]), 1000)
  }

  return (
    <div className="relative">
      <button onClick={burst} className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium">
        🎉 Celebrate
      </button>
      <AnimatePresence>
        {particles.map((id, i) => (
          <motion.div
            key={id}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: (Math.random() - 0.5) * 100,
              y: -60 - Math.random() * 40,
              scale: 0,
              opacity: 0
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ backgroundColor: colors[i % colors.length] }}
            className="absolute top-0 left-1/2 w-2 h-2 rounded-full"
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
