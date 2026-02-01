import { motion } from "motion/react"
import { useState } from "react"

export function IconMorph() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        {isPlaying ? (
          <>
            <motion.rect
              initial={{ x: 6 }} animate={{ x: 6 }}
              width="4" height="14" y="5" rx="1"
              layoutId="icon-left"
            />
            <motion.rect
              initial={{ x: 14 }} animate={{ x: 14 }}
              width="4" height="14" y="5" rx="1"
              layoutId="icon-right"
            />
          </>
        ) : (
          <motion.path
            d="M8 5v14l11-7z"
            layoutId="icon-play"
          />
        )}
      </svg>
    </button>
  )
}
