"use client";

import { bride, closingMessage, groom } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function ClosingSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-b from-[var(--color-sage)] to-[var(--color-sage-dark)] text-center relative overflow-hidden rounded-t-[2rem]"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-16 left-[12%] text-white/15 text-sm">
        ✿
      </div>
      <div className="absolute bottom-20 right-[10%] text-white/10 text-xs">
        🌿
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* 上部 */}
        <div
          className={`mb-6 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-white/40 text-xs">✿</span>
        </div>
        
        <h2
          className={`text-lg md:text-xl text-white mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {closingMessage.title}
        </h2>

        <p
          className={`leading-[2.2] mb-10 text-white/85 text-sm transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {closingMessage.message}
        </p>

        <div
          className={`flex items-center justify-center gap-4 text-white transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-sm tracking-wider">{groom.name}</span>
          <span className="text-[var(--color-pink-light)] text-sm">✿</span>
          <span className="text-sm tracking-wider">{bride.name}</span>
        </div>

        <div
          className={`mt-10 pt-6 border-t border-white/15 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-base text-white/60 tracking-widest">
            2026.2.7
          </p>
        </div>
      </div>
    </section>
  );
}
