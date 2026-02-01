import { motion } from "motion/react"

export function LiveBadge() {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-red-600 rounded">
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-white"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-[10px] font-bold text-white uppercase tracking-wider">
        Live
      </span>
    </div>
  )
}
