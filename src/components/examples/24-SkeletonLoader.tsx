import { motion } from "motion/react"

export function SkeletonLoader() {
  return (
    <div className="w-32 space-y-2">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-3 rounded bg-zinc-700"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        className="h-3 rounded bg-zinc-700 w-3/4"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        className="h-3 rounded bg-zinc-700 w-1/2"
      />
    </div>
  )
}
