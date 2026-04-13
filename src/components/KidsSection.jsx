const KIDS = [
  {
    name: 'PUMPA',
    fullName: 'Pumpa Pepe',
    emoji: '🐸🚀',
    color: '#FF6B35',
    glow: 'rgba(255,107,53,0.6)',
    born: 'Block #1337',
    occupation: 'Professional Bull',
    stats: { vibes: 100, diamond: 95, iq: 42, based: 99 },
    quote: 'Pump it or dump it. I choose pump. Always pump.',
    lore: 'Born during a 100x candle, Pumpa came into the world screaming and has never stopped. He is the reason your portfolio is green (and sometimes very red). He trades on emotion and somehow always wins.',
    catchphrase: 'NUMBER GO UP 📈',
    bg: 'from-orange-950 to-red-950',
  },
  {
    name: 'PYUPE',
    fullName: 'Pyupe Pepe',
    emoji: '🐸🎭',
    color: '#BF00FF',
    glow: 'rgba(191,0,255,0.6)',
    born: 'Block #4200',
    occupation: 'Philosophical Frog',
    stats: { vibes: 88, diamond: 70, iq: 140, based: 95 },
    quote: 'What if the real blockchain was the frens we made along the way?',
    lore: 'Pyupe was born during a bear market and has never quite recovered. Spends his days posting galaxy-brained threads at 3AM that somehow make total sense. Has never sold. Has never bought. Just holds the vision.',
    catchphrase: 'NGMI = not my problem 🧠',
    bg: 'from-purple-950 to-violet-950',
  },
  {
    name: 'PIPPI',
    fullName: 'Pippi Pepe',
    emoji: '🐸⭐',
    color: '#FFE600',
    glow: 'rgba(255,230,0,0.6)',
    born: 'Block #6900',
    occupation: 'Diamond Hand Diva',
    stats: { vibes: 99, diamond: 100, iq: 88, based: 97 },
    quote: 'I have never sold anything in my life and I never will.',
    lore: 'The strongest of the Pepe children. Pippi once held through a 99% drawdown and came out the other side with more money than she started. Her hands are not made of diamond — they ARE diamond. Built different. Forged in the fires of crypto bear markets.',
    catchphrase: 'DIAMOND HANDS FOREVER 💎',
    bg: 'from-yellow-950 to-amber-950',
  },
  {
    name: 'PUPPE',
    fullName: 'Puppe Pepe',
    emoji: '🐸👶',
    color: '#00BFFF',
    glow: 'rgba(0,191,255,0.6)',
    born: 'Block #69420',
    occupation: 'Chaos Agent',
    stats: { vibes: 100, diamond: 60, iq: '???', based: 100 },
    quote: 'Goo goo. 100x. Ga ga. Wen moon?',
    lore: 'The baby. The wildcard. The one who minted an NFT at 6 months old and made more money than his entire family combined. Puppe operates on pure chaos energy. Has already filed 3 whitepapers. None of them make sense. Two went 100x.',
    catchphrase: 'GGA GGA WEN MOON 🌙',
    bg: 'from-blue-950 to-cyan-950',
  },
]

function StatBar({ label, value }) {
  const numVal = typeof value === 'number' ? value : 69
  return (
    <div className="flex items-center gap-2 text-xs font-body">
      <span className="text-gray-400 w-16 shrink-0">{label}</span>
      <div className="flex-1 bg-gray-800 rounded-full h-2">
        <div className="h-2 rounded-full transition-all duration-1000"
          style={{ width: `${numVal}%`, background: 'linear-gradient(90deg, #4CAF50, #76ff03)' }} />
      </div>
      <span className="text-pepe-lime w-8 text-right">{value}</span>
    </div>
  )
}

export default function KidsSection() {
  return (
    <section id="kids" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(118,255,3,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <div className="font-meme text-pepe-lime text-lg tracking-[0.5em] mb-2 opacity-60">CHAPTER III</div>
          <h2 className="font-meme text-5xl md:text-7xl text-white"
            style={{ textShadow: '3px 3px 0 #006400, 0 0 30px rgba(118,255,3,0.3)' }}>
            MEET THE KIDS 👶
          </h2>
          <p className="font-body text-pepe-green text-lg mt-3 italic">Each one a 100x in the making</p>
        </div>

        {/* Kids Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KIDS.map((kid) => (
            <div key={kid.name} className="pepe-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              style={{ border: `3px solid ${kid.color}`, boxShadow: `0 0 30px ${kid.glow}40` }}>

              {/* Header */}
              <div className={`bg-gradient-to-r ${kid.bg} p-6 flex items-center gap-4`}>
                <div className="text-6xl" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  {kid.emoji}
                </div>
                <div>
                  <div className="font-meme text-4xl" style={{ color: kid.color, textShadow: `0 0 15px ${kid.color}` }}>
                    {kid.name}
                  </div>
                  <div className="font-body text-sm text-gray-300">{kid.occupation}</div>
                  <div className="font-body text-xs text-gray-500">Born: {kid.born}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-meme text-xs rounded-full px-3 py-1"
                    style={{ background: kid.color, color: '#0d1a0d' }}>
                    BASED
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">

                {/* Quote */}
                <blockquote className="border-l-4 pl-4 italic font-body text-gray-300 text-sm"
                  style={{ borderColor: kid.color }}>
                  "{kid.quote}"
                </blockquote>

                {/* Lore */}
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  {kid.lore}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="font-meme text-sm" style={{ color: kid.color }}>STATS</div>
                  <StatBar label="VIBES" value={kid.stats.vibes} />
                  <StatBar label="DIAMOND" value={kid.stats.diamond} />
                  <StatBar label="IQ" value={kid.stats.iq} />
                  <StatBar label="BASED" value={kid.stats.based} />
                </div>

                {/* Catchphrase */}
                <div className="text-center font-meme text-xl py-3 rounded-xl"
                  style={{ background: `${kid.color}15`, border: `1px solid ${kid.color}40`, color: kid.color }}>
                  {kid.catchphrase}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 text-center">
          <div className="font-meme text-4xl md:text-5xl text-pepe-lime mb-4"
            style={{ textShadow: '0 0 20px rgba(118,255,3,0.5)' }}>
            ALL OF THEM ARE GONNA MAKE IT 🚀
          </div>
          <p className="font-body text-pepe-green text-lg italic">
            (this is not financial advice. we are frogs.)
          </p>
        </div>
      </div>
    </section>
  )
}
