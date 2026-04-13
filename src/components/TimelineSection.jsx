import { useEffect, useRef } from "react";

const EVENTS = [
  {
    phase: "Phase 0",
    date: "The Beginning",
    title: "They Moved In",
    desc: "A house on a quiet street. Suburban. Calm. Completely unaware of what was coming.",
    status: "complete",
    icon: "🏡",
  },
  {
    phase: "Phase 1",
    date: "First Cycle",
    title: "Pepe Sr. Discovers Charts",
    desc: "One late night. One browser tab. The family dinner table was never the same again.",
    status: "complete",
    icon: "📈",
  },
  {
    phase: "Phase 2",
    date: "The Crash",
    title: "Everything Breaks",
    desc: "Portfolio down. Internet down. Somehow, the family held. Chaos builds character.",
    status: "complete",
    icon: "💥",
  },
  {
    phase: "Phase 3",
    date: "Now",
    title: "The Universe Expands",
    desc: "New stories. New characters. The Pepe Family Universe is just getting started.",
    status: "active",
    icon: "🌍",
  },
  {
    phase: "Phase 4",
    date: "Soon™",
    title: "What Comes Next",
    desc: "The family has seen things. They're not done. Neither is the world.",
    status: "upcoming",
    icon: "🔮",
  },
];

function TimelineEvent({ event, index, isLast }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 150);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const statusColor = {
    complete: "#4a7c4e",
    active: "#6abe70",
    upcoming: "rgba(232,224,204,0.2)",
  }[event.status];

  const isRight = index % 2 === 0;

  return (
    <div ref={ref} className={`reveal relative flex items-center gap-0 ${isRight ? "flex-row" : "flex-row-reverse"} mb-0`}>
      {/* Content side */}
      <div className={`w-5/12 ${isRight ? "text-right pr-10" : "text-left pl-10"}`}>
        <div
          className="inline-block p-5 rounded-sm"
          style={{
            background: event.status === "active"
              ? "rgba(74,124,78,0.1)"
              : "rgba(17,26,19,0.5)",
            border: `1px solid ${statusColor}25`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="text-[10px] tracking-[0.25em] uppercase font-mono mb-1"
            style={{ color: statusColor }}
          >
            {event.phase} · {event.date}
          </div>
          <h3
            className="text-base mb-2"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              letterSpacing: "0.08em",
              color: event.status === "active" ? "#6abe70" : "var(--cream)",
            }}
          >
            {event.title}
          </h3>
          <p
            className="text-xs leading-relaxed font-light"
            style={{ color: "rgba(232,224,204,0.45)" }}
          >
            {event.desc}
          </p>
        </div>
      </div>

      {/* Center node */}
      <div className="w-2/12 flex flex-col items-center relative">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-base relative z-10"
          style={{
            background: event.status === "active" ? "rgba(74,124,78,0.3)" : "rgba(13,20,16,0.8)",
            border: `2px solid ${statusColor}`,
            boxShadow: event.status === "active" ? `0 0 20px ${statusColor}60` : "none",
          }}
        >
          {event.icon}
        </div>
        {!isLast && (
          <div
            className="absolute top-10 w-px"
            style={{
              height: "80px",
              background: `linear-gradient(to bottom, ${statusColor}50, rgba(74,124,78,0.1))`,
            }}
          />
        )}
      </div>

      {/* Empty side */}
      <div className="w-5/12" />
    </div>
  );
}

export default function TimelineSection() {
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
    <section id="timeline" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(74,124,78,0.15), transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="reveal mb-20 text-center">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-mono mb-4"
            style={{ color: "rgba(90,158,95,0.7)" }}
          >
            The Story So Far
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.06em",
              color: "var(--cream)",
            }}
          >
            Timeline
          </h2>
        </div>

        <div className="relative">
          {EVENTS.map((event, i) => (
            <TimelineEvent
              key={event.phase}
              event={event}
              index={i}
              isLast={i === EVENTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
