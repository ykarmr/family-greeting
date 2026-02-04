import {
  PrintBrideFamily,
  PrintCover,
  PrintEventInfo,
  PrintFuturePlansMessage,
  PrintFuturePlansTimeline,
  PrintGreeting,
  PrintGroomFamily,
  PrintMemoriesPage1,
  PrintMemoriesPage2,
  PrintMenu,
  PrintOurStory,
  PrintProfile,
  PrintQRCode,
  PrintSeating,
} from "./PrintComponents";

/**
 * 印刷用ビュー - 温かみのあるベージュ基調のシンプルデザイン
 */

export function PrintView() {
  return (
    <div className="hidden print:block">
      {/* 1. 表紙 */}
      <div className="print-page">
        <PrintCover />
      </div>

      {/* 2. 挨拶・趣旨 */}
      <div className="print-page">
        <PrintGreeting />
      </div>

      {/* 3. 開催情報（日時・場所） & プログラム */}
      <div className="print-page">
        <PrintEventInfo />
      </div>

      {/* 4. 座席案内 */}
      <div className="print-page">
        <PrintSeating />
      </div>

      {/* 5. 新郎新婦プロフィール */}
      <div className="print-page">
        <PrintProfile />
      </div>

      {/* 6. ふたりのなれそめ */}
      <div className="print-page">
        <PrintOurStory />
      </div>

      {/* 7. ふたりの思い出 */}
      <div className="print-page">
        <PrintMemoriesPage1 />
      </div>
      <div className="print-page">
        <PrintMemoriesPage2 />
      </div>

      {/* 8. 新郎家族の紹介 */}
      <div className="print-page">
        <PrintGroomFamily />
      </div>

      {/* 9. 新婦家族の紹介 */}
      <div className="print-page">
        <PrintBrideFamily />
      </div>

      {/* 10. お料理メニュー */}
      <div className="print-page">
        <PrintMenu />
      </div>

      {/* 11. 結婚後の予定 */}
      <div className="print-page">
        <PrintFuturePlansTimeline />
      </div>
      <div className="print-page">
        <PrintFuturePlansMessage />
      </div>

      <div className="print-page">
        <PrintQRCode />
      </div>

      {/* 12. WEB版への案内 */}
    </div>
  );
}
