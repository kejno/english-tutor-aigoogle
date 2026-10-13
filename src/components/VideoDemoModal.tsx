import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { X, Play, Pause, Volume2, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  onOpenTrial: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({
  isOpen,
  onClose,
  theme,
  onOpenTrial,
}) => {
  const isLuminous = theme === 'luminous';
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      time: '0:15',
      speaker: 'Emma (AI Coach)',
      text: 'Good morning, Alex. Let\'s warm up with your Q3 board update. How would you handle pushback on the database latency spike?',
      annotation: 'Ultra-low latency audio stream starts instantly (<320ms)',
      badge: 'Step 1: Context Setting',
    },
    {
      time: '0:45',
      speaker: 'Alex (Senior Engineer)',
      text: 'Honestly, we make mistakes yesterday when testing failovers, but our fallback cache rescued response rates.',
      annotation: 'AI detects grammatical tense error: "make mistakes yesterday"',
      badge: 'Step 2: Spoken Input Captured',
    },
    {
      time: '1:15',
      speaker: 'Emma (Real-Time Alignment)',
      text: 'Great recovery on the cache point! Quick tip: try "we made mistakes yesterday" or executive polish "we encountered an oversight yesterday".',
      annotation: 'Surgical repair delivered with polite, zero-judgment reformulation',
      badge: 'Step 3: Surgical Repair',
    },
    {
      time: '1:50',
      speaker: 'Fluency Telemetry Engine',
      text: 'Dial adjusted: 94% accuracy • Conversational Flow: 138 WPM • Word "oversight" cached for tomorrow\'s reinforcement.',
      annotation: 'Adaptive persistent memory syncs to your personal profile automatically',
      badge: 'Step 4: Memory Sync',
    },
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const current = demoSteps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-2xl bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden border border-slate-700 transition-all ${
          !isLuminous ? 'rounded-[8px]' : ''
        }`}
      >
        {/* Top Header */}
        <div className="p-4 px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <h3 className="text-sm font-bold text-white">
              FluentAI Live Demo Walkthrough (2 Min)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation Screen */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Top Info Bar inside canvas */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs">
              <span className="font-mono text-indigo-300">{current.time}</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-white">{current.badge}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-[11px] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Real-time Audio Engine</span>
            </div>
          </div>

          {/* Central Dialogue Presentation */}
          <div className="my-auto py-4">
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-bold mb-1">
              {current.speaker}
            </div>
            <p className="text-base sm:text-xl font-medium text-white leading-relaxed">
              "{current.text}"
            </p>
          </div>

          {/* Real-time Annotation Banner */}
          <div className="bg-indigo-950/80 border border-indigo-500/30 rounded-xl p-3 flex items-center gap-3 backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            <span className="text-xs text-indigo-200 font-medium">
              {current.annotation}
            </span>
          </div>
        </div>

        {/* Timeline & Controls Bar */}
        <div className="p-4 px-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setCurrentStep(0)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              title="Restart demo"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step indicators */}
          <div className="flex items-center gap-1.5 flex-1 max-w-xs">
            {demoSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  idx === currentStep
                    ? 'bg-indigo-500'
                    : idx < currentStep
                    ? 'bg-indigo-300/40'
                    : 'bg-slate-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenTrial();
            }}
            className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-colors whitespace-nowrap"
          >
            Try It Yourself Free
          </button>
        </div>
      </div>
    </div>
  );
};
