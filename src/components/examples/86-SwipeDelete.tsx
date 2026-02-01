import { motion, useMotionValue, useTransform } from "motion/react"

export function SwipeDelete() {
  const x = useMotionValue(0)
  const bg = useTransform(x, [-60, 0], ["#ef4444", "#27272a"])
  const opacity = useTransform(x, [-60, -30, 0], [1, 0.5, 0])

  return (
    <div className="relative w-24 h-10 overflow-hidden rounded-lg">
      {/* Delete background */}
      <motion.div 
        style={{ backgroundColor: bg }}
        className="absolute inset-0 flex items-center justify-end pr-2"
      >
        <motion.span style={{ opacity }} className="text-white text-xs">🗑️</motion.span>
      </motion.div>
      {/* Draggable item */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -60, right: 0 }}
        dragElastic={0.1}
        style={{ x }}
        className="absolute inset-0 bg-zinc-700 rounded-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <span className="text-white text-xs">← Swipe</span>
      </motion.div>
    </div>
  )
}
