import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function DrawerSlide() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)}
        className="px-3 py-1 bg-zinc-700 rounded text-sm text-white"
      >
        {open ? "Close" : "Open"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 60, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-32 bg-zinc-800 rounded-b overflow-hidden"
          >
            <div className="p-2 text-xs text-zinc-400">
              Drawer content slides in smoothly
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
