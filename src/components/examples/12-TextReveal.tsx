import { motion } from "motion/react"

const text = "Hello!"

export function TextReveal() {
  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-2xl font-bold text-white"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
