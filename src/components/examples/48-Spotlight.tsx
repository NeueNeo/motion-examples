import { motion, useMotionValue } from "motion/react"

export function Spotlight() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      className="relative w-32 h-20 rounded-lg bg-zinc-800 overflow-hidden cursor-pointer"
    >
      <motion.div
        className="absolute w-20 h-20 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <span className="relative z-10 flex items-center justify-center h-full text-white text-sm">
        Move cursor
      </span>
    </motion.div>
  )
}
