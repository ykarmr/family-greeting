"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { memories } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function MemoriesSection() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 自動スライド
  useEffect(() => {
    if (!isAutoPlay || !isInView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % memories.images.length);
    }, 4000); // 4秒ごとに切り替え

    return () => clearInterval(timer);
  }, [isAutoPlay, isInView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false); // 手動操作時は自動再生を停止
    setTimeout(() => setIsAutoPlay(true), 8000); // 8秒後に自動再生を再開
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? memories.images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % memories.images.length;
    goToSlide(newIndex);
  };

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-white relative overflow-hidden"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-20 left-[8%] text-[var(--color-pink-light)] text-xs opacity-30">
        ✿
      </div>
      <div className="absolute bottom-24 right-[12%] text-[var(--color-sage-light)] text-sm opacity-25">
        🌿
      </div>

      {/* タイトル */}
      <div
        className={`section-header transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">おもいで</span>
        </div>
        <h2 className="section-title">{memories.title}</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* スライドショーコンテナ */}
        <div
          className={`bg-[var(--color-white)] rounded-xl overflow-hidden transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ boxShadow: '0 8px 32px rgba(157, 179, 136, 0.12)' }}
        >
          {/* 画像表示エリア */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] bg-[var(--color-beige-light)] overflow-hidden">
            {memories.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 95vw, (max-width: 1024px) 80vw, 896px"
                  quality={90}
                />
              </div>
            ))}

            {/* ナビゲーションボタン */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="前の画像"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-text)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="次の画像"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-text)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* キャプション */}
          <div className="p-6 md:p-8 text-center">
            <p className="text-xs md:text-sm text-[var(--color-text-light)] mb-2">
              {memories.images[currentIndex].date}
            </p>
            <p
              className="text-base md:text-lg text-[var(--color-text)] font-medium tracking-wide leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {memories.images[currentIndex].caption}
            </p>
          </div>

          {/* インジケーター（ドット） */}
          <div className="flex items-center justify-center gap-2 md:gap-3 pb-6 md:pb-8">
            {memories.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-7 h-2.5 md:w-8 md:h-3 bg-[var(--color-sage)]"
                    : "w-2.5 h-2.5 md:w-3 md:h-3 bg-[var(--color-border)] hover:bg-[var(--color-sage-light)]"
                }`}
                aria-label={`スライド ${index + 1} へ移動`}
              />
            ))}
          </div>
        </div>

        {/* 説明テキスト */}
        <p
          className={`text-center text-sm md:text-base text-[var(--color-text-light)] mt-6 md:mt-8 tracking-wider transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[var(--color-pink)]">✿</span> {currentIndex + 1}{" "}
          / {memories.images.length}{" "}
          <span className="text-[var(--color-pink)]">✿</span>
        </p>
      </div>
    </section>
  );
}
