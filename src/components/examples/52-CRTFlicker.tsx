import { motion } from "motion/react"

export function CRTFlicker() {
  return (
    <div className="relative w-24 h-16 bg-black rounded overflow-hidden border border-zinc-700">
      {/* Screen content with jitter */}
      <motion.div 
        animate={{ 
          x: [0, 0.5, -0.5, 0, 1, -1, 0],
          y: [0, -0.5, 0.5, 0]
        }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.span 
          animate={{
            textShadow: [
              "0 0 4px #22c55e",
              "0 0 8px #22c55e, 0 0 12px #22c55e",
              "0 0 4px #22c55e",
              "-2px 0 #ff0000, 2px 0 #00ffff",
              "0 0 4px #22c55e"
            ]
          }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
          className="text-green-500 font-mono text-xs font-bold"
        >
          ONLINE
        </motion.span>
      </motion.div>
      
      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.4) 1px, rgba(0,0,0,0.4) 2px)"
        }}
      />
      
      {/* Heavy flicker overlay */}
      <motion.div
        animate={{ 
          opacity: [0, 0.35, 0, 0.2, 0, 0.45, 0, 0.15, 0, 0, 0.3, 0],
        }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity,
          times: [0, 0.05, 0.1, 0.2, 0.25, 0.3, 0.35, 0.5, 0.6, 0.8, 0.85, 1]
        }}
        className="absolute inset-0 bg-white pointer-events-none"
      />
      
      {/* Color aberration flash */}
      <motion.div
        animate={{ 
          opacity: [0, 0, 0.5, 0, 0],
          x: [-2, 0, 2, 0, 0]
        }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
        className="absolute inset-0 bg-cyan-500 pointer-events-none mix-blend-screen"
      />
      
      {/* Moving scanline - faster, more visible */}
      <motion.div
        animate={{ y: [-20, 80] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-6 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, rgba(255,255,255,0.35), transparent)"
        }}
      />
      
      {/* Secondary scanline */}
      <motion.div
        animate={{ y: [80, -20] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-8 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, rgba(0,255,100,0.2), transparent)"
        }}
      />
      
      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)"
        }}
      />
      
      {/* Screen curvature highlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)"
        }}
      />
    </div>
  )
}
