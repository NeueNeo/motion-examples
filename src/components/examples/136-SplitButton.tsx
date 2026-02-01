import { motion } from "motion/react"
import { useState } from "react"

export function SplitButton() {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null)
  
  return (
    <div className="flex">
      <motion.button
        className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-l"
        animate={{ 
          backgroundColor: hovered === 'left' ? '#4f46e5' : '#4338ca',
          scale: hovered === 'left' ? 1.02 : 1
        }}
        onHoverStart={() => setHovered('left')}
        onHoverEnd={() => setHovered(null)}
        whileTap={{ scale: 0.98 }}
      >
        Save
      </motion.button>
      <motion.button
        className="px-2 py-1.5 bg-indigo-700 text-white rounded-r border-l border-indigo-500"
        animate={{ 
          backgroundColor: hovered === 'right' ? '#4338ca' : '#3730a3',
          scale: hovered === 'right' ? 1.05 : 1
        }}
        onHoverStart={() => setHovered('right')}
        onHoverEnd={() => setHovered(null)}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: hovered === 'right' ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ▼
        </motion.span>
      </motion.button>
    </div>
  )
}
