import { motion } from "motion/react"

export function Spinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 rounded-full border-4 border-zinc-700 border-t-purple-500"
    />
  )
}
