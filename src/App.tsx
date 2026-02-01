import { ExampleCard } from "@/components/ExampleCard"
import { LoopOnMount } from "@/components/LoopOnMount"
import { FadeIn } from "@/components/examples/01-FadeIn"
import { HoverScale } from "@/components/examples/02-HoverScale"
import { RotateOnHover } from "@/components/examples/03-RotateOnHover"
import { SlideIn } from "@/components/examples/04-SlideIn"
import { Bounce } from "@/components/examples/05-Bounce"
import { Pulse } from "@/components/examples/06-Pulse"
import { Drag } from "@/components/examples/07-Drag"
import { StaggerChildren } from "@/components/examples/08-StaggerChildren"
import { Keyframes } from "@/components/examples/09-Keyframes"
import { ToggleSwitch } from "@/components/examples/10-ToggleSwitch"
import { CardFlip } from "@/components/examples/11-CardFlip"
import { TextReveal } from "@/components/examples/12-TextReveal"
import { HoverLift } from "@/components/examples/13-HoverLift"
import { Spinner } from "@/components/examples/14-Spinner"
import { MorphButton } from "@/components/examples/15-MorphButton"
import { ShakeOnError } from "@/components/examples/16-ShakeOnError"
import { CountUp } from "@/components/examples/17-CountUp"
import { Accordion } from "@/components/examples/18-Accordion"
import { GlowOnHover } from "@/components/examples/19-GlowOnHover"
import { PathDraw } from "@/components/examples/20-PathDraw"

const examples = [
  { title: "Fade In", description: "Initial opacity animation on mount", component: FadeIn, loop: true },
  { title: "Hover Scale", description: "Scale up on hover, down on tap", component: HoverScale, loop: false },
  { title: "Rotate on Hover", description: "Spring rotation on hover", component: RotateOnHover, loop: false },
  { title: "Slide In", description: "Slide from left with spring", component: SlideIn, loop: true },
  { title: "Bounce", description: "Continuous bouncing keyframes", component: Bounce, loop: false },
  { title: "Pulse", description: "Subtle pulsing scale animation", component: Pulse, loop: false },
  { title: "Drag", description: "Draggable with constraints", component: Drag, loop: false },
  { title: "Stagger Children", description: "Sequential child animations", component: StaggerChildren, loop: true },
  { title: "Keyframes", description: "Multi-property keyframe sequence", component: Keyframes, loop: false },
  { title: "Toggle Switch", description: "Layout animation for toggle", component: ToggleSwitch, loop: false },
  { title: "Card Flip", description: "3D flip on click", component: CardFlip, loop: false },
  { title: "Text Reveal", description: "Character-by-character reveal", component: TextReveal, loop: true },
  { title: "Hover Lift", description: "Lift with shadow on hover", component: HoverLift, loop: false },
  { title: "Spinner", description: "Continuous rotation loader", component: Spinner, loop: false },
  { title: "Morph Button", description: "Layout animation on click", component: MorphButton, loop: false },
  { title: "Shake on Error", description: "Shake animation on trigger", component: ShakeOnError, loop: false },
  { title: "Count Up", description: "Animated number counting", component: CountUp, loop: true },
  { title: "Accordion", description: "AnimatePresence height animation", component: Accordion, loop: false },
  { title: "Glow on Hover", description: "Box shadow glow effect", component: GlowOnHover, loop: false },
  { title: "Path Draw", description: "SVG path drawing animation", component: PathDraw, loop: false },
]

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Motion Examples</h1>
        <p className="text-zinc-400">20 interactive Framer Motion examples. Hover, click, and explore.</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {examples.map((example, i) => (
          <ExampleCard
            key={i}
            title={example.title}
            description={example.description}
          >
            {example.loop ? (
              <LoopOnMount delay={5000}>
                <example.component />
              </LoopOnMount>
            ) : (
              <example.component />
            )}
          </ExampleCard>
        ))}
      </div>
    </div>
  )
}
