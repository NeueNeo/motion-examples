import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function Toast() {
  const [show, setShow] = useState(false)

  const trigger = () => {
    setShow(true)
    setTimeout(() => setShow(false), 2000)
  }

  return (
    <div className="relative">
      <button 
        onClick={trigger}
        className="px-3 py-1.5 bg-zinc-700 text-white text-xs rounded font-medium"
      >
        Show Toast
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-green-500 text-white text-xs rounded shadow-lg whitespace-nowrap"
          >
            ✓ Success!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
