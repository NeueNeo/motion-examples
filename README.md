# Motion Examples v2

Interactive Framer Motion / Motion examples gallery. 100+ components demonstrating animations, gestures, and transitions.

## Optimizations (v2)

This version includes several optimizations based on current best practices:

### 1. Correct Package Usage
- Uses `motion` package (not deprecated `framer-motion`)
- Imports from `motion/react` (current standard)

### 2. LazyMotion Provider
- Wrapped app in `LazyMotion` with `domMax` features
- Enables tree-shaking for unused features
- `strict` mode enforces best practices

### 3. Modern Stack
- **React 19** - Latest features including Compiler support
- **Tailwind CSS v4** - Oxide engine, CSS-first config
- **Vite 7** - Fast builds, native ESM

### 4. Bundle Considerations
For production apps with simpler needs:
```tsx
// Use domAnimation instead of domMax (~15kb vs ~25kb)
import { LazyMotion, domAnimation } from "motion/react"

// Use m instead of motion for smaller components
import { m } from "motion/react"
```

## Stack

- React 19.2
- Motion 12.29
- Tailwind CSS 4.1
- Vite 7.3
- TypeScript 5.9

## Development

```bash
npm install
npm run dev     # http://localhost:5181
npm run build
```

## Structure

```
src/
├── components/
│   ├── examples/       # 146 animation examples
│   ├── ui/             # Shared UI components
│   ├── ExampleCard.tsx # Card wrapper with source view
│   ├── MotionProvider.tsx # LazyMotion wrapper
│   └── Sidebar.tsx     # Navigation
├── App.tsx             # Main layout & sections
└── main.tsx            # Entry point
```

## Categories

- 🔤 Text Effects (13)
- 🔘 Buttons (24)
- 🃏 Cards (9)
- ⏳ Loaders & Progress (10)
- ✨ Entrances (7)
- 👆 Hover Effects (5)
- 🎛️ Interactive (12)
- 🔷 Shapes & Graphics (18)
- 🔢 Counters (3)
- 🔔 Notifications (4)
- 🌃 Cyberpunk (19)
- 🌃 Liminal (3)
- 🏷️ Badges (16)

---

Built by NeueBot 🤖
