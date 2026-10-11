import React, { useState } from 'react';
import {
  Code,
  Cpu,
  Presentation,
  Globe,
  FlaskConical,
  BarChart3,
  Sparkles,
  Hammer,
  Palette,
  Layout,
  Mic,
  Users,
  MessageSquare,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SkillItem, ThemeColor } from '../types';

interface SkillsProps {
  themeColor: ThemeColor;
}

export const Skills: React.FC<SkillsProps> = ({ themeColor }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const renderIcon = (name: string) => {
    const props = { className: 'w-4 h-4' };
    switch (name) {
      case 'Code':
        return <Code {...props} className="w-4 h-4 text-sky-600" />;
      case 'Cpu':
        return <Cpu {...props} className="w-4 h-4 text-indigo-600" />;
      case 'Presentation':
        return <Presentation {...props} className="w-4 h-4 text-amber-600" />;
      case 'Globe':
        return <Globe {...props} className="w-4 h-4 text-emerald-600" />;
      case 'FlaskConical':
        return <FlaskConical {...props} className="w-4 h-4 text-purple-600" />;
      case 'BarChart3':
        return <BarChart3 {...props} className="w-4 h-4 text-blue-600" />;
      case 'Hammer':
        return <Hammer {...props} className="w-4 h-4 text-orange-600" />;
      case 'Palette':
        return <Palette {...props} className="w-4 h-4 text-pink-600" />;
      case 'Layout':
        return <Layout {...props} className="w-4 h-4 text-teal-600" />;
      case 'Mic':
        return <Mic {...props} className="w-4 h-4 text-red-600" />;
      case 'Users':
        return <Users {...props} className="w-4 h-4 text-emerald-600" />;
      case 'MessageSquare':
        return <MessageSquare {...props} className="w-4 h-4 text-sky-600" />;
      default:
        return <Sparkles {...props} className="w-4 h-4 text-amber-600" />;
    }
  };

  const getLevelColor = (level: SkillItem['level']) => {
    switch (level) {
      case 'Confident':
        return 'text-emerald-700';
      case 'Practicing':
        return 'text-sky-700';
      case 'Exploring':
      default:
        return 'text-amber-700';
    }
  };

  const getAccentBg = () => {
    switch (themeColor) {
      case 'sky':
        return 'bg-sky-50 border-sky-200';
      case 'emerald':
        return 'bg-emerald-50 border-emerald-200';
      case 'rose':
        return 'bg-rose-50 border-rose-200';
      case 'amber':
      default:
        return 'bg-amber-50 border-amber-200';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-sky-50/70 border-t border-sky-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2">
            Toolbox & Knowledge · Learning in Action
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Skills & Things I'm Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            In Grade 6, we're constantly trying new tools. Here are the technical, scientific, and creative skills I use in and out of the classroom. Click any skill card to see where I used it in a real school project!
          </p>
        </div>

        {/* Selected Skill Spotlight Card */}
        {selectedSkill && (
          <div className="p-6 rounded-2xl mb-8 border-2 border-yellow-400 bg-yellow-50/90 shadow-md animate-in fade-in duration-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white shadow-xs border border-yellow-300">
                  {renderIcon(selectedSkill.iconName)}
                </div>
                <div>
                  <div className="text-xs text-slate-600 flex items-center gap-2">
                    <span>Selected Skill</span>
                    <span aria-hidden="true">·</span>
                    <span className={`font-bold ${getLevelColor(selectedSkill.level)}`}>
                      {selectedSkill.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-950">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="px-3 py-1 text-xs font-bold text-slate-950 bg-yellow-400 hover:bg-yellow-300 border border-yellow-500 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="mt-3 pt-3 border-t border-yellow-300/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-bold text-slate-800 block mb-0.5">What this skill means:</span>
                <p className="text-slate-700 leading-relaxed">{selectedSkill.description}</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-yellow-300/80 shadow-xs">
                <span className="font-bold text-slate-950 block mb-0.5">Where Maya used this in school:</span>
                <p className="text-slate-800 italic">“{selectedSkill.schoolExample}”</p>
              </div>
            </div>
          </div>
        )}

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl bg-white border-2 border-sky-200/90 shadow-xs hover:border-yellow-400 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-950 text-base">{category.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills in Category */}
              <div className="space-y-3 pt-2 border-t border-sky-100">
                {category.items.map((skill) => {
                  const isSelected = selectedSkill?.id === skill.id;

                  return (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(isSelected ? null : skill)}
                      className={`w-full text-left p-3 rounded-xl border-2 transition-all text-xs group flex items-start gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'border-yellow-500 bg-yellow-50 shadow-xs'
                          : 'border-sky-100 hover:border-yellow-400 bg-white hover:bg-sky-50/50'
                      }`}
                    >
                      <div className="p-1 rounded-md bg-sky-50 border border-sky-100 mt-0.5 shrink-0">
                        {renderIcon(skill.iconName)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-slate-900 group-hover:text-slate-950 truncate">
                          {skill.name}
                        </div>

                        {/* Clean unboxed metadata text */}
                        <div className="text-2xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                          <span className={getLevelColor(skill.level)}>{skill.level}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-sky-700 font-medium group-hover:text-slate-900">See usage →</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="text-2xs text-sky-800 font-medium text-center pt-1">
                Click any skill to see classroom examples
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
