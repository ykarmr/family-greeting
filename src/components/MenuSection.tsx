"use client";

import { menu } from "@/data/content";
import { useInView } from "@/hooks/useInView";

export function MenuSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-beige-light)] relative overflow-hidden">
        {/* 背景テクスチャ */}
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* メニューカード本体 */}
        <div className="relative bg-white p-8 md:p-12 shadow-2xl rotate-1 mx-auto max-w-3xl">
           {/* クリップ/テープ風装飾 */}
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#E6DCC8] opacity-80 shadow-sm transform -rotate-1"></div>

           {/* インナーフレーム */}
           <div className="border-[3px] border-double border-[var(--color-coffee)]/20 h-full p-6 md:p-10 relative">
              
              {/* タイトルエリア */}
              <div className="text-center mb-12">
                 <div className="inline-block border-b-2 border-[var(--color-text-dark)] pb-2 mb-2">
                    <span className="font-serif font-bold text-3xl tracking-[0.2em] text-[var(--color-text-dark)]">本日のメニュー</span>
                 </div>
                 <p className="font-serif text-base text-[var(--color-text-light)] tracking-widest">{menu.course}</p>
              </div>

              {/* メニューリスト */}
              <div className="space-y-6">
                {menu.items.map((item) => (
                  <div key={item} className="flex items-baseline gap-4 group">
                    <span className="font-serif text-[var(--color-text-dark)] text-xl group-hover:text-[var(--color-sage-dark)] transition-colors duration-300 break-words overflow-wrap-anywhere">
                      {item}
                    </span>
                    <div className="flex-1 border-b border-dotted border-[var(--color-text-light)] opacity-40 relative -top-1"></div>
                    <span className="text-[10px] text-[var(--color-text-light)] tracking-widest shrink-0 font-serif opacity-0 group-hover:opacity-100 transition-opacity">SPECIAL</span>
                  </div>
                ))}
              </div>

              {/* ドリンク */}
              <div className="mt-16 pt-8 border-t border-[var(--color-text-light)]/20 text-center">
                 <span className="inline-block bg-[var(--color-text-dark)] text-white text-xs px-4 py-1 tracking-widest mb-4 font-serif rounded-sm">お飲み物</span>
                  <p className="font-serif text-[var(--color-text)] leading-loose break-words overflow-wrap-anywhere">
                    {menu.drinks.join("　・　")}
                  </p>
               </div>

               {/* 2時間制の注釈 */}
               <div className="mt-8 text-center">
                  <p className="text-[var(--color-text-light)] text-xs tracking-widest">
                     ※お席は2時間制となっております。
                  </p>
               </div>
           </div>
        </div>

      </div>
    </section>
  );
}
