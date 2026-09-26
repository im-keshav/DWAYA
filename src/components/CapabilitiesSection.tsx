import React from "react";
import { CAPABILITIES } from "@/data/portfolioData";

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative z-10 py-28 px-6 lg:px-12 border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-2 border-b border-stone-200 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
            {"// CAPABILITIES 02"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
            Engineering Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl border border-stone-200/80 bg-white/70 space-y-3 shadow-sm hover:border-stone-400 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>/{cap.code}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-[#121316]">
                {cap.title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-normal">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
