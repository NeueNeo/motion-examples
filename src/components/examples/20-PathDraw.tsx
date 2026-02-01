import { motion } from "motion/react"

export function PathDraw() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      <motion.circle
        cx="40"
        cy="40"
        r="30"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
