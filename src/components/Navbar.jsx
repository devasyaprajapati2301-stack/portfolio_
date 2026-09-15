import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X, FileDown } from "lucide-react";
import { profile, socials } from "../data/profile";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-base-900/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="/home"
          className="font-display text-lg font-semibold tracking-tight text-ink-100"
        >
          DEV<span className="text-signal">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-3 py-2 font-body text-sm transition-colors ${
                  active === link.href
                    ? "text-ink-100"
                    : "text-ink-500 hover:text-ink-300"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-signal"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-500 transition-colors hover:text-signal"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-500 transition-colors hover:text-signal"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 font-mono text-xs text-ink-300 transition-colors hover:border-signal/50 hover:text-signal"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-ink-100 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.06] bg-base-900/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 font-body text-sm ${
                      active === link.href
                        ? "bg-white/5 text-signal"
                        : "text-ink-500"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-4 px-3 pt-2">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-ink-500">
                  <Github size={20} />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-ink-500">
                  <Linkedin size={20} />
                </a>
                <a href={profile.resumeUrl} className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 font-mono text-xs text-ink-300">
                  <FileDown size={14} /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
