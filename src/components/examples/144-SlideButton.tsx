import { motion } from "motion/react"

export function SlideButton() {
  return (
    <motion.button
      className="relative px-4 py-2 bg-zinc-800 text-zinc-300 text-xs font-medium rounded overflow-hidden group"
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.span
        className="relative"
        initial={{ color: "#d4d4d8" }}
        whileHover={{ color: "#ffffff" }}
      >
        Slide In
      </motion.span>
    </motion.button>
  )
}
