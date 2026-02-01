import { motion } from "motion/react"
import { useState } from "react"

export function VinylSpin() {
  const [playing, setPlaying] = useState(true)
  
  return (
    <div
      className="relative w-16 h-16 cursor-pointer"
      onClick={() => setPlaying(!playing)}
    >
      {/* Record */}
      <motion.div
        className="absolute inset-0 rounded-full bg-zinc-900"
        style={{
          background: "repeating-radial-gradient(circle at center, #18181b 0px, #18181b 2px, #27272a 2px, #27272a 4px)"
        }}
        animate={{ rotate: playing ? 360 : 0 }}
        transition={{
          duration: 2,
          repeat: playing ? Infinity : 0,
          ease: "linear"
        }}
      >
        {/* Label */}
        <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-gradient-to-br from-red-900 to-red-950 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
        </div>
        {/* Groove highlight */}
        <motion.div
          className="absolute top-1/2 left-0 right-1/2 h-px bg-zinc-600 origin-right"
          style={{ opacity: 0.3 }}
        />
      </motion.div>
      
      {/* Play/pause indicator */}
      <motion.div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-zinc-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {playing ? "▶" : "⏸"}
      </motion.div>
    </div>
  )
}
