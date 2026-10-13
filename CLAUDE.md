# CLAUDE.md — Karthikeyan Umesh portfolio

Personal portfolio site. `CONTENT.md` is the source of truth for all copy; `src/data/profile.js` is its machine-readable mirror. When they disagree, `CONTENT.md` wins: update `profile.js` to match.

## Stack & commands

- Vite + React 19, Tailwind CSS v4 (`@tailwindcss/vite`), GSAP + SplitText (hero only), Lenis, self-hosted fonts via `@fontsource`
- `npm run dev` · `npm run build` (client build → SSR build → `scripts/prerender.js` injects HTML into `dist/index.html`) · `npm run preview`
- Deploy target: Vercel. Domain (later): karthikeyanumesh.com
- Lighthouse (2026-10-12, local, compressed): mobile 92 / 100 / 100 / 100, desktop 100 / 100 / 100 / 100

## Structure

- `src/data/profile.js` — all site content, keyed by language (`en` now; `fr` deferred)
- `src/i18n.jsx` — language context; the EN/FR toggle only renders when a second language has content
- `src/components/` — one component per section, plus `Reveal.jsx` (IntersectionObserver + CSS scroll reveal) and `SmoothScroll.jsx` (Lenis, lazy-loaded, off on touch devices)
- `src/motion.js` — `loadGsap()` lazy-loads GSAP so it stays out of the critical bundle
- `src/entry-server.jsx` + `scripts/prerender.js` — build-time prerender; `main.jsx` hydrates when HTML is present
- `public/assets/` — screenshots, badges, certificates from `../portfolio-assets/` (renamed, resized, WebP where possible)
- `public/images/` — photos (hero, travel) and diagrams: WebP, converted to sRGB, all EXIF/XMP/ICC metadata stripped. Never publish a photo with GPS or other metadata.

## Performance rules

- Keep GSAP out of the main bundle (import via `loadGsap()`); don't add ScrollTrigger per element.
- The hero photo is the LCP element: never hide it (no opacity 0 / clip-path at load).
- Sections use `content-visibility: auto` (`.cv-auto`); keep it.
- Components must render on the server (no `window`/`localStorage` at render time; use effects).

## Accuracy rules (non-negotiable)

1. Never include Sky UK / Firstsource customer-service employment anywhere.
2. Never invent metrics, results, technologies, awards, links, certifications, duties or deployment status.
3. Chronicle is a concept **In Development**. Never show planned features as built, and never make fake screenshots or UI mockups that look like a working app.
4. Serverless AI Resume Tailor API is tested locally. AWS Lambda is a planned deployment path, not live. It calls Gemini through HTTPX, not the Google GenAI SDK. The match score of 48 is an example output, not an accuracy claim.
5. Cloud Tech's "future enhancements" (Lambda, API Gateway, SES, CodePipeline, CodeBuild, DynamoDB) are not implemented. Its S3 live link is broken: do not link it until it works.
6. Cloud Tech (learning website) and AWS 3-Tier Architecture with Terraform (In Progress) are separate projects.
7. The Best Software Project Pitch Award (SOEN 6841) and the short-film awards are separate achievements. Film award facts (IIM Shortcuts 2019 via Film Companion, Estrade St. Claret 2020, CARV Karnataka 2020) come from the official poster (`portfolio-assets/IIM shortfilm Poster award.jpeg`); never add festivals, placings or attributions beyond it.
8. PennyWise links to the Springer iPhone 11 paper and the IFERP/WCASET shopping-assistant paper, never to the Big Data in Google paper. No claimed model, dataset, accuracy or repo until recovered.
9. No percentage for the Inventeron S3 workflow automation. Junior Engineer bullets are used exactly as supplied.
10. Degree facts: M.Eng. Software Engineering, Concordia (transferred from Quality Systems Engineering, Sep 3, 2024; never list QSE as a completed degree). B.E. Computer Science Engineering, New Horizon College of Engineering, Aug 2019 – Jun 2023. Concordia GPA 3.29 (shown at Karthik's request). The QSE → Software Engineering move is framed as a deliberate choice, never as a separate degree.
11. Headline is "Cloud & Software Developer" ("Engineer" is a protected title in Québec).
12. The About section's three paragraphs are approved. Do not edit them unless Karthik asks.
13. Phone number never appears on the site. Do not link a resume PDF that contains it.
14. Skills: only those backed by the resume or projects, no proficiency levels.

## Content & UI rules

- Missing optional assets (screenshots, badges, travel photos, film links) are hidden, never shown as empty boxes or broken links. Model them as `null` in `profile.js`.
- Private repos (TubeLytics, Chronicle) render as "Private repo" text, not a link that 404s.
- The contact form only renders once a Formspree ID is set. Until then, show the email link. Never show a fake "Message sent" state.
- Label every project's status and group (work in progress, completed, academic proposal, learning project).
- Respect `prefers-reduced-motion`: disable Lenis and GSAP animations when it is set.
- Keep it accessible: semantic landmarks, alt text, visible focus states, AA contrast, keyboard-usable nav.
- Site copy is first person ("I"), matching the approved About section.
