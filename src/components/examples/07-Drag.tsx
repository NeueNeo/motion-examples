import { motion } from "motion/react"

export function Drag() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileDrag={{ scale: 1.1 }}
      className="w-16 h-16 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 cursor-grab active:cursor-grabbing"
    />
  )
}
