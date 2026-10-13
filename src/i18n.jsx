import { createContext, useContext, useEffect, useState } from 'react'
import { profile, languages } from './data/profile'

const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && languages.includes(saved)) return saved
  } catch {
    // storage unavailable: fall through to default
  }
  return 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: profile[lang], languages }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
