import { useState } from 'react'

const CONTRACT_ADDRESS = 'pumpfun'

export default function Navbar() {
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pepe-dark border-b-4 border-pepe-green" style={{ background: 'rgba(13,26,13,0.95)', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <span className="text-4xl animate-wiggle inline-block" style={{animationDuration:'0.8s'}}>🐸</span>
          <span className="font-meme text-2xl md:text-3xl text-pepe-lime tracking-widest" style={{textShadow:'0 0 10px #76ff03, 0 0 20px #76ff03'}}>
            PEPE FAMILY
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {['hero','family-tree','kids'].map(id => (
            <button key={id} onClick={() => scrollTo(id)}
              className="font-meme text-xl text-pepe-green hover:text-pepe-lime transition-all duration-200 hover:scale-110 tracking-wider">
              {id === 'hero' ? '🏠 HOME' : id === 'family-tree' ? '🌳 FAMILY' : '👶 KIDS'}
            </button>
          ))}
        </div>

        {/* Contract Address */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs">
          <div className="bg-black border-2 border-pepe-green rounded-lg px-3 py-1 flex-1 truncate font-body text-xs text-pepe-green opacity-80 select-all">
            {CONTRACT_ADDRESS}
          </div>
          <button
            onClick={copyAddress}
            className="copy-btn bg-pepe-green text-black font-meme text-sm px-3 py-1 rounded-lg hover:bg-pepe-lime transition-all duration-200 whitespace-nowrap"
          >
            {copied ? '✅ COPIED!' : '📋 COPY'}
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"
            className="bg-black border-2 border-white text-white font-meme text-sm px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-1">
            <span>𝕏</span>
          </a>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
            className="bg-pepe-orange text-white font-meme text-sm px-3 py-1 rounded-lg hover:opacity-80 transition-all duration-200 flex items-center gap-1">
            🚀 PUMP
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-pepe-lime text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Contract */}
      <div className="md:hidden px-4 pb-2 flex gap-2">
        <div className="bg-black border border-pepe-green rounded px-2 py-1 flex-1 truncate font-body text-xs text-pepe-green">
          {CONTRACT_ADDRESS}
        </div>
        <button onClick={copyAddress} className="bg-pepe-green text-black font-meme text-xs px-2 py-1 rounded">
          {copied ? '✅' : '📋'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pepe-dark border-t border-pepe-green px-4 py-3 flex flex-col gap-3">
          {['hero','family-tree','kids'].map(id => (
            <button key={id} onClick={() => scrollTo(id)}
              className="font-meme text-xl text-pepe-lime text-left">
              {id === 'hero' ? '🏠 HOME' : id === 'family-tree' ? '🌳 FAMILY TREE' : '👶 THE KIDS'}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
