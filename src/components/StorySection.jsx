import { useEffect, useRef } from "react";

const MEMBERS = [
  {
    name: "Pepe Sr.",
    role: "The Provider",
    desc: "Holds bags through every cycle. Never sells. Never learns. Just vibes.",
    color: "#3a6a3e",
    glowColor: "rgba(58,106,62,0.4)",
    emoji: "💼",
  },
  {
    name: "Mama Pepe",
    role: "The Anchor",
    desc: "Runs the household, runs the wallets. Secretly has more ETH than anyone.",
    color: "#4a7c4e",
    glowColor: "rgba(74,124,78,0.4)",
    emoji: "🏠",
  },
  {
    name: "Pepito",
    role: "The Degen",
    desc: "Was born during a market crash. Considers that a personality trait.",
    color: "#5a9e5f",
    glowColor: "rgba(90,158,95,0.4)",
    emoji: "🎲",
  },
  {
    name: "Lil Ribbit",
    role: "The Unknown",
    desc: "Doesn't talk much. Might be the smartest one. Wallet address: ???",
    color: "#6abe70",
    glowColor: "rgba(106,190,112,0.4)",
    emoji: "❓",
  },
];

function MemberCard({ member, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 120);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="reveal group relative p-6 rounded-sm cursor-default"
      style={{
        background: "rgba(17,26,19,0.6)",
        border: "1px solid rgba(74,124,78,0.12)",
        backdropFilter: "blur(16px)",
        transition: "all 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${member.color}50`;
        e.currentTarget.style.boxShadow = `0 0 30px ${member.glowColor}`;
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(74,124,78,0.12)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }}
      />

      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-sm flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `${member.color}20`, border: `1px solid ${member.color}30` }}
        >
          {member.emoji}
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <h3
              className="text-lg"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", color: member.color }}
            >
              {member.name}
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color: "rgba(232,224,204,0.35)" }}>
              {member.role}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(232,224,204,0.55)", fontWeight: 300 }}>
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StorySection() {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(74,124,78,0.2), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,124,78,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-mono mb-4"
            style={{ color: "rgba(90,158,95,0.7)" }}
          >
            The Family
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.06em",
              color: "var(--cream)",
            }}
          >
            Meet the Residents
          </h2>
          <p
            className="max-w-md mx-auto text-sm leading-relaxed font-light"
            style={{ color: "rgba(232,224,204,0.45)" }}
          >
            Every family has its chaos. This one just decided to put it on-chain.
          </p>
        </div>

        {/* Members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MEMBERS.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
