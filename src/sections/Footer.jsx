import { Github, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
        <p className="font-mono text-xs text-ink-700">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-signal">
            <Github size={17} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-signal">
            <Linkedin size={17} />
          </a>
          <a href={socials.email} aria-label="Email" className="text-ink-500 hover:text-signal">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
