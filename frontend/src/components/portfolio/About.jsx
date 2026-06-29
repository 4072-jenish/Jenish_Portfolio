import { motion } from "framer-motion";
import { PROFILE, SKILL_BARS, FUN_FACTS } from "../../data/portfolio";

function SectionHeader({ index, eyebrow, title }) {
  return (
    <div className="mb-16">
      <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
        <span className="text-[var(--accent)]">/{index}</span> &nbsp; {eyebrow}
      </div>
      <h2 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,6rem)]">
        {title}
      </h2>
    </div>
  );
}

function Bar({ name, value }) {
  return (
    <div data-testid={`skillbar-${name.toLowerCase().replace(/\s|&/g, "-")}`}>
      <div className="flex items-end justify-between mb-2">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/70">{name}</span>
        <span className="font-display text-xl font-extrabold">{value}<span className="text-[var(--accent)]">%</span></span>
      </div>
      <div className="h-px bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 bg-[var(--accent)]"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative" data-testid="about-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader index="02" eyebrow="About — the human behind the code" title={<>A student today.<br /><span className="text-white/40">A builder, always.</span></>} />

        {/* Bento Grid */}
        <div className="grid grid-cols-12 grid-rows-[auto] gap-px bg-white/5 border border-white/5">
          {/* Big bio */}
          <div className="col-span-12 lg:col-span-8 bg-[var(--bg)] p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-6">Bio · Hello world</div>
            <p className="font-editorial text-2xl md:text-3xl leading-snug text-white/85">
              &ldquo;{PROFILE.bio}&rdquo;
            </p>
            <div className="stripe-divider my-8" />
            <p className="text-white/60 leading-relaxed max-w-2xl">
              I started with <span className="text-[var(--gold)]">C++</span> and slowly fell in love with the web — building static sites, then dynamic React apps, then full e-commerce systems with auth, payments and cloud storage. Today I work across the full stack with a sharp eye for clean architecture and user-centric design.
            </p>
          </div>

          {/* Fun facts */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 grid-rows-2 gap-px bg-white/5">
            {FUN_FACTS.map((f, i) => (
              <div key={f.label} className="bg-[var(--bg)] p-6 md:p-8 hover:bg-[var(--surface)] transition-colors" data-testid={`funfact-${i}`}>
                <div className="font-display font-extrabold text-3xl md:text-4xl tracking-tighter text-[var(--accent)]">{f.value}</div>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/50 mt-2">{f.label}</div>
              </div>
            ))}
          </div>

          {/* Skill bars row */}
          <div className="col-span-12 bg-[var(--bg)] p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8">Comfort levels · self-assessed</div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {SKILL_BARS.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
