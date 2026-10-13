import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { X, Sparkles, CheckCircle2, ArrowRight, Brain, Target, Shield } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  onComplete: (details: { goal: string; level: string; plan: string }) => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  theme,
  onComplete,
}) => {
  const isLuminous = theme === 'luminous';
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState('Tech Leadership & Executive Boardrooms');
  const [selectedLevel, setSelectedLevel] = useState('B2 (Upper-Intermediate)');
  const [selectedAnxiety, setSelectedAnxiety] = useState('Hesitate when searching for precise vocabulary');
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const goals = [
    { title: 'Tech Leadership & Executive Boardrooms', desc: 'Sprint reviews, architectural proposals, salary negotiation.' },
    { title: 'IELTS Academic Speaking (Band 8.0+)', desc: 'Part 1, 2 & 3 cue cards with rigorous examiner simulation.' },
    { title: 'Relocation & Professional Expat Life', desc: 'Tenancy leases, banking, municipal admin, healthcare.' },
    { title: 'Natural Casual Socialization & Banter', desc: 'Ditching textbook English for native idioms and humor.' },
  ];

  const levels = [
    { label: 'A2 (High Beginner)', desc: 'Understand basics, struggle to maintain continuous conversation.' },
    { label: 'B1 (Intermediate)', desc: 'Can express ideas but hesitate frequently and repeat basic words.' },
    { label: 'B2 (Upper-Intermediate)', desc: 'Fluent in familiar topics, stumble during high-pressure nuances.' },
    { label: 'C1 (Advanced Professional)', desc: 'Confident but seeking native idiomatic polish and accent precision.' },
  ];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      goal: selectedGoal,
      level: selectedLevel,
      plan: 'Personalized 15-Min Daily Trajectory',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border transition-all ${
          isLuminous ? 'border-slate-100' : 'border-[#d9d9d9] rounded-[8px]'
        }`}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                isLuminous ? 'bg-indigo-100 text-[#4648d4]' : 'bg-[#e6f4ff] text-[#1677ff]'
              }`}
            >
              {step}/3
            </span>
            <h3 className="text-base font-bold text-slate-900">
              {step === 1 && 'Step 1: Your Primary Milestone'}
              {step === 2 && 'Step 2: Current Speaking Baseline'}
              {step === 3 && 'Step 3: Activate Your 7-Day Free Trial'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="flex flex-col gap-3">
              <p className="text-xs text-slate-500 mb-1">
                Emma will generate customized conversational roleplays around your specific ambition:
              </p>
              {goals.map((g) => (
                <div
                  key={g.title}
                  onClick={() => setSelectedGoal(g.title)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedGoal === g.title
                      ? isLuminous
                        ? 'border-[#4648d4] bg-indigo-50/50 ring-2 ring-indigo-500/20'
                        : 'border-[#1677ff] bg-blue-50/50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {g.title}
                    </span>
                    {selectedGoal === g.title && (
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{g.desc}</p>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3">
              <p className="text-xs text-slate-500 mb-1">
                Select where you currently feel your verbal confidence sits:
              </p>
              {levels.map((lvl) => (
                <div
                  key={lvl.label}
                  onClick={() => setSelectedLevel(lvl.label)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedLevel === lvl.label
                      ? isLuminous
                        ? 'border-[#4648d4] bg-indigo-50/50 ring-2 ring-indigo-500/20'
                        : 'border-[#1677ff] bg-blue-50/50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {lvl.label}
                    </span>
                    {selectedLevel === lvl.label && (
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{lvl.desc}</p>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleFinish} className="flex flex-col gap-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-start gap-3">
                <Brain className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Curriculum Blueprint Formulated!</span>
                  <span>Target: {selectedGoal}. Calibrated at {selectedLevel}.</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Email Address for Trial Access
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="e.g. sarah.chen@techcompany.com"
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>7-Day unrestricted Pro trial • No credit card required</span>
              </div>

              <button
                type="submit"
                className={`w-full py-3 font-bold text-sm text-white transition-all shadow-md mt-2 ${
                  isLuminous
                    ? 'rounded-full bg-[#4648d4] hover:bg-[#6063ee]'
                    : 'rounded-[6px] bg-[#1677ff] hover:bg-[#4096ff]'
                }`}
              >
                Start Speaking with Emma Now
              </button>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        {step < 3 && (
          <div className="p-4 sm:p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
              className={`text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors ${
                step === 1 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setStep(step + 1)}
              className={`inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white transition-all shadow-sm ${
                isLuminous
                  ? 'rounded-full bg-[#4648d4] hover:bg-[#6063ee]'
                  : 'rounded-[4px] bg-[#1677ff] hover:bg-[#4096ff]'
              }`}
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
