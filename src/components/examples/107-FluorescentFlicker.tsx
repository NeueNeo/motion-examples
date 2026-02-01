import { motion } from "motion/react"

export function FluorescentFlicker() {
  return (
    <div className="relative">
      <motion.div
        className="px-4 py-2 bg-zinc-900 rounded text-xs font-mono"
        style={{ color: "#e0ffe0" }}
        animate={{
          opacity: [1, 0.7, 1, 1, 0.5, 1, 1, 1, 0.8, 1],
          textShadow: [
            "0 0 10px #90EE90, 0 0 20px #90EE90",
            "0 0 5px #90EE90",
            "0 0 15px #90EE90, 0 0 30px #90EE90",
            "0 0 10px #90EE90",
            "0 0 2px #90EE90",
            "0 0 20px #90EE90, 0 0 40px #90EE90",
            "0 0 10px #90EE90",
            "0 0 10px #90EE90",
            "0 0 5px #90EE90",
            "0 0 10px #90EE90"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          times: [0, 0.1, 0.15, 0.3, 0.35, 0.4, 0.5, 0.7, 0.75, 1]
        }}
      >
        EXIT
      </motion.div>
      {/* Subtle hum glow */}
      <motion.div
        className="absolute inset-0 rounded pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 20px rgba(144,238,144,0.3)",
            "0 0 30px rgba(144,238,144,0.4)",
            "0 0 20px rgba(144,238,144,0.3)"
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  )
}
