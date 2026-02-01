import { motion } from "motion/react"

export function BlurIn() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-2xl font-bold text-white"
    >
      Focus
    </motion.div>
  )
}
