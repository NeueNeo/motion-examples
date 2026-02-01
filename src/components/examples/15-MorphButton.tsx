import { motion } from "motion/react"
import { useState } from "react"

export function MorphButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.button
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      animate={{ borderRadius: isExpanded ? 16 : 50 }}
      className="bg-purple-500 text-white font-medium overflow-hidden"
      style={{ padding: isExpanded ? "12px 24px" : "12px 20px" }}
    >
      <motion.span layout>
        {isExpanded ? "Click to collapse" : "Expand"}
      </motion.span>
    </motion.button>
  )
}
