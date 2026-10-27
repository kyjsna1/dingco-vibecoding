"use client";

import { 
  Sparkles, 
  Split, 
  Bug, 
  Image as ImageIcon, 
  GitBranch, 
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Waves
} from "lucide-react";

export default function GoldenTips() {
  const tips = [
    {
      number: "01",
      title: "작게 쪼개어 지시하라 (Divide & Conquer)",
      icon: Split,
      bad: "“넷플릭스 같은 완벽한 스트리밍 사이트 한 번에 만들어줘”",
      good: "“1단계: 다크 모드 배경에 최신 영화 썸네일이 가로로 스크롤되는 캐러셀 컴포넌트부터 만들어줘”",
      explanation:
        "AI는 맥락의 길이가 길어질수록 환각(Hallucination)을 일으킵니다. 레고 블록을 한 단씩 쌓듯이 하나의 작은 기능 단위로 나누어 지시하세요.",
      color: "from-blue-600/20 to-cyan-500/10",
      accent: "text-cyan-400",
    },
    {
      number: "02",
      title: "에러 로그는 AI의 가장 맛있는 먹이다",
      icon: Bug,
      bad: "“사이트가 안 돼요. 왜 이런가요?” (코드만 다시 물어봄)",
      good: "터미널이나 브라우저 콘솔의 빨간색 Error Stacktrace 전문을 그대로 복붙",
      explanation:
        "초보자분들이 가장 많이 하는 실수가 에러를 숨기거나 혼자 끙끙 앓는 것입니다. AI는 에러 로그만 보면 정확한 파일명과 줄 번호까지 5초 만에 셀프 패치합니다.",
      color: "from-sky-600/20 to-blue-900/20",
      accent: "text-sky-400",
    },
    {
      number: "03",
      title: "이미지 1장이 1,000단어의 설명보다 낫다",
      icon: ImageIcon,
      bad: "“뭔가 좀 현대적이면서도 미래지향적이고 심플하게 해줘”",
      good: "마음에 드는 레퍼런스 웹사이트 스크린샷을 Claude/Cursor에 드래그 앤 드롭",
      explanation:
        "비주얼 언어 모델은 색상, 여백, 폰트 비율을 시각적으로 정확히 파악합니다. 스크린샷을 첨부하고 “이 카드의 투명도와 그라데이션 스타일을 벤치마킹해줘”라고 하세요.",
      color: "from-cyan-600/20 to-teal-500/10",
      accent: "text-cyan-300",
    },
    {
      number: "04",
      title: "깃(Git) 커밋은 게임의 세이브 포인트다",
      icon: GitBranch,
      bad: "하루 종일 커밋 한 번 안 하고 AI에게 계속 코드 덮어쓰기 시키기",
      good: "한 기능이 잘 돌아가면 즉시 `git commit -m 'save: 로그인 팝업 완료'`",
      explanation:
        "바이브코딩의 진정한 마법은 ‘실패해도 언제든 돌아갈 수 있는 안전망’에서 나옵니다. 언제든 이전 세이브 포인트로 1초 만에 되돌릴 수 있다면 두려울 것이 없습니다.",
      color: "from-blue-700/20 to-indigo-600/10",
      accent: "text-blue-400",
    },
    {
      number: "05",
      title: "시스템 룰(.cursorrules / AGENTS.md)을 세팅하라",
      icon: FileCode,
      bad: "매 대화마다 “Next.js 쓰고 TypeScript 써줘”를 반복 입력하기",
      good: "프로젝트 루트에 기술 스택과 코딩 스타일 룰을 한 번만 적어두기",
      explanation:
        "프로젝트에 룰 파일 하나만 넣어두면 AI가 매번 질문하지 않고도 우리가 정한 최신 기술 스택(Tailwind v4, 한국어 카피라이팅, 오션 블루 디자인)을 기본 탑재하여 코딩합니다.",
      color: "from-sky-500/20 to-cyan-500/10",
      accent: "text-sky-300",
    },
  ];

  return (
    <section id="tips" className="py-24 relative bg-[#040816]/70 border-t border-blue-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span>VibeWave’s Golden Rules</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            바이브웨이브가 전하는 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              바이브코딩 필승 5계명
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            AI와 소통할 때 이것만 지켜도 개발 효율이 500% 급상승합니다.
          </p>
        </div>

        {/* Tips Cards Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.number}
                className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-r ${tip.color} border border-blue-500/20 backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-cyan-400/40 shadow-lg`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#030914] border border-blue-500/30 flex items-center justify-center shrink-0 shadow-inner">
                    <Icon className={`w-6 h-6 ${tip.accent}`} />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-blue-900/40 text-cyan-200 border border-blue-400/20">
                        RULE {tip.number}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{tip.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {tip.explanation}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs">
                        <div className="font-bold text-red-400 flex items-center gap-1.5 mb-1">
                          <AlertTriangle className="w-3.5 h-3.5" /> 하수의 프롬프트 (Bad)
                        </div>
                        <div className="text-slate-400 line-through leading-relaxed">{tip.bad}</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-cyan-500/30 text-xs">
                        <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 바이브웨이브의 프롬프트 (Good)
                        </div>
                        <div className="text-slate-200 font-medium leading-relaxed">{tip.good}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
