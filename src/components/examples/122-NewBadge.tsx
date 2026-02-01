import { motion } from "motion/react"

export function NewBadge() {
  return (
    <motion.div
      className="relative px-2 py-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded text-[10px] font-bold text-white uppercase tracking-wider"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      New
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded overflow-hidden"
        style={{ mixBlendMode: "overlay" }}
      >
        <motion.div
          className="absolute inset-y-0 w-4 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          animate={{ x: [-20, 50] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />
      </motion.div>
    </motion.div>
  )
}
