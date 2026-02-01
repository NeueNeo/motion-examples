import { motion } from "motion/react"

export function Wormhole() {
  const rings = 8
  
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {[...Array(rings)].map((_, i) => {
        const size = 80 - i * 8
        const delay = i * 0.15
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `rgba(147, 51, 234, ${0.3 + i * 0.08})`
            }}
            animate={{
              scale: [1, 0.9, 1.1, 1],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, delay },
              rotate: { duration: 8 - i * 0.5, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, repeat: Infinity, delay }
            }}
          />
        )
      })}
      {/* Center glow */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-purple-500"
        animate={{
          boxShadow: [
            "0 0 10px #9333ea, 0 0 20px #9333ea",
            "0 0 20px #9333ea, 0 0 40px #9333ea",
            "0 0 10px #9333ea, 0 0 20px #9333ea"
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  )
}
