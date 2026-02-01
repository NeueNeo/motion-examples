import { motion } from "motion/react"

export function NeonButton() {
  return (
    <motion.button
      className="relative px-4 py-2 bg-transparent border-2 border-pink-500 text-pink-500 text-xs font-bold uppercase tracking-wider rounded"
      whileHover={{
        backgroundColor: "rgba(236,72,153,0.1)",
        boxShadow: "0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899, inset 0 0 10px rgba(236,72,153,0.3)",
        textShadow: "0 0 8px #ec4899"
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      Neon
    </motion.button>
  )
}
