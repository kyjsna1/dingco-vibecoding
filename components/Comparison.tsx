"use client";

import { XCircle, CheckCircle2, Zap, Brain, Sparkles, Code, Compass, ArrowRight } from "lucide-react";

export default function Comparison() {
  const comparisons = [
    {
      title: "학습 곡선 & 진입 장벽",
      traditional: "변수, 반복문, 알고리즘, 환경설정 등 3~6개월 문법 공부하다 중도 포기",
      vibe: "문법 공부 0일! 자연어로 원하는 아이디어와 바이브를 설명하며 오늘 즉시 시작",
    },
    {
      title: "에러와 버그 해결",
      traditional: "세미콜론 하나, 버전 충돌 하나로 스택오버플로우에서 3시간 동안 헤맴",
      vibe: "에러 로그를 그대로 AI에게 전달! 5초 만에 원인 분석과 수정 코드 자동 반영",
    },
    {
      title: "디자인 & 스타일링",
      traditional: "복잡한 CSS와 미디어 쿼리, 픽셀 단위 정렬로 며칠 밤을 지새움",
      vibe: "'네온 다크모드, 글래스모피즘' 한마디로 세련된 Tailwind UI 즉각 구현",
    },
    {
      title: "제품 제작 속도",
      traditional: "간단한 MVP 웹 하나 만드는데 기획부터 배포까지 최소 수주일~수개월",
      vibe: "실시간 대화와 피드백 루프로 단 30분~2시간 만에 동작하는 완성형 웹앱 탄생",
    },
    {
      title: "외주 및 비용 종속",
      traditional: "외주 개발사 견적 수천만 원, 수정 요청할 때마다 추가 비용과 기약 없는 대기",
      vibe: "월 몇 만 원 AI 구독으로 내 서비스의 모든 기능을 내가 직접 실시간으로 제어",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>The Paradigm Shift</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            왜 지금, 전 세계가 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              ‘바이브코딩’
            </span>
            에 열광할까요?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            전 테슬라 AI 디렉터 <strong>안드레 카파시(Andrej Karpathy)</strong>가 예견한 미래.
            <br />
            코딩의 본질은 이제 <strong>&apos;문법 타이핑&apos;</strong>이 아니라 <strong>&apos;상상력과 의도의 디렉팅&apos;</strong>입니다.
          </p>
        </div>

        {/* Karpathy Quote Card */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-slate-900/60 to-cyan-900/30 border border-purple-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 text-8xl font-serif text-white/5 pointer-events-none">
              “
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 shrink-0 shadow-lg shadow-purple-500/30">
                <div className="w-full h-full bg-[#0d101d] rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <div>
                <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic leading-relaxed mb-4">
                  &ldquo;I just see things, say things, run things, copy-paste things, and it mostly works. 
                  This new way of programming by intuition and vibes is what I call Vibe Coding.&rdquo;
                </blockquote>
                <p className="text-sm text-slate-300 mb-2">
                  &ldquo;나는 더 이상 코드를 직접 타이핑하지 않는다. 그저 눈으로 보고, 원하는 걸 말하고, 실행하고, 붙여넣는다. 
                  그리고 그것들은 놀랍게도 대부분 잘 돌아간다.&rdquo;
                </p>
                <div className="text-xs text-purple-300 font-semibold flex items-center gap-2">
                  <span>— Andrej Karpathy (전 테슬라 AI 총괄, OpenAI 공동 창립자)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Way */}
          <div className="rounded-3xl bg-red-950/10 border border-red-500/20 p-6 sm:p-8 backdrop-blur-sm relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">기존의 전통적 개발 방식</h3>
                <p className="text-xs text-red-300">문법 암기와 환경설정의 끝없는 늪</p>
              </div>
            </div>

            <div className="space-y-5">
              {comparisons.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-300 block text-xs mb-1 font-semibold">
                      {item.title}
                    </strong>
                    <span className="leading-snug text-slate-400">{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vibe Coding Way */}
          <div className="rounded-3xl bg-gradient-to-b from-purple-950/30 to-cyan-950/20 border border-purple-500/40 p-6 sm:p-8 backdrop-blur-md relative shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              딩코딩코 추천
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-500/20">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">딩코딩코 바이브코딩</h3>
                <p className="text-xs text-purple-300 font-medium">아이디어와 감각으로 이끄는 AI 페어 개발</p>
              </div>
            </div>

            <div className="space-y-5">
              {comparisons.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-200 text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-purple-300 block text-xs mb-1 font-semibold flex items-center gap-1.5">
                      {item.title}
                    </strong>
                    <span className="leading-snug text-slate-200 font-medium">{item.vibe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
