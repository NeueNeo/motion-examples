import { motion } from "motion/react"

export function UpdateBadge() {
  return (
    <motion.div
      className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded"
      animate={{
        borderColor: ["rgba(245,158,11,0.3)", "rgba(245,158,11,0.6)", "rgba(245,158,11,0.3)"]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-3 h-3 text-amber-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <path d="M21 12a9 9 0 11-6.219-8.56" />
      </motion.svg>
      <span className="text-[10px] text-amber-400 font-medium">Update</span>
    </motion.div>
  )
}
