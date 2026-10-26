"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  Wand2, 
  Copy, 
  Check, 
  Layers, 
  Palette, 
  Cpu, 
  Terminal, 
  RefreshCw,
  FolderGit2
} from "lucide-react";

interface CategoryOption {
  id: string;
  name: string;
  desc: string;
  defaultIdea: string;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: "saas",
    name: "🚀 마이크로 SaaS & 랜딩",
    desc: "사전 예약 수집, 가격표, 기능 소개",
    defaultIdea: "1인 창업가를 위한 AI 자동 블로그 글 작성 및 SEO 최적화 서비스",
  },
  {
    id: "ai-tool",
    name: "🤖 AI 챗봇 & 생성 도구",
    desc: "프롬프트 입력, 실시간 스트리밍 답변",
    defaultIdea: "직장인들을 위한 센스 있는 퇴근 핑계 및 이메일 자동 생성기",
  },
  {
    id: "dashboard",
    name: "📊 대시보드 & 생산성 툴",
    desc: "투두리스트, 집중 타이머, 데이터 차트",
    defaultIdea: "하루 3가지 핵심 목표만 집중하는 미니멀 다크 모드 포모도로 대시보드",
  },
  {
    id: "booking",
    name: "☕ 예약 & 인터랙티브 웹",
    desc: "카페, 공방, 미용실 실시간 좌석 예약",
    defaultIdea: "고양이 북카페 '달빛 서재'의 실시간 창가석 예약 및 메뉴 주문 웹",
  },
  {
    id: "portfolio",
    name: "🎨 크리에이터 포트폴리오",
    desc: "인터랙티브 갤러리, 프로젝트 쇼케이스",
    defaultIdea: "사이버펑크 느낌의 3D 모션 그래픽 디자이너 인터랙티브 쇼케이스",
  },
];

const VIBES = [
  {
    id: "cyberpunk",
    name: "💜 사이버펑크 네온 다크",
    desc: "바이올렛/시안 네온 글로우, 딥블랙 배경, 하이테크 느낌",
  },
  {
    id: "apple-glass",
    name: "🍏 애플 미니멀 & 글래스",
    desc: "반투명 블러 효과, 섬세한 보더라인, 절제된 타이포그래피",
  },
  {
    id: "warm-pastel",
    name: "🌿 따뜻하고 친근한 감성",
    desc: "부드러운 크림/파스텔톤, 둥근 모서리, 포근한 일러스트 감성",
  },
  {
    id: "fintech",
    name: "⚡ 하이테크 B2B 모던",
    desc: "슬레이트 블루, 신뢰감 주는 그리드, 깔끔한 데이터 차트",
  },
];

