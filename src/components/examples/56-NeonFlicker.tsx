import { motion } from "motion/react"

export function NeonFlicker() {
  return (
    <motion.div
      animate={{
        textShadow: [
          "0 0 4px #ff00aa, 0 0 11px #ff00aa, 0 0 19px #ff00aa",
          "0 0 4px #ff00aa, 0 0 10px #ff00aa, 0 0 18px #ff00aa",
          "0 0 2px #ff00aa, 0 0 8px #ff00aa, 0 0 15px #ff00aa",
          "0 0 4px #ff00aa, 0 0 12px #ff00aa, 0 0 22px #ff00aa",
          "none",
          "0 0 4px #ff00aa, 0 0 11px #ff00aa, 0 0 19px #ff00aa",
        ],
        opacity: [1, 1, 0.8, 1, 0.2, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        times: [0, 0.2, 0.4, 0.6, 0.65, 0.7]
      }}
      className="text-xl font-bold text-pink-500 font-mono"
    >
      NEON
    </motion.div>
  )
}
