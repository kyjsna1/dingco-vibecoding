"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Waves, 
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
      "시원한 오션 블루 테마의 감성 서핑 & 카페 예약 웹앱을 Next.js와 Tailwind CSS로 만들어줘. 네온 시안 포인트와 실시간 파도 상태 대시보드, 예약 모달을 추가해줘!"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Cyber Scanline Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="w-full h-24 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-sm animate-scanline" />
      </div>

      {/* Background Ambient Deep Blue Glows with Drifting Animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none -z-10 animate-float" />
      <div className="absolute top-1/3 left-1/5 w-[450px] h-[450px] bg-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute top-2/3 right-1/4 w-[500px] h-[350px] bg-sky-600/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      {/* Cyberpunk Blue Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a18_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/70 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(6,182,212,0.3)] animate-float">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Waves className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>생각의 파도를 코드로 바꾸는 바이브코딩 혁명</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-500/30 text-[10px] font-bold text-sky-200 uppercase tracking-wider">
              VIBEWAVE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
            문법 암기는 그만, <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent text-glow-blue">
              바이브(Vibe)
            </span>
            로 코딩하세요.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed mb-8">
            복잡한 프로그래밍 언어의 늪에서 벗어나세요. Cursor, Claude, Antigravity AI와 
            자연어로 대화하며 당신의 아이디어를 30분 만에 웹 서비스로 런칭하는 
            <strong className="text-cyan-300 font-semibold"> 바이브웨이브(VibeWave)의 실전 가이드</strong>를 만나보세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#prompt-studio"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group text-sm sm:text-base cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>바이브 프롬프트 생성기 체험</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#roadmap"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-blue-950/40 hover:bg-blue-900/40 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:text-white text-sm sm:text-base"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>4단계 학습 로드맵 보기</span>
            </a>
          </div>
        </div>

        {/* Interactive Vibe Terminal & Visualizer with Blue Aesthetic */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-blue-900/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-pulse-glow">
            <div className="rounded-[14px] bg-[#060c1d]/95 backdrop-blur-xl border border-blue-500/30 overflow-hidden">
              {/* Window Header Bar */}
              <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#030814] border-b border-blue-500/20 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    vibewave-studio // AI Pair Session
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#091530] p-1 rounded-lg border border-blue-500/20">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === "chat"
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                        : "text-slate-400 hover:text-cyan-200"
                    }`}
                  >
                    1. 바이브 대화 (Prompt)
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === "code"
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                        : "text-slate-400 hover:text-cyan-200"
                    }`}
                  >
                    2. AI 실시간 코딩
                  </button>
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === "preview"
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                        : "text-slate-400 hover:text-cyan-200"
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
                    <div className="w-9 h-9 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                      ME
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-blue-950/40 border border-blue-500/30 p-4 text-sm text-slate-200 relative group shadow-sm">
                      <p className="font-medium text-cyan-200 mb-1">
                        &quot;바이브웨이브야, 오션 블루 테마의 감성 서핑 & 비치 카페 예약 웹앱 만들어줘!&quot;
                      </p>
                      <p className="text-xs text-slate-400">
                        디자인은 딥 블루 다크모드에 네온 시안 포인트를 주고, 실시간 파도 높이 위젯과 좌석 예약 모달을 넣어줘. 배포는 Next.js로 바로 가능하게!
                      </p>
                      <button
                        onClick={handleCopyPrompt}
                        className="absolute top-3 right-3 text-slate-400 hover:text-cyan-300 p-1 rounded hover:bg-white/10"
                        title="프롬프트 복사"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 max-w-2xl ml-auto">
                    <div className="rounded-2xl rounded-tr-sm bg-[#091736] border border-cyan-400/35 p-4 text-sm text-slate-200 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                      <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-cyan-300">
                        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                        <span>AI Vibe Engine (Claude 3.7 + Cursor)</span>
                        <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-700">
                          생성 시작
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        탁월한 바이브네요! 요청하신 오션 서핑 & 비치 카페 <strong>&apos;블루 웨이브 살롱&apos;</strong>의 구조를 설계했습니다:
                      </p>
                      <ul className="text-xs text-slate-400 space-y-1.5 font-mono mb-3 bg-[#030914] p-2.5 rounded-lg border border-blue-500/20">
                        <li className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> [Next.js App Router] 반응형 오션 레이아웃 생성
                        </li>
                        <li className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> [Tailwind CSS] 딥 블루 & 일렉트릭 시안 테마 주입
                        </li>
                        <li className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> [Interactive UI] 실시간 파도 인디케이터 & 원클릭 예약 모달 연결
                        </li>
                      </ul>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-blue-500/20">
                        <span>소요 시간: 15초</span>
                        <button
                          onClick={() => setActiveTab("code")}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                        >
                          생성된 코드 보기 <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-cyan-400/60 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      <Image
                        src="/vibewave-mascot.jpg"
                        alt="AI 바이브웨이브"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Stream Tab */}
              {activeTab === "code" && (
                <div className="p-6 bg-[#030914] font-mono text-xs text-slate-300 overflow-x-auto animate-fadeIn">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-blue-500/20 text-slate-400">
                    <span className="flex items-center gap-2 text-cyan-300">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      components/BlueWaveBooking.tsx
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Complied with 0 errors
                    </span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed font-mono">
                    <code>{`export default function BlueWaveHero() {
  const [waveHeight, setWaveHeight] = useState<string>("1.8m (최상)");
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="relative min-h-[400px] rounded-2xl bg-gradient-to-br from-blue-900/40 via-slate-900 to-black p-6 border border-cyan-500/30">
      {/* VibeWave Glow Effect */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs">
        🌊 블루 웨이브 살롱 • 실시간 서핑 강습 & 오션뷰 예약
      </div>
      <h2 className="text-2xl font-bold text-white mt-3">
        파도의 리듬에 맞춰 시원하게 즐기는 오션 라이프
      </h2>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <button className="p-3 rounded-xl bg-blue-600/30 border border-cyan-400 hover:scale-105 transition">
          🏄‍♂️ 서핑 데크 뷰 좌석 (예약 가능)
        </button>
        <button className="p-3 rounded-xl bg-slate-800/80 border border-blue-500/20 hover:scale-105 transition">
          🍹 비치 루프탑 라운지 (잔여 2석)
        </button>
      </div>
    </div>
  );
}`}</code>
                  </pre>
                  <div className="mt-4 pt-3 border-t border-blue-500/20 flex justify-end">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      실제 렌더링된 화면 확인하기
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Live Preview Tab */}
              {activeTab === "preview" && (
                <div className="p-6 sm:p-8 bg-gradient-to-b from-[#091530] to-[#030914] animate-fadeIn">
                  <div className="max-w-xl mx-auto rounded-2xl bg-[#0b1b3d]/90 border border-cyan-400/40 p-6 shadow-2xl relative overflow-hidden">
                    {/* Glowing highlight */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/20 blur-3xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 border border-cyan-400/40 text-cyan-300">
                        🌊 블루 웨이브 살롱 Live Preview
                      </span>
                      <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        ● 배포 완료 (vercel.app)
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      푸른 파도 소리와 함께하는 서핑 & 카페 라운지
                    </h3>
                    <p className="text-xs text-slate-300 mb-5">
                      바이브웨이브로 15분 만에 완성된 반응형 실시간 예약 프로덕트 데모입니다.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <div className="p-3.5 rounded-xl bg-blue-950/50 border border-cyan-400/50 hover:border-cyan-300 transition cursor-pointer">
                        <div className="text-sm font-semibold text-white flex items-center justify-between">
                          <span>🏄‍♂️ 서핑 데크 뷰</span>
                          <span className="text-[10px] text-cyan-300">파도 높이 1.8m</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1">시원한 바다를 내려다보며 강습 신청</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#061229] border border-blue-500/30 hover:border-cyan-400/40 transition cursor-pointer">
                        <div className="text-sm font-semibold text-white flex items-center justify-between">
                          <span>🍹 비치 루프탑</span>
                          <span className="text-[10px] text-blue-300">잔여 2석</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1">일몰과 함께 즐기는 트로피컬 에이드</p>
                      </div>
                    </div>

                    <button
                      onClick={() => alert("🎉 바이브웨이브 코딩 완료! 30분 만에 이런 환상적인 웹서비스가 탄생합니다.")}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.45)] transition cursor-pointer"
                    >
                      ✨ 지금 실시간 좌석 예약하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Strip with Blue Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-5xl mx-auto">
          {[
            {
              label: "개발 속도 가속화",
              value: "10x",
              desc: "전통적 코딩 대비 10배 빠른 완성",
              icon: Zap,
              color: "text-cyan-400",
            },
            {
              label: "사전 코딩 지식",
              value: "0 줄",
              desc: "문법 공부 없이 자연어로 시작",
              icon: Cpu,
              color: "text-sky-400",
            },
            {
              label: "첫 MVP 배포 소요",
              value: "30 분",
              desc: "아이디어에서 Vercel 라이브까지",
              icon: Waves,
              color: "text-blue-400",
            },
            {
              label: "수강생 / 커뮤니티 만족도",
              value: "99.4%",
              desc: "실제 비개발자 창업 성공률 급증",
              icon: Sparkles,
              color: "text-teal-300",
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="glass-card-blue rounded-2xl p-5 text-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex p-2 rounded-xl bg-blue-900/30 border border-blue-500/30 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-cyan-200 mb-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400 leading-tight">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
