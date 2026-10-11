import React, { useState, useEffect } from 'react';
import { X, Award, ExternalLink, Sun, Sparkles, Check, ArrowRight, Play, RefreshCw, Volume2 } from 'lucide-react';
import { Project, ThemeColor } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  themeColor: ThemeColor;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, themeColor }) => {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Interactive state for Solar Rover
  const [sunAngle, setSunAngle] = useState<number>(75);

  // Interactive state for Scratch Game
  const [gameScore, setGameScore] = useState<number>(10);
  const [turtleY, setTurtleY] = useState<number>(50);
  const [gameMessage, setGameMessage] = useState<string>('Help Shelly clean up the reef! Click Swim to guide her.');

  // Interactive state for Garden Tracker
  const [selectedVariety, setSelectedVariety] = useState<'pole' | 'bush' | 'sunbeam'>('pole');

  if (!project) return null;

  // Solar calculations
  const calculatedVoltage = (1.5 + (Math.sin((sunAngle * Math.PI) / 180) * 4.6)).toFixed(1);
  const estimatedSpeed = (parseFloat(calculatedVoltage) * 0.28).toFixed(2);

  // Mini-game action
  const handleSwim = (direction: 'up' | 'down') => {
    setTurtleY((prev) => {
      const next = direction === 'up' ? Math.max(15, prev - 20) : Math.min(85, prev + 20);
      return next;
    });
    setGameScore((prev) => prev + 5);
    setGameMessage('Great move! Shelly picked up a plastic bottle (+5 Points! 🌊)');
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
        return 'bg-amber-500 hover:bg-amber-600 text-slate-900';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar with clean typography & close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <div className="text-2xs font-semibold text-slate-500 uppercase tracking-wider">
              {project.category}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Visual Display */}
          <div className="space-y-2">
            <div className="w-full aspect-video sm:aspect-16/9 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative">
              <img
                src={project.image}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 shadow-xs">
                {project.metadata}
              </div>
            </div>
            <p className="text-xs text-slate-500 italic text-center">
              {project.imageAlt}
            </p>
          </div>

          {/* Project Story & Background */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Project Overview & Goal</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Interactive Lab / Demo Section */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <h4 className="font-bold text-slate-900 text-sm">
                  Interactive Project Experiment
                </h4>
              </div>
              <span className="text-2xs font-medium text-amber-800">Hands-on Simulator</span>
            </div>

            {/* If Solar Rover: Sun Angle & Voltage Simulator */}
            {project.interactiveType === 'solar-rover' && (
              <div className="space-y-4 text-xs">
                <p className="text-slate-700">
                  During my science trials, changing the angle toward the sun drastically altered motor output. Drag the slider to test different sun elevations:
                </p>

                <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Sun className="w-4 h-4 text-amber-500" /> Sun Angle: {sunAngle}°
                    </span>
                    <span className="text-slate-500">
                      {sunAngle < 35 ? 'Overcast / Morning' : sunAngle < 70 ? 'Midday Sunshine' : 'Direct Overhead Sun ☀️'}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={sunAngle}
                    onChange={(e) => setSunAngle(Number(e.target.value))}
                    className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-center">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-slate-500 text-2xs">Generated Voltage</div>
                      <div className="text-base font-bold font-mono text-slate-900 tabular-nums">
                        {calculatedVoltage} V
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-slate-500 text-2xs">Estimated Speed</div>
                      <div className="text-base font-bold font-mono text-slate-900 tabular-nums">
                        {estimatedSpeed} m/s
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-slate-500 text-2xs">Ramp Climbing Status</div>
                      <div className="text-xs font-bold text-emerald-700 mt-1">
                        {Number(calculatedVoltage) > 4.0 ? 'Ascends 15° Slope ✅' : 'Needs More Light ⚠️'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* If Scratch Ocean Game: Mini-Game Simulation */}
            {project.interactiveType === 'scratch-game' && (
              <div className="space-y-4 text-xs">
                <p className="text-slate-700">
                  Try a quick interactive sample of Shelly the Sea Turtle's reef navigation controls:
                </p>

                <div className="bg-white p-4 rounded-xl border border-sky-200 space-y-3">
                  <div className="relative w-full h-36 bg-gradient-to-b from-sky-400 to-blue-600 rounded-lg overflow-hidden border border-sky-300 p-3 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>REEF CLEANUP ZONE</span>
                      <span className="font-mono tabular-nums">Score: {gameScore}</span>
                    </div>

                    {/* Animated turtle sprite element */}
                    <div
                      className="absolute transition-all duration-300 text-2xl flex items-center gap-1"
                      style={{ top: `${turtleY}%`, left: '35%' }}
                    >
                      <span>🐢</span>
                      <span className="text-2xs bg-white/20 backdrop-blur-xs px-1.5 py-0.5 rounded text-white">Shelly</span>
                    </div>

                    <div className="text-right text-2xs opacity-80">
                      Level 1: Shallow Coral Reef
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSwim('up')}
                        className="px-3.5 py-2 text-xs font-black text-slate-950 bg-yellow-400 hover:bg-yellow-300 border border-yellow-500 rounded-xl active:scale-95 cursor-pointer shadow-xs"
                      >
                        Swim Up ⬆️
                      </button>
                      <button
                        onClick={() => handleSwim('down')}
                        className="px-3.5 py-2 text-xs font-black text-slate-950 bg-yellow-400 hover:bg-yellow-300 border border-yellow-500 rounded-xl active:scale-95 cursor-pointer shadow-xs"
                      >
                        Swim Down ⬇️
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setGameScore(0);
                        setTurtleY(50);
                        setGameMessage('Game reset. Swim up or down to start collecting!');
                      }}
                      className="text-2xs text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" /> Reset
                    </button>
                  </div>

                  <p className="text-2xs text-slate-600 italic">{gameMessage}</p>
                </div>
              </div>
            )}

            {/* If Garden Chart: Interactive Botanical Growth Comparison */}
            {project.interactiveType === 'garden-chart' && (
              <div className="space-y-4 text-xs">
                <p className="text-slate-700">
                  View the growth data logged across our 8-week raised bed trial. Select a plant variety to inspect its height progression:
                </p>

                <div className="bg-white p-4 rounded-xl border border-emerald-200 space-y-4">
                  {/* Variety selector */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedVariety('pole')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        selectedVariety === 'pole'
                          ? 'bg-yellow-400 text-slate-950 border border-yellow-500 shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Pole Beans (Trellis)
                    </button>
                    <button
                      onClick={() => setSelectedVariety('bush')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        selectedVariety === 'bush'
                          ? 'bg-yellow-400 text-slate-950 border border-yellow-500 shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Bush Beans (Compact)
                    </button>
                    <button
                      onClick={() => setSelectedVariety('sunbeam')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        selectedVariety === 'sunbeam'
                          ? 'bg-yellow-400 text-slate-950 border border-yellow-500 shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Sunbeam Marigolds
                    </button>
                  </div>

                  {/* Growth chart bars */}
                  <div className="space-y-2 pt-2">
                    {[
                      { week: 'Week 1 (Sprout)', pole: 3, bush: 3, sunbeam: 2 },
                      { week: 'Week 2 (First True Leaves)', pole: 8, bush: 7, sunbeam: 5 },
                      { week: 'Week 4 (Branching)', pole: 24, bush: 18, sunbeam: 12 },
                      { week: 'Week 6 (Budding)', pole: 46, bush: 29, sunbeam: 20 },
                      { week: 'Week 8 (Harvest/Bloom)', pole: 72, bush: 38, sunbeam: 28 },
                    ].map((entry) => {
                      const heightVal =
                        selectedVariety === 'pole'
                          ? entry.pole
                          : selectedVariety === 'bush'
                          ? entry.bush
                          : entry.sunbeam;
                      const maxBar = 75;
                      const widthPercent = Math.round((heightVal / maxBar) * 100);

                      return (
                        <div key={entry.week} className="flex items-center gap-3">
                          <span className="w-36 text-2xs text-slate-600 truncate font-medium">
                            {entry.week}
                          </span>
                          <div className="flex-1 h-4 bg-slate-100 rounded-md overflow-hidden relative">
                            <div
                              className="h-full bg-emerald-500 rounded-md transition-all duration-500"
                              style={{ width: `${widthPercent}%` }}
                            />
                          </div>
                          <span className="w-14 text-right font-mono text-2xs font-semibold text-slate-900 tabular-nums">
                            {heightVal} cm
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-2xs text-slate-500 pt-1">
                    * Data logged weekly by Maya & the Oakridge Eco-Club crew.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tools & Materials Used */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Materials & Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learnings List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900">What I Learned From This Project</h4>
            <ul className="space-y-2">
              {project.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teacher or Judge Note */}
          {project.awardOrFeedback && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="text-2xs font-semibold text-slate-500 uppercase flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Teacher & Mentor Feedback</span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-800">
                {project.awardOrFeedback.note}
              </p>
              <div className="text-2xs font-medium text-slate-600">
                — {project.awardOrFeedback.from}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-black text-slate-950 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-500 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
