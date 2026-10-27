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
  metadataBase: new URL("https://vibewave-coding.vercel.app"),
  title: "바이브웨이브 (VibeWave) | 생각의 파도를 코드로 바꾸는 AI 바이브코딩",
  description:
    "문법 암기는 그만! 상상한 파도와 바이브(Vibe)를 AI와 함께 즉시 프로덕트로 구현하는 바이브웨이브(VibeWave)의 실전 AI 페어 프로그래밍 가이드 & 인터랙티브 프롬프트 스튜디오.",
  keywords: [
    "바이브웨이브",
    "VibeWave",
    "바이브코딩",
    "Vibe Coding",
    "AI 코딩",
    "Cursor",
    "Claude",
    "프롬프트 엔지니어링",
    "비개발자 웹개발",
  ],
  authors: [{ name: "바이브웨이브 (VibeWave)" }],
  openGraph: {
    title: "바이브웨이브 (VibeWave) - 생각의 파도를 코드로 바꾸는 AI 바이브코딩",
    description: "코드의 바다를 서핑하듯, 상상한 대로 만들어지는 바이브웨이브의 세계로 초대합니다.",
    url: "https://vibewave-coding.vercel.app",
    siteName: "바이브웨이브 (VibeWave)",
    images: [
      {
        url: "/vibewave-mascot.jpg",
        width: 1200,
        height: 630,
        alt: "바이브웨이브 VibeWave",
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
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
