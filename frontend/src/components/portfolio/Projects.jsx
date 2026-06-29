import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../data/portfolio";
import { ArrowUpRight, Github } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad bg-[var(--surface)] relative" data-testid="projects-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              <span className="text-[var(--accent)]">/05</span> &nbsp; Selected Works — 2023 / 2025
            </div>
            <h2 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,6rem)]">
              Things I&rsquo;ve <span className="text-white/40">built<span className="text-[var(--accent)]">.</span></span>
            </h2>
          </div>

          <div className="flex gap-2" data-testid="projects-filter">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                data-testid={`filter-${c.toLowerCase().replace(" ", "-")}`}
                className={`px-4 py-2 border font-mono text-[10px] tracking-[0.2em] uppercase transition-all ${
                  filter === c
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-white/15 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="space-y-12 md:space-y-24">
            {filtered.map((p, idx) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                className={`grid grid-cols-12 gap-6 md:gap-10 items-center ${idx % 2 === 1 ? "lg:[&>.img]:col-start-7 lg:[&>.txt]:col-start-1 lg:[&>.txt]:row-start-1" : ""}`}
                data-testid={`project-card-${idx}`}
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="img col-span-12 lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-white/5 bg-[var(--bg)] group block"
                  data-testid={`project-link-${idx}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase bg-[var(--bg)]/80 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                      {p.category}
                    </span>
                    {p.link && p.link !== "#" && (
                      <span className="font-mono text-[10px] tracking-[0.25em] uppercase bg-[var(--accent)] text-white px-3 py-1.5 flex items-center gap-1.5">
                        Live <ArrowUpRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </a>

                <div className="txt col-span-12 lg:col-span-5">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
                    {String(idx + 1).padStart(2, "0")} · {p.year}
                  </div>
                  <h3 className="font-display font-extrabold tracking-tighter text-4xl md:text-5xl leading-[0.95] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border border-white/10 text-white/70">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {p.link && p.link !== "#" && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-architectural"
                        data-testid={`project-live-${idx}`}
                      >
                        Visit live <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-architectural ghost"
                      data-testid={`project-github-${idx}`}
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
