import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const kleeOne = Klee_One({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-rounded",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import { Shippori_Mincho_B1 } from "next/font/google";

const shippori = Shippori_Mincho_B1({
  variable: "--font-mincho",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const yosugara = localFont({
  src: "../../public/fonts/yosugaraver1_2.ttf",
  variable: "--font-yosugara",
  display: "swap",
});

export const metadata: Metadata = {
  title: "両家顔合わせのしおり",
  description: "FAMILY GREETING - 顔合わせのご案内",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${kleeOne.variable} ${zenMaru.variable} ${shippori.variable} ${yosugara.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
