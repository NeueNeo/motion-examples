import { motion } from "motion/react"

export function CircuitPulse() {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" className="overflow-visible">
      {/* Circuit paths */}
      <path
        d="M10 30 H30 V15 H50 V30 H70"
        fill="none"
        stroke="#334155"
        strokeWidth="2"
      />
      <path
        d="M10 45 H25 V30"
        fill="none"
        stroke="#334155"
        strokeWidth="2"
      />
      <path
        d="M55 30 V45 H70"
        fill="none"
        stroke="#334155"
        strokeWidth="2"
      />
      
      {/* Animated pulse - main line */}
      <motion.circle
        r="3"
        fill="#22d3ee"
        filter="url(#glow)"
        animate={{
          offsetDistance: ["0%", "100%"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          offsetPath: "path('M10 30 H30 V15 H50 V30 H70')"
        }}
      />
      
      {/* Pulse - bottom left */}
      <motion.circle
        r="2"
        fill="#a855f7"
        filter="url(#glow)"
        animate={{
          offsetDistance: ["0%", "100%"]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
        style={{
          offsetPath: "path('M10 45 H25 V30')"
        }}
      />
      
      {/* Pulse - bottom right */}
      <motion.circle
        r="2"
        fill="#22d3ee"
        filter="url(#glow)"
        animate={{
          offsetDistance: ["0%", "100%"]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          delay: 0.8
        }}
        style={{
          offsetPath: "path('M55 30 V45 H70')"
        }}
      />
      
      {/* Nodes */}
      <circle cx="30" cy="30" r="3" fill="#334155" />
      <circle cx="50" cy="30" r="3" fill="#334155" />
      <circle cx="25" cy="30" r="2" fill="#334155" />
      <circle cx="55" cy="30" r="2" fill="#334155" />
      
      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
