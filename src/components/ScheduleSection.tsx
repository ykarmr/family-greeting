"use client";

import { schedule } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function ScheduleSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="px-6 py-20 bg-[var(--color-cream)] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-16 right-8 text-[var(--color-sage-light)] text-2xl opacity-30">
        🌿
      </div>
      <div className="absolute bottom-20 left-8 text-[var(--color-sage-light)] text-3xl opacity-30 transform scale-x-[-1]">
        🌿
      </div>

      <div
        className={`transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="section-title">{schedule.title}</h2>
      </div>

      <div className="max-w-sm md:max-w-2xl mx-auto">
        <div
          className={`bg-[var(--color-white)] rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[var(--color-border-light)] transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* タイムライン線 */}
            <div className="absolute left-[52px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-sage-light)] via-[var(--color-pink-light)] to-[var(--color-sage-light)]" />

            {schedule.items.map((item, index) => (
              <div
                key={`schedule-${item.time}`}
                className={`flex items-start mb-6 last:mb-0 transition-all duration-700 ${
                  isInView ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* 時間 */}
                <div className="w-12 text-right pr-3">
                  <span className="text-sm font-medium text-[var(--color-text-dark)]">
                    {item.time}
                  </span>
                </div>

                {/* ドット */}
                <div className="relative z-10 w-3 h-3 bg-[var(--color-sage)] rounded-full mt-0.5 shadow-sm" />

                {/* 内容 */}
                <div className="pl-4 flex-1 pt-0">
                  <p className="text-base text-[var(--color-text)] font-medium">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className={`text-center text-sm text-[var(--color-text-light)] mt-8 transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[var(--color-pink)]">✿</span> 時間は目安です <span className="text-[var(--color-pink)]">✿</span>
        </p>
      </div>
    </section>
  );
}
