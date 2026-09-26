import { Project, Capability, ServiceItem } from "@/types/portfolio";

export const WHATSAPP_CONFIG = {
  number: "919466477966", // International format without +
  displayNumber: "+91 94664 77966",
  defaultMessage:
    "Hello Dwaya! I would like to discuss a frontend & backend website project.",
};

export const PROJECTS: Project[] = [
  {
    id: "die-deutsch-schule",
    title: "Die Deutsch Schule",
    subtitle: "Premier German Language Institute & Career Portal",
    category: "Frontend Architecture",
    year: "2026",
    client: "Die Deutsch Schule",
    liveUrl: "https://www.diedeutschule.com/",
    deliverables: [
      "React.js & Vite Core",
      "Tailwind CSS Tokens",
      "Interactive Course Curriculum",
      "SEO Structured Schema.org",
    ],
    impact: "Sub-15ms UI reactivity • 99+ Core Web Vitals • Zero-CLS",
    description:
      "A modern, high-conversion web platform engineered for North India's premier German language institute. Features an interactive CEFR (A1–B2) curriculum explorer, direct Goethe-Zertifikat coaching modules, automated lead generation pipelines, responsive layout systems, and rich SEO structured data.",
    image: "/projects/die-deutsch-schule.png",
    stats: {
      drawCalls: "React + Vite",
      particles: "99+ Score",
      latency: "12ms",
      shaders: "Tailwind CSS",
    },
  },
  {
    id: "backend-ledger",
    title: "Backend Ledger Banking Core",
    subtitle: "Financial Double-Entry Ledger & Secure Auth Engine",
    category: "Backend & API Systems",
    year: "2026",
    client: "Financial Ledger Core",
    liveUrl: "https://github.com/im-keshav/backend/tree/main/project-2/BACKEND-LEDGER",
    deliverables: [
      "Express 5 & Node.js Engine",
      "Double-Entry Bookkeeping Ledger",
      "MongoDB Mongoose Schema",
      "JWT & Cookie Auth Security",
      "Nodemailer Alerts & Blacklisting",
    ],
    impact: "ACID Transaction Integrity • Sub-10ms Latency • Secure Token Blacklisting",
    description:
      "A mission-critical financial accounting backend engineered with Express 5, Node.js, and MongoDB. Implements immutable double-entry bookkeeping ledger models, multi-account debit/credit transactions, bcryptjs password encryption, JWT authentication with token blacklist revocation, and automated email dispatch.",
    image: "/projects/backend-ledger.jpg",
    stats: {
      drawCalls: "Express 5 Core",
      particles: "Double-Entry",
      latency: "<10ms API",
      shaders: "JWT + Blacklist",
    },
  },
  {
    id: "edulearn-erp",
    title: "EduLearn ERP Education System",
    subtitle: "Enterprise Institutional Management & Student Portal",
    category: "Full-Stack Web Engineering",
    year: "2026",
    client: "EduLearn Enterprise",
    liveUrl: "https://github.com/im-keshav/EduLearn-ERP",
    deliverables: [
      "Node.js & Fastify Backend",
      "React 18 & Vite Frontend",
      "MongoDB & Mongoose ODM",
      "Role-Based Admin & Student Portals",
      "ExcelJS & PDFKit Export Engine",
    ],
    impact: "Dual-Role RBAC • Fastify Sub-5ms API • Automated Reports",
    description:
      "A complete full-stack Education ERP system built to manage student enrollments, course catalogs, real-time attendance, and automated notifications. Features dual role-based access control (Admin & Student), controlled onboarding approval workflows, Fastify JWT authentication, and automated Excel/PDF report generation.",
    image: "/projects/edulearn-erp.jpg",
    stats: {
      drawCalls: "Fastify + React 18",
      particles: "RBAC Dual Role",
      latency: "<5ms Fastify",
      shaders: "Excel & PDF Engine",
    },
  },
  {
    id: "tiny-cats",
    title: "TinyCats Full-Stack AI & MCP Platform",
    subtitle: "AI Matchmaker, MongoDB Backend & Model Context Protocol",
    category: "Full-Stack Web Engineering",
    year: "2026",
    client: "TinyCats Open Source",
    liveUrl: "https://github.com/im-keshav/NextJs/tree/main/tiny-cats",
    deliverables: [
      "Express 5 & Node.js API",
      "MongoDB & Mongoose Schema",
      "Google Gemini 2.0 AI SDK",
      "Model Context Protocol (MCP)",
      "React 19 & Vite PWA",
    ],
    impact: "Full-Stack System • Autonomous MCP Agent Tools • PWA Offline Ready",
    description:
      "An end-to-end full-stack web ecosystem uniting an Express.js 5 and MongoDB Mongoose backend with an interactive React 19 frontend and custom Model Context Protocol (MCP) server. Features intelligent cat breed matchmaking powered by Google Gemini AI, conversational CatGPT assistance, automated database seeding, and progressive web app capabilities.",
    image: "/projects/tiny-cats.jpg",
    stats: {
      drawCalls: "Express 5 + React 19",
      particles: "Gemini 2.0 AI",
      latency: "<20ms API",
      shaders: "MCP Protocol",
    },
  },
];

