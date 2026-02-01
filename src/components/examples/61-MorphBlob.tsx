import { motion } from "motion/react"

export function MorphBlob() {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%"
        ],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500"
    />
  )
}
