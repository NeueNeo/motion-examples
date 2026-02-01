import { motion } from "motion/react"

export function HoloBadge() {
  return (
    <div className="relative">
      <motion.div
        className="relative px-3 py-1 rounded-full text-xs font-medium overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
        animate={{
          boxShadow: [
            "0 0 10px rgba(139,92,246,0.3), inset 0 0 10px rgba(236,72,153,0.2)",
            "0 0 20px rgba(139,92,246,0.5), inset 0 0 20px rgba(236,72,153,0.3)",
            "0 0 10px rgba(139,92,246,0.3), inset 0 0 10px rgba(236,72,153,0.2)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Holographic shine */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            transform: "skewX(-20deg)"
          }}
          animate={{ x: [-60, 60] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        
        {/* Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)"
          }}
        />
        
        <span className="relative text-white/90">VERIFIED</span>
      </motion.div>
    </div>
  )
}
