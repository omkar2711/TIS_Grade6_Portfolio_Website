import React, { useState } from 'react';
import { Heart, CheckCircle2, Circle, Sparkles, BookOpen, Cpu, Leaf, Palette, Trophy } from 'lucide-react';
import { initialGoals } from '../data/portfolioData';
import { StudentGoal, ThemeColor } from '../types';

interface AboutMeProps {
  themeColor: ThemeColor;
}

export const AboutMe: React.FC<AboutMeProps> = ({ themeColor }) => {
  const [goals, setGoals] = useState<StudentGoal[]>(initialGoals);

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g))
    );
  };

  const completedCount = goals.filter((g) => g.completed).length;
  const progressPercent = Math.round((completedCount / goals.length) * 100);

  const themeClasses = {
    amber: 'text-amber-700 bg-amber-50 border-amber-200',
    sky: 'text-sky-700 bg-sky-50 border-sky-200',
    emerald: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    rose: 'text-rose-700 bg-rose-50 border-rose-200',
  }[themeColor];

  const progressBarClass = {
    amber: 'bg-amber-500',
    sky: 'bg-sky-500',
    emerald: 'bg-emerald-500',
    rose: 'bg-rose-500',
  }[themeColor];

  const subjects = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: 'STEM & Robotics',
      desc: 'Programming Micro:bits to buzz, assembling gearboxes, and testing how motors behave with different voltages.',
      highlight: 'Oakridge Robotics Club',
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-500" />,
      title: 'Earth & Life Science',
      desc: 'Investigating renewable energy, soil biology, and tracking rainfall in our campus raised-bed garden.',
      highlight: 'Eco-Club Ambassador',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-sky-500" />,
      title: 'Coding & Scratch',
      desc: 'Creating playable 2D games with sound effects, custom character sprites, and math challenge levels.',
      highlight: '380+ blocks coded',
    },
    {
      icon: <Palette className="w-5 h-5 text-rose-500" />,
      title: 'Creative Arts & Design',
      desc: 'Sketching cartoon characters, building sturdy cardboard prototypes, and designing colorful science posters.',
      highlight: 'Science Fair Displays',
    },
  ];

  const funFacts = [
    { label: 'Favorite Book Series', val: 'Percy Jackson & The Olympians (Rick Riordan)' },
    { label: 'Favorite School Snack', val: 'Honeycrisp apple slices & sunflower butter' },
    { label: 'Top Science Fair Moment', val: 'Seeing the solar buggy spin its wheels under direct sunlight for the first time' },
    { label: 'What I Want to Be', val: 'A renewable energy robotics engineer building solar probes' },
    { label: 'Favorite Sport', val: 'Midfield soccer for the Oakridge Tigers' },
    { label: 'Favorite Animal', val: 'Green Sea Turtles & African Elephant' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-sky-50/70 border-t border-sky-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2">
            Get to Know Me · Life in Grade 6
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Curious about science, code, and how everything connects.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Grade 6 has been an amazing adventure! Moving to middle school meant having science lab tables, joining after-school clubs, and taking on bigger independent projects. Here is a little glimpse into what I care about most.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Interests & Fun Facts */}
          <div className="lg:col-span-7 space-y-8">
            {/* 4 Academic Interests Cards */}
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                <span>My Favorite Subjects & Activities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjects.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border-2 border-sky-200/80 shadow-xs hover:border-sky-300 transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-sky-50 border border-sky-100">
                        {item.icon}
                      </div>
                      {/* Clean unboxed metadata text */}
                      <span className="text-xs text-sky-800 font-semibold">
                        {item.highlight}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-950 text-base">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts List with Unboxed Typography */}
            <div className="p-6 rounded-2xl bg-white border-2 border-sky-200/80 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-400" />
                <span>Fun Facts About Me</span>
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs">
                {funFacts.map((fact) => (
                  <div key={fact.label} className="border-b border-sky-100 pb-2.5">
                    <dt className="text-slate-500 font-medium">{fact.label}</dt>
                    <dd className="font-bold text-slate-900 mt-0.5">{fact.val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Interactive 6th Grade Goals Tracker */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white border-2 border-sky-200/80 shadow-xs sticky top-24 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                    <span>My Grade 6 Goals</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Things I set out to accomplish this school year
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black font-mono text-slate-950 tabular-nums">
                    {progressPercent}%
                  </span>
                  <div className="text-2xs text-slate-500 font-medium">Completed</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 bg-sky-100 rounded-full overflow-hidden border border-sky-200">
                <div
                  className="h-full transition-all duration-500 bg-yellow-400"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Goals checklist */}
              <div className="space-y-2.5 pt-1">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-start gap-3 group cursor-pointer ${
                      goal.completed
                        ? 'bg-sky-50/70 border-sky-200 text-slate-600'
                        : 'bg-white border-sky-200 hover:border-yellow-400 text-slate-900'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {goal.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300 group-hover:text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs font-semibold leading-snug ${
                          goal.completed ? 'line-through text-slate-500' : 'text-slate-900'
                        }`}
                      >
                        {goal.title}
                      </p>
                      <div className="text-2xs text-slate-500 mt-1 flex items-center gap-2">
                        <span>{goal.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className={goal.completed ? 'text-emerald-700 font-semibold' : 'text-sky-700'}>
                          {goal.completed ? 'Done! 🎉' : 'In Progress'}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2 text-2xs text-slate-500 text-center font-medium">
                Click any goal to test checking it off! Progress updates live.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
