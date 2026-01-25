"use client";

import { greeting } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function GreetingSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-16 bg-white relative overflow-hidden">
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-16 left-[8%] text-[var(--color-sage-light)] text-lg opacity-30">
        ✿
      </div>
      <div className="absolute top-32 right-[12%] text-[var(--color-pink-light)] text-sm opacity-35">
        ❀
      </div>
      <div className="absolute bottom-20 left-[15%] text-[var(--color-sage-light)] text-xs opacity-25">
        🌿
      </div>

      <div
        className={`section-header transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">ごあいさつ</span>
        </div>
        <h2 className="section-title">{greeting.title}</h2>
      </div>

      <div
        className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p
          className="text-center text-sm md:text-base text-[var(--color-text)] leading-[2.4] whitespace-pre-line"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {greeting.message}
        </p>
      </div>

      {/* 下部装飾 */}
      <div
        className={`flex items-center justify-center gap-4 mt-10 transition-all duration-700 delay-200 ${isInView ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-[var(--color-sage-light)] text-xs opacity-50">✿</span>
      </div>
    </section>
  );
}
