import { motion } from "motion/react"

export function DNAHelix() {
  const pairs = 6
  
  return (
    <div className="relative h-20 w-16 flex items-center justify-center">
      {[...Array(pairs)].map((_, i) => {
        const y = (i - (pairs - 1) / 2) * 12
        
        return (
          <div key={i} className="absolute" style={{ top: `calc(50% + ${y}px)` }}>
            {/* Left node */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-cyan-400"
              animate={{
                x: [-12, 12, -12],
                scale: [1, 0.6, 1],
                opacity: [1, 0.4, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
            {/* Right node */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-pink-400"
              animate={{
                x: [12, -12, 12],
                scale: [0.6, 1, 0.6],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
            {/* Connecting bar */}
            <motion.div
              className="absolute h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 origin-center"
              style={{ width: 24, left: -12, top: 3 }}
              animate={{ rotate: [0, 180, 360] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
