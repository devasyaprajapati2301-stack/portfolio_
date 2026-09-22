<<<<<<< HEAD
# Dev — Personal Portfolio

A dark, modern, interactive portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Before you send this to anyone — edit these

Everything you need to personalize lives in `src/data/`. No component code needs to change for normal edits.

| File | What to edit |
|---|---|
| `src/data/profile.js` | Your name, email, resume link, and **`GITHUB_USERNAME`** (this one variable drives the whole GitHub section — set it to your real username to pull live repo data) |
| `src/data/education.js` | Your college/university name and current status (e.g. "3rd Year") |
| `src/data/certifications.js` | Your CDAC course's exact title, year, and any future certifications |
| `src/data/projects.js` | Real GitHub links and live demo URLs for each project (currently `#` placeholders) |
| `src/data/skills.js` | Flip any skill's `status` between `"know"` and `"learning"` as your proficiency changes |
| `src/data/roadmap.js`, `aiml.js`, `dsa.js`, `goals.js`, `experience.js` | Adjust wording as your journey evolves |

Search the codebase for `PLACEHOLDER` to find every field that still needs a real value:

```bash
grep -r "PLACEHOLDER" src/
```

## Structure

```
src/
  components/   reusable UI (navbar, section heading, counters, etc.)
  sections/     one file per page section (Hero, About, Projects, ...)
  data/         all editable content — no JSX here
  App.jsx       assembles all sections
  index.css     design tokens & global styles
```

## Notes

- The GitHub section fetches **real, live data** from the public GitHub API once you set `GITHUB_USERNAME` — nothing is faked. If the username is still a placeholder, it shows an honest message instead of fake stats.
- The contact form opens the visitor's email client with a pre-filled message (no backend required). If you'd rather wire it to a real backend or a service like Formspree, swap the `handleSubmit` function in `src/sections/Contact.jsx`.
- Colors, fonts, and spacing tokens are defined in `tailwind.config.js` and `src/index.css` if you want to adjust the palette.
=======
# PORTFOILIO
Personal portfolio showcasing my journey as a CS student building toward Software Engineering &amp; AI/ML — full-stack projects, ML experiments, and DSA work.
>>>>>>> 69061de1e022f023fc928c2547af5f07037e6dec
