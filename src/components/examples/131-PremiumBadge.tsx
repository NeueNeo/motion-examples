import { motion } from "motion/react"

export function PremiumBadge() {
  return (
    <motion.div
      className="relative flex items-center gap-1 px-2 py-1 rounded-md overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%)" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        💎
      </motion.span>
      <span className="text-[10px] font-bold bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        PREMIUM
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        animate={{ x: [-100, 100] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
      />
    </motion.div>
  )
}
