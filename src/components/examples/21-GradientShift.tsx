import { motion } from "motion/react"

export function GradientShift() {
  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(45deg, #a855f7, #ec4899)",
          "linear-gradient(45deg, #ec4899, #f97316)",
          "linear-gradient(45deg, #f97316, #22c55e)",
          "linear-gradient(45deg, #22c55e, #3b82f6)",
          "linear-gradient(45deg, #3b82f6, #a855f7)",
        ]
      }}
      transition={{ duration: 5, repeat: Infinity }}
      className="w-20 h-20 rounded-lg"
    />
  )
}
