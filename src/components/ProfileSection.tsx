"use client";

import { bride, groom, ourStory } from "@/data/content";
import { useInView } from "@/hooks/useInView";

const InterviewItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string | string[];
}) => (
  <div className="mb-2">
    <dt className="text-xs text-[var(--color-text-light)] font-bold tracking-widest mb-1 border-b border-[var(--color-border-light)] inline-block pb-0.5">
      {question}
    </dt>
    <dd className="font-serif text-base text-[var(--color-text)] leading-relaxed">
      {answer}
    </dd>
  </div>
);

/* 新郎新婦プロフィールページ */
export function ProfileIntroSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* 背景の装飾文字 */}
      <div className="absolute top-10 right-0 text-[10rem] font-serif font-bold text-[var(--color-sage)] opacity-5 pointer-events-none select-none leading-none z-0">
        Profile
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className={`section-header text-left mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="block text-sm uppercase tracking-[0.3em] text-[var(--color-text-light)] mb-2 font-serif">
            Getting to know us
          </span>
          <h2 className="section-title text-left !m-0 !text-left !w-auto">
            プロフィール
          </h2>
        </div>

        <div className="space-y-24">
          {/* 新郎 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* 写真カラム (左) */}
            <div
              className={`md:col-span-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100" : "opacity-0"}`}
            >
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl rotate-[-2deg] border-4 border-white bg-white">
                  {groom.image ? (
                    <img
                      src={groom.image}
                      alt={groom.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center text-[var(--color-text-light)]">
                      <span className="text-4xl">Groom</span>
                    </div>
                  )}
                </div>
                <div className="mt-6 text-center md:text-left">
                  <p className="font-serif text-3xl font-bold text-[var(--color-text-dark)] mb-1">
                    {groom.name}
                  </p>
                  <p className="font-sans text-sm text-[var(--color-text-light)] tracking-wider uppercase mb-3">
                    {groom.furigana}
                  </p>
                  <span className="inline-block px-3 py-1 bg-[var(--color-sage)] text-white text-sm tracking-widest font-serif">
                    {groom.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Q&Aカラム (右) */}
            <div
              className={`md:col-span-8 bg-white p-6 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] relative top-8 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[var(--color-sage)] opacity-20 rounded-full"></div>

              {/* ひとこと (Lead) */}
              <div
                className="mb-10 font-serif text-xl leading-loose text-[var(--color-text-dark)] border-b pb-6 border-dashed border-[var(--color-border)]"
                style={{ fontFamily: "var(--font-yomogi)" }}
              >
                "{groom.message}"
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <InterviewItem question="生年月日" answer={groom.birthDate} />
                <InterviewItem question="出身地" answer={groom.hometown} />
                <InterviewItem
                  question="趣味"
                  answer={groom.hobbies.join("、")}
                />
                <InterviewItem
                  question="好きな食べ物"
                  answer={groom.favorites.join("、")}
                />
                <InterviewItem question="性格" answer={groom.personality} />
                <InterviewItem question="仕事" answer={groom.job} />
              </div>
            </div>
          </div>

          {/* 新婦 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* 写真カラム (右) - Mobileでは上に来るようにOrder調整が必要だが、シンプルなGrid順序で対応 */}
            <div
              className={`md:col-span-4 md:col-start-9 transition-all duration-700 delay-300 ${isInView ? "opacity-100" : "opacity-0"}`}
            >
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl rotate-[2deg] border-4 border-white bg-white">
                  {bride.image ? (
                    <img
                      src={bride.image}
                      alt={bride.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center text-[var(--color-text-light)]">
                      <span className="text-4xl">Bride</span>
                    </div>
                  )}
                </div>
                <div className="mt-6 text-center md:text-right">
                  <p className="font-serif text-3xl font-bold text-[var(--color-text-dark)] mb-1">
                    {bride.name}
                  </p>
                  <p className="font-sans text-sm text-[var(--color-text-light)] tracking-wider uppercase mb-3">
                    {bride.furigana}
                  </p>
                  <span className="inline-block px-3 py-1 bg-[var(--color-pink)] text-white text-sm tracking-widest font-serif">
                    {bride.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Q&Aカラム (左) */}
            <div
              className={`md:col-span-8 md:col-start-1 md:row-start-1 bg-white p-6 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] relative top-8 transition-all duration-700 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-pink)] opacity-20 rounded-full"></div>

              {/* ひとこと (Lead) */}
              <div
                className="mb-10 font-serif text-xl leading-loose text-[var(--color-text-dark)] border-b pb-6 border-dashed border-[var(--color-border)]"
                style={{ fontFamily: "var(--font-yomogi)" }}
              >
                "{bride.message}"
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <InterviewItem question="生年月日" answer={bride.birthDate} />
                <InterviewItem question="出身地" answer={bride.hometown} />
                <InterviewItem
                  question="趣味"
                  answer={bride.hobbies.join("、")}
                />
                <InterviewItem
                  question="好きな食べ物"
                  answer={bride.favorites.join("、")}
                />
                <InterviewItem question="性格" answer={bride.personality} />
                <InterviewItem question="仕事" answer={bride.job} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* なれそめセクション (Film Style) */
export function OurStorySection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-24 bg-[#2C2C2C] relative overflow-hidden text-white"
    >
      {/* フィルムノイズ背景 */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 上下のフィルム穴装飾 */}
      <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-black flex justify-between px-2 items-center z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-6 md:w-6 md:h-8 bg-[#444] rounded-[2px] mx-1"
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-black flex justify-between px-2 items-center z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-6 md:w-6 md:h-8 bg-[#444] rounded-[2px] mx-1"
          ></div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10 py-12">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <span className="font-serif text-[var(--color-beige)] tracking-[0.5em] text-sm uppercase mb-4 block">
            The Story of Us
          </span>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-white)] tracking-[0.3em]"
            style={{
              fontFamily: "var(--font-yomogi)",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            {ourStory.title}
          </h2>
        </div>

        <div
          className={`relative bg-black/40 p-8 md:p-12 backdrop-blur-sm border border-white/10 rounded-sm transition-all duration-1000 delay-300 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* 映写機のような光のエフェクト */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <p
            className="text-lg md:text-2xl text-[var(--color-white)] leading-[2.8] whitespace-pre-line text-center font-serif"
            style={{
              fontFamily: "var(--font-yomogi)",
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            {ourStory.content}
          </p>

          <div className="mt-8 flex justify-center">
            <span className="text-[var(--color-beige)] opacity-50 text-xl">
              ✤
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
