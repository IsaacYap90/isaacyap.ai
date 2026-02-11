import { useState } from 'react'

/* ─── NAV ─── */
const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/images/logo-referee.jpg" alt="Logo" className="w-9 h-9 rounded-full ring-2 ring-brand-gold/60" />
        <span className="font-bold text-white tracking-wide text-sm uppercase">Isaac Yap</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">About</a>
        <a href="#gallery" className="text-gray-400 hover:text-brand-gold transition-colors">Gallery</a>
        <a href="#projects" className="text-gray-400 hover:text-brand-gold transition-colors">Projects</a>
        <a href="#contact" className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-all text-xs uppercase tracking-wider">Contact</a>
      </div>
    </div>
  </nav>
)

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-end pb-24 md:items-center md:pb-0 overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img
        src="/images/hero-rebel-fc.jpg"
        alt="Isaac Yap — Rebel Fighting Championship"
        className="w-full h-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
    </div>

    <div className="container mx-auto px-6 z-10 max-w-5xl">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Professional MMA Referee</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-6">
          <span className="text-white">PRECISION</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-yellow-500 to-brand-gold">IN CHAOS.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
          500+ bouts officiated. Zero controversies.<br />
          <span className="text-white font-medium">The standard for Southeast Asian MMA.</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="group px-7 py-3.5 bg-brand-red hover:bg-red-600 text-white font-bold rounded-lg transition-all flex items-center gap-2">
            Work With Me
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#gallery" className="px-7 py-3.5 border border-white/15 hover:border-brand-gold text-white hover:text-brand-gold font-semibold rounded-lg transition-all backdrop-blur-sm">
            View Gallery
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
  { value: '500+', label: 'Professional Bouts', color: 'text-white' },
  { value: '0', label: 'Controversial Decisions', color: 'text-brand-gold' },
  { value: '15+', label: 'Years in Combat Sports', color: 'text-white' },
  { value: '3', label: 'MMA · Boxing · Kickboxing', color: 'text-brand-red' },
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
            alt="Isaac Yap — Malaysian Invasion MMA"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
            <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">Malaysian Invasion MMA</p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">The Man in the Middle.</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mb-8" />

        <p className="text-gray-400 text-base leading-relaxed mb-5">
          Since 2003, I've been immersed in combat sports — first as an apprentice under <span className="text-white font-semibold">Melvin Yeoh</span> (the Godfather of Malaysian MMA), then as Chief Official for <span className="text-white font-semibold">Ultimate Beatdown</span>.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          In the cage, a split-second mistake can end a career. My job is absolute precision, safety, and fairness. I bring that same <span className="text-brand-gold font-semibold">zero-error mindset</span> to everything I build.
        </p>

        <div className="space-y-3">
          {[
            'Chief Official — Ultimate Beatdown (Since 2011)',
            'Rebel FC · Malaysian Invasion · ONE Silat',
            'Featured: Malaysian TV Ch8 · BFM 89.9',
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

/* ─── GALLERY ─── */
const galleryImages = [
  { src: '/images/action-ground.jpg', alt: 'Ground action — ONE Championship', span: 'md:col-span-2' },
  { src: '/images/victory-warrior-fc.jpg', alt: 'Victory raise — Warrior FC', span: '' },
  { src: '/images/victory-cage.jpg', alt: 'Victory call — Regional event', span: '' },
  { src: '/images/silat-referee.jpg', alt: 'ONE Silat Championship', span: 'md:col-span-2' },
  { src: '/images/victory-raise.jpg', alt: 'Singapore event', span: '' },
  { src: '/images/victory-belt.jpg', alt: 'Championship belt ceremony', span: 'md:col-span-2' },
]

const Gallery = () => (
  <section id="gallery" className="py-24 bg-[#060606]">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">In the Ring.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {galleryImages.map((img, i) => (
          <div key={i} className={`relative overflow-hidden rounded-xl aspect-[4/3] group ${img.span}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── PROJECTS ─── */
const projects = [
  {
    emoji: '🥊',
    title: 'JMT Super App',
    desc: 'Full gym management ecosystem — admin, coaches, members. React Native + Supabase.',
    status: 'Coming Soon',
    statusColor: 'text-brand-gold',
  },
  {
    emoji: '💆',
    title: 'The Stretch Lad',
    desc: 'Scaling a stretch therapist from 30 → 100 clients/month with a high-conversion landing page.',
    status: 'In Progress',
    statusColor: 'text-brand-red',
  },
  {
    emoji: '🎨',
    title: 'Pocolane Studio',
    desc: 'Art & physical products e-commerce. Firebase-hosted. "Big Heart Energy."',
    status: 'Live',
    statusColor: 'text-green-400',
    link: 'https://pocolane.studio',
  },
]

const Projects = () => (
  <section id="projects" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">From the Ring to the Code.</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base max-w-lg mx-auto">I spent a decade ensuring fair fights. Now I build unfair advantages for businesses.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div key={i} className="group bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
            <div className="text-3xl mb-4">{p.emoji}</div>
            <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
            {p.link ? (
              <a href={p.link} target="_blank" className={`${p.statusColor} text-xs font-bold uppercase tracking-widest hover:underline`}>
                Visit →
              </a>
            ) : (
              <span className={`${p.statusColor} text-xs font-bold uppercase tracking-widest`}>{p.status}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── CONTACT / FOOTER ─── */
const Contact = () => (
  <section id="contact" className="relative py-24 bg-[#060606] border-t border-white/5">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(230,57,70,0.05)_0%,_transparent_60%)]" />
    <div className="container mx-auto px-6 text-center relative max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Ready to Build?</h2>
      <p className="text-gray-500 text-base mb-10">Custom apps for gyms, studios, and service businesses.</p>

      <div className="flex justify-center gap-8 mb-12">
        <a href="https://www.instagram.com/isaacyap.90" target="_blank" className="group flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-gold/50 flex items-center justify-center transition-all">
            <span className="text-lg">📸</span>
          </div>
          <span className="text-gray-500 group-hover:text-brand-gold text-xs transition-colors">Instagram</span>
        </a>
        <a href="https://www.facebook.com/IsaacProMMARef/" target="_blank" className="group flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-gold/50 flex items-center justify-center transition-all">
            <span className="text-lg">👤</span>
          </div>
          <span className="text-gray-500 group-hover:text-brand-gold text-xs transition-colors">Facebook</span>
        </a>
      </div>

      <div className="pt-8 border-t border-white/5">
        <p className="text-gray-700 text-xs">© 2026 Isaac Yap. All rights reserved.</p>
      </div>
    </div>
  </section>
)

/* ─── APP ─── */
function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-brand-red/80 selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
