import { motion } from "motion/react"

export function WarningFlash() {
  return (
    <motion.div
      animate={{
        backgroundColor: ["rgba(239,68,68,0.2)", "rgba(239,68,68,0.4)", "rgba(239,68,68,0.2)"],
        borderColor: ["#ef4444", "#fca5a5", "#ef4444"]
      }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className="px-3 py-2 border-2 rounded flex items-center gap-2"
    >
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 0.4, repeat: Infinity }}
        className="text-red-500"
      >
        ⚠
      </motion.span>
      <span className="text-red-400 text-xs font-bold font-mono">CRITICAL</span>
    </motion.div>
  )
}
