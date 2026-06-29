export const PROFILE = {
  name: "Jenish",
  fullName: "Jenish Hariyani",
  title: "MERN Stack Developer",
  tagline: "Crafting Digital",
  rotatingWords: ["Experiences", "Solutions", "Innovations", "Dreams"],
  location: "Kamrej, Surat, Gujarat, India",
  email: "hariyanijenish@gmail.com",
  phone: "+91 99093 86875",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "/jenish-resume.pdf",
  responseTime: "Within 24 hours",
  schedule: "Mon — Fri, 9AM — 6PM",
  bio: "I'm Jenish, a passionate and dedicated student at Red and White Multimedia Education. I specialize in building dynamic and responsive web applications using the MERN Stack. I love solving complex problems with clean, efficient code and creating user-centric designs that make a difference.",
  intro: "I'm Jenish, a passionate MERN Stack Developer dedicated to building scalable applications and beautiful interfaces that make a difference.",
};

export const STATS = [
  { value: "03+", label: "Years exploring code" },
  { value: "50+", label: "Projects shipped" },
  { value: "100%", label: "Client satisfaction" },
];

export const SKILL_BARS = [
  { name: "MERN Stack", value: 88 },
  { name: "React & Bootstrap", value: 92 },
  { name: "Firebase", value: 80 },
  { name: "Next.js & Tailwind", value: 85 },
];

export const FUN_FACTS = [
  { value: "15+", label: "Projects built" },
  { value: "Fresher", label: "but hungry" },
  { value: "100%", label: "Passion driven" },
  { value: "∞", label: "Curiosity" },
];

export const SKILLS = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Tailwind", "Bootstrap", "Shadcn UI", "Redux Toolkit"],
  Backend: ["Node.js", "Express", "NestJS", "Hono", "REST APIs", "JWT", "OTP Auth"],
  Database: ["MongoDB", "PostgreSQL", "Supabase", "TypeORM", "Firebase"],
  Cloud: ["Cloudinary", "Vercel", "Render", "Cloudflare Workers"],
  Tools: ["Git", "GitHub", "Ubuntu", "Node.js", "C++"],
};

export const JOURNEY = [
  { phase: "01", title: "React Fundamentals", tags: ["JSX", "Hooks", "State", "Custom Hooks", "Forms"], desc: "Component thinking, props/state mental model, controlled forms and reusable UI." },
  { phase: "02", title: "Frontend Stack", tags: ["Next.js", "Astro", "Tailwind", "Shadcn", "Redux Toolkit"], desc: "Modern frameworks, design systems, async thunks, slices, store architecture and clean API integration." },
  { phase: "03", title: "Backend with NestJS", tags: ["Controllers", "Services", "DTOs", "Guards", "Validation"], desc: "Dependency injection, decorators, JWT auth, role-based access and OTP email verification." },
  { phase: "04", title: "Databases", tags: ["PostgreSQL", "TypeORM", "Relations"], desc: "Designing tables, primary/foreign keys, one-to-many, repositories and migrations." },
  { phase: "05", title: "Cloud & Deployment", tags: ["Cloudinary", "Vercel", "Render", "Cloudflare Workers"], desc: "Shipping to production, debugging CORS, env vars and build errors across providers." },
  { phase: "06", title: "Git & Linux", tags: ["Branching", "Stash", "Ubuntu", "Terminal"], desc: "Daily git workflow, package management and Node setup on a fresh Linux box." },
  { phase: "07", title: "Production Projects", tags: ["Blog Platform", "eNotaru Admin", "HMR Workers"], desc: "Full-stack blog with admin approval, nested admin panels, and edge-deployed Hono apps." },
  { phase: "08", title: "Email Systems", tags: ["Templates", "OTP", "Sequences"], desc: "Dynamic templates with variable replacement and investor sequence flows." },
  { phase: "09", title: "Payments", tags: ["Stripe", "Webhooks", "Order Flow"], desc: "Payment Intents, webhooks and reconciling order lifecycles." },
  { phase: "10", title: "Engineering Principles", tags: ["Architecture", "Scalability", "DX"], desc: "Project lifecycle, folder architecture, reusable components and backend basics." },
];

