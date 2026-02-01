import { motion } from "motion/react"

export function Orbit() {
  return (
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-yellow-400" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400" />
      </motion.div>
    </div>
  )
}
