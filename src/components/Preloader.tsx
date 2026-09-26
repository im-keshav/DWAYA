"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE ASSETS...");

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    let pageReady = false;

    // Check if page already loaded
    if (document.readyState === "complete") {
      pageReady = true;
    } else {
      const handleLoad = () => {
        pageReady = true;
      };
      window.addEventListener("load", handleLoad);
    }

    // Smooth progress simulation that syncs with real page load
    const interval = setInterval(() => {
      // If page is not ready yet, slow down near 85%
      const ceiling = pageReady ? 100 : 88;
      
      if (currentProgress < ceiling) {
        // Increment smoothly
        const step = pageReady ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 4) + 1;
        currentProgress = Math.min(ceiling, currentProgress + step);
        setProgress(currentProgress);

        if (currentProgress < 30) {
          setStatusText("INITIALIZING CORE ASSETS...");
        } else if (currentProgress < 65) {
          setStatusText("COMPILING 3D SHADERS & GEOMETRY...");
        } else if (currentProgress < 95) {
          setStatusText("CALIBRATING TELEMETRY & AUDIO...");
        } else {
          setStatusText("SYSTEM READY");
        }
      }

      // If page is ready and reached 100%, trigger exit sequence
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          // Unlock scroll
          document.body.style.overflow = "";
          setTimeout(() => {
            setLoading(false);
          }, 700);
        }, 300);
      }
    }, 45);

    // Safety fallback: dismiss after max 3.5s in case of hanging resources
    const safetyTimeout = setTimeout(() => {
      pageReady = true;
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-label="Site Loading"
      className={`fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-[#FAF9F5] select-none transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Subtle background technical grid/pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#121316 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Unified Center Stage Hero Cluster */}
      <div className="flex flex-col items-center justify-center z-10 w-full max-w-4xl px-4">
        {/* Refined DWAYA Typography (Revealed by Percentage) */}
        <div className="w-full overflow-hidden select-none flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/* Invisible spacer to maintain layout height without any visible shadow */}
            <span className="text-[10vw] sm:text-[9vw] md:text-[7.5vw] font-black uppercase tracking-tight leading-none opacity-0 select-none pointer-events-none whitespace-nowrap">
              DWAYA
            </span>
            {/* Solid Dark text revealed only as percentage progresses */}
            <span
              className="absolute inset-0 flex items-center justify-center text-[10vw] sm:text-[9vw] md:text-[7.5vw] font-black uppercase tracking-tight leading-none text-stone-900 whitespace-nowrap transition-all duration-150 ease-out select-none"
              style={{
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
              }}
            >
              DWAYA
            </span>
          </div>

          {/* Frontend & Backend Web Solutions Subtitle */}
          <div
            className="mt-2.5 sm:mt-3 flex items-center justify-center gap-2 sm:gap-2.5 transition-all duration-500 ease-out"
            style={{
              opacity: progress >= 20 ? 1 : 0,
              transform: `translateY(${progress >= 20 ? 0 : 5}px)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-stone-600 font-medium">
              Frontend &amp; Backend Web Solutions
            </span>
          </div>
        </div>

        {/* Main Spinner & 360 Logo Centerpiece (Enlarged & Well-proportioned) */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 flex items-center justify-center my-6 sm:my-8">
          {/* Outer Circular Ring 1: Technical Segments rotating Clockwise */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-clockwise-slow"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Segmented Outer Track */}
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#121316"
              strokeWidth="1.5"
              strokeDasharray="18 12 40 12 70 16"
              strokeOpacity="0.85"
              strokeLinecap="round"
            />
            {/* Accent Orbiting Dot */}
            <circle cx="100" cy="10" r="3.5" fill="#121316" />
            <circle cx="100" cy="10" r="1.5" fill="#FAF9F5" />
          </svg>

          {/* Outer Circular Ring 2: Ultra-fine Counter-Rotating Dash Ring */}
          <svg
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-counter-slow"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="88"
              stroke="#121316"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity="0.25"
            />
            {/* 4 Cardinal Tick Marks */}
            <line x1="100" y1="8" x2="100" y2="16" stroke="#121316" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="100" y1="184" x2="100" y2="192" stroke="#121316" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="8" y1="100" x2="16" y2="100" stroke="#121316" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="184" y1="100" x2="192" y2="100" stroke="#121316" strokeWidth="1.5" strokeOpacity="0.6" />
          </svg>

          {/* Ambient Ring Glow */}
          <div className="absolute inset-6 rounded-full bg-stone-900/[0.02] border border-stone-300/40 pointer-events-none" />

          {/* Centered Logo with Continuous 360-Degree Rotation */}
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center animate-spin-logo">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-sm"
            >
              {/* Hexagonal Outer Badge */}
              <polygon
                points="24,2 45,14 45,34 24,46 3,34 3,14"
                stroke="#121316"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Inner Stylized Dwaya Glyph */}
              <path
                d="M24 8L37 34H29.5L24 22L18.5 34H11L24 8Z"
                fill="#121316"
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <polygon points="24,15 28.5,25 19.5,25" fill="#FAF9F5" />
              <circle cx="24" cy="30" r="1.75" fill="#121316" />
            </svg>
          </div>
        </div>

        {/* Progress Telemetry & Status (Directly below the spinner) */}
        <div className="flex flex-col items-center gap-1.5">
          {/* Digital Percentage Display */}
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {progress}
            </span>
            <span className="font-mono text-xs text-stone-500 font-semibold">%</span>
          </div>

          {/* Technical Status Message */}
          <div className="text-[11px] font-mono text-stone-500 tracking-wider h-4">
            {statusText}
          </div>
        </div>
      </div>

      {/* Bottom Coordinates & Watermark */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-between px-6 sm:px-10 text-[10px] font-mono text-stone-400 tracking-wider z-10">
        <span>EST. 2026 // DWAYA</span>
        <span>LAT 28.6139° N, LONG 77.2090° E</span>
      </div>
    </div>
  );
}
