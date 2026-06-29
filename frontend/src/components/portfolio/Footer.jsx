import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-[var(--bg)]" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">/ End of page</div>
            <h3 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(3rem,9vw,8rem)]">
              Made with <span className="font-editorial italic text-[var(--accent)] not-italic font-display">love</span><br />
              by Jenish.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-10 content-start">
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">Reach out</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href={`mailto:${PROFILE.email}`} className="hover:text-[var(--accent)]" data-testid="footer-email">{PROFILE.email}</a></li>
                <li>{PROFILE.phone}</li>
                <li>{PROFILE.location}</li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">Elsewhere</div>
              <ul className="space-y-2">
                <li>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" data-testid="footer-github" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--accent)]">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--accent)]">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PROFILE.email}`} data-testid="footer-mail-icon" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--accent)]">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
          <div>© {year} Jenish Hariyani · All rights reserved</div>
          <div className="flex items-center gap-2">
            Crafted with <Heart className="w-3 h-3 text-[var(--accent)]" /> &amp; React · MMXXV
          </div>
        </div>
      </div>
    </footer>
  );
}
