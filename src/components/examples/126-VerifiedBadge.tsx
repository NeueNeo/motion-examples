import { motion } from "motion/react"

export function VerifiedBadge() {
  return (
    <motion.div
      className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center"
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-3 h-3 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M5 12l5 5L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.svg>
    </motion.div>
  )
}
