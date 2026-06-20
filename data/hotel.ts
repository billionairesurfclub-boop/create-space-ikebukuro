export const hotel = {
  id: "plat-house-shirokanedai",
  name: {
    ja: "ぷらっとハウス白金台",
    en: "Plat House Shirokanedai",
  },
  catchcopy: {
    ja: "白金台に、家族みんなの特別な時間を。3階建て一棟貸し切り",
    en: "Your private retreat in Shirokanedai. Entire 3-story house for families & groups.",
  },
  address: {
    postalCode: "108-0071",
    ja: "東京都港区白金台4丁目16番5号",
    en: "4-16-5 Shirokanedai, Minato-ku, Tokyo 108-0071",
  },
  area: "白金台・広尾",
  phone: "08070583086",
  category: "一棟貸し切り",
  website: "https://plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 40000,
    max: 60000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=305756&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "白金台駅", line: "東京メトロ南北線・都営三田線", walk: 2 },
  ],
  floors: "3階建て（1F駐車場・2F寝室・3Fリビング・4Fサービスルーム）",
  parking: 2,
  capacity: 11,
  size: 80,
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Disney+", nameEn: "Disney+", icon: "🎭", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "10ギガ高速インターネット", nameEn: "10Gbps Internet", icon: "🌐", highlight: true },
  { name: "駐車場2台無料", nameEn: "Free Parking x2", icon: "🚗", highlight: true },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
];

export const rooms = [
  {
    id: "room-2f-a",
    floor: "2F",
    name: { ja: "寝室A（クイーン）", en: "Bedroom A (Queen)" },
    bedType: { ja: "クイーンベッド", en: "Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "2階の寝室。クイーンサイズベッドでゆったりとお休みいただけます。",
      en: "Second floor bedroom with a comfortable queen-size bed.",
    },
    images: ["shiro-bedroom1-01.jpg"],
  },
  {
    id: "room-2f-b",
    floor: "2F",
    name: { ja: "寝室B（クイーン）", en: "Bedroom B (Queen)" },
    bedType: { ja: "クイーンベッド", en: "Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "2階の寝室。クイーンサイズベッドとシングルベッドを完備。",
      en: "Second floor bedroom with queen and single beds.",
    },
    images: ["shiro-bedroom2-01.jpg"],
  },
  {
    id: "room-3f-living",
    floor: "3F",
    name: { ja: "リビング（ソファベッド×2）", en: "Living Room (Sofa Beds x2)" },
    bedType: { ja: "ソファベッド×2", en: "2 Sofa Beds" },
    maxGuests: 4,
    description: {
      ja: "3階の広々としたリビング。ソファベッド2台でグループ利用にも対応。",
      en: "Spacious third floor living room with 2 sofa beds for groups.",
    },
    images: ["shiro-living-01.jpg"],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。", en: "Check-in is at 16:00, check-out is at 11:00." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大11名までご宿泊いただけます。ファミリーや大人数グループでも安心です。", en: "Up to 11 guests can stay. Perfect for families and large groups." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "1階に2台分の無料駐車場があります。事前にご連絡いただく必要はありません。", en: "Free parking for 2 cars is available on the first floor." },
  },
  {
    q: { ja: "一棟まるごと借りられますか？", en: "Can we rent the entire house?" },
    a: { ja: "はい、3階建ての一棟をまるごと貸し切りでご利用いただけます。他のお客様との共用スペースはありません。", en: "Yes, the entire 3-story house is exclusively yours. No shared spaces with other guests." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "白金台駅（東京メトロ南北線・都営三田線）から徒歩2分です。", en: "A 2-minute walk from Shirokanedai Station (Tokyo Metro Namboku Line / Toei Mita Line)." },
  },
  {
    q: { ja: "ポケットWi-Fiは外出先でも使えますか？", en: "Can I use the Pocket Wi-Fi outside?" },
    a: { ja: "はい、ご滞在中は外出先でもご利用いただけます。", en: "Yes, you can use it outside during your stay." },
  },
];
