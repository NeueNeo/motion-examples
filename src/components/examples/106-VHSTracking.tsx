import { motion } from "motion/react"

export function VHSTracking() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="text-sm font-mono text-white tracking-wider"
        animate={{
          x: [0, -2, 3, -1, 0],
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 cyan, -2px 0 0 magenta",
            "-3px 0 0 cyan, 3px 0 0 magenta",
            "1px 0 0 cyan, -1px 0 0 magenta",
            "0 0 0 transparent"
          ]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear"
        }}
      >
        TRACKING
      </motion.div>
      {/* Tracking lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
        }}
        animate={{ y: [0, 4] }}
        transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
