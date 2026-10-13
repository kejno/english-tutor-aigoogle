import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Heart, Activity, Drama, Brain, RefreshCw, Volume2 } from 'lucide-react';

interface BentoGridProps {
  theme: ThemeMode;
  onSelectScenarioTag?: (tag: string) => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  theme,
  onSelectScenarioTag,
  onShowToast,
}) => {
  const isLuminous = theme === 'luminous';
  const [selectedPhoneme, setSelectedPhoneme] = useState<'thorough' | 'severe'>('thorough');

  const handleTestPhoneme = (word: 'thorough' | 'severe') => {
    setSelectedPhoneme(word);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(word);
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
    onShowToast('Phonetic Waveform Analyzed', `Sound isolated: "${word}". Waveform match: ${word === 'thorough' ? '95%' : '98%'}.`, 'success');
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 mb-2.5 ${
            isLuminous
              ? 'bg-indigo-100 text-[#4648d4] rounded-full'
              : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
          }`}
        >
          Engineered For Ease
        </span>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 ${
            isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
          }`}
        >
          Everything You Need for Verbal Mastery
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
          Built around speech science, eliminating the friction that keeps learners trapped in passive grammar study.
        </p>
      </div>

      {/* Bento 12-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bento 1: Zero Judgment Haven (Col 7) */}
        <div
          className={`md:col-span-7 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
            isLuminous
              ? 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'
              : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isLuminous
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-green-50 border border-green-200 text-[#389e0d]'
              }`}
            >
              <Heart className="w-6 h-6 fill-current opacity-80" />
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Zero-Judgment Conversational Haven
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed max-w-md ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
              No human tutor sighs when you pause or repeat yourself for the fifth time. Emma adjusts her patience level to infinite, encouraging you until the pronunciation clicks.
            </p>
          </div>

          <div
            className={`mt-6 rounded-xl p-4 flex items-center gap-4 border ${
              isLuminous
                ? 'bg-slate-50 border-slate-100'
                : 'bg-[#fafafa] border-[#f0f0f0] rounded-[6px]'
            }`}
          >
            <img
              className="w-13 h-13 rounded-full object-cover border border-slate-200 shrink-0"
              alt="Claire portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3EdkU9w_kQJ_xJZsSzL6n9uycUdORhRt0pIb19XpZlLmTsIZeKARNoTsviPvkNjKKJkU5nNoq899a3KMlnJXh92P9cPI874TUSsyHHBU-1XsZGoW4sWpLQOhhPl45hnzAUldYyeLdQ0yPYkgo-lO0AVsXhJxZ4LjT3aNkfzQujTZHKIsehIo-5hK56k8BwnVkdUw7_4JUTR-rIhYCiQMl7idTh12VNKRJ7MdQQvoQgT6GbDR8ZuHvPA"
            />
            <div>
              <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed">
                "I finally stopped feeling ashamed of my French accent. I speak 20 mins every morning before work."
              </p>
              <span className="text-[11px] font-bold text-slate-400 mt-1 block">
                Claire D. • Paris, France
              </span>
            </div>
          </div>
        </div>

        {/* Bento 2: Phonetic Accent Tuner (Col 5) */}
        <div
          className={`md:col-span-5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
            isLuminous
              ? 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'
              : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isLuminous
                  ? 'bg-indigo-100 text-[#4648d4]'
                  : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff]'
              }`}
            >
              <Activity className="w-6 h-6" />
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Phonetic Accent Tuner
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
              Isolate difficult sound pairings—such as the English{' '}
              <span className="font-bold text-indigo-600">/θ/</span> vs{' '}
              <span className="font-bold text-indigo-600">/s/</span>—with dynamic visual waveform overlays.
            </p>
          </div>

          {/* Micro Phoneme Wave Visualizer */}
          <div
            className={`rounded-xl p-4 mt-6 border ${
              isLuminous
                ? 'bg-slate-50 border-slate-100'
                : 'bg-[#fafafa] border-[#f0f0f0] rounded-[6px]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleTestPhoneme('thorough')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                    selectedPhoneme === 'thorough'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  "Thorough" /θ/
                </button>
                <button
                  onClick={() => handleTestPhoneme('severe')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                    selectedPhoneme === 'severe'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  "Severe" /s/
                </button>
              </div>
              <span className="text-[11px] font-bold text-emerald-600">
                Match: {selectedPhoneme === 'thorough' ? '95%' : '98%'}
              </span>
            </div>

            {/* Interactive Visual Wave SVG */}
            <div className="w-full h-10 flex items-center justify-center">
              <svg className="w-full h-8" fill="none" viewBox="0 0 200 40">
                <path
                  className={selectedPhoneme === 'thorough' ? 'stroke-indigo-200' : 'stroke-rose-200'}
                  d="M 0 20 Q 25 5, 50 20 T 100 20 T 150 5 T 200 20"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  className={selectedPhoneme === 'thorough' ? 'stroke-indigo-600' : 'stroke-rose-600'}
                  d={
                    selectedPhoneme === 'thorough'
                      ? 'M 0 20 Q 25 2, 50 20 T 100 20 T 150 2 T 200 20'
                      : 'M 0 20 Q 25 8, 50 20 T 100 20 T 150 8 T 200 20'
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bento 3: 1,200+ Roleplay Scenarios (Col 5) */}
        <div
          className={`md:col-span-5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
            isLuminous
              ? 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'
              : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isLuminous
                  ? 'bg-rose-100 text-rose-700'
                  : 'bg-amber-50 border border-amber-200 text-[#d48806]'
              }`}
            >
              <Drama className="w-6 h-6" />
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              1,200+ Roleplay Scenarios
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
              From ordering artisan coffee in London to pitching VC partners on Sand Hill Road. Experience every nuance before it counts.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {['Coffee Shop', 'VC Seed Pitch', 'Emergency Room', 'Custom Prompt'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  onSelectScenarioTag?.(tag);
                  onShowToast('Roleplay Selected', `Loaded scenario track: "${tag}"`, 'info');
                }}
                className={`text-xs font-semibold px-3 py-1.5 transition-colors ${
                  isLuminous
                    ? 'bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 rounded-full'
                    : 'bg-[#fafafa] border border-[#d9d9d9] text-[#262626] hover:border-[#1677ff] rounded-[4px]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bento 4: Adaptive Persistent Memory (Col 7) */}
        <div
          className={`md:col-span-7 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
            isLuminous
              ? 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'
              : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isLuminous
                  ? 'bg-indigo-100 text-[#4648d4]'
                  : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff]'
              }`}
            >
              <Brain className="w-6 h-6" />
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Adaptive Persistent Memory
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed max-w-md ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
              Emma remembers your stumbling blocks from 3 days ago. If you struggled with "ubiquitous" or prepositions like "in charge of", she will organically prompt them into tomorrow's conversation.
            </p>
          </div>

          <div
            className={`mt-6 rounded-xl p-4 flex items-center justify-between border ${
              isLuminous
                ? 'bg-slate-50 border-slate-100'
                : 'bg-[#fafafa] border-[#f0f0f0] rounded-[6px]'
            }`}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
              <RefreshCw className="w-4 h-4 text-indigo-600 animate-spin [animation-duration:8s]" />
              <span>Active Memory Cache: 38 words reinforced this week</span>
            </div>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                isLuminous
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-green-50 border border-green-200 text-[#389e0d]'
              }`}
            >
              Auto-synced
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
