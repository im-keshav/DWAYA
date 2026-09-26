"use client";

import React from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-stone-400">
              {project.client} • {project.year}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#121316]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 text-stone-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs font-mono">
          <div>
            <span className="text-[10px] text-stone-400 block">CORE ARCHITECTURE</span>
            <span className="font-semibold text-stone-800">
              {project.stats.drawCalls}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-stone-400 block">PERFORMANCE BENCHMARK</span>
            <span className="font-semibold text-stone-800">
              {project.stats.particles}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-stone-400 block">SYSTEM LATENCY</span>
            <span className="font-semibold text-stone-800">
              {project.stats.latency}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-stone-400 block">STANDARDS & SPECS</span>
            <span className="font-semibold text-stone-800">
              {project.stats.shaders}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-900 bg-[#121316] text-[#FAF9F5] text-xs font-mono font-medium hover:bg-stone-800 transition-all group shadow-sm"
            >
              <span>
                {project.liveUrl.includes("github.com")
                  ? "View GitHub Repository"
                  : "Launch Live Website"}
              </span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-stone-200 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium uppercase tracking-wider transition-colors ml-auto"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
