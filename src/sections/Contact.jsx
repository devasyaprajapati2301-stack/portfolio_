import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { profile, socials } from "../data/profile";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something."
        description="I'm always open to interesting projects, internships, collaborations, and opportunities to learn and build."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: profile.email, href: socials.email },
            { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: socials.linkedin },
            { icon: Github, label: "GitHub", value: "See my code", href: socials.github },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-signal/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal/10 ring-1 ring-signal/25">
                <Icon size={18} className="text-signal" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">{label}</p>
                <p className="truncate text-sm text-ink-100">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card space-y-5 rounded-xl p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-500">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 transition-colors focus:border-signal/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-500">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 transition-colors focus:border-signal/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you thinking of building?"
              className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 transition-colors focus:border-signal/50"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message
            <Send size={15} />
          </button>
          <p className="text-center font-mono text-[11px] text-ink-700">
            Opens your email client with this message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
