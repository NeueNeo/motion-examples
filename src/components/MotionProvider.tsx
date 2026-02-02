import { LazyMotion, domMax } from "motion/react"
import type { ReactNode } from "react"

/**
 * LazyMotion provider with domMax features
 * 
 * This wraps the app with LazyMotion for better bundle optimization.
 * Using domMax because this demo site needs all motion features including:
 * - Layout animations
 * - Drag gestures
 * - AnimatePresence
 * 
 * For production apps that only need basic animations,
 * use domAnimation instead (~15kb vs ~25kb)
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  )
}
