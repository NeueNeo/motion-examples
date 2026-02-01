import { motion } from "motion/react"

export function TextGradient() {
  return (
    <motion.span
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="text-xl font-bold bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(90deg, #02d7f2, #ff00aa, #ffeb0b, #02d7f2)",
        backgroundSize: "200% 100%"
      }}
    >
      GRADIENT
    </motion.span>
  )
}
