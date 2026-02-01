import { motion } from "motion/react"

export function ProBadge() {
  return (
    <motion.div
      className="relative px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        border: "1px solid rgba(255,215,0,0.3)"
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-md"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)",
        }}
        animate={{ x: [-100, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
        PRO
      </span>
    </motion.div>
  )
}
