"use client";

import React, { useState } from "react";
import ApproxBrandLogo from "@/components/ApproxBrandLogo";
import MagneticButton from "@/components/MagneticButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_CONFIG } from "@/data/portfolioData";
import {
  SlidersHorizontal,
  Volume2,
  VolumeX,
  ArrowDownRight,
  Activity,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  indiaTime: string;
  fps: number;
  showConfig: boolean;
  setShowConfig: (show: boolean) => void;
  audioActive: boolean;
  setAudioActive: (active: boolean) => void;
  onAudio?: (sound?: string | number, type?: OscillatorType) => void;
  showNotification: (msg: string) => void;
}

export default function Header({
  indiaTime,
  fps,
  showConfig,
  setShowConfig,
  audioActive,
  setAudioActive,
  onAudio,
  showNotification,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Portfolio", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/90 px-4 sm:px-8 lg:px-12 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Geometric Brandmark */}
        <a
          href="#"
          onClick={() => onAudio?.("click")}
          className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
        >
          <ApproxBrandLogo className="w-7 h-7 sm:w-8 sm:h-8" />
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-tight uppercase flex items-center gap-1.5 text-stone-900">
              DWAYA
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest hidden sm:inline-block">
              FRONTEND & BACKEND WEB ARCHITECTURE
            </span>
          </div>
        </a>

        {/* Desktop Primary Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full border border-stone-200/90 bg-white/80 shadow-xs font-mono text-xs">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => onAudio?.("pop")}
              className="px-3.5 py-1.5 rounded-full text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-all font-medium tracking-wide uppercase text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Matrix & Telemetry */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {/* Telemetry (Visible on large screens) */}
          <div className="hidden xl:flex items-center gap-3 px-3 py-1 rounded-full border border-stone-200 bg-white/70 text-[11px] font-mono text-stone-500 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{indiaTime || "00:00:00 IST"}</span>
            </div>
            <span className="text-stone-300">/</span>
            <div className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-stone-400" />
              <span>{fps} FPS</span>
            </div>
          </div>

          <MagneticButton
            onClick={() => {
              setShowConfig(!showConfig);
              onAudio?.("switchOn");
            }}
            className="p-2 rounded-full border border-stone-200 bg-white/80 hover:bg-stone-100 text-stone-700 shadow-xs"
            title="3D Canvas Topology"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              const nextState = !audioActive;
              setAudioActive(nextState);
              if (nextState) {
                onAudio?.("switchOn");
                showNotification("Acoustic cues enabled");
              } else {
                onAudio?.("switchOff");
                showNotification("Acoustic cues muted");
              }
            }}
            className="p-2 rounded-full border border-stone-200 bg-white/80 hover:bg-stone-100 text-stone-700 shadow-xs"
            title="Toggle tactile sound"
          >
            {audioActive ? (
              <Volume2 className="w-3.5 h-3.5 text-stone-900" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-stone-400" />
            )}
          </MagneticButton>

          <a
            href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
              WHATSAPP_CONFIG.defaultMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => onAudio?.(560, "sine")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#121316] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
            <ArrowDownRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-stone-200 bg-white/80 md:hidden text-stone-800 hover:bg-stone-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="mt-3 pt-3 border-t border-stone-200 flex flex-col gap-2 font-mono text-xs md:hidden animate-fade-in bg-white/95 rounded-2xl p-4 shadow-xl border border-stone-200/80">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false);
                onAudio?.(460, "sine");
              }}
              className="py-2 px-3 rounded-lg text-stone-700 hover:bg-stone-100 hover:text-stone-950 font-medium tracking-wider uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
              WHATSAPP_CONFIG.defaultMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 py-2 px-3 rounded-lg bg-emerald-600 text-white font-medium tracking-wider uppercase flex items-center gap-2 justify-center"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}