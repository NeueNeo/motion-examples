import { motion } from "motion/react"

export function SpringyText() {
  const text = "SPRING"
  
  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          whileHover={{ 
            y: [-4, 4, -2, 2, 0],
            transition: { duration: 0.4 }
          }}
          className="text-xl font-bold text-pink-400 cursor-pointer"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
