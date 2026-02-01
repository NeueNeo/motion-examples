import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

const colors = ["#3b82f6", "#ef4444", "#eab308"]

interface Particle {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  color: string
  duration: number
}

export function ClaimButton() {
  const [claimed, setClaimed] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  const handleClaim = () => {
    if (claimed) return
    setClaimed(true)
    
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 50 + Math.random() * 0.5
      const distance = 80 + Math.random() * 100
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotation: Math.random() * 720 - 360,
        scale: 0.4 + Math.random() * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 0.8 + Math.random() * 0.6
      }
    })
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 3000)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={handleClaim}
        className="px-8 py-2.5 text-white font-semibold rounded-full relative overflow-hidden"
        style={{
          background: claimed 
            ? "linear-gradient(135deg, #00cc66 0%, #009944 100%)"
            : "linear-gradient(135deg, #0066ff 0%, #0044cc 100%)",
          boxShadow: claimed
            ? "0 4px 20px rgba(0, 204, 102, 0.4)"
            : "0 4px 20px rgba(0, 102, 255, 0.4)"
        }}
        whileHover={!claimed ? { scale: 1.05, y: -2 } : {}}
        whileTap={!claimed ? { scale: 0.95 } : {}}
        animate={{
          background: claimed 
            ? "linear-gradient(135deg, #00cc66 0%, #009944 100%)"
            : "linear-gradient(135deg, #0066ff 0%, #0044cc 100%)"
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={claimed ? "claimed" : "claim"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {claimed ? "Claimed" : "Claim"}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{
              x: p.x,
              y: p.y,
              scale: p.scale,
              opacity: 0,
              rotate: p.rotation
            }}
            transition={{ 
              duration: p.duration, 
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-3 h-3"
            style={{ backgroundColor: p.color }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
