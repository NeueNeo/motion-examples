import { motion } from "motion/react"

export function GradientButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-5 py-2 rounded-lg font-semibold text-white overflow-hidden"
    >
      <motion.div
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)",
          backgroundSize: "200% 100%"
        }}
      />
      <span className="relative z-10">Gradient</span>
    </motion.button>
  )
}
