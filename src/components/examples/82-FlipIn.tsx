import { motion } from "motion/react"

export function FlipIn() {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
      className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
    >
      <span className="text-white font-bold">OK</span>
    </motion.div>
  )
}
