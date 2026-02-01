import { motion } from "motion/react"

export function DropIn() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 1
      }}
      className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
    >
      <span className="text-white text-xl">📦</span>
    </motion.div>
  )
}
