import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionProvider } from '@/components/MotionProvider'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionProvider>
      <App />
    </MotionProvider>
  </StrictMode>,
)
