import { motion } from "motion/react"

export function UnderlineHover() {
  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      className="relative cursor-pointer"
    >
      <span className="text-white font-medium">Hover me</span>
      <motion.div
        variants={{
          idle: { scaleX: 0, originX: 0 },
          hover: { scaleX: 1, originX: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
      />
    </motion.div>
  )
}
