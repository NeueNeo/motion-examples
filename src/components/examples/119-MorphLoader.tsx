import { motion } from "motion/react"

export function MorphLoader() {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600"
        animate={{
          borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 0.8, 1, 0.8, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
