import { motion } from "motion/react"

export function OutlineButton() {
  return (
    <motion.button
      className="px-4 py-2 bg-transparent border border-zinc-600 text-zinc-400 text-xs font-medium rounded"
      whileHover={{
        borderColor: "#a78bfa",
        color: "#a78bfa",
        boxShadow: "inset 0 0 0 1px #a78bfa"
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      Outline
    </motion.button>
  )
}
