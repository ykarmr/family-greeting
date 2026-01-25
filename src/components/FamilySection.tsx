"use client";

import { brideFamily, groomFamily } from "@/data/content";
import { useInView } from "@/hooks/useInView";

type FamilyData = typeof groomFamily | typeof brideFamily;



/* スクラップブック風カード */
function ScrapbookCard({
  data,
  isGroom,
  isInView,
}: {
  data: FamilyData;
  isGroom: boolean;
  isInView: boolean;
}) {
  const accentColor = isGroom ? "var(--color-sage)" : "var(--color-pink)";
  
  return (
    <div className={`relative p-8 md:p-12 transition-all duration-1000 ${isInView ? "opacity-100 rotate-0" : "opacity-0 rotate-1"}`}>
        {/* 背景の紙 */}
        <div className="absolute inset-0 bg-[#F8F4E8] shadow-lg transform rotate-[-1deg] border border-[var(--color-border-light)] z-0"></div>
        
        {/* マスキングテープ */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E8E0D0] opacity-90 shadow-sm z-20 rotate-2 mix-blend-multiply"></div>

        <div className="relative z-10">
           <h3 className="font-serif text-2xl text-center mb-10 tracking-[0.2em] text-[var(--color-text-dark)] border-b-2 border-dotted border-[var(--color-border)] pb-4 inline-block w-full">
              {data.title}
           </h3>

           <div className="space-y-12">
              {data.members.map((member) => (
                 <div key={member.name} className="flex gap-6 items-start relative group">
                    {/* 写真枠 */}
                    <div className="w-20 h-24 bg-[#E0D8CC] shadow-inner relative shrink-0 overflow-hidden transform rotate-1 group-even:-rotate-1 transition-transform hover:scale-105 duration-300">
                       {/* 写真の四隅 (Photo Corners) */}
                       <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-[var(--color-coffee)]/40 z-20"></div>
                       <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-[var(--color-coffee)]/40 z-20"></div>
                       <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-[var(--color-coffee)]/40 z-20"></div>
                       <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-[var(--color-coffee)]/40 z-20"></div>
                       
                       {member.image ? (
                         <img
                           src={member.image}
                           alt={`${member.relation} ${member.name}`}
                           className="absolute inset-0 w-full h-full object-contain"
                         />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center">
                           <span className="text-3xl opacity-50 filter grayscale">
                             {member.relation === "父" && "👨"}
                             {member.relation === "母" && "👩"}
                             {member.relation.match(/(兄|弟)/) && "👦"}
                             {member.relation.match(/(姉|妹)/) && "👧"}
                             {!["父", "母"].includes(member.relation) && !member.relation.match(/(兄|弟|姉|妹)/) && "👤"}
                           </span>
                         </div>
                       )}
                    </div>

                    {/* テキスト情報 */}
                    <div className="flex-1 pt-2">
                       <div className="flex items-baseline gap-3 mb-1">
                          <span className="font-serif text-[var(--color-text-dark)] text-lg border-b border-[var(--color-text-light)]/50 pb-0.5" style={{ color: accentColor }}>
                             {member.relation}
                          </span>
                          <span className="font-serif text-xl font-bold text-[var(--color-text-dark)]">
                             {member.name}
                          </span>
                       </div>
                       <p className="text-[10px] text-[var(--color-text-light)] mb-2 tracking-wider">{member.furigana}</p>
                       <p className="font-handwritten text-[var(--color-text)] text-sm leading-7 relative">
                          {/* 罫線風背景 */}
                          <span className="absolute inset-0 block" style={{backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #E5E5E5 28px)"}}></span>
                          <span className="relative z-10 block pt-[4px]">{member.description}</span>
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
    </div>
  );
}

export function GroomFamilySection() {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-cream)] overflow-hidden">
       <div className="max-w-4xl mx-auto">
          <ScrapbookCard data={groomFamily} isGroom={true} isInView={isInView} />
       </div>
    </section>
  );
}

export function BrideFamilySection() {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-cream)] overflow-hidden relative">
       {/* 連結用の装飾ライン */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 border-l border-dashed border-[var(--color-text-light)] opacity-30"></div>
       <div className="max-w-4xl mx-auto">
          <ScrapbookCard data={brideFamily} isGroom={false} isInView={isInView} />
       </div>
    </section>
  );
}

export function FamilySection() {
  return (
    <>
      <GroomFamilySection />
      <BrideFamilySection />
    </>
  );
}
