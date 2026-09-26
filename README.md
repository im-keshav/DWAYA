# DWAYA — Frontend & Backend Web Solutions

A high-velocity, award-worthy portfolio and web platform built for **DWAYA**, showcasing cutting-edge frontend engineering, scalable backend architecture, interactive Three.js 3D WebGL experiences, and high-fidelity micro-interactions.

---

## 🌟 Key Features

### 1. Studio Preloader & Brand Initialization
- **360° Continuous Logo Rotation**: Centered geometric DWAYA brandmark spinning fluidly with hardware-accelerated CSS animations.
- **Dual Concentric Orbital Rings**:
  - Clockwise technical segmented track with an orbiting satellite beacon.
  - Counter-rotating fine-dashed cardinal ring for a precision engineering aesthetic.
- **Percentage-Synced Typography Reveal**: Bold **DWAYA** text dynamically fills from left-to-right (`clip-path`) strictly synchronised with the loading percentage (0% ➔ 100%).
- **Synchronized Asset Loader**: Detects real `document.readyState` and window load events, with a smooth cinematic fade/scale exit sequence and scroll-locking during load.
- **Dynamic Telemetry Status**: Real-time boot diagnostics (`INITIALIZING CORE ASSETS...` ➔ `COMPILING 3D SHADERS...` ➔ `SYSTEM READY`).

### 2. Interactive Three.js 3D Backdrop
- Real-time WebGL rendering engine built with Three.js.
- Switchable mathematical geometries: *Torus Knot, Icosahedron, Dodecahedron, Octahedron, Ring, etc.*
- Configurable wireframe modes, dynamic orbit velocity controls, and live FPS telemetry.

### 3. Editorial Project Portfolio
- Filterable project grid with 3D perspective mouse tilt card physics.
- Detailed case study inspection modals with technical architectures, stack badges, and live demo access.

### 4. End-to-End Solutions & Capabilities
- Specialized breakdowns for Frontend Web Systems, Cloud Backends, and Interactive 3D/Creative Development.
- Live inquiry and project scope transmission form.
- Direct WhatsApp instant connectivity.

### 5. Micro-Interactions & Audio Feedback
- **Custom Cursor Follower**: Magnetic attraction to interactive elements, hover states, and drag indicators.
- **Web Audio Tactile Engine**: Low-latency synthesized sound feedback for buttons, toggles, and modal inspections.
- **Live IST Clock**: Precision India Standard Time ticker with real-time second updates.
- **Scroll Velocity Progress Bar**: Top-mounted responsive scroll indicator.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **3D Graphics** | [Three.js](https://threejs.org/) (WebGL) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Effects** | Canvas Confetti, GSAP |
| **Typography** | Geist Sans & Geist Mono (Vercel Fonts) |

---

## 📂 Project Architecture

```
DWAYA/
├── public/                 # Static assets, SVG icons, audio files, project imagery
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind v4 configuration, theme variables & spin keyframes
│   │   ├── layout.tsx      # Root HTML structure, SEO metadata, font definitions
│   │   └── page.tsx        # Master portfolio single-page application orchestrator
│   ├── components/
│   │   ├── Preloader.tsx        # High-tech loading screen (360° logo, orbits, typography)
│   │   ├── ApproxBrandLogo.tsx  # Vector SVG brandmark with hover mechanics
│   │   ├── CustomCursor.tsx     # Smooth lag-interpolated cursor follower
│   │   ├── ThreeBackdrop.tsx    # Three.js 3D WebGL background engine
│   │   ├── Header.tsx           # Global navigation dock, audio switch, IST time
│   │   ├── HeroSection.tsx      # Hero headline & call-to-actions
│   │   ├── MarqueeBanner.tsx    # Technical capabilities ticker
│   │   ├── ProjectsSection.tsx  # Selected work showcases
│   │   ├── TiltProjectCard.tsx  # 3D interactive tilt cards
│   │   ├── ProjectModal.tsx     # Deep-dive project inspector modal
│   │   ├── ServicesSection.tsx  # Full-stack service offerings
│   │   ├── CapabilitiesSection.tsx # Engineering competencies matrix
│   │   ├── ContactSection.tsx   # Project transmission form
│   │   ├── Footer.tsx           # Editorial footer with telemetry & links
│   │   ├── MagneticButton.tsx   # Physics-based magnetic attraction buttons
│   │   └── WhatsAppIcon.tsx     # WhatsApp brand SVG
│   ├── data/
│   │   └── portfolioData.ts     # Portfolio projects, services, and contact configs
│   ├── hooks/
│   │   └── useAudioFeedback.ts  # Web Audio API synthesizer & sound cache
│   └── types/
│       └── portfolio.ts         # TypeScript interfaces & type definitions
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. Navigate to the project directory:
   ```bash
   cd DWAYA
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## ⚙️ Scripts

- `npm run dev` — Launches the Next.js development server with Turbopack fast refresh.
- `npm run build` — Compiles the optimized production bundle.
- `npm run start` — Runs the compiled production server.
- `npm run lint` — Runs ESLint for static code analysis.

---

## 🎨 Customization

- **Contact & WhatsApp**: Modify `src/data/portfolioData.ts` to update the WhatsApp phone number, pre-filled inquiry text, and email endpoints.
- **Projects**: Add or edit case studies in `src/data/portfolioData.ts`.
- **Preloader Duration & Diagnostics**: Adjust the simulation thresholds and status text in `src/components/Preloader.tsx`.
- **Theme & Colors**: Edit CSS variables in `src/app/globals.css`.

---

## 📄 License

Private & Proprietary © 2026 **DWAYA**. All Rights Reserved.
