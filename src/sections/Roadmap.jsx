import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, GitMerge, GitCommit, Tag, ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { roadmap } from "../data/roadmap";

const colorMap = {
  trunk: { dot: "bg-ink-300", ring: "ring-ink-300/30", text: "text-ink-300", border: "border-white/10" },
  web: { dot: "bg-signal", ring: "ring-signal/30", text: "text-signal", border: "border-signal/25" },
  data: { dot: "bg-neural", ring: "ring-neural/30", text: "text-neural", border: "border-neural/25" },
  merge: { dot: "bg-ink-100", ring: "ring-ink-100/30", text: "text-ink-100", border: "border-white/15" },
  tag: { dot: "bg-amber", ring: "ring-amber/30", text: "text-amber", border: "border-amber/30" },
};

const icons = {
  trunk: GitCommit,
  web: GitBranch,
  data: GitBranch,
  merge: GitMerge,
  tag: Tag,
};

function Node({ node, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const c = colorMap[node.branch];
  const Icon = icons[node.branch];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`glass-card rounded-xl border ${c.border} p-5 sm:p-6`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.dot}/15 ring-1 ${c.ring}`}>
            <Icon size={16} className={c.text} />
          </span>
          <div>
            <p className={`font-mono text-[11px] uppercase tracking-wider ${c.text}`}>{node.period}</p>
            <h3 className="font-display text-lg font-semibold text-ink-100">{node.title}</h3>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-wrap gap-2 pl-12">
              {node.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Roadmap() {
  const [fundamentals, webDev, dataAI, currentFocus, futureGoal] = roadmap;

  return (
    <section id="journey" className="section-shell">
      <SectionHeading
        eyebrow="Career Roadmap"
        title="My path, mapped like a codebase."
        description="Two branches — web development and data & AI — growing from the same fundamentals, merging into my current focus, and heading toward one release: a Software Engineer / AI-ML Engineer."
      />

      <div className="relative">
        {/* central connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/15 via-white/10 to-white/15 lg:block"
        />

        <div className="space-y-6">
          <div className="mx-auto max-w-xl">
            <Node node={fundamentals} defaultOpen />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-2">
            <Node node={webDev} />
            <Node node={dataAI} />
          </div>

          <div className="mx-auto max-w-xl">
            <Node node={currentFocus} defaultOpen />
          </div>

          <div className="mx-auto max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl border border-amber/25 bg-gradient-to-br from-amber/[0.06] to-transparent p-6 text-center shadow-glow"
            >
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 ring-1 ring-amber/30">
                <Tag size={17} className="text-amber" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-wider text-amber">{futureGoal.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink-100">{futureGoal.title}</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {futureGoal.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
