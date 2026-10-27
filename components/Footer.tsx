"use client";

import Image from "next/image";
import { Heart, Waves } from "lucide-react";
import { YouTubeIcon, GitHubIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-[#02050e] border-t border-blue-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Image
                  src="/vibewave-mascot.jpg"
                  alt="바이브웨이브"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                바이브웨이브 ⚡ VIBEWAVE
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              문법 암기 없이 자연어와 감각으로 코딩하는 AI 시대의 새로운 소프트웨어 창작 플랫폼.
              여러분의 상상이 파도처럼 흘러 단 30분 만에 웹 서비스가 되는 경험을 선물합니다.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-950/40 hover:bg-red-600/20 border border-blue-500/20 hover:border-red-500/40 flex items-center justify-center text-slate-400 hover:text-red-400 transition"
                aria-label="유튜브"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-950/40 hover:bg-white/15 border border-blue-500/20 hover:border-blue-400/40 flex items-center justify-center text-slate-400 hover:text-white transition"
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
                <a href="#about" className="hover:text-cyan-300 transition">
                  바이브코딩이란?
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-cyan-300 transition">
                  4단계 실전 로드맵
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-cyan-300 transition">
                  30분 완성 쇼케이스
                </a>
              </li>
              <li>
                <a href="#prompt-studio" className="hover:text-cyan-300 transition">
                  바이브 프롬프트 생성기
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-cyan-300 transition">
                  바이브 필승 5계명
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
                <span className="text-cyan-400">⚡ Cursor</span> (AI 코드 에디터)
              </li>
              <li>
                <span className="text-sky-400">🤖 Claude 3.7</span> (하이퍼 로직 AI)
              </li>
              <li>
                <span className="text-blue-400">🎨 v0.dev</span> (AI UI 제너레이터)
              </li>
              <li>
                <span className="text-emerald-400">▲ Next.js & Vercel</span> (배포)
              </li>
              <li>
                <span className="text-teal-400">⚡ Supabase</span> (실시간 DB)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 바이브웨이브 (VibeWave). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed with</span>
            <Waves className="w-3.5 h-3.5 text-cyan-400 mx-0.5" />
            <span>and VibeWave Spirit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
