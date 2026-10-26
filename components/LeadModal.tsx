"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, X, CheckCircle, FileText, ArrowRight, Download } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#06b6d4", "#f43f5e", "#fbbf24"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-lg w-full rounded-3xl bg-[#0e111d] border border-purple-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300">
                <FileText className="w-5 h-5 text-cyan-300" />
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                FREE GUIDEBOOK
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              딩코의 바이브코딩 시크릿 치트시트
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Cursor/Claude 즉시 복붙 프롬프트 30선과 5분 만에 끝내는 Vercel 배포 체크리스트 PDF를 무료로 보내드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  이름 / 닉네임
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 딩코러버"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  이메일 주소
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>무료 PDF 치트시트 즉시 받기</span>
              </button>
            </form>

            <p className="text-[11px] text-slate-500 text-center mt-4">
              🔒 스팸 메일은 절대 보내지 않으며 언제든 구독 취소할 수 있습니다.
            </p>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">신청이 완료되었습니다!</h3>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
              <strong>{email}</strong> 주소로 치트시트 다운로드 링크를 발송했습니다. 지금 바로 아래 버튼을 눌러 온라인으로도 열람하실 수 있습니다.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  alert("🎉 치트시트 열람 페이지로 이동합니다!");
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-900/40 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>PDF 치트시트 지금 바로 열람하기</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
