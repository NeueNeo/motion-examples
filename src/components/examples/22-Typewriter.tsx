import { motion } from "motion/react"
import { useState, useEffect } from "react"

const text = "Hello World"

export function Typewriter() {
  const [displayText, setDisplayText] = useState("")
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i))
        i++
      } else {
        i = 0
        setDisplayText("")
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="font-mono text-lg text-white">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        |
      </motion.span>
    </div>
  )
}
