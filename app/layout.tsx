import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "株式会社ケーイーシー | 三菱系FA機器・工作機械の電気工事専門",
  description: "愛知県稲沢市の株式会社ケーイーシーは、三菱系FA機器・工作機械の電気工事を専門とする企業です。工場の自動化、生産設備の電気工事はお任せください。",
  keywords: "株式会社ケーイーシー,KEC,FA機器,工作機械,電気工事,三菱電機,愛知県,稲沢市",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
