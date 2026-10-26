"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Terminal, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Flame, 
  Copy, 
  Check, 
  Code2, 
  Smartphone,
  Zap
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"chat" | "code" | "preview">("chat");
  const [copied, setCopied] = useState(false);

  // Auto cycling demo tab every 4.5 seconds if user hasn't clicked
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "chat") return "code";
        if (prev === "code") return "preview";
        return "chat";
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(
      "고양이 테마의 감성적인 스페셜티 카페 랜딩페이지를 Next.js와 Tailwind CSS로 만들어줘. 다크 모드에 네온 퍼플 포인트와 실시간 예약 모달을 추가해줘!"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-[500px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Cyberpunk Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(168,85,247,0.25)] animate-float">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>AI 시대, 누구나 상상을 코드로 만드는 패러다임</span>
            <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
              2026 NEW
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
            문법 암기는 그만, <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent text-glow-violet">
              바이브(Vibe)
            </span>
            로 코딩하세요.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed mb-8">
            컴퓨터 언어 몰라도 괜찮습니다. Cursor, Claude, Antigravity AI와 
            자연어로 대화하며 당신의 아이디어를 30분 만에 웹 서비스로 런칭하는 
            <strong className="text-purple-300 font-semibold"> 딩코딩코만의 실전 바이브코딩 가이드</strong>를 만나보세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#prompt-studio"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group text-sm sm:text-base cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>바이브 프롬프트 생성기 체험</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#roadmap"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300 hover:text-white text-sm sm:text-base"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>4단계 학습 로드맵 보기</span>
            </a>
          </div>
        </div>

        {/* Interactive Vibe Terminal & Visualizer */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/30 via-slate-700/20 to-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="rounded-[14px] bg-[#0c101c]/90 backdrop-blur-xl border border-white/10 overflow-hidden">
              {/* Window Header Bar */}
              <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#080b14] border-b border-white/10 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    dingco-vibe-studio // AI Pair Session
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-white/[0.05] p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === "chat"
                        ? "bg-purple-600 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    1. 바이브 대화 (Prompt)
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === "code"
                        ? "bg-purple-600 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    2. AI 실시간 코딩
                  </button>
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === "preview"
                        ? "bg-purple-600 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    3. 실시간 결과 프리뷰
                  </button>
                </div>
              </div>

              {/* Tab 1: Chat / Prompt Tab */}
              {activeTab === "chat" && (
                <div className="p-6 sm:p-8 space-y-5 animate-fadeIn">
                  <div className="flex items-start gap-3.5 max-w-2xl">
                    <div className="w-9 h-9 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-300 font-bold text-xs shrink-0">
                      ME
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-purple-950/40 border border-purple-500/30 p-4 text-sm text-slate-200 relative group">
                      <p className="font-medium text-purple-200 mb-1">
                        &quot;딩코야, 고양이 테마의 감성 카페 예약 웹사이트 만들어줘!&quot;
                      </p>
                      <p className="text-xs text-slate-400">
                        디자인은 다크모드에 네온 퍼플 포인트 주고, 테이블 실시간 예약 모달이랑 귀여운 고양이 갤러리도 넣어줘. 바로 배포할 수 있게 Next.js로!
                      </p>
                      <button
                        onClick={handleCopyPrompt}
                        className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded hover:bg-white/10"
                        title="프롬프트 복사"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 max-w-2xl ml-auto">
                    <div className="rounded-2xl rounded-tr-sm bg-[#161a2c] border border-cyan-500/30 p-4 text-sm text-slate-200 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                      <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-cyan-400">
                        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                        <span>AI Vibe Engine (Claude 3.7 + Cursor)</span>
                        <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">
                          생성 시작
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        좋은 바이브네요! 요청하신 고양이 스페셜티 카페 <strong>&apos;냥이네 달빛 살롱&apos;</strong>의 구조를 설계했습니다:
                      </p>
                      <ul className="text-xs text-slate-400 space-y-1.5 font-mono mb-3 bg-black/40 p-2.5 rounded-lg border border-white/5">
                        <li className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> [Next.js App Router] 반응형 랜딩 레이아웃 생성
                        </li>
                        <li className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> [Tailwind CSS] 네온 퍼플 & 글래스모피즘 테마 주입
                        </li>
                        <li className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> [Interactive UI] 원클릭 실시간 테이블 예약 모달 연결 완료
                        </li>
                      </ul>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                        <span>소요 시간: 18초</span>
                        <button
                          onClick={() => setActiveTab("code")}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                        >
                          생성된 코드 보기 <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-cyan-400/50 shrink-0">
                      <Image
                        src="/dingco-mascot.jpg"
                        alt="AI 딩코"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Stream Tab */}
              {activeTab === "code" && (
                <div className="p-6 bg-[#080a12] font-mono text-xs text-slate-300 overflow-x-auto animate-fadeIn">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10 text-slate-400">
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      components/CatCafeBooking.tsx
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Complied with 0 errors
                    </span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed font-mono">
                    <code>{`export default function CatCafeHero() {
  const [selectedSeat, setSelectedSeat] = useState<string>("window-cat-zone");
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="relative min-h-[400px] rounded-2xl bg-gradient-to-br from-purple-900/40 via-slate-900 to-black p-6 border border-purple-500/30">
      {/* Vibe Coding Glow Effect */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
        🐾 냥이네 달빛 살롱 • 실시간 좌석 예약
      </div>
      <h2 className="text-2xl font-bold text-white mt-3">
        달콤한 라떼와 골골송이 가득한 힐링 스페이스
      </h2>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <button className="p-3 rounded-xl bg-purple-600/30 border border-purple-500 hover:scale-105 transition">
          🪟 창가 캣타워석 (예약 가능)
        </button>
        <button className="p-3 rounded-xl bg-slate-800/80 border border-white/10 hover:scale-105 transition">
          🛋️ 프라이빗 소파석 (잔여 1석)
        </button>
      </div>
    </div>
  );
}`}</code>
                  </pre>
                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      실제 렌더링된 화면 확인하기
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Live Preview Tab */}
              {activeTab === "preview" && (
                <div className="p-6 sm:p-8 bg-gradient-to-b from-[#0e1222] to-[#070911] animate-fadeIn">
                  <div className="max-w-xl mx-auto rounded-2xl bg-[#141829]/90 border border-purple-500/40 p-6 shadow-2xl relative overflow-hidden">
                    {/* Glowing highlight */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-2xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
                        🐾 냥이네 달빛 살롱 Live Preview
                      </span>
                      <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        ● 배포 완료 (vercel.app)
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      지친 하루를 위로하는 따뜻한 커피와 고양이
                    </h3>
                    <p className="text-xs text-slate-300 mb-5">
                      바이브코딩으로 15분 만에 완성된 반응형 실시간 예약 프로덕트 데모입니다.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/50 hover:border-purple-400 transition cursor-pointer">
                        <div className="text-sm font-semibold text-white flex items-center justify-between">
                          <span>🪟 창가 캣타워석</span>
                          <span className="text-[10px] text-cyan-400">인기 최고</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">햇살 받으며 낮잠 자는 치즈냥이와 함께</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-purple-500/30 transition cursor-pointer">
                        <div className="text-sm font-semibold text-white flex items-center justify-between">
                          <span>🛋️ 프라이빗 힐링존</span>
                          <span className="text-[10px] text-purple-300">잔여 2석</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">조용히 책 읽고 작업하기 좋은 룸</p>
                      </div>
                    </div>

                    <button
                      onClick={() => alert("🎉 바이브코딩 완료! 이렇게 멋진 웹사이트가 30분 만에 탄생합니다.")}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] transition cursor-pointer"
                    >
                      ✨ 지금 실시간 좌석 예약하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-5xl mx-auto">
          {[
            {
              label: "개발 속도 가속화",
              value: "10x",
              desc: "전통적 코딩 대비 10배 빠른 완성",
              icon: Zap,
              color: "text-amber-400",
            },
            {
              label: "사전 코딩 지식",
              value: "0 줄",
              desc: "문법 공부 없이 자연어로 시작",
              icon: Cpu,
              color: "text-cyan-400",
            },
            {
              label: "첫 MVP 배포 소요",
              value: "30 분",
              desc: "아이디어에서 Vercel 라이브까지",
              icon: Flame,
              color: "text-rose-400",
            },
            {
              label: "수강생 / 구독자 만족도",
              value: "99.4%",
              desc: "실제 비개발자 창업 성공률 급증",
              icon: Sparkles,
              color: "text-purple-400",
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 text-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex p-2 rounded-xl bg-white/5 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mb-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400 leading-tight">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
