import { motion } from "motion/react"
import { useState } from "react"

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-16 h-9 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        isOn ? "bg-purple-500" : "bg-zinc-700"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`w-7 h-7 rounded-full bg-white ${isOn ? "ml-auto" : ""}`}
      />
    </div>
  )
}
