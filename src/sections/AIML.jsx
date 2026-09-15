import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GridBackground from "../components/GridBackground";
import { aiPath, aiRoadmap } from "../data/aiml";

export default function AIML() {
  return (
    <section id="aiml" className="relative overflow-hidden">
      <GridBackground className="opacity-60" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="AI / ML"
          title="Building My Path Into AI"
          description="My journey from raw Python to applied machine learning — and what's next on the frontier."
        />

        {/* progression strip */}
        <div className="mb-14 flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-xs sm:text-sm">
          {aiPath.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-ink-300">
                {step}
              </span>
              {i < aiPath.length - 1 && <ArrowRight size={14} className="text-signal" />}
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {aiRoadmap.map((stage, i) => {
            const learning = stage.status === "learning";
            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl p-5 ${
                  learning
                    ? "border border-dashed border-neural/40 bg-neural/[0.04]"
                    : "glass-card"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-ink-100">{stage.stage}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                      learning ? "bg-neural/15 text-neural" : "bg-signal/15 text-signal"
                    }`}
                  >
                    {learning ? "Learning Next" : "Know"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-300">
                      <span className={`h-1 w-1 shrink-0 rounded-full ${learning ? "bg-neural" : "bg-signal"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
