import { motion } from "framer-motion";
import { Award, ExternalLink, PlusCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Formal training, alongside the self-taught work."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neural/10 ring-1 ring-neural/25">
                <Award size={18} className="text-neural" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-ink-100">{cert.name}</h3>
                <p className="mt-0.5 font-mono text-xs text-ink-500">
                  {cert.organization} · {cert.year}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-signal hover:opacity-80"
                  >
                    View credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: certifications.length * 0.08 }}
          className="flex items-center justify-center rounded-xl border border-dashed border-white/15 p-6 text-center"
        >
          <div>
            <PlusCircle size={20} className="mx-auto mb-2 text-ink-700" />
            <p className="font-mono text-xs text-ink-700">
              More certifications will appear here as I add them
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
