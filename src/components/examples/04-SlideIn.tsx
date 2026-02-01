import { motion } from "motion/react"

export function SlideIn() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-20 h-20 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500"
    />
  )
}
