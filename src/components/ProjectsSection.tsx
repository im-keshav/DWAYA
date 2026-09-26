"use client";

import React, { useState, useMemo } from "react";
import TiltProjectCard from "@/components/TiltProjectCard";
import { Project } from "@/types/portfolio";
import { PROJECTS } from "@/data/portfolioData";

interface ProjectsSectionProps {
  onSelectProject: (p: Project) => void;
  onAudio?: (freq?: number, type?: OscillatorType) => void;
}

export default function ProjectsSection({
  onSelectProject,
  onAudio,
}: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) =>
      p.category.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  }, [selectedFilter]);

  return (
    <section
      id="work"
      className="relative z-10 py-28 px-6 lg:px-12 border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
              {"// ARCHIVE 01"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
              Selected Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {["All", "Frontend", "Backend", "Full-Stack"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  onAudio?.(480, "sine");
                }}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  selectedFilter === filter
                    ? "border-[#121316] bg-[#121316] text-[#FAF9F5]"
                    : "border-stone-200 bg-white/70 text-stone-600 hover:border-stone-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive 3D Tilt Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((item) => (
            <TiltProjectCard
              key={item.id}
              project={item}
              onSelect={onSelectProject}
              onAudio={onAudio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
