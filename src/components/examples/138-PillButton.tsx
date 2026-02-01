import { motion } from "motion/react"
import { useState } from "react"

export function PillButton() {
  const [selected, setSelected] = useState(false)
  
  return (
    <motion.button
      className="px-4 py-1.5 rounded-full text-xs font-medium border"
      animate={{
        backgroundColor: selected ? "#8b5cf6" : "transparent",
        borderColor: selected ? "#8b5cf6" : "#52525b",
        color: selected ? "#fff" : "#a1a1aa"
      }}
      whileHover={{ 
        borderColor: "#8b5cf6",
        scale: 1.03
      }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setSelected(!selected)}
    >
      <motion.span
        animate={{ x: selected ? [0, -2, 2, 0] : 0 }}
        transition={{ duration: 0.3 }}
      >
        {selected ? "✓ Selected" : "Select"}
      </motion.span>
    </motion.button>
  )
}
