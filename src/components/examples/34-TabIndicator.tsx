import { motion } from "motion/react"
import { useState } from "react"

const tabs = ["Home", "About", "Contact"]

export function TabIndicator() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex gap-1 bg-zinc-800 p-1 rounded-lg relative">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          className="relative px-3 py-1 text-sm font-medium text-white z-10"
        >
          {tab}
          {active === i && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-purple-500 rounded-md -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
