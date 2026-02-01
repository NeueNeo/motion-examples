import { motion } from "motion/react"

export function FadeIn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500"
    />
  )
}
