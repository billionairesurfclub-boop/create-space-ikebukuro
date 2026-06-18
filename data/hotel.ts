export const hotel = {
  id: "hotel-prime-inn-kanda",
  name: {
    ja: "ホテルプライムイン神田",
    en: "Hotel Prime Inn Kanda",
  },
  catchcopy: {
    ja: "東京に、もうひとつの家を。神田・秋葉原エリア　全室アパートメント型ホテル",
    en: "Your Tokyo Home. Apartment-style hotel in Kanda, steps from Akihabara.",
  },
  address: {
    postalCode: "101-0054",
    ja: "東京都千代田区神田錦町1丁目14番",
    en: "1-14 Kanda Nishikicho, Chiyoda-ku, Tokyo 101-0054",
  },
  area: "神田・秋葉原",
  phone: "08070583086",
  category: "アパートメントホテル",
  website: "https://prime-inn.jp",
  checkIn: "17:00",
  checkOut: "11:00",
  price: {
    min: 30000,
    max: 38000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "https://maps.app.goo.gl/",
  bookingUrl: "",
  rating: {
    google: 4.0,
    bookingCom: 9.0,
  },
  access: [
    { station: "淡路町駅", line: "東京メトロ丸ノ内線", walk: 3 },
    { station: "小川町駅", line: "都営新宿線", walk: 3 },
    { station: "神田駅", line: "JR各線", walk: 13 },
    { station: "秋葉原駅", line: "JR各線・東京メトロ", walk: 13 },
  ],
};

export const amenities = [
  { name: "iMac", nameEn: "iMac", icon: "🖥️", highlight: true },
  { name: "Nintendo Switch 2", nameEn: "Nintendo Switch 2", icon: "🎮", highlight: true },
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Disney+", nameEn: "Disney+", icon: "🎭", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "室内インターネット", nameEn: "In-room Internet", icon: "🌐", highlight: false },
  { name: "ドラム式洗濯機", nameEn: "Drum Washing Machine", icon: "🫧", highlight: true },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "ガラス張りシャワー", nameEn: "Glass Shower", icon: "🚿", highlight: true },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: true },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "Dyson", nameEn: "Dyson Fan", icon: "💨", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型Sony TV", nameEn: "Large Sony TV", icon: "📺", highlight: false },
  { name: "Emma Premiumベッド", nameEn: "Emma Premium Bed", icon: "🛏️", highlight: true },
];

export const rooms = [
  {
    id: "room-king-twin-a",
    floor: "3F",
    name: { ja: "キングツインルームA", en: "King Twin Room A" },
    bedType: { ja: "キングベッド×2", en: "2 King Beds" },
    maxGuests: 4,
    sofaColor: "グリーン",
    switch: "Nintendo Switch",
    theme: { ja: "ボタニカル・温かみ", en: "Botanical & Warm" },
    description: {
      ja: "グリーンのソファとボタニカルアートが彩る、温かみあふれるお部屋。キングサイズのベッド2台で、ファミリーやグループに最適です。",
      en: "A warm and inviting room featuring a green sofa and botanical artwork. Two king-size beds make it perfect for families and groups.",
    },
    images: ["room-king-twin-a-1.jpg"],
  },
  {
    id: "room-king-twin-b",
    floor: "4F",
    name: { ja: "キングツインルームB", en: "King Twin Room B" },
    bedType: { ja: "キングベッド×2", en: "2 King Beds" },
    maxGuests: 4,
    sofaColor: "ベージュ",
    switch: "Nintendo Switch",
    theme: { ja: "カラフル・ポップ", en: "Colorful & Vivid" },
    description: {
      ja: "カラフルなクッションとポップなアートが特徴的な、エネルギッシュなお部屋。キングサイズのベッド2台でゆったりとお過ごしいただけます。",
      en: "An energetic room with colorful cushions and pop art. Two king-size beds offer plenty of space to relax.",
    },
    images: ["room-king-twin-b-1.jpg"],
  },
  {
    id: "room-twin-double",
    floor: "2F",
    name: { ja: "ツインダブルルーム", en: "Twin Double Room" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    sofaColor: "ブルー",
    switch: "Nintendo Switch 2",
    theme: { ja: "シンプル・スタイリッシュ", en: "Simple & Stylish" },
    description: {
      ja: "ブルーのソファとバンクシー風アートが印象的な、スタイリッシュなお部屋。最新のNintendo Switch 2が備わっています。",
      en: "A stylish room with a blue sofa and Banksy-inspired artwork. Features the latest Nintendo Switch 2.",
    },
    images: ["room-twin-double-1.jpg"],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは17時、チェックアウトは11時です。", en: "Check-in is at 17:00, check-out is at 11:00." },
  },
  {
    q: { ja: "ポケットWi-Fiは外出先でも使えますか？", en: "Can I use the Pocket Wi-Fi outside?" },
    a: { ja: "はい、ご滞在中は外出先でもご利用いただけます。東京観光中もインターネットに接続できます。", en: "Yes, you can use it outside during your stay, keeping you connected throughout Tokyo." },
  },
  {
    q: { ja: "洗濯機はありますか？", en: "Is there a washing machine?" },
    a: { ja: "全室にドラム式洗濯機を完備しています。長期滞在にも安心してお使いいただけます。", en: "Yes, all rooms have a drum washing machine, perfect for extended stays." },
  },
  {
    q: { ja: "Nintendo Switch 2はどの部屋にありますか？", en: "Which room has Nintendo Switch 2?" },
    a: { ja: "2FのツインダブルルームにNintendo Switch 2が設置されています。3F・4FのキングツインルームにはNintendo Switchがございます。", en: "The Twin Double Room on 2F has Nintendo Switch 2. King Twin Rooms on 3F/4F have Nintendo Switch." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before your check-in date." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "淡路町駅・小川町駅から徒歩3分です。神田駅・秋葉原駅からは徒歩13分です。", en: "A 3-minute walk from Awajicho and Ogawamachi stations. A 13-minute walk from Kanda and Akihabara stations." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "施設内に駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
];
