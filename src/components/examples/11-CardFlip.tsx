import { motion } from "motion/react"
import { useState } from "react"

export function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="perspective-1000" style={{ perspective: "1000px" }}>
      <motion.div
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-20 h-28 cursor-pointer relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          Front
        </div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          Back
        </div>
      </motion.div>
    </div>
  )
}
