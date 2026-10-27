"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Menu, X, ArrowUpRight, Waves } from "lucide-react";
import { YouTubeIcon } from "./icons";

interface NavbarProps {
  onOpenCheatSheet: () => void;
}

export default function Navbar({ onOpenCheatSheet }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "바이브코딩이란?", href: "#about" },
    { name: "4단계 로드맵", href: "#roadmap" },
    { name: "실전 쇼케이스", href: "#showcase" },
    { name: "프롬프트 생성기", href: "#prompt-studio" },
    { name: "바이브 꿀팁", href: "#tips" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#04091a]/85 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-950/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-105 group-hover:ring-blue-400 transition-all duration-300">
              <Image
                src="/vibewave-mascot.jpg"
                alt="바이브웨이브 마스코트"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent whitespace-nowrap">
                  바이브웨이브
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-300 whitespace-nowrap">
                  <Waves className="w-2.5 h-2.5 text-cyan-300 animate-pulse" />
                  WAVE
                </span>
              </div>
              <span className="text-[10px] text-cyan-400/80 tracking-wider uppercase font-mono whitespace-nowrap">
                AI Vibe Coding Platform
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#061026]/60 border border-blue-500/20 rounded-full px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.15)] whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-blue-600/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 whitespace-nowrap">
            <button
              onClick={onOpenCheatSheet}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-spin" style={{ animationDuration: "5s" }} />
              치트시트 무료 받기
            </button>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 hover:border-red-500/60 rounded-xl transition-all duration-200 hover:text-white whitespace-nowrap"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500 shrink-0" />
              <span>유튜브 채널</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-blue-950/40 border border-blue-500/20 text-slate-300 hover:text-cyan-300 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#04091a]/95 backdrop-blur-2xl border-b border-blue-500/20 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-blue-600/10 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-blue-500/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheatSheet();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-900/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              치트시트 무료 받기
            </button>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-300 bg-red-600/10 border border-red-500/30 rounded-xl"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              바이브웨이브 유튜브 구독하기
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
