import { motion } from "motion/react"

export function HoverScale() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 cursor-pointer"
    />
  )
}
