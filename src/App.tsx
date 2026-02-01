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
import { GradientShift } from "@/components/examples/21-GradientShift"
import { Typewriter } from "@/components/examples/22-Typewriter"
import { FloatingElement } from "@/components/examples/23-FloatingElement"
import { SkeletonLoader } from "@/components/examples/24-SkeletonLoader"
import { NotificationBadge } from "@/components/examples/25-NotificationBadge"
import { Ripple } from "@/components/examples/26-Ripple"
import { ProgressBar } from "@/components/examples/27-ProgressBar"
import { TiltCard } from "@/components/examples/28-TiltCard"
import { ElasticButton } from "@/components/examples/29-ElasticButton"
import { BlurIn } from "@/components/examples/30-BlurIn"
import { WaveText } from "@/components/examples/31-WaveText"
import { MagneticButton } from "@/components/examples/32-MagneticButton"
import { Heartbeat } from "@/components/examples/33-Heartbeat"
import { TabIndicator } from "@/components/examples/34-TabIndicator"
import { Orbit } from "@/components/examples/35-Orbit"
import { FlipCounter } from "@/components/examples/36-FlipCounter"
import { LoadingDots } from "@/components/examples/37-LoadingDots"
import { Marquee } from "@/components/examples/38-Marquee"
import { RevealText } from "@/components/examples/39-RevealText"
import { SqueezeButton } from "@/components/examples/40-SqueezeButton"
import { Radar } from "@/components/examples/41-Radar"
import { StackCards } from "@/components/examples/42-StackCards"
import { FlipWords } from "@/components/examples/43-FlipWords"
import { DrawerSlide } from "@/components/examples/44-DrawerSlide"
import { PingDot } from "@/components/examples/45-PingDot"
import { LiquidButton } from "@/components/examples/46-LiquidButton"
import { IconMorph } from "@/components/examples/47-IconMorph"
import { Spotlight } from "@/components/examples/48-Spotlight"
import { TextScramble } from "@/components/examples/49-TextScramble"
import { Confetti } from "@/components/examples/50-Confetti"

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
  { title: "Gradient Shift", description: "Animated color gradient", component: GradientShift, loop: false },
  { title: "Typewriter", description: "Typing text effect", component: Typewriter, loop: false },
  { title: "Floating Element", description: "Gentle floating motion", component: FloatingElement, loop: false },
  { title: "Skeleton Loader", description: "Loading placeholder shimmer", component: SkeletonLoader, loop: false },
  { title: "Notification Badge", description: "Pop-in badge counter", component: NotificationBadge, loop: false },
  { title: "Ripple", description: "Click ripple effect", component: Ripple, loop: false },
  { title: "Progress Bar", description: "Animated progress fill", component: ProgressBar, loop: false },
  { title: "3D Tilt Card", description: "Mouse-follow tilt effect", component: TiltCard, loop: false },
  { title: "Elastic Button", description: "Bouncy spring button", component: ElasticButton, loop: false },
  { title: "Blur In", description: "Blur to focus reveal", component: BlurIn, loop: true },
  { title: "Wave Text", description: "Wavy text animation", component: WaveText, loop: false },
  { title: "Magnetic Button", description: "Cursor-following button", component: MagneticButton, loop: false },
  { title: "Heartbeat", description: "Pulsing heart animation", component: Heartbeat, loop: false },
  { title: "Tab Indicator", description: "Shared layoutId tabs", component: TabIndicator, loop: false },
  { title: "Orbit", description: "Planetary orbit animation", component: Orbit, loop: false },
  { title: "Flip Counter", description: "Airport-style counter", component: FlipCounter, loop: false },
  { title: "Loading Dots", description: "Bouncing dot loader", component: LoadingDots, loop: false },
  { title: "Marquee", description: "Scrolling text ticker", component: Marquee, loop: false },
  { title: "Reveal Text", description: "Hover to reveal text", component: RevealText, loop: false },
  { title: "Squeeze Button", description: "Squish effect on press", component: SqueezeButton, loop: false },
  { title: "Radar", description: "Scanning radar animation", component: Radar, loop: false },
  { title: "Stack Cards", description: "Click to cycle cards", component: StackCards, loop: false },
  { title: "Flip Words", description: "Rotating word display", component: FlipWords, loop: false },
  { title: "Drawer Slide", description: "Slide-down drawer", component: DrawerSlide, loop: false },
  { title: "Ping Dot", description: "Notification ping effect", component: PingDot, loop: false },
  { title: "Liquid Button", description: "Morphing border radius", component: LiquidButton, loop: false },
  { title: "Icon Morph", description: "Play/pause icon toggle", component: IconMorph, loop: false },
  { title: "Spotlight", description: "Cursor spotlight effect", component: Spotlight, loop: false },
  { title: "Text Scramble", description: "Decoding text effect", component: TextScramble, loop: false },
  { title: "Confetti", description: "Celebration particle burst", component: Confetti, loop: false },
]

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Motion Examples</h1>
        <p className="text-zinc-400">50 interactive Framer Motion examples. Hover, click, and explore.</p>
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
