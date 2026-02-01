import { motion } from "motion/react"

export function GlitchBlock() {
  return (
    <div className="relative w-16 h-16">
      {/* Base block */}
      <div className="absolute inset-0 bg-zinc-800 rounded" />
      
      {/* Glitch slices */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded overflow-hidden"
          style={{
            top: `${i * 25}%`,
            left: 0,
            right: 0,
            height: "25%",
            background: "linear-gradient(90deg, #18181b, #27272a)"
          }}
          animate={{
            x: [0, i % 2 === 0 ? 8 : -8, 0, i % 2 === 0 ? -4 : 4, 0],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2 + Math.random() * 2,
            times: [0, 0.2, 0.5, 0.7, 1]
          }}
        />
      ))}
      
      {/* RGB ghost */}
      <motion.div
        className="absolute inset-0 rounded"
        style={{ mixBlendMode: "screen" }}
        animate={{
          boxShadow: [
            "0 0 0 transparent",
            "3px 0 0 rgba(255,0,0,0.5), -3px 0 0 rgba(0,255,255,0.5)",
            "0 0 0 transparent"
          ]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3
        }}
      />
    </div>
  )
}
