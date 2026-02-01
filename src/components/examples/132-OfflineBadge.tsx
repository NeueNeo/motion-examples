import { motion } from "motion/react"

export function OfflineBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full">
      <motion.div
        className="w-2 h-2 rounded-full bg-zinc-500"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="text-xs text-zinc-500">Offline</span>
    </div>
  )
}
