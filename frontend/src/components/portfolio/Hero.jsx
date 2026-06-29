import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE, STATS } from "../../data/portfolio";
import { ArrowDownRight, MapPin, Download } from "lucide-react";

function Typed({ words, speed = 90, pause = 1600 }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    let t;
    if (!del && text === w) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((p) => p + 1);
    } else {
      t = setTimeout(() => {
        setText((cur) => (del ? cur.slice(0, -1) : w.slice(0, cur.length + 1)));
      }, del ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return (
    <span className="text-[var(--accent)]" data-testid="hero-typed-word">
      {text}
      <span className="caret inline-block w-[3px] h-[0.85em] bg-[var(--accent)] align-middle ml-1" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end pt-32 pb-12 overflow-hidden" data-testid="hero-section">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Radial glow */}
      <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(224,92,54,0.18), transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,169,126,0.10), transparent 60%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Top meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
            <span data-testid="hero-status">Available · Open to opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Gujarat / India · GMT+5:30</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-10"
          >
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
              <span className="text-[var(--accent)]">/01</span> &nbsp; Portfolio — Jenish Hariyani — MMXXV
            </div>
            <h1 className="font-display font-extrabold tracking-tighter leading-[0.85] text-[clamp(3.5rem,11vw,11.5rem)]" data-testid="hero-heading">
              <span className="block">{PROFILE.tagline}</span>
              <span className="block italic font-editorial text-white/80 not-italic font-display">
                <Typed words={PROFILE.rotatingWords} />
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 lg:col-start-3 mt-12"
          >
            <p className="font-editorial text-2xl md:text-3xl text-white/70 leading-snug">
              I&rsquo;m <span className="text-[var(--gold)] not-italic font-display tracking-tight">Jenish</span> — a passionate MERN Stack developer crafting scalable applications and beautiful interfaces that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-12 mt-12 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-architectural"
              data-testid="hero-cta-projects"
            >
              View selected work <ArrowDownRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-architectural ghost"
              data-testid="hero-cta-contact"
            >
              Get in touch
            </button>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-architectural ghost"
              data-testid="hero-cta-resume"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        </div>

        {/* Stats Bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5"
          data-testid="hero-stats"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="bg-[var(--bg)] p-6 md:p-8 group hover:bg-[var(--surface)] transition-colors">
              <div className="font-mono text-[10px] tracking-[0.25em] text-white/30 mb-3">0{i + 1} / 04</div>
              <div className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter">{s.value}</div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 mt-2">{s.label}</div>
            </div>
          ))}
          <div className="bg-[var(--accent)] p-6 md:p-8 text-white">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/70 mb-3">04 / 04</div>
            <div className="font-display font-extrabold text-3xl md:text-4xl tracking-tighter">Let&rsquo;s build.</div>
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/80 mt-2">scroll to explore ↓</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
