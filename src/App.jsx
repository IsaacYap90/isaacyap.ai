import { useState } from 'react'

/* ─── NAV ─── */
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }} className="flex items-center gap-3 group">
          <img src="/images/logo-cropped.jpg" alt="Logo" className="w-11 h-11 rounded-full ring-2 ring-brand-gold/60 object-contain bg-black p-0.5" />
          <div className="leading-tight">
            <span className="font-logo text-white text-2xl md:text-3xl tracking-wide block group-hover:text-brand-gold transition-colors">ISAAC YAP</span>
            <span className="text-brand-gold text-[10px] font-semibold uppercase tracking-[0.15em]">Software Developer</span>
          </div>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#portfolio" className="text-gray-400 hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">About</a>
          <a href="#why-me" className="text-gray-400 hover:text-brand-gold transition-colors">Why Me</a>
          <a href="#contact" className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-all text-xs uppercase tracking-wider">Contact</a>
        </div>
        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {/* Mobile menu */}
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
  <section className="relative min-h-[110vh] md:min-h-screen flex items-end pb-10 overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img
        src="/images/hero-rebel-fc.jpg"
        alt="Isaac Yap"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
    </div>

    <div className="container mx-auto px-6 z-10 max-w-5xl">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Software Developer · SG/MY</span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-9xl leading-[0.9] tracking-wide mb-6">
          <span className="text-white">PRECISION</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-yellow-500 to-brand-gold">IN CHAOS.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
          I replaced a gym's <span className="text-white font-medium">$7,600/yr software</span> with a custom app. I build <span className="text-white font-medium">booking systems, management platforms, and websites</span> for small businesses in SG & MY.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#portfolio" className="group px-7 py-3.5 bg-brand-red hover:bg-red-600 text-white font-bold rounded-lg transition-all flex items-center gap-2">
            See My Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#contact" className="px-7 py-3.5 border border-white/15 hover:border-brand-gold text-white hover:text-brand-gold font-semibold rounded-lg transition-all backdrop-blur-sm">
            Let's Talk
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
      <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-brand-gold rounded-full animate-bounce" />
      </div>
    </div>
  </section>
)

/* ─── STATS ─── */
const stats = [
  { value: '$7,600', label: 'Saved for One Gym (Per Year)', color: 'text-white' },
  { value: '500+', label: 'MMA Bouts Officiated', color: 'text-brand-gold' },
  { value: '4', label: 'Apps Shipped', color: 'text-white' },
  { value: '<4 Weeks', label: 'Average Build Time', color: 'text-brand-red' },
]

const Stats = () => (
  <section className="relative py-16 bg-[#0a0a0a] border-y border-white/5">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.03)_0%,_transparent_70%)]" />
    <div className="container mx-auto px-6 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <h3 className={`font-display text-5xl md:text-6xl tracking-wide ${s.color} mb-1`}>{s.value}</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── ABOUT ─── */
const About = () => (
  <section id="about" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-6xl">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-2">FROM THE CAGE TO THE CODE.</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
          <div className="relative h-[520px] rounded-2xl overflow-hidden">
            <img
              src="/images/about-arms-spread.jpg"
              alt="Isaac Yap"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
              <p className="font-display text-2xl text-white tracking-wide">ISAAC YAP</p>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mt-1">MMA Referee · Developer · Coach</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I spent a decade inside the cage as a professional MMA referee — <span className="text-white font-semibold">500+ bouts, zero controversies</span>. ONE Championship. Rebel FC. Ultimate Beatdown.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            That career taught me what no bootcamp can: a <span className="text-brand-gold font-semibold">zero-error mindset</span> under pressure. Now I build software with that same precision.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            I understand service businesses because <span className="text-white font-semibold">I am one</span>. Gyms, therapists, artists, bakers — I know the pain points because I live them.
          </p>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '💻', title: 'Full Stack Dev', desc: 'React Native · Next.js · Supabase' },
              { icon: '🥊', title: '500+ Bouts', desc: 'ONE Championship · Rebel FC · UB' },
              { icon: '🥋', title: 'Muay Thai Coach', desc: 'Evolve MMA, Singapore' },
              { icon: '🌏', title: 'SG / MY Based', desc: 'English & Mandarin 中文' },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-brand-gold/30 transition-colors">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ─── AS SEEN IN ─── */
