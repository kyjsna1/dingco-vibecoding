"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Clock, 
  ExternalLink, 
  Layers, 
  Code, 
  Flame, 
  ArrowUpRight,
  Eye,
  CheckCircle2
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  time: string;
  vibe: string;
  description: string;
  techStack: string[];
  keyPrompt: string;
  gradient: string;
  badge: string;
}

export default function Showcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "cocktail",
      title: "네온 믹솔로지 • AI 칵테일 레시피 바",
      category: "인터랙티브 웹 & AI 연동",
      time: "25분 완성",
      vibe: "사이버펑크 네온 다크 & 감성 바텐더",
      description:
        "사용자가 오늘 기분이나 보유한 술(진, 보드카, 탄산수 등)을 말하면 AI 바텐더가 맞춤형 시그니처 칵테일 레시피와 잔 일러스트를 즉각 생성해주는 인터랙티브 서비스.",
      techStack: ["Next.js App Router", "Tailwind CSS", "OpenAI GPT-4o", "Canvas Confetti"],
      keyPrompt:
        "사이버펑크 바의 마스터 바텐더 페르소나를 줘. 보라색과 네온 핑크의 글래스모피즘 카드로 재료 믹싱 애니메이션을 연출하고, 나만의 칵테일 카드 이미지를 캡처 저장할 수 있게 해줘.",
      gradient: "from-fuchsia-600/30 to-purple-900/30",
      badge: "조회수 12만+ 튜토리얼",
    },
    {
      id: "launchcraft",
      title: "LaunchCraft • 1인 창업가 원클릭 랜딩 빌더",
      category: "Micro-SaaS & DB 연동",
      time: "40분 완성",
      vibe: "미니멀 애플 스타일 & 모던 글래스",
      description:
        "아이디어 키워드 3개만 넣으면 서비스 소개 랜딩페이지를 실시간으로 작성해주고, 사전 예약 이메일을 Supabase 데이터베이스에 자동 수집하는 초고속 랜딩 제작 툴.",
      techStack: ["Next.js", "Supabase Database", "Tailwind CSS", "Vercel Deploy"],
      keyPrompt:
        "신제품 사전등록 랜딩페이지를 깔끔한 샌프란시스코 테크 스타트업 스타일로 만들어줘. 이메일 유효성 검사 후 Supabase 'leads' 테이블에 저장하고 축하 메시지를 띄워줘.",
      gradient: "from-cyan-600/30 to-blue-900/30",
      badge: "실제 런칭 프로젝트",
    },
    {
      id: "lofi-station",
      title: "Lo-Fi Vibe Station • 몰입형 사운드 타이머",
      category: "오디오 & 캔버스 애니메이션",
      time: "20분 완성",
      vibe: "비 내리는 밤 감성 & 빈티지 레트로",
      description:
        "빗소리, 장작 타는 소리, 카페 소음을 슬라이더로 믹싱하며 25분 포모도로 집중 타이머를 돌릴 수 있는 힐링 집중 플랫폼.",
      techStack: ["React", "Web Audio API", "HTML5 Canvas Rain FX", "Tailwind CSS"],
      keyPrompt:
        "비 내리는 애니메이션 캔버스를 배경으로 깔고, Web Audio API로 3가지 화이트노이즈의 볼륨을 독립적으로 제어하는 미니멀 다크 모드 포모도로 타이머를 작성해줘.",
      gradient: "from-amber-600/30 to-rose-900/30",
      badge: "수강생 만족도 1위",
    },
    {
      id: "interview-coach",
      title: "InterviewAI • 실시간 면접 시뮬레이터",
      category: "음성 AI & 데이터 시각화",
      time: "35분 완성",
      vibe: "신뢰감 있는 딥블루 & 하이테크",
      description:
        "직무를 입력하면 AI 면접관이 실제 면접 질문을 던지고, 유저의 답변을 분석해 논리성, 전달력, 어휘력을 레이더 차트로 시각화해 피드백을 제공.",
      techStack: ["Next.js", "Claude 3.7 Sonnet", "Web Speech API", "Chart.js"],
      keyPrompt:
        "테크 기업 시니어 면접관처럼 행동해. 답변을 듣고 3초 안에 STAR 기법에 맞추어 점수(100점 만점)와 구체적 개선 문장을 3줄로 요약 피드백해주는 대시보드를 만들어줘.",
      gradient: "from-emerald-600/30 to-teal-900/30",
      badge: "취업 준비생 인기",
    },
  ];

  return (
    <section id="showcase" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>Real World Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            딩코딩코 바이브코딩으로 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              30분 만에 탄생한 실제 결과물
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            코딩 지식 한 줄 없이도 오직 아이디어와 대화만으로 완성된 실제 프로젝트들을 확인해보세요.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl p-6 sm:p-7 border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl relative group hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between`}
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 border border-white/15 text-slate-200">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    <Clock className="w-3 h-3" />
                    <span>{project.time}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-purple-300 font-semibold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>바이브: {project.vibe}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:bg-purple-600/80 group-hover:border-purple-500"
              >
                <Eye className="w-4 h-4 text-cyan-300" />
                <span>핵심 프롬프트 & 제작 비법 보기</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal: Project Details & Prompt */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-2xl w-full rounded-3xl bg-[#0e1220] border border-purple-500/40 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    딩코딩코 바이브코딩 아카이브
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    프로젝트 설명
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-300 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      실제 사용된 딩코의 핵심 마스터 프롬프트
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedProject.keyPrompt);
                        alert("프롬프트가 클립보드에 복사되었습니다!");
                      }}
                      className="text-[11px] text-cyan-400 hover:text-cyan-300 underline"
                    >
                      프롬프트 복사
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed bg-[#06080e] p-3 rounded-lg border border-white/5 select-all">
                    &ldquo;{selectedProject.keyPrompt}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                  <div className="text-xs text-slate-400">
                    소요 시간: <strong className="text-emerald-400">{selectedProject.time}</strong> •
                    추천 툴: <strong className="text-purple-300">Cursor + Claude 3.7</strong>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs"
                  >
                    확인 완료
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
