import { motion } from "motion/react"

export function BreathingRing() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-16 h-16 rounded-full border-2 border-purple-500"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute w-12 h-12 rounded-full border-2 border-pink-500"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
      />
    </div>
  )
}
