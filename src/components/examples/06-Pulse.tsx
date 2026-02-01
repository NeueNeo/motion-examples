import { motion } from "motion/react"

export function Pulse() {
  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500"
    />
  )
}
