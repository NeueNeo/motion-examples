import { motion } from "motion/react"

export function WaveShape() {
  return (
    <div className="w-20 h-12 overflow-hidden">
      <motion.svg
        viewBox="0 0 80 48"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          animate={{
            d: [
              "M0 24 Q20 10 40 24 T80 24 V48 H0 Z",
              "M0 24 Q20 38 40 24 T80 24 V48 H0 Z",
              "M0 24 Q20 10 40 24 T80 24 V48 H0 Z"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
