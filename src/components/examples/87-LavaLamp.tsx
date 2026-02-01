import { motion } from "motion/react"

export function LavaLamp() {
  return (
    <div className="relative w-12 h-20 bg-zinc-900 rounded-full overflow-hidden border border-zinc-700">
      <motion.div
        animate={{
          y: [40, 0, 40],
          scaleX: [1, 1.3, 1],
          scaleY: [1, 0.8, 1],
          borderRadius: ["50%", "40%", "50%"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-t from-pink-600 to-pink-400"
      />
      <motion.div
        animate={{
          y: [0, 35, 0],
          scaleX: [1, 1.2, 1],
          scaleY: [1, 0.9, 1],
          borderRadius: ["50%", "45%", "50%"]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-t from-purple-600 to-purple-400"
      />
    </div>
  )
}