const AsSeenIn = () => (
  <section className="py-24 bg-[#060606]">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">As Seen In.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base">Featured as the MMA referee in the Malaysian blockbuster film <span className="text-white font-semibold">WIRA</span> (2019)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
          <div className="relative rounded-2xl overflow-hidden">
            <video
              src="/images/wira-clip-2.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-2xl aspect-video object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-brand-gold/30 rounded-full backdrop-blur-sm pointer-events-none">
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">🎬 WIRA (2019)</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
          <div className="relative rounded-2xl overflow-hidden">
            <video
              src="/images/wira-clip.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-2xl aspect-video object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/70 border border-brand-gold/30 rounded-full backdrop-blur-sm pointer-events-none">
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">🎬 WIRA (2019)</span>
            </div>
          </div>
        </div>
      </div>

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
    desc: 'Complete gym management ecosystem — class booking, PT sessions, member portal, coach dashboard, payments. Replaced a $7,600/yr SaaS subscription.',
    tech: ['React Native', 'Expo', 'Supabase'],
    status: 'Live',
    statusColor: 'text-green-400',
  },
  {
    emoji: '🏆',
    title: 'UB Live Scoring',
    desc: 'Real-time MMA fight scoring system. Judges score on iPads, chief official sees live dashboard, instant results. No more paper scorecards.',
    tech: ['React', 'Supabase Realtime', 'Tailwind'],
    status: 'In Development',
    statusColor: 'text-brand-gold',
  },
  {
    emoji: '🎨',
    title: 'TattByLyds',
    desc: "Tattoo booking platform with portfolio gallery, booking form, and PayNow deposit integration. Dark, premium aesthetic for an artist's brand.",
    tech: ['Next.js', 'Tailwind', 'Supabase'],
    status: 'Just Shipped',
    statusColor: 'text-brand-gold',
  },
  {
    emoji: '💆',
    title: 'Fab The Stretch Lad',
    desc: 'High-conversion landing page for a stretch therapist. WhatsApp booking integration, service showcase, consultation flow.',
    tech: ['Vite', 'Tailwind', 'WhatsApp API'],
    status: 'Live',
    statusColor: 'text-green-400',
  },
]

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-[#060606]">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">What I Build.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base max-w-lg mx-auto">Real apps for real businesses. Not templates — custom-built solutions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {portfolioProjects.map((p, i) => (
          <div key={i} className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
            <div className="text-3xl mb-4">{p.emoji}</div>
            <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-white/5 px-2 py-0.5 rounded text-xs text-gray-500">{t}</span>
              ))}
            </div>
            <span className={`${p.statusColor} text-xs font-bold uppercase tracking-widest`}>{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── WHY ME ─── */
const whyMeCards = [
  {
    emoji: '⚡',
    title: 'We Ship Fast',
    desc: 'Landing pages in 24-48 hours. Full sites in 1-2 weeks. AI-powered development = agency quality at freelancer speed.',
    stat: '24-48hr',
    statLabel: 'landing pages',
  },
  {
    emoji: '💰',
    title: 'Skin In The Game',
    desc: "We offer profit-sharing models — we only win when you win. $0 upfront options available for the right partners.",
    stat: '$0',
    statLabel: 'upfront option',
  },
  {
    emoji: '📱',
    title: 'Full Stack',
    desc: 'Websites, mobile apps, admin dashboards, payment systems. One developer, complete solution. No agency markup.',
    stat: '4',
    statLabel: 'apps shipped',
  },
  {
    emoji: '🎯',
    title: 'I Am My Customer',
    desc: "I run a gym app, a tattoo booking site, a therapy landing page. I build for small businesses because I understand the hustle.",
    stat: '100%',
    statLabel: 'real-world tested',
  },
]

const WhyMe = () => (
  <section id="why-me" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">Why Work With Me.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyMeCards.map((c, i) => (
          <div key={i} className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
            <div className="text-3xl mb-3">{c.emoji}</div>
            <div className="mb-3">
              <span className="font-display text-3xl text-brand-gold tracking-wide">{c.stat}</span>
              <span className="text-gray-600 text-xs uppercase tracking-widest ml-2">{c.statLabel}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
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
      <div className="container mx-auto px-6 relative max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">Let's Build Something.</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mb-6" />
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Need an app for your business? A booking system? A management platform? Let's talk about what you need.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <a href="https://wa.me/6580268821" target="_blank" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <span className="text-base">💬</span>
                </div>
                <span className="text-gray-400 group-hover:text-green-400 text-sm transition-colors">WhatsApp: +65 8026 8821</span>
              </a>
              <a href="https://www.instagram.com/isaacyap.ai" target="_blank" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-base">📸</span>
                </div>
                <span className="text-gray-400 group-hover:text-brand-gold text-sm transition-colors">@isaacyap.ai</span>
              </a>
              <a href="https://www.facebook.com/IsaacProMMARef/" target="_blank" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-base">👤</span>
                </div>
                <span className="text-gray-400 group-hover:text-brand-gold text-sm transition-colors">Isaac Yap</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
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
      </div>
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
      <Contact />
    </div>
  )
}

export default App
