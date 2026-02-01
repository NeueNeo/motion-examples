import { motion } from "motion/react"

export function GhostButton() {
  return (
    <motion.button
      className="relative px-4 py-2 text-xs font-medium text-zinc-400 rounded overflow-hidden"
      whileHover={{ color: "#fff" }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        className="absolute inset-0 bg-zinc-700 rounded"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative">Ghost</span>
    </motion.button>
  )
}
