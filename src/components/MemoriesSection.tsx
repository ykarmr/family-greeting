"use client";

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
      className="px-6 md:px-12 lg:px-20 py-24 bg-[#1a1a1a] relative overflow-hidden text-white"
    >
      {/* 背景ノイズ */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* タイトル */}
      <div
        className={`section-header text-center mb-12 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-[var(--color-sage)] font-serif tracking-[0.2em] text-sm block mb-2">
          Moments in Time
        </span>
        <h2
          className="text-4xl md:text-5xl text-[var(--color-white)] tracking-[0.3em]"
          style={{
            fontFamily: "var(--font-yosugara)",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
          }}
        >
          {memories.title}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* スライドプロジェクター風コンテナ */}
        <div className="relative w-full max-w-2xl bg-[#eee] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm rotate-1">
          {/* スライドマウント */}
          <div className="bg-white p-2 shadow-inner border border-gray-300 aspect-[4/3] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#111] shadow-inner flex items-center justify-center overflow-hidden">
              {memories.images.map((image, index) => (
                <div
                  key={`memory-${image.src}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-contain"
                  />
                  {/* ビネット効果 */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>
                </div>
              ))}

              {/* 映写機のノイズ線（CSSアニメーションで動かせるとベストだが静的で雰囲気を出す） */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:200%_100%] animate-pulse"></div>
            </div>
          </div>

          {/* 手書きキャプションエリア */}
          <div className="mt-4 text-center pb-2">
            <p
              className="font-handwritten text-gray-600 text-2xl rotate-[-1deg]"
              style={{ fontFamily: "var(--font-yosugara)" }}
            >
              {memories.images[currentIndex].caption}
              <span className="text-sm text-gray-400 ml-2 font-sans tracking-widest">
                {memories.images[currentIndex].date}
              </span>
            </p>
          </div>
        </div>

        {/* コントローラー */}
        <div className="mt-12 flex items-center gap-8">
          <button
            type="button"
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full border-2 border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <img
              src="/images/arrow-left.svg"
              alt="前へ"
              width="24"
              height="24"
            />
          </button>

          <div className="font-serif text-white/50 tracking-widest text-sm">
            {currentIndex + 1} <span className="mx-2 text-white/20">/</span>{" "}
            {memories.images.length}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="w-12 h-12 rounded-full border-2 border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <img
              src="/images/arrow-right.svg"
              alt="次へ"
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
