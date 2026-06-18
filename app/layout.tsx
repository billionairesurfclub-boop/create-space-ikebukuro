import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ホテルプライムイン神田 | 神田・秋葉原 アパートメントホテル",
  description:
    "神田・秋葉原エリア徒歩圏内。iMac・Nintendo Switch 2・Netflix・Disney+・ポケットWi-Fi・ドラム式洗濯機完備の全室アパートメント型ホテル。直接予約で最安値保証。",
  keywords:
    "ホテルプライムイン神田, 神田ホテル, 秋葉原ホテル, アパートメントホテル, iMacホテル, Nintendo Switch 2 ホテル, Netflix ホテル, 洗濯機付きホテル, 東京ファミリーホテル",
  openGraph: {
    title: "ホテルプライムイン神田 | 神田・秋葉原 アパートメントホテル",
    description:
      "iMac・Switch 2・Netflix・Disney+・ポケットWi-Fi・洗濯機完備。神田・秋葉原エリアのアパートメント型ホテル。",
    url: "https://prime-inn.jp",
    siteName: "Hotel Prime Inn Kanda",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
