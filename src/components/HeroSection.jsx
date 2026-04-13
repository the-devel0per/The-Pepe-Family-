import { useState, useEffect, useRef } from "react";

// Scene descriptions for each slide
// ─────────────────────────────────────────────────────────────
// 👇 DROP YOUR IMAGES HERE
// Use local paths like "/images/scene1.jpg"  (put files in /public/images/)
// or full URLs like "https://..."
// Leave `image` as null to keep the built-in SVG illustration.
// ─────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    label: "Portrait",
    title: "The Family Portrait",
    subtitle: "Suburban life hits different when you're built different.",
    gradient: "from-[#1a2e1c] via-[#0d1410] to-[#0a1208]",
    accentColor: "#4a7c4e",
    image: null, // e.g. "/images/portrait.jpg"
  },
  {
    id: 1,
    label: "Dinner",
    title: "The Dinner Chaos",
    subtitle: "Every family has that one dinner. Theirs never ends.",
    gradient: "from-[#2a1a0e] via-[#1a1208] to-[#0d1410]",
    accentColor: "#8a6a3e",
    image: null, // e.g. "/images/dinner.jpg"
  },
  {
    id: 2,
    label: "Midnight",
    title: "The Midnight Scroll",
    subtitle: "3AM. Charts are down. Someone's awake.",
    gradient: "from-[#0a0e1a] via-[#0d1020] to-[#080d1a]",
    accentColor: "#3a5a8e",
    image: null, // e.g. "/images/midnight.jpg"
  },
  {
    id: 3,
    label: "Glitch",
    title: "The Glitch",
    subtitle: "When the simulation stutters, Pepe Family adapts.",
    gradient: "from-[#1a0a2a] via-[#0d1410] to-[#150a20]",
    accentColor: "#6a4a8e",
    image: null, // e.g. "/images/glitch.jpg"
  },
  {
    id: 4,
    label: "Crash",
    title: "The Market Crash",
    subtitle: "Portfolios down. Vibes up. Family stays.",
    gradient: "from-[#2a0a0a] via-[#1a0d0d] to-[#0d1410]",
    accentColor: "#8e3a3a",
    image: null, // e.g. "/images/crash.jpg"
  },
];

