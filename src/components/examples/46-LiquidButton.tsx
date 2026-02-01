import { motion } from "motion/react"

export function LiquidButton() {
  return (
    <motion.button
      whileHover={{ 
        borderRadius: ["12px", "20px 8px 20px 8px", "8px 20px 8px 20px", "12px"]
      }}
      transition={{ duration: 0.6, repeat: Infinity }}
      className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium"
      style={{ borderRadius: "12px" }}
    >
      Liquid
    </motion.button>
  )
}
