import { useState } from "react";
import { FAQS } from "../../data/portfolio";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="section-pad relative" data-testid="faqs-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              <span className="text-[var(--accent)]">/06</span> &nbsp; FAQs
            </div>
            <h2 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(2.5rem,5vw,4.5rem)]">
              Things <br /> people <br /><span className="text-[var(--accent)]">ask.</span>
            </h2>
            <p className="font-editorial text-xl text-white/60 mt-6 leading-snug">
              Still curious? <br />
              <span className="text-white/80 not-italic font-mono text-[11px] tracking-widest uppercase">drop a message ↓</span>
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-white/10">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-white/10" data-testid={`faq-item-${i}`}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      data-testid={`faq-toggle-${i}`}
                      className="w-full text-left py-6 md:py-8 flex items-start justify-between gap-6 group"
                    >
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2">
                          Q.0{i + 1}
                        </div>
                        <h3 className={`font-display tracking-tighter text-2xl md:text-3xl font-extrabold transition-colors ${isOpen ? "text-[var(--accent)]" : "text-white group-hover:text-white/80"}`}>
                          {f.q}
                        </h3>
                      </div>
                      <span className="mt-2 w-9 h-9 border border-white/20 grid place-items-center shrink-0 group-hover:border-[var(--accent)] transition-colors">
                        {isOpen ? <Minus className="w-4 h-4 text-[var(--accent)]" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 pb-8" : "max-h-0"}`}>
                      <p className="text-white/70 leading-relaxed pr-12 max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
