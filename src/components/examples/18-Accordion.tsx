import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function Accordion() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 bg-zinc-800 rounded-lg text-white text-sm font-medium text-left flex justify-between items-center"
      >
        Toggle
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>▼</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-3 text-sm text-zinc-400">
              Animated content appears here smoothly.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
