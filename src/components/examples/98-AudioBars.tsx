import { motion } from "motion/react"

export function AudioBars() {
  const bars = [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5]
  
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          animate={{ 
            scaleY: [height, 1, height * 0.5, height],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="w-2 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t origin-bottom"
          style={{ height: 48 }}
        />
      ))}
    </div>
  )
}
