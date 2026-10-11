import React, { useState } from 'react';
import { ArrowDown, Award, BookOpen, Compass, Sparkles, Printer, Palette } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';
import { ThemeColor } from '../types';

interface HeroProps {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  onOpenCheer: () => void;
  onPrint: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  themeColor,
  setThemeColor,
  onOpenCheer,
  onPrint,
}) => {
  const [imageError, setImageError] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-100/60 via-sky-50 to-sky-100/30">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-200/40 via-blue-100/20 to-transparent -z-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-sky-200/70 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-600" />
            <span className="font-semibold text-slate-700">Oakridge Middle School · 6th Grade Academic Showcase</span>
          </div>

          <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border border-sky-200 text-xs text-slate-700 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
            <span>Class of 2026</span>
          </div>
        </div>

        {/* 2-Column Split: Typographic hierarchy left, high-res photo container right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {/* Unboxed clean metadata kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-200/70 border border-sky-300 text-sky-950 text-xs sm:text-sm font-bold tracking-wide">
                <span>👋 Welcome to my website</span>
                <span aria-hidden="true">·</span>
                <span>Grade 6 Student Portfolio</span>
              </div>

              {/* Large, High-Contrast, Easy to Read Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.12] text-balance">
                Hi, I'm <span className="underline decoration-yellow-400 decoration-wavy decoration-3 underline-offset-8">{studentProfile.name}</span>. I love coding games, exploring nature & building STEM gizmos.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
              {studentProfile.introBio}
            </p>

            {/* Student Motto / Quote box */}
            <div className="p-4 rounded-2xl bg-white border-2 border-sky-200/80 shadow-xs max-w-xl">
              <p className="text-sm font-semibold italic text-slate-800">
                {studentProfile.quote}
              </p>
              <div className="mt-1.5 text-xs text-sky-800 font-medium">
                Maya's motto for the 2026 science year
              </div>
            </div>

            {/* Bright Yellow Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 text-base rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black border-2 border-yellow-500 shadow-md flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenCheer}
                className="px-5 py-3 text-base font-bold text-slate-950 bg-white hover:bg-yellow-100 border-2 border-yellow-400 rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-600 fill-yellow-400" />
                <span>Sign My Guestbook</span>
              </button>

              <button
                onClick={onPrint}
                className="no-print px-4 py-3 text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-sky-200/50 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Print or save one-page student summary"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print Summary</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container (High-fidelity student photo asset) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-white p-3 border-2 border-sky-200 shadow-lg">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-sky-100">
                {!imageError ? (
                  <img
                    src={studentProfile.avatarImage}
                    alt="Maya Lin smiling in the Oakridge Middle School STEM maker-space"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-sky-100 to-blue-100 text-slate-900">
                    <Sparkles className="w-12 h-12 text-yellow-500 mb-3" />
                    <p className="font-extrabold text-xl">{studentProfile.name}</p>
                    <p className="text-xs text-slate-600 mt-1">Grade 6 Explorer · Maker Space</p>
                  </div>
                )}

                {/* Photo overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-sky-200 shadow-sm flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-950">Maya Lin · Room 204</span>
                  <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-md">
                    Oakridge STEM Club
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI / Achievement Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-sky-200 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/90 backdrop-blur-xs p-6 rounded-2xl border-2 border-sky-200/80 shadow-sm">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono tabular-nums">
              Grade 6
            </div>
            <div className="text-xs font-bold text-slate-800">Oakridge Middle School</div>
            <div className="text-xs text-sky-800">2025–2026 Academic Year</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono tabular-nums flex items-center gap-1.5">
              <span>14</span>
              <span className="text-sm font-sans font-normal text-slate-500">builds</span>
            </div>
            <div className="text-xs font-bold text-slate-800">STEM & Scratch Projects</div>
            <div className="text-xs text-sky-800">Robotics, coding & science</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono tabular-nums flex items-center gap-1.5">
              <span>1st</span>
              <Award className="w-5 h-5 text-yellow-500 fill-yellow-400" />
            </div>
            <div className="text-xs font-bold text-slate-800">Science Fair Blue Ribbon</div>
            <div className="text-xs text-sky-800">Solar Explorer Rover Project</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono tabular-nums flex items-center gap-1.5">
              <span>142</span>
              <BookOpen className="w-5 h-5 text-sky-600" />
            </div>
            <div className="text-xs font-bold text-slate-800">Books Read This Year</div>
            <div className="text-xs text-sky-800">Science, fantasy & nature</div>
          </div>
        </div>
      </div>
    </section>
  );
};
