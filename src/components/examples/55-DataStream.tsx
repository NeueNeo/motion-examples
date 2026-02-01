import { motion } from "motion/react"
import { useState, useEffect } from "react"

const chars = "01アイウエオカキクケコ"

export function DataStream() {
  const [streams, setStreams] = useState<string[]>(Array(5).fill(""))

  useEffect(() => {
    const interval = setInterval(() => {
      setStreams(prev => 
        prev.map(() => 
          Array(4).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("")
        )
      )
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-1 font-mono text-xs">
      {streams.map((stream, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
          className="text-green-500 flex flex-col items-center"
        >
          {stream.split("").map((char, j) => (
            <span key={j} style={{ opacity: 1 - j * 0.2 }}>{char}</span>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
