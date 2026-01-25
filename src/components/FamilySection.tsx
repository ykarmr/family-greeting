"use client";

import { brideFamily, groomFamily } from "@/data/content";
import { useInView } from "@/hooks/useInView";

type FamilyData = typeof groomFamily | typeof brideFamily;

function FamilyCard({
  data,
  isGroom,
  isInView,
}: {
  data: FamilyData;
  isGroom: boolean;
  isInView: boolean;
}) {
  const accentColor = isGroom ? "var(--color-sage)" : "var(--color-pink)";
  const accentColorLight = isGroom ? "var(--color-sage-light)" : "var(--color-pink-light)";

  return (
    <div
      className={`bg-[var(--color-white)] rounded-xl overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ boxShadow: '0 6px 24px rgba(157, 179, 136, 0.1)' }}
    >
      {/* ヘッダー */}
      <div
        className="px-5 py-4 text-center"
        style={{ background: `linear-gradient(135deg, ${accentColorLight}30, var(--color-white))` }}
      >
        <h3
          className="text-sm text-[var(--color-text-dark)]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {data.title}
        </h3>
      </div>

      <div className="p-5 space-y-4">
        {data.members.map((member, index) => (
          <div
            key={`member-${member.name}`}
            className={`flex items-start gap-3 pb-4 border-b border-[var(--color-border-light)] last:border-0 last:pb-0 transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* アバター */}
            <div
              className="w-12 h-12 flex items-center justify-center text-2xl shrink-0 rounded-full shadow-sm border"
              style={{ 
                background: `linear-gradient(135deg, ${accentColorLight}50, var(--color-white))`,
                borderColor: accentColorLight
              }}
            >
              {member.relation === "父" && "👨"}
              {member.relation === "母" && "👩"}
              {member.relation === "弟" && "👦"}
              {member.relation === "姉" && "👩"}
              {member.relation === "妹" && "👧"}
              {member.relation === "兄" && "👨"}
              {!["父", "母", "弟", "姉", "妹", "兄"].includes(
                member.relation,
              ) && "👤"}
            </div>

            {/* 情報 */}
            <div className="flex-1 pt-0.5">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs md:text-sm px-2.5 md:px-3 py-0.5 md:py-1 rounded-full font-medium text-white"
                  style={{ background: accentColor }}
                >
                  {member.relation}
                </span>
                <span className="font-medium text-[var(--color-text-dark)] text-sm md:text-base">
                  {member.name}
                </span>
              </div>
              <p className="text-xs md:text-sm text-[var(--color-text-light)] mb-1.5 md:mb-2">
                {member.furigana}
              </p>
              <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 新郎家族紹介ページ */
export function GroomFamilySection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-16 right-[10%] text-[var(--color-sage-light)] text-sm opacity-25">
        🌿
      </div>

      <div
        className={`section-header transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">新郎側</span>
        </div>
        <h2 className="section-title">新郎家族のご紹介</h2>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <FamilyCard
          data={groomFamily}
          isGroom={true}
          isInView={isInView}
        />
      </div>
    </section>
  );
}

/* 新婦家族紹介ページ */
export function BrideFamilySection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-white relative overflow-hidden"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute bottom-20 left-[8%] text-[var(--color-pink-light)] text-xs opacity-30">
        ✿
      </div>

      <div
        className={`section-header transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">新婦側</span>
        </div>
        <h2 className="section-title">新婦家族のご紹介</h2>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <FamilyCard
          data={brideFamily}
          isGroom={false}
          isInView={isInView}
        />
      </div>
    </section>
  );
}

/* 互換性のための既存エクスポート */
export function FamilySection() {
  return (
    <>
      <GroomFamilySection />
      <BrideFamilySection />
    </>
  );
}
