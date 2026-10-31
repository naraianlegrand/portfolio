import { createContext, useContext, useEffect, useState } from 'react'
import { profile, languages } from './data/profile'

const LangContext = createContext(null)

function savedLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && languages.includes(saved)) return saved
  } catch {
    // storage unavailable: keep the default
  }
  return null
}

export function LangProvider({ children }) {
  // Always start in English so the client matches the prerendered HTML, then switch to a saved choice.
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = savedLang()
    if (saved) setLang(saved)
  }, [])

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
