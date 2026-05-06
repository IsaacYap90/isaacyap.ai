'use client'
import { useState, useEffect, useRef } from 'react'
const WhatsAppFAB = () => (
  <a
    href="https://wa.me/6580268821?text=Hi%20Isaac%2C%20I%20saw%20your%20site"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all"
  >
    <span className="text-xl leading-none">💬</span>
    <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
  </a>
)
import { motion, useInView } from 'framer-motion'
import { useLang } from './LanguageContext'

/* ─── RICH TEXT HELPER ─── */
const RichText = ({ text, className }) => {
  const parts = text.split(/(<strong>.*?<\/strong>|<gold>.*?<\/gold>)/g)
  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('<strong>')) return <span key={i} className="text-white font-semibold">{part.replace(/<\/?strong>/g, '')}</span>
        if (part.startsWith('<gold>')) return <span key={i} className="text-brand-gold font-semibold">{part.replace(/<\/?gold>/g, '')}</span>
        return <span key={i}>{part}</span>
      })}
    </p>
  )
}

/* ─── ANIMATION HELPERS ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ─── COUNT UP HOOK ─── */
const useCountUp = (end, duration = 1.5, inView) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, end, duration])
  return count
}

/* ─── LANGUAGE TOGGLE ─── */
const LangToggle = () => {
  const { lang, toggleLang } = useLang()
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 text-xs font-semibold tracking-wider transition-colors"
      aria-label="Toggle language"
    >
      <span className={lang === 'en' ? 'text-brand-gold' : 'text-gray-500 hover:text-gray-300'}>EN</span>
      <span className="text-gray-600">|</span>
      <span className={lang === 'zh' ? 'text-brand-gold' : 'text-gray-500 hover:text-gray-300'}>中文</span>
    </button>
  )
}

/* ─── NAV ─── */
const Nav = () => {
  const { t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }} className="flex items-center gap-3 group">
          <div className="leading-tight">
              <span className="font-display font-black text-red-600 text-2xl md:text-3xl tracking-wider">ISAACYAP</span>
              <span className="font-display font-black text-white text-2xl md:text-3xl tracking-wider">.AI</span>
            </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#portfolio" className="text-gray-400 hover:text-brand-gold transition-colors">{t('nav.portfolio')}</a>
          <a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">{t('nav.about')}</a>
          <a href="#why-me" className="text-gray-400 hover:text-brand-gold transition-colors">{t('nav.whyMe')}</a>
          <LangToggle />
          <a href="#contact" className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-all text-xs uppercase tracking-wider">{t('nav.contact')}</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-brand-gold text-lg font-medium transition-colors">{t('nav.portfolio')}</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-brand-gold text-lg font-medium transition-colors">{t('nav.about')}</a>
          <a href="#why-me" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-brand-gold text-lg font-medium transition-colors">{t('nav.whyMe')}</a>
          <div className="py-1"><LangToggle /></div>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-5 py-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg text-center text-sm uppercase tracking-wider">{t('nav.contact')}</a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ─── */
