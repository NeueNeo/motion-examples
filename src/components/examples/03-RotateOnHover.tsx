import { motion } from "motion/react"

export function RotateOnHover() {
  return (
    <motion.div
      whileHover={{ rotate: 180 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 cursor-pointer"
    />
  )
}