export default function PromptStudio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("saas");
  const [selectedVibe, setSelectedVibe] = useState<string>("cyberpunk");
  const [userIdea, setUserIdea] = useState<string>(
    "1인 창업가를 위한 AI 자동 블로그 글 작성 및 SEO 최적화 서비스"
  );
  const [features, setFeatures] = useState<string[]>([
    "다크모드 지원",
    "실시간 데이터 영속화(LocalStorage)",
    "반응형 모바일 완벽 지원",
    "인터랙티브 애니메이션 효과",
  ]);

  const [generatedResult, setGeneratedResult] = useState<{
    prompt: string;
    techStack: string[];
    structure: string;
    stepGuide: string[];
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleFeature = (f: string) => {
    if (features.includes(f)) {
      setFeatures(features.filter((item) => item !== f));
    } else {
      setFeatures([...features, f]);
    }
  };

  const handleCategoryChange = (cat: CategoryOption) => {
    setSelectedCategory(cat.id);
    setUserIdea(cat.defaultIdea);
  };

  const generatePrompt = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const catObj = CATEGORIES.find((c) => c.id === selectedCategory);
      const vibeObj = VIBES.find((v) => v.id === selectedVibe);

      const generatedPrompt = `[역할 및 페르소나]
너는 세계 최고 수준의 풀스택 웹 개발자이자 실리콘밸리 수석 UI/UX 디자이너야. 
현재 최신 Next.js App Router, Tailwind CSS, TypeScript, Lucide-React 환경에서 프로젝트를 진행 중이야.

[프로젝트 개요]
- 프로젝트 이름: ${userIdea.slice(0, 18)} (Vibe App)
- 카테고리: ${catObj?.name}
- 핵심 아이디어: "${userIdea}"
- 비주얼 바이브: ${vibeObj?.name} (${vibeObj?.desc})

[핵심 요구사항 및 포함 기능]
${features.map((f, i) => `${i + 1}. ${f}`).join("\n")}
${features.length + 1}. 플레이스홀더 텍스트 대신 실제 프로덕션 수준의 매력적이고 자연스러운 한국어 카피라이팅 적용
${features.length + 2}. 에러 방지를 위해 TypeScript strict mode를 준수하고 하이드레이션 오류가 발생하지 않도록 클라이언트 사이드 상태 안전하게 처리

[구현 가이드라인]
1. 단 하나의 지루한 MVP가 아니라 사용자가 접속하자마자 "와!" 하고 감탄할 수 있는 고급스러운 글래스모피즘과 마이크로 인터랙션을 넣어줘.
2. 컴포넌트는 단일 책임 원칙에 따라 분리하고, 즉시 실행 가능한 완전한 코드(생략 없는 전체 코드)를 작성해줘.`;

      const techStack = [
        "Next.js 15 (App Router)",
        "Tailwind CSS v4",
        "TypeScript",
        "Lucide React Icons",
        "Canvas Confetti",
      ];

      const structure = `app/
├── globals.css      # Vibe 컬러 팔레트 & 글로우 애니메이션 정의
├── layout.tsx       # 메타데이터 & Pretendard 폰트 세팅
├── page.tsx         # 메인 조립 페이지
components/
├── Header.tsx       # 반응형 헤더 & 바이브 인디케이터
├── HeroSection.tsx  # 매력적인 핵심 가치 제안
├── InteractiveTool.tsx # 핵심 인터랙티브 기능 컴포넌트
└── Footer.tsx`;

      const stepGuide = [
        "1단계: Cursor 또는 Claude에 위 프롬프트를 복사하여 붙여넣습니다.",
        "2단계: 터미널에서 `npm run dev` 실행 후 브라우저(localhost:3000)를 띄워 확인합니다.",
        "3단계: 필요한 세부 디자인이나 문구를 한국어로 '이 버튼 색상을 더 밝게 해줘'처럼 피드백합니다.",
      ];

      setGeneratedResult({
        prompt: generatedPrompt,
        techStack,
        structure,
        stepGuide,
      });

      setIsGenerating(false);

      // Fire celebratory confetti!
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#a855f7", "#06b6d4", "#ec4899", "#3b82f6"],
      });
    }, 600);
  };

  const copyToClipboard = () => {
    if (!generatedResult) return;
    navigator.clipboard.writeText(generatedResult.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="prompt-studio" className="py-24 relative overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            딩코의{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              바이브 프롬프트 생성기
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            당신의 아이디어를 입력하세요. Cursor, Claude, Antigravity에 바로 넣을 수 있는 
            <strong> 완벽한 마스터 프롬프트</strong>를 무료로 자동 조합해 드립니다.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-purple-500/20 via-slate-800/10 to-cyan-500/10 p-1 border border-white/10 shadow-2xl">
          <div className="rounded-[22px] bg-[#0c101d]/95 p-6 sm:p-10 backdrop-blur-xl">
            {/* Step 1: Category */}
            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-mono">
                  1
                </span>
                프로젝트 카테고리 선택
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-purple-950/60 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-300"
                      }`}
                    >
                      <div className="text-xs font-bold mb-0.5">{cat.name}</div>
                      <div className="text-[11px] text-slate-400">{cat.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Design Vibe */}
            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-mono">
                  2
                </span>
                디자인 바이브(분위기) 선택
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VIBES.map((vibe) => {
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => setSelectedVibe(vibe.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-300"
                      }`}
                    >
                      <div className="text-xs font-bold text-cyan-300 mb-0.5">{vibe.name}</div>
                      <div className="text-[11px] text-slate-400">{vibe.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Core Idea Input */}
            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-mono">
                  3
                </span>
                내 아이디어 한 줄 요약
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={userIdea}
                  onChange={(e) => setUserIdea(e.target.value)}
                  placeholder="예: 반려동물 산책 경로를 지도에 그리고 동네 강아지 친구를 매칭해주는 웹앱"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm font-medium transition"
                />
              </div>
            </div>

            {/* Step 4: Extra Features Checkboxes */}
            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-mono">
                  4
                </span>
                포함하고 싶은 핵심 요소 (선택)
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "다크모드 지원",
                  "실시간 데이터 영속화(LocalStorage)",
                  "반응형 모바일 완벽 지원",
                  "인터랙티브 애니메이션 효과",
                  "원클릭 복사 & 다운로드 버튼",
                  "Supabase 데이터베이스 연동 준비",
                ].map((feat) => {
                  const active = features.includes(feat);
                  return (
                    <button
                      key={feat}
                      onClick={() => toggleFeature(feat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        active
                          ? "bg-purple-600/30 border-purple-400 text-purple-200"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {active ? "✓ " : "+ "}
                      {feat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={generatePrompt}
              disabled={isGenerating}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-base shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>바이브 프롬프트 연성 중...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>✨ 딩코의 마스터 바이브 프롬프트 생성하기</span>
                </>
              )}
            </button>

            {/* Generated Output Display */}
            {generatedResult && (
              <div className="mt-10 pt-8 border-t border-white/10 space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      생성된 마스터 프롬프트 (Ready to Paste)
                    </h3>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-900/30 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>복사 완료! (Cursor에 붙여넣기)</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>전체 프롬프트 원클릭 복사</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Prompt Codebox */}
                <div className="relative rounded-2xl bg-[#070912] border border-purple-500/30 p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto shadow-inner">
                  <pre className="whitespace-pre-wrap select-all font-mono">
                    {generatedResult.prompt}
                  </pre>
                </div>

                {/* Extra Guide: Tech Stack & Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      추천 기술 스택
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1 font-mono">
                      {generatedResult.techStack.map((tech, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-cyan-400">▹</span> {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      실행 순서 가이드
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {generatedResult.stepGuide.map((step, i) => (
                        <li key={i} className="leading-snug">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
