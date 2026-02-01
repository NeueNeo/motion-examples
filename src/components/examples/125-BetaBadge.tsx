import { motion } from "motion/react"

export function BetaBadge() {
  return (
    <motion.div
      className="px-2 py-0.5 rounded border text-[10px] font-mono uppercase"
      style={{
        borderColor: "rgba(139,92,246,0.5)",
        color: "#a78bfa"
      }}
      animate={{
        borderColor: ["rgba(139,92,246,0.3)", "rgba(139,92,246,0.6)", "rgba(139,92,246,0.3)"],
        boxShadow: [
          "0 0 5px rgba(139,92,246,0.1)",
          "0 0 10px rgba(139,92,246,0.2)",
          "0 0 5px rgba(139,92,246,0.1)"
        ]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Beta
    </motion.div>
  )
}
