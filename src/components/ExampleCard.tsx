import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { createPortal } from "react-dom"

interface ExampleCardProps {
  title: string
  description: string
  children: React.ReactNode
  source?: string
}

function Toast({ message }: { message: string }) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="fixed bottom-6 right-6 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl flex items-center gap-2 z-50"
    >
      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm text-white font-medium">{message}</span>
    </motion.div>,
    document.body
  )
}

export function ExampleCard({ title, description, children, source }: ExampleCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!source) return
    try {
      await navigator.clipboard.writeText(source)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      <Card className="h-full flex flex-col overflow-hidden group">
        <CardHeader className="border-b border-[var(--color-border)] relative">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {source && (
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
              title="Copy code"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          )}
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center p-6 min-h-[200px]">
          {children}
        </CardContent>
      </Card>
      <AnimatePresence>
        {copied && <Toast message="Code copied" />}
      </AnimatePresence>
    </>
  )
}
