"use client";

import {
  bride,
  brideFamily,
  eventInfo,
  futurePlans,
  greeting,
  groom,
  groomFamily,
  memories,
  menu,
  ourStory,
  schedule,
  seating,
  siteUrl,
} from "@/data/content";
import updateEnvPath from "@/utils/updateEnvPath";

/* 装飾用コンポーネント: 植物モチーフ */
const BotanicalDecor = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`w-24 h-24 opacity-10 pointer-events-none ${className}`} fill="currentColor" aria-hidden="true">
    <title>Botanical Ornament</title>
    <path d="M50 90C50 90 20 60 20 35C20 15 35 10 50 30C65 10 80 15 80 35C80 60 50 90 50 90Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 30C50 30 55 50 70 50C85 50 75 35 50 30Z" />
    <path d="M50 45C50 45 45 65 30 65C15 65 25 50 50 45Z" />
    <path d="M50 60C50 60 60 80 75 80C90 80 80 65 50 60Z" />
    <path d="M50 30L50 85" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

/* 装飾用コンポーネント: 角飾り */
const CornerDecor = ({ className = "" }: { className?: string }) => (
  <div className={`w-8 h-8 pointer-events-none ${className}`}>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--color-sage)]/30"></div>
    <div className="absolute top-0 left-0 w-[1px] h-full bg-[var(--color-sage)]/30"></div>
    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[var(--color-sage)]/40"></div>
  </div>
);

/* 共通コンポーネント: 印刷用ページ枠 */
const PrintPage = ({ children, className = "", contentClassName = "" }: { children: React.ReactNode; className?: string; contentClassName?: string }) => (
  <div className={`print-page-container bg-[var(--color-cream)] relative flex flex-col overflow-hidden ${className}`}>
    {/* 背景テクスチャ */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L0 40h40L20 20zM0 0l20 20L40 0H0z' fill='%238da58d' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    />
    {/* 雑誌風の枠線(二重線) */}
    <div className="absolute inset-3 border border-[var(--color-text-dark)] opacity-[0.08] pointer-events-none z-10"></div>
    <div className="absolute inset-4 border border-[var(--color-text-dark)] opacity-[0.04] pointer-events-none z-10"></div>
    
    {/* 角の装飾 */}
    <CornerDecor className="absolute top-6 left-6" />
    <CornerDecor className="absolute top-6 right-6 rotate-90" />
    <CornerDecor className="absolute bottom-6 left-6 -rotate-90" />
    <CornerDecor className="absolute bottom-6 right-6 rotate-180" />
    
    <div className={`relative z-10 flex-1 flex flex-col p-10 ${contentClassName}`}>
      {children}
    </div>
  </div>
);

export function PrintCover() {
  return (
    <PrintPage contentClassName="justify-center items-center">
      {/* 右上のアクセント */}
      <BotanicalDecor className="absolute -top-4 -right-4 w-32 h-32 text-[var(--color-sage)]" />
      {/* 左下のアクセント */}
      <BotanicalDecor className="absolute -bottom-4 -left-4 w-32 h-32 text-[var(--color-sage)] rotate-180" />

      <div className="absolute top-10 left-10 right-10 flex justify-between border-b border-[var(--color-text-dark)]/20 pb-2 text-[10px] font-serif opacity-60">
        <span>Family Greeting Booklet</span>
        <span>2026.02.07</span>
      </div>
      
      <div className="text-center w-full px-10 mb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-[var(--color-sage)] opacity-20">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <title>Title Ribbon Accent</title>
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M20 5L20 35M5 20L35 20" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <h1 className="text-6xl font-bold mb-8 tracking-[0.4em] text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-yomogi)" }}>
          顔合わせの栞
        </h1>
        <div className="w-16 h-[1px] bg-[var(--color-text-dark)] mx-auto mb-6 opacity-30"></div>
        <p className="text-2xl font-serif tracking-widest text-[var(--color-text-dark)]/80">
          有村家 ・ 池上家
        </p>
      </div>

      <div className="w-full max-w-[300px] border border-[var(--color-text-dark)]/10 p-3 bg-white shadow-2xl relative">
        <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[var(--color-sage)]/30"></div>
        <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[var(--color-sage)]/30"></div>
        <div className="aspect-[3/2] bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={updateEnvPath("/images/cover.jpg")} alt="Cover" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xs font-serif tracking-[0.6em] text-black/30 font-light">
          SINCE 2026
        </p>
      </div>
    </PrintPage>
  );
}

