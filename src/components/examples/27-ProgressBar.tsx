import { motion } from "motion/react"

export function ProgressBar() {
  return (
    <div className="w-32 h-2 rounded-full bg-zinc-800 overflow-hidden">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
      />
    </div>
  )
}
