import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, Github, Linkedin } from "lucide-react";
import GridBackground from "../components/GridBackground";
import { profile, socials } from "../data/profile";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: 'focus: ["Software Engineering", "AI/ML"],' },
  { indent: 1, text: "building: true," },
  { indent: 1, text: 'learning: "everyday",' },
  { indent: 0, text: "};" },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const currentLine = codeLines[visibleLines].text;
    if (charCount < currentLine.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, 220);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  return (
    <div className="glass-card w-full max-w-md rounded-xl shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-ink-500">dev.js</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {codeLines.map((line, i) => {
          const isDone = i < visibleLines;
          const isCurrent = i === visibleLines;
          const text = isDone ? line.text : isCurrent ? line.text.slice(0, charCount) : "";
          if (!isDone && !isCurrent) return null;
          return (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }} className="whitespace-pre text-ink-300">
              {colorize(text)}
              {isCurrent && <span className="ml-0.5 inline-block h-4 w-[2px] animate-blink bg-signal align-middle" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function colorize(text) {
  // Lightweight syntax coloring for the visible snippet
  if (text.startsWith("const")) {
    return (
      <>
        <span className="text-neural">const</span> developer <span className="text-ink-500">=</span> {"{"}
      </>
    );
  }
  if (text.startsWith("focus")) {
    return (
      <>
        <span className="text-signal">focus</span>
        <span className="text-ink-500">: </span>
        <span className="text-amber">[&quot;Software Engineering&quot;, &quot;AI/ML&quot;]</span>
        <span className="text-ink-500">,</span>
      </>
    );
  }
  if (text.startsWith("building")) {
    return (
      <>
        <span className="text-signal">building</span>
        <span className="text-ink-500">: </span>
        <span className="text-neural">true</span>
        <span className="text-ink-500">,</span>
      </>
    );
  }
  if (text.startsWith("learning")) {
    return (
      <>
        <span className="text-signal">learning</span>
        <span className="text-ink-500">: </span>
        <span className="text-amber">&quot;everyday&quot;</span>
        <span className="text-ink-500">,</span>
      </>
    );
  }
  return <span className="text-ink-500">{text}</span>;
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <GridBackground />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-radial-glow blur-2xl"
      />

      <div className="section-shell relative grid items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5">Hi, I&apos;m {profile.name}.</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl lg:text-[3.2rem]">
            Computer Science Student building toward{" "}
            <span className="bg-signal-neural bg-clip-text text-transparent">
              Software Engineering &amp; AI.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} className="btn-secondary">
              <FileDown size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-500 transition-colors hover:text-signal">
              <Github size={20} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-500 transition-colors hover:text-signal">
              <Linkedin size={20} />
            </a>
            <a href={socials.email} aria-label="Email" className="text-ink-500 transition-colors hover:text-signal">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <TerminalWindow />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
