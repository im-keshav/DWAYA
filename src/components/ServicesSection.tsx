"use client";

import React, { useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_CONFIG } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity,
} from "lucide-react";

interface ServicesSectionProps {
  onAudio?: (freq?: number, type?: OscillatorType) => void;
  showNotification: (msg: string) => void;
}

export default function ServicesSection({
  onAudio,
  showNotification,
}: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<
    "all" | "frontend" | "backend"
  >("all");

  const handleInquire = (serviceName: string) => {
    onAudio?.(560, "sine");
    showNotification(`Connecting for ${serviceName}...`);

    const text = encodeURIComponent(
      `Hello Dwaya! I am interested in building a website with your *${serviceName}* solutions. Could you share your technical process and availability?`
    );
    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/${WHATSAPP_CONFIG.number}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section
      id="services"
      className="relative z-10 py-28 px-6 lg:px-12 border-b border-stone-200 bg-white/40"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>// ENGINEERING SOLUTIONS & ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#121316]">
              Frontend & Backend{" "}
              <span className="font-serif italic font-light text-stone-500">
                Solutions.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-lg font-mono leading-relaxed">
              Complete full-stack website engineering. Designing high-velocity client-side interfaces and bulletproof backend server runtimes.
            </p>
          </div>

          {/* Interactive Category Selector */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {[
              { id: "all", label: "All Solutions" },
              { id: "frontend", label: "Frontend UI/UX" },
              { id: "backend", label: "Backend & APIs" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as typeof activeTab);
                  onAudio?.(480, "sine");
                }}
                className={`px-3.5 py-1.5 rounded-full border transition-all ${
                  activeTab === tab.id
                    ? "border-[#121316] bg-[#121316] text-[#FAF9F5] shadow-sm"
                    : "border-stone-200 bg-white/80 text-stone-600 hover:border-stone-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Pillar 1: Frontend Solutions Showcase */}
        {(activeTab === "all" || activeTab === "frontend") && (
          <div className="rounded-3xl border border-stone-200 bg-white/95 p-8 sm:p-12 shadow-xs hover:shadow-xl transition-all space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Description & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 font-mono text-xs text-stone-400">
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 font-semibold">
                    PILLAR // 01
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    CLIENT-SIDE ENGINEERING
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121316] flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-stone-800" />
                    <span>Frontend Website Development</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    We craft modern, visually magnetic, and hyper-responsive user interfaces. Combining React.js and Next.js component architectures with Tailwind CSS styling, strict TypeScript type-safety, Redux Toolkit state flow, and buttery GSAP / Framer Motion micro-interactions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-stone-700">
                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">React.js & Next.js Core</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">App Router, Server Components & Dynamic Routing</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">Tailwind CSS & Token Systems</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">Responsive design hierarchies & dark/light palettes</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">Redux Toolkit & TypeScript</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">Predictable state flow & strict schema validation</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">Framer Motion & GSAP</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">ScrollTrigger pinned scenes & tactile micro-physics</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "GSAP", "Framer Motion"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-stone-100 border border-stone-200 text-stone-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleInquire("Frontend Development")}
                    className="px-5 py-2.5 rounded-full bg-[#121316] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Inquire Frontend</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Frontend Inspector Telemetry */}
              <div className="lg:col-span-5 bg-stone-900 text-stone-200 rounded-2xl p-6 font-mono text-xs space-y-4 shadow-lg border border-stone-800">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-stone-400 ml-1">frontend.config.ts</span>
                  </div>
                  <span className="text-emerald-400 text-[10px]">60 FPS LOCKED</span>
                </div>

                <div className="space-y-2 text-[11px] leading-relaxed text-stone-300">
                  <div><span className="text-emerald-400">const</span> clientArchitecture = &#123;</div>
                  <div className="pl-4">framework: <span className="text-amber-300">&quot;React 19 / Next.js App Router&quot;</span>,</div>
                  <div className="pl-4">styling: <span className="text-amber-300">&quot;Tailwind CSS v4 + PostCSS&quot;</span>,</div>
                  <div className="pl-4">stateManagement: <span className="text-amber-300">&quot;Redux Toolkit + Thunk&quot;</span>,</div>
                  <div className="pl-4">animations: <span className="text-amber-300">&quot;GSAP + Framer Motion&quot;</span>,</div>
                  <div className="pl-4">typeIntegrity: <span className="text-emerald-400">true</span>,</div>
                  <div>&#125;;</div>
                </div>

                <div className="pt-2 border-t border-stone-800 grid grid-cols-2 gap-3 text-[10px]">
                  <div className="p-2.5 rounded-lg bg-stone-800/60 border border-stone-700/60">
                    <div className="text-stone-400">INPUT LATENCY</div>
                    <div className="text-sm font-semibold text-emerald-400 mt-0.5">&lt;18ms (INP)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-800/60 border border-stone-700/60">
                    <div className="text-stone-400">LIGHTHOUSE UI</div>
                    <div className="text-sm font-semibold text-emerald-400 mt-0.5">100 / 100</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Master Pillar 2: Backend Solutions Showcase */}
        {(activeTab === "all" || activeTab === "backend") && (
          <div className="rounded-3xl border border-stone-200 bg-white/95 p-8 sm:p-12 shadow-xs hover:shadow-xl transition-all space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Description & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 font-mono text-xs text-stone-400">
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 font-semibold">
                    PILLAR // 02
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    SERVER & API INFRASTRUCTURE
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121316] flex items-center gap-3">
                    <Server className="w-7 h-7 text-stone-800" />
                    <span>Backend & API Architecture</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    We construct resilient, scalable, and secure server-side engines. Leveraging Node.js with high-throughput Express.js and Fastify runtimes, architecting type-safe REST APIs, secure JWT token authentication, and optimized database pipelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-stone-700">
                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">Node.js, Express.js & Fastify</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">High-concurrency event-driven server engines</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">REST APIs & Serialization</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">Schema-validated endpoints with fast JSON serialization</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">JWT Security & Authorization</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">Cryptographic token hashing, refresh tokens & RBAC</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-stone-900">Database & Edge Caching</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">Optimized queries, connection pooling & redis caching</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {["Node.js", "Express.js", "Fastify", "REST APIs", "JWT", "PostgreSQL", "MongoDB", "Redis"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-stone-100 border border-stone-200 text-stone-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleInquire("Backend Architecture")}
                    className="px-5 py-2.5 rounded-full bg-[#121316] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Inquire Backend</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Simulated API Endpoint Inspector */}
              <div className="lg:col-span-5 bg-stone-900 text-stone-200 rounded-2xl p-6 font-mono text-xs space-y-4 shadow-lg border border-stone-800">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-stone-300">Fastify / Express API Gateway</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px]">
                    ONLINE • 99.9%
                  </span>
                </div>

                <div className="space-y-2.5 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-300 text-[9px] font-bold">POST</span>
                      <span className="text-stone-200">/api/v1/auth/jwt</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">200 OK • 9ms</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-900/80 text-emerald-300 text-[9px] font-bold">GET</span>
                      <span className="text-stone-200">/api/v1/projects</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">200 OK • 12ms</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-amber-900/80 text-amber-300 text-[9px] font-bold">PUT</span>
                      <span className="text-stone-200">/api/v1/telemetry</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">204 OK • 7ms</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400">
                  <span>JWT RSA-256 SIGNED</span>
                  <span>ZERO-LEAK GC POOL</span>
                </div>
              </div>

            </div>
          </div>
        )}



        {/* Interactive Architecture Flow: Client -> Gateway -> Server -> Database */}
        <div className="p-8 sm:p-10 rounded-3xl border border-stone-200 bg-stone-50/80 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              // ARCHITECTURAL PIPELINE // HOW WE BUILD
            </span>
            <span className="text-xs font-mono text-stone-400">END-TO-END FLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-2">
              <span className="text-[10px] text-stone-400 block">STEP 01</span>
              <div className="font-semibold text-stone-900">UI & Client State</div>
              <p className="text-[11px] text-stone-500 font-normal">React.js, Next.js App Router, Tailwind CSS, Redux Toolkit.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-2">
              <span className="text-[10px] text-stone-400 block">STEP 02</span>
              <div className="font-semibold text-stone-900">REST API Gateway</div>
              <p className="text-[11px] text-stone-500 font-normal">Fastify & Express routes, JSON schemas, rate limiting.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-2">
              <span className="text-[10px] text-stone-400 block">STEP 03</span>
              <div className="font-semibold text-stone-900">Auth & Security</div>
              <p className="text-[11px] text-stone-500 font-normal">JWT token authorization, cryptographic hashing, middleware.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-2">
              <span className="text-[10px] text-stone-400 block">STEP 04</span>
              <div className="font-semibold text-stone-900">3D & Micro-Motion</div>
              <p className="text-[11px] text-stone-500 font-normal">Three.js WebGL graphics, GSAP & Framer Motion kinetics.</p>
            </div>
          </div>
        </div>

        {/* Global Commission Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl border border-stone-200 bg-[#121316] text-[#FAF9F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <span>START YOUR FULL-STACK PROJECT</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-light tracking-tight">
              Ready to engineer your frontend or backend website?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-mono">
              Get direct technical advisory on your architecture, timelines, and stack recommendations directly on WhatsApp.
            </p>
          </div>

          <MagneticButton
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onAudio={onAudio}
            className="px-8 py-4 rounded-full bg-[#FAF9F5] text-[#121316] text-xs font-mono uppercase tracking-wider hover:bg-stone-200 transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
