export const hotel = {
  id: "create-space-ikebukuro",
  name: {
    ja: "クリエイトスペース東池袋",
    en: "Create Space Higashi-Ikebukuro",
  },
  catchcopy: {
    ja: "池袋で最高のコスパ。清潔・快適・設備充実のホテル",
    en: "Best value in Ikebukuro. Clean, comfortable, fully equipped hotel.",
  },
  address: {
    postalCode: "170-0013",
    ja: "東京都豊島区東池袋2丁目50番4号",
    en: "2-50-4 Higashi-Ikebukuro, Toshima-ku, Tokyo 170-0013",
  },
  area: "池袋",
  phone: "08070583086",
  category: "ホテル",
  website: "https://create-space.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 20000,
    max: 35000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=276774&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "池袋駅", line: "JR各線・東京メトロ・東武・西武", walk: 10 },
  ],
  floors: "4階建て（201・202・301・302・401・402）",
  parking: 0,
  capacity: 4,
  size: 0,
};

export const amenities = [
  { name: "高速インターネット", nameEn: "High-Speed Internet", icon: "🌐", highlight: true },
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: true },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
];

export const rooms = [
  {
    id: "room-201",
    floor: "2F",
    name: { ja: "201号室", en: "Room 201" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "2階の落ち着いた客室。ダブルベッド2台でファミリーやグループに最適。",
      en: "Comfortable room on the 2nd floor with 2 double beds.",
    },
    images: ["room-201-1.png"],
  },
  {
    id: "room-202",
    floor: "2F",
    name: { ja: "202号室", en: "Room 202" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "2階の客室。広々としたスペースでゆったりとお過ごしいただけます。",
      en: "Spacious room on the 2nd floor with 2 double beds.",
    },
    images: ["room-202-1.png"],
  },
  {
    id: "room-301",
    floor: "3F",
    name: { ja: "301号室", en: "Room 301" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "3階の客室。静かな環境でゆっくりとお休みいただけます。",
      en: "Quiet room on the 3rd floor with 2 double beds.",
    },
    images: ["room-301-1.png"],
  },
  {
    id: "room-302",
    floor: "3F",
    name: { ja: "302号室", en: "Room 302" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "3階の客室。充実の設備で快適なご滞在をお楽しみください。",
      en: "Well-equipped room on the 3rd floor with 2 double beds.",
    },
    images: ["room-302-1.png"],
  },
  {
    id: "room-401",
    floor: "4F",
    name: { ja: "401号室", en: "Room 401" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "4階の上層階客室。眺望も楽しめる快適なお部屋です。",
      en: "Upper floor room with a pleasant view and 2 double beds.",
    },
    images: ["room-401-1.png"],
  },
  {
    id: "room-402",
    floor: "4F",
    name: { ja: "402号室", en: "Room 402" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "4階の上層階客室。池袋の街を感じながら快適にお過ごしください。",
      en: "Top floor room overlooking Ikebukuro with 2 double beds.",
    },
    images: ["room-402-1.png"],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。", en: "Check-in is at 16:00, check-out is at 11:00." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "各部屋最大4名までご宿泊いただけます。", en: "Up to 4 guests per room." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "申し訳ございませんが、駐車場はございません。近隣のコインパーキングをご利用ください。", en: "Sorry, no parking is available. Please use nearby coin parking." },
  },
  {
    q: { ja: "池袋駅からどのくらいかかりますか？", en: "How far is it from Ikebukuro Station?" },
    a: { ja: "池袋駅（JR・東京メトロ・東武・西武）から徒歩約10分です。", en: "About 10 minutes walk from Ikebukuro Station." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
  {
    q: { ja: "Wi-Fiはありますか？", en: "Is Wi-Fi available?" },
    a: { ja: "はい、全室高速インターネットをご利用いただけます。", en: "Yes, high-speed internet is available in all rooms." },
  },
];
