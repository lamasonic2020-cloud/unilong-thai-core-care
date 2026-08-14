import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "悠妮瓏｜泰式男仕核心保養",
  description: "專為已有按摩經驗的師傅設計：兩個月內建立一套可定價、能介紹、做得安全的泰式男仕核心保養服務。",
  icons: { icon: "./favicon.svg", shortcut: "./favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
