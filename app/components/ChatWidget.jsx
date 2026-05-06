'use client'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '../LanguageContext'

const STORAGE_KEY = 'bruce-chat-messages'

export default function ChatWidget() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(null)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)
  const prevLangRef = useRef(lang)

  // Hydrate from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      if (saved) setMessages(JSON.parse(saved))
    } catch {}
  }, [])

  // Initialize messages with correct greeting, and reset on language change
  useEffect(() => {
    if (messages === null || prevLangRef.current !== lang) {
      setMessages([{ role: 'assistant', content: t('chat.greeting') }])
      prevLangRef.current = lang
    }
  }, [lang, t])

  useEffect(() => {
    if (messages) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    const newMessages = [...(messages || []), { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.role !== 'system'),
        }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || 'Sorry, something went wrong.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I couldn\'t connect. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {open && (
        <div style={{
          position: 'fixed', bottom: 90, right: 20, width: 370, maxWidth: 'calc(100vw - 40px)',
          height: 500, maxHeight: 'calc(100vh - 120px)',
          background: '#111', border: '1px solid #c8a24e33', borderRadius: 16,
          display: 'flex', flexDirection: 'column', zIndex: 9999,
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        }}>
          <div style={{
            padding: '14px 18px', borderBottom: '1px solid #c8a24e33',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#c8a24e' }} />
              <span style={{ color: '#c8a24e', fontWeight: 600, fontSize: 15 }}>Bruce</span>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: 'none', border: 'none', color: '#888', fontSize: 20, cursor: 'pointer',
            }}>✕</button>
          </div>

          <div ref={scrollRef} style={{
            flex: 1, overflowY: 'auto', padding: '14px 14px 8px',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {(messages || []).map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                background: m.role === 'user' ? '#c8a24e' : '#1a1a1a',
                color: m.role === 'user' ? '#000' : '#e5e5e5',
                padding: '10px 14px', borderRadius: 12, maxWidth: '82%',
                fontSize: 14, lineHeight: 1.5,
                border: m.role === 'assistant' ? '1px solid #c8a24e22' : 'none',
              }}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={{
                alignSelf: 'flex-start', background: '#1a1a1a', border: '1px solid #c8a24e22',
                padding: '10px 14px', borderRadius: 12, fontSize: 14, color: '#888',
              }}>
                <span className="typing-dots">●  ●  ●</span>
              </div>
            )}
          </div>

          <div style={{
            padding: '10px 14px', borderTop: '1px solid #c8a24e33',
            display: 'flex', gap: 8,
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={t('chat.placeholder')}
              style={{
                flex: 1, background: '#1a1a1a', border: '1px solid #333', borderRadius: 8,
                padding: '10px 12px', color: '#e5e5e5', fontSize: 14, outline: 'none',
              }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{
              background: '#c8a24e', color: '#000', border: 'none', borderRadius: 8,
              padding: '10px 16px', fontWeight: 600, cursor: 'pointer', fontSize: 14,
              opacity: loading || !input.trim() ? 0.5 : 1,
            }}>
              {t('chat.send')}
            </button>
          </div>

          <div style={{
            textAlign: 'center', padding: '6px 0 10px', fontSize: 11, color: '#555',
          }}>
            Powered by <a href="https://ionicx.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#c8a24e', textDecoration: 'none' }}>IonicX AI</a>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', bottom: 20, right: 20, width: 56, height: 56,
        borderRadius: '50%', background: '#c8a24e', border: 'none',
        cursor: 'pointer', zIndex: 9999, display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 16px rgba(200,162,78,0.4)',
        transition: 'transform 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      <style>{`
        @keyframes blink { 0%,80%,100%{opacity:0} 40%{opacity:1} }
        .typing-dots { animation: blink 1.4s infinite both; letter-spacing: 2px; }
      `}</style>
    </>
  )
}
