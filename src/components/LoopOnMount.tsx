import { useState, useEffect } from "react"

interface LoopOnMountProps {
  children: React.ReactNode
  delay?: number
}

export function LoopOnMount({ children, delay = 5000 }: LoopOnMountProps) {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setKey(k => k + 1)
    }, delay)
    return () => clearInterval(timer)
  }, [delay])

  return <div key={key}>{children}</div>
}
