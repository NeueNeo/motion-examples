import { motion } from "motion/react"

export function CorridorRecede() {
  return (
    <div className="relative w-20 h-20" style={{ perspective: "200px" }}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-zinc-600"
          style={{
            inset: `${i * 8}px`,
            transformStyle: "preserve-3d"
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            borderColor: ["#3f3f46", "#52525b", "#3f3f46"]
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Distant light */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-zinc-500"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
