"use client";

import { bride, groom, ourStory } from "@/data/content";
import { useInView } from "@/hooks/useInView";

type ProfileData = typeof groom | typeof bride;

function ProfileCard({
  data,
  isGroom,
  isInView,
  delay,
}: {
  data: ProfileData;
  isGroom: boolean;
  isInView: boolean;
  delay: number;
}) {
  const accentColor = isGroom ? "var(--color-sage)" : "var(--color-pink)";
  const decorEmoji = isGroom ? "🌿" : "✿";

  return (
    <div
      className={`bg-[var(--color-white)] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[var(--color-border-light)] transition-all duration-700 delay-[${delay}ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* ヘッダー部分 */}
      <div className="px-6 py-6 relative bg-[var(--color-beige-light)]">
        {/* 背景装飾 */}
        <div className="absolute top-2 right-3 text-lg opacity-25" style={{ color: accentColor }}>
          {decorEmoji}
        </div>
        <div className="absolute bottom-2 left-3 text-lg opacity-25" style={{ color: accentColor }}>
          {decorEmoji}
        </div>

        <div className="text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span 
              className="inline-block text-white text-xs px-4 py-1 rounded-full font-medium"
              style={{ background: accentColor }}
            >
              {data.role}
            </span>
          </div>

          <h3
            className="text-lg font-medium text-[var(--color-text-dark)] tracking-wider mb-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {data.name}
          </h3>
          <p className="text-xs text-[var(--color-text-light)]">
            {data.furigana}
          </p>
        </div>
      </div>

      {/* プロフィール情報 */}
      <div className="p-6 md:p-8 space-y-3 md:space-y-4">
        <div className="magazine-label mb-4">PROFILE DETAILS</div>
        <ProfileRow label="生年月日" value={data.birthDate} />
        <ProfileRow label="血液型" value={data.bloodType} />
        <ProfileRow label="出身地" value={data.hometown} />
        <ProfileRow label="お仕事" value={data.job} />
        <ProfileRow label="趣味" value={data.hobbies.join("、")} />
        <ProfileRow label="好きな食べ物" value={data.favorites.join("、")} />
        <ProfileRow label="性格" value={data.personality} />
      </div>

      {/* ひとこと */}
      <div className="mx-6 mb-6 p-4 rounded-lg magazine-quote">
        <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed">
          {data.message}
        </p>
        <p className="magazine-caption mt-2" style={{ borderTop: 'none' }}>PERSONAL MESSAGE</p>
      </div>
    </div>
  );
}

function ProfileRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 md:gap-4 pb-3 md:pb-3.5 border-b border-[var(--color-border-light)] last:border-0 last:pb-0">
      <span className="w-24 md:w-28 text-[var(--color-text-light)] text-xs md:text-sm shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-[var(--color-text)] text-sm md:text-base flex-1 leading-relaxed">
        {value}
      </span>
    </div>
  );
}

/* 新郎新婦プロフィールページ */
export function ProfileIntroSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-white relative overflow-hidden"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-20 right-[10%] text-[var(--color-sage-light)] text-base opacity-25">
        🌿
      </div>
      <div className="absolute bottom-24 left-[8%] text-[var(--color-pink-light)] text-sm opacity-30">
        ✿
      </div>

      <div
        className={`section-header transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">ふたりのこと</span>
        </div>
        <h2 className="section-title">新郎新婦のご紹介</h2>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-14">
        {/* 新郎 */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* 左: アイコン */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center" style={{ boxShadow: '0 6px 20px rgba(157, 179, 136, 0.25)' }}>
                <span className="text-4xl md:text-5xl">🤵</span>
              </div>
            </div>
            
            {/* 右: 紹介文 */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-3">
                <p className="text-xs text-[var(--color-text-light)] mb-1">{groom.furigana}</p>
                <h3 className="text-xl md:text-2xl text-[var(--color-text-dark)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {groom.name}
                </h3>
                <span className="text-xs text-[var(--color-sage)]">
                  {groom.role}
                </span>
              </div>
              
              <p className="text-sm text-[var(--color-text)] leading-relaxed border-l-2 border-[var(--color-sage-light)] pl-4 py-1">
                {groom.message}
              </p>
            </div>
          </div>
        </div>

        {/* 新婦 */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-10">
            {/* 右: アイコン */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--color-pink-light)] flex items-center justify-center" style={{ boxShadow: '0 6px 20px rgba(231, 168, 158, 0.25)' }}>
                <span className="text-4xl md:text-5xl">👰</span>
              </div>
            </div>
            
            {/* 左: 紹介文 */}
            <div className="flex-1 text-center md:text-right">
              <div className="mb-3">
                <p className="text-xs text-[var(--color-text-light)] mb-1">{bride.furigana}</p>
                <h3 className="text-xl md:text-2xl text-[var(--color-text-dark)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {bride.name}
                </h3>
                <span className="text-xs text-[var(--color-pink)]">
                  {bride.role}
                </span>
              </div>
              
              <p className="text-sm text-[var(--color-text)] leading-relaxed border-r-2 border-[var(--color-pink-light)] pr-4 py-1 md:text-right">
                {bride.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* なれそめセクション */
export function OurStorySection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-20 left-[10%] text-[var(--color-sage-light)] text-xs opacity-25">
        🌿
      </div>
      <div className="absolute bottom-24 right-[8%] text-[var(--color-pink-light)] text-sm opacity-30">
        ✿
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="section-header">
          <div
            className={`flex justify-center mb-2 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
          >
            <span className="magazine-label">なれそめ</span>
          </div>

          <h2
            className={`section-title transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {ourStory.title}
          </h2>
        </div>

        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm text-[var(--color-text)] leading-[2.4] whitespace-pre-line text-center">
            {ourStory.content}
          </p>
        </div>

        {/* 装飾 */}
        <div
          className={`flex items-center justify-center mt-8 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[var(--color-sage-light)] text-xs opacity-50">✿</span>
        </div>
      </div>
    </section>
  );
}
