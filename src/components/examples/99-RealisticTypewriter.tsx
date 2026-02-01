import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function RealisticTypewriter() {
  const text = "Hello_"
  const [displayed, setDisplayed] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let i = 0
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
        // Random delay between 80-200ms for realism
        setTimeout(type, 80 + Math.random() * 120)
      } else {
        // Pause then restart
        setTimeout(() => { i = 0; setDisplayed(""); type() }, 2000)
      }
    }
    type()
    
    // Cursor blink
    const blink = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(blink)
  }, [])

  return (
    <div className="font-mono text-lg text-green-400">
      {displayed}
      <motion.span
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-2 h-5 bg-green-400 ml-0.5 align-middle"
      />
    </div>
  )
}
