import { motion } from "motion/react"

export function AiBadge() {
  return (
    <div
      className="relative px-2 py-1 rounded-md overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)"
      }}
    >
      {/* Animated gradient border - CSS animation for seamless loop */}
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
          animation: "spin 6s linear infinite"
        }}
      />
      <div className="absolute inset-[1px] rounded-md bg-zinc-950" />
      
      <div className="relative flex items-center gap-1">
        <motion.span
          className="text-[10px]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <span 
          className="text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          AI
        </span>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
