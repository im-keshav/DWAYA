"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { Project } from "@/types/portfolio";

interface TiltProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
  onAudio?: (freq?: number, type?: OscillatorType) => void;
}

export default function TiltProjectCard({
  project,
  onSelect,
  onAudio,
}: TiltProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState(
    "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.018, 1.018, 1.018)`
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        onAudio?.(560, "sine");
        onSelect(project);
      }}
      data-cursor="view"
      style={{
        transform,
        transition:
          "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
      }}
      className="group relative rounded-2xl border border-stone-200/90 bg-white/90 p-5 overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:border-stone-400 transition-all select-none"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 65%)`,
          opacity: glare.opacity,
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 mb-5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />

        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-stone-200/90 text-[10px] font-mono tracking-wider uppercase text-stone-800 shadow-sm">
            {project.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                onAudio?.(700, "sine");
              }}
              title="Open Live Website"
              className="w-8 h-8 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-stone-800 hover:bg-[#121316] hover:text-white transition-all shadow-sm"
            >
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-stone-800 group-hover:bg-[#121316] group-hover:text-white transition-all shadow-sm">
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          )}
        </div>

        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2.5 py-1 rounded-full bg-stone-900/90 text-stone-100 text-[10px] font-mono flex items-center gap-1.5 shadow-md">
            <Eye className="w-3 h-3" /> Inspect Project
          </span>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500">
          <span className="font-semibold text-stone-700">{project.client}</span>
          <span>{project.year}</span>
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight text-[#121316] group-hover:text-stone-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.deliverables.map((d) => (
            <span
              key={d}
              className="px-2.5 py-0.5 rounded border border-stone-200 bg-stone-50 text-[10px] font-mono text-stone-600"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
