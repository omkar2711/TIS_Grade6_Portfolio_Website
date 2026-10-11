import React from 'react';
import { studentProfile, initialProjects, skillCategories } from '../data/portfolioData';
import { Project } from '../types';

interface PrintSummaryProps {
  projects: Project[];
}

export const PrintSummary: React.FC<PrintSummaryProps> = ({ projects }) => {
  return (
    <div className="hidden print:block p-8 bg-white text-slate-900 max-w-4xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{studentProfile.name}</h1>
          <p className="text-sm font-semibold text-slate-700">
            {studentProfile.grade} Student Portfolio · {studentProfile.school}
          </p>
          <p className="text-xs text-slate-500 mt-1">{studentProfile.tagline}</p>
        </div>
        <div className="text-right text-xs text-slate-500">
          <p>Academic Year 2025–2026</p>
          <p>Supervised Student Showcase</p>
          <p className="font-mono text-2xs mt-1">student-showcase@oakridge.edu</p>
        </div>
      </div>

      {/* Intro */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Introduction & About Me
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">{studentProfile.introBio}</p>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
          Featured Grade 6 Projects
        </h2>
        <div className="space-y-4">
          {projects.map((proj) => (
            <div key={proj.id} className="border border-slate-300 p-3 rounded-lg space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-900">{proj.title}</span>
                <span className="text-2xs text-slate-600">{proj.metadata}</span>
              </div>
              <p className="text-2xs text-slate-700">{proj.shortDescription}</p>
              <div className="text-2xs text-slate-500">
                <span className="font-semibold text-slate-700">Tools: </span>
                {proj.tools.join(', ')}
              </div>
              {proj.awardOrFeedback && (
                <p className="text-2xs italic text-slate-600 bg-slate-50 p-1.5 rounded">
                  {proj.awardOrFeedback.note} — {proj.awardOrFeedback.from}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
          Skills & Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-4 text-2xs">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="border-t border-slate-200 pt-1.5">
              <span className="font-bold text-slate-800 block mb-1">{cat.title}:</span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                {cat.items.map((item) => (
                  <li key={item.id}>
                    <span className="font-medium">{item.name}</span> ({item.level})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-200 text-2xs text-center text-slate-500">
        Printed from Maya Lin's Grade 6 Portfolio · Oakridge Middle School Science Dept
      </div>
    </div>
  );
};
