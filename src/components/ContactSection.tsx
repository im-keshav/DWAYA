"use client";

import React, { useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_CONFIG } from "@/data/portfolioData";
import { CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";

interface ContactSectionProps {
  onAudio?: (freq?: number, type?: OscillatorType) => void;
  showNotification: (msg: string) => void;
}

export default function ContactSection({
  onAudio,
  showNotification,
}: ContactSectionProps) {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formBudget, setFormBudget] = useState("$10k - $25k");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() && !formPhone.trim()) return;

    onAudio?.(640, "triangle");
    setFormSubmitted(true);
    showNotification("Opening WhatsApp transmission...");

    // Format message for WhatsApp
    const messageLines = [
      "👋 *DWAYA // NEW PROJECT INQUIRY*",
      `• *Name / Studio:* ${formName || "Undisclosed"}`,
      `• *Client WhatsApp / Phone:* ${formPhone || "Not provided"}`,
      `• *Target Budget:* ${formBudget}`,
      `• *Scope Parameters:* ${formMessage || "General discussion"}`,
    ];

    const encodedText = encodeURIComponent(messageLines.join("\n"));
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleDirectWhatsApp = () => {
    onAudio?.(560, "sine");
    const directUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
      WHATSAPP_CONFIG.defaultMessage
    )}`;
    if (typeof window !== "undefined") {
      window.open(directUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-28 px-6 lg:px-12 bg-white/50">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
            {"// TRANSMISSION"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
            Initiate via WhatsApp
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            Direct real-time communication. Submit your scope below to start a WhatsApp conversation or message us directly.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/95 p-6 sm:p-10 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#121316]">
                Redirecting to WhatsApp
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Your project parameters have been formatted. Click below if WhatsApp did not open automatically.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleContactSubmit}
                  className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-mono uppercase tracking-wider hover:bg-emerald-700 flex items-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </button>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-xs font-mono hover:bg-stone-100 transition-colors"
                >
                  Edit details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-stone-500 uppercase">
                    Name or Studio
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-stone-500 uppercase">
                    Your WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-900 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-stone-500 uppercase">
                  Target Budget Range
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["$5k - $10k", "$10k - $25k", "$25k+"].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => {
                        setFormBudget(tier);
                        onAudio?.(480, "sine");
                      }}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all ${
                        formBudget === tier
                          ? "border-stone-900 bg-stone-900 text-stone-50"
                          : "border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-stone-500 uppercase">
                  Project Parameters & Timeline
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your frontend UI/UX goals, backend API requirements, desired timeline, or full-stack vision..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-900 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="group inline-flex items-center gap-2 text-xs font-mono text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Direct: {WHATSAPP_CONFIG.displayNumber}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <MagneticButton
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#121316] text-[#FAF9F5] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-stone-800 shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </MagneticButton>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
