import { renderToString } from 'react-dom/server'
import { LangProvider } from './i18n'
import App from './App'

// Build-time prerender (see scripts/prerender.js): HTML ships with the page, React hydrates it.
export function render() {
  return renderToString(
    <LangProvider>
      <App />
    </LangProvider>,
  )
}
