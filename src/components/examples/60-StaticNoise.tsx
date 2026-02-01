import { motion } from "motion/react"
import { useEffect, useRef } from "react"

export function StaticNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    
    const noise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value * 0.2     // R (cyan tint)
        data[i + 1] = value * 0.8 // G
        data[i + 2] = value       // B
        data[i + 3] = 40          // A (low opacity)
      }
      
      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(noise)
    }
    
    noise()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="relative w-20 h-16 rounded overflow-hidden bg-zinc-900 border border-cyan-500/30">
      <canvas 
        ref={canvasRef} 
        width={80} 
        height={64}
        className="absolute inset-0"
      />
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 0.1, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="text-cyan-400 font-mono text-xs font-bold">
          NO SIGNAL
        </span>
      </motion.div>
    </div>
  )
}
