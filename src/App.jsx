import { useState } from 'react'

/* ─── NAV ─── */
const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#why', label: 'Why Me' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand mark — big and bold */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="group"
        >
          <span className="font-serif font-black text-3xl md:text-4xl text-white group-hover:text-amber-400 transition-colors tracking-tight leading-none">
            ISAAC YAP
          </span>
          <span className="block text-amber-400 text-[10px] font-bold uppercase tracking-[0.25em]">
            Software Developer
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all text-xs uppercase tracking-wider"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-white/5 px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-300 hover:text-amber-400 transition-colors font-medium border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all text-sm uppercase tracking-wider"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
    <div className="container mx-auto px-6 z-10 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text — left side */}
        <div className="order-2 md:order-1 pt-24 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Software Developer</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
            <span className="text-white">I Build Apps That</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-500 to-amber-400">Solve Real Problems.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            Software developer specializing in mobile apps and web platforms for small businesses in <span className="text-white font-medium">Singapore & Malaysia</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group px-7 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all flex items-center gap-2"
            >
              See My Work
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-white/15 hover:border-amber-400 text-white hover:text-amber-400 font-semibold rounded-lg transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Photo — right side, never overlapped */}
        <div className="order-1 md:order-2 flex justify-center pt-24 md:pt-0">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-red-600/30 to-amber-400/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden ring-2 ring-white/10">
              <img
                src="/images/about-arms-spread.jpg"
                alt="Isaac Yap"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Subtle background glow */}
    <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
      <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
)

/* ─── PORTFOLIO ─── */
const portfolioItems = [
  {
    title: 'JMT Super App',
    desc: 'Full gym management system — class booking, PT sessions, payments, member portal.',
    tech: ['React Native', 'Supabase', 'Expo'],
    color: 'from-red-600/20 to-red-800/20',
    border: 'hover:border-red-500/40',
  },
  {
    title: 'Ultimate Beatdown',
    desc: 'Live MMA fight scoring — real-time judge scoring, bout management, public scoreboards.',
    tech: ['React', 'Supabase Realtime', 'Tailwind'],
    color: 'from-amber-500/20 to-amber-700/20',
    border: 'hover:border-amber-400/40',
  },
  {
    title: 'TattByLyds',
    desc: 'Tattoo booking platform — portfolio gallery, booking form, PayNow deposit integration.',
    tech: ['Next.js', 'Tailwind', 'PayNow'],
    color: 'from-purple-600/20 to-purple-800/20',
    border: 'hover:border-purple-400/40',
  },
  {
    title: 'FabTheStretchLad',
    desc: 'Stretch therapy booking site — service showcase, WhatsApp booking integration, consultation flow.',
    tech: ['Vite', 'Tailwind', 'WhatsApp API'],
    color: 'from-emerald-600/20 to-emerald-800/20',
    border: 'hover:border-emerald-400/40',
  },
]

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-neutral-900/50">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-3">What I Build.</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-base max-w-lg mx-auto">
          Real apps solving real problems for real businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {portfolioItems.map((p, i) => (
          <div
            key={i}
            className={`group bg-neutral-900 border border-white/5 ${p.border} rounded-2xl overflow-hidden transition-all duration-300`}
          >
            {/* Screenshot placeholder */}
            <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/20 text-xs uppercase tracking-widest font-medium">Screenshot coming soon</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── ABOUT ─── */
const About = () => (
  <section id="about" className="py-24 bg-neutral-950">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center max-w-6xl">
      {/* Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-br from-red-600 to-amber-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
        <div className="relative h-[480px] rounded-2xl overflow-hidden">
          <img
            src="/images/hero-rebel-fc.jpg"
            alt="Isaac Yap"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>
      </div>

      {/* Text */}
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-black text-white mb-2">About Me.</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mb-8" />

        <p className="text-gray-400 text-base leading-relaxed mb-5">
          I'm a <span className="text-white font-semibold">software developer</span> based in Singapore & Malaysia, building mobile apps and web platforms that help small businesses grow.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-5">
          I build software because <span className="text-amber-400 font-semibold">I understand what small business owners need — I am one.</span>
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Outside of code, I'm a <span className="text-white font-medium">professional MMA referee</span> with <span className="text-white font-medium">500+ bouts</span> officiated across Southeast Asia, and a <span className="text-white font-medium">Muay Thai coach</span>. The discipline, precision, and split-second decision-making from the cage carries directly into how I build software — zero tolerance for errors, deep understanding of sports & fitness businesses.
        </p>

        <div className="space-y-3">
          {[
            'Full-stack: React Native, Next.js, Supabase, Tailwind',
            '500+ MMA bouts officiated — zero controversies',
            'Chief Official — Ultimate Beatdown (Since 2011)',
            'Bilingual: English & Mandarin 中文',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? 'bg-red-500' : 'bg-amber-400'}`} />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ─── WHY WORK WITH ME ─── */
const whyCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'I understand small businesses',
    desc: 'Because I am one. I know the pain points, the budget constraints, and what actually moves the needle.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'I build fast',
    desc: 'AI-powered development means your app ships in weeks, not months. No bloated timelines.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Full stack',
    desc: 'Mobile + web + backend. One developer, complete solution. No coordination headaches.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local market',
    desc: 'Based in SG/MY. I understand the market, the culture, the users. No timezone gaps.',
  },
]

const WhyMe = () => (
  <section id="why" className="py-24 bg-neutral-900/50">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-3">Why Work With Me.</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyCards.map((card, i) => (
          <div
            key={i}
            className="group bg-neutral-900 border border-white/5 hover:border-amber-400/30 rounded-2xl p-7 transition-all duration-300 hover:bg-neutral-900/80"
          >
            <div className="w-14 h-14 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-400/20 transition-colors">
              {card.icon}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── CONTACT / CTA ─── */
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', project: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Isaac! I'm ${form.name} (${form.email}). Project: ${form.project}`
    window.open(`https://wa.me/6591234567?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-24 bg-neutral-950 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(220,38,38,0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-3">
            Need an app for your business?
          </h2>
          <p className="text-2xl md:text-3xl font-serif font-bold text-amber-400">Let's talk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — WhatsApp CTA */}
          <div>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Whether you need a mobile app, a booking platform, or a full business system — drop me a message. I'll get back to you within 24 hours.
            </p>

            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all text-base mb-8"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="space-y-4">
              <a href="https://www.instagram.com/isaacyap.90" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-amber-400 text-sm transition-colors">@isaacyap.90</span>
              </a>
              <a href="https://github.com/isaacyap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-amber-400 text-sm transition-colors">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/5 rounded-2xl p-7 space-y-5">
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 focus:border-amber-400/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full bg-white/5 border border-white/10 focus:border-amber-400/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Project Description</label>
              <textarea
                name="project"
                required
                value={form.project}
                onChange={handleChange}
                placeholder="Tell me about your project — what does your business need?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 focus:border-amber-400/50 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
            >
              Send Message
              <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="py-8 bg-neutral-950 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/isaacyap.90" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-400 text-sm transition-colors">
            Instagram
          </a>
          <a href="https://github.com/isaacyap" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-400 text-sm transition-colors">
            GitHub
          </a>
        </div>
        <p className="text-gray-700 text-xs">&copy; 2026 isaacyap.ai. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

/* ─── APP ─── */
function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-red-600/80 selection:text-white">
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
