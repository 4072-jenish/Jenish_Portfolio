import { motion } from "framer-motion";
import { JOURNEY } from "../../data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="section-pad bg-[var(--surface)] relative" data-testid="journey-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
            <span className="text-[var(--accent)]">/03</span> &nbsp; Learning Journey — 10 phases
          </div>
          <h2 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,6rem)]">
            From <span className="text-[var(--accent)]">C++</span><br />
            <span className="text-white/40">to production stacks.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[8.333%] top-0 bottom-0 w-px bg-white/10" />

          {JOURNEY.map((j, idx) => (
            <motion.div
              key={j.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="col-span-12 md:col-span-12 relative"
              data-testid={`journey-phase-${j.phase}`}
            >
              <div className="grid grid-cols-12 gap-6 py-8 border-b border-white/5 group">
                {/* phase number */}
                <div className="col-span-2 md:col-span-1 relative">
                  <div className="w-3 h-3 border border-[var(--accent)] bg-[var(--bg)] group-hover:bg-[var(--accent)] transition-colors relative z-10 md:ml-[-6px] mt-2" />
                </div>
                <div className="col-span-10 md:col-span-3">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Phase {j.phase}</div>
                  <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tighter mt-2 leading-none">{j.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-white/70 leading-relaxed">{j.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-wrap items-start gap-2">
                  {j.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border border-white/10 text-white/70 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
