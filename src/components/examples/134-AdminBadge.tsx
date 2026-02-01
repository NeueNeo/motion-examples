import { motion } from "motion/react"

export function AdminBadge() {
  return (
    <motion.div
      className="flex items-center gap-1 px-2 py-0.5 bg-red-950 border border-red-800/50 rounded"
      whileHover={{ 
        borderColor: "rgba(239,68,68,0.8)",
        boxShadow: "0 0 10px rgba(239,68,68,0.3)"
      }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-3 h-3 text-red-500"
        fill="currentColor"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </motion.svg>
      <span className="text-[10px] text-red-400 font-bold uppercase">Admin</span>
    </motion.div>
  )
}
