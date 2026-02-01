import { motion } from "motion/react"

export function Heartbeat() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1, 1.2, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        times: [0, 0.1, 0.3, 0.4, 1]
      }}
      className="text-4xl"
    >
      ❤️
    </motion.div>
  )
}
