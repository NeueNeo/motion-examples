import { motion } from "motion/react"
import { useMemo } from "react"

export function NoSignal() {
  const bars = useMemo(() => 
    [...Array(20)].map(() => ({
      colors: [...Array(8)].map(() => 
        ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000'][Math.floor(Math.random() * 8)]
      )
    })), 
  [])

  return (
    <div className="relative w-20 h-14 overflow-hidden rounded bg-black">
      {/* Color bars */}
      <div className="absolute inset-0 flex">
        {['#fff', '#ff0', '#0ff', '#0f0', '#f0f', '#f00', '#00f', '#000'].map((color, i) => (
          <div key={i} className="flex-1 h-full" style={{ background: color }} />
        ))}
      </div>
      
      {/* Static overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ mixBlendMode: "overlay" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      >
        {bars.map((bar, y) => (
          <div key={y} className="flex h-[5%]">
            {bar.colors.map((color, x) => (
              <motion.div
                key={x}
                className="flex-1"
                style={{ background: color }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.05,
                  repeat: Infinity,
                  delay: Math.random() * 0.1
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>
      
      {/* NO SIGNAL text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <span className="text-white text-[10px] font-bold tracking-wider bg-black/50 px-2">
          NO SIGNAL
        </span>
      </motion.div>
    </div>
  )
}
