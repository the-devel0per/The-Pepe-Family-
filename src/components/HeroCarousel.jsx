import { useState, useEffect, useCallback } from 'react'

// Placeholder slides - user will import their images here
const SLIDES = [
  {
    id: 1,
    label: 'THE OG PEPE 🐸',
    bg: 'from-green-900 via-green-800 to-emerald-900',
    emoji: '🐸',
    caption: 'feels good man',
    image: '/images/1.png' 
  },
  {
    id: 2,
    label: 'QUEEN PEEPA 👸',
    bg: 'from-pink-900 via-rose-800 to-pink-900',
    emoji: '🐸💄',
    caption: 'slay queen slay',
    // image: '/images/peepa.png'
  },
  {
    id: 3,
    label: 'THE WHOLE FAM 💚',
    bg: 'from-yellow-900 via-amber-800 to-yellow-900',
    emoji: '🐸🐸🐸🐸🐸🐸',
    caption: 'family > everything',
    // image: '/images/family.png'
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('right')

  const goTo = useCallback((idx, dir = 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
    setTimeout(() => {
      setCurrent(idx)
      setIsAnimating(false)
    }, 300)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length, 'right')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length, 'left')
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const slide = SLIDES[current]

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative noise-bg pt-24 pb-12 px-4">

      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)' }} />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #76ff03 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* TITLE */}
      <div className="text-center mb-8 relative z-20">
        <h1 className="font-meme text-6xl md:text-9xl text-pepe-lime leading-none mb-2"
          style={{ textShadow: '4px 4px 0px #006400, 0 0 30px rgba(118,255,3,0.5)' }}>
          THE PEPE
        </h1>
        <h1 className="font-meme text-6xl md:text-9xl text-pepe-yellow leading-none"
          style={{ textShadow: '4px 4px 0px #8B6914, 0 0 30px rgba(255,230,0,0.4)' }}>
          FAMILY 🐸
        </h1>
        <p className="font-body text-pepe-green text-xl md:text-2xl mt-3 italic animate-pulse">
          "the frog family that will make you rich... or at least laugh"
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-2xl mx-auto z-20">
        {/* Main slide */}
        <div className={`pepe-card glow-green rounded-3xl overflow-hidden h-80 md:h-96 flex items-center justify-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          style={{ background: 'linear-gradient(135deg, #0d1a0d, #1a2e1a)' }}>

          {slide.image ? (
            <img src={slide.image} alt={slide.label}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="text-8xl md:text-9xl animate-float">
                {slide.emoji}
              </div>
              <div className="font-meme text-3xl md:text-4xl text-pepe-lime tracking-wider">
                {slide.label}
              </div>
              <div className="font-body text-pepe-green text-lg italic">
                "{slide.caption}"
              </div>
              <div className="text-xs text-pepe-green opacity-40 font-body border border-pepe-green border-dashed rounded px-3 py-1">
                📁 Drop your image at /public/images/ and update SLIDES array
              </div>
            </div>
          )}
        </div>

        {/* Nav Arrows */}
        <button onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-pepe-dark border-3 border-pepe-green text-pepe-lime text-3xl w-12 h-12 rounded-full flex items-center justify-center hover:bg-pepe-green hover:text-black transition-all duration-200 font-bold"
          style={{ border: '3px solid #4CAF50' }}>
          ◀
        </button>
        <button onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-pepe-dark border-3 border-pepe-green text-pepe-lime text-3xl w-12 h-12 rounded-full flex items-center justify-center hover:bg-pepe-green hover:text-black transition-all duration-200 font-bold"
          style={{ border: '3px solid #4CAF50' }}>
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-3 bg-pepe-lime' : 'w-3 h-3 bg-pepe-green opacity-40'}`} />
          ))}
        </div>
      </div>

      {/* Ticker tape */}
      <div className="w-full overflow-hidden bg-pepe-green py-2 mt-10 relative z-20" style={{ transform: 'rotate(-1deg)', marginLeft: '-2%', width: '104%' }}>
        <div className="flex animate-marquee whitespace-nowrap font-meme text-black text-xl tracking-widest">
          {Array(6).fill('🐸 PEPE FAMILY • FEELS GOOD MAN • TO THE MOON • 🚀 PUMP IT • GEM ALERT • BASED AND FROGPILLED • 💚 BUY NOW • ').map((t, i) => (
            <span key={i} className="mr-8">{t}</span>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-8 z-20">
        <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
          className="font-meme text-2xl bg-pepe-lime text-black px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-200 glow-green"
          style={{ boxShadow: '0 0 20px rgba(118,255,3,0.6)' }}>
          🚀 BUY ON PUMP.FUN
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer"
          className="font-meme text-2xl bg-black text-white border-2 border-white px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-200">
          𝕏 FOLLOW US
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-pepe-green opacity-50 text-center z-20">
        <div className="font-meme text-sm tracking-widest mb-1">SCROLL DOWN</div>
        <div className="text-2xl animate-bounce">↓</div>
      </div>
    </section>
  )
}
