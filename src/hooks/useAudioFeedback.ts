"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// High-fidelity UI sound assets loaded directly from internet CDN with local fallbacks
const SOUND_URLS = {
  click: "https://cdn.jsdelivr.net/gh/google/blockly@master/media/click.mp3",
  pop: "https://raw.githubusercontent.com/joshwcomeau/use-sound/main/stories/sounds/pop-down.mp3",
  switchOn: "https://raw.githubusercontent.com/joshwcomeau/use-sound/main/stories/sounds/switch-on.mp3",
  switchOff: "https://raw.githubusercontent.com/joshwcomeau/use-sound/main/stories/sounds/switch-off.mp3",
};

const LOCAL_FALLBACKS = {
  click: "/sounds/click.mp3",
  pop: "/sounds/pop.mp3",
  switchOn: "/sounds/switch-on.mp3",
  switchOff: "/sounds/switch-off.mp3",
};

export function useAudioFeedback() {
  const [audioActive, setAudioActive] = useState(true);
  const audioCacheRef = useRef<Record<string, HTMLAudioElement>>({});
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Preload internet audio files on client mount for instant, zero-lag playback
  useEffect(() => {
    if (typeof window === "undefined") return;

    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      try {
        const audio = new Audio(url);
        audio.preload = "auto";
        audio.volume = 0.45;

        // If internet fetch fails, fallback to local bundle
        audio.onerror = () => {
          const fallbackUrl = LOCAL_FALLBACKS[key as keyof typeof LOCAL_FALLBACKS];
          if (fallbackUrl && audio.src !== fallbackUrl) {
            audio.src = fallbackUrl;
            audio.load();
          }
        };

        audioCacheRef.current[key] = audio;
      } catch {
        // Safe audio initialization
      }
    });
  }, []);

  // Web Audio Context for synthesized micro-pitch fallback
  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (!AudioCtx) return null;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  const playTactileFeedback = useCallback(
    (soundOrFreq: string | number = "click", type: OscillatorType = "sine", volume = 0.45) => {
      if (!audioActive || typeof window === "undefined") return;

      // 1. Play realistic internet audio file
      let soundKey = "click";
      if (typeof soundOrFreq === "string") {
        if (soundOrFreq.includes("switch") || soundOrFreq.includes("toggle")) {
          soundKey = "switchOn";
        } else if (soundOrFreq.includes("pop") || soundOrFreq.includes("menu")) {
          soundKey = "pop";
        } else {
          soundKey = soundOrFreq in SOUND_URLS ? soundOrFreq : "click";
        }
      }

      const cached = audioCacheRef.current[soundKey] || audioCacheRef.current.click;
      if (cached) {
        try {
          // Clone or rewind for rapid consecutive clicks
          const audioClone = cached.cloneNode(true) as HTMLAudioElement;
          audioClone.volume = volume;
          const playPromise = audioClone.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Browser autoplay catch - fallback to Web Audio
              synthesizeTone(typeof soundOrFreq === "number" ? soundOrFreq : 500, type, 0.15);
            });
          }
          return;
        } catch {
          // Fall through to synthesizer
        }
      }

      // 2. Synthesizer fallback
      const freq = typeof soundOrFreq === "number" ? soundOrFreq : 520;
      synthesizeTone(freq, type, 0.15);
    },
    [audioActive]
  );

  const synthesizeTone = (frequency: number, type: OscillatorType, volume: number) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(60, frequency * 0.72), now + 0.07);

      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.085);
    } catch {
      // Audio safety
    }
  };

  // Pre-unlock AudioContext on first gesture
  useEffect(() => {
    const unlock = () => {
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      // Also prime audio cache
      Object.values(audioCacheRef.current).forEach((audio) => {
        audio.load();
      });
    };

    window.addEventListener("pointerdown", unlock, { passive: true, once: true });
    window.addEventListener("keydown", unlock, { passive: true, once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  return { audioActive, setAudioActive, playTactileFeedback };
}
