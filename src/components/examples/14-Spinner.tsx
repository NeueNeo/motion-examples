import { motion } from "motion/react"

export function Spinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 rounded-full"
      style={{
        border: "4px solid #3f3f46",
        borderTopColor: "#a855f7"
      }}
    />
  )
}
