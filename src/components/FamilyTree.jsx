import { useState } from 'react'

const FAMILY = {
  parents: [
    {
      name: 'PEPE',
      title: 'THE OG',
      emoji: '🐸',
      color: '#76ff03',
      glow: 'rgba(118,255,3,0.5)',
      desc: 'The original frog. The one who started it all. Feels good, man.',
      trait: '💚 Vibe: Sad but based',
      power: '🔮 Power: Market manipulation via memes',
    },
    {
      name: 'PEEPA',
      title: 'THE QUEEN',
      emoji: '🐸💄',
      color: '#FF69B4',
      glow: 'rgba(255,105,180,0.5)',
      desc: 'She said "I do" to a frog and somehow it worked. Slay queen.',
      trait: '💄 Vibe: Boss frog energy',
      power: '👑 Power: Turning red candles green',
    },
  ],
  children: [
    {
      name: 'PUMPA',
      emoji: '🐸🚀',
      color: '#FF6B35',
      glow: 'rgba(255,107,53,0.5)',
      desc: 'Eldest son. Always pumping. Never dumping. Giga chad frog.',
      trait: '🚀 Vibe: Bullish 24/7',
      power: '📈 Power: Makes number go up',
      badge: 'FIRST BORN',
    },
    {
      name: 'PYUPE',
      emoji: '🐸🎭',
      color: '#BF00FF',
      glow: 'rgba(191,0,255,0.5)',
      desc: 'The philosopher of the family. Questions everything. Based.',
      trait: '🎭 Vibe: NPC in a world of frogs',
      power: '🧠 Power: Galaxy brain posting',
      badge: 'THE THINKER',
    },
    {
      name: 'PIPPI',
      emoji: '🐸⭐',
      color: '#FFE600',
      glow: 'rgba(255,230,0,0.5)',
      desc: 'The girl boss daughter. Diamond hands. Never paper hands.',
      trait: '⭐ Vibe: Unstoppable frogette',
      power: '💎 Power: Diamond hands forever',
      badge: 'GEM HANDS',
    },
    {
      name: 'PUPPE',
      emoji: '🐸👶',
      color: '#00BFFF',
      glow: 'rgba(0,191,255,0.5)',
      desc: 'The baby. The wildcard. Already plotting a rug on his siblings.',
      trait: '👶 Vibe: Chaotic neutral',
      power: '🎲 Power: Random 100x launches',
      badge: 'BABY DEGEN',
    },
  ]
}

function FrogCard({ member, size = 'normal', isParent = false }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${size === 'large' ? 'w-48 md:w-56' : 'w-36 md:w-44'}`}
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div style={{
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        position: 'relative',
        height: size === 'large' ? '200px' : '160px',
      }}>
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 p-3"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #0d1a0d, #1a2e1a)',
            border: `3px solid ${member.color}`,
            boxShadow: `0 0 20px ${member.glow}, 0 0 40px ${member.glow}40`,
          }}>
          <div className={`${size === 'large' ? 'text-6xl' : 'text-5xl'}`}
            style={{ animation: 'float 3s ease-in-out infinite', display: 'block' }}>
            {member.emoji}
          </div>
          <div className="font-meme text-center leading-tight"
            style={{ color: member.color, fontSize: size === 'large' ? '1.5rem' : '1.2rem', textShadow: `0 0 10px ${member.color}` }}>
            {member.name}
          </div>
          {member.title && (
            <div className="font-body text-xs text-center opacity-70" style={{ color: member.color }}>
              {member.title}
            </div>
          )}
          {member.badge && (
            <div className="font-meme text-xs px-2 py-0.5 rounded-full"
              style={{ background: member.color, color: '#0d1a0d', fontSize: '0.6rem' }}>
              {member.badge}
            </div>
          )}
          <div className="font-body text-xs text-pepe-green opacity-50 mt-1">tap to flip 👆</div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 p-3 text-center overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${member.color}22, ${member.color}11)`,
            border: `3px solid ${member.color}`,
          }}>
          <div className="font-body text-xs text-white leading-relaxed">{member.desc}</div>
          <div className="font-body text-xs mt-1" style={{ color: member.color }}>{member.trait}</div>
          <div className="font-body text-xs" style={{ color: member.color }}>{member.power}</div>
        </div>
      </div>
    </div>
  )
}

export default function FamilyTree() {
  return (
    <section id="family-tree" className="py-20 px-4 relative overflow-hidden">

      {/* BG effect */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(76,175,80,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="font-meme text-pepe-lime text-lg tracking-[0.5em] mb-2 opacity-60">CHAPTER II</div>
          <h2 className="font-meme text-5xl md:text-7xl text-white"
            style={{ textShadow: '3px 3px 0 #006400, 0 0 30px rgba(118,255,3,0.3)' }}>
            THE FAMILY TREE 🌳
          </h2>
          <p className="font-body text-pepe-green text-lg mt-3 italic">tap the frogs to reveal their secrets</p>
        </div>

        {/* Parents Row */}
        <div className="flex justify-center items-end gap-6 md:gap-16 mb-8">
          <FrogCard member={FAMILY.parents[0]} size="large" isParent />

          {/* Heart between parents */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="font-meme text-4xl text-pepe-pink" style={{ color: '#FF69B4', textShadow: '0 0 15px #FF69B4', animation: 'pulse 1s infinite' }}>
              💍
            </div>
            <div className="font-meme text-xl text-white">+</div>
            <div className="font-body text-xs text-pepe-green opacity-60 text-center">together<br/>forever</div>
          </div>

          <FrogCard member={FAMILY.parents[1]} size="large" isParent />
        </div>

        {/* Connection lines */}
        <div className="flex justify-center mb-2">
          <div className="w-px h-10 bg-pepe-green opacity-60" />
        </div>
        <div className="flex justify-center mb-2">
          <div className="w-8 h-8 rounded-full bg-pepe-dark border-2 border-pepe-green flex items-center justify-center font-meme text-pepe-lime text-lg">
            =
          </div>
        </div>
        <div className="flex justify-center mb-2">
          <div className="w-px h-8 bg-pepe-green opacity-60" />
        </div>

        {/* Horizontal line connecting kids */}
        <div className="relative flex justify-center mb-2">
          <div className="h-px bg-pepe-green opacity-60" style={{ width: '75%' }} />
          {/* Vertical drops */}
          {FAMILY.children.map((_, i) => (
            <div key={i} className="absolute top-0 w-px h-6 bg-pepe-green opacity-60"
              style={{ left: `${12.5 + i * 25}%` }} />
          ))}
        </div>

        {/* Children Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
          {FAMILY.children.map((kid) => (
            <FrogCard key={kid.name} member={kid} size="normal" />
          ))}
        </div>

        {/* Family motto */}
        <div className="text-center mt-16">
          <div className="inline-block border-2 border-pepe-green rounded-2xl px-8 py-5"
            style={{ background: 'rgba(76,175,80,0.05)', boxShadow: '0 0 30px rgba(76,175,80,0.2)' }}>
            <div className="font-meme text-3xl text-pepe-lime mb-2">FAMILY MOTTO 📜</div>
            <div className="font-body text-xl text-white italic">
              "We don't know what we're doing,<br />but at least we're doing it together 🐸"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
