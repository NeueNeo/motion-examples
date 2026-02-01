import { motion } from "motion/react"
import { useState } from "react"

export function LiquidFill() {
  const [filled, setFilled] = useState(false)

  return (
    <div 
      className="relative w-12 h-16 border-2 border-cyan-500 rounded-lg overflow-hidden cursor-pointer bg-zinc-900"
      onClick={() => setFilled(f => !f)}
    >
      <motion.div
        animate={{ y: filled ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-cyan-400"
      >
        {/* Wave effect */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 left-0 right-0 h-4"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)",
            backgroundSize: "20px 8px"
          }}
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-mono text-white/70 z-10">
          {filled ? "100%" : "0%"}
        </span>
      </div>
    </div>
  )
}
