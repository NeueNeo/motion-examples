import { motion } from "motion/react"
import { useState } from "react"

export function PopIn() {
  const [show, setShow] = useState(true)

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <motion.div
        key={show ? "a" : "b"}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setShow(s => !s)}
        className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg"
      >
        <span className="text-white text-xl">{show ? "✓" : "+"}</span>
      </motion.div>
    </div>
  )
}
