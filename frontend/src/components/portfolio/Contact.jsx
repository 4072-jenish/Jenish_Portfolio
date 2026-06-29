import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { PROFILE } from "../../data/portfolio";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field before sending.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I will get back within 24 hours.", {
        description: `Thanks ${form.name.split(" ")[0]}, talk soon.`,
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative" data-testid="contact-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
          <span className="text-[var(--accent)]">/07</span> &nbsp; Contact &mdash; let&rsquo;s build something
        </div>

        <div className="grid grid-cols-12 gap-10 mt-8">
          {/* Left massive type */}
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-display font-extrabold tracking-tighter leading-[0.85] text-[clamp(3.5rem,10vw,9rem)]">
              Let&rsquo;s <br />
              <span className="italic font-editorial text-white/70 not-italic font-display">connect</span>
              <span className="text-[var(--accent)]">.</span>
            </h2>
            <p className="font-editorial text-2xl text-white/60 mt-8 max-w-lg leading-snug">
              I&rsquo;m always open to discussing new opportunities, creative ideas, or being part of your vision.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-xl">
              <div className="bg-[var(--bg)] p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                <div className="text-sm text-white/85">{PROFILE.location}</div>
              </div>
              <div className="bg-[var(--bg)] p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                  <Mail className="w-3 h-3" /> Email
                </div>
                <a href={`mailto:${PROFILE.email}`} className="text-sm text-white/85 hover:text-[var(--accent)] transition-colors break-all" data-testid="contact-email-link">{PROFILE.email}</a>
              </div>
              <div className="bg-[var(--bg)] p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                  <Phone className="w-3 h-3" /> Phone
                </div>
                <div className="text-sm text-white/85">{PROFILE.phone}</div>
                <div className="font-mono text-[10px] text-white/40 mt-1">{PROFILE.schedule}</div>
              </div>
              <div className="bg-[var(--bg)] p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" /> Response
                </div>
                <div className="text-sm text-white/85">{PROFILE.responseTime}</div>
                <div className="font-mono text-[10px] text-white/40 mt-1">usually faster</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} className="btn-architectural" data-testid="contact-send-email">
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-architectural ghost" data-testid="contact-linkedin">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={submit} className="col-span-12 lg:col-span-6 lg:pl-8 lg:border-l border-white/10" data-testid="contact-form">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-6">/ Send me a message</div>
            <div className="space-y-5">
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">Your name</label>
                <input
                  data-testid="contact-input-name"
                  className="flat mt-2"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g. Ada Lovelace"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">Email</label>
                <input
                  data-testid="contact-input-email"
                  className="flat mt-2"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@domain.com"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">Message</label>
                <textarea
                  data-testid="contact-input-message"
                  className="flat mt-2 min-h-[160px] resize-y"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your idea, role, or project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-button"
                className="btn-architectural w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
              </button>
            </div>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/30 mt-6 leading-relaxed">
              Or hit me up directly — <a href={`mailto:${PROFILE.email}`} className="text-[var(--accent)] hover:underline" data-testid="contact-inline-email">{PROFILE.email}</a>
              <ArrowUpRight className="inline w-3 h-3 ml-1" />
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
