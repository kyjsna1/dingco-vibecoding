"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { YouTubeIcon, GitHubIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-[#05070c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-purple-500/50">
                <Image
                  src="/dingco-mascot.jpg"
                  alt="딩코딩코"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                딩코딩코 ⚡ 바이브코딩
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              문법 암기 없이 자연어와 감각으로 코딩하는 AI 시대의 새로운 소프트웨어 창작 플랫폼.
              여러분의 상상이 단 30분 만에 웹 서비스가 되는 경험을 선물합니다.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 flex items-center justify-center text-slate-400 hover:text-red-400 transition"
                aria-label="유튜브"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white transition"
                aria-label="깃허브"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              핵심 가이드
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-purple-300 transition">
                  바이브코딩이란?
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-purple-300 transition">
                  4단계 실전 로드맵
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-purple-300 transition">
                  30분 완성 쇼케이스
                </a>
              </li>
              <li>
                <a href="#prompt-studio" className="hover:text-purple-300 transition">
                  바이브 프롬프트 생성기
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-purple-300 transition">
                  딩코 필승 5계명
                </a>
              </li>
            </ul>
          </div>

          {/* Resource & Community */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              추천 AI 도구
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>
                <span className="text-purple-400">⚡ Cursor</span> (AI 코드 에디터)
              </li>
              <li>
                <span className="text-cyan-400">🤖 Claude 3.7</span> (하이퍼 로직 AI)
              </li>
              <li>
                <span className="text-rose-400">🎨 v0.dev</span> (AI UI 제너레이터)
              </li>
              <li>
                <span className="text-emerald-400">▲ Next.js & Vercel</span> (배포)
              </li>
              <li>
                <span className="text-amber-400">⚡ Supabase</span> (실시간 DB)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 딩코딩코 (DingcoDingco). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" />
            <span>and Vibe Coding Spirit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
