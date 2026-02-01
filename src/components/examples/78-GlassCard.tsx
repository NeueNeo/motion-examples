import { motion } from "motion/react"

export function GlassCard() {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.2)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-20 h-14 rounded-xl flex items-center justify-center cursor-pointer"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <span className="text-white/80 text-sm font-medium">Glass</span>
    </motion.div>
  )
}
