import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { Project, ThemeColor } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  themeColor: ThemeColor;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
  themeColor,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Science Fair & STEM');
  const [shortDesc, setShortDesc] = useState('');
  const [tools, setTools] = useState('');
  const [learnings, setLearnings] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !shortDesc.trim()) return;

    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: title.trim(),
      category: category.trim(),
      metadata: 'Grade 6 Project · 2026 Showcase',
      shortDescription: shortDesc.trim(),
      fullStory: `${shortDesc.trim()} Designed and documented for 6th grade coursework with independent testing and evaluation.`,
      image: '/src/assets/images/project_solar_rover_1791732504233.jpg', // fallback image
      imageAlt: `${title.trim()} project display`,
      tools: tools
        ? tools.split(',').map((t) => t.trim()).filter(Boolean)
        : ['Notebook', 'Lab Materials', 'Presentation Slides'],
      keyLearnings: learnings
        ? learnings.split('\n').map((l) => l.trim()).filter(Boolean)
        : ['Applied the scientific inquiry process.', 'Collaborated with classmates and documented findings.'],
    };

    onAddProject(newProject);
    setTitle('');
    setShortDesc('');
    setTools('');
    setLearnings('');
    onClose();
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 id="add-project-title" className="text-lg font-bold text-slate-900">
              Add a New Project
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Cardboard Hydraulic Crane, Space Diorama..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Category / Subject
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <option value="Science Fair & STEM">Science Fair & STEM</option>
              <option value="Computer Science & Scratch">Computer Science & Scratch</option>
              <option value="Environmental Science & Math">Environmental Science & Math</option>
              <option value="Arts, Maker & Writing">Arts, Maker & Writing</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Short Description *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Describe what you built or investigated and why it was fun..."
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Tools & Materials (comma separated)
            </label>
            <input
              type="text"
              placeholder="e.g. Cardboard, Syringes, Water, Ruler"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              What I Learned (one point per line)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. How liquid pressure transfers force without compressing."
              value={learnings}
              onChange={(e) => setLearnings(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 font-black text-slate-950 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-500 rounded-xl shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add to My Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
