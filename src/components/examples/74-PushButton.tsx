import { motion } from "motion/react"

export function PushButton() {
  return (
    <motion.button
      whileTap={{ y: 4, boxShadow: "0 0 0 #000" }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="px-5 py-2 bg-green-500 text-white font-bold rounded-lg"
      style={{ boxShadow: "0 4px 0 #166534" }}
    >
      PUSH
    </motion.button>
  )
}
