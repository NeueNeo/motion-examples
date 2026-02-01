import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function SuccessButton() {
  const [success, setSuccess] = useState(false)
  
  const handleClick = () => {
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
  }

  return (
    <motion.button
      className="relative px-4 py-2 text-white text-xs font-medium rounded min-w-[90px] overflow-hidden"
      animate={{ backgroundColor: success ? "#10b981" : "#3b82f6" }}
      whileHover={{ scale: success ? 1 : 1.03 }}
      whileTap={{ scale: success ? 1 : 0.97 }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            className="flex items-center justify-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <motion.path
                d="M5 12l5 5L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
            Done
          </motion.div>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Confirm
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
