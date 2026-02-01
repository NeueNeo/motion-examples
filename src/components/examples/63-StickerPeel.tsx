import { motion } from "motion/react"
import { useState } from "react"

export function StickerPeel() {
  const [peeled, setPeeled] = useState(false)

  return (
    <div 
      className="relative w-16 h-16 cursor-pointer perspective-500"
      onClick={() => setPeeled(!peeled)}
    >
      <motion.div
        animate={{ 
          rotateX: peeled ? -30 : 0,
          rotateY: peeled ? 20 : 0,
          y: peeled ? -8 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: "bottom left", transformStyle: "preserve-3d" }}
        className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg"
      >
        <span className="text-2xl">⭐</span>
      </motion.div>
      {/* Shadow */}
      <motion.div
        animate={{ 
          opacity: peeled ? 0.3 : 0,
          scaleX: peeled ? 0.9 : 1
        }}
        className="absolute inset-0 bg-black rounded-lg -z-10 translate-y-2"
      />
    </div>
  )
}
