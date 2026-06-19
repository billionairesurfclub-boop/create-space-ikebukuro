import Link from "next/link";
import { hotel, amenities, rooms, faqs } from "@/data/hotel";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const highlights = amenities.filter((a) => a.highlight);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Plat House</p>
            <h1 className="text-lg font-bold text-gray-900">白金台</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#rooms" className="hover:text-gray-900">間取り</a>
            <a href="#amenities" className="hover:text-gray-900">設備</a>
            <a href="#access" className="hover:text-gray-900">アクセス</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <a href="#booking" className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition">予約する</a>
        </div>
      </header>

      <main>
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-3">Shirokanedai · Minato-ku Tokyo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{hotel.catchcopy.ja}</h2>
            <p className="text-gray-600 text-lg mb-4">最大11名・駐車場2台無料・Netflix・Disney+・Nintendo Switch完備。</p>
            <p className="text-gray-500 text-base mb-8">白金台駅徒歩2分。3階建て一棟まるごと貸し切り。</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#booking" className="bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-700 transition">今すぐ予約する</a>
              <a href="#rooms" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full text-base hover:bg-gray-50 transition">間取りを見る</a>
            </div>
            <p className="text-sm text-gray-400 mt-4">公式サイト直接予約 · 最安値保証 · 7日前まで無料キャンセル</p>
          </div>
        </section>

        <section className="py-10 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">11名</p><p className="text-sm text-gray-500 mt-1">最大宿泊人数</p></div>
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">3階建</p><p className="text-sm text-gray-500 mt-1">一棟まるごと貸切</p></div>
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">80㎡</p><p className="text-sm text-gray-500 mt-1">広々とした空間</p></div>
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">2台</p><p className="text-sm text-gray-500 mt-1">無料駐車場</p></div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">充実の設備</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.name} className="flex flex-col items-center p-5 bg-gray-50 rounded-2xl text-center">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rooms" className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">間取り・寝室</h2>
            <p className="text-center text-gray-500 mb-10">3階建て一棟。寝室・リビング・サービスルームを完備。</p>
            <div className="grid md:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">写真準備中</p>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{room.name.ja}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{room.floor}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{room.bedType.ja} · 最大{room.maxGuests}名</p>
                    <p className="text-sm text-gray-600">{room.description.ja}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">全室完備の設備</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenities.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="access" className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">アクセス</h2>
            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="font-medium text-gray-900 mb-1">{hotel.name.ja}</p>
              <p className="text-gray-600 text-sm mb-4">{hotel.address.ja}</p>
              <div className="space-y-3">
                {hotel.access.map((a) => (
                  <div key={a.station} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <span className="text-xl">🚉</span>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{a.station} 徒歩{a.walk}分</p>
                      <p className="text-xs text-gray-500">{a.line}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-xl">🚗</span>
                  <div>
                    <p className="font-medium text-sm text-gray-900">無料駐車場 2台</p>
                    <p className="text-xs text-gray-500">1階に駐車場完備</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Googleマップ準備中</p>
            </div>
          </div>
        </section>

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

        <section id="booking" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">ご予約</h2>
            <p className="text-gray-400 mb-2">公式サイト直接予約で最安値保証</p>
            <p className="text-gray-400 text-sm mb-8">チェックイン {hotel.checkIn} · チェックアウト {hotel.checkOut} · {hotel.cancelPolicy}</p>
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-3xl font-bold mb-1">¥{hotel.price.min.toLocaleString()}〜</p>
              <p className="text-gray-400 text-sm">1泊あたり（税込）· 最大11名</p>
            </div>
            <a href={hotel.bookingUrl} className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition">空室を確認して予約する</a>
          </div>
        </section>
      </main>

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
