import { motion } from "motion/react"

export function SecureBadge() {
  return (
    <motion.div
      className="flex items-center gap-1.5 px-2 py-1 bg-emerald-900/50 border border-emerald-600/30 rounded"
      whileHover={{
        borderColor: "rgba(16,185,129,0.6)",
        boxShadow: "0 0 10px rgba(16,185,129,0.2)"
      }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-3 h-3 text-emerald-400"
        fill="currentColor"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2v3h1v4H9v-4h1v-3c0-1.1.9-2 2-2zm0 1c-.55 0-1 .45-1 1v3h2V9c0-.55-.45-1-1-1z" />
      </motion.svg>
      <span className="text-[10px] text-emerald-400 font-medium">Secure</span>
    </motion.div>
  )
}
