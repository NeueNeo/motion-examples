import { motion } from "motion/react"
import { useMemo } from "react"

export function Particles() {
  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 60,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 2 + Math.random() * 3
    })), []
  )

  return (
    <div className="relative w-16 h-16">
      {particles.map(p => (
        <motion.div
          key={p.id}
          animate={{
            y: [60, -10],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut"
          }}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: p.x,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 6px #22d3ee"
          }}
        />
      ))}
    </div>
  )
}
