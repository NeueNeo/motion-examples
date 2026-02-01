import { motion } from "motion/react"
import { useState } from "react"

export function ChromaticAberration() {
  const [hovered, setHovered] = useState(false)
  const text = "BREACH"

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Red channel */}
      <motion.span
        animate={{ x: hovered ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute text-xl font-bold font-mono text-red-500 mix-blend-screen"
        style={{ opacity: hovered ? 0.8 : 0 }}
      >
        {text}
      </motion.span>
      
      {/* Green channel (base) */}
      <span className="text-xl font-bold font-mono text-white relative z-10">
        {text}
      </span>
      
      {/* Blue channel */}
      <motion.span
        animate={{ x: hovered ? 3 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-0 text-xl font-bold font-mono text-cyan-400 mix-blend-screen"
        style={{ opacity: hovered ? 0.8 : 0 }}
      >
        {text}
      </motion.span>
    </div>
  )
}
