import { motion } from "motion/react"

export function SqueezeButton() {
  return (
    <motion.button
      whileHover={{ scaleX: 1.1, scaleY: 0.9 }}
      whileTap={{ scaleX: 0.9, scaleY: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="px-5 py-2 rounded-lg bg-orange-500 text-white font-medium"
    >
      Squeeze
    </motion.button>
  )
}
