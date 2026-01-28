"use client";

import { bride, closingMessage, groom } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function ClosingSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-32 bg-[var(--color-text-dark)] text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]"
    >
      {/* 紙の質感オーバーレイ */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative z-10 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-12 border-b border-white/20 pb-12">
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-white)] tracking-[0.2em] mb-6">
            Thank You
          </h2>
          <p className="text-[var(--color-beige)] font-serif text-base md:text-lg tracking-widest">
            {closingMessage.message}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-white/60 font-serif tracking-widest text-sm uppercase">
            <span>勇樹</span>
            <span>&</span>
            <span>紗弥香</span>
          </div>

          <div className="w-px h-8 bg-white/20 my-2"></div>

          <div className="text-white/40 font-serif text-xs tracking-[0.5em]">
            2026.02.07
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 text-xs text-white/10 tracking-[1em] uppercase font-sans">
        Family Greeting
      </div>
    </section>
  );
}
