import { motion } from "motion/react"

export function Radar() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-2 border-green-500/30" />
      <div className="absolute inset-2 rounded-full border-2 border-green-500/30" />
      <div className="absolute inset-4 rounded-full border-2 border-green-500/30" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(34,197,94,0.5) 30deg, transparent 60deg)" }}
      />
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-green-500" />
    </div>
  )
}
