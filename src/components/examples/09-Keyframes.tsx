import { motion } from "motion/react"

export function Keyframes() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["10%", "10%", "50%", "50%", "10%"]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600"
    />
  )
}
