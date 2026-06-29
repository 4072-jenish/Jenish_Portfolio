import { SKILLS } from "../../data/portfolio";

const ALL_SKILLS = Object.values(SKILLS).flat();
const TOP = ALL_SKILLS.slice(0, Math.ceil(ALL_SKILLS.length / 2));
const BOTTOM = ALL_SKILLS.slice(Math.ceil(ALL_SKILLS.length / 2));

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/5 py-6">
      <div className={`flex gap-8 whitespace-nowrap ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((s, i) => (
          <span key={`${s}-${i}`} className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter text-white/15 hover:text-[var(--accent)] transition-colors duration-300 cursor-default">
            {s}
            <span className="text-[var(--accent)] mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative" data-testid="skills-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
          <span className="text-[var(--accent)]">/04</span> &nbsp; Toolbelt — what I reach for daily
        </div>
        <h2 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,6rem)]">
          The stack <span className="text-white/40">I speak fluently.</span>
        </h2>
      </div>

      <MarqueeRow items={TOP} />
      <MarqueeRow items={BOTTOM} reverse />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16">
        <div className="grid md:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {Object.entries(SKILLS).map(([cat, items], idx) => (
            <div key={cat} className="bg-[var(--bg)] p-6 hover:bg-[var(--surface)] transition-colors" data-testid={`skill-category-${cat.toLowerCase()}`}>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)] mb-4">0{idx + 1} · {cat}</div>
              <ul className="space-y-2">
                {items.map((s) => (
                  <li key={s} className="text-sm text-white/80 flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/30" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* badges row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {[
            { v: "12+", l: "Technologies" },
            { v: "3+", l: "Years exploring" },
            { v: "50+", l: "Projects shipped" },
            { v: "∞", l: "Still learning" },
          ].map((b, i) => (
            <div key={b.l} className="bg-[var(--bg)] p-6 text-center">
              <div className="font-display font-extrabold text-4xl tracking-tighter text-[var(--accent)]">{b.v}</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 mt-2">{b.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
