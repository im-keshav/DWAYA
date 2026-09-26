"use client";

import React from "react";
import MagneticButton from "@/components/MagneticButton";
import { ArrowDownRight, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onAudio?: (freq?: number, type?: OscillatorType) => void;
}

export default function HeroSection({ onAudio }: HeroSectionProps) {
  return (
    <section className="relative z-10 min-h-screen pt-40 pb-20 px-6 lg:px-12 flex flex-col justify-center max-w-7xl mx-auto">
      <div className="space-y-8 max-w-4xl">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-stone-200 bg-white/70 text-xs font-mono text-stone-700 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-900 animate-ping" />
          <span className="tracking-wide">
            AVAILABLE FOR SELECTIVE COMMISSIONS
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#121316] leading-[1.02]">
          High-velocity <br />
          <span className="font-serif italic text-stone-500 font-light">
            frontend & backend
          </span>{" "}
          web systems.
        </h1>

        <p className="text-base sm:text-lg text-stone-600 max-w-2xl font-normal leading-relaxed">
          Dwaya specializes in end-to-end frontend and backend web solutions,
          crafting high-performance client interfaces, scalable server APIs, and
          immersive 3D WebGL experiences.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <MagneticButton
            onClick={() => {
              const el = document.getElementById("work");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onAudio={onAudio}
            className="px-6 py-3.5 rounded-full bg-[#121316] text-[#FAF9F5] text-xs font-medium uppercase tracking-wider flex items-center gap-2 hover:bg-stone-800 shadow-md"
          >
            <span>Selected Portfolio</span>
            <ArrowDownRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onAudio={onAudio}
            className="px-6 py-3.5 rounded-full border border-stone-200 bg-white/80 hover:bg-stone-100 text-stone-800 text-xs font-medium uppercase tracking-wider flex items-center gap-2 shadow-sm"
          >
            <span>Services & Solutions</span>
            <ChevronRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Studio Benchmarks */}
        <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-stone-200/90 text-stone-800">
          {[
            { label: "FRAME RATE DISCIPLINE", value: "Locked 60 FPS" },
            { label: "LIGHTHOUSE BENCHMARK", value: "99 Core Web Vitals" },
            { label: "ENGAGEMENTS DELIVERED", value: "35+ Worldwide" },
            { label: "ENGINEERING DISCIPLINE", value: "Strict Type & Zero-CLS" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <span className="text-[10px] font-mono text-stone-400 block tracking-widest uppercase">
                {stat.label}
              </span>
              <span className="text-sm font-semibold tracking-tight block">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
