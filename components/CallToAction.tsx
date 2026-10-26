"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { YouTubeIcon } from "./icons";

interface CallToActionProps {
  onOpenCheatSheet: () => void;
}

export default function CallToAction({ onOpenCheatSheet }: CallToActionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 p-8 sm:p-14 text-center bg-gradient-to-b from-[#141226] via-[#0d1020] to-[#080911] shadow-[0_0_60px_rgba(139,92,246,0.2)]">
          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-purple-600/20 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/15 blur-[100px] pointer-events-none" />

          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "5s" }} />
            <span>오늘 바로 시작하는 1인 창작의 혁명</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            당신의 머릿속에 잠든 아이디어, <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              오늘 밤 바로 세상에 런칭하세요.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            더 이상 미루지 마세요. 준비물은 오직 아이디어와 호기심뿐입니다.
            <br />
            딩코딩코가 처음부터 끝까지 친절하게 여러분의 페어 코딩 파트너가 되어 드립니다.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCheatSheet}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>무료 바이브 치트시트 PDF 받기</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 hover:border-red-500/70 transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95"
            >
              <YouTubeIcon className="w-5 h-5 text-red-500" />
              <span>딩코딩코 유튜브 구독하기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
