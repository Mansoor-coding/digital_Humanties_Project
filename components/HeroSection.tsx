"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background botanical texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #2C3B2D 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, #2C3B2D 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, #2C3B2D 1px, transparent 1px)`,
          backgroundSize: "60px 60px, 40px 40px, 80px 80px",
        }}
      />

      {/* Soft gradient blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-mist/10 blur-[120px] pointer-events-none" />

      {/* Issue number / label */}
      <div className="mb-8 flex items-center gap-3 animate-fade-in">
        <span className="h-px w-12 bg-warm-stone" />
        <span className="font-mono text-xs tracking-[0.25em] text-warm-stone uppercase">
          Digital Humanities · Essay No. 01
        </span>
        <span className="h-px w-12 bg-warm-stone" />
      </div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="font-serif text-center max-w-4xl leading-[1.1]"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        <em>Curating Calm</em>
        <span className="block text-warm-stone text-[0.6em] font-normal mt-2 not-italic tracking-wide">
          ——
        </span>
        <span className="block text-[0.5em] font-sans font-light tracking-[0.05em] text-soft-charcoal/70 mt-1 leading-relaxed">
          A Visual Analysis of Slow Living
          <br />
          on Instagram &amp; Beyond
        </span>
      </h1>

      {/* Intro paragraph */}
      <div className="mt-12 max-w-2xl text-center animate-fade-in animate-delay-300">
        <p className="font-sans text-base md:text-lg text-soft-charcoal/75 leading-[1.9] font-light">
          Across ten accounts and channels, a grammar of calm emerges — golden
          light, stone surfaces, and unhurried hands. This essay maps the visual
          vocabulary of "slow living" as a curated aesthetic practice: who makes
          it, what objects anchor it, and what mood it manufactures.
        </p>
      </div>

      {/* Metadata chips */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in animate-delay-500">
        {["10 Accounts Analyzed", "5 Aesthetic Categories", "Instagram + YouTube"].map(
          (tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-warm-stone/40 text-xs font-mono text-warm-stone tracking-widest"
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("roster")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-stone/60 hover:text-warm-stone transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
