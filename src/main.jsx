import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LangProvider } from './i18n'
import App from './App'
// Self-hosted fonts (latin subset only): same origin, no extra connections before first paint.
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import './index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.js); dev renders from scratch.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