export const CAPABILITIES: Capability[] = [
  {
    code: "01",
    title: "Frontend Engineering",
    desc: "Modern React.js, Next.js, and TypeScript web development, styled with Tailwind CSS, Redux state flow, and Framer Motion micro-interactions.",
  },
  {
    code: "02",
    title: "Backend & API Systems",
    desc: "High-throughput Node.js, Express.js, and Fastify server runtimes, secure JWT authorization, REST APIs, and resilient database integration.",
  },
  {
    code: "03",
    title: "Spatial & 3D WebGL",
    desc: "Bespoke GLSL vertex and fragment shaders, Three.js 3D configurators, GPU particle fields, and locked 60 FPS animation budgets.",
  },
  {
    code: "04",
    title: "Full-Stack Deployment",
    desc: "Turnkey full-stack web solutions with sub-50ms interaction latency, zero cumulative layout shifts, and production cloud infrastructure.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "frontend_solutions",
    code: "01",
    title: "Frontend Development Solutions",
    subtitle: "Interactive UI/UX & Responsive Web Applications",
    description:
      "Crafting high-impact, modern client-side interfaces using React.js, Next.js, and TypeScript. Styled with Tailwind CSS, orchestrated with Redux Toolkit state flow, and polished with Framer Motion and GSAP transitions.",
    features: [
      "Modern React.js & Next.js App Router Architecture",
      "Strict TypeScript Typing & Redux Toolkit State Management",
      "Tailwind CSS Responsive Design & Custom Token Systems",
      "Framer Motion & GSAP Smooth Micro-Interactions",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    badge: "Modern Frontend",
  },
  {
    id: "backend_solutions",
    code: "02",
    title: "Backend Development Solutions",
    subtitle: "High-Throughput Server Runtimes & REST APIs",
    description:
      "Engineering resilient server-side architectures, microservices, and high-performance endpoints with Node.js, Express.js, and Fastify. Implementing secure JWT authentication and optimized data pipelines.",
    features: [
      "Node.js, Express.js & Fastify High-Performance Servers",
      "Robust REST API Design, Rate Limiting & Validation",
      "Secure JWT (JSON Web Tokens) Authentication & Authorization",
      "Database Modeling, Server Caching & Secure Middleware",
    ],
    stack: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT"],
    badge: "Scalable Backend",
  },
  {
    id: "webgl_3d",
    code: "03",
    title: "3D WebGL & Interactive Graphics",
    subtitle: "Spatial Visualizers & Procedural Shaders",
    description:
      "Developing immersive real-time WebGL graphics, custom GLSL vertex/fragment shaders, camera physics, and Three.js 3D models running locked at 60 FPS on both mobile and desktop browsers.",
    features: [
      "Three.js & WebGL 2.0 Real-Time 3D Rendering",
      "Procedural GLSL Vertex & Fragment Shaders",
      "Interactive 3D Product & Spatial Configurators",
      "GPU Particles, Instanced Meshes & Canvas Animations",
    ],
    stack: ["Three.js", "WebGL", "GLSL", "Canvas API"],
    badge: "60 FPS WebGL",
  },
  {
    id: "fullstack_platform",
    code: "04",
    title: "Full-Stack Web Platform Delivery",
    subtitle: "Turnkey End-to-End Web Engineering",
    description:
      "Delivering turnkey web platforms connecting intuitive frontend interfaces with robust backend systems. Audited for sub-50ms latency, zero layout shifts, and seamless production cloud deployment.",
    features: [
      "End-to-End Frontend-to-Backend System Integration",
      "Core Web Vitals Tuning & Sub-50ms Interaction Latency",
      "Cross-Platform Responsive Testing & Strict Security",
      "CI/CD Automated Deployment, SSL & Cloud Infrastructure",
    ],
    stack: ["Full-Stack", "JavaScript", "TypeScript", "DevOps"],
    badge: "Turnkey Platform",
  },
];
