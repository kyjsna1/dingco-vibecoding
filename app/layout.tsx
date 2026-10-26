import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dingco-vibecoding.vercel.app"),
  title: "딩코딩코 바이브코딩 | 상상을 현실로 만드는 AI 코딩 혁명",
  description:
    "문법 암기는 그만! 상상한 바이브(Vibe)를 AI와 함께 즉시 프로덕트로 구현하는 딩코딩코의 실전 바이브코딩 가이드 & 인터랙티브 프롬프트 스튜디오.",
  keywords: [
    "딩코딩코",
    "바이브코딩",
    "Vibe Coding",
    "AI 코딩",
    "Cursor",
    "Claude",
    "프롬프트 엔지니어링",
    "비개발자 웹개발",
  ],
  authors: [{ name: "딩코딩코 (DingcoDingco)" }],
  openGraph: {
    title: "딩코딩코 바이브코딩 - 상상을 코드로 바꾸는 AI 코딩",
    description: "생각한 대로 만들어지는 바이브코딩의 세계로 여러분을 초대합니다.",
    url: "https://dingco-vibecoding.vercel.app",
    siteName: "딩코딩코 바이브코딩",
    images: [
      {
        url: "/hero-vibe.jpg",
        width: 1200,
        height: 630,
        alt: "딩코딩코 바이브코딩",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body className="min-h-screen bg-[#08090e] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
