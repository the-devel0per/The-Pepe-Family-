export default function Footer() {
  return (
    <footer className="border-t-4 border-pepe-green py-10 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(76,175,80,0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10">
        <div className="text-5xl mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>🐸</div>
        <div className="font-meme text-3xl text-pepe-lime mb-2" style={{ textShadow: '0 0 15px rgba(118,255,3,0.5)' }}>
          THE PEPE FAMILY
        </div>
        <p className="font-body text-pepe-green text-sm italic mb-6">
          "feels good man" — Pepe, probably
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"
            className="font-meme text-lg text-white hover:text-pepe-lime transition-colors">
            𝕏 TWITTER
          </a>
          <span className="text-pepe-green opacity-40">|</span>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
            className="font-meme text-lg text-pepe-orange hover:text-pepe-lime transition-colors">
            🚀 PUMP.FUN
          </a>
          <span className="text-pepe-green opacity-40">|</span>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer"
            className="font-meme text-lg text-pepe-blue hover:text-pepe-lime transition-colors">
            ✈️ TELEGRAM
          </a>
        </div>

        <div className="font-body text-xs text-gray-600 max-w-lg mx-auto">
          $PEPE is a meme coin with no intrinsic value. This is not financial advice.
          We are frogs. Do your own research. Don't trust us. Trust the frogs. 🐸
        </div>
      </div>
    </footer>
  )
}
