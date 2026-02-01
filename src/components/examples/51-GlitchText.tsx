import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function GlitchText() {
  const [glitching, setGlitching] = useState(false)
  const text = "SYSTEM"

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 800)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="relative cursor-pointer select-none"
      onMouseEnter={() => setGlitching(true)}
      onMouseLeave={() => setGlitching(false)}
    >
      {/* Base text with jitter */}
      <motion.span 
        animate={glitching ? { 
          x: [0, -2, 3, -1, 2, 0],
          skewX: [0, -2, 3, -1, 0]
        } : {}}
        transition={{ duration: 0.4, repeat: glitching ? Infinity : 0 }}
        className="text-xl font-bold text-cyan-400 font-mono relative z-10"
      >
        {text}
      </motion.span>
      
      {glitching && (
        <>
          {/* Red channel - top slice */}
          <motion.span
            animate={{ 
              x: [-4, 6, -3, 5, -2, 4, 0], 
              opacity: [0.9, 0.7, 0.9, 0.6, 0.8, 0.7, 0.9],
              scaleX: [1, 1.02, 0.98, 1.01, 1]
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute inset-0 text-xl font-bold text-red-500 font-mono"
            style={{ clipPath: "inset(0% 0 70% 0)" }}
          >
            {text}
          </motion.span>
          
          {/* Red channel - middle slice */}
          <motion.span
            animate={{ 
              x: [5, -4, 6, -2, 3, -5, 0], 
              opacity: [0.8, 0.9, 0.6, 0.8, 0.7, 0.9, 0.8]
            }}
            transition={{ duration: 0.4, repeat: Infinity, delay: 0.05 }}
            className="absolute inset-0 text-xl font-bold text-red-500 font-mono"
            style={{ clipPath: "inset(30% 0 40% 0)" }}
          >
            {text}
          </motion.span>
          
          {/* Blue channel - top */}
          <motion.span
            animate={{ 
              x: [4, -5, 3, -4, 2, -3, 0], 
              opacity: [0.8, 0.6, 0.9, 0.7, 0.8, 0.6, 0.8]
            }}
            transition={{ duration: 0.45, repeat: Infinity, delay: 0.02 }}
            className="absolute inset-0 text-xl font-bold text-blue-500 font-mono"
            style={{ clipPath: "inset(15% 0 55% 0)" }}
          >
            {text}
          </motion.span>
          
          {/* Blue channel - bottom */}
          <motion.span
            animate={{ 
              x: [-6, 4, -5, 3, -4, 5, 0], 
              opacity: [0.9, 0.7, 0.8, 0.6, 0.9, 0.7, 0.9],
              scaleX: [1, 0.98, 1.03, 0.99, 1]
            }}
            transition={{ duration: 0.35, repeat: Infinity, delay: 0.08 }}
            className="absolute inset-0 text-xl font-bold text-blue-500 font-mono"
            style={{ clipPath: "inset(60% 0 10% 0)" }}
          >
            {text}
          </motion.span>
          
          {/* White flash slice */}
          <motion.span
            animate={{ 
              x: [-8, 8, -6, 6, 0], 
              opacity: [0, 0.6, 0, 0.4, 0]
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
            className="absolute inset-0 text-xl font-bold text-white font-mono"
            style={{ clipPath: "inset(45% 0 45% 0)" }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}
