import { motion } from "motion/react"

export function Bounce() {
  return (
    <motion.div
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"
    />
  )
}
