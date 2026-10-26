"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Lightbulb, 
  MessageSquareCode, 
  RefreshCw, 
  Rocket, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function Roadmap() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "바이브 정의 & 아이디어 세팅",
      subtitle: "Vibe Discovery",
      icon: Lightbulb,
      color: "from-amber-500 to-rose-500",
      accent: "text-amber-400",
      description:
        "복잡한 50페이지 기획서는 필요 없습니다. 내 서비스가 주는 감성적 분위기(Vibe), 타겟 고객, 단 하나의 핵심 가치(Core Feature)를 3줄로 정의합니다.",
      dingcoTip:
        "💡 딩코 팁: 핀터레스트나 드리블에서 마음에 드는 디자인 스크린샷 1장을 준비해 Cursor/Claude에 첨부하면 AI의 퀄리티가 300% 상승합니다.",
      examplePrompt:
        "너는 최고의 프론트엔드 디자이너 겸 풀스택 개발자야. 심플하고 감성적인 '미니멀 독서 기록 웹앱'을 만들 거야. 흑백 중심의 깔끔한 타이포그래피에 부드러운 카드 그림자 효과를 줘. 첫 화면에 오늘 읽은 책 검색창과 이번 주 완독 그래프를 보여줘.",
      deliverables: ["서비스 한 줄 컨셉", "디자인 레퍼런스 무드", "AI 시스템 페르소나 설정"],
    },
    {
      num: "02",
      title: "모듈형 AI 페어 프롬프팅",
      subtitle: "Modular Prompting",
      icon: MessageSquareCode,
      color: "from-purple-500 to-indigo-500",
      accent: "text-purple-400",
      description:
        "한 번에 '배달의민족 만들어줘'라고 하면 AI는 망가집니다. 레고 블록을 쌓듯 레이아웃 → 상태 관리 → 인터랙션 순서로 작게 쪼개어 지시합니다.",
      dingcoTip:
        "💡 딩코 팁: Next.js 15, Tailwind CSS, Lucide-React 등 구체적인 기술 스택을 처음부터 못 박아두면 AI가 쓸데없는 구형 라이브러리를 쓰지 않습니다.",
      examplePrompt:
        "Next.js App Router와 Tailwind CSS를 사용해. 책 표지 이미지, 제목, 평점(별 5개), 한 줄 감상평을 입력하는 독서 카드 컴포넌트를 만들고, 로컬스토리지에 저장되어 새로고침해도 유지되게 작성해줘.",
      deliverables: ["기능별 단계적 프롬프트", "컴포넌트 단위 조립", "상태 관리 & 데이터 스키마"],
    },
    {
      num: "03",
      title: "실시간 핑퐁 디버깅 & 튜닝",
      subtitle: "Instant Feedback Loop",
      icon: RefreshCw,
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400",
      description:
        "로컬 브라우저 창과 에디터를 나란히 띄우고 실시간으로 보면서 피드백합니다. 에러가 나면 두려워하지 말고 터미널의 빨간 에러 메시지를 통째로 복사해 AI에게 던지세요.",
      dingcoTip:
        "💡 딩코 팁: '이 버튼 위치 오른쪽으로 10px 옮겨주고, 클릭할 때 축하 컨페티(Confetti) 폭죽 애니메이션 나오게 해줘'처럼 아주 직관적인 감각으로 명령하세요.",
      examplePrompt:
        "터미널에 다음 오류가 발생했어: 'Unhandled Runtime Error: Hydration failed because the initial UI does not match'. useEffect 안에서 로컬스토리지를 읽도록 안전하게 수정해줘.",
      deliverables: ["에러 로그 즉시 복붙 해결", "UI 미세 조정 (피그마 수준)", "인터랙션 & 마이크로 애니메이션"],
    },
    {
      num: "04",
      title: "원클릭 런칭 & 세상과 공유",
      subtitle: "One-Click Ship & Scale",
      icon: Rocket,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400",
      description:
        "로컬 컴퓨터에만 머물러 있는 프로젝트는 이제 그만! Vercel과 GitHub을 연동하여 1분 만에 전 세계 누구나 접속할 수 있는 실제 라이브 URL을 얻습니다.",
      dingcoTip:
        "💡 딩코 팁: Supabase나 Clerk을 붙이면 로그인, 데이터베이스, 결제(토스페이먼츠/Stripe)까지 AI와 함께 반나절 만에 비즈니스 프로덕트로 진화합니다.",
      examplePrompt:
        "이 프로젝트를 Vercel에 배포하기 위해 환경변수 설정 가이드와 `next.config.js` 최적화 코드를 작성해주고, 배포 체크리스트를 점검해줘.",
      deliverables: ["GitHub 원격 레포 연동", "Vercel 초고속 전세계 무료 배포", "커스텀 도메인 & SNS 공유"],
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(index);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const current = steps[selectedStep];

  return (
    <section id="roadmap" className="py-24 relative bg-[#090b14]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Master Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            딩코딩코의{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              4단계 바이브코딩
            </span>{" "}
            마스터 로드맵
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            비전공자도 1시간 만에 감을 잡는 체계적인 AI 페어 프로그래밍 실전 프로세스입니다.
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = selectedStep === idx;
            return (
              <button
                key={s.num}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-b from-purple-900/40 to-slate-900/80 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-purple-500 text-white"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    STEP {s.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? s.accent : "text-slate-500"}`} />
                </div>
                <div className="text-sm font-bold text-white tracking-tight">{s.title}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{s.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent p-1 border border-white/10 shadow-2xl">
          <div className="rounded-[22px] bg-[#0d111e]/95 p-6 sm:p-10 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Explanation */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    STEP {current.num}.
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{current.title}</h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>

                {/* Dingco Secret Tip Box */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs sm:text-sm text-purple-200">
                  {current.dingcoTip}
                </div>

                {/* Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    이 단계에서 얻게 되는 결과물
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {current.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Copyable Prompt Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#070910] border border-white/10 p-5 shadow-inner relative group">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <span className="text-xs font-mono text-purple-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      실전 추천 프롬프트 템플릿
                    </span>
                    <button
                      onClick={() => handleCopy(current.examplePrompt, selectedStep)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-medium text-slate-200 transition cursor-pointer"
                    >
                      {copiedPrompt === selectedStep ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>복사완료!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>복사하기</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed bg-black/50 p-3.5 rounded-xl border border-white/5 select-all">
                    &ldquo;{current.examplePrompt}&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 flex items-center gap-1">
                    <span>💡 복사해서 Cursor, Claude 또는 Antigravity에 바로 붙여넣어 보세요!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
