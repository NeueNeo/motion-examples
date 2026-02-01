import { motion } from "motion/react"

export function BouncyLetters() {
  const text = "HELLO"
  
  return (
    <div className="flex cursor-pointer">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          whileHover={{ 
            y: -8,
            color: "#22d3ee",
            transition: { type: "spring", stiffness: 500, damping: 10 }
          }}
          className="text-xl font-bold text-white"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
