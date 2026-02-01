import { motion } from "motion/react"
import { useState } from "react"

export function FoldCard() {
  const [folded, setFolded] = useState(true)

  return (
    <div 
      className="relative cursor-pointer"
      style={{ perspective: "500px" }}
      onClick={() => setFolded(f => !f)}
    >
      {/* Bottom half (stationary) */}
      <div className="w-16 h-8 bg-zinc-700 rounded-b-lg flex items-center justify-center">
        <span className="text-xs text-zinc-400">CLICK</span>
      </div>
      {/* Top half (folds) */}
      <motion.div
        animate={{ rotateX: folded ? -180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
        className="absolute top-0 w-16 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-t-lg -translate-y-full"
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden">
          <span className="text-white text-lg">📧</span>
        </div>
      </motion.div>
    </div>
  )
}
