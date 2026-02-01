import { motion } from "motion/react"

export function ShineEffect() {
  return (
    <motion.div
      whileHover="hover"
      className="relative w-20 h-12 bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
    >
      <span className="text-white font-medium text-sm z-10">SHINE</span>
      <motion.div
        variants={{
          hover: { x: ["-100%", "200%"] }
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 w-1/2"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
        }}
      />
    </motion.div>
  )
}
