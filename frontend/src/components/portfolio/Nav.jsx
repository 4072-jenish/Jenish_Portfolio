import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled ? "bg-[rgba(5,5,7,0.7)] backdrop-blur-xl border-b border-white/5" : ""
        }`}
        data-testid="main-nav"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <button
            onClick={() => handleClick("#home")}
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
          >
            <span className="w-8 h-8 border border-white/20 grid place-items-center font-mono text-xs text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all">J</span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors hidden sm:inline">Jenish / Folio</span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors relative group"
              >
                <span className="text-[var(--accent)] mr-2">0{i + 1}</span>
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleClick("#contact")}
              data-testid="nav-contact-cta"
              className="hidden md:inline-flex btn-architectural"
            >
              <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
              Let&rsquo;s Talk
            </button>
            <a
              href="/jenish-resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-testid="nav-resume-cta"
              className="hidden xl:inline-flex btn-architectural ghost"
            >
              Resume ↓
            </a>
            <button
              onClick={() => setOpen(true)}
              data-testid="nav-menu-toggle"
              className="lg:hidden w-10 h-10 border border-white/15 grid place-items-center"
              aria-label="Open menu"
            >
              <div className="space-y-1.5">
                <span className="block w-5 h-px bg-white" />
                <span className="block w-3 h-px bg-white ml-auto" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-[var(--bg)]/95 backdrop-blur-xl"
          data-testid="mobile-menu-overlay"
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                data-testid="nav-menu-close"
                className="w-10 h-10 border border-white/15 grid place-items-center"
                aria-label="Close menu"
              >
                <span className="font-mono text-sm">×</span>
              </button>
            </div>
            <nav className="flex-1 grid place-items-center">
              <div className="space-y-6 text-center">
                {NAV_LINKS.map((l, i) => (
                  <button
                    key={l.href}
                    onClick={() => handleClick(l.href)}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    className="block font-display text-5xl tracking-tighter text-white/80 hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="font-mono text-xs text-[var(--accent)] mr-3 align-middle">0{i + 1}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
