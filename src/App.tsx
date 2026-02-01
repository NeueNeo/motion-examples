import { useRef, useState, useEffect } from "react"
import { ExampleCard } from "@/components/ExampleCard"
import { LoopOnMount } from "@/components/LoopOnMount"
import { Sidebar } from "@/components/Sidebar"

// Import all example source files as raw text
const sources = import.meta.glob('./components/examples/*.tsx', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

// Create a map from component name to source code
const sourceMap: Record<string, string> = {}
for (const [path, code] of Object.entries(sources)) {
  // Extract component name from "export function ComponentName"
  const match = code.match(/export function (\w+)/)
  if (match) {
    sourceMap[match[1]] = code
  }
}

// Helper to get source by component
function getSource(component: React.ComponentType): string {
  return sourceMap[component.name] || ''
}

// Text Effects
import { TextReveal } from "@/components/examples/12-TextReveal"
import { Typewriter } from "@/components/examples/22-Typewriter"
import { WaveText } from "@/components/examples/31-WaveText"
import { FlipWords } from "@/components/examples/43-FlipWords"
import { TextScramble } from "@/components/examples/49-TextScramble"
import { RevealText } from "@/components/examples/39-RevealText"
import { TextGradient } from "@/components/examples/69-TextGradient"
import { Marquee } from "@/components/examples/38-Marquee"
import { SplitText } from "@/components/examples/71-SplitText"
import { HighlightText } from "@/components/examples/72-HighlightText"
import { BouncyLetters } from "@/components/examples/73-BouncyLetters"
import { RealisticTypewriter } from "@/components/examples/99-RealisticTypewriter"
import { SpringyText } from "@/components/examples/103-SpringyText"

// Buttons
import { HoverScale } from "@/components/examples/02-HoverScale"
import { MorphButton } from "@/components/examples/15-MorphButton"
import { ElasticButton } from "@/components/examples/29-ElasticButton"
import { MagneticButton } from "@/components/examples/32-MagneticButton"
import { SqueezeButton } from "@/components/examples/40-SqueezeButton"
import { LiquidButton } from "@/components/examples/46-LiquidButton"
import { Ripple } from "@/components/examples/26-Ripple"
import { ShakeOnError } from "@/components/examples/16-ShakeOnError"
import { Confetti } from "@/components/examples/50-Confetti"
import { PushButton } from "@/components/examples/74-PushButton"
import { BorderButton } from "@/components/examples/75-BorderButton"
import { FillButton } from "@/components/examples/76-FillButton"
import { GradientButton } from "@/components/examples/104-GradientButton"

// Cards & Containers
import { CardFlip } from "@/components/examples/11-CardFlip"
import { HoverLift } from "@/components/examples/13-HoverLift"
import { TiltCard } from "@/components/examples/28-TiltCard"
import { StackCards } from "@/components/examples/42-StackCards"
import { StickerPeel } from "@/components/examples/63-StickerPeel"
import { SwipeCards } from "@/components/examples/64-SwipeCards"
import { FoldCard } from "@/components/examples/77-FoldCard"
import { GlassCard } from "@/components/examples/78-GlassCard"
import { ExpandCard } from "@/components/examples/105-ExpandCard"

// Loaders & Progress
import { Spinner } from "@/components/examples/14-Spinner"
import { SkeletonLoader } from "@/components/examples/24-SkeletonLoader"
import { ProgressBar } from "@/components/examples/27-ProgressBar"
import { LoadingDots } from "@/components/examples/37-LoadingDots"
import { Pulse } from "@/components/examples/06-Pulse"
import { CircularProgress } from "@/components/examples/79-CircularProgress"
import { InfinityLoader } from "@/components/examples/80-InfinityLoader"

// Entrances & Transitions
import { FadeIn } from "@/components/examples/01-FadeIn"
import { SlideIn } from "@/components/examples/04-SlideIn"
import { BlurIn } from "@/components/examples/30-BlurIn"
import { StaggerChildren } from "@/components/examples/08-StaggerChildren"
import { PopIn } from "@/components/examples/70-PopIn"
import { DropIn } from "@/components/examples/81-DropIn"
import { FlipIn } from "@/components/examples/82-FlipIn"

// Hover Effects
import { RotateOnHover } from "@/components/examples/03-RotateOnHover"
import { GlowOnHover } from "@/components/examples/19-GlowOnHover"
import { Spotlight } from "@/components/examples/48-Spotlight"
import { UnderlineHover } from "@/components/examples/83-UnderlineHover"
import { ShineEffect } from "@/components/examples/84-ShineEffect"

// Interactive
import { Drag } from "@/components/examples/07-Drag"
import { ToggleSwitch } from "@/components/examples/10-ToggleSwitch"
import { Accordion } from "@/components/examples/18-Accordion"
import { TabIndicator } from "@/components/examples/34-TabIndicator"
import { DrawerSlide } from "@/components/examples/44-DrawerSlide"
import { Shatter } from "@/components/examples/66-Shatter"
import { LiquidFill } from "@/components/examples/67-LiquidFill"
import { IconMorph } from "@/components/examples/47-IconMorph"
import { Checkbox } from "@/components/examples/85-Checkbox"
import { SwipeDelete } from "@/components/examples/86-SwipeDelete"
import { MagneticDock } from "@/components/examples/100-MagneticDock"
import { FlipMenu } from "@/components/examples/101-FlipMenu"

// Shapes & Graphics
import { MorphBlob } from "@/components/examples/61-MorphBlob"
import { PathDraw } from "@/components/examples/20-PathDraw"
import { GradientShift } from "@/components/examples/21-GradientShift"
import { Orbit } from "@/components/examples/35-Orbit"
import { BreathingRing } from "@/components/examples/68-BreathingRing"
import { ParallaxLayers } from "@/components/examples/62-ParallaxLayers"
import { CursorTrail } from "@/components/examples/65-CursorTrail"
import { Bounce } from "@/components/examples/05-Bounce"
import { FloatingElement } from "@/components/examples/23-FloatingElement"
import { Keyframes } from "@/components/examples/09-Keyframes"
import { Heartbeat } from "@/components/examples/33-Heartbeat"
import { LavaLamp } from "@/components/examples/87-LavaLamp"
import { WaveShape } from "@/components/examples/88-WaveShape"
import { Particles } from "@/components/examples/89-Particles"
import { LiquidMetal } from "@/components/examples/96-LiquidMetal"
import { Portal } from "@/components/examples/97-Portal"
import { AudioBars } from "@/components/examples/98-AudioBars"

// Counters & Numbers
import { CountUp } from "@/components/examples/17-CountUp"
import { FlipCounter } from "@/components/examples/36-FlipCounter"
import { Odometer } from "@/components/examples/90-Odometer"

// Notifications & Feedback
import { NotificationBadge } from "@/components/examples/25-NotificationBadge"
import { PingDot } from "@/components/examples/45-PingDot"
import { Toast } from "@/components/examples/91-Toast"
import { AlertPulse } from "@/components/examples/92-AlertPulse"

// Cyberpunk
import { GlitchText } from "@/components/examples/51-GlitchText"
import { CRTFlicker } from "@/components/examples/52-CRTFlicker"
import { ChromaticAberration } from "@/components/examples/53-ChromaticAberration"
import { Scanlines } from "@/components/examples/54-Scanlines"
import { DataStream } from "@/components/examples/55-DataStream"
import { NeonFlicker } from "@/components/examples/56-NeonFlicker"
import { HologramGlitch } from "@/components/examples/57-HologramGlitch"
import { TerminalBoot } from "@/components/examples/58-TerminalBoot"
import { CircuitPulse } from "@/components/examples/59-CircuitPulse"
import { StaticNoise } from "@/components/examples/60-StaticNoise"
import { Radar } from "@/components/examples/41-Radar"
import { HackingText } from "@/components/examples/93-HackingText"
import { WarningFlash } from "@/components/examples/94-WarningFlash"
import { EKGLine } from "@/components/examples/95-EKGLine"
import { GlitchImage } from "@/components/examples/102-GlitchImage"
import { VHSTracking } from "@/components/examples/106-VHSTracking"
import { FluorescentFlicker } from "@/components/examples/107-FluorescentFlicker"
import { CorridorRecede } from "@/components/examples/108-CorridorRecede"
import { Wormhole } from "@/components/examples/109-Wormhole"
import { DNAHelix } from "@/components/examples/110-DNAHelix"
import { SystemDiagnostic } from "@/components/examples/111-SystemDiagnostic"
import { GlitchBlock } from "@/components/examples/112-GlitchBlock"
import { VinylSpin } from "@/components/examples/114-VinylSpin"
import { DissolveOut } from "@/components/examples/116-DissolveOut"
import { LateNightClock } from "@/components/examples/117-LateNightClock"
import { NoSignal } from "@/components/examples/118-NoSignal"
import { MorphLoader } from "@/components/examples/119-MorphLoader"
import { HoloBadge } from "@/components/examples/120-HoloBadge"
import { StatusBadge } from "@/components/examples/121-StatusBadge"
import { NewBadge } from "@/components/examples/122-NewBadge"
import { ProBadge } from "@/components/examples/123-ProBadge"
import { LiveBadge } from "@/components/examples/124-LiveBadge"
import { BetaBadge } from "@/components/examples/125-BetaBadge"
import { VerifiedBadge } from "@/components/examples/126-VerifiedBadge"
import { CountBadge } from "@/components/examples/127-CountBadge"
import { TypingBadge } from "@/components/examples/128-TypingBadge"
import { SecureBadge } from "@/components/examples/129-SecureBadge"
import { AiBadge } from "@/components/examples/130-AiBadge"
import { PremiumBadge } from "@/components/examples/131-PremiumBadge"
import { OfflineBadge } from "@/components/examples/132-OfflineBadge"
import { UpdateBadge } from "@/components/examples/133-UpdateBadge"
import { AdminBadge } from "@/components/examples/134-AdminBadge"
import { RecordingBadge } from "@/components/examples/135-RecordingBadge"
import { SplitButton } from "@/components/examples/136-SplitButton"
import { GhostButton } from "@/components/examples/137-GhostButton"
import { PillButton } from "@/components/examples/138-PillButton"
import { GlowButton } from "@/components/examples/139-GlowButton"
import { LoadingButton } from "@/components/examples/140-LoadingButton"
import { IconButton } from "@/components/examples/141-IconButton"
import { SuccessButton } from "@/components/examples/142-SuccessButton"
import { NeonButton } from "@/components/examples/143-NeonButton"
import { SlideButton } from "@/components/examples/144-SlideButton"
import { OutlineButton } from "@/components/examples/145-OutlineButton"

interface Example {
  title: string
  description: string
  component: React.ComponentType
  loop?: boolean
}

interface Section {
  title: string
  examples: Example[]
}

const sections: Section[] = [
  {
    title: "🔤 Text Effects",
    examples: [
      { title: "Text Reveal", description: "Character-by-character reveal", component: TextReveal, loop: true },
      { title: "Typewriter", description: "Typing text effect", component: Typewriter },
      { title: "Wave Text", description: "Wavy text animation", component: WaveText },
      { title: "Flip Words", description: "Rotating word display", component: FlipWords },
      { title: "Text Scramble", description: "Decoding text effect", component: TextScramble },
      { title: "Reveal Text", description: "Hover to reveal text", component: RevealText },
      { title: "Text Gradient", description: "Animated gradient text", component: TextGradient },
      { title: "Marquee", description: "Scrolling text ticker", component: Marquee },
      { title: "Split Text", description: "Letters animate in", component: SplitText, loop: true },
      { title: "Highlight Text", description: "Marker highlight effect", component: HighlightText, loop: true },
      { title: "Bouncy Letters", description: "Hover bounce per letter", component: BouncyLetters },
      { title: "Realistic Typewriter", description: "Variable timing cursor", component: RealisticTypewriter },
      { title: "Springy Text", description: "Bouncy letter hover", component: SpringyText },
    ]
  },
  {
    title: "🔘 Buttons",
    examples: [
      { title: "Hover Scale", description: "Scale up on hover", component: HoverScale },
      { title: "Morph Button", description: "Layout animation on click", component: MorphButton },
      { title: "Elastic Button", description: "Bouncy spring button", component: ElasticButton },
      { title: "Magnetic Button", description: "Cursor-following button", component: MagneticButton },
      { title: "Squeeze Button", description: "Squish effect on press", component: SqueezeButton },
      { title: "Liquid Button", description: "Morphing border radius", component: LiquidButton },
      { title: "Ripple", description: "Click ripple effect", component: Ripple },
      { title: "Shake on Error", description: "Shake animation trigger", component: ShakeOnError },
      { title: "Confetti", description: "Celebration particle burst", component: Confetti },
      { title: "Push Button", description: "3D press effect", component: PushButton },
      { title: "Border Button", description: "Drawing border on hover", component: BorderButton },
      { title: "Fill Button", description: "Color fill on hover", component: FillButton },
      { title: "Gradient Button", description: "Animated gradient bg", component: GradientButton },
      { title: "Split Button", description: "Primary + dropdown", component: SplitButton },
      { title: "Ghost Button", description: "Subtle hover fill", component: GhostButton },
      { title: "Pill Button", description: "Toggle selection", component: PillButton },
      { title: "Glow Button", description: "Cyan glow effect", component: GlowButton },
      { title: "Loading Button", description: "Dots while loading", component: LoadingButton },
      { title: "Icon Button", description: "Heart like toggle", component: IconButton },
      { title: "Success Button", description: "Confirm → Done", component: SuccessButton },
      { title: "Neon Button", description: "Glowing border", component: NeonButton },
      { title: "Slide Button", description: "Color slides in", component: SlideButton },
      { title: "Outline Button", description: "Border highlight", component: OutlineButton },
      { title: "Dissolve Out", description: "Particle dissolve", component: DissolveOut },
    ]
  },
  {
    title: "🃏 Cards",
    examples: [
      { title: "Card Flip", description: "3D flip on click", component: CardFlip },
      { title: "Hover Lift", description: "Lift with shadow on hover", component: HoverLift },
      { title: "3D Tilt Card", description: "Mouse-follow tilt effect", component: TiltCard },
      { title: "Stack Cards", description: "Click to cycle cards", component: StackCards },
      { title: "Sticker Peel", description: "3D peel lift effect", component: StickerPeel },
      { title: "Swipe Cards", description: "Tinder-style card stack", component: SwipeCards },
      { title: "Fold Card", description: "Origami fold reveal", component: FoldCard },
      { title: "Glass Card", description: "Glassmorphism hover", component: GlassCard },
      { title: "Expand Card", description: "Click to expand layout", component: ExpandCard },
    ]
  },
  {
    title: "⏳ Loaders & Progress",
    examples: [
      { title: "Spinner", description: "Continuous rotation loader", component: Spinner },
      { title: "Skeleton Loader", description: "Loading placeholder shimmer", component: SkeletonLoader },
      { title: "Progress Bar", description: "Animated progress fill", component: ProgressBar },
      { title: "Loading Dots", description: "Bouncing dot loader", component: LoadingDots },
      { title: "Pulse", description: "Subtle pulsing scale", component: Pulse },
      { title: "Circular Progress", description: "SVG ring progress", component: CircularProgress },
      { title: "Infinity Loader", description: "Figure-8 motion", component: InfinityLoader },
      { title: "DNA Helix", description: "Rotating double helix", component: DNAHelix },
      { title: "Wormhole", description: "Swirling tunnel rings", component: Wormhole },
      { title: "Morph Loader", description: "Shape-shifting spinner", component: MorphLoader },
    ]
  },
  {
    title: "✨ Entrances",
    examples: [
      { title: "Fade In", description: "Opacity animation on mount", component: FadeIn, loop: true },
      { title: "Slide In", description: "Slide from left with spring", component: SlideIn, loop: true },
      { title: "Blur In", description: "Blur to focus reveal", component: BlurIn, loop: true },
      { title: "Stagger Children", description: "Sequential child animations", component: StaggerChildren, loop: true },
      { title: "Pop In", description: "Spring scale entrance", component: PopIn },
      { title: "Drop In", description: "Fall with bounce", component: DropIn, loop: true },
      { title: "Flip In", description: "3D rotate entrance", component: FlipIn, loop: true },
    ]
  },
  {
    title: "👆 Hover Effects",
    examples: [
      { title: "Rotate on Hover", description: "Spring rotation on hover", component: RotateOnHover },
      { title: "Glow on Hover", description: "Box shadow glow effect", component: GlowOnHover },
      { title: "Spotlight", description: "Cursor spotlight effect", component: Spotlight },
      { title: "Underline Hover", description: "Animated underline", component: UnderlineHover },
      { title: "Shine Effect", description: "Glossy shine sweep", component: ShineEffect },
    ]
  },
  {
    title: "🎛️ Interactive",
    examples: [
      { title: "Drag", description: "Draggable with constraints", component: Drag },
      { title: "Toggle Switch", description: "Layout animation toggle", component: ToggleSwitch },
      { title: "Accordion", description: "AnimatePresence height", component: Accordion },
      { title: "Tab Indicator", description: "Shared layoutId tabs", component: TabIndicator },
      { title: "Drawer Slide", description: "Slide-down drawer", component: DrawerSlide },
      { title: "Shatter", description: "Click to explode", component: Shatter },
      { title: "Liquid Fill", description: "Water fill animation", component: LiquidFill },
      { title: "Icon Morph", description: "Play/pause icon toggle", component: IconMorph },
      { title: "Checkbox", description: "Animated checkmark", component: Checkbox },
      { title: "Swipe Delete", description: "Swipe to reveal delete", component: SwipeDelete },
      { title: "Magnetic Dock", description: "macOS-style icon dock", component: MagneticDock },
      { title: "Flip Menu", description: "3D dropdown menu", component: FlipMenu },
    ]
  },
  {
    title: "🔷 Shapes & Graphics",
    examples: [
      { title: "Morph Blob", description: "Organic shape morphing", component: MorphBlob },
      { title: "Path Draw", description: "SVG path drawing", component: PathDraw },
      { title: "Gradient Shift", description: "Animated color gradient", component: GradientShift },
      { title: "Orbit", description: "Planetary orbit animation", component: Orbit },
      { title: "Breathing Ring", description: "Concentric pulse rings", component: BreathingRing },
      { title: "Parallax Layers", description: "Mouse parallax depth", component: ParallaxLayers },
      { title: "Cursor Trail", description: "Following particle trail", component: CursorTrail },
      { title: "Bounce", description: "Continuous bouncing", component: Bounce },
      { title: "Floating Element", description: "Gentle floating motion", component: FloatingElement },
      { title: "Keyframes", description: "Multi-property sequence", component: Keyframes },
      { title: "Heartbeat", description: "Pulsing heart animation", component: Heartbeat },
      { title: "Lava Lamp", description: "Rising blob animation", component: LavaLamp },
      { title: "Wave Shape", description: "Animated SVG wave", component: WaveShape },
      { title: "Particles", description: "Rising particle field", component: Particles },
      { title: "Liquid Metal", description: "T-1000 morphing blob", component: LiquidMetal },
      { title: "Portal", description: "Swirling vortex rings", component: Portal },
      { title: "Audio Bars", description: "Fake audio visualizer", component: AudioBars },
      { title: "Vinyl Spin", description: "Click to play/pause", component: VinylSpin },
    ]
  },
  {
    title: "🔢 Counters",
    examples: [
      { title: "Count Up", description: "Animated number counting", component: CountUp, loop: true },
      { title: "Flip Counter", description: "Airport-style counter", component: FlipCounter },
      { title: "Odometer", description: "Rolling digit display", component: Odometer },
    ]
  },
  {
    title: "🔔 Notifications",
    examples: [
      { title: "Notification Badge", description: "Pop-in badge counter", component: NotificationBadge },
      { title: "Ping Dot", description: "Notification ping effect", component: PingDot },
      { title: "Toast", description: "Popup notification", component: Toast },
      { title: "Alert Pulse", description: "Pulsing alert indicator", component: AlertPulse },
    ]
  },
  {
    title: "🌃 Cyberpunk",
    examples: [
      { title: "Glitch Text", description: "RGB split glitch effect", component: GlitchText },
      { title: "CRT Flicker", description: "Retro monitor flicker", component: CRTFlicker },
      { title: "Chromatic Aberration", description: "RGB channel split", component: ChromaticAberration },
      { title: "Scanlines", description: "CRT scanline overlay", component: Scanlines },
      { title: "Data Stream", description: "Matrix-style data rain", component: DataStream },
      { title: "Neon Flicker", description: "Flickering neon sign", component: NeonFlicker },
      { title: "Hologram Glitch", description: "Holographic interference", component: HologramGlitch },
      { title: "Terminal Boot", description: "System boot sequence", component: TerminalBoot },
      { title: "Circuit Pulse", description: "Data flowing circuits", component: CircuitPulse },
      { title: "Static Noise", description: "TV static interference", component: StaticNoise },
      { title: "Radar", description: "Scanning radar sweep", component: Radar },
      { title: "Hacking Text", description: "Decryption reveal", component: HackingText },
      { title: "Warning Flash", description: "Critical alert flash", component: WarningFlash },
      { title: "EKG Line", description: "Heartbeat monitor", component: EKGLine },
      { title: "Glitch Image", description: "RGB slice distortion", component: GlitchImage },
      { title: "VHS Tracking", description: "Tape tracking distortion", component: VHSTracking },
      { title: "System Diagnostic", description: "Boot sequence log", component: SystemDiagnostic },
      { title: "Glitch Block", description: "Sliced data corruption", component: GlitchBlock },
      { title: "No Signal", description: "Lost TV signal bars", component: NoSignal },
    ]
  },
  {
    title: "🌃 Liminal",
    examples: [
      { title: "Fluorescent Flicker", description: "Flickering exit sign", component: FluorescentFlicker },
      { title: "Corridor Recede", description: "Infinite hallway depth", component: CorridorRecede },
      { title: "Late Night Clock", description: "3am digital clock", component: LateNightClock },
    ]
  },
  {
    title: "🏷️ Badges",
    examples: [
      { title: "Holo Badge", description: "Holographic verified", component: HoloBadge },
      { title: "Status Badge", description: "Online status pulse", component: StatusBadge },
      { title: "New Badge", description: "Shiny new indicator", component: NewBadge },
      { title: "Pro Badge", description: "Premium gold badge", component: ProBadge },
      { title: "Live Badge", description: "Live streaming dot", component: LiveBadge },
      { title: "Beta Badge", description: "Beta feature glow", component: BetaBadge },
      { title: "Verified Badge", description: "Checkmark draw", component: VerifiedBadge },
      { title: "Count Badge", description: "Animated counter", component: CountBadge },
      { title: "Typing Badge", description: "Someone is typing", component: TypingBadge },
      { title: "Secure Badge", description: "Security indicator", component: SecureBadge },
      { title: "AI Badge", description: "Spinning gradient border", component: AiBadge },
      { title: "Premium Badge", description: "Diamond sparkle", component: PremiumBadge },
      { title: "Offline Badge", description: "Dimmed status", component: OfflineBadge },
      { title: "Update Badge", description: "Spinning refresh", component: UpdateBadge },
      { title: "Admin Badge", description: "Shield authority", component: AdminBadge },
      { title: "Recording Badge", description: "REC with timer", component: RecordingBadge },
    ]
  },
]

export default function App() {
  const totalExamples = sections.reduce((sum, s) => sum + s.examples.length, 0)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const sidebarSections = sections.map(s => ({
    title: s.title,
    count: s.examples.length
  }))

  // Track scroll position to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = Object.entries(sectionRefs.current).find(
              ([, el]) => el === entry.target
            )?.[0]
            if (title) setActiveSection(title)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSectionClick = (title: string) => {
    setActiveSection(title)
    const el = sectionRefs.current[title]
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen">
      <Sidebar
        sections={sidebarSections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      
      {/* Main content */}
      <main 
        className={`p-8 pt-16 lg:pt-8 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:pl-[92px]' : 'lg:pl-[272px]'
        }`}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Motion Examples</h1>
          <p className="text-zinc-400">{totalExamples} interactive Framer Motion examples. Hover, click, and explore.</p>
        </header>
        
        {sections.map((section) => (
          <section
            key={section.title}
            ref={(el) => { sectionRefs.current[section.title] = el }}
            id={section.title.replace(/\s+/g, '-').toLowerCase()}
            className="mb-10 scroll-mt-8"
          >
            <h2 className="text-xl font-semibold text-zinc-200 mb-4 border-b border-zinc-800 pb-2">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {section.examples.map((example, i) => (
                <ExampleCard
                  key={i}
                  title={example.title}
                  description={example.description}
                  source={getSource(example.component)}
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
          </section>
        ))}
      </main>
    </div>
  )
}
