import { motion } from "motion/react"

export function TypingBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 rounded-full">
      <div className="flex gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-zinc-400"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15
            }}
          />
        ))}
      </div>
      <span className="text-[10px] text-zinc-400">typing</span>
    </div>
  )
}
