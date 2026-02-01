import { motion } from "motion/react"

export function GlowOnHover() {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)"
      }}
      transition={{ duration: 0.3 }}
      className="w-20 h-20 rounded-lg bg-purple-500 cursor-pointer"
    />
  )
}
