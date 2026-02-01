import { motion } from "motion/react"

export function CircularProgress() {
  const radius = 20
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        {/* Background circle */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="#27272a"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <motion.circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute text-xs font-bold text-cyan-400">75%</span>
    </div>
  )
}
