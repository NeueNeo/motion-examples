import { motion } from "motion/react"

export function RevealText() {
  return (
    <div className="relative overflow-hidden group cursor-pointer">
      <span className="text-lg font-bold text-white">Hover Me</span>
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-purple-500 flex items-center justify-center"
      >
        <span className="text-lg font-bold text-white">Hello!</span>
      </motion.div>
    </div>
  )
}
