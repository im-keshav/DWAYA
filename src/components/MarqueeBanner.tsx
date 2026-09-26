import React from "react";

export default function MarqueeBanner() {
  const items = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "GSAP",
    "Framer Motion",
    "Three.js",
    "Node.js",
    "Express.js",
    "Fastify",
    "REST APIs",
    "JWT",
  ];

  return (
    <section className="relative z-10 border-y border-stone-200 bg-white/60 py-3.5 overflow-hidden font-mono text-xs text-stone-700 uppercase tracking-widest select-none backdrop-blur-xs">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4 flex-shrink-0">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="font-medium hover:text-stone-950 transition-colors">
                  {item}
                </span>
                <span className="text-stone-300">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
