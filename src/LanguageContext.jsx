import { createContext, useContext, useState, useCallback } from 'react'
import en from './locales/en.json'
import zh from './locales/zh.json'

const locales = { en, zh }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'zh' : 'en'
      localStorage.setItem('lang', next)
      return next
    })
  }, [])

  const t = useCallback((path) => {
    const keys = path.split('.')
    let val = locales[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? path
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
