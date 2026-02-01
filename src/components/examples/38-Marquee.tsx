import { motion } from "motion/react"

export function Marquee() {
  const text = "MOTION IS MAGIC • "
  
  return (
    <div className="w-32 overflow-hidden">
      <motion.div
        animate={{ x: [0, -200] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        <span className="text-sm font-medium text-white">{text.repeat(4)}</span>
      </motion.div>
    </div>
  )
}
