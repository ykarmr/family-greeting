"use client";

import { bride, greeting, groom } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function GreetingSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* 背景テクスチャ */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* 便箋の背景 */}
        <div
          className={`bg-[#FDFBF9] shadow-lg p-8 md:p-16 relative transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 2.4rem, #E8E4D9 2.4rem, #E8E4D9 2.5rem)",
          }}
        >
          {/* スタンプ装飾 */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-[var(--color-sage-light)]/20 rounded-full blur-xl"></div>
          <div className="absolute top-8 right-8 text-[var(--color-sage)] opacity-40 transform rotate-12 border-2 border-[var(--color-sage)] p-2 rounded-sm font-serif text-xs font-bold tracking-widest pointer-events-none">
            GREETING
            <br />
            CARD
          </div>

          <div className="relative z-10 text-center">
            <h2
              className="text-2xl md:text-3xl mb-12 tracking-[0.3em] text-[var(--color-text-dark)] flex items-center justify-center gap-4"
              style={{ fontFamily: "var(--font-yosugara)" }}
            >
              <span className="h-[1px] w-8 bg-[var(--color-text-light)]"></span>
              {greeting.title}
              <span className="h-[1px] w-8 bg-[var(--color-text-light)]"></span>
            </h2>

            <p
              className="text-lg md:text-xl text-[var(--color-text)] leading-[2.8rem] tracking-widest whitespace-pre-line"
              style={{ fontFamily: "var(--font-yosugara)" }}
            >
              {greeting.message}
            </p>

            {/* サイン風 */}
            <div
              className="mt-12 text-right font-handwritten text-[var(--color-text-light)] text-base tracking-widest"
              style={{ fontFamily: "var(--font-yosugara)" }}
            >
              勇樹 & 紗弥香
            </div>
          </div>
        </div>

        {/* 封筒の飾り風 */}
        <div
          className={`absolute -bottom-6 -right-6 md:-bottom-10 md:-right-12 w-32 h-32 md:w-48 md:h-48 transition-all duration-1000 delay-300 ${isInView ? "opacity-100 rotate-12" : "opacity-0 rotate-0"}`}
        >
          {/* 葉っぱのSVGなどの代わり */}
          <span className="text-6xl md:text-8xl text-[var(--color-sage)] opacity-20 filter blur-[1px]">
            🌿
          </span>
        </div>
      </div>
    </section>
  );
}
