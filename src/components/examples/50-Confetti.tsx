import { motion, AnimatePresence } from "motion/react"
import { useState, useMemo } from "react"

const colors = ["#a855f7", "#ec4899", "#f97316", "#22c55e", "#3b82f6", "#eab308", "#06b6d4"]

interface Particle {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  color: string
  shape: "circle" | "square" | "star"
}

export function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([])

  const burst = () => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200,
      y: -100 - Math.random() * 80,
      rotation: Math.random() * 720 - 360,
      scale: 0.5 + Math.random() * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: ["circle", "square", "star"][Math.floor(Math.random() * 3)] as Particle["shape"]
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 1200)
  }

  return (
    <div className="relative">
      <button onClick={burst} className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium">
        🎉 Celebrate
      </button>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
            animate={{
              x: p.x,
              y: p.y,
              scale: p.scale,
              opacity: 0,
              rotate: p.rotation
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ backgroundColor: p.color }}
            className={`absolute top-0 left-1/2 w-3 h-3 ${p.shape === "circle" ? "rounded-full" : p.shape === "square" ? "rounded-sm" : "rotate-45"}`}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
