import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from "next/font/google";
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
        className={`${kleeOne.variable} ${zenMaru.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
