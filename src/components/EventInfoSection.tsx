"use client";

import { eventInfo, schedule } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function EventInfoSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* さりげなく配置された装飾 */}
      <div className="absolute top-16 right-[12%] text-[var(--color-sage-light)] text-sm opacity-25">
        🌿
      </div>
      <div className="absolute bottom-20 left-[10%] text-[var(--color-pink-light)] text-xs opacity-30">
        ✿
      </div>

      <div
        className={`section-header transition-all duration-700 mb-10 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex justify-center">
          <span className="magazine-label">お知らせ</span>
        </div>
        <h2 className="section-title">開催情報</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* 日時・場所・スケジュールをグリッドレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左側: 日時と場所 */}
          <div
            className={`bg-[var(--color-white)] rounded-xl p-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ boxShadow: '0 6px 24px rgba(157, 179, 136, 0.1)' }}
          >
            {/* 日時情報 */}
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-[var(--color-sage-light)] flex items-center justify-center rounded-full shrink-0">
                <span className="text-lg">📅</span>
              </div>
              <div className="flex-1">
                <h3
                  className="text-sm text-[var(--color-text-light)] mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  日時
                </h3>
                <p className="text-[var(--color-text)] text-sm">
                  <span>{eventInfo.date}</span>
                  <span className="text-[var(--color-text-light)] ml-1">
                    ({eventInfo.dayOfWeek})
                  </span>
                </p>
                <p className="text-[var(--color-text)] text-sm">
                  {eventInfo.time}
                </p>
              </div>
            </div>

            <div className="h-px bg-[var(--color-border-light)] my-4" />

            {/* 会場情報 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--color-pink-light)] flex items-center justify-center rounded-full shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div className="flex-1">
                <h3
                  className="text-base font-medium text-[var(--color-text-dark)] mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  会場
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-[var(--color-text)]">
                    {eventInfo.venue.name}
                  </p>
                  <p className="text-[var(--color-text-light)]">
                    {eventInfo.venue.floor}
                  </p>
                  <p className="text-[var(--color-text-light)]">
                    {eventInfo.venue.postalCode}
                  </p>
                  <p className="text-[var(--color-text)]">
                    {eventInfo.venue.address}
                  </p>
                </div>
              </div>
            </div>

            {/* 集合場所 */}
            <div className="bg-[var(--color-sage-light)]/20 rounded-xl p-4 border border-[var(--color-sage-light)]/40 mt-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[var(--color-sage)] text-sm">🌿</span>
                <p className="text-xs text-[var(--color-text-dark)]">
                  集合場所
                </p>
              </div>
              <p className="text-sm text-[var(--color-text)] leading-relaxed pl-7">
                {eventInfo.venue.meetingPoint}
              </p>
            </div>

            {/* 地図リンク */}
            {eventInfo.venue.mapUrl && (
              <div className="mt-6 text-center">
                <a
                  href={eventInfo.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-white)] border border-[var(--color-border-light)] rounded-full text-sm text-[var(--color-text)] hover:bg-[var(--color-beige-light)] transition-colors duration-200 shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Google マップで見る
                </a>
              </div>
            )}
          </div>

          {/* 右側: 当日の流れ */}
          <div
            className={`bg-[var(--color-white)] rounded-xl p-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ boxShadow: '0 6px 24px rgba(157, 179, 136, 0.1)' }}
          >
            <h3
              className="text-base font-medium text-[var(--color-text-dark)] mb-6 tracking-wide text-center"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              当日の流れ
            </h3>

            <div className="relative">
              {/* タイムライン線 */}
              <div className="absolute left-[52px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-sage-light)] via-[var(--color-pink-light)] to-[var(--color-sage-light)]" />

              {schedule.items.map((item, index) => (
                <div
                  key={`schedule-${item.time}`}
                  className={`flex items-start mb-6 last:mb-0 transition-all duration-700 ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* 時間 */}
                  <div className="w-12 text-right pr-3">
                    <span className="text-xs font-medium text-[var(--color-text-dark)]">
                      {item.time}
                    </span>
                  </div>

                  {/* ドット */}
                  <div className="relative z-10 w-3 h-3 bg-[var(--color-sage)] rounded-full mt-0.5 shadow-sm" />

                  {/* 内容 */}
                  <div className="pl-4 flex-1 pt-0">
                    <p className="text-sm text-[var(--color-text)] font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-[var(--color-text-light)] mt-8">
              <span className="text-[var(--color-pink)]">✿</span> 時間は目安です{" "}
              <span className="text-[var(--color-pink)]">✿</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
