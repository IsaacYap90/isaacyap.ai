import { useState } from 'react'

/* ─── NAV ─── */
const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }} className="flex items-center gap-3 group">
        <img src="/images/logo-cropped.jpg" alt="Logo" className="w-11 h-11 rounded-full ring-2 ring-brand-gold/60 object-contain bg-black p-0.5" />
        <div className="leading-tight">
          <span className="font-black text-white text-2xl md:text-3xl tracking-wide block group-hover:text-brand-gold transition-colors">ISAAC YAP</span>
          <span className="text-brand-gold text-[10px] font-semibold uppercase tracking-[0.15em]">Software Developer</span>
        </div>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">About</a>
        <a href="#portfolio" className="text-gray-400 hover:text-brand-gold transition-colors">Portfolio</a>
        <a href="#why-me" className="text-gray-400 hover:text-brand-gold transition-colors">Why Me</a>
        <a href="#contact" className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-all text-xs uppercase tracking-wider">Contact</a>
      </div>
    </div>
  </nav>
)

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img
        src="/images/hero-rebel-fc.jpg"
        alt="Isaac Yap"
        className="w-full h-full object-cover object-[center_15%]"
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

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-6">
          <span className="text-white">PRECISION</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-yellow-500 to-brand-gold">IN CHAOS.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
          I build apps that solve real problems for small businesses.<br />
          <span className="text-white font-medium">Mobile apps. Web platforms. From concept to launch.</span>
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
  { value: '4', label: 'Apps Shipped', color: 'text-white' },
  { value: '2', label: 'Industries Served', color: 'text-brand-gold' },
  { value: '∞', label: 'Problems Solved', color: 'text-white' },
  { value: '1', label: 'Mission: Help SMEs Win', color: 'text-brand-red' },
]

const Stats = () => (
  <section className="relative py-16 bg-[#0a0a0a] border-y border-white/5">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.03)_0%,_transparent_70%)]" />
    <div className="container mx-auto px-6 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <h3 className={`text-4xl md:text-5xl font-black ${s.color} mb-1`}>{s.value}</h3>
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
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center max-w-6xl">
      {/* Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-br from-brand-red to-brand-gold rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
        <div className="relative h-[520px] rounded-2xl overflow-hidden">
          <img
            src="/images/about-arms-spread.jpg"
            alt="Isaac Yap"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
            <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">Builder · Fighter · Developer</p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Builder. Fighter. Problem Solver.</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mb-8" />

        <p className="text-gray-400 text-base leading-relaxed mb-5">
          I'm a software developer who understands small business — because <span className="text-white font-semibold">I am one</span>. Before writing code, I spent a decade as a professional MMA referee, officiating <span className="text-white font-semibold">500+ bouts with zero controversies</span>.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          That career taught me what no bootcamp can: a <span className="text-brand-gold font-semibold">zero-error mindset</span>, split-second decision-making, and the discipline to perform under pressure. Now I bring that same precision to building apps for businesses in Singapore and Malaysia.
        </p>

        <div className="space-y-3">
          {[
            'Full Stack: React Native · Next.js · Supabase',
            'MMA Referee: 500+ Bouts, Zero Controversies',
            'Muay Thai Coach @ Evolve MMA, Singapore',
            'Bilingual: English & Mandarin 中文',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-brand-red' : 'bg-brand-gold'}`} />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">As Seen In.</h2>
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What I Build.</h2>
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
    emoji: '🎯',
    title: 'I Understand Small Business',
    desc: 'Because I am one. I know the pain points, the budget constraints, and what actually moves the needle.',
  },
  {
    emoji: '⚡',
    title: 'I Build Fast',
    desc: 'AI-powered development means your app ships in weeks, not months. Speed without cutting corners.',
  },
  {
    emoji: '🔧',
    title: 'Full Stack',
    desc: 'Mobile + web + backend. One developer, one codebase, complete solution. No agency overhead.',
  },
  {
    emoji: '🌏',
    title: 'Local Market',
    desc: 'Based in Singapore & Malaysia. I understand the market, the culture, the users. We speak the same language.',
  },
]

const WhyMe = () => (
  <section id="why-me" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Why Work With Me.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyMeCards.map((c, i) => (
          <div key={i} className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
            <div className="text-3xl mb-4">{c.emoji}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Let's Build Something.</h2>
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
      <About />
      <AsSeenIn />
      <Portfolio />
      <WhyMe />
      <Contact />
    </div>
  )
}

export default App
