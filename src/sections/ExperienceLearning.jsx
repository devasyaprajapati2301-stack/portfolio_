import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Award, Repeat, BrainCircuit } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { experienceLearning } from "../data/experience";

const icons = [GraduationCap, Code, Trophy, Award, Repeat, BrainCircuit];

export default function ExperienceLearning() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience & Learning"
        title="How I'm building toward the role."
        description="I'm a student, not yet employed as an engineer — this is the honest picture of how I'm developing real skills right now."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {experienceLearning.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card rounded-xl p-6 transition-colors hover:border-signal/30"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10 ring-1 ring-signal/20">
                <Icon size={18} className="text-signal" />
              </span>
              <h3 className="mb-2 font-display text-base font-semibold text-ink-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
