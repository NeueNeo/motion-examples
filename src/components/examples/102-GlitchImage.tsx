import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function GlitchImage() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const slices = Array.from({ length: 5 }, (_, i) => i)

  return (
    <div 
      className="relative w-14 h-14 overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
    >
      {/* Base gradient (simulating an image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500" />
      
      {/* Glitch slices */}
      {glitch && slices.map(i => (
        <motion.div
          key={i}
          animate={{ 
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [1, 0.8, 1]
          }}
          transition={{ duration: 0.15, repeat: 2 }}
          className="absolute left-0 right-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"
          style={{
            top: `${i * 20}%`,
            height: "20%",
            clipPath: `inset(0 0 0 0)`
          }}
        />
      ))}
      
      {/* RGB offset layers */}
      {glitch && (
        <>
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 0.1, repeat: 3 }}
            className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-400 to-red-500 mix-blend-multiply opacity-50"
          />
          <motion.div
            animate={{ x: [3, -3, 3] }}
            transition={{ duration: 0.1, repeat: 3 }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-500 mix-blend-screen opacity-50"
          />
        </>
      )}
    </div>
  )
}
