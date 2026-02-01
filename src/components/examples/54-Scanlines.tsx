import { motion } from "motion/react"

export function Scanlines() {
  return (
    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-500" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg z-10">ICE</span>
      </div>
      
      {/* Static scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)"
        }}
      />
      
      {/* Animated scan beam */}
      <motion.div
        animate={{ y: [-100, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
        }}
      />
    </div>
  )
}
