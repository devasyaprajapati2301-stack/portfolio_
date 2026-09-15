import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, AlertCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { GITHUB_USERNAME, socials } from "../data/profile";

export default function GitHubSection() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (GITHUB_USERNAME.startsWith("PLACEHOLDER")) {
      setError(true);
      return;
    }
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="Development Activity"
        title="Recent work on GitHub"
        description="Live repository data pulled directly from my GitHub profile — nothing here is simulated."
      />

      <div className="mb-8 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5">
        <div className="flex items-center gap-3">
          <Github size={20} className="text-ink-300" />
          <span className="font-mono text-sm text-ink-300">
            @{GITHUB_USERNAME.startsWith("PLACEHOLDER") ? "your-username" : GITHUB_USERNAME}
          </span>
        </div>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-signal hover:opacity-80"
        >
          View profile <ExternalLink size={13} />
        </a>
      </div>

      {error && (
        <div className="glass-card flex items-start gap-3 rounded-xl p-6">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-neural" />
          <p className="text-sm leading-relaxed text-ink-500">
            {GITHUB_USERNAME.startsWith("PLACEHOLDER")
              ? "Set GITHUB_USERNAME in src/data/profile.js to pull in your real, live repositories automatically — no data is faked here."
              : "Live repository data couldn't be loaded right now (GitHub API rate limit or network issue). Check back shortly, or visit the profile link above."}
          </p>
        </div>
      )}

      {!error && !repos && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card h-40 animate-pulse rounded-xl" />
          ))}
        </div>
      )}

      {repos && repos.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card flex flex-col rounded-xl p-5 transition-colors hover:border-signal/40"
            >
              <h3 className="mb-1.5 truncate font-display text-sm font-semibold text-ink-100">
                {repo.name}
              </h3>
              <p className="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-ink-500">
                {repo.description || "No description provided."}
              </p>
              <div className="flex items-center gap-4 font-mono text-[11px] text-ink-500">
                {repo.language && <span className="text-signal">{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
