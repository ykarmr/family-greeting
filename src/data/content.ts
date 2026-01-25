// =====================================================
// 顔合わせのしおり - コンテンツデータ
// このファイルを編集して内容をカスタマイズしてください
// =====================================================

export const greeting = {
  title: "ご挨拶",
  message: `本日はお忙しい中、両家顔合わせの会にお集まりいただき
誠にありがとうございます。

これから私たちは夫婦として新しい人生を歩んでまいります。
本日は両家の親睦を深める良い機会となれば幸いです。

どうぞ最後までごゆっくりお過ごしください。`,
};

export const eventInfo = {
  date: "2026年2月7日",
  dayOfWeek: "土",
  time: "午前11時30分より",
  venue: {
    name: "東天紅 LUCIS GARDEN 上野店",
    floor: "9F",
    postalCode: "〒110-8707",
    address: "東京都台東区池之端１丁目４−１ 9F",
    meetingPoint: "当日は1階ロビーにお集まりください。",
    mapUrl: "https://www.google.com/maps/place/%E3%83%AB%E3%83%BC%E3%82%AD%E3%82%B9%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3/@35.7106097,139.7685127,16z/data=!3m1!5s0x60188c26bace2625:0x5e217e59dc7dc174!4m15!1m8!3m7!1s0x60188c26986d78b3:0x3f5d35e552bfd111!2z44Or44O844Kt44K544Ks44O844OH44Oz!8m2!3d35.7106097!4d139.7685127!10e1!16s%2Fg%2F1vzqs7lb!3m5!1s0x60188c26986d78b3:0x3f5d35e552bfd111!8m2!3d35.7106097!4d139.7685127!16s%2Fg%2F1vzqs7lb?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
  },
};

export const schedule = {
  title: "当日の流れ",
  items: [
    { time: "11:15", content: "集合（1階ロビー）" },
    { time: "11:30", content: "入店" },
    { time: "11:35", content: "開会・乾杯のご挨拶" },
    { time: "11:45", content: "お食事スタート" },
    { time: "12:30", content: "自己紹介タイム" },
    { time: "13:30", content: "記念撮影" },
    { time: "14:00", content: "新郎新婦からの今後のご挨拶" },
    { time: "14:15", content: "閉会" },
  ],
};

export const groom = {
  role: "新郎",
  name: "有村 勇樹",
  furigana: "ありむら ゆうき",
  birthDate: "1997年5月8日",
  bloodType: "A型",
  hometown: "鹿児島県鹿児島市",
  job: "IT企業勤務",
  hobbies: ["バドミントン", "お酒", "プログラミング"],
  favorites: ["ラーメン", "寿司", "焼肉", "お酒に合うもの全般"],
  personality: "穏やかで真面目、マイペース",
  message: "これからどうぞよろしくお願いいたします。",
  image: "/images/groom.jpg",
};

export const bride = {
  role: "新婦",
  name: "池上 紗弥香",
  furigana: "いけがみ さやか",
  birthDate: "1998年12月17日",
  bloodType: "O型",
  hometown: "鹿児島県徳之島",
  job: "イベント運営会社勤務",
  hobbies: ["野球観戦(ヤクルトスワローズ)"],
  favorites: ["餃子"],
  personality: "明るく社交的",
  message: "温かい家庭を築いていきたいと思います。",
  image: "/images/bride.jpg",
};

export const ourStory = {
  title: "ふたりのなれそめ",
  content: `私たちは、2024年の春に出会いました。

お互いにお酒が好きという共通点からすぐに意気投合し、
一緒に過ごす時間を重ねるうちに、
自然とお付き合いが始まりました。

出会いから約1年後には同棲をスタート。
日々の何気ない時間を大切にしながら、
二人での生活を築いていきました。

そして約2年間の交際を経て、
2025年12月、
これからの人生を共に歩んでいきたいという
想いを込めて、プロポーズをして
今日という日を迎えることができました。`,
};

export const groomFamily = {
  title: "新郎家族",
  members: [
    {
      relation: "父",
      name: "有村 賢治",
      furigana: "ありむら けんじ",
      description: `定年の年にめでたい報告が聞けてうれしい限りです！。
      鹿児島の焼酎オタクです
      `,
      image: "/images/groom-father.jpg",
    },
    {
      relation: "母",
      name: "有村 智子",
      furigana: "ありむら ともこ",
      description: `還暦を少し過ぎた現在も、看護師として働いております。
      私は種子島出身なので、徳之島にご縁のある紗弥香さんと勇樹が結婚することとなり、大変うれしく、ありがたく思っております。
      ` ,
      image: "/images/groom-mother.jpg",
    },
    {
      relation: "兄",
      name: "有村 大樹",
      furigana: "ありむら だいき",
      description: "大学生。サッカー部で活躍中です。",
      image: "/images/groom-brother.jpg",
    },
  ],
};

export const brideFamily = {
  title: "新婦家族",
  members: [
    {
      relation: "父",
      name: "鈴木 健一",
      furigana: "すずき けんいち",
      description: "会社員。休日は庭いじりを楽しんでいます。",
      image: "/images/bride-father.jpg",
    },
    {
      relation: "母",
      name: "鈴木 美咲",
      furigana: "すずき みさき",
      description: "手芸が趣味。娘の服を手作りしてくれました。",
      image: "/images/bride-mother.jpg",
    },
    {
      relation: "姉",
      name: "鈴木 優子",
      furigana: "すずき ゆうこ",
      description: "既婚。2歳の息子がいます。",
      image: "/images/bride-sister.jpg",
    },
  ],
};

export const menu = {
  title: "お料理メニュー",
  course: "中華コース",
  items: [
    "六種冷菜盛り合わせ",
    "北京ダック",
    "フカヒレスープ",
    "海老のチリソース煮、蒸しパン添え",
    "鎮江黒酢の酢豚",
    "本日の魚料理",
    "あんかけ焼きそば",
    "デザート盛り合せ",
  ],
  drinks: ["ビール", "ワイン", "ソフトドリンク各種"],
};




export const memories = {
  title: "ふたりの思い出",
  images: [
    {
      src: "/images/memory1.jpeg",
      caption: "初めてのデート",
      date: "2023.03",
    },
    {
      src: "/images/memory2.jpeg",
      caption: "旅行の思い出",
      date: "2023.08",
    },
    {
      src: "/images/memory3.jpeg",
      caption: "一緒に過ごした日々",
      date: "2024.05",
    },
    {
      src: "/images/memory4.jpeg",
      caption: "プロポーズの日",
      date: "2025.06",
    },
  ],
};


export const futurePlans = {
  title: "結婚後の予定",
  marry: {
    date: "2026年3月5日（木）",
    note: "入籍手続きのみを行い、結婚式は後日予定しております。",
  },
  wedding: {
    date: "年内予定",
    note: "詳細が決まり次第、改めてご連絡いたします。",
  },

  message: `まだまだ未熟なふたりですが、
お互いを思いやり、
笑顔の絶えない家庭を築いていきたいと思います。

今後ともどうぞよろしくお願いいたします。`,
};


export const closingMessage = {
  title: "本日はありがとうございます",
  message: "今後ともどうぞよろしくお願いいたします。",
};