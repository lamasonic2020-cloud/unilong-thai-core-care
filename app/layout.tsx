import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泰式男士養護完整認證｜龍筋專業服務落地系統",
  description: "專為已有按摩經驗的師傅設計：兩個月內建立一套可定價、能介紹、做得安全的男士養護服務。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
