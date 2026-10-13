import React, { useState } from 'react';
import { ThemeMode, LearningTrack } from '../types';
import { LEARNING_TRACKS } from '../data/mockData';
import { CheckCircle2, Volume2, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface TrackSectionProps {
  theme: ThemeMode;
  onSelectScenarioTrack?: (scenarioTitle: string) => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const TrackSection: React.FC<TrackSectionProps> = ({
  theme,
  onShowToast,
}) => {
  const isLuminous = theme === 'luminous';
  const [activeTrackId, setActiveTrackId] = useState<string>('business');

  const currentTrack =
    LEARNING_TRACKS.find((t) => t.id === activeTrackId) || LEARNING_TRACKS[0];

  const handlePronounceWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(word);
      u.rate = 0.85;
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
      onShowToast('Vocabulary Pronunciation', `Pronouncing: "${word}"`, 'info');
    }
  };

  return (
    <section id="personalized-paths" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span
            className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 mb-2 inline-block ${
              isLuminous
                ? 'bg-indigo-100 text-[#4648d4] rounded-full'
                : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
            }`}
          >
            Targeted Tracks
          </span>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-1 ${
              isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
            }`}
          >
            Tailored to What You Actually Say
          </h2>
        </div>

        <p className={`text-sm sm:text-base max-w-md ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
          Don't waste time reciting arbitrary fruit names. Choose the exact conversational track you need for your career or life milestone.
        </p>
      </div>

      {/* Tab Selector Buttons */}
      <div
        className={`flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar ${
          !isLuminous
            ? 'p-1 bg-[#eeeeee] rounded-[6px] border border-[#d9d9d9] inline-flex'
            : ''
        }`}
      >
        {LEARNING_TRACKS.map((track) => {
          const isActive = track.id === activeTrackId;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                isLuminous
                  ? isActive
                    ? 'bg-[#4648d4] text-white rounded-full shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full'
                  : isActive
                  ? 'bg-white text-[#1f1f1f] rounded-[4px] shadow-sm font-bold'
                  : 'text-[#595959] hover:text-[#1f1f1f] rounded-[4px]'
              }`}
            >
              {track.label}
            </button>
          );
        })}
      </div>

      {/* Dynamic Tab Card Output */}
      <div
        className={`w-full rounded-2xl p-6 sm:p-8 md:p-10 transition-all ${
          isLuminous
            ? 'bg-white border border-slate-100 shadow-xl'
            : 'bg-white border border-[#f0f0f0] rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side: Track Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{currentTrack.badge}</span>
            </div>

            <h3
              className={`text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              {currentTrack.title}
            </h3>

            <p className={`text-sm sm:text-base leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
              {currentTrack.description}
            </p>

            {/* Active Roleplay Scenario Box */}
            <div
              className={`rounded-xl p-4 sm:p-5 border ${
                isLuminous
                  ? 'bg-slate-50 border-slate-100 text-slate-800'
                  : 'bg-[#fafafa] border-[#f0f0f0] rounded-[4px]'
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Active Roleplay Scenario
              </span>
              <p
                className={`text-sm sm:text-base font-semibold ${
                  isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                }`}
              >
                {currentTrack.roleplayScenario}
              </p>
            </div>

            {/* Features Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentTrack.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 ${
                      isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
                    }`}
                  />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Target Vocabulary Focus */}
          <div
            className={`w-full lg:w-1/2 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 border ${
              isLuminous
                ? 'bg-slate-50 border-slate-100'
                : 'bg-[#fafafa] border-[#f0f0f0] rounded-[6px]'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Target Vocabulary Focus
              </span>
              <span
                className={`text-xs font-bold ${
                  isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
                }`}
              >
                Module 4 of 12
              </span>
            </div>

            {/* Vocabulary Cards List */}
            <div className="flex flex-col gap-2.5">
              {currentTrack.vocabularies.map((v) => (
                <div
                  key={v.id}
                  className="bg-white border border-slate-200/70 p-3 sm:p-3.5 rounded-xl flex items-center justify-between gap-3 shadow-sm hover:border-indigo-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {v.word}
                      </span>
                      {v.ipa && (
                        <span className="text-[11px] text-slate-400 font-mono">
                          {v.ipa}
                        </span>
                      )}
                      <button
                        onClick={() => handlePronounceWord(v.word)}
                        className="text-slate-400 hover:text-indigo-600 transition-colors p-0.5"
                        title="Listen to pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{v.meaning}</p>
                    <p className="text-[11px] text-slate-400 italic mt-0.5">
                      "{v.example}"
                    </p>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded shrink-0 ${
                      v.status === 'Mastered'
                        ? 'bg-emerald-100 text-emerald-800'
                        : v.status === 'In Practice'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}
                  >
                    {v.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="pt-2">
              <div className="flex justify-between text-xs text-slate-700 mb-1 font-medium">
                <span>Executive Track Readiness</span>
                <span
                  className={`font-bold ${
                    isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
                  }`}
                >
                  {currentTrack.progressPercent}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isLuminous ? 'bg-[#4648d4]' : 'bg-[#1677ff]'
                  }`}
                  style={{ width: `${currentTrack.progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
