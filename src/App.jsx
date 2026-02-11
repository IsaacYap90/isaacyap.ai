import { useState } from 'react'

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-brand-dark relative overflow-hidden">
    {/* Hero Background Image */}
    <div className="absolute inset-0">
      <img 
        src="/images/hero-rebel-fc.jpg" 
        alt="Isaac Yap in the cage at Rebel Fighting Championship" 
        className="w-full h-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-6 text-center z-10">
      <img src="/images/logo-referee.jpg" alt="Isaac Yap Professional Referee Logo" className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-brand-gold" />
      <h2 className="text-brand-gold font-bold tracking-widest text-sm mb-4 uppercase">Professional MMA Referee &amp; Software Engineer</h2>
      <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
        PRECISION<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">IN CHAOS</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
        500+ Bouts. Zero Controversies.<br/>The Standard for Southeast Asian MMA.
        <br/><span className="text-white font-medium mt-2 block">Now Building Unfair Advantages in Software.</span>
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="#contact" className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105">
          WORK WITH ME
        </a>
        <a href="#gallery" className="px-8 py-4 border border-gray-600 hover:border-brand-gold hover:text-brand-gold text-gray-300 font-bold rounded-lg transition-all">
          VIEW GALLERY
        </a>
      </div>
    </div>
  </section>
)

const Stats = () => (
  <section className="py-20 bg-black border-y border-gray-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="p-6">
          <h3 className="text-5xl font-black text-white mb-2">500+</h3>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Professional Bouts</p>
        </div>
        <div className="p-6 md:border-l border-gray-800">
          <h3 className="text-5xl font-black text-brand-gold mb-2">0</h3>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Controversial Decisions</p>
        </div>
        <div className="p-6 md:border-l border-gray-800">
          <h3 className="text-5xl font-black text-white mb-2">15+</h3>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Years in Combat Sports</p>
        </div>
        <div className="p-6 md:border-l border-gray-800">
          <h3 className="text-5xl font-black text-brand-red mb-2">3</h3>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Disciplines (MMA · Boxing · Kickboxing)</p>
        </div>
      </div>
    </div>
  </section>
)

const About = () => (
  <section className="py-24 bg-brand-dark relative">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">The Man in the Middle.</h2>
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          Since 2003, I've been immersed in combat sports—first as an apprentice under <span className="text-white font-semibold">Melvin Yeoh</span> (the Godfather of Malaysian MMA), then as Chief Official for <span className="text-white font-semibold">Ultimate Beatdown</span>.
        </p>
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          In the cage, a split-second mistake can ruin a fighter's career. My job is absolute precision, safety, and fairness. I bring that same <span className="text-brand-gold font-semibold">zero-error mindset</span> to everything I build.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center text-white">
            <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
            Chief Official — Ultimate Beatdown (Since 2011)
          </li>
          <li className="flex items-center text-white">
            <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
            Rebel Fighting Championship · Malaysian Invasion · ONE Silat
          </li>
          <li className="flex items-center text-white">
            <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
            Featured: Malaysian TV Channel 8 · BFM 89.9
          </li>
          <li className="flex items-center text-white">
            <span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>
            Bilingual: English &amp; Mandarin 中文
          </li>
        </ul>
      </div>
      <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-800">
        <img 
          src="/images/about-arms-spread.jpg" 
          alt="Isaac Yap commanding the cage at Malaysian Invasion" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-brand-gold font-bold text-sm uppercase tracking-widest">Malaysian Invasion MMA</p>
        </div>
      </div>
    </div>
  </section>
)

const Gallery = () => (
  <section id="gallery" className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">In The Ring.</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img src="/images/action-ground.jpg" alt="Isaac refereeing ground action" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img src="/images/victory-warrior-fc.jpg" alt="Raising the winner's hand at Warrior FC" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img src="/images/victory-cage.jpg" alt="Victory announcement in the cage" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img src="/images/victory-raise.jpg" alt="Raising the winner's hand" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img src="/images/silat-referee.jpg" alt="ONE Silat Championship referee" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img src="/images/victory-belt.jpg" alt="Championship belt ceremony" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
)

const Builder = () => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">From the Ring to the Code.</h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
        I spent a decade ensuring fair fights. Now I build unfair advantages for businesses.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-brand-gold transition-colors">
          <div className="text-3xl mb-4">🥊</div>
          <h3 className="text-xl font-bold text-white mb-3">JMT Super App</h3>
          <p className="text-gray-400 text-sm">Full gym management ecosystem — admin, coaches, members. Built with React Native + Supabase.</p>
          <span className="inline-block mt-4 text-brand-gold text-xs font-bold uppercase tracking-widest">Coming Soon</span>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-brand-gold transition-colors">
          <div className="text-3xl mb-4">💆</div>
          <h3 className="text-xl font-bold text-white mb-3">The Stretch Lad</h3>
          <p className="text-gray-400 text-sm">Scaling a stretch therapist from 30 to 100 clients/month with a high-conversion landing page.</p>
          <span className="inline-block mt-4 text-brand-gold text-xs font-bold uppercase tracking-widest">In Progress</span>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-brand-gold transition-colors">
          <div className="text-3xl mb-4">🎨</div>
          <h3 className="text-xl font-bold text-white mb-3">Pocolane Studio</h3>
          <p className="text-gray-400 text-sm">Art &amp; physical products e-commerce. Firebase-hosted. "Big Heart Energy."</p>
          <a href="https://pocolane.studio" target="_blank" className="inline-block mt-4 text-brand-gold text-xs font-bold uppercase tracking-widest hover:underline">Visit →</a>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="py-24 bg-black border-t border-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Ready to Build?</h2>
      <p className="text-gray-400 text-lg mb-8">Custom apps for gyms, studios, and service businesses.</p>
      <div className="flex justify-center gap-6 mb-12">
        <a href="https://www.instagram.com/isaacyap.90" target="_blank" className="text-gray-400 hover:text-brand-gold transition-colors text-lg">Instagram</a>
        <a href="https://www.facebook.com/IsaacProMMARef/" target="_blank" className="text-gray-400 hover:text-brand-gold transition-colors text-lg">Facebook</a>
      </div>
      <p className="text-gray-600 text-sm">© 2026 Isaac Yap. All rights reserved.</p>
    </div>
  </section>
)

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Builder />
      <Contact />
    </div>
  )
}

export default App
