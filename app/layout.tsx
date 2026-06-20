import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "gXHCgYW1liWYzDHLdMnZqsms3IllJliPGWeecgZRK5E",
  },
  title: "ぷらっとハウス白金台 | 白金台 一棟貸し切り 最大11名",
  description:
    "白金台駅徒歩2分。3階建て一棟まるごと貸し切り。駐車場2台無料・Netflix・Disney+・Nintendo Switch・10ギガインターネット完備。最大11名。ファミリー・グループ旅行に最適。",
  keywords:
    "ぷらっとハウス白金台, 白金台 一棟貸し切り, 白金台 民泊, 東京 貸し切り宿, ファミリー旅行 東京, グループ旅行 東京, 白金台 宿泊",
  openGraph: {
    title: "ぷらっとハウス白金台 | 白金台 一棟貸し切り 最大11名",
    description:
      "白金台駅徒歩2分。3階建て一棟貸し切り。駐車場2台・Netflix・Disney+完備。最大11名。",
    url: "https://plat-house.jp",
    siteName: "Plat House Shirokanedai",
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