// SVG Scene illustrations
function SceneIllustration({ sceneId }) {
  const scenes = {
    0: ( // Family Portrait - suburban house
      <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="sky0" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1a3a1e" />
            <stop offset="100%" stopColor="#0a1208" />
          </radialGradient>
          <radialGradient id="glow0" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4a7c4e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4a7c4e" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Sky */}
        <rect width="900" height="500" fill="url(#sky0)" />
        {/* Moon */}
        <circle cx="720" cy="80" r="35" fill="#c8d8ca" opacity="0.8" />
        <circle cx="732" cy="72" r="28" fill="#1a3a1e" />
        {/* Stars */}
        {[80,150,220,300,400,500,600,650,750,820].map((x,i) => (
          <circle key={i} cx={x} cy={30+i*5} r="1.5" fill="#c8e0cc" opacity="0.6" />
        ))}
        {/* House */}
        <rect x="250" y="220" width="400" height="230" fill="#1e3020" />
        <polygon points="220,220 450,80 680,220" fill="#162418" />
        {/* Roof highlight */}
        <line x1="220" y1="220" x2="450" y2="80" stroke="#2a4a2e" strokeWidth="2" opacity="0.5" />
        {/* Windows */}
        <rect x="290" y="260" width="80" height="70" rx="4" fill="#0a1c10" stroke="#2a4a30" strokeWidth="1.5" />
        <rect x="530" y="260" width="80" height="70" rx="4" fill="#1a3a20" stroke="#2a4a30" strokeWidth="1.5" />
        {/* Window light */}
        <rect x="291" y="261" width="78" height="68" rx="3" fill="#c8b060" opacity="0.15" />
        <rect x="531" y="261" width="78" height="68" rx="3" fill="#4a7c4e" opacity="0.2" />
        {/* Door */}
        <rect x="390" y="330" width="70" height="120" rx="4" fill="#0d1a0f" stroke="#2a4a30" strokeWidth="1.5" />
        <circle cx="454" cy="392" r="4" fill="#c8a96e" />
        {/* Ground */}
        <rect x="0" y="450" width="900" height="50" fill="#0a1208" />
        <ellipse cx="450" cy="455" rx="300" ry="15" fill="#1a2e1c" />
        {/* Glow under characters */}
        <ellipse cx="450" cy="440" rx="200" ry="12" fill="url(#glow0)" />
        {/* Family silhouettes */}
        {/* Dad - tallest */}
        <g transform="translate(340, 330)">
          <ellipse cx="0" cy="-95" rx="22" ry="22" fill="#3a6a3e" />
          <rect x="-14" y="-73" width="28" height="55" rx="6" fill="#2a5a2e" />
          <rect x="-22" y="-70" width="11" height="40" rx="5" fill="#2a5a2e" />
          <rect x="11" y="-70" width="11" height="40" rx="5" fill="#2a5a2e" />
          <rect x="-10" y="-18" width="11" height="38" rx="5" fill="#1e4a22" />
          <rect x="1" y="-18" width="11" height="38" rx="5" fill="#1e4a22" />
          {/* Eyes */}
          <circle cx="-7" cy="-100" r="4" fill="white" />
          <circle cx="7" cy="-100" r="4" fill="white" />
          <circle cx="-6" cy="-99" r="2.5" fill="#1a1a1a" />
          <circle cx="8" cy="-99" r="2.5" fill="#1a1a1a" />
          {/* Mouth */}
          <path d="M-6,-90 Q0,-86 6,-90" stroke="#2a1a0a" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        {/* Mom */}
        <g transform="translate(420, 345)">
          <ellipse cx="0" cy="-85" rx="20" ry="20" fill="#4a7c4e" />
          <path d="M-18,-65 Q0,-45 18,-65 L18,-20 Q0,-10 -18,-20 Z" fill="#3a6a40" />
          <rect x="-8" y="-20" width="7" height="30" rx="4" fill="#2a5a30" />
          <rect x="2" y="-20" width="7" height="30" rx="4" fill="#2a5a30" />
          <circle cx="-6" cy="-90" r="4" fill="white" />
          <circle cx="6" cy="-90" r="4" fill="white" />
          <circle cx="-5" cy="-89" r="2.5" fill="#1a1a1a" />
          <circle cx="7" cy="-89" r="2.5" fill="#1a1a1a" />
          <path d="M-5,-80 Q0,-76 5,-80" stroke="#2a1a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Kid */}
        <g transform="translate(490, 370)">
          <ellipse cx="0" cy="-65" rx="16" ry="16" fill="#5a9e5f" />
          <rect x="-11" y="-50" width="22" height="38" rx="5" fill="#4a8a4e" />
          <rect x="-7" y="-15" width="7" height="28" rx="4" fill="#3a7a3e" />
          <rect x="2" y="-15" width="7" height="28" rx="4" fill="#3a7a3e" />
          <circle cx="-5" cy="-68" r="3.5" fill="white" />
          <circle cx="5" cy="-68" r="3.5" fill="white" />
          <circle cx="-4" cy="-67" r="2" fill="#1a1a1a" />
          <circle cx="6" cy="-67" r="2" fill="#1a1a1a" />
          <path d="M-4,-60 Q0,-57 4,-60" stroke="#2a1a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Small pepe/pet */}
        <g transform="translate(560, 390)">
          <ellipse cx="0" cy="-45" rx="12" ry="12" fill="#6abe70" />
          <rect x="-8" y="-34" width="16" height="25" rx="4" fill="#5aae60" />
          <rect x="-5" y="-10" width="5" height="18" rx="3" fill="#4a9e50" />
          <rect x="2" y="-10" width="5" height="18" rx="3" fill="#4a9e50" />
          <circle cx="-3" cy="-48" r="2.5" fill="white" />
          <circle cx="3" cy="-48" r="2.5" fill="white" />
          <circle cx="-2.5" cy="-47" r="1.5" fill="#1a1a1a" />
          <circle cx="3.5" cy="-47" r="1.5" fill="#1a1a1a" />
        </g>
        {/* Ambient glow */}
        <ellipse cx="450" cy="440" rx="280" ry="20" fill="#4a7c4e" opacity="0.12" />
      </svg>
    ),
    1: ( // Dinner chaos
      <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="room1" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#2a1a08" />
            <stop offset="100%" stopColor="#0d0a06" />
          </radialGradient>
          <radialGradient id="lightbulb" cx="50%" cy="10%" r="60%">
            <stop offset="0%" stopColor="#c8a060" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#c8a060" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#c8a060" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="900" height="500" fill="url(#room1)" />
        <rect width="900" height="500" fill="url(#lightbulb)" />
        {/* Wall */}
        <rect x="0" y="0" width="900" height="350" fill="#150e06" />
        {/* Floor */}
        <rect x="0" y="350" width="900" height="150" fill="#0d0905" />
        {/* Floor lines */}
        {[0,100,200,300,400,500,600,700,800,900].map((x,i) => (
          <line key={i} x1={x} y1="350" x2={x+50} y2="500" stroke="#1a1208" strokeWidth="1" />
        ))}
        {/* Light cone */}
        <polygon points="450,0 300,350 600,350" fill="#c8a060" opacity="0.06" />
        {/* Lamp */}
        <line x1="450" y1="0" x2="450" y2="60" stroke="#3a3020" strokeWidth="3" />
        <ellipse cx="450" cy="65" rx="30" ry="12" fill="#3a3020" />
        <circle cx="450" cy="60" r="8" fill="#f0c060" opacity="0.9" />
        {/* Table */}
        <ellipse cx="450" cy="360" rx="260" ry="30" fill="#2a1e10" />
        <rect x="200" y="360" width="500" height="15" rx="3" fill="#2a1e10" />
        {/* Table legs */}
        <rect x="240" y="370" width="15" height="80" rx="3" fill="#1e1408" />
        <rect x="645" y="370" width="15" height="80" rx="3" fill="#1e1408" />
        {/* Plates on table */}
        <ellipse cx="350" cy="355" rx="35" ry="10" fill="#e8e0cc" opacity="0.8" />
        <ellipse cx="450" cy="350" rx="35" ry="10" fill="#e8e0cc" opacity="0.8" />
        <ellipse cx="550" cy="355" rx="35" ry="10" fill="#e8e0cc" opacity="0.8" />
        {/* Food flying */}
        <ellipse cx="480" cy="200" rx="12" ry="8" fill="#c0602a" opacity="0.8" transform="rotate(-20, 480, 200)" />
        <ellipse cx="380" cy="180" rx="8" ry="5" fill="#80c040" opacity="0.8" />
        <circle cx="530" cy="160" r="10" fill="#c04020" opacity="0.75" />
        {/* Characters at table */}
        {/* Left pepe */}
        <g transform="translate(270, 310)">
          <ellipse cx="0" cy="-60" rx="28" ry="28" fill="#3a6a3e" />
          <rect x="-20" y="-33" width="40" height="50" rx="8" fill="#2a5a2e" />
          <circle cx="-8" cy="-65" r="5" fill="white" />
          <circle cx="8" cy="-65" r="5" fill="white" />
          <circle cx="-7" cy="-64" r="3" fill="#1a1a1a" />
          <circle cx="9" cy="-64" r="3" fill="#1a1a1a" />
          {/* Angry mouth */}
          <path d="M-8,-52 Q0,-56 8,-52" stroke="#c03020" strokeWidth="2.5" fill="none" />
          {/* Fork raised */}
          <rect x="22" y="-80" width="4" height="50" rx="2" fill="#c8c0a0" transform="rotate(15, 22, -80)" />
        </g>
        {/* Right pepe */}
        <g transform="translate(630, 310)">
          <ellipse cx="0" cy="-60" rx="28" ry="28" fill="#4a7c4e" />
          <rect x="-20" y="-33" width="40" height="50" rx="8" fill="#3a6a40" />
          <circle cx="-8" cy="-65" r="5" fill="white" />
          <circle cx="8" cy="-65" r="5" fill="white" />
          <circle cx="-7" cy="-64" r="3" fill="#1a1a1a" />
          <circle cx="9" cy="-64" r="3" fill="#1a1a1a" />
          <path d="M-6,-52 Q0,-48 6,-52" stroke="#2a1a0a" strokeWidth="2" fill="none" />
        </g>
        {/* Center pepe (standing) */}
        <g transform="translate(450, 270)">
          <ellipse cx="0" cy="-70" rx="25" ry="25" fill="#5a9e5f" />
          <rect x="-18" y="-46" width="36" height="46" rx="7" fill="#4a8a50" />
          <circle cx="-7" cy="-76" r="4.5" fill="white" />
          <circle cx="7" cy="-76" r="4.5" fill="white" />
          <circle cx="-6" cy="-75" r="2.8" fill="#1a1a1a" />
          <circle cx="8" cy="-75" r="2.8" fill="#1a1a1a" />
          {/* Screaming mouth */}
          <ellipse cx="0" cy="-60" rx="8" ry="6" fill="#1a0808" />
        </g>
        {/* Ketchup splatter */}
        <circle cx="350" cy="250" r="8" fill="#c03020" opacity="0.6" />
        <circle cx="360" cy="242" r="4" fill="#c03020" opacity="0.5" />
        <circle cx="342" cy="258" r="5" fill="#c03020" opacity="0.4" />
      </svg>
    ),
    2: ( // Midnight scene
      <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="screenGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#3060c0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3060c0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="roomDark" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#08080f" />
            <stop offset="100%" stopColor="#04040a" />
          </radialGradient>
        </defs>
        <rect width="900" height="500" fill="url(#roomDark)" />
        <rect width="900" height="500" fill="url(#screenGlow)" />
        {/* Clock on wall */}
        <circle cx="750" cy="80" r="30" fill="#0e0e18" stroke="#2a2a40" strokeWidth="2" />
        <line x1="750" y1="60" x2="750" y2="80" stroke="#c8c0e0" strokeWidth="2" />
        <line x1="750" y1="80" x2="765" y2="88" stroke="#c8c0e0" strokeWidth="2" />
        <text x="748" y="105" fill="#606080" fontSize="9" fontFamily="monospace">3:00</text>
        {/* Desk */}
        <rect x="200" y="320" width="500" height="15" rx="3" fill="#1a1620" />
        <rect x="240" y="335" width="15" height="100" rx="3" fill="#141018" />
        <rect x="645" y="335" width="15" height="100" rx="3" fill="#141018" />
        {/* Monitor */}
        <rect x="330" y="180" width="240" height="150" rx="8" fill="#0a0a14" stroke="#2a2a40" strokeWidth="2" />
        <rect x="338" y="188" width="224" height="134" rx="4" fill="#0e1428" />
        {/* Screen content - chart going down */}
        <polyline points="348,290 380,260 410,270 440,240 470,280 500,220 530,290 552,310" 
          stroke="#e03030" strokeWidth="2" fill="none" opacity="0.8" />
        {/* Grid lines on screen */}
        {[210,230,250,270,290,310].map((y,i) => (
          <line key={i} x1="338" y1={y} x2="562" y2={y} stroke="#1a2040" strokeWidth="0.5" />
        ))}
        {[360,400,440,480,520].map((x,i) => (
          <line key={i} x1={x} y1="188" x2={x} y2="322" stroke="#1a2040" strokeWidth="0.5" />
        ))}
        <text x="430" y="305" fill="#e03030" fontSize="10" fontFamily="monospace" opacity="0.9">-69.4%</text>
        {/* Monitor stand */}
        <rect x="437" y="330" width="26" height="15" rx="2" fill="#1a1620" />
        <ellipse cx="450" cy="345" rx="30" ry="6" fill="#141018" />
        {/* Screen glow on desk */}
        <ellipse cx="450" cy="325" rx="120" ry="20" fill="#2040a0" opacity="0.12" />
        {/* Character */}
        <g transform="translate(450, 310)">
          <ellipse cx="0" cy="-60" rx="26" ry="26" fill="#3a5a3e" />
          {/* Screen light on face */}
          <ellipse cx="0" cy="-60" rx="26" ry="26" fill="#3060c0" opacity="0.2" />
          <rect x="-18" y="-35" width="36" height="45" rx="7" fill="#2a4a2e" />
          {/* Tired eyes - half closed */}
          <ellipse cx="-7" cy="-64" rx="5" ry="3" fill="white" />
          <ellipse cx="7" cy="-64" rx="5" ry="3" fill="white" />
          <ellipse cx="-6" cy="-63" rx="3" ry="2" fill="#1a1a1a" />
          <ellipse cx="8" cy="-63" rx="3" ry="2" fill="#1a1a1a" />
          {/* Eyelids drooping */}
          <path d="M-12,-64 Q-7,-67 -2,-64" stroke="#3a5a3e" strokeWidth="3" fill="none" />
          <path d="M2,-64 Q7,-67 12,-64" stroke="#3a5a3e" strokeWidth="3" fill="none" />
          {/* Frown */}
          <path d="M-6,-52 Q0,-56 6,-52" stroke="#2a1a0a" strokeWidth="2" fill="none" />
          {/* Hands on desk */}
          <ellipse cx="-30" cy="-8" rx="12" ry="7" fill="#3a5a3e" />
          <ellipse cx="30" cy="-8" rx="12" ry="7" fill="#3a5a3e" />
        </g>
        {/* Coffee mug */}
        <rect x="590" y="300" width="25" height="30" rx="4" fill="#2a2030" stroke="#3a3050" strokeWidth="1" />
        <path d="M615,308 Q628,308 628,322 Q628,330 615,330" stroke="#3a3050" strokeWidth="2" fill="none" />
        {/* Steam */}
        <path d="M596,295 Q600,285 596,275" stroke="#404060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M604,293 Q608,283 604,273" stroke="#404060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Moon through window */}
        <rect x="650" y="140" width="120" height="140" rx="4" fill="#050508" stroke="#1a1a28" strokeWidth="2" />
        <circle cx="710" cy="200" r="25" fill="#c0c8d0" opacity="0.7" />
        <circle cx="720" cy="192" r="20" fill="#050508" />
        {/* Window glow */}
        <rect x="652" y="142" width="116" height="136" rx="3" fill="#1a1a30" opacity="0.4" />
      </svg>
    ),
    3: ( // Glitch/future scene
      <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="glitchBg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a0a2a" />
            <stop offset="100%" stopColor="#060408" />
          </radialGradient>
          <radialGradient id="glitchGlow" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#8040c0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8040c0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="900" height="500" fill="url(#glitchBg)" />
        <rect width="900" height="500" fill="url(#glitchGlow)" />
        {/* Grid floor */}
        {[0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900].map((x,i) => (
          <line key={`v${i}`} x1={x} y1="300" x2={x+100} y2="500" stroke="#3a1a5a" strokeWidth="0.5" opacity="0.5" />
        ))}
        {[300,350,400,450,500].map((y,i) => (
          <line key={`h${i}`} x1="0" y1={y} x2="900" y2={y} stroke="#3a1a5a" strokeWidth="0.5" opacity="0.4" />
        ))}
        {/* Glitch lines */}
        <rect x="0" y="120" width="900" height="3" fill="#c040ff" opacity="0.3" />
        <rect x="0" y="240" width="700" height="2" fill="#40c0ff" opacity="0.25" />
        <rect x="200" y="360" width="500" height="2" fill="#ff4080" opacity="0.2" />
        {/* Floating hexagons */}
        {[[150,150],[350,100],[600,130],[750,200],[100,280],[800,280]].map(([x,y],i) => (
          <polygon key={i} points={`${x},${y-20} ${x+17},${y-10} ${x+17},${y+10} ${x},${y+20} ${x-17},${y+10} ${x-17},${y-10}`}
            fill="none" stroke="#6030a0" strokeWidth="1" opacity="0.4" />
        ))}
        {/* Binary/code rain */}
        {['0','1','0','1','1','0'].map((bit, i) => (
          <text key={i} x={100 + i * 130} y={80 + i * 20} fill="#4020a0" fontSize="11" fontFamily="monospace" opacity="0.4">{bit}1001{bit}</text>
        ))}
        {/* Center characters - glitched */}
        {/* Shadow/glitch offset */}
        <g transform="translate(453, 350)" opacity="0.3">
          <ellipse cx="0" cy="-90" rx="35" ry="35" fill="#ff0040" />
          <rect x="-25" y="-57" width="50" height="70" rx="10" fill="#ff0040" />
        </g>
        <g transform="translate(447, 350)" opacity="0.2">
          <ellipse cx="0" cy="-90" rx="35" ry="35" fill="#00c0ff" />
          <rect x="-25" y="-57" width="50" height="70" rx="10" fill="#00c0ff" />
        </g>
        {/* Main character */}
        <g transform="translate(450, 350)">
          <ellipse cx="0" cy="-90" rx="35" ry="35" fill="#5a9e5f" />
          {/* Glitch stripes on face */}
          <rect x="-35" y="-98" width="70" height="6" fill="#8040c0" opacity="0.4" />
          <rect x="-35" y="-82" width="35" height="4" fill="#40c0ff" opacity="0.3" />
          <rect x="-25" y="-57" width="50" height="70" rx="10" fill="#4a8a50" />
          <circle cx="-10" cy="-96" r="6" fill="white" />
          <circle cx="10" cy="-96" r="6" fill="white" />
          <circle cx="-8" cy="-95" r="3.5" fill="#1a1a1a" />
          <circle cx="12" cy="-95" r="3.5" fill="#1a1a1a" />
          {/* Glitch eyes */}
          <rect x="-16" y="-100" width="8" height="4" fill="#00c0ff" opacity="0.6" />
          <rect x="8" y="-100" width="8" height="4" fill="#c040ff" opacity="0.6" />
          <path d="M-7,-80 Q0,-76 7,-80" stroke="#2a1a0a" strokeWidth="2" fill="none" />
          <rect x="-25" y="-20" width="12" height="40" rx="5" fill="#3a7a40" />
          <rect x="13" y="-20" width="12" height="40" rx="5" fill="#3a7a40" />
          <rect x="-12" y="16" width="12" height="35" rx="5" fill="#2a6a30" />
          <rect x="2" y="16" width="12" height="35" rx="5" fill="#2a6a30" />
        </g>
        {/* Floating UI elements */}
        <rect x="100" y="180" width="120" height="60" rx="6" fill="#1a0a2a" stroke="#6030a0" strokeWidth="1" opacity="0.8" />
        <text x="110" y="205" fill="#8040c0" fontSize="9" fontFamily="monospace">PEPE.EXE</text>
        <text x="110" y="222" fill="#60c060" fontSize="9" fontFamily="monospace">RUNNING...</text>
        <rect x="680" y="160" width="120" height="60" rx="6" fill="#1a0a2a" stroke="#3080c0" strokeWidth="1" opacity="0.8" />
        <text x="690" y="185" fill="#3080c0" fontSize="9" fontFamily="monospace">SYS://FAMILY</text>
        <text x="690" y="202" fill="#60a0ff" fontSize="9" fontFamily="monospace">STATUS: OK</text>
        {/* Glow under */}
        <ellipse cx="450" cy="360" rx="200" ry="15" fill="#8040c0" opacity="0.15" />
      </svg>
    ),
    4: ( // Market crash scene
      <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="crashBg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2a0808" />
            <stop offset="100%" stopColor="#0a0404" />
          </radialGradient>
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c03020" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c03020" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="900" height="500" fill="url(#crashBg)" />
        <rect width="900" height="500" fill="url(#redGlow)" />
        {/* Giant chart in background */}
        <polyline points="50,100 120,110 200,95 280,140 350,160 420,200 490,280 560,350 620,330 680,380 750,420 820,450 870,470"
          stroke="#e03030" strokeWidth="3" fill="none" opacity="0.4" />
        {/* Fill under */}
        <polygon points="50,100 120,110 200,95 280,140 350,160 420,200 490,280 560,350 620,330 680,380 750,420 820,450 870,470 870,500 50,500"
          fill="#c03020" opacity="0.08" />
        {/* Horizontal grid */}
        {[100,200,300,400].map((y,i) => (
          <line key={i} x1="0" y1={y} x2="900" y2={y} stroke="#3a1010" strokeWidth="0.5" />
        ))}
        {/* Big red percentage */}
        <text x="450" y="170" fill="#c03020" fontSize="80" fontFamily="'Bebas Neue', cursive"
          textAnchor="middle" opacity="0.15">-99.9%</text>
        {/* Family huddled together */}
        {/* Dad */}
        <g transform="translate(360, 370)">
          <ellipse cx="0" cy="-70" rx="26" ry="26" fill="#3a5a3e" />
          <rect x="-18" y="-45" width="36" height="55" rx="8" fill="#2a4a2e" />
          <circle cx="-7" cy="-76" r="4.5" fill="white" />
          <circle cx="7" cy="-76" r="4.5" fill="white" />
          <circle cx="-6" cy="-75" r="3" fill="#1a1a1a" />
          <circle cx="8" cy="-75" r="3" fill="#1a1a1a" />
          {/* Shocked face */}
          <ellipse cx="0" cy="-60" rx="7" ry="8" fill="#1a0808" />
        </g>
        {/* Mom with kid */}
        <g transform="translate(450, 375)">
          <ellipse cx="0" cy="-65" rx="24" ry="24" fill="#4a7c4e" />
          <rect x="-17" y="-42" width="34" height="50" rx="7" fill="#3a6a40" />
          <circle cx="-6" cy="-70" r="4" fill="white" />
          <circle cx="6" cy="-70" r="4" fill="white" />
          <circle cx="-5" cy="-69" r="2.5" fill="#1a1a1a" />
          <circle cx="7" cy="-69" r="2.5" fill="#1a1a1a" />
          <path d="M-5,-59 Q0,-63 5,-59" stroke="#c03020" strokeWidth="2" fill="none" />
          {/* Kid held in arms */}
          <g transform="translate(0, -20)">
            <ellipse cx="30" cy="-20" rx="15" ry="15" fill="#5a9e5f" />
            <rect x="18" y="-7" width="22" height="18" rx="4" fill="#4a8a50" />
            <circle cx="26" cy="-24" r="3" fill="white" />
            <circle cx="34" cy="-24" r="3" fill="white" />
            <circle cx="27" cy="-23" r="1.8" fill="#1a1a1a" />
            <circle cx="35" cy="-23" r="1.8" fill="#1a1a1a" />
          </g>
        </g>
        {/* Phone showing chart */}
        <g transform="translate(540, 340)">
          <rect x="-18" y="-50" width="36" height="60" rx="5" fill="#0a0808" stroke="#3a1a1a" strokeWidth="1.5" />
          <polyline points="-14,-40 -8,-35 -2,-38 4,-30 10,-42 14,-20"
            stroke="#e03030" strokeWidth="1.5" fill="none" />
          <text x="-10" y="-5" fill="#e03030" fontSize="7" fontFamily="monospace">-69%</text>
        </g>
        {/* Falling money */}
        {[[200,150],[680,120],[120,200],[780,220],[300,80]].map(([x,y],i) => (
          <g key={i} transform={`translate(${x}, ${y}) rotate(${-15+i*10})`}>
            <rect x="-14" y="-8" width="28" height="16" rx="3" fill="#2a4a20" opacity="0.6" />
            <text x="0" y="4" fill="#4a7c4e" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.7">$</text>
          </g>
        ))}
        {/* Ambient glow */}
        <ellipse cx="450" cy="390" rx="220" ry="18" fill="#c03020" opacity="0.12" />
      </svg>
    ),
  };
  return scenes[sceneId] || scenes[0];
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = (idx) => {
    if (transitioning || idx === currentSlide) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        setTransitioning(false);
      }, 600);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background carousel */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${transitioning ? "opacity-0" : "opacity-100"}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`} />
        <div className="absolute inset-0 hero-img-zoom" style={{ transformOrigin: "center center" }}>
          {slide.image ? (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <SceneIllustration sceneId={slide.id} />
          )}
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1410] via-[rgba(13,20,16,0.5)] to-[rgba(13,20,16,0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,20,16,0.4)] via-transparent to-[rgba(13,20,16,0.4)]" />
      </div>

      {/* Scene label */}
      <div
        className={`absolute top-28 left-8 transition-all duration-500 ${transitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
      >
        <div
          className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-mono"
          style={{
            background: "rgba(13,20,16,0.5)",
            border: "1px solid rgba(74,124,78,0.25)",
            backdropFilter: "blur(8px)",
            color: "rgba(232,224,204,0.5)",
          }}
        >
          <span style={{ color: slide.accentColor }}>◆</span> {slide.label}
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Top label */}
        <div
          className="mb-6 px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase font-mono fade-slide-up"
          style={{
            background: "rgba(13,20,16,0.6)",
            border: "1px solid rgba(74,124,78,0.3)",
            backdropFilter: "blur(10px)",
            color: "rgba(90,158,95,0.9)",
            animationDelay: "0.2s",
          }}
        >
          Pepe Family Universe
        </div>

        {/* Main heading */}
        <h1
          className="fade-slide-up mb-4 leading-none text-[var(--cream)]"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            letterSpacing: "0.04em",
            textShadow: "0 0 80px rgba(74,124,78,0.3), 0 4px 30px rgba(0,0,0,0.8)",
            animationDelay: "0.4s",
          }}
        >
          Just a normal family
          <br />
          <span style={{ color: "rgba(232,224,204,0.6)" }}>in a completely</span>
          <br />
          <span style={{ color: slide.accentColor === "#4a7c4e" ? "#6abe70" : slide.accentColor }}>broken world.</span>
        </h1>

        {/* Subtext */}
        <p
          className="fade-slide-up mb-10 text-[rgba(232,224,204,0.55)] font-light tracking-wide"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            fontFamily: "'DM Sans', sans-serif",
            animationDelay: "0.6s",
          }}
        >
          Follow their story.
        </p>

        {/* Buttons */}
        <div
          className="fade-slide-up flex flex-col sm:flex-row gap-3"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-8 py-3.5 rounded-sm text-sm tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Enter the House
          </button>
          <button
            onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary px-8 py-3.5 rounded-sm text-sm tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Timeline
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goToSlide(i)}
            className="transition-all duration-300"
            style={{
              width: i === currentSlide ? "28px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === currentSlide ? "rgba(90,158,95,0.9)" : "rgba(232,224,204,0.2)",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 right-8 flex flex-col items-center gap-2 opacity-40"
        style={{ color: "rgba(232,224,204,0.6)" }}
      >
        <div
          className="text-[9px] tracking-[0.2em] uppercase font-mono"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </div>
        <div
          className="w-px bg-[rgba(232,224,204,0.3)]"
          style={{ height: "40px" }}
        />
      </div>

      {/* Slide title transition */}
      <div
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 text-center transition-all duration-500 ${
          transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <p className="text-[10px] tracking-[0.15em] uppercase font-mono" style={{ color: "rgba(232,224,204,0.35)" }}>
          {slide.title}
        </p>
      </div>
    </section>
  );
}
