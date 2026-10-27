"use client";

import { Star, Heart, Waves } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "김민서",
      role: "스타트업 그로스 마케터",
      tag: "비전공자 / 문과 출신",
      content:
        "“개발 문법이라고는 HTML 태그 몇 개밖에 몰랐는데, 바이브웨이브 영상을 보고 이틀 만에 사내 리드 수집 자동화 대시보드를 런칭했습니다. 대표님이 외주 개발자 따로 뽑았냐고 깜짝 놀라시더라고요!”",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "박준혁",
      role: "프로덕트 UI/UX 디자이너",
      tag: "디자이너의 프로덕트화",
      content:
        "“항상 피그마 프로토타입에서 끝나던 제 작업물들이, 바이브웨이브의 프롬프팅 기법 덕분에 1시간 만에 실제 인터랙티브 웹으로 숨을 쉬기 시작했습니다. 디자이너가 개발까지 직접 하니 퀄리티 타협이 없어요.”",
      avatar: "🎨",
      rating: 5,
    },
    {
      name: "이성진",
      role: "10년 차 백엔드 엔지니어",
      tag: "현업 개발자 생산성 극대화",
      content:
        "“백엔드만 하던 터라 최신 프론트엔드 환경 설정이 늘 귀찮았는데, 바이브웨이브의 바이브코딩 접근법은 완전히 신세계였습니다. 사이드 프로젝트 제작 속도가 정말 10배는 빨라졌습니다.”",
      avatar: "💻",
      rating: 5,
    },
    {
      name: "최유리",
      role: "1인 마이크로 창업가",
      tag: "MVP 제작 및 수익화",
      content:
        "“외주 견적 1,800만 원 나와서 눈물 흘리며 포기하려던 서비스였는데, 주말 이틀 동안 바이브웨이브 치트시트 보면서 Cursor로 직접 만들어 Vercel에 배포했습니다. 지금 유료 결제 고객 120명 모았어요!”",
      avatar: "🚀",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span>Wall of Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            수많은 비개발자가 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              직접 경험한 바이브의 기적
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            바이브웨이브 커뮤니티와 함께 자신의 아이디어를 현실로 만든 분들의 생생한 후기입니다.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-blue-950/20 via-[#061026]/50 to-transparent border border-blue-500/20 backdrop-blur-xl relative group hover:border-cyan-400/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-cyan-400">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-cyan-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-cyan-300 bg-blue-950/70 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  {rev.tag}
                </span>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {rev.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-blue-500/10">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-cyan-400/40 flex items-center justify-center text-lg shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  {rev.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{rev.name}</div>
                  <div className="text-xs text-cyan-400/80">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
