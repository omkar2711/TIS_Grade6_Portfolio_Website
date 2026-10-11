import React, { useState } from 'react';
import { Send, Sparkles, MessageCircle, Mail, School, ShieldCheck, Printer, Check, Copy } from 'lucide-react';
import { initialCheers } from '../data/portfolioData';
import { GuestbookCheer, ThemeColor } from '../types';

interface ContactProps {
  themeColor: ThemeColor;
  onPrint: () => void;
}

export const Contact: React.FC<ContactProps> = ({ themeColor, onPrint }) => {
  const [cheers, setCheers] = useState<GuestbookCheer[]>(initialCheers);
  const [name, setName] = useState('');
  const [role, setRole] = useState<GuestbookCheer['role']>('Classmate');
  const [message, setMessage] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('⭐');
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const stickers = ['⭐', '🚀', '💡', '🌿', '🐢', '🎨', '🎉', '📚'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newCheer: GuestbookCheer = {
      id: `cheer-${Date.now()}`,
      authorName: name.trim(),
      role,
      message: message.trim(),
      sticker: selectedSticker,
      timestamp: 'Just now',
    };

    setCheers([newCheer, ...cheers]);
    setName('');
    setMessage('');
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  const copySchoolEmail = () => {
    navigator.clipboard.writeText('student-showcase@oakridge.edu');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getAccentBtn = () => {
    switch (themeColor) {
      case 'sky':
        return 'bg-sky-600 hover:bg-sky-700 text-white';
      case 'emerald':
        return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'rose':
        return 'bg-rose-600 hover:bg-rose-700 text-white';
      case 'amber':
      default:
        return 'bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold';
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-sky-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2">
            Connect & Guestbook · Say Hello
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Leave a Note & Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Thank you for checking out my Grade 6 projects! You can leave an encouraging cheer in my guestbook or contact my school department and guardians for project questions.
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Guestbook Feed & School Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sign Guestbook Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-sky-200/90 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-400" />
                <span>Sign Maya's Guestbook</span>
              </h3>
              <p className="text-xs text-slate-600">
                Share a quick thought, question, or encouragement!
              </p>
            </div>

            {submittedMessage && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-300">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your cheer was posted to the guestbook wall. 🎉</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mrs. Robinson, Sam from Science Club"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-sky-200 rounded-xl text-xs bg-sky-50/30 focus:border-yellow-400 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Who Are You?
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as GuestbookCheer['role'])}
                  className="w-full px-3.5 py-2.5 border-2 border-sky-200 rounded-xl text-xs bg-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="Classmate">Classmate / Peer</option>
                  <option value="Teacher">Teacher / Mentor</option>
                  <option value="Family & Friends">Family & Friends</option>
                  <option value="Visitor">Science Fair Visitor</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Pick a Sticker
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {stickers.map((stk) => (
                    <button
                      key={stk}
                      type="button"
                      onClick={() => setSelectedSticker(stk)}
                      className={`text-base p-2 rounded-xl border-2 transition-all cursor-pointer ${
                        selectedSticker === stk
                          ? 'border-yellow-500 bg-yellow-100 scale-110 shadow-xs'
                          : 'border-sky-100 hover:border-yellow-400 bg-white'
                      }`}
                    >
                      {stk}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Your Encouraging Note *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write a friendly note about the projects or what you liked most..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-sky-200 rounded-xl text-xs bg-sky-50/30 focus:border-yellow-400 focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-black bg-yellow-400 hover:bg-yellow-300 text-slate-950 border-2 border-yellow-500 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Post Note to Guestbook</span>
              </button>
            </form>

            <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-2xs text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>School-friendly guestbook</span>
              </span>
              <span>All cheers stored locally</span>
            </div>
          </div>

          {/* Right Column: Recent Cheers Wall & School Guardian Contact Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Cheers Wall */}
            <div className="bg-white p-6 rounded-3xl border-2 border-sky-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-sky-600" />
                  <span>Recent Cheers ({cheers.length})</span>
                </h3>
                <span className="text-xs font-bold text-sky-800">Live Feedback</span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {cheers.map((cheer) => (
                  <div
                    key={cheer.id}
                    className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/70 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{cheer.sticker}</span>
                        <span className="font-bold text-slate-950">{cheer.authorName}</span>
                        <span className="text-sky-300">·</span>
                        <span className="text-sky-800 font-semibold">{cheer.role}</span>
                      </div>
                      <span className="text-2xs text-slate-400 font-medium">{cheer.timestamp}</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed pl-7">
                      “{cheer.message}”
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* School & Guardian Contact Hub */}
            <div className="p-6 rounded-3xl bg-slate-950 text-white space-y-4 shadow-md border-2 border-sky-300/40">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/10">
                  <School className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm">Oakridge Middle School</h4>
                  <p className="text-xs text-sky-200">Grade 6 Science & Technology Department</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                For educational inquiries, science fair coordinator communication, or classroom collaboration, please reach out through our school office or parent coordinator:
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-2xl bg-white/10 border border-white/10 text-xs">
                <div className="flex items-center gap-2 text-slate-100">
                  <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="font-mono font-medium">student-showcase@oakridge.edu</span>
                </div>
                <button
                  onClick={copySchoolEmail}
                  className="px-3.5 py-1.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" /> : <Copy className="w-3.5 h-3.5 stroke-[2.5]" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-2xs text-slate-400">
                <span>Room 204 · Science Hall · Mon–Fri 8:30 AM – 3:30 PM</span>
                <button
                  onClick={onPrint}
                  className="no-print inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-bold cursor-pointer"
                >
                  <Printer className="w-3 h-3" />
                  <span>Print Student Portfolio Sheet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
