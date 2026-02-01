import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function FlipMenu() {
  const [open, setOpen] = useState(false)
  const items = ["Home", "Work", "Contact"]

  return (
    <div className="relative" style={{ perspective: "500px" }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="px-4 py-2 bg-zinc-700 text-white text-sm rounded-lg font-medium"
      >
        Menu ▾
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute top-full left-0 mt-1 bg-zinc-800 rounded-lg overflow-hidden shadow-xl"
          >
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white cursor-pointer whitespace-nowrap"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