/* 2. ご挨拶 */
export function PrintGreeting() {
  return (
    <PrintPage className="justify-center">
      <div className="max-w-md mx-auto bg-white border border-[var(--color-text-dark)]/10 p-12 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-sm">
        {/* インナーフレーム */}
        <div className="absolute inset-3 border border-[var(--color-text-dark)]/5 pointer-events-none"></div>
        
        <BotanicalDecor className="absolute -top-6 -left-6 w-20 h-20 text-[var(--color-sage)]/20" />
        <BotanicalDecor className="absolute -bottom-6 -right-6 w-20 h-20 text-[var(--color-sage)]/20 rotate-180" />
        
        <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-[var(--color-text-dark)]/20"></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-[var(--color-text-dark)]/20"></div>
        
        <h2 className="text-2xl font-serif text-center mb-12 tracking-[0.4em] text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-yomogi)" }}>
          {greeting.title}
        </h2>
        <p className="text-lg leading-[2.8] text-center whitespace-pre-line tracking-[0.2em] font-serif text-[var(--color-text)]" style={{ fontFamily: "var(--font-yomogi)" }}>
          {greeting.message}
        </p>
        <div className="mt-12 text-right text-lg font-serif tracking-widest text-[var(--color-text-light)]" style={{ fontFamily: "var(--font-yomogi)" }}>
          勇樹 & 紗弥香
        </div>
      </div>
    </PrintPage>
  );
}

