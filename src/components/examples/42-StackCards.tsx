import { motion } from "motion/react"
import { useState } from "react"

const colors = ["#a855f7", "#ec4899", "#f97316", "#22c55e"]

export function StackCards() {
  const [cards, setCards] = useState(colors)

  const cycleCards = () => {
    setCards(c => [...c.slice(1), c[0]])
  }

  return (
    <div className="relative w-16 h-20" onClick={cycleCards}>
      {cards.map((color, i) => (
        <motion.div
          key={color}
          layout
          style={{ backgroundColor: color, zIndex: cards.length - i }}
          className="absolute w-16 h-20 rounded-lg cursor-pointer"
          animate={{
            y: i * 4,
            scale: 1 - i * 0.05,
            opacity: 1 - i * 0.2
          }}
        />
      ))}
    </div>
  )
}
