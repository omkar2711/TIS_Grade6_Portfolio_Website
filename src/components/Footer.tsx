import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-sky-200 bg-sky-100/50 py-12 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="space-y-1 text-center md:text-left">
          <p className="font-extrabold text-slate-950 text-base">{studentProfile.name}</p>
          <p className="text-sky-800 font-medium">
            {studentProfile.grade} · Oakridge Middle School · Class of 2026 Showcase
          </p>
        </div>

        {/* Center: Motto */}
        <div className="flex items-center gap-1.5 text-slate-700 text-center font-semibold">
          <span>Made with curiosity, cardboard & code</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>

        {/* Right: Back to top action */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-yellow-500 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
