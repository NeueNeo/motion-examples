import { motion } from "motion/react"

export function LiquidMetal() {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "50% 50% 50% 50% / 50% 50% 50% 50%",
          "30% 70% 70% 30% / 30% 30% 70% 70%"
        ],
        scale: [1, 1.05, 0.95, 1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-16 h-16"
      style={{
        background: "linear-gradient(135deg, #c0c0c0 0%, #ffffff 25%, #8a8a8a 50%, #ffffff 75%, #c0c0c0 100%)",
        backgroundSize: "200% 200%",
        boxShadow: "inset 0 0 20px rgba(255,255,255,0.5), 0 5px 15px rgba(0,0,0,0.3)"
      }}
    />
  )
}
