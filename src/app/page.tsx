"use client";

import React, { useState, useEffect, useCallback } from "react";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ThreeBackdrop from "@/components/ThreeBackdrop";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useAudioFeedback } from "@/hooks/useAudioFeedback";
import { Project, TopologyType } from "@/types/portfolio";
import { Check } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Telemetry States
  // India Standard Time (IST) Telemetry State
  const [indiaTime, setIndiaTime] = useState("");
  const [fps, setFps] = useState(60);

  // 3D Canvas States
  const [topology, setTopology] = useState<TopologyType>("torusknot");
  const [wireframeOnly, setWireframeOnly] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState(0.85);

  // Audio synthesizer hook
  const { audioActive, setAudioActive, playTactileFeedback } = useAudioFeedback();

  const showNotification = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2800);
  }, []);

  // Velocity scroll progress bar calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // India Standard Time (IST) clock ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeStr = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setIndiaTime(timeStr + " IST");
      } catch {
        setIndiaTime(now.toTimeString().slice(0, 8) + " IST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#121316] selection:bg-[#121316] selection:text-[#FAF9F5] font-sans antialiased relative overflow-x-hidden">
      {/* 360-Degree Rotating Brand Logo & Circular Preloader */}
      <Preloader />

      {/* Dynamic Cursor Follower */}
      <CustomCursor />

      {/* Top Velocity Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#121316] z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Three.js Canvas Backdrop & Topology Parameter Dock */}
      <ThreeBackdrop
        topology={topology}
        setTopology={setTopology}
        wireframeOnly={wireframeOnly}
        setWireframeOnly={setWireframeOnly}
        orbitSpeed={orbitSpeed}
        setOrbitSpeed={setOrbitSpeed}
        showConfig={showConfig}
        setShowConfig={setShowConfig}
        setFps={setFps}
        onAudio={playTactileFeedback}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 border border-stone-200/90 text-xs font-mono shadow-xl backdrop-blur-md animate-fade-in text-stone-800">
          <Check className="w-3.5 h-3.5 text-stone-900" />
          <span>{toast}</span>
        </div>
      )}

      {/* Global Navigation Header */}
      <Header
        indiaTime={indiaTime}
        fps={fps}
        showConfig={showConfig}
        setShowConfig={setShowConfig}
        audioActive={audioActive}
        setAudioActive={setAudioActive}
        onAudio={playTactileFeedback}
        showNotification={showNotification}
      />

      {/* Hero Section */}
      <HeroSection onAudio={playTactileFeedback} />

      {/* Marquee Telemetry Banner */}
      <MarqueeBanner />

      {/* Selected Works Portfolio */}
      <ProjectsSection
        onSelectProject={setSelectedProject}
        onAudio={playTactileFeedback}
      />

      {/* Services & Solutions Showcase */}
      <ServicesSection
        onAudio={playTactileFeedback}
        showNotification={showNotification}
      />

      {/* Engineering Capabilities */}
      <CapabilitiesSection />

      {/* Transmission Contact Form */}
      <ContactSection
        onAudio={playTactileFeedback}
        showNotification={showNotification}
      />

      {/* Editorial High-End Footer */}
      <Footer
        onAudio={playTactileFeedback}
        showNotification={showNotification}
      />

      {/* Case Study Modal Inspector */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}