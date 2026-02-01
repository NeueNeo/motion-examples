import { motion } from "motion/react"
import { useState } from "react"

export function Checkbox() {
  const [checked, setChecked] = useState(false)

  return (
    <motion.div
      onClick={() => setChecked(c => !c)}
      animate={{
        backgroundColor: checked ? "#22c55e" : "#27272a",
        borderColor: checked ? "#22c55e" : "#52525b"
      }}
      className="w-6 h-6 rounded border-2 cursor-pointer flex items-center justify-center"
    >
      <motion.svg
        initial={false}
        animate={{ 
          pathLength: checked ? 1 : 0,
          opacity: checked ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path d="M5 12l5 5L20 7" />
      </motion.svg>
    </motion.div>
  )
}
