import { motion } from "motion/react"

export function PingDot() {
  return (
    <div className="relative">
      <div className="w-4 h-4 rounded-full bg-green-500" />
      <motion.div
        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-green-500"
      />
    </div>
  )
}
