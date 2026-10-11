import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeColor } from '../types';

interface NavbarProps {
  studentName: string;
  themeColor: ThemeColor;
  onOpenCheer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ studentName, themeColor, onOpenCheer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const yellowBtnClass =
    'bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold border border-yellow-500/80 shadow-xs active:scale-95';

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'My Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-sky-50/95 backdrop-blur-md border-b border-sky-200/80">
      {/* Strict 3-zone Top Bar Contract: Brand — 4-5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors flex items-center gap-2"
        >
          <span>{studentName}</span>
          <span className="text-xs font-semibold text-sky-800 tracking-normal hidden sm:inline">
            · Grade 6 Portfolio
          </span>
        </a>

        {/* Zone 2: 5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 hover:border-b-2 hover:border-slate-950 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheer}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${yellowBtnClass}`}
          >
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Leave a Cheer</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-sky-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-200 bg-sky-50 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-sky-100/70 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-sky-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheer();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-lg transition-all ${yellowBtnClass}`}
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Leave a Cheer</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
