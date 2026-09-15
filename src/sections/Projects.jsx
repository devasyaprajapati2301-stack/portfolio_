import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects, projectCategories } from "../data/projects";

const categoryColor = {
  "FULL STACK": "text-signal border-signal/30 bg-signal/[0.06]",
  "AI / ML": "text-neural border-neural/30 bg-neural/[0.06]",
  "DATA SCIENCE": "text-amber border-amber/30 bg-amber/[0.06]",
  DSA: "text-ink-100 border-white/20 bg-white/[0.04]",
};

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="glass-card group flex flex-col rounded-xl p-6 transition-colors hover:border-white/[0.15]"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-ink-100">{project.name}</h3>
        <span className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide ${categoryColor[project.category]}`}>
          {project.category}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-ink-500">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-5 flex items-center gap-1.5 font-mono text-xs text-signal transition-opacity hover:opacity-80"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Problem, features & details"}
        <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4 border-t border-white/[0.08] pt-4">
              <div>
                <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-ink-500">Problem solved</p>
                <p className="text-sm leading-relaxed text-ink-300">{project.problem}</p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-500">Key features</p>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2.5 font-mono text-xs text-ink-300 transition-colors hover:border-signal/50 hover:text-signal"
        >
          <Github size={14} /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-signal/10 px-3.5 py-2.5 font-mono text-xs text-signal transition-colors hover:bg-signal/20"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("ALL");

  const filtered = useMemo(
    () => (filter === "ALL" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built."
        description="A mix of full-stack applications, algorithm visualizations, and data science experiments — filter by category to explore."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-200 ${
              filter === cat
                ? "border-signal bg-signal/10 text-signal"
                : "border-white/10 text-ink-500 hover:border-white/25 hover:text-ink-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-ink-500">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
