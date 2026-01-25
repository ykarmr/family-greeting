"use client";

import { menu } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function MenuSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-16 bg-[var(--color-cream)] relative overflow-hidden">
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-20 right-[12%] text-[var(--color-sage-light)] text-xs opacity-25">
        🌿
      </div>

      <div
        className={`section-header transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">お食事</span>
        </div>
        <h2 className="section-title">{menu.title}</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div
          className={`bg-[var(--color-white)] rounded-xl overflow-hidden transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ boxShadow: '0 6px 24px rgba(157, 179, 136, 0.1)' }}
        >
          {/* ヘッダー */}
          <div className="px-6 py-6 text-center" style={{ background: 'linear-gradient(135deg, var(--color-sage-light)/15, transparent)' }}>
            <span className="text-xs text-[var(--color-sage)] opacity-60">✿</span>
            <h3
              className="text-sm text-[var(--color-text-dark)] mt-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {menu.course}
            </h3>
          </div>

          {/* メニュー一覧 */}
          <div className="px-6 py-6 space-y-3 md:space-y-4">
            {menu.items.map((item, index) => (
              <div
                key={`menu-${item}`}
                className={`flex items-center justify-center gap-3 text-sm md:text-base text-[var(--color-text)] transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-[var(--color-pink)] text-xs md:text-sm">❀</span>
                <span className="tracking-wide">{item}</span>
                <span className="text-[var(--color-pink)] text-xs md:text-sm">❀</span>
              </div>
            ))}
          </div>

          {/* 区切り */}
          <div className="flex items-center justify-center gap-3 py-3">
            <div className="w-12 h-px bg-[var(--color-border-light)]" />
            <span className="text-[var(--color-sage)] text-sm">🌿</span>
            <div className="w-12 h-px bg-[var(--color-border-light)]" />
          </div>

          {/* ドリンク */}
          <div
            className={`text-center pb-8 px-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-xs md:text-sm text-[var(--color-text-light)] mb-3 tracking-widest flex items-center justify-center gap-2">
              <span className="text-[var(--color-pink)]">✿</span> お飲み物 <span className="text-[var(--color-pink)]">✿</span>
            </p>
            <p className="text-sm md:text-base text-[var(--color-text)]">
              {menu.drinks.join(" ・ ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
