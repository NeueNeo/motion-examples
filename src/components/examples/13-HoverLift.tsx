import { motion } from "motion/react"

export function HoverLift() {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-24 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 cursor-pointer shadow-lg"
    />
  )
}
