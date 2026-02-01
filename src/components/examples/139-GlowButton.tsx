import { motion } from "motion/react"

export function GlowButton() {
  return (
    <motion.button
      className="relative px-4 py-2 bg-cyan-600 text-white text-xs font-bold rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-cyan-400"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: [0, 0.5, 0],
          transition: { duration: 0.8, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute -inset-1 rounded-lg opacity-0"
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 20px rgba(6,182,212,0.7), 0 0 40px rgba(6,182,212,0.4)",
        }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative">Activate</span>
    </motion.button>
  )
}
