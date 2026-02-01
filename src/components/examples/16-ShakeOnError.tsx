import { motion } from "motion/react"
import { useState } from "react"

export function ShakeOnError() {
  const [shake, setShake] = useState(false)

  return (
    <motion.button
      onClick={() => {
        setShake(true)
        setTimeout(() => setShake(false), 500)
      }}
      animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium"
    >
      Click to shake
    </motion.button>
  )
}
