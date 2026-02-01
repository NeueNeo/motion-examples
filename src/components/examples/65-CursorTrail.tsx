import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"

export function CursorTrail() {
  const mouseX = useMotionValue(40)
  const mouseY = useMotionValue(30)
  
  const trail1X = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const trail1Y = useSpring(mouseY, { stiffness: 300, damping: 30 })
  const trail2X = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const trail2Y = useSpring(mouseY, { stiffness: 200, damping: 30 })
  const trail3X = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const trail3Y = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div 
      onMouseMove={handleMouse}
      className="relative w-20 h-16 bg-zinc-800/50 rounded-lg overflow-hidden cursor-none"
    >
      <motion.div
        style={{ x: trail3X, y: trail3Y, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-4 h-4 rounded-full bg-purple-500/40"
      />
      <motion.div
        style={{ x: trail2X, y: trail2Y, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-3 h-3 rounded-full bg-pink-500/60"
      />
      <motion.div
        style={{ x: trail1X, y: trail1Y, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-2 h-2 rounded-full bg-cyan-400"
      />
    </div>
  )
}
