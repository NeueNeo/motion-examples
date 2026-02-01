import { useState, useEffect } from "react"

const chars = "!@#$%^&*()_+"
const target = "DECODE"

export function TextScramble() {
  const [text, setText] = useState(target.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join(""))

  useEffect(() => {
    let frame = 0
    const interval = setInterval(() => {
      setText(
        target.split("").map((char, i) => 
          frame > i * 3 ? char : chars[Math.floor(Math.random() * chars.length)]
        ).join("")
      )
      frame++
      if (frame > target.length * 3 + 10) frame = 0
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-mono text-lg text-green-400">{text}</span>
  )
}
