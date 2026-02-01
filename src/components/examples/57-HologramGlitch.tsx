import { motion } from "motion/react"

export function HologramGlitch() {
  return (
    <div className="relative">
      {/* Base text */}
      <motion.div
        animate={{ 
          y: [0, -1, 0, 1, 0],
          skewX: [0, -0.5, 0, 0.5, 0]
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        className="text-xl font-bold font-mono text-cyan-400"
        style={{
          textShadow: "0 0 10px rgba(0, 255, 255, 0.5)"
        }}
      >
        HOLO
      </motion.div>
      
      {/* Horizontal glitch lines */}
      <motion.div
        animate={{ 
          opacity: [0, 0, 1, 0],
          scaleX: [1, 1.1, 1, 1]
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div 
          className="absolute w-full h-[2px] bg-cyan-400/50 top-1/4"
          style={{ transform: "translateX(-10%)" }}
        />
        <div 
          className="absolute w-full h-[1px] bg-white/30 top-1/2"
          style={{ transform: "translateX(5%)" }}
        />
        <div 
          className="absolute w-full h-[2px] bg-cyan-400/50 top-3/4"
          style={{ transform: "translateX(-5%)" }}
        />
      </motion.div>
    </div>
  )
}
