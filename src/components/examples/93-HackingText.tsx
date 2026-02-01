import { motion } from "motion/react"
import { useState, useEffect } from "react"

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

export function HackingText() {
  const target = "ACCESS"
  const [text, setText] = useState("??????")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= target.length) {
      setTimeout(() => { setText("??????"); setIndex(0) }, 2000)
      return
    }
    
    const scramble = setInterval(() => {
      setText(prev => 
        target.slice(0, index) + 
        Array(target.length - index).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("")
      )
    }, 50)

    const reveal = setTimeout(() => {
      clearInterval(scramble)
      setIndex(i => i + 1)
      setText(target.slice(0, index + 1) + "?".repeat(target.length - index - 1))
    }, 400)

    return () => { clearInterval(scramble); clearTimeout(reveal) }
  }, [index])

  return (
    <motion.span 
      animate={{ opacity: [1, 0.8, 1] }}
      transition={{ duration: 0.1, repeat: Infinity }}
      className="font-mono text-lg text-green-500 font-bold"
    >
      {text}
    </motion.span>
  )
}
