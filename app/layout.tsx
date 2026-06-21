import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "NBCzX_w_wF2RdfjdOVZcRXM0ZB57hSsgI35-j8f5dW8",
  },
  title: "クリエイトスペース池袋 | 池袋 全6室・高速インターネット完備のホテル",
  description:
    "池袋駅徒歩10分。全6室・最大4名・高速インターネット・Netflix完備。ファミリー・グループ旅行・ビジネスに最適。公式サイト直接予約で最安値保証。",
  keywords:
    "クリエイトスペース池袋, 池袋 ホテル, 豊島区 ホテル, 池袋 ファミリーホテル, 池袋 グループ旅行, Netflix ホテル 池袋",
  openGraph: {
    title: "クリエイトスペース池袋 | 池袋 全6室・高速インターネット完備のホテル",
    description:
      "池袋駅徒歩10分。全6室・Netflix・高速インターネット完備。最大4名。",
    url: "https://create-space.jp",
    siteName: "Create Space Ikebukuro",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SRHH2HXQZZ" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SRHH2HXQZZ');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
