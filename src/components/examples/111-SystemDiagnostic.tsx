import { motion } from "motion/react"
import { useState, useEffect } from "react"

const lines = [
  "INIT CORE...",
  "MEM CHECK: 64GB OK",
  "NEURAL LINK: ACTIVE",
  "ICE WALL: ONLINE",
  "STATUS: READY"
]

export function SystemDiagnostic() {
  const [currentLine, setCurrentLine] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % (lines.length + 2))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-[10px] leading-tight text-green-400 w-24 h-16 overflow-hidden">
      {lines.slice(0, Math.min(currentLine, lines.length)).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1"
        >
          <span className="text-green-600">&gt;</span>
          <span>{line}</span>
        </motion.div>
      ))}
      {currentLine < lines.length && (
        <motion.span
          className="inline-block w-1.5 h-2.5 bg-green-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </div>
  )
}