export const PROJECTS = [
  {
    title: "Blog Platform — Mediator Panel",
    year: "2026",
    image: "/projects/futuristic-blog.png",
    description: "Futuristic mediator dashboard for a 4-app blog ecosystem. Approve / reject blog requests, manage flow, and orchestrate role-based publishing between authors and admins.",
    tech: ["Next.js 16", "TypeScript", "Redux Toolkit", "Tailwind", "Framer Motion", "JWT", "RBAC"],
    link: "https://midiator-penal.vercel.app/",
    github: "#",
    category: "Full Stack",
  },
  {
    title: "Public Blog Web — Astro",
    year: "2026",
    image: "/projects/astro-blog.png",
    description: "Reader-facing public site with SSR + runtime API fetching. Only approved posts surface here — clean, editorial typography and SEO-ready dynamic routes.",
    tech: ["Astro", "Tailwind", "Runtime API", "SEO", "Dynamic Routes"],
    link: "https://public-blog-web.vercel.app/",
    github: "#",
    category: "Frontend",
  },
  {
    title: "Blog Admin Panel",
    year: "2026",
    image: "/projects/admin-panel.png",
    description: "Full admin control room — user management, blog moderation (approve / reject), live analytics with daily growth charts, and role assignment. Backed by NestJS + PostgreSQL.",
    tech: ["React", "Shadcn UI", "Tailwind", "Recharts", "NestJS", "PostgreSQL", "TypeORM"],
    link: "https://blog-admin-panel-rho.vercel.app/dashboard",
    github: "#",
    category: "Full Stack",
  },
  {
    title: "E-Commerce Web App",
    year: "2025",
    image: "https://res.cloudinary.com/dd8rb9luw/image/upload/v1772777439/alvag90nvlhrqmhp5xgh.png",
    description: "A complete e-commerce platform built with React featuring cart, checkout, filters, and Firebase auth — Cloudinary powered media.",
    tech: ["React", "Redux", "Firebase", "Cloudinary", "Bootstrap"],
    link: "https://flipcart-clone-cc07d.web.app/",
    github: "#",
    category: "Full Stack",
  },
  {
    title: "Team Collaboration App",
    year: "2024",
    image: "https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/kaxxta6cbdf0fav8ybec.png",
    description: "A React-based team project focused on collaboration tools, authentication, and task management.",
    tech: ["React", "Firebase", "Team Project"],
    link: "https://castro-app-57391.web.app",
    github: "#",
    category: "Full Stack",
  },
  {
    title: "Business Landing Page",
    year: "2024",
    image: "https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706513/rok9alcznrduadyrzg2q.png",
    description: "A responsive business landing page using Bootstrap for layout and components.",
    tech: ["HTML", "Bootstrap"],
    link: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "First Website",
    year: "2023",
    image: "https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/f1zgk6cw4qdhvetostnp.png",
    description: "A personal portfolio website built using HTML and CSS to showcase skills and projects.",
    tech: ["HTML", "CSS"],
    link: "#",
    github: "#",
    category: "Frontend",
  },
];

export const FAQS = [
  {
    q: "What technologies do you specialize in?",
    a: "I work primarily across the MERN stack (MongoDB, Express, React, Node.js) and have shipped projects with Next.js, Astro, NestJS, Tailwind, Redux Toolkit, Firebase, Cloudinary and Cloudflare Workers.",
  },
  {
    q: "Are you available for freelance or collaborations?",
    a: "Absolutely. I'm open to new opportunities, internships, freelance gigs and exciting product collaborations. Reach out via the contact form and I'll respond within 24 hours.",
  },
  {
    q: "Have you worked on team projects?",
    a: "Yes. I've worked alongside teammates on the Castro collaboration app and built features following git-based workflows, code reviews and pair programming.",
  },
  {
    q: "Can I access your resume?",
    a: "Yes — there's a Download Resume button at the top of the page. You can also email me at hariyanijenish@gmail.com for the latest PDF.",
  },
  {
    q: "Do you write blogs or contribute to open source?",
    a: "I'm currently documenting my learning journey and exploring open-source contributions around React UI primitives and developer tooling.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