/* 3. 開催情報 & スケジュール */
export function PrintEventInfo() {
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute top-10 right-4 w-20 h-20 text-[var(--color-sage)]/10 -rotate-12" />
      <BotanicalDecor className="absolute bottom-10 left-4 w-20 h-20 text-[var(--color-sage)]/10 rotate-180" />
      <div className="max-w-sm mx-auto w-full space-y-8">
        <section className="bg-white/60 p-10 border-2 border-[var(--color-text-dark)]/10 shadow-lg relative rounded-sm">
          {/* チケット風の切り欠き */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-[var(--color-cream)] rounded-full border border-[var(--color-text-dark)]/10 shadow-[inset_-2px_0_4px_rgba(0,0,0,0.02)]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 bg-[var(--color-cream)] rounded-full border border-[var(--color-text-dark)]/10 shadow-[inset_2px_0_4px_rgba(0,0,0,0.02)]"></div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-[var(--color-text-dark)]/20"></div>
            <h2 className="text-xl font-serif tracking-widest text-[var(--color-text-dark)]"
              style={{ fontFamily: "var(--font-yomogi)" }}
            >
              案内
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--color-text-dark)]/10"></div>
          </div>
          <div className="space-y-6 text-center">
            <div>
              <span className="text-[10px] font-serif text-[var(--color-text-light)] block mb-1">DATE</span>
              <p className="text-xl font-serif font-bold text-[var(--color-text-dark)]">{eventInfo.date} ({eventInfo.dayOfWeek})</p>
            </div>
            <div>
              <span className="text-[10px] font-serif text-[var(--color-text-light)] block mb-1">PLACE</span>
              <p className="text-lg font-serif font-bold text-[var(--color-text-dark)]">{eventInfo.venue.name}</p>
              <p className="text-[10px] font-serif text-[var(--color-text)] opacity-70">{eventInfo.venue.address}</p>
            </div>
          </div>
        </section>

        <section className="bg-white border-2 border-[var(--color-sage)]/20 p-10 shadow-xl relative rounded-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-[var(--color-text-dark)]/10"></div>
            <h2 className="text-xl font-serif tracking-widest text-[var(--color-text-dark)]"
              style={{ fontFamily: "var(--font-yomogi)" }}
            >
              プログラム
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--color-text-dark)]/10"></div>
          </div>
          <div className="space-y-3">
            {schedule.items.map((item) => (
              <div key={item.time} className="flex gap-6 items-baseline justify-center border-b border-dotted border-[var(--color-border)] pb-2 last:border-0">
                <span className="text-sm font-serif font-bold w-12 text-[var(--color-sage)]">{item.time}</span>
                <span className="text-sm font-serif text-[var(--color-text)] flex-1 text-left">{item.content}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PrintPage>
  );
}

/* 4. 座席案内 */
export function PrintSeating() {
  return (
    <PrintPage contentClassName="justify-center items-center">
      <h2 className="text-xl font-serif text-center mb-16 tracking-widest text-[var(--color-text-dark)]"
        style={{ fontFamily: "var(--font-yomogi)" }}
      >
        {seating.title}
      </h2>
      
      <div className="relative w-[280px] h-[280px] flex items-center justify-center">
        {/* 会場の壁イメージ */}
        <div className="absolute inset-[-20px] border-2 border-dashed border-[var(--color-text-dark)]/5 rounded-full pointer-events-none"></div>
        
        {/* 装飾用のリング */}
        <div className="absolute inset-0 border border-[var(--color-sage)]/10 rounded-full scale-105"></div>
        
        <div className="relative w-full h-full border-2 border-[var(--color-sage)]/20 rounded-full flex items-center justify-center bg-white shadow-inner">
          <BotanicalDecor className="absolute top-4 left-4 w-12 h-12 text-[var(--color-sage)]/10" />
          <BotanicalDecor className="absolute bottom-4 right-4 w-12 h-12 text-[var(--color-sage)]/10 rotate-180" />
          
          <div className="w-[120px] h-[120px] border border-[var(--color-sage)]/40 rounded-full flex flex-col items-center justify-center font-serif bg-white z-10 shadow-md">
            <span className="text-[10px] text-[var(--color-sage)] mb-1 opacity-60">TABLE</span>
            <span className="text-lg font-bold">{seating.table.name}</span>
          </div>
          
          {seating.table.positions.map((pos) => {
            const rad = ((pos.angle - 90) * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(rad);
            const y = 50 + 42 * Math.sin(rad);

            return (
              <div
                key={pos.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap bg-white/95 px-3 py-1.5 border border-[var(--color-sage)]/20 rounded-sm font-serif text-[11px] font-bold shadow-sm z-20"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {pos.name}
              </div>
            );
          })}
        </div>

        {/* 入り口 */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-[var(--color-text-dark)] text-white px-5 py-2 rounded-full text-[9px] tracking-[0.2em] font-bold uppercase shadow-md whitespace-nowrap">
            Entrance / 入り口
          </div>
          {/* 入り口からテーブルへの案内ライン */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-[1px] h-8 border-l border-dashed border-[var(--color-text-dark)]/20"></div>
        </div>
      </div>

      <p className="mt-24 text-[10px] font-serif text-[var(--color-text-light)] text-center opacity-60">
        ※当日の状況により変更になる場合がございます
      </p>
    </PrintPage>
  );
}

/* 装飾用コンポーネント: マスキングテープ */
const TapeDecor = ({ className = "" }: { className?: string }) => (
  <div className={`h-4 w-12 bg-[#E6DCC8]/60 shadow-sm border-x border-white/20 -rotate-2 ${className}`}></div>
);

/* 5. プロフィール */
export function PrintProfile() {
  const ProfileItem = ({ label, value }: { label: string; value: string | string[] }) => (
    <div className="mb-2.5">
      <span className="text-[8px] font-bold text-[var(--color-text-light)]/60 tracking-widest block uppercase mb-0.5">{label}</span>
      <p className="text-[11px] font-serif text-[var(--color-text-dark)] leading-snug">{Array.isArray(value) ? value.join("、") : value}</p>
    </div>
  );

  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute top-10 right-10 w-24 h-24 text-[var(--color-sage)]/10" />
      <h2 className="text-xl font-serif text-center mb-10 tracking-widest text-[var(--color-text-dark)]"
        style={{ fontFamily: "var(--font-yomogi)" }}
      >
        プロフィール
      </h2>

      <div className="max-w-md mx-auto w-full border border-[var(--color-text-dark)]/10 p-10 bg-white shadow-xl relative rounded-sm">
        {/* インナー装飾 */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[var(--color-text-dark)]/5"></div>
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[var(--color-text-dark)]/5"></div>

        <div className="space-y-12 relative">
          {/* 新郎 */}
          <div className="flex gap-8 items-start relative pb-8 border-b border-dashed border-[var(--color-border-light)]">
            <div className="relative shrink-0">
              <TapeDecor className="absolute -top-2 left-1/2 -translate-x-1/2 z-20" />
              <div className="w-28 aspect-[3/4] border-4 border-white shadow-xl rotate-[-2deg] bg-[#f9f9f9] overflow-hidden relative">
                <img src={groom.image} alt={groom.name} className="w-full h-full object-cover grayscale-[10%]" width={112} height={149} />
                <div className="absolute inset-x-0 bottom-0 bg-white/80 py-1 text-center">
                   <p className="text-[9px] font-bold tracking-widest text-[var(--color-sage-dark)]">GROOM</p>
                </div>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-dark)] mb-0.5" style={{ fontFamily: "var(--font-yomogi)" }}>{groom.name}</h3>
                <p className="text-[10px] text-[var(--color-text-light)] uppercase tracking-[0.2em] font-light">{groom.furigana}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <ProfileItem label="Birthday" value={groom.birthDate} />
                <ProfileItem label="From" value={groom.hometown} />
                <ProfileItem label="Personality" value={groom.personality} />
                <ProfileItem label="Job" value={groom.job} />
              </div>
              <div className="mt-2 text-[10px] font-serif italic text-[var(--color-text-light)] border-t border-[var(--color-border-light)] pt-2 line-clamp-2">
                "{groom.message}"
              </div>
            </div>
          </div>

          {/* 新婦 */}
          <div className="flex gap-8 items-start flex-row-reverse text-left relative">
            <div className="relative shrink-0 text-left">
              <TapeDecor className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 rotate-1" />
              <div className="w-28 aspect-[3/4] border-4 border-white shadow-xl rotate-[2deg] bg-[#f9f9f9] overflow-hidden relative">
                <img src={bride.image} alt={bride.name} className="w-full h-full object-cover grayscale-[10%]" width={112} height={149} />
                <div className="absolute inset-x-0 bottom-0 bg-white/80 py-1 text-center">
                   <p className="text-[9px] font-bold tracking-widest text-[var(--color-pink-dark)]">BRIDE</p>
                </div>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <div className="mb-6 text-left">
                <h3 className="text-xl font-serif font-bold text-[var(--color-text-dark)] mb-0.5" style={{ fontFamily: "var(--font-yomogi)" }}>{bride.name}</h3>
                <p className="text-[10px] text-[var(--color-text-light)] uppercase tracking-[0.2em] font-light">{bride.furigana}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-left">
                <ProfileItem label="Birthday" value={bride.birthDate} />
                <ProfileItem label="From" value={bride.hometown} />
                <ProfileItem label="Personality" value={bride.personality} />
                <ProfileItem label="Job" value={bride.job} />
              </div>
              <div className="mt-2 text-[10px] font-serif italic text-[var(--color-text-light)] border-t border-[var(--color-border-light)] pt-2 line-clamp-2">
                "{bride.message}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrintPage>
  );
}

/* 6. なれそめ */
export function PrintOurStory() {
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute bottom-10 left-10 w-24 h-24 text-[var(--color-sage)]/10 rotate-180" />
      <div className="max-w-[420px] mx-auto bg-white border border-[var(--color-text-dark)]/10 p-12 relative shadow-2xl">
        {/* Negative Film Decorations (Vertical) */}
        <div className="absolute -left-6 top-0 bottom-0 w-4 flex flex-col justify-around py-6 bg-[#1a1a1a] rounded-sm">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={`film-l-${i}`} className="w-2.5 h-3 bg-white/20 rounded-[1px] mx-auto"></div>
          ))}
        </div>
        <div className="absolute -right-6 top-0 bottom-0 w-4 flex flex-col justify-around py-6 bg-[#1a1a1a] rounded-sm">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={`film-r-${i}`} className="w-2.5 h-3 bg-white/20 rounded-[1px] mx-auto"></div>
          ))}
        </div>

        {/* Cinematic Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[var(--color-sage-dark)] uppercase opacity-60 mb-2 block">Our Story</span>
          <h2 className="text-2xl font-serif tracking-[0.4em] text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-yomogi)" }}>
            {ourStory.title}
          </h2>
          <div className="w-8 h-[1px] bg-[var(--color-text-dark)]/20 mx-auto mt-4"></div>
        </div>

        <p className="text-base leading-[2.8] font-serif text-center whitespace-pre-line tracking-[0.15em] text-[var(--color-text)] relative z-10" style={{ fontFamily: "var(--font-yomogi)" }}>
          {ourStory.content}
        </p>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/film-grain.png")' }}></div>
      </div>
    </PrintPage>
  );
}

/* 7. 思い出 (Page 1) */
export function PrintMemoriesPage1() {
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute top-10 right-10 w-24 h-24 text-[var(--color-sage)]/10" />
      <h2 className="text-xl font-serif text-center mb-12 tracking-widest text-[var(--color-text-dark)]"
        style={{ fontFamily: "var(--font-yomogi)" }}
      >
        ふたりの歩み (1)
      </h2>
      <div className="max-w-md mx-auto grid grid-cols-2 gap-x-8 gap-y-12 w-full px-4">
        {memories.images.slice(0, 6).map((img, i) => (
          <div key={`memory1-${img.src}-${i}`} className="relative group">
            <TapeDecor className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-8 h-3 opacity-40 group-even:rotate-2 group-odd:-rotate-2" />
            <div className="bg-white p-2 border border-[var(--color-border-light)] shadow-lg relative h-full transition-transform duration-500 hover:scale-[1.02]">
              <div className="aspect-[4/3] bg-[#f9f9f9] overflow-hidden mb-3">
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover grayscale-[5%]" />
              </div>
              <div className="px-1 text-center">
                <p className="text-[10px] font-serif font-bold text-[var(--color-text-dark)] line-clamp-1 mb-0.5">{img.caption}</p>
                <div className="flex items-center justify-center gap-2 opacity-50">
                   <div className="h-[0.5px] w-4 bg-[var(--color-text-light)]"></div>
                   <p className="text-[8px] text-[var(--color-text-light)] tracking-widest">{img.date}</p>
                   <div className="h-[0.5px] w-4 bg-[var(--color-text-light)]"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PrintPage>
  );
}

/* 7b. 思い出 (Page 2) */
export function PrintMemoriesPage2() {
  const remainingImages = memories.images.slice(6, 12);
  
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute bottom-10 left-10 w-24 h-24 text-[var(--color-sage)]/10 rotate-180" />
      <h2 className="text-xl font-serif text-center mb-12 tracking-widest text-[var(--color-text-dark)]"
        style={{ fontFamily: "var(--font-yomogi)" }}
      >
        ふたりの歩み (2)
      </h2>
      
      {remainingImages.length > 0 ? (
        <div className="max-w-md mx-auto grid grid-cols-2 gap-x-8 gap-y-12 w-full px-4">
          {remainingImages.map((img, i) => (
            <div key={`memory2-${img.src}-${i}`} className="relative group">
              <TapeDecor className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-8 h-3 opacity-40 group-even:rotate-2 group-odd:-rotate-2" />
              <div className="bg-white p-2 border border-[var(--color-border-light)] shadow-lg relative h-full">
                <div className="aspect-[4/3] bg-[#f9f9f9] overflow-hidden mb-3">
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover grayscale-[5%]" />
                </div>
                <div className="px-1 text-center">
                  <p className="text-[10px] font-serif font-bold text-[var(--color-text-dark)] line-clamp-1 mb-0.5">{img.caption}</p>
                  <div className="flex items-center justify-center gap-2 opacity-50">
                    <div className="h-[0.5px] w-4 bg-[var(--color-text-light)]"></div>
                    <p className="text-[8px] text-[var(--color-text-light)] tracking-widest">{img.date}</p>
                    <div className="h-[0.5px] w-4 bg-[var(--color-text-light)]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-[var(--color-border-light)] mx-10 rounded-lg">
          <p className="text-sm font-serif text-[var(--color-text-light)] italic">No more memories found.</p>
        </div>
      )}

      <div className="mt-16 text-center">
        <p className="text-[10px] text-[var(--color-text-light)] font-serif italic tracking-widest opacity-60">
          ... and hundreds of more memories await on the Web edition
        </p>
      </div>
    </PrintPage>
  );
}

/* 8. 家族紹介 (新郎) */
export function PrintGroomFamily() {
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute top-20 right-4 w-16 h-16 text-[var(--color-sage)]/5" />
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-xl font-serif mb-10 border-b border-[var(--color-sage)]/20 pb-4 text-center tracking-widest text-[var(--color-text-dark)]"
          style={{ fontFamily: "var(--font-yomogi)" }}
        >
          {groomFamily.title}
        </h2>
        <div className="space-y-5">
          {groomFamily.members.map((member) => (
            <div key={`${groomFamily.title}-${member.name}`} className="flex gap-6 items-start bg-white/60 p-5 shadow-sm relative overflow-hidden group border-l-2 border-[var(--color-sage)]/20">
              <div className="relative shrink-0 pt-2">
                <TapeDecor className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 w-8 h-3 opacity-50" />
                <div className="w-16 h-20 border-2 border-white shadow-md bg-[#f9f9f9] overflow-hidden relative rotate-[-1deg]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[10%]" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2 pb-1 border-b border-dotted border-[var(--color-border-light)]">
                  <span className="text-[8px] font-bold text-[var(--color-sage-dark)] tracking-widest opacity-60 uppercase">{member.relation}</span>
                  <span className="text-base font-bold font-serif text-[var(--color-text-dark)]">{member.name}</span>
                </div>
                <p className="text-[10px] font-serif leading-relaxed text-[var(--color-text)] opacity-90">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrintPage>
  );
}

/* 9. 家族紹介 (新婦) */
export function PrintBrideFamily() {
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute top-20 left-4 w-16 h-16 text-[var(--color-pink)]/5 -rotate-90" />
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-xl font-serif mb-10 border-b border-[var(--color-pink)]/20 pb-4 text-center tracking-widest text-[var(--color-text-dark)]"
          style={{ fontFamily: "var(--font-yomogi)" }}
        >
          {brideFamily.title}
        </h2>
        <div className="space-y-5">
          {brideFamily.members.map((member) => (
            <div key={`${brideFamily.title}-${member.name}`} className="flex gap-6 items-start flex-row-reverse text-left bg-white/60 p-5 shadow-sm relative overflow-hidden group border-r-2 border-[var(--color-pink)]/20">
              <div className="relative shrink-0 pt-2 text-left">
                <TapeDecor className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 w-8 h-3 opacity-50 rotate-1" />
                <div className="w-16 h-20 border-2 border-white shadow-md bg-[#f9f9f9] overflow-hidden relative rotate-[1deg]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[10%]" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2 pb-1 border-b border-dotted border-[var(--color-border-light)]">
                  <span className="text-[8px] font-bold text-[var(--color-pink-dark)] tracking-widest opacity-60 uppercase">{member.relation}</span>
                  <span className="text-base font-bold font-serif text-[var(--color-text-dark)]">{member.name}</span>
                </div>
                <p className="text-[10px] font-serif leading-relaxed text-[var(--color-text)] opacity-90">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrintPage>
  );
}

/* 10. お料理メニュー */
export function PrintMenu() {
  return (
    <PrintPage contentClassName="justify-center items-center">
      <BotanicalDecor className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-[var(--color-sage)]/[0.03]" />
      <div className="max-w-md mx-auto w-full border-[3px] border-double border-[var(--color-text-dark)]/20 p-12 bg-white relative shadow-xl">
        {/* 装飾用の角 */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--color-text-dark)]/10"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--color-text-dark)]/10"></div>
        
        <h2 className="text-2xl font-serif text-center mb-12 tracking-[0.4em] text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-yomogi)" }}>
          お品書き
        </h2>
        <div className="space-y-8 text-center px-4">
          <div className="space-y-4">
            {menu.items.map((item) => (
              <p key={item} className="text-base font-serif text-[var(--color-text-dark)] font-bold tracking-[0.2em]">
                {item}
              </p>
            ))}
          </div>
          <div className="pt-8 border-t border-dotted border-[var(--color-text-dark)]/20">
            <span className="text-[10px] bg-[var(--color-text-dark)] text-white px-3 py-0.5 tracking-widest mb-4 inline-block rounded-sm">お飲み物</span>
            <p className="text-[10px] font-serif text-[var(--color-text)] leading-relaxed">
              {menu.drinks.join("　・　")}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-12 text-[10px] font-serif text-[var(--color-text-light)] text-center italic opacity-60">
        Bon Appétit
      </p>
    </PrintPage>
  );
}

/* 11. これからの予定 */
export function PrintFuturePlans() {
  return (
    <PrintPage contentClassName="justify-center">
      <BotanicalDecor className="absolute bottom-10 right-10 w-32 h-32 text-[var(--color-sage)]/5 rotate-12" />
      <div className="max-w-md mx-auto w-full px-4">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[var(--color-sage-dark)] uppercase opacity-60 mb-2 block">Road to Marriage</span>
          <h2 className="text-2xl font-serif text-center tracking-widest text-[var(--color-text-dark)]"
            style={{ fontFamily: "var(--font-yomogi)" }}
          >
            これからの予定
          </h2>
          <div className="w-8 h-[1px] bg-[var(--color-text-dark)]/20 mx-auto mt-4"></div>
        </div>
        
        {/* Timeline Layout */}
        <div className="relative space-y-16 mb-20">
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-dashed border-l border-dashed border-[var(--color-text-dark)]/20"></div>

          {/* Item 1 */}
          <div className="relative flex items-center justify-between group">
            <div className="w-[45%] text-right pr-8">
              <span className="text-[10px] font-bold text-[var(--color-sage-dark)] tracking-widest uppercase mb-1 block">Registration</span>
              <p className="text-lg font-serif font-bold text-[var(--color-text-dark)]">{futurePlans.marry.date}</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[var(--color-sage)] rounded-full z-10 shadow-sm"></div>
            <div className="w-[45%] pl-8">
              <p className="text-xs font-serif text-[var(--color-text-light)]">入籍日</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-between group">
            <div className="w-[45%] text-right pr-8">
              <p className="text-xs font-serif text-[var(--color-text-light)]">結婚式</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[var(--color-pink)] rounded-full z-10 shadow-sm"></div>
            <div className="w-[45%] pl-8">
              <span className="text-[10px] font-bold text-[var(--color-pink-dark)] tracking-widest uppercase mb-1 block">Wedding Ceremony</span>
              <p className="text-lg font-serif font-bold text-[var(--color-text-dark)]">{futurePlans.wedding.date}</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-white border border-[var(--color-border-light)] relative shadow-xl overflow-hidden rounded-sm">
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[var(--color-text-dark)]/10"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[var(--color-text-dark)]/10"></div>
          <BotanicalDecor className="absolute -bottom-6 -right-6 w-24 h-24 text-[var(--color-sage)]/10 rotate-180" />
          
          <p className="text-base leading-[3] font-serif text-center whitespace-pre-line tracking-[0.2em] text-[var(--color-text-dark)] relative z-10" style={{ fontFamily: "var(--font-yomogi)" }}>
            {futurePlans.message}
          </p>
        </div>
      </div>
    </PrintPage>
  );
}

/* 12. Web版QRコード */
export function PrintQRCode() {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(siteUrl)}`;

  return (
    <PrintPage contentClassName="justify-center items-center">
      <BotanicalDecor className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-[var(--color-sage)]/[0.05]" />
      
      <div className="text-center w-full px-10 mb-16 relative">
        <h2 className="text-2xl font-serif mb-4 tracking-[0.3em] text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-yomogi)" }}>
          WEB版のご案内
        </h2>
        <div className="w-12 h-[1px] bg-[var(--color-text-dark)] mx-auto mb-6 opacity-30"></div>
        <p className="text-sm font-serif leading-relaxed text-[var(--color-text)]">
          本日はお集まりいただき、誠にありがとうございます。<br />
          スマートフォンでも、ふたりのプロフィールや思い出の写真などを<br />
          ご覧いただけます。
        </p>
      </div>

      <div className="bg-white p-6 shadow-2xl border border-[var(--color-border-light)] relative group">
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-sage)]/30"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-sage)]/30"></div>
        
        <div className="w-40 h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
          <img 
            src={qrCodeUrl} 
            alt="Web Version QR Code" 
            className="w-full h-full p-2"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] font-serif text-[var(--color-text-light)] tracking-widest opacity-60">
          {siteUrl}
        </p>
      </div>
    </PrintPage>
  );
}

