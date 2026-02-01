import { motion } from "motion/react"

export function FillButton() {
  return (
    <motion.button
      initial="idle"
      whileHover="hover"
      className="relative px-5 py-2 border-2 border-purple-500 text-purple-400 font-semibold overflow-hidden rounded-lg"
    >
      <motion.div
        variants={{ 
          idle: { y: "100%" },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 bg-purple-500"
      />
      <motion.span 
        variants={{
          idle: { color: "#c084fc" },
          hover: { color: "#ffffff" }
        }}
        className="relative z-10"
      >
        FILL ME
      </motion.span>
    </motion.button>
  )
}
