import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { hotel, amenities, rooms, faqs } from "@/data/hotel";
import { getAllPosts } from "@/lib/blog";

export default function HomeEn() {
  const highlights = amenities.filter((a) => a.highlight);
  const latestPosts = getAllPosts().filter(p => p.lang === "en").slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 relative">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Create Space</p>
            <h1 className="text-lg font-bold text-gray-900">Ikebukuro</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#rooms" className="hover:text-gray-900">Rooms</a>
            <a href="#amenities" className="hover:text-gray-900">Amenities</a>
            <a href="#access" className="hover:text-gray-900">Access</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <Link href="/" className="hover:text-gray-900">日本語</Link>
          </nav>
          <MobileNav
            anchorItems={[
              { label: "Rooms", href: "#rooms" },
              { label: "Amenities", href: "#amenities" },
              { label: "Access", href: "#access" },
              { label: "FAQ", href: "#faq" },
            ]}
            langSwitchLabel="日本語"
            langSwitchHref="/"
          />
          <a href="#booking" className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition">Book Now</a>
        </div>
      </header>

      <main>
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-3">Ikebukuro · Toshima-ku Tokyo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{hotel.catchcopy.en}</h2>
            <p className="text-gray-600 text-lg mb-4">6 rooms · Up to 4 guests · High-speed Internet · Netflix included.</p>
            <p className="text-gray-500 text-base mb-8">10-min walk from Ikebukuro Station. Perfect for sightseeing & business.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#booking" className="bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-700 transition">Book Now</a>
              <a href="#rooms" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full text-base hover:bg-gray-50 transition">View Rooms</a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Best price guarantee · Free cancellation up to 7 days before</p>
          </div>
        </section>

        <section className="py-10 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">6</p><p className="text-sm text-gray-500 mt-1">Total Rooms</p></div>
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">4</p><p className="text-sm text-gray-500 mt-1">Max Guests/Room</p></div>
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">10min</p><p className="text-sm text-gray-500 mt-1">From Ikebukuro Sta.</p></div>
            <div className="p-4"><p className="text-3xl font-bold text-gray-900">4F</p><p className="text-sm text-gray-500 mt-1">Rooms 201-402</p></div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.nameEn} className="flex flex-col items-center p-5 bg-gray-50 rounded-2xl text-center">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{item.nameEn}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rooms" className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Rooms</h2>
            <p className="text-center text-gray-500 mb-10">6 rooms · 2 double beds · Up to 4 guests each</p>
            <div className="grid md:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image src={`/${room.images[0]}`} alt={room.name.en} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{room.name.en}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{room.floor}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{room.bedType.en} · Up to {room.maxGuests} guests</p>
                    <p className="text-sm text-gray-600">{room.description.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">All Room Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenities.map((item) => (
                <div key={item.nameEn} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.nameEn}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="access" className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Access</h2>
            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="font-medium text-gray-900 mb-1">{hotel.name.en}</p>
              <p className="text-gray-600 text-sm mb-4">{hotel.address.en}</p>
              <div className="space-y-3">
                {hotel.access.map((a) => (
                  <div key={a.station} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <span className="text-xl">🚉</span>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{a.station} {a.walk}-min walk</p>
                      <p className="text-xs text-gray-500">{a.line}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64">
              <iframe
                title="Create Space Ikebukuro Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.74179683074!2d139.71706947579!3d35.73256817257074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d657234396d%3A0x240cc5c84f5c4b0d!2z44CSMTcwLTAwMTMg5p2x5Lqs6YO96LGK5bO25Yy65p2x5rGg6KKL77yS5LiB55uu77yV77yQ4oiS77yUIOOCr-ODquOCqOOCpOODiOOCueODmuODvOOCueadseaxoOiiiw!5e0!3m2!1sen!2sjp!4v1781953703407!5m2!1sen!2sjp"
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

        <section id="faq" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-5">
                  <p className="font-medium text-gray-900 mb-2">Q. {faq.q.en}</p>
                  <p className="text-gray-600 text-sm">A. {faq.a.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Book Your Stay</h2>
            <p className="text-gray-500 mb-2">Best price guarantee · Free cancellation up to 7 days before</p>
            <p className="text-gray-500 text-sm mb-8">Check-in {hotel.checkIn} · Check-out {hotel.checkOut} · {hotel.cancelPolicy}</p>
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <p className="text-3xl font-bold mb-1">¥{hotel.price.min.toLocaleString()}〜</p>
              <p className="text-gray-500 text-sm">per night (tax included) · Up to 4 guests</p>
              <p className="text-gray-500 text-xs mt-2">From ~¥5,000 per person (4 guests)</p>
            </div>
            <a href={hotel.bookingUrl} target="_blank" className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition">Book at Best Price</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">{hotel.name.en}</p>
          <p className="mb-2">{hotel.address.en}</p>
          <p className="mb-4">TEL: {hotel.phone}</p>
          <p className="mb-4"><Link href="/privacy" className="underline hover:text-gray-300">Privacy Policy</Link></p>
          <p>© 2025 PlanPlan LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
