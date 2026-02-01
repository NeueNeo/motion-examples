import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function Shatter() {
  const [shattered, setShattered] = useState(false)

  const pieces = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    x: (i % 3 - 1) * 40 + (Math.random() - 0.5) * 20,
    y: Math.floor(i / 3 - 1) * 40 - Math.random() * 30,
    rotate: (Math.random() - 0.5) * 180
  }))

  return (
    <div 
      className="relative w-14 h-14 cursor-pointer"
      onClick={() => setShattered(s => !s)}
    >
      <AnimatePresence mode="wait">
        {!shattered ? (
          <motion.div
            key="whole"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">CLICK</span>
          </motion.div>
        ) : (
          <div key="pieces" className="absolute inset-0">
            {pieces.map((piece) => (
              <motion.div
                key={piece.id}
                initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                animate={{ 
                  x: piece.x, 
                  y: piece.y, 
                  rotate: piece.rotate,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500"
                style={{
                  left: `${(piece.id % 3) * 33}%`,
                  top: `${Math.floor(piece.id / 3) * 33}%`
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