const Hero = () => {
  const { t } = useLang()
  return (
    <section className="relative min-h-[130vh] md:min-h-screen flex items-end pb-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-rebel-fc.jpg" alt="Isaac Yap" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 z-10 max-w-5xl flex items-end min-h-[80vh] pb-12">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.9] tracking-wide mb-4">
            <span className="text-white">{t('hero.heading1')}</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-yellow-500 to-brand-gold">{t('hero.heading2')}</span>
          </motion.h1>

          <motion.div variants={fadeIn}>
            <RichText text={t('hero.desc')} className="text-gray-400 text-base md:text-xl leading-relaxed mb-6 max-w-lg" />
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
            <a href="#portfolio" className="group px-7 py-3.5 bg-brand-red hover:bg-red-600 text-white font-bold rounded-lg transition-all flex items-center gap-2">
              {t('hero.seeMyWork')}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#contact" className="px-7 py-3.5 border border-white/15 hover:border-brand-gold text-white hover:text-brand-gold font-semibold rounded-lg transition-all backdrop-blur-sm">
              {t('hero.letsTalk')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

/* ─── STATS ─── */
const StatItem = ({ stat, inView }) => {
  const count = useCountUp(stat.value || 0, 1.2, inView)
  return (
    <motion.div variants={fadeIn} className="text-center">
      <h3 className={`font-display text-5xl md:text-6xl tracking-wide ${stat.color} mb-1`}>
        {stat.value !== null ? stat.display(count) : stat.display()}
      </h3>
      <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">{stat.label}</p>
    </motion.div>
  )
}

const Stats = () => {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const statsData = [
    { value: 3, display: (v) => `${v}`, label: t('stats.businessesServed'), color: 'text-white' },
    { value: 100, display: (v) => `${v}%`, label: t('stats.deliveryRate'), color: 'text-brand-gold' },
    { value: 4, display: (v) => `${v}`, label: t('stats.appsBuilt'), color: 'text-white' },
    { value: null, display: () => '4-6 Wks', label: t('stats.avgBuildTime'), color: 'text-brand-red' },
  ]

  return (
    <section className="relative py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.03)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {statsData.map((s, i) => (
            <StatItem key={i} stat={s} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── ABOUT ─── */
const About = () => {
  const { t } = useLang()
  const cards = [
    { icon: '💻', ...t('about.cards.fullstack') },
    { icon: '🥊', ...t('about.cards.bouts') },
    { icon: '🥋', ...t('about.cards.muaythai') },
    { icon: '🌏', ...t('about.cards.location') },
  ]

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-2">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
            <div className="relative h-[520px] rounded-2xl overflow-hidden">
              <img src="/images/about-arms-spread.jpg" alt="Isaac Yap" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
                <p className="font-display text-2xl text-white tracking-wide">{t('about.subtitle')}</p>
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mt-1">{t('about.role')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <RichText text={t('about.p1')} className="text-gray-400 text-lg leading-relaxed mb-6" />
            <RichText text={t('about.p2')} className="text-gray-400 text-lg leading-relaxed mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-10 italic">{t('about.p3')}</p>

            <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {cards.map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 pointer-events-none">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── AS SEEN IN ─── */
const AsSeenIn = () => {
  const { t } = useLang()
  return (
    <section className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">{t('asSeenIn.title')}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
          <RichText text={t('asSeenIn.subtitle')} className="text-gray-500 text-base" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
            <div className="relative rounded-2xl overflow-hidden">
              <video src="/images/wira-clip-2.mp4" controls playsInline preload="metadata" className="w-full rounded-2xl aspect-video object-cover" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-brand-gold/30 rounded-full backdrop-blur-sm pointer-events-none">
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">{t('asSeenIn.wiraLabel')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
            <div className="relative rounded-2xl overflow-hidden">
              <video src="/images/wira-clip.mp4" controls playsInline preload="metadata" className="w-full rounded-2xl aspect-video object-cover" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-brand-gold/30 rounded-full backdrop-blur-sm pointer-events-none">
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">{t('asSeenIn.wiraLabel')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/hsi17DnZcu0"
                  title="Refereeing Rahul K Raju at Ultimate Beatdown"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-brand-gold/30 rounded-full backdrop-blur-sm pointer-events-none">
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">{t('asSeenIn.ubLabel')}</span>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">{t('asSeenIn.ubCaption')}</p>
        </motion.div>

        <p className="text-center text-gray-600 text-sm mt-6">{t('asSeenIn.footer')}</p>
      </div>
    </section>
  )
}

/* ─── PORTFOLIO ─── */
const portfolioProjectsData = [
  { key: 'jmt', emoji: '🥊', tech: ['React Native', 'Expo', 'Supabase'], statusKey: 'inDevelopment', statusColor: 'text-yellow-400', url: null },
  { key: 'ub', emoji: '🏆', tech: ['React', 'Supabase Realtime', 'Tailwind'], statusKey: 'inDevelopment', statusColor: 'text-brand-gold', url: 'https://ub-live-scoring.vercel.app' },
  { key: 'tatt', emoji: '🎨', tech: ['Next.js', 'Tailwind', 'Supabase'], statusKey: 'justShipped', statusColor: 'text-brand-gold', url: 'https://tattbylyds.vercel.app' },
  { key: 'fab', emoji: '💆', tech: ['Vite', 'Tailwind', 'Supabase'], statusKey: 'live', statusColor: 'text-green-400', url: 'https://fabthestretchlad.vercel.app' },
  { key: 'pocolane', emoji: '🎨', tech: ['React', 'Firebase', 'Gemini AI'], statusKey: 'live', statusColor: 'text-green-400', url: 'https://pocolane.studio' },
]

const Portfolio = () => {
  const { t } = useLang()
  return (
    <section id="portfolio" className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">{t('portfolio.title')}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
          <p className="text-gray-500 text-base max-w-lg mx-auto">{t('portfolio.subtitle')}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {portfolioProjectsData.map((p, i) => {
            const project = t(`portfolio.projects.${p.key}`)
            const Wrapper = p.url ? 'a' : 'div'
            const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <motion.div key={i} variants={fadeIn}>
                <Wrapper {...linkProps} className={`group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04] block ${p.url ? 'cursor-pointer' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{p.emoji}</div>
                    {p.url && <span className="text-gray-600 group-hover:text-brand-gold text-sm transition-colors">↗</span>}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((tc, j) => (
                      <span key={j} className="bg-white/5 px-2 py-0.5 rounded text-xs text-gray-500">{tc}</span>
                    ))}
                  </div>
                  <span className={`${p.statusColor} text-xs font-bold uppercase tracking-widest`}>{t(`portfolio.status.${p.statusKey}`)}</span>
                </Wrapper>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── WHY ME ─── */
const whyMeKeys = ['errors', 'fast', 'customer', 'ownership']
const whyMeEmojis = { errors: '🛡️', fast: '⚡', customer: '🎯', ownership: '🤝' }

const WhyMe = () => {
  const { t } = useLang()
  return (
    <section id="why-me" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">{t('whyMe.title')}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {whyMeKeys.map((key, i) => {
            const c = t(`whyMe.cards.${key}`)
            return (
              <motion.div key={i} variants={fadeIn} className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
                <div className="text-3xl mb-3">{whyMeEmojis[key]}</div>
                <div className="mb-3">
                  <span className="font-display text-3xl text-brand-gold tracking-wide">{c.stat}</span>
                  <span className="text-gray-600 text-xs uppercase tracking-widest ml-2">{c.statLabel}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CONTACT / FOOTER ─── */
const Contact = () => {
  const { t } = useLang()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Isaac! I'm ${name}. ${message}`
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    }).catch(() => {})
    window.open(`https://wa.me/6580268821?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="relative py-24 bg-[#060606] border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(230,57,70,0.05)_0%,_transparent_60%)]" />
      <motion.div
        className="container mx-auto px-6 relative max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">{t('contact.title')}</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mb-6" />
            <p className="text-gray-400 text-base leading-relaxed mb-8">{t('contact.desc')}</p>

            <div className="flex flex-col gap-4 mb-8">
              <a href="https://wa.me/6580268821" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <span className="text-base">💬</span>
                </div>
                <span className="text-gray-400 group-hover:text-green-400 text-sm transition-colors">WhatsApp: +65 8026 8821</span>
              </a>
              <a href="https://www.instagram.com/isaacyap.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-base">📸</span>
                </div>
                <span className="text-gray-400 group-hover:text-brand-gold text-sm transition-colors">@isaacyap.ai</span>
              </a>
              <a href="https://www.facebook.com/IsaacProMMARef/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-base">👤</span>
                </div>
                <span className="text-gray-400 group-hover:text-brand-gold text-sm transition-colors">Isaac Yap</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/5 rounded-xl p-7 space-y-5">
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">{t('contact.nameLabel')}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('contact.namePlaceholder')}
                className="w-full bg-white/5 border border-white/10 focus:border-brand-gold/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">{t('contact.messageLabel')}</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('contact.messagePlaceholder')}
                rows={4}
                className="w-full bg-white/5 border border-white/10 focus:border-brand-gold/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {t('contact.sendBtn')}
            </button>
          </form>
        </div>

        <div className="pt-12 mt-12 border-t border-white/5 text-center">
          <p className="text-gray-700 text-xs">{t('contact.copyright')}</p>
          <a href="https://ionicx.ai" target="_blank" rel="noopener noreferrer" className="block mt-3 text-[10px] text-brand-gold/60 hover:text-brand-gold transition-colors tracking-wide">ionicx.ai →</a>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── PAGE ─── */
export default function Page() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-brand-red/80 selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <Portfolio />
      <About />
      <AsSeenIn />
      <WhyMe />
      <Contact />
      <WhatsAppFAB />
    </div>
  )
}
