import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function Ripple() {
  const [ripples, setRipples] = useState<number[]>([])

  const addRipple = () => {
    const id = Date.now()
    setRipples(r => [...r, id])
    setTimeout(() => setRipples(r => r.filter(x => x !== id)), 600)
  }

  return (
    <button
      onClick={addRipple}
      className="relative w-24 h-10 rounded-lg bg-purple-500 text-white font-medium overflow-hidden"
    >
      Click me
      <AnimatePresence>
        {ripples.map(id => (
          <motion.span
            key={id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-white"
          />
        ))}
      </AnimatePresence>
    </button>
  )
}
