import { motion } from "motion/react"

export function LoadingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.15
          }}
          className="w-3 h-3 rounded-full bg-purple-500"
        />
      ))}
    </div>
  )
}
