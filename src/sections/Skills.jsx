import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { skillCategories } from "../data/skills";

function SkillBadge({ skill }) {
  const learning = skill.status === "learning";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
        learning
          ? "border border-dashed border-neural/50 text-neural hover:border-neural"
          : "border border-signal/25 bg-signal/[0.06] text-ink-300 hover:border-signal/50 hover:text-signal"
      }`}
    >
      {learning && <span className="h-1.5 w-1.5 rounded-full bg-neural" />}
      {skill.name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools I build with."
        description="Solid badges are technologies I actively use. Dashed violet badges are technologies I'm currently learning."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass-card rounded-xl p-5 transition-colors hover:border-white/[0.15]"
          >
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
