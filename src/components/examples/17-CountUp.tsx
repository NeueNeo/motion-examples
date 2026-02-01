import { motion, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect } from "react"

export function CountUp() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, 100, { duration: 2 })
    return controls.stop
  }, [])

  return (
    <motion.span className="text-4xl font-bold text-white tabular-nums">
      {rounded}
    </motion.span>
  )
}
