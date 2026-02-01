import { motion } from "motion/react"

export function Portal() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-16 h-16 rounded-full border-2 border-purple-500/50"
        style={{ borderStyle: "dashed" }}
      />
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute w-12 h-12 rounded-full border-2 border-cyan-400/70"
      />
      {/* Inner vortex */}
      <motion.div
        animate={{ rotate: 360, scale: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #8b5cf6)",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
        }}
      />
      {/* Center dot */}
      <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
    </div>
  )
}
