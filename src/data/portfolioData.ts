import { Project, Capability, ServiceItem } from "@/types/portfolio";

export const WHATSAPP_CONFIG = {
  number: "919876543210", // International format without +
  displayNumber: "+91 98765 43210",
  defaultMessage:
    "Hello Dwaya! I would like to discuss a frontend & backend website project.",
};

export const PROJECTS: Project[] = [
  {
    id: "pulse-saas",
    title: "Pulse SaaS Analytics Platform",
    subtitle: "Real-Time Enterprise Frontend & State Flow",
    category: "Frontend Architecture",
    year: "2026",
    client: "Pulse Cloud Systems",
    deliverables: [
      "React.js & Next.js 16",
      "Redux Toolkit State",
      "Tailwind CSS Tokens",
      "GSAP Micro-Interactions",
    ],
    impact: "Sub-10ms UI reactivity • 99+ Core Web Vitals • Zero-CLS",
    description:
      "A high-performance modern SaaS dashboard with complex interactive data grids, optimistic state management, fluid micro-interactions, and real-time streaming analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    stats: {
      drawCalls: "React 19 Core",
      particles: "99+ Score",
      latency: "6ms",
      shaders: "Strict Types",
    },
  },
  {
    id: "nexus-gateway",
    title: "Nexus API & Microservices Gateway",
    subtitle: "High-Throughput Node.js & Fastify Architecture",
    category: "Backend & API Systems",
    year: "2026",
    client: "Nexus Financial Technologies",
    deliverables: [
      "Node.js & Fastify Core",
      "Express.js Fallback",
      "REST APIs & JSON Schema",
      "JWT Security & Auth",
    ],
    impact: "12,000+ Req/sec • Sub-8ms latency • 99.99% Service Uptime",
    description:
      "Resilient server architecture delivering high-throughput RESTful endpoints, rate-limited gateway middleware, cryptographic JWT token verification, and automated PostgreSQL integration.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    stats: {
      drawCalls: "Fastify Core",
      particles: "12k req/s",
      latency: "4ms",
      shaders: "JWT RSA-256",
    },
  },
  {
    id: "vertex-commerce",
    title: "Vertex 3D Digital Commerce",
    subtitle: "Interactive WebGL & Three.js Product Experience",
    category: "Interactive 3D WebGL",
    year: "2025",
    client: "Vertex Spatial Systems",
    deliverables: [
      "Three.js & WebGL 2.0",
      "Custom GLSL Shaders",
      "Tailwind CSS",
      "Next.js App Router",
    ],
    impact: "Locked 60 FPS • +180% engagement • Zero layout shifts",
    description:
      "Interactive 3D product visualizer enabling clients to inspect high-fidelity photorealistic materials, test real-time lighting variants, and experience 360-degree spatial interaction in-browser.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    stats: {
      drawCalls: "18 calls",
      particles: "Locked 60 FPS",
      latency: "8ms",
      shaders: "Custom GLSL",
    },
  },
  {
    id: "strata-platform",
    title: "Strata Turnkey Web Platform",
    subtitle: "Complete Frontend & Backend Integration",
    category: "Full-Stack Web Engineering",
    year: "2025",
    client: "Strata Global Networks",
    deliverables: [
      "React.js & Next.js",
      "Node.js Backend",
      "RESTful APIs",
      "Tailwind & TypeScript",
    ],
    impact: "End-to-End Delivery • 99 Lighthouse • Automated Edge CI/CD",
    description:
      "A comprehensive turnkey web portal uniting responsive client-side interface workflows with high-capacity backend server routes, role-based security, and cloud edge deployment.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    stats: {
      drawCalls: "Full-Stack",
      particles: "Zero Layout Shift",
      latency: "7ms",
      shaders: "Edge CI/CD",
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
