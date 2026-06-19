import Image from "next/image";
import { hotel, amenities, rooms, faqs } from "@/data/hotel";

export default function Home() {
  const highlights = amenities.filter((a) => a.highlight);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ナビゲーション */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Hotel Prime Inn</p>
            <h1 className="text-lg font-bold text-gray-900">神田</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#rooms" className="hover:text-gray-900">客室</a>
            <a href="#amenities" className="hover:text-gray-900">設備</a>
            <a href="#access" className="hover:text-gray-900">アクセス</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <a
            href="#booking"
            className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition"
          >
            予約する
          </a>
        </div>
      </header>

      <main>
        {/* ヒーロー */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-3">Kanda · Akihabara Tokyo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {hotel.catchcopy.ja}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              iMac・Nintendo Switch 2・Netflix・Disney+・ポケットWi-Fi・ドラム式洗濯機完備。
              <br />上質な設備で、特別な滞在を。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#booking"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-700 transition"
              >
                今すぐ予約する
              </a>
              <a
                href="#rooms"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full text-base hover:bg-gray-50 transition"
              >
                客室を見る
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">公式サイト直接予約 · 最安値保証 · 7日前まで無料キャンセル</p>
          </div>
        </section>

        {/* ハイライト設備 */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
              他にはない充実設備
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center p-5 bg-gray-50 rounded-2xl text-center"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 客室 */}
        <section id="rooms" className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">客室</h2>
            <p className="text-center text-gray-500 mb-10">3室すべて異なるデザイン。リピーターも飽きさせません。</p>
            <div className="grid md:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/${room.images[0]}`}
                      alt={`${room.name.ja} - ホテルプライムイン神田`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{room.name.ja}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{room.floor}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{room.bedType.ja} · 最大{room.maxGuests}名</p>
                    <p className="text-sm text-gray-400 mb-3">{room.switch} 設置</p>
                    <p className="text-sm text-gray-600">{room.description.ja}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 設備写真ギャラリー */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">館内施設</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/shower-1.jpg", alt: "ガラス張りシャワー室" },
                { src: "/laundry-1.jpg", alt: "ドラム式洗濯機・洗面台" },
                { src: "/netflix-tv-1.jpg", alt: "Netflix・大型Sony TV・ソファ" },
                { src: "/toilet-1.jpg", alt: "独立トイレ・ウォシュレット" },
                { src: "/imac-desk-1.jpg", alt: "iMac・ワークデスク" },
                { src: "/sofa-kitchen-1.jpg", alt: "ソファ・キッチン設備" },
              ].map((img) => (
                <div key={img.src} className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                    <p className="text-white text-xs font-medium">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 全設備リスト */}
        <section id="amenities" className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">全室完備の設備</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenities.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-white">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section id="access" className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">アクセス</h2>
            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="font-medium text-gray-900 mb-1">{hotel.name.ja}</p>
              <p className="text-gray-600 text-sm mb-4">{hotel.address.ja}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {hotel.access.map((a) => (
                  <div key={a.station} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <span className="text-xl">🚉</span>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{a.station} 徒歩{a.walk}分</p>
                      <p className="text-xs text-gray-500">{a.line}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3182483474693!2d139.76142757625863!3d35.693785329283486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0044c1dd9f%3A0x1b3554fe51d31118!2sHotel%20Prime%20Inn%20Kanda!5e0!3m2!1sja!2sjp!4v1781849561546!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">よくあるご質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-5">
                  <p className="font-medium text-gray-900 mb-2">Q. {faq.q.ja}</p>
                  <p className="text-gray-600 text-sm">A. {faq.a.ja}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 予約CTA */}
        <section id="booking" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">ご予約</h2>
            <p className="text-gray-400 mb-2">公式サイト直接予約で最安値保証</p>
            <p className="text-gray-400 text-sm mb-8">
              チェックイン {hotel.checkIn} · チェックアウト {hotel.checkOut} · {hotel.cancelPolicy}
            </p>
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-3xl font-bold mb-1">¥{hotel.price.min.toLocaleString()}〜</p>
              <p className="text-gray-400 text-sm">1泊あたり（税込）</p>
            </div>
            <a
              href={hotel.bookingUrl || "#"}
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition"
            >
              空室を確認して予約する
            </a>
            <p className="text-gray-500 text-xs mt-4">Booking.com評価 9.0 · Powered by Beds24</p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">{hotel.name.ja}</p>
          <p className="mb-2">{hotel.address.ja}</p>
          <p className="mb-4">TEL: {hotel.phone}</p>
          <p>© 2025 合同会社プランプラン All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
