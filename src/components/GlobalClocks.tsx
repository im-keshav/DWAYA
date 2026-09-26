"use client";

import React, { useEffect, useState } from "react";

export default function GlobalClocks() {
  const [times, setTimes] = useState({
    ldn: "--:--",
    nyc: "--:--",
    tyo: "--:--",
    ist: "--:--",
  });

  useEffect(() => {
    const updateWorldTimes = () => {
      const now = new Date();
      const formatZone = (timeZone: string) =>
        new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);

      try {
        setTimes({
          ldn: formatZone("Europe/London"),
          nyc: formatZone("America/New_York"),
          tyo: formatZone("Asia/Tokyo"),
          ist: formatZone("Asia/Kolkata"),
        });
      } catch {
        const iso = now.toTimeString().slice(0, 8);
        setTimes({ ldn: iso, nyc: iso, tyo: iso, ist: iso });
      }
    };

    updateWorldTimes();
    const interval = setInterval(updateWorldTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-stone-200/80 bg-white/70 backdrop-blur-sm font-mono text-xs">
      <div className="space-y-1 border-r border-stone-200/60 pr-2 last:border-none">
        <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>LONDON</span>
        </div>
        <div className="text-stone-900 font-medium text-sm">{times.ldn}</div>
        <div className="text-[10px] text-stone-400">GMT (UTC+0)</div>
      </div>

      <div className="space-y-1 border-r border-stone-200/60 pr-2 last:border-none">
        <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          <span>NEW YORK</span>
        </div>
        <div className="text-stone-900 font-medium text-sm">{times.nyc}</div>
        <div className="text-[10px] text-stone-400">EST (UTC-5)</div>
      </div>

      <div className="space-y-1 border-r border-stone-200/60 pr-2 last:border-none">
        <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          <span>TOKYO</span>
        </div>
        <div className="text-stone-900 font-medium text-sm">{times.tyo}</div>
        <div className="text-[10px] text-stone-400">JST (UTC+9)</div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Gurugram / INDIA</span>
        </div>
        <div className="text-stone-900 font-medium text-sm">{times.ist}</div>
        <div className="text-[10px] text-stone-400">IST (UTC+5:30)</div>
      </div>
    </div>
  );
}
