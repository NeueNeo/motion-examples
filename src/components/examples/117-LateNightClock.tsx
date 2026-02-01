import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function LateNightClock() {
  const [time, setTime] = useState({ h: 3, m: 47 })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        const newM = prev.m + 1
        if (newM >= 60) {
          return { h: (prev.h + 1) % 24, m: 0 }
        }
        return { ...prev, m: newM }
      })
    }, 2000) // Speed up for demo
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, '0')
  
  return (
    <div className="relative">
      <motion.div
        className="font-mono text-2xl tracking-wider"
        style={{ color: "#ff6b6b" }}
        animate={{
          textShadow: [
            "0 0 10px rgba(255,107,107,0.5)",
            "0 0 20px rgba(255,107,107,0.8)",
            "0 0 10px rgba(255,107,107,0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span key={time.h} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          {pad(time.h)}
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          :
        </motion.span>
        <motion.span key={time.m} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {pad(time.m)}
        </motion.span>
      </motion.div>
      <motion.div
        className="text-[8px] text-zinc-600 text-center mt-1 font-mono"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        AM
      </motion.div>
    </div>
  )
}
