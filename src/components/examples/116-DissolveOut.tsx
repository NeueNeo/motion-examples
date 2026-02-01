import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function DissolveOut() {
  const [visible, setVisible] = useState(true)
  const particles = 20
  
  return (
    <div 
      className="relative w-16 h-16 cursor-pointer"
      onClick={() => setVisible(!visible)}
    >
      <AnimatePresence mode="wait">
        {visible ? (
          <motion.div
            key="solid"
            className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white text-xs"
            exit={{
              opacity: 0,
              filter: "blur(8px)",
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            click
          </motion.div>
        ) : (
          <motion.div key="particles" className="absolute inset-0">
            {[...Array(particles)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-sm"
                style={{
                  left: `${(i % 5) * 25}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  background: i % 2 === 0 ? "#8b5cf6" : "#d946ef"
                }}
                initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 0,
                  x: (Math.random() - 0.5) * 60,
                  y: (Math.random() - 0.5) * 60,
                  rotate: Math.random() * 180
                }}
                transition={{
                  duration: 0.6,
                  delay: Math.random() * 0.2
                }}
              />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-zinc-500 text-[10px]"
            >
              reset
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
