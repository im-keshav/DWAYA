"use client";

import React, { useEffect, useRef, useState } from "react";
import { CursorMode } from "@/types/portfolio";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const handlePointerMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor], button, a, input, textarea, canvas"
      );

      if (target) {
        const customMode = target.getAttribute("data-cursor") as CursorMode;
        if (customMode) {
          setCursorMode(customMode);
        } else if (target.tagName === "CANVAS") {
          setCursorMode("drag");
        } else {
          setCursorMode("link");
        }
      } else {
        setCursorMode("default");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const render = () => {
      // Rapid kinematic tracking with high responsiveness (tip pinned at cursor)
      currentX += (mouseX - currentX) * 0.42;
      currentY += (mouseY - currentY) * 0.42;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    render();

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hidden lg:block`}
    >
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className={`relative transition-transform duration-150 ease-out origin-top-left ${
            isClicking
              ? "scale-90"
              : cursorMode === "link" || cursorMode === "magnetic"
              ? "scale-115 -rotate-6"
              : cursorMode === "view"
              ? "scale-120"
              : "scale-100"
          }`}
        >
          {/* Big Architectural Custom Arrow */}
          <svg
            width="34"
            height="38"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_4px_10px_rgba(18,19,22,0.28)]"
          >
            {/* Outer Architectural Arrow Body */}
            <path
              d="M2.2 2.2L11.5 27.5L16.2 16.5L25.2 12.8L2.2 2.2Z"
              fill="#121316"
              stroke="#FAF9F5"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Subtle Brand Accent Line */}
            <path
              d="M3.8 4.6L14.8 15.6"
              stroke="#FAF9F5"
              strokeWidth="0.85"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />
          </svg>

          {/* Contextual Interactive Badges */}
          {cursorMode === "view" && (
            <div className="absolute left-7 top-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121316] text-[#FAF9F5] border border-stone-700 shadow-xl font-mono text-[9px] uppercase tracking-wider font-semibold whitespace-nowrap animate-fade-in">
              <span>EXPLORE</span>
              <span className="text-emerald-400">↗</span>
            </div>
          )}

          {cursorMode === "drag" && (
            <div className="absolute left-7 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#121316]/90 text-[#FAF9F5] border border-stone-600 shadow-lg font-mono text-[8px] uppercase tracking-widest font-semibold whitespace-nowrap animate-fade-in">
              <span>3D ORBIT</span>
            </div>
          )}

          {(cursorMode === "link" || cursorMode === "magnetic") && (
            <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-[#FAF9F5]" />
          )}
        </div>
      </div>
    </div>
  );
}
