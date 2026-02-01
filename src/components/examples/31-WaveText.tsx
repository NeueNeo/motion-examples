import { motion } from "motion/react"

const text = "WAVE"

export function WaveText() {
  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1
          }}
          className="text-2xl font-bold text-white"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
