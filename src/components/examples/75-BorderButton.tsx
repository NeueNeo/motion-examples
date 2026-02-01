import { motion } from "motion/react"

export function BorderButton() {
  return (
    <motion.button
      initial="idle"
      whileHover="hover"
      className="relative px-5 py-2 bg-transparent text-cyan-400 font-semibold overflow-hidden"
    >
      <span className="relative z-10">HOVER</span>
      {/* Top */}
      <motion.span 
        variants={{ idle: { width: 0 }, hover: { width: "100%" } }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 h-[2px] bg-cyan-400"
      />
      {/* Right */}
      <motion.span 
        variants={{ idle: { height: 0 }, hover: { height: "100%" } }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="absolute top-0 right-0 w-[2px] bg-cyan-400"
      />
      {/* Bottom */}
      <motion.span 
        variants={{ idle: { width: 0 }, hover: { width: "100%" } }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="absolute bottom-0 right-0 h-[2px] bg-cyan-400"
      />
      {/* Left */}
      <motion.span 
        variants={{ idle: { height: 0 }, hover: { height: "100%" } }}
        transition={{ duration: 0.2, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-[2px] bg-cyan-400"
      />
    </motion.button>
  )
}
