"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Roadmap from "@/components/Roadmap";
import Showcase from "@/components/Showcase";
import PromptStudio from "@/components/PromptStudio";
import GoldenTips from "@/components/GoldenTips";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090e] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Soundwave / Vibe Float Indicator at bottom right */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121626]/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
        <div className="flex items-end gap-0.5 h-4">
          <span className="w-1 bg-purple-400 rounded-full animate-soundwave-1" />
          <span className="w-1 bg-cyan-400 rounded-full animate-soundwave-2" />
          <span className="w-1 bg-fuchsia-400 rounded-full animate-soundwave-3" />
          <span className="w-1 bg-indigo-400 rounded-full animate-soundwave-4" />
          <span className="w-1 bg-rose-400 rounded-full animate-soundwave-5" />
        </div>
        <span className="text-[11px] font-mono font-bold text-slate-300">
          DINGCO VIBE ACTIVE
        </span>
      </div>

      {/* Global Navbar */}
      <Navbar onOpenCheatSheet={() => setIsCheatSheetOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Terminal Visualizer */}
        <Hero />

        {/* 2. What is Vibe Coding & Comparison Section */}
        <Comparison />

        {/* 3. 4-Step Master Roadmap Curriculum */}
        <Roadmap />

        {/* 4. Real 30-min Projects Showcase */}
        <Showcase />

        {/* 5. Interactive Vibe Prompt Studio Tool */}
        <PromptStudio />

        {/* 6. Golden Rules & Cheat Keys */}
        <GoldenTips />

        {/* 7. Community Wall & Testimonials */}
        <Testimonials />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Final Call to Action */}
        <CallToAction onOpenCheatSheet={() => setIsCheatSheetOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Generation & Cheat Sheet Modal */}
      <LeadModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
