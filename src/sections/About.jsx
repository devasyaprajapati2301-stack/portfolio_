import { motion } from "framer-motion";
import { Code2, Database, Layers, Cpu, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import AnimatedCounter from "../components/AnimatedCounter";
import { profile } from "../data/profile";

const focusAreas = [
  { icon: Layers, label: "Frontend development" },
  { icon: Code2, label: "Backend development" },
  { icon: Database, label: "Databases" },
  { icon: Sparkles, label: "Data Science" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Code2, label: "Algorithms & Data Structures" },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Learning by building, one project at a time."
            description={profile.about}
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {focusAreas.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card flex flex-col items-start gap-2.5 rounded-xl p-4 transition-colors hover:border-signal/40"
              >
                <Icon size={18} className="text-signal" />
                <span className="text-sm text-ink-300">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 self-start sm:grid-cols-2">
          {[
            { value: 20, suffix: "+", label: "Projects / Experiments" },
            { display: "CSE", label: "Student" },
            { display: "Full-Stack", label: "Development" },
            { display: "AI/ML", label: "& Data Science" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6"
            >
              {stat.value ? (
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              ) : (
                <span className="font-display text-2xl font-semibold text-ink-100">
                  {stat.display}
                </span>
              )}
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="glass-card col-span-full flex items-center gap-3 rounded-xl border-signal/20 p-6"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-signal shadow-glow" />
            <span className="font-mono text-sm text-ink-300">Continuous Learner — always shipping something new</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
