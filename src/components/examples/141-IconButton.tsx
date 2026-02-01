import { motion } from "motion/react"
import { useState } from "react"

export function IconButton() {
  const [liked, setLiked] = useState(false)
  
  return (
    <motion.button
      className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"
      whileHover={{ backgroundColor: "#3f3f46" }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setLiked(!liked)}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill={liked ? "#ef4444" : "none"}
        stroke={liked ? "#ef4444" : "#a1a1aa"}
        strokeWidth={2}
        animate={liked ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </motion.svg>
    </motion.button>
  )
}
