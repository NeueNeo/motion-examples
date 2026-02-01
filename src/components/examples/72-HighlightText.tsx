import { motion } from "motion/react"

export function HighlightText() {
  return (
    <span className="relative inline-block text-lg font-semibold">
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute left-0 bottom-1 h-3 bg-yellow-400/60"
      />
      <span className="relative text-white">Important</span>
    </span>
  )
}
