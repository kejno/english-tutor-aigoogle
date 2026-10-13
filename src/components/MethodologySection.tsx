import React from 'react';
import { ThemeMode } from '../types';
import { Mic2, Zap, BrainCircuit, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  theme: ThemeMode;
  onOpenDiagnostic: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({
  theme,
  onOpenDiagnostic,
}) => {
  const isLuminous = theme === 'luminous';

  const steps = [
    {
      num: '01',
      title: 'Diagnostic Voice Assessment',
      description:
        'In 3 minutes, our AI analyzes your active vocabulary breadth, accent phoneme stress, and cadence pauses to pinpoint your CEFR speaking baseline.',
      metricLabel: 'Acoustic Precision:',
      metricVal: 'Sub-word FFT analysis',
      colorClass: isLuminous ? 'bg-indigo-100 text-[#4648d4]' : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff]',
      metricColor: isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]',
    },
    {
      num: '02',
      title: 'Daily 15-Min Micro-Dialogues',
      description:
        'Engage in low-pressure, lifelike spoken interactions tailored to your world: salary renegotiations, high-stakes coffee chats, and IELTS oral prompts.',
      metricLabel: 'Response Latency:',
      metricVal: '< 320ms Real-Time',
      colorClass: isLuminous ? 'bg-rose-100 text-rose-700' : 'bg-blue-50 border border-blue-200 text-[#0958d9]',
      metricColor: isLuminous ? 'text-rose-600' : 'text-[#52c41a]',
    },
    {
      num: '03',
      title: 'Surgical Accent Alignment',
      description:
        'Receive live tongue and palate placement schematics for tricky vowel pairs, along with automated spaced-repetition idiom cards.',
      metricLabel: 'Recall Guarantee:',
      metricVal: '96% Retention at 30 days',
      colorClass: isLuminous ? 'bg-emerald-100 text-emerald-800' : 'bg-green-50 border border-green-200 text-[#389e0d]',
      metricColor: isLuminous ? 'text-emerald-700' : 'text-[#389e0d]',
    },
  ];

  return (
    <section id="methodology" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 mb-2.5 ${
            isLuminous
              ? 'bg-indigo-100 text-[#4648d4] rounded-full'
              : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
          }`}
        >
          Neuro-Linguistic Engine
        </span>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 ${
            isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
          }`}
        >
          The 3-Step Rapid Fluency Method
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
          Built without intimidating multiple-choice drills. You speak out loud from minute one with progressive cognitive difficulty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            onClick={step.num === '01' ? onOpenDiagnostic : undefined}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group cursor-pointer ${
              isLuminous
                ? 'bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
                : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-[#91caff]'
            }`}
          >
            <div>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-base mb-6 transition-transform group-hover:scale-110 ${step.colorClass}`}
              >
                {step.num}
              </div>
              <h3
                className={`text-lg sm:text-xl font-bold mb-2.5 ${
                  isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                }`}
              >
                {step.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
                {step.description}
              </p>
            </div>

            <div
              className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between text-xs border ${
                isLuminous
                  ? 'bg-slate-50 border-slate-100'
                  : 'bg-[#fafafa] border-[#f0f0f0] rounded-[4px]'
              }`}
            >
              <span className="text-slate-500 font-medium">{step.metricLabel}</span>
              <span className={`font-bold ${step.metricColor}`}>{step.metricVal}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
