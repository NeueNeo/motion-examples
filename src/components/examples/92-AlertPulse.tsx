import { motion } from "motion/react"

export function AlertPulse() {
  return (
    <div className="relative flex items-center gap-2">
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-red-500"
        />
        <div className="relative w-3 h-3 rounded-full bg-red-500" />
      </div>
      <span className="text-red-400 text-xs font-medium">Alert</span>
    </div>
  )
}
