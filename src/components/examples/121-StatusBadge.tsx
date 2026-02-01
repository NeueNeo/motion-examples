import { motion } from "motion/react"

export function StatusBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full">
      <motion.div
        className="w-2 h-2 rounded-full bg-emerald-400"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0 0 rgba(52,211,153,0.4)",
            "0 0 0 6px rgba(52,211,153,0)",
            "0 0 0 0 rgba(52,211,153,0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="text-xs text-zinc-300">Online</span>
    </div>
  )
}
