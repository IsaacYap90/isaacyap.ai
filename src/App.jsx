import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

/* ─── NAV ─── */
const Nav = () => {
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
          <a href="#portfolio" className="text-gray-400 hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">About</a>
          <a href="#why-me" className="text-gray-400 hover:text-brand-gold transition-colors">Why Me</a>
          <a href="#contact" className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-all text-xs uppercase tracking-wider">Contact</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-brand-gold text-lg font-medium transition-colors">Portfolio</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-brand-gold text-lg font-medium transition-colors">About</a>
          <a href="#why-me" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-brand-gold text-lg font-medium transition-colors">Why Me</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-5 py-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg text-center text-sm uppercase tracking-wider">Contact</a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ─── */
const Hero = () => (
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
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Software Developer · SG/MY</span>
        </motion.div>

        <motion.h1 variants={fadeIn} className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.9] tracking-wide mb-4">
          <span className="text-white">PRECISION</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-yellow-500 to-brand-gold">IN CHAOS.</span>
        </motion.h1>

        <motion.p variants={fadeIn} className="text-gray-400 text-base md:text-xl leading-relaxed mb-6 max-w-lg">
          No copy-paste websites here. I sit down with you, understand how your business runs, and <span className="text-white font-medium">build every feature around what you actually need</span>. Booking systems, management platforms, websites — <span className="text-white font-medium">made to fit your business like a glove</span>.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
          <a href="#portfolio" className="group px-7 py-3.5 bg-brand-red hover:bg-red-600 text-white font-bold rounded-lg transition-all flex items-center gap-2">
            See My Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#contact" className="px-7 py-3.5 border border-white/15 hover:border-brand-gold text-white hover:text-brand-gold font-semibold rounded-lg transition-all backdrop-blur-sm">
            Let's Talk
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

/* ─── STATS ─── */
const statsData = [
  { value: 3, display: (v) => `${v}`, label: 'Businesses Served', color: 'text-white' },
  { value: 100, display: (v) => `${v}%`, label: 'Delivery Rate', color: 'text-brand-gold' },
  { value: 4, display: (v) => `${v}`, label: 'Apps Built', color: 'text-white' },
  { value: null, display: () => '4-6 Wks', label: 'Average Build Time', color: 'text-brand-red' },
]

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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
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
const About = () => (
  <section id="about" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-2">FROM THE CAGE TO THE CODE.</h2>
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
              <p className="font-display text-2xl text-white tracking-wide">ISAAC YAP</p>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mt-1">Software Developer · MMA Referee · Coach</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I build websites and apps for small businesses — the kind of tools that actually help you <span className="text-white font-semibold">get more customers and save time</span>. Booking systems, online stores, landing pages, management platforms. If it runs your business better, I'll build it.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I understand service businesses because <span className="text-white font-semibold">I run one</span>. I've run my own businesses in Singapore and Malaysia, so I know what it's like to juggle everything. <span className="text-brand-gold font-semibold">Anything you need a website for, I've got your back</span>.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 italic">
            I'm also a professional MMA referee with 500+ bouts across ONE Championship and Rebel FC — because discipline and precision aren't just buzzwords to me.
          </p>

          <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: '💻', title: 'Full Stack Dev', desc: 'React Native · Next.js · Supabase' },
              { icon: '🥊', title: '500+ Bouts', desc: 'Chief Official, Ultimate Beatdown' },
              { icon: '🥋', title: 'Muay Thai Coach', desc: 'Jai Muay Thai, Singapore' },
              { icon: '🌏', title: 'SG / MY Based', desc: 'English & Mandarin 中文' },
            ].map((item, i) => (
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

/* ─── AS SEEN IN ─── */
const AsSeenIn = () => (
  <section className="py-24 bg-[#060606]">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">As Seen In.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base">Featured as the MMA referee in the Malaysian blockbuster film <span className="text-white font-semibold">WIRA</span> (2019)</p>
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
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">🎬 WIRA (2019)</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
          <div className="relative rounded-2xl overflow-hidden">
            <video src="/images/wira-clip.mp4" controls playsInline preload="metadata" className="w-full rounded-2xl aspect-video object-cover" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-brand-gold/30 rounded-full backdrop-blur-sm pointer-events-none">
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">🎬 WIRA (2019)</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* YouTube Embed — Rahul K Raju at Ultimate Beatdown */}
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
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">🥊 Ultimate Beatdown</span>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">Refereeing Rahul K Raju at Ultimate Beatdown</p>
      </motion.div>

      <p className="text-center text-gray-600 text-sm mt-6">
        WIRA — a Malaysian action film featuring real combat sports professionals.
      </p>
    </div>
  </section>
)

/* ─── PORTFOLIO ─── */
const portfolioProjects = [
  {
    emoji: '🥊',
    title: 'JMT Super App',
    desc: 'Complete gym management ecosystem — class booking, PT sessions, member portal, coach dashboard, payments.',
    tech: ['React Native', 'Expo', 'Supabase'],
    status: 'In Development',
    statusColor: 'text-yellow-400',
    url: null,
  },
  {
    emoji: '🏆',
    title: 'UB Live Scoring',
    desc: 'Real-time MMA fight scoring system. Judges score on iPads, chief official sees live dashboard, instant results. No more paper scorecards.',
    tech: ['React', 'Supabase Realtime', 'Tailwind'],
    status: 'In Development',
    statusColor: 'text-brand-gold',
    url: 'https://ub-live-scoring.vercel.app',
  },
  {
    emoji: '🎨',
    title: 'TattByLyds',
    desc: "Tattoo booking platform with portfolio gallery, booking form, and PayNow deposit integration. Dark, premium aesthetic for an artist's brand.",
    tech: ['Next.js', 'Tailwind', 'Supabase'],
    status: 'Just Shipped',
    statusColor: 'text-brand-gold',
    url: 'https://tattbylyds.vercel.app',
  },
  {
    emoji: '💆',
    title: 'Fab The Stretch Lad',
    desc: 'High-conversion landing page for a stretch therapist. Online booking system, Telegram notifications, service showcase.',
    tech: ['Vite', 'Tailwind', 'Supabase'],
    status: 'Live',
    statusColor: 'text-green-400',
    url: 'https://fabthestretchlad.vercel.app',
  },
  {
    emoji: '🎨',
    title: 'Pocolane',
    desc: 'E-commerce platform for acrylic keychains & stickers. AI chatbot, PayNow QR checkout, product catalog, admin panel. Self-taught and launched in under 10 hours.',
    tech: ['React', 'Firebase', 'Gemini AI'],
    status: 'Live',
    statusColor: 'text-green-400',
    url: 'https://pocolane.studio',
  },
]

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-[#060606]">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">What I Build.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base max-w-lg mx-auto">Real apps for real businesses. Not templates — custom-built solutions.</p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {portfolioProjects.map((p, i) => {
          const Wrapper = p.url ? 'a' : 'div';
          const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <motion.div key={i} variants={fadeIn}>
              <Wrapper {...linkProps} className={`group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04] block ${p.url ? 'cursor-pointer' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{p.emoji}</div>
                  {p.url && <span className="text-gray-600 group-hover:text-brand-gold text-sm transition-colors">↗</span>}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, j) => (
                    <span key={j} className="bg-white/5 px-2 py-0.5 rounded text-xs text-gray-500">{t}</span>
                  ))}
                </div>
                <span className={`${p.statusColor} text-xs font-bold uppercase tracking-widest`}>{p.status}</span>
              </Wrapper>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
)

/* ─── WHY ME ─── */
const whyMeCards = [
  {
    emoji: '🛡️',
    title: 'Zero Tolerance for Errors',
    desc: "Every line of code tested. Every page optimised. Your business deserves precision — no shortcuts, no excuses.",
    stat: '100%',
    statLabel: 'delivery rate',
  },
  {
    emoji: '⚡',
    title: 'We Ship Fast',
    desc: 'Most projects delivered in 4-6 weeks. Consistent delivery, no missed deadlines. Speed without sacrificing quality.',
    stat: '4-6 wk',
    statLabel: 'delivery time',
  },
  {
    emoji: '🎯',
    title: 'I Am My Customer',
    desc: "From gym websites to e-commerce stores — I do it all. I build for small businesses because I run one.",
    stat: '5',
    statLabel: 'live projects',
  },
  {
    emoji: '🤝',
    title: 'Your Business, Your Code',
    desc: "No monthly fees. No vendor lock-in. Absolutely no hidden fees. You own everything — code, domain, data. I build it, hand it over, and support you after.",
    stat: '$0/mo',
    statLabel: 'after launch',
  },
]

const WhyMe = () => (
  <section id="why-me" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">Why Work With Me.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {whyMeCards.map((c, i) => (
          <motion.div key={i} variants={fadeIn} className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
            <div className="text-3xl mb-3">{c.emoji}</div>
            <div className="mb-3">
              <span className="font-display text-3xl text-brand-gold tracking-wide">{c.stat}</span>
              <span className="text-gray-600 text-xs uppercase tracking-widest ml-2">{c.statLabel}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

/* ─── PRICING ─── */
const Pricing = () => (
  <section id="pricing" className="py-24 bg-[#060606]">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-2">SIMPLE PRICING.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base max-w-xl mx-auto">Other agencies charge you rent. I sell you the house. You own everything from day one.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        <div className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-8 transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Starter</span>
          </div>
          <div className="mb-4">
            <span className="font-display text-4xl text-white tracking-wide">$500-800</span>
            <span className="text-gray-600 text-sm ml-2">SGD / one-time</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">Perfect for home bakers, freelancers, and therapists.</p>
          <ul className="space-y-3">
            {['Landing page', 'Mobile responsive', 'Contact / WhatsApp integration', 'Deployed on your custom domain', 'You own the code'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-brand-gold text-xs">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="group bg-white/[0.02] border border-brand-gold/30 rounded-xl p-8 transition-all duration-300 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold text-black text-xs font-bold uppercase tracking-widest rounded-full">Most Popular</div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-4">
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Growth</span>
          </div>
          <div className="mb-4">
            <span className="font-display text-4xl text-white tracking-wide">$1,500-3,000</span>
            <span className="text-gray-600 text-sm ml-2">SGD / one-time</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">For gyms, clinics, and growing businesses.</p>
          <ul className="space-y-3">
            {['Multi-page website', 'Booking / scheduling system', 'Payment integration', 'Admin dashboard', 'SEO optimized', 'You own the code'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-brand-gold text-xs">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="group bg-white/[0.02] border border-white/5 hover:border-brand-red/40 rounded-xl p-8 transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/30 rounded-full mb-4">
            <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">Scale</span>
          </div>
          <div className="mb-4">
            <span className="font-display text-4xl text-white tracking-wide">$3,000+</span>
            <span className="text-gray-600 text-sm ml-2">SGD / one-time</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">Mobile apps, platforms, and custom solutions.</p>
          <ul className="space-y-3">
            {['Mobile app (iOS + Android)', 'Full admin dashboard', 'Custom features & integrations', 'Real-time functionality', 'Ongoing support', 'You own the code'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-brand-gold text-xs">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-4">
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">🛡️ Annual Maintenance</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-2">$300-600<span className="text-gray-600 text-lg font-sans">/year</span></h3>
            <p className="text-gray-500 text-sm mb-2">Less than $1/day. Your site, protected and maintained.</p>
            <p className="text-brand-gold text-sm font-semibold">⚡ 1-Hour Emergency Response SLA</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              '🔧 Hosting management',
              '🌐 Domain renewal',
              '🔒 SSL & security updates',
              '⚡ 1-hr emergency fix',
              '📊 Uptime monitoring',
              '📝 2hrs changes/month',
              '💬 Priority WhatsApp',
              '📦 Monthly backups',
            ].map((item, i) => (
              <div key={i} className="text-gray-300 text-sm">{item}</div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-white/5">
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-6">3-Year Cost Comparison</p>
          <div className="grid grid-cols-3 gap-4 text-center max-w-lg mx-auto">
            <div />
            <div className="text-gray-500 text-xs uppercase tracking-widest">Subscription Agency</div>
            <div className="text-brand-gold text-xs uppercase tracking-widest">Isaac</div>
            <div className="text-gray-400 text-sm text-left">3-Year Total</div>
            <div className="text-gray-400 text-sm line-through">$1,800-10,800</div>
            <div className="text-white font-bold text-sm">$1,400-2,300</div>
            <div className="text-gray-400 text-sm text-left">Own Code?</div>
            <div className="text-brand-red text-sm">❌ Never</div>
            <div className="text-green-400 text-sm">✅ Day 1</div>
            <div className="text-gray-400 text-sm text-left">Site Down Fix</div>
            <div className="text-gray-500 text-sm">"We'll look into it"</div>
            <div className="text-brand-gold text-sm font-semibold">⚡ 1 Hour</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ─── CONTACT / FOOTER ─── */
const Contact = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Isaac! I'm ${name}. ${message}`
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
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">Let's Build Something.</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mb-6" />
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Need an app for your business? A booking system? A management platform? Not sure what you need? Let's figure it out together.
            </p>

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
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 focus:border-brand-gold/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Your Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I need an app for my business..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 focus:border-brand-gold/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              💬 Send via WhatsApp
            </button>
          </form>
        </div>

        <div className="pt-12 mt-12 border-t border-white/5 text-center">
          <p className="text-gray-700 text-xs">© 2026 isaacyap.ai. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── APP ─── */
function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-brand-red/80 selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <Portfolio />
      <About />
      <AsSeenIn />
      <WhyMe />
      {/* <Pricing /> — hidden until Isaac is ready to charge */}
      <Contact />
    </div>
  )
}

export default App
