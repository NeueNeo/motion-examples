import { motion } from "motion/react"

export function RevealText() {
  return (
    <motion.div 
      initial="idle"
      whileHover="hover"
      className="relative overflow-hidden cursor-pointer"
    >
      <span className="text-lg font-bold text-white">Hover Me</span>
      <motion.div
        variants={{
          idle: { x: "-100%" },
          hover: { x: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-purple-500 flex items-center justify-center"
      >
        <span className="text-lg font-bold text-white">Hello!</span>
      </motion.div>
    </motion.div>
  )
}
