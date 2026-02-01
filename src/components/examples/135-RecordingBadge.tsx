import { motion } from "motion/react"

export function RecordingBadge() {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 rounded-full border border-zinc-700">
      <motion.div
        className="w-2 h-2 rounded-full bg-red-500"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [1, 0.6, 1]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-[10px] text-zinc-300 font-medium">REC</span>
      <motion.span 
        className="text-[10px] text-zinc-500 font-mono"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        0:42
      </motion.span>
    </div>
  )
}
