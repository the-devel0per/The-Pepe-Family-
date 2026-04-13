import { useEffect, useRef } from "react";

const TREE_NODES = [
  { id: "sr", name: "Pepe Sr.", role: "Father", x: 50, y: 10, color: "#3a6a3e", size: "lg" },
  { id: "ma", name: "Mama Pepe", role: "Mother", x: 50, y: 40, color: "#4a7c4e", size: "lg" },
  { id: "ito", name: "Pepito", role: "Son", x: 25, y: 72, color: "#5a9e5f", size: "md" },
  { id: "rib", name: "Lil Ribbit", role: "???", x: 50, y: 72, color: "#6abe70", size: "md" },
  { id: "cuz", name: "Cousin Kek", role: "Cousin", x: 75, y: 72, color: "#8ade90", size: "sm" },
];

const CONNECTIONS = [
  { from: "sr", to: "ma" },
  { from: "ma", to: "ito" },
  { from: "ma", to: "rib" },
  { from: "ma", to: "cuz" },
];

export default function FamilyTreeSection() {
  const titleRef = useRef(null);
  const treeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.2 }
    );
    [titleRef, treeRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  const sizeMap = { lg: 56, md: 44, sm: 36 };

  return (
    <section id="family-tree" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(74,124,78,0.15), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(74,124,78,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="reveal mb-16 text-center">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-mono mb-4"
            style={{ color: "rgba(90,158,95,0.7)" }}
          >
            The Bloodline
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.06em",
              color: "var(--cream)",
            }}
          >
            Family Tree
          </h2>
          <p
            className="mt-4 max-w-md mx-auto text-sm leading-relaxed font-light"
            style={{ color: "rgba(232,224,204,0.4)" }}
          >
            Green runs deep. The family tree grows with every new chapter.
          </p>
        </div>

        {/* Tree visualization */}
        <div ref={treeRef} className="reveal relative mx-auto" style={{ maxWidth: "600px", height: "420px" }}>
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: "visible" }}
          >
            {/* Connection lines */}
            {CONNECTIONS.map(({ from, to }) => {
              const f = TREE_NODES.find(n => n.id === from);
              const t = TREE_NODES.find(n => n.id === to);
              return (
                <line
                  key={`${from}-${to}`}
                  x1={f.x}
                  y1={f.y + 4}
                  x2={t.x}
                  y2={t.y - 4}
                  stroke="rgba(74,124,78,0.3)"
                  strokeWidth="0.5"
                  strokeDasharray="2 1.5"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {TREE_NODES.map((node) => {
            const size = sizeMap[node.size];
            return (
              <div
                key={node.id}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="rounded-full flex items-center justify-center text-lg mb-1 transition-all duration-300"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `${node.color}20`,
                    border: `2px solid ${node.color}50`,
                    fontSize: `${size * 0.4}px`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${node.color}60`;
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.borderColor = node.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = `${node.color}50`;
                  }}
                >
                  🐸
                </div>
                <div
                  className="text-center"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <div
                    className="text-xs font-medium"
                    style={{ color: node.color, letterSpacing: "0.03em" }}
                  >
                    {node.name}
                  </div>
                  <div
                    className="text-[9px] tracking-[0.12em] uppercase"
                    style={{ color: "rgba(232,224,204,0.3)" }}
                  >
                    {node.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="reveal mt-8 text-center">
          <p
            className="text-[10px] tracking-[0.15em] uppercase font-mono"
            style={{ color: "rgba(232,224,204,0.2)" }}
          >
            More family members arriving soon
          </p>
        </div>
      </div>
    </section>
  );
}
