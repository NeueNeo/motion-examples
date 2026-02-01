import { motion } from "motion/react"

export function InfinityLoader() {
  return (
    <div className="relative w-16 h-8">
      <motion.div
        animate={{
          x: [0, 24, 48, 24, 0],
          y: [0, -8, 0, 8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
      />
      <motion.div
        animate={{
          x: [48, 24, 0, 24, 48],
          y: [0, 8, 0, -8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"
      />
    </div>
  )
}
