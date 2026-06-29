# Jenish Hariyani — Developer Portfolio (PRD)

## Original Problem Statement
User wants a modern, "world's best forever" UI developer portfolio for Jenish Hariyani — MERN Stack Developer (Surat, Gujarat, India). Sections: Home (rotating typed words: Experiences/Solutions/Innovations/Dreams), About, Skills, Projects (filterable), FAQs, Contact. Custom floating cursor, scroll progress, animated backgrounds, reveal effects, toast on contact submit.

User attached: `Jenish_Learning_Journey_Seed.md` describing 10 phases of his self-taught journey (React → Frontend stack → NestJS → PostgreSQL → Cloud → Git/Linux → Production projects → Email systems → Payments → Engineering principles).

## Architecture
- **Frontend**: React 19 + CRA (craco) + Tailwind + Framer Motion + Sonner + lucide-react. Single-page composition (`App.js` → Portfolio → 9 components).
- **Backend**: FastAPI on `/api`. Endpoints: `GET /api/`, `GET/POST /api/status`, `POST /api/contact`, `GET /api/contact`.
- **DB**: MongoDB collection `contact_messages` (UUID id, ISO timestamps).
- **Fonts**: Cabinet Grotesk (Fontshare), Manrope, JetBrains Mono, Cormorant Garamond.
- **Theme**: Dark Luxury archetype — #050507 bg, #E05C36 orange accent, #C8A97E gold, architectural 1px borders, sharp corners, noise overlay, grid background.

## Implemented (Dec 2025)
- Hero with custom typing animation (no external lib), grid bg + radial glows, stats bento, CTAs.
- About: bento grid w/ bio + 4 fun-facts + 4 skill progress bars (Framer scroll-in).
- Learning Journey: 10-phase architectural timeline w/ tags.
- Skills: dual-direction marquee + 5-column categorized grid + summary badges.
- Projects: alternating L/R layout, 3-state filter (All/Frontend/Full Stack), live demo badges, hover scale.
- FAQ: custom accordion w/ +/- toggle, smooth open/close.
- Contact: split layout (massive type + form), MongoDB persistence, Sonner toast feedback, email/LinkedIn buttons.
- Footer: "Made with love by Jenish" + social links + copyright.
- Custom: mix-blend-mode floating cursor (dot + ring), scroll progress bar, noise overlay, mobile nav overlay.

## What Works
- Backend 100% (test reports iteration_1.json, iteration_2.json)
- Frontend 100% delta tested
- 7 projects displayed: Blog Mediator (Next.js), Astro Public Blog, Blog Admin Panel (React+Shadcn), E-Commerce, Team Collab, Business Landing, First Website
- Resume PDF downloadable from Hero + Nav (data-testid hero-cta-resume, nav-resume-cta)
- End-to-end contact submission persists to MongoDB and shows success toast.

## Backlog / Next Tasks
- P1: Replace HTML5 `required` with JS-level validation + Sonner toast for empty submission.
- P1: Wire real GitHub + LinkedIn URLs (currently placeholder `#`).
- P2: Add resume PDF download link in Hero/Nav.
- P2: Project detail modal/page on card click.
- P2: Blog section + MDX integration (he wants to write).
- P3: Admin route to view contact messages (currently only via curl GET /api/contact).
- P3: SEO meta (OG image, JSON-LD person schema), favicon, sitemap.
