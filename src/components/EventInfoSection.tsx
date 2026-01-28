"use client";

import { eventInfo, schedule } from "@/data/content";
import { useInView } from "@/hooks/useInView";

/* チケット風カード */
function TicketCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-[#F4EDE3] rounded-lg overflow-hidden border-2 border-[var(--color-text-dark)]/10 shadow-lg ${className}`}
    >
      {/* 左右の半円切り欠き（チケット風） */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-[var(--color-cream)] rounded-full border-r-2 border-[var(--color-text-dark)]/10"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 bg-[var(--color-cream)] rounded-full border-l-2 border-[var(--color-text-dark)]/10"></div>
      {children}
    </div>
  );
}

export function EventInfoSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-16 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl text-[var(--color-text-light)] select-none pointer-events-none">
        Info
      </div>

      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="section-header mb-12">
          <span className="magazine-label">Information</span>
          <h2 className="section-title">インフォメーション</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Ticket: Date & Venue */}
          <TicketCard className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6 border-b-2 border-dashed border-[var(--color-text-light)]/30 pb-4">
                <div className="flex flex-col">
                  <span className="font-serif text-[var(--color-text-light)] text-sm tracking-widest uppercase mb-1">
                    Date
                  </span>
                  <span className="font-serif text-4xl font-bold text-[var(--color-text-dark)]">
                    {eventInfo.date}
                  </span>
                </div>
                <div className="bg-[var(--color-text-dark)] text-[#F4EDE3] px-4 py-2 rounded-sm font-serif text-base">
                  {eventInfo.dayOfWeek}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="font-serif text-[var(--color-text-light)] text-sm tracking-widest uppercase block mb-1">
                    Time
                  </span>
                  <div className="flex items-baseline gap-3">
                    <p className="font-serif text-2xl">{eventInfo.time}</p>
                    {eventInfo.timeLimit && (
                      <span className="text-sm bg-[var(--color-sage)]/10 text-[var(--color-sage)] px-2 py-0.5 rounded-sm font-bold">
                        {eventInfo.timeLimit}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[var(--color-text-light)] text-sm tracking-widest uppercase block mb-1">
                    Place
                  </span>
                  <p className="font-serif text-2xl font-bold mb-1">
                    {eventInfo.venue.name}
                  </p>
                  <p className="text-base text-[var(--color-text)] mb-4">
                    {eventInfo.venue.address} {eventInfo.venue.floor}
                  </p>

                  <div className="bg-white/50 p-4 border border-[var(--color-text-dark)]/10 rounded-sm text-base">
                    <span className="block text-sm text-[var(--color-sage)] font-bold mb-1">
                      MEETING POINT
                    </span>
                    {eventInfo.venue.meetingPoint}
                  </div>
                </div>
              </div>
            </div>

            {eventInfo.venue.mapUrl && (
              <a
                href={eventInfo.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 border border-[var(--color-text-dark)] text-[var(--color-text-dark)] font-serif text-base hover:bg-[var(--color-text-dark)] hover:text-white transition-colors uppercase tracking-widest"
              >
                View Map
              </a>
            )}
          </TicketCard>

          {/* Right Ticket: Schedule */}
          <TicketCard className="p-6 md:p-8 bg-white border-2 border-[var(--color-sage)]/20 shadow-xl">
            <div className="absolute top-4 left-4 border border-[var(--color-sage)]/30 px-2 py-0.5 text-xs tracking-[0.2em] text-[var(--color-sage)]">
              PROGRAM
            </div>

            <div className="mt-10 space-y-4 relative">
              {/* タイムライン */}
              <div className="absolute left-[4.5rem] top-0 bottom-0 w-[1px] bg-[var(--color-sage)]/20"></div>

              {schedule.items.map((item) => (
                <div
                  key={item.content}
                  className="flex items-start gap-3 relative group"
                >
                  {/* 時刻エリア */}
                  <div className="w-16 text-right shrink-0 pt-0.5">
                    <span className="font-serif text-base text-[var(--color-sage)] font-bold">
                      {item.time}
                    </span>
                  </div>

                  {/* 内容 */}
                  <div className="flex-1 pl-4">
                    <p className="text-base md:text-lg font-medium text-[var(--color-text-dark)] leading-relaxed group-hover:text-[var(--color-sage-dark)] transition-colors">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-[var(--color-border)] text-center text-sm tracking-widest font-serif text-[var(--color-text-light)]">
              時間は目安です
            </div>
          </TicketCard>
        </div>
      </div>
    </section>
  );
}
