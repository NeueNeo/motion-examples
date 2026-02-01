import { motion } from "motion/react"

export function EKGLine() {
  return (
    <div className="w-20 h-10 overflow-hidden">
      <motion.svg
        viewBox="0 0 100 40"
        className="w-[200%] h-full"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M0 20 L10 20 L15 20 L20 10 L25 30 L30 5 L35 35 L40 20 L50 20 L60 20 L65 20 L70 10 L75 30 L80 5 L85 35 L90 20 L100 20"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 20 L10 20 L15 20 L20 10 L25 30 L30 5 L35 35 L40 20 L50 20 L60 20 L65 20 L70 10 L75 30 L80 5 L85 35 L90 20 L100 20"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "blur(4px)", opacity: 0.5 }}
        />
      </motion.svg>
    </div>
  )
}
