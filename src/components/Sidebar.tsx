import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Section {
  title: string
  count: number
}

interface SidebarProps {
  sections: Section[]
  activeSection: string | null
  onSectionClick: (title: string) => void
  collapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
}

export function Sidebar({ sections, activeSection, onSectionClick, collapsed, onCollapsedChange }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const totalExamples = sections.reduce((sum, s) => sum + s.count, 0)

  const NavContent = () => (
    <nav className="flex flex-col gap-1 p-2">
      {sections.map((section) => {
        const isActive = activeSection === section.title
        return (
          <button
            key={section.title}
            onClick={() => {
              onSectionClick(section.title)
              setMobileOpen(false)
            }}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors text-left",
              "hover:bg-zinc-800",
              isActive ? "bg-zinc-800 text-white" : "text-zinc-400"
            )}
          >
            <span className="flex-1 truncate">{section.title}</span>
            {!collapsed && (
              <span className="text-xs text-zinc-600">{section.count}</span>
            )}
          </button>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-zinc-800 rounded-lg lg:hidden"
      >
        <Menu className="w-5 h-5 text-zinc-400" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-zinc-900 border-r border-zinc-800 z-50 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div>
                <h2 className="font-semibold text-white">Motion Examples</h2>
                <p className="text-xs text-zinc-500">{totalExamples} examples</p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 hover:bg-zinc-800 rounded"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <NavContent />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 60 : 240 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="hidden lg:flex fixed top-0 left-0 bottom-0 bg-zinc-900 border-r border-zinc-800 flex-col z-30"
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="font-semibold text-white text-sm">Motion</h2>
              <p className="text-xs text-zinc-500">{totalExamples} examples</p>
            </motion.div>
          )}
          <button
            onClick={() => onCollapsedChange(!collapsed)}
            className="p-1.5 hover:bg-zinc-800 rounded ml-auto"
          >
            <motion.div
              animate={{ rotate: collapsed ? 0 : 180 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </motion.div>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {collapsed ? (
            <nav className="flex flex-col gap-1 p-2">
              {sections.map((section) => {
                const emoji = section.title.split(" ")[0]
                const isActive = activeSection === section.title
                return (
                  <button
                    key={section.title}
                    onClick={() => onSectionClick(section.title)}
                    title={section.title}
                    className={cn(
                      "flex items-center justify-center p-2 rounded-md transition-colors",
                      "hover:bg-zinc-800",
                      isActive ? "bg-zinc-800" : ""
                    )}
                  >
                    <span className="text-base">{emoji}</span>
                  </button>
                )
              })}
            </nav>
          ) : (
            <NavContent />
          )}
        </div>
      </motion.aside>
    </>
  )
}
