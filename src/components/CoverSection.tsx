"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export function CoverSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-cream)] py-16 md:py-8"
    >
      {/* 背景装飾 */}
      <div className="absolute top-16 left-8 text-[var(--color-sage-light)] text-4xl opacity-30">
        🌿
      </div>
      <div className="absolute top-24 right-10 text-[var(--color-pink-light)] text-2xl opacity-40">
        ✿
      </div>
      <div className="absolute bottom-20 md:bottom-32 left-12 text-[var(--color-pink-light)] text-xl opacity-30">
        ❀
      </div>
      <div className="absolute bottom-28 md:bottom-40 right-8 text-[var(--color-sage-light)] text-3xl opacity-30 transform scale-x-[-1]">
        🌿
      </div>

      {/* 表紙画像 */}
      <div
        className={`relative w-full flex items-center justify-center px-2 md:px-4 mb-16 md:mb-0 transition-all duration-1000 ease-out ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="relative w-full max-w-5xl mx-auto">
          <Image
            src="/images/cover.jpg"
            alt="両家顔合わせのしおり"
            width={800}
            height={1200}
            className="w-full h-auto rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[var(--color-border-light)]"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 896px"
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-[var(--color-text-light)] tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--color-sage)] to-transparent animate-bounce" />
      </div>
    </section>
  );
}
