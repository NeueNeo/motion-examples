import { motion, useMotionValue, useTransform } from "motion/react"

export function MagneticDock() {
  const mouseX = useMotionValue(0)
  
  const icons = ["🏠", "📁", "⚙️", "🎵"]
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => mouseX.set(-100)}
      className="flex items-end gap-1 px-2 py-1 bg-zinc-800/80 rounded-2xl backdrop-blur"
    >
      {icons.map((icon, i) => (
        <DockIcon key={i} icon={icon} index={i} mouseX={mouseX} />
      ))}
    </motion.div>
  )
}

function DockIcon({ icon, index, mouseX }: { icon: string; index: number; mouseX: any }) {
  const baseX = index * 36 + 18
  const distance = useTransform(mouseX, (x: number) => Math.abs(x - baseX))
  const scale = useTransform(distance, [0, 50, 100], [1.5, 1.2, 1])
  const y = useTransform(distance, [0, 50, 100], [-8, -4, 0])

  return (
    <motion.div
      style={{ scale, y }}
      className="w-8 h-8 bg-zinc-700 rounded-xl flex items-center justify-center cursor-pointer"
    >
      <span className="text-base">{icon}</span>
    </motion.div>
  )
}
