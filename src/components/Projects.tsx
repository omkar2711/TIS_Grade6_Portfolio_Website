import React, { useState } from 'react';
import { ArrowUpRight, Plus, Sparkles, FolderKanban } from 'lucide-react';
import { Project, ThemeColor } from '../types';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  themeColor: ThemeColor;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onSelectProject,
  onOpenAddModal,
  themeColor,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'stem') return p.category.toLowerCase().includes('stem') || p.category.toLowerCase().includes('science');
    if (activeFilter === 'coding') return p.category.toLowerCase().includes('scratch') || p.category.toLowerCase().includes('computer');
    if (activeFilter === 'eco') return p.category.toLowerCase().includes('environmental') || p.category.toLowerCase().includes('math');
    return true;
  });

  const getAccentBtn = () => {
    switch (themeColor) {
      case 'sky':
        return 'text-sky-700 hover:text-sky-800';
      case 'emerald':
        return 'text-emerald-700 hover:text-emerald-800';
      case 'rose':
        return 'text-rose-700 hover:text-rose-800';
      case 'amber':
      default:
        return 'text-amber-800 hover:text-amber-900';
    }
  };

  const getPrimaryAddBtn = () => {
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
    <section id="projects" className="py-16 md:py-24 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2">
              Featured Work · Hands-On Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              My Grade 6 Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              Here are my favorite projects from this year, covering green engineering, interactive Scratch games, and real-world science observations. Click any card to explore what I built and what I learned!
            </p>
          </div>

          {/* Action to Add New Project & Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Interactive filter tabs */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border-2 border-sky-200 shadow-xs text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                All Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveFilter('stem')}
                className={`px-3 py-1.5 font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'stem'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                STEM & Robotics
              </button>
              <button
                onClick={() => setActiveFilter('coding')}
                className={`px-3 py-1.5 font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'coding'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                Coding
              </button>
              <button
                onClick={() => setActiveFilter('eco')}
                className={`px-3 py-1.5 font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'eco'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                Eco & Math
              </button>
            </div>

            <button
              onClick={onOpenAddModal}
              className="px-4 py-2.5 text-xs font-black rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 border-2 border-yellow-500 shadow-sm transition-all flex items-center gap-1.5 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* 3-Project Card Grid (Responsive: 1 col on mobile, 3 cols on lg desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl border-2 border-sky-200/90 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-200 overflow-hidden"
              >
                {/* Visual Container */}
                <div className="relative w-full aspect-4/3 bg-sky-100 overflow-hidden border-b-2 border-sky-100">
                  {!hasError ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-sky-100 to-blue-50">
                      <FolderKanban className="w-10 h-10 text-sky-600 mb-2" />
                      <span className="text-xs font-bold text-slate-800">{project.title}</span>
                      <span className="text-2xs text-slate-500 mt-0.5">{project.category}</span>
                    </div>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata kicker with typographic separator */}
                    <div className="text-xs font-semibold text-sky-800 flex items-center gap-2">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.metadata.split('·')[0]}</span>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 group-hover:text-sky-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Materials & Tools - unboxed tags */}
                  <div className="pt-2 border-t border-sky-100 space-y-2">
                    <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider">
                      Key Tools / Materials
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-2xs px-2.5 py-1 rounded-md bg-sky-50 text-sky-900 border border-sky-200/70 font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-2xs px-1.5 py-0.5 text-slate-500 font-medium">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Open Detail Trigger - Bright Yellow Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 px-4 text-xs font-black rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 border border-yellow-500 shadow-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Read Full Story & Demo</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">No projects match this filter.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-2 text-xs font-bold text-amber-600 hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
