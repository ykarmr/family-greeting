"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export function CoverSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--color-cream)] overflow-hidden"
    >
      {/* 背景テクスチャ（紙） */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`
        }}
      />

      {/* 雑誌風の枠線 */}
      <div className="absolute inset-4 md:inset-8 border-[1px] border-[var(--color-text)] opacity-20 pointer-events-none" />
      <div className="absolute inset-5 md:inset-9 border-[1px] border-[var(--color-text)] opacity-10 pointer-events-none" />

      {/* ヘッダー情報（巻数・日付） */}
      <div className="absolute top-8 md:top-12 w-full px-8 md:px-16 flex justify-between items-end z-10">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-serif uppercase text-[var(--color-text-light)]">Family Greeting</span>
          <span className="text-sm md:text-base font-bold font-serif tracking-widest border-b border-[var(--color-text)] pb-1">創刊号</span>
        </div>
        <div className="flex flex-col items-end gap-1">
           <span className="text-[10px] md:text-xs tracking-[0.2em] font-serif text-[var(--color-text-light)]">2026.01.25</span>
           <span className="text-sm md:text-base font-bold font-serif tracking-widest text-[var(--color-text-dark)]">特別編集</span>
        </div>
      </div>

      {/* メインタイトルエリア */}
      <div className={`relative z-10 text-center mb-6 md:mb-10 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] font-serif text-[var(--color-text-dark)] mb-4">
          両家顔合わせの栞
        </h1>
        <div className="mt-6 md:mt-8 flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-[var(--color-text-light)] opacity-50"></div>
            <span className="font-serif italic text-lg md:text-xl text-[var(--color-sage-dark)]">The Two Families</span>
            <div className="h-[1px] w-12 bg-[var(--color-text-light)] opacity-50"></div>
        </div>
      </div>

      {/* メインビジュアル */}
      <div
        className={`relative w-full max-w-4xl px-6 md:px-12 transition-all duration-1000 delay-300 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="relative aspect-[3/2] md:aspect-[16/9] shadow-2xl bg-[#EFEBE4] p-3 md:p-4 rotate-1">
           {/* 写真フレーム */}
           <div className="relative w-full h-full overflow-hidden border border-[var(--color-border)] bg-gray-100">
             <Image
                src="/images/cover.jpg"
                alt="Main Visual"
                fill
                className="object-cover grayscale-[20%] sepia-[10%] contrast-[0.95]"
                sizes="100vw"
                priority
             />
             {/* フィルムノイズなどの演出 */}
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-coffee)]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
           </div>
           
           {/* キャプション */}
           <div className="absolute -bottom-8 right-4 max-w-[200px] text-right">
             <p className="text-[10px] text-[var(--color-text-light)] font-serif leading-relaxed tracking-wider transform -rotate-1">
               ふたつの家族が<br/>ひとつになる日
             </p>
           </div>
        </div>
      </div>

      {/* 下部装飾 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 opacity-60">
        <span className="text-[10px] tracking-[0.5em] uppercase font-serif">Scroll Down</span>
        <div className="w-[1px] h-12 bg-[var(--color-text)]"></div>
      </div>
    </section>
  );
}
