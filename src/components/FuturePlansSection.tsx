"use client";

import { futurePlans } from "@/data/content";
import { useInView } from "@/hooks/useInView";



export function FuturePlansSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-cream)] relative overflow-hidden">
      
      <div className={`max-w-4xl mx-auto p-8 md:p-12 bg-white border-t-4 border-[var(--color-sage)] shadow-xl relative transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
         {/* 雑誌風ヘッダー */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-black pb-4">
            <h2 className="font-serif text-4xl font-bold tracking-widest text-[var(--color-text-dark)] uppercase">Future<br/>Plans</h2>
            <span className="font-serif text-sm tracking-[0.3em] mb-1">これからのこと</span>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Plans */}
            <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-xl font-bold border-l-4 border-[var(--color-sage)] pl-4 mb-4 text-[var(--color-text-dark)]">
                     入籍日
                  </h3>
                  <div className="bg-[var(--color-beige-light)] p-6">
                     <p className="font-serif font-bold text-lg mb-2">{futurePlans.marry.date}</p>
                     <p className="text-xs text-[var(--color-text-light)] italic border-t border-[var(--color-border)] pt-2">{futurePlans.marry.note}</p>
                  </div>
               </div>
               <div>
                  <h3 className="font-serif text-xl font-bold border-l-4 border-[var(--color-pink)] pl-4 mb-4 text-[var(--color-text-dark)]">
                     結婚式
                  </h3>
                  <div className="bg-[var(--color-beige-light)] p-6">
                     <p className="font-serif font-bold text-lg mb-2">{futurePlans.wedding.date}</p>
                     <p className="text-xs text-[var(--color-text-light)] italic border-t border-[var(--color-border)] pt-2">{futurePlans.wedding.note}</p>
                  </div>
               </div>
            </div>

            {/* Right Column: Message */}
            <div className="relative">
               {/* 縦書きのメッセージ */}
               <div className="writing-vertical-rl text-lg leading-loose font-serif h-full mx-auto md:ml-auto md:mr-0 text-[var(--color-text)] tracking-wider py-4 border-r border-[var(--color-border)] pr-8 mr-4">
                  {futurePlans.message.split('\n').map((line, i) => (
                     <span key={line} className="mb-4 inline-block">{line}</span>
                  ))}
               </div>
               
               <div className="absolute bottom-0 left-0 w-20 h-20 text-[var(--color-text-light)] opacity-20">
                  <svg viewBox="0 0 100 100" className="animate-[spin_10s_linear_infinite]">
                     <path id="curve" d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent" />
                     <text>
                        <textPath href="#curve" className="text-[10px] tracking-widest uppercase">
                           Building a new life together •
                        </textPath>
                     </text>
                  </svg>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
