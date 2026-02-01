import { motion, useMotionValue, useTransform } from "motion/react"

export function ParallaxLayers() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const layer1X = useTransform(x, [-50, 50], [-5, 5])
  const layer1Y = useTransform(y, [-50, 50], [-5, 5])
  const layer2X = useTransform(x, [-50, 50], [-10, 10])
  const layer2Y = useTransform(y, [-50, 50], [-10, 10])
  const layer3X = useTransform(x, [-50, 50], [-15, 15])
  const layer3Y = useTransform(y, [-50, 50], [-15, 15])

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <div 
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="relative w-20 h-20 cursor-pointer"
    >
      <motion.div 
        style={{ x: layer1X, y: layer1Y }}
        className="absolute inset-2 bg-cyan-500/30 rounded-lg"
      />
      <motion.div 
        style={{ x: layer2X, y: layer2Y }}
        className="absolute inset-4 bg-purple-500/50 rounded-lg"
      />
      <motion.div 
        style={{ x: layer3X, y: layer3Y }}
        className="absolute inset-6 bg-pink-500 rounded-lg"
      />
    </div>
  )
}
