"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "코딩 지식이 아예 없는 문과생이나 비전공자도 정말 가능한가요?",
      a: "네, 100% 가능합니다! 바이브코딩은 기존처럼 for문, if문 같은 복잡한 문법을 외우는 공부가 아닙니다. 머릿속의 아이디어와 원하는 UI를 일상 한국어로 조리 있게 설명하고, AI와 대화하며 피드백을 주고받을 수만 있다면 첫날부터 실제 웹사이트를 만들어 배포할 수 있습니다.",
    },
    {
      q: "Cursor나 Claude 유료 구독 결제가 꼭 필요한가요?",
      a: "필수가 아닙니다. 무료 플랜(Cursor 무료 체험, v0 Free, Claude Free 등)으로도 충분히 첫 결과물을 만들어보실 수 있습니다. 다만 프로젝트가 커지거나 하루 종일 깊이 몰입하고 싶을 때는 월 20달러의 Cursor Pro 또는 Claude Pro 구독을 추천합니다.",
    },
    {
      q: "웹사이트 배포(Hosting)나 서버 유지비가 많이 드나요?",
      a: "아닙니다. Vercel, Supabase, Cloudflare 등 전 세계 최상위 테크 플랫폼들의 무료 티어(Free Tier)가 매우 관대하여, 초기 트래픽과 소규모 서비스는 0원(완전 무료)으로 글로벌 라이브 서비스 운영이 가능합니다.",
    },
    {
      q: "에러가 끝없이 발생하고 AI가 엉뚱한 코드를 짜면 어떻게 하나요?",
      a: "‘맥락 오염(Context Poisoning)’ 현상 때문입니다. 이럴 때는 당황하지 마시고 딩코의 룰대로 1) Git으로 이전 세이브포인트로 되돌아가거나, 2) 새 채팅 창을 열어 가장 최근에 잘 작동하던 파일만 지정한 뒤 한 번에 한 가지 문제만 단순하게 다시 지시하면 95% 이상 즉시 해결됩니다.",
    },
    {
      q: "바이브코딩으로 만든 사이트로 실제 창업이나 수익화가 가능한가요?",
      a: "이미 수많은 1인 창업가와 마케터들이 토스페이먼츠/Stripe를 붙여 실제 유료 구독 및 결제를 받고 있습니다. 아이디어 발상에서 첫 유료 고객 유치까지 과거 몇 달이 걸리던 주기가 이제 주말 이틀로 단축되었습니다.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#090b14]/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            바이브코딩을 시작하기 전 궁금한 점들을 명쾌하게 정리해 드립니다.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0d101d] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-semibold text-sm sm:text-base hover:bg-white/[0.02] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/40 text-xs flex items-center justify-center font-bold">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                    <div className="pl-9">{faq.a}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
