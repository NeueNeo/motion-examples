import { motion } from "motion/react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function StaggerChildren() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex gap-2"
    >
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={item}
          className="w-8 h-8 rounded bg-gradient-to-br from-teal-400 to-cyan-500"
        />
      ))}
    </motion.div>
  )
}
