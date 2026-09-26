"use client";

import React, { useState } from "react";
import ApproxBrandLogo from "@/components/ApproxBrandLogo";
import GlobalClocks from "@/components/GlobalClocks";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_CONFIG } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, ShieldCheck } from "lucide-react";

interface FooterProps {
  onAudio?: (freq?: number, type?: OscillatorType) => void;
  showNotification: (msg: string) => void;
}

export default function Footer({ onAudio, showNotification }: FooterProps) {
  const [phoneInput, setPhoneInput] = useState("");

  const handleWhatsAppDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    showNotification("Opening WhatsApp chat...");
    onAudio?.(640, "triangle");

    const text = encodeURIComponent(
      `Hello Dwaya! My WhatsApp number is ${phoneInput}. I'd like to subscribe to studio dispatches & project discussions.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_CONFIG.number}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setPhoneInput("");
  };

  return (
    <footer className="relative z-10 pt-24 pb-12 px-6 lg:px-12 border-t border-stone-300/80 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-6 border-b border-stone-200 pb-16">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              {"// COMMISSION A WORK • 2026 CYCLE"}
            </span>
            <span className="px-3 py-1 rounded-full border border-emerald-300 bg-emerald-50/70 text-emerald-800 text-[10px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              ACCEPTING Q3/Q4 PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#121316] leading-[1.05]">
            Let’s engineer the <br />
            <span className="font-serif italic font-normal text-stone-500">
              extraordinary
            </span>{" "}
            digital space.
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
                WHATSAPP_CONFIG.defaultMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => onAudio?.(600, "sine")}
              className="group inline-flex items-center gap-3 text-lg sm:text-2xl font-mono text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <span className="underline underline-offset-8">
                WhatsApp: {WHATSAPP_CONFIG.displayNumber}
              </span>
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Synchronized World Clocks Bar */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
            Synchronized Coordinates & Global Studios
          </div>
          <GlobalClocks />
        </div>

        {/* Multi-Column Editorial Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <ApproxBrandLogo className="w-7 h-7" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-stone-900">
                DWAYA
              </span>
            </div>
            <p className="text-xs font-mono text-stone-500 leading-relaxed max-w-sm">
              Independent engineering studio specializing in high-performance
              Frontend and Backend web development, resilient Node.js APIs, and
              interactive 3D WebGL experiences.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-stone-400 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
              <span>DIRECT WHATSAPP PROTOCOL ENABLED</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-widest text-stone-400">
              INDEX
            </div>
            <ul className="space-y-2 text-stone-600">
              <li>
                <a href="#work" className="hover:text-stone-950 transition-colors">
                  /01 Selected Works
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-stone-950 transition-colors"
                >
                  /02 Services & Solutions
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="hover:text-stone-950 transition-colors"
                >
                  /03 Core Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-stone-950 transition-colors"
                >
                  /04 WhatsApp Dispatch
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-widest text-stone-400">
              NETWORK
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_CONFIG.number}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-700 text-emerald-800 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black text-[#24292e] font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#24292e]" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0c85d0] text-[#1DA1F2] font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>X / Twitter</span>
                  <ExternalLink className="w-3 h-3 text-[#1DA1F2]" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
              STUDIO DISPATCH // WHATSAPP
            </div>
            <p className="text-xs text-stone-500 font-mono">
              Direct consultation, updates on frontend architectures, backend APIs, and web engineering solutions via WhatsApp.
            </p>
            <form
              onSubmit={handleWhatsAppDispatch}
              className="flex items-center gap-2 pt-1"
            >
              <input
                type="tel"
                required
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-xs font-mono text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-900"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-mono uppercase tracking-wider hover:bg-emerald-700 whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Join</span>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright, Telemetry & Return to Apex Trigger */}
        <div className="pt-10 border-t border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono text-stone-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-800 font-semibold">
              © 2026 DWAYA
            </span>
            <span>•</span>
            <span>FRONTEND & BACKEND WEB ARCHITECTS</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-600 text-[10px]">
              BUILD v4.8.2-PROD
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>WHATSAPP PIPELINE: ACTIVE</span>
            </div>
            <span>/</span>
            <button
              onClick={() => {
                onAudio?.(700, "sine");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-1.5 text-stone-800 hover:text-stone-500 uppercase tracking-wider font-semibold transition-colors"
            >
              <span>ASCEND TO APEX</span>
              <span className="w-6 h-6 rounded-full border border-stone-200 bg-white flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}