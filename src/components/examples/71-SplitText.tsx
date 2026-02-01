import { motion } from "motion/react"

export function SplitText() {
  const text = "SPLIT"
  
  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -20, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ 
            delay: i * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="text-xl font-bold text-white"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
