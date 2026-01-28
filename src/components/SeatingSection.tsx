"use client";

import { useEffect, useState } from "react";
import { seating } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function SeatingSection() {
  const { ref, isInView } = useInView();
  const [radius, setRadius] = useState(36); // 初期値（モバイル向け）

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 36 : 40);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-20 bg-white relative overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="section-header mb-16 text-center">
          <span className="magazine-label">Seating Chart</span>
          <h2 className="section-title">{seating.title}</h2>
        </div>

        {/* 会場MAPコンテナ */}
        <div className="relative aspect-square max-w-[650px] mx-auto bg-[#F9F6F2] rounded-3xl border-2 border-[var(--color-text-dark)]/5 shadow-sm p-4 md:p-8">
          {/* 入り口 (下側に配置) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
            <div className="bg-[var(--color-text-dark)] text-white px-5 py-2 rounded-full text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase shadow-lg whitespace-nowrap">
              Entrance / 入り口
            </div>
            {/* 入り口からテーブルへの矢印風ライン */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-[1px] h-8 bg-dashed border-l border-dashed border-[var(--color-text-dark)]/20"></div>
          </div>

          {/* 会場の壁・境界線イメージ */}
          <div className="absolute inset-8 border-2 border-dashed border-[var(--color-text-dark)]/10 rounded-full pointer-events-none"></div>

          {/* 円卓 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[52%] rounded-full bg-white border-4 border-[var(--color-sage)]/20 shadow-xl flex items-center justify-center z-0">
            <div className="text-center p-2">
              <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-1 md:mb-2 opacity-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <span className="font-serif text-[var(--color-sage)] text-[8px] md:text-xs tracking-widest uppercase block mb-0.5 md:mb-1">
                Central Table
              </span>
              <span className="font-serif text-lg md:text-2xl font-bold text-[var(--color-text-dark)]">
                {seating.table.name}
              </span>
            </div>
          </div>

          {/* 各座席 */}
          {seating.table.positions.map((pos) => {
            // angle をラジアンに変換 (上を0度とするために -90)
            const rad = ((pos.angle - 90) * Math.PI) / 180;
            // 円周上の配置 (半径)
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);

            return (
              <div
                key={pos.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="bg-white/95 backdrop-blur-sm px-2 md:px-4 py-1.5 md:py-2 rounded-lg border border-[var(--color-text-dark)]/10 shadow-md min-w-[75px] md:min-w-[110px] group hover:border-[var(--color-sage)] transition-colors">
                  <span className="block text-[8px] md:text-[10px] text-[var(--color-sage)] font-bold whitespace-nowrap mb-0.5">
                    {pos.role}
                  </span>
                  <span className="block text-[11px] md:text-base font-bold text-[var(--color-text-dark)] whitespace-nowrap">
                    {pos.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-[1px] bg-[var(--color-sage)]/30"></div>
          <p className="text-[var(--color-text-light)] text-[10px]">
            ※当日の状況により変更になる場合がございます。
          </p>
        </div>
      </div>
    </section>
  );
}
