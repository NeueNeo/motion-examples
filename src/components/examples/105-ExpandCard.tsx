import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function ExpandCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setExpanded(e => !e)}
      className="bg-zinc-800 rounded-xl cursor-pointer overflow-hidden"
      style={{ width: expanded ? 120 : 60 }}
    >
      <motion.div layout className="p-3">
        <motion.div layout className="w-6 h-6 bg-purple-500 rounded-lg mb-2" />
        <motion.p layout className="text-xs text-white font-medium">Card</motion.p>
        <AnimatePresence>
          {expanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-zinc-400 mt-2"
            >
              More details here
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
