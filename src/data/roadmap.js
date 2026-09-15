// Modeled as a git-branch graph: a shared trunk (fundamentals) splits into
// a "web-dev" branch and "data-ai" branch, which merge back into current
// focus, and land on a tagged release representing the future goal.

export const roadmap = [
  {
    id: "fundamentals",
    branch: "trunk",
    title: "Programming Fundamentals",
    period: "Foundation",
    items: ["Python", "C/C++", "Java", "JavaScript"],
  },
  {
    id: "web-dev",
    branch: "web",
    title: "Web Development",
    period: "Branch: web-dev",
    items: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    id: "data-ai",
    branch: "data",
    title: "Data & AI",
    period: "Branch: data-ai",
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Machine Learning", "Data Analysis"],
  },
  {
    id: "current-focus",
    branch: "merge",
    title: "Current Focus",
    period: "merge → main",
    items: [
      "Advanced Machine Learning",
      "AI Engineering",
      "Full-Stack Development",
      "DSA",
      "Backend Development",
      "Real-world projects",
    ],
  },
  {
    id: "future-goal",
    branch: "tag",
    title: "Software Engineer / AI-ML Engineer",
    period: "target release",
    items: [
      "Build production-level applications",
      "Work on real-world AI systems",
      "Continue developing strong engineering fundamentals",
    ],
  },
];
