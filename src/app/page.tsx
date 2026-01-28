import { ClosingSection } from "@/components/ClosingSection";
import { CoverSection } from "@/components/CoverSection";
import { EventInfoSection } from "@/components/EventInfoSection";
import {
  BrideFamilySection,
  GroomFamilySection,
} from "@/components/FamilySection";
import { FuturePlansSection } from "@/components/FuturePlansSection";
import { GreetingSection } from "@/components/GreetingSection";
import { MemoriesSection } from "@/components/MemoriesSection";
import { MenuSection } from "@/components/MenuSection";
import {
  OurStorySection,
  ProfileIntroSection,
} from "@/components/ProfileSection";
import { PrintView } from "@/components/print/PrintView";
import { SeatingSection } from "@/components/SeatingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--retro-cream)] print:bg-white">
      {/* Web表示用 - 印刷時は非表示 */}
      <main className="w-full bg-[var(--retro-cream)] print:hidden">
        {/* 1. 表紙 */}
        <CoverSection />

        {/* 2. 挨拶・趣旨 */}
        <GreetingSection />

        {/* 3. 開催情報（日時・場所） */}
        <EventInfoSection />

        {/* 4. 座席案内 */}
        <SeatingSection />

        {/* 5. 新郎新婦プロフィール */}
        <ProfileIntroSection />

        {/* 6. ふたりのなれそめ */}
        <OurStorySection />

        {/* 6. ふたりの思い出（スライドショー） */}
        <MemoriesSection />

        {/* 7. 新郎家族の紹介 */}
        <GroomFamilySection />

        {/* 8. 新婦家族の紹介 */}
        <BrideFamilySection />

        {/* 9. お料理メニュー */}
        <MenuSection />

        {/* 10. 結婚後の予定・今後について */}
        <FuturePlansSection />

        {/* 11. クロージング */}
        <ClosingSection />
      </main>

      {/* 印刷用 - Web表示時は非表示 */}
      <PrintView />
    </div>
  );
}
