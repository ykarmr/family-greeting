"use client";

import { futurePlans } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function FuturePlansSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-16 bg-white relative overflow-hidden">
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-16 left-[10%] text-[var(--color-sage-light)] text-sm opacity-25">
        🌿
      </div>
      <div className="absolute bottom-20 right-[8%] text-[var(--color-pink-light)] text-xs opacity-30">
        ✿
      </div>

      <div
        className={`section-header transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">これから</span>
        </div>
        <h2 className="section-title">{futurePlans.title}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-5 relative z-10">
        {/* 結婚式について */}
        <div
          className={`bg-[var(--color-white)] rounded-xl p-5 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ boxShadow: '0 6px 24px rgba(231, 168, 158, 0.1)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[var(--color-pink-light)] flex items-center justify-center rounded-full">
              <span className="text-base">💒</span>
            </div>
            <h3
              className="text-sm text-[var(--color-text-dark)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              結婚式について
            </h3>
          </div>

          <div className="space-y-2 text-sm pl-1 mb-3">
            <div className="flex items-center gap-3">
              <span className="w-12 text-[var(--color-text-light)] text-xs">日程</span>
              <span className="text-[var(--color-text)]">{futurePlans.wedding.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-[var(--color-text-light)] text-xs">会場</span>
              <span className="text-[var(--color-text)]">{futurePlans.wedding.venue}</span>
            </div>
          </div>

          <p className="text-xs text-[var(--color-text)] leading-relaxed bg-[var(--color-pink-light)]/20 p-3 rounded-lg">
            {futurePlans.wedding.note}
          </p>
        </div>

        {/* 新居について */}
        <div
          className={`bg-[var(--color-white)] rounded-xl p-5 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ boxShadow: '0 6px 24px rgba(157, 179, 136, 0.1)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[var(--color-sage-light)] flex items-center justify-center rounded-full">
              <span className="text-base">🏠</span>
            </div>
            <h3
              className="text-sm text-[var(--color-text-dark)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              新居について
            </h3>
          </div>

          <div className="text-sm pl-1 mb-3">
            <div className="flex items-center gap-3">
              <span className="w-12 text-[var(--color-text-light)] text-xs">エリア</span>
              <span className="text-[var(--color-text)]">{futurePlans.newHome.area}</span>
            </div>
          </div>

          <p className="text-xs text-[var(--color-text)] leading-relaxed bg-[var(--color-sage-light)]/20 p-3 rounded-lg">
            {futurePlans.newHome.note}
          </p>
        </div>

        {/* メッセージ */}
        <div
          className={`text-center pt-6 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p
            className="text-sm text-[var(--color-text)] leading-[2.2] whitespace-pre-line"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {futurePlans.message}
          </p>
        </div>
      </div>
    </section>
  );
}
