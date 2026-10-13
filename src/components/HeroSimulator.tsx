import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode, PracticeScenario } from '../types';
import { SCENARIOS } from '../data/mockData';
import {
  Volume2,
  ChevronDown,
  Mic,
  MicOff,
  Flame,
  TrendingUp,
  Target,
  Sparkles,
  CheckCircle2,
  Wand2,
  RefreshCw,
  Play,
  RotateCcw
} from 'lucide-react';

interface HeroSimulatorProps {
  theme: ThemeMode;
  onOpenTrial: () => void;
  onOpenVideoDemo: () => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const HeroSimulator: React.FC<HeroSimulatorProps> = ({
  theme,
  onOpenTrial,
  onOpenVideoDemo,
  onShowToast,
}) => {
  const isLuminous = theme === 'luminous';

  const [activeScenarioId, setActiveScenarioId] = useState<string>('tech-lead');
  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [learnerText, setLearnerText] = useState(scenario.sampleLearnerInput);
  const [userCustomInput, setUserCustomInput] = useState('');
  const [isEditingLearner, setIsEditingLearner] = useState(false);
  const [showAppliedReformulation, setShowAppliedReformulation] = useState(false);
  const [fluencyScore, setFluencyScore] = useState(scenario.overallScore);

  const recognitionRef = useRef<any>(null);

  // Update learner text when scenario changes
  useEffect(() => {
    setLearnerText(scenario.sampleLearnerInput);
    setShowAppliedReformulation(false);
    setFluencyScore(scenario.overallScore);
  }, [scenario]);

  // Speech synthesis for AI Coach Emma
  const handlePlayAiVoice = () => {
    if (!('speechSynthesis' in window)) {
      onShowToast('Audio Preview', 'Text-to-speech not supported in this browser.', 'warning');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(scenario.aiPrompt);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.lang = 'en-US';

    // Try finding an English female voice
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Samantha') ||
          v.name.includes('Zira') ||
          v.name.includes('Victoria') ||
          v.name.includes('Google US English') ||
          v.name.includes('Natural'))
    );
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    setIsAiSpeaking(true);
    utterance.onend = () => {
      setIsAiSpeaking(false);
    };
    utterance.onerror = () => {
      setIsAiSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
    onShowToast('Emma Speaking', 'Playing natural audio stream at 0.95x cadence.', 'info');
  };

  // Toggle Microphone recording
  const handleToggleMic = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      onShowToast('Recording Complete', 'Analyzing verbal cadence and grammar alignment...', 'success');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Fallback simulation if speech recognition is unsupported in iframe/browser
      setIsListening(true);
      onShowToast('Microphone Active', 'Simulating speech input... Tap again when finished.', 'info');
      setTimeout(() => {
        setIsListening(false);
        setLearnerText('In my point of view, we should optimize latency across server nodes.');
        setShowAppliedReformulation(false);
        setFluencyScore(96);
        onShowToast('Speech Detected', 'Captured audio stream analyzed: 96% accuracy!', 'success');
      }, 4000);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        onShowToast('Listening...', 'Speak your response naturally into your microphone.', 'info');
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        setLearnerText(transcript);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition warning:', event.error);
        setIsListening(false);
        onShowToast(
          'Microphone Notice',
          'Switched to simulated voice capture. You can also type or use test responses.',
          'info'
        );
      };

      recognition.onend = () => {
        setIsListening(false);
        onShowToast('Analyzing Speech', 'Grammar alignment & fluency dials updated.', 'success');
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
      onShowToast('Mic Notice', 'Ready for practice input.', 'info');
    }
  };

  const handleApplyReformulation = (phrase: string) => {
    setLearnerText(phrase);
    setShowAppliedReformulation(true);
    setFluencyScore(98);
    onShowToast('Polite Alignment Applied', 'Replaced with executive phrasing. Fluency updated to 98%!', 'success');
  };

  const handleCustomInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userCustomInput.trim()) return;
    setLearnerText(userCustomInput);
    setUserCustomInput('');
    setIsEditingLearner(false);
    setFluencyScore(95);
    onShowToast('Response Evaluated', 'Custom response registered. Emma is calibrating feedback.', 'success');
  };

  // Circular gauge circumference calculation: r=42 -> ~263.89
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (fluencyScore / 100) * circumference;

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-14 pb-16">
      {/* Ambient background glows for luminous mode */}
      {isLuminous && (
        <>
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
          <div className="pointer-events-none absolute top-[35%] -right-40 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px] -z-10" />
          <div className="pointer-events-none absolute top-[65%] -left-32 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] -z-10" />
        </>
      )}

      {/* Hero Headline & Intro */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Live Notification Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 transition-all cursor-pointer ${
            isLuminous
              ? 'bg-slate-100/90 text-slate-800 shadow-sm hover:bg-slate-200/80 border border-slate-200/60'
              : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px] hover:bg-blue-100/60'
          }`}
          onClick={() => onShowToast('FluentAI 3.0 Live', 'Ultra-low latency speech analysis active (<320ms).', 'info')}
        >
          <span className="flex h-2 w-2 relative">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLuminous ? 'bg-[#4648d4]' : 'bg-[#1677ff]'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isLuminous ? 'bg-[#4648d4]' : 'bg-[#1677ff]'
              }`}
            />
          </span>
          <span
            className={`font-bold ${
              isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
            }`}
          >
            FluentAI 3.0 Live
          </span>
          <span className="text-slate-300">|</span>
          <span className={isLuminous ? 'text-slate-600' : 'text-[#0958d9]'}>
            Real-time Accent Coach & Instant Fluency Feedback
          </span>
          <span className="material-symbols-outlined text-[15px] opacity-80">
            arrow_forward
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.12] font-extrabold tracking-tight mb-4 ${
            isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
          }`}
        >
          Speak English with Natural Confidence in{' '}
          <span
            className={
              isLuminous
                ? 'bg-gradient-to-r from-[#4648d4] via-[#6063ee] to-[#dc2c4f] bg-clip-text text-transparent'
                : 'text-[#1677ff]'
            }
          >
            Just 15 Minutes a Day
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed ${
            isLuminous ? 'text-slate-600' : 'text-[#595959]'
          }`}
        >
          Overcome speaking anxiety with a private, hyper-realistic AI tutor that
          listens, repairs grammar gently in real-time, and tailors every simulated
          dialogue to your exact career ambitions.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-8">
          <button
            onClick={onOpenTrial}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-7 py-3 transition-all ${
              isLuminous
                ? 'rounded-full bg-[#4648d4] text-white shadow-[0_6px_24px_rgba(70,72,212,0.38)] hover:bg-[#6063ee] hover:shadow-[0_8px_30px_rgba(70,72,212,0.48)] hover:scale-[1.02]'
                : 'rounded-[6px] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.1)] hover:bg-[#4096ff] active:bg-[#0958d9]'
            }`}
          >
            <span>Start Free 7-Day Trial</span>
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenVideoDemo}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium text-sm sm:text-base px-6 py-3 transition-colors ${
              isLuminous
                ? 'rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-slate-50'
                : 'rounded-[6px] bg-white text-[#262626] border border-[#d9d9d9] shadow-[0_2px_0_rgba(0,0,0,0.02)] hover:text-[#1677ff] hover:border-[#1677ff]'
            }`}
          >
            <Play
              className={`w-4 h-4 fill-current ${
                isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
              }`}
            />
            <span>Watch 2-Min Live Demo</span>
          </button>
        </div>

        {/* Social Proof Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-slate-500">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
            <span
              className={`font-bold ml-1 ${
                isLuminous ? 'text-slate-900' : 'text-[#262626]'
              }`}
            >
              4.9/5
            </span>
          </div>
          <span className="text-slate-300">•</span>
          <span>48,000+ active learners across 110 countries</span>
          <span className="text-slate-300">•</span>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold ${
              isLuminous
                ? 'bg-slate-100 rounded-full text-slate-800'
                : 'bg-amber-50 border border-amber-200 text-amber-800 rounded-[4px]'
            }`}
          >
            <span className="material-symbols-outlined text-[13px] text-amber-600">
              workspace_premium
            </span>
            #1 EdTech Product Hunt
          </span>
        </div>
      </div>

      {/* INTERACTIVE HERO SIMULATOR CARD */}
      <div className="mt-12 relative max-w-5xl mx-auto">
        {/* Floating Achievements Overlays (Visible in Luminous Style) */}
        {isLuminous && (
          <>
            <div className="hidden lg:flex items-center gap-2 absolute -left-8 top-16 z-20 bg-white/95 backdrop-blur-md shadow-xl rounded-full px-4 py-1.5 border border-slate-100 animate-bounce [animation-duration:3.5s]">
              <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-xs font-bold text-slate-900">+420 XP Streak</span>
              <span className="text-xs text-slate-400">Day 14</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 absolute -right-6 top-32 z-20 bg-white/95 backdrop-blur-md shadow-xl rounded-full px-4 py-1.5 border border-slate-100">
              <Target className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-900">
                {scenario.cefrLevel}
              </span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          </>
        )}

        {/* Main Glass Simulator Container */}
        <div
          className={`w-full overflow-hidden transition-all duration-200 ${
            isLuminous
              ? 'bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 p-5 md:p-6'
              : 'bg-white border border-[#f0f0f0] rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
          }`}
        >
          {/* Top Bar of AI Console */}
          <div
            className={`flex flex-wrap items-center justify-between gap-4 pb-4 ${
              !isLuminous ? 'p-4 border-b border-[#f0f0f0] bg-white' : 'border-b border-slate-100'
            }`}
          >
            {/* Left: Emma Tutor Info */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  className={`w-11 h-11 rounded-full object-cover border ${
                    isLuminous ? 'border-indigo-100' : 'border-[#d9d9d9]'
                  }`}
                  alt="A warm, hyper-realistic avatar portrait of Emma"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpdrDjgmQQn_okJ5-wpn3s3hzXWo_pvbMCdsa7B97qb7hjmm-BtCv8I01IbuxN5M-qpug57lP0fsMzzgjhkMfjKJRJnWJK0_-Z3e3wfq2J6dOpAMnEGU_eMKRcvi9T6IrB8Nm_sNspgRqf95H0dhx-pIWrgVfMvlthx7ZNFEJWPhNLk47GUSMUgKkxSHzm3uDrKVJr_5GD0mKPpk4MHqjhiFzVjbers2TcbDSoBzf3-iN70qkAfwdhxw"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-sm sm:text-base font-bold ${
                      isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                    }`}
                  >
                    Emma • AI Native Coach
                  </h3>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${
                      isLuminous
                        ? 'bg-indigo-100 text-[#4648d4]'
                        : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[2px]'
                    }`}
                  >
                    Live Voice
                  </span>
                </div>
                <p
                  className={`text-xs ${
                    isLuminous ? 'text-slate-500' : 'text-[#8c8c8c]'
                  }`}
                >
                  Scenario: {scenario.title}
                </p>
              </div>
            </div>

            {/* Right: Audio Wave Equalizer & Scenario Switcher */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Scenario Quick Selector */}
              <div className="relative">
                <select
                  value={activeScenarioId}
                  onChange={(e) => setActiveScenarioId(e.target.value)}
                  className={`block text-xs font-medium py-1.5 px-3 pr-7 rounded-lg border appearance-none focus:outline-none transition-colors ${
                    isLuminous
                      ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      : 'bg-white border-[#d9d9d9] text-[#262626] hover:border-[#1677ff] rounded-[4px]'
                  }`}
                >
                  {SCENARIOS.map((sc) => (
                    <option key={sc.id} value={sc.id}>
                      {sc.title.length > 28 ? sc.title.slice(0, 26) + '...' : sc.title}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 pointer-events-none text-slate-400"
                />
              </div>

              {/* Real-time Decibel / Audio Wave Preview */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-colors ${
                  isLuminous
                    ? 'bg-indigo-50/70 text-[#4648d4]'
                    : 'bg-[#f5f5f5] text-[#1677ff] border border-[#f0f0f0] rounded-[6px]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] text-[#4648d4]">
                  graphic_eq
                </span>
                <div className="flex items-end gap-0.5 h-4">
                  <span
                    className={`w-0.5 sm:w-1 rounded-full ${
                      isAiSpeaking || isListening ? 'bg-[#4648d4] animate-pulse h-3' : 'bg-slate-300 h-1.5'
                    }`}
                  />
                  <span
                    className={`w-0.5 sm:w-1 rounded-full ${
                      isAiSpeaking || isListening ? 'bg-[#4648d4] animate-pulse h-4' : 'bg-slate-300 h-2'
                    }`}
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className={`w-0.5 sm:w-1 rounded-full ${
                      isAiSpeaking || isListening ? 'bg-[#4648d4] animate-pulse h-2' : 'bg-slate-300 h-1'
                    }`}
                    style={{ animationDelay: '300ms' }}
                  />
                  <span
                    className={`w-0.5 sm:w-1 rounded-full ${
                      isAiSpeaking || isListening ? 'bg-[#4648d4] animate-pulse h-4' : 'bg-slate-300 h-3'
                    }`}
                    style={{ animationDelay: '75ms' }}
                  />
                </div>
                <span className="font-semibold text-[11px] sm:text-xs">
                  {isListening
                    ? 'Listening to you...'
                    : isAiSpeaking
                    ? 'Emma is speaking...'
                    : 'Ready to converse'}
                </span>
              </div>
            </div>
          </div>

          {/* Dialogue Thread & Fluency Telemetry Split */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-5 pt-5 ${
              !isLuminous ? 'p-5 divide-y lg:divide-y-0 lg:divide-x divide-[#f0f0f0]' : ''
            }`}
          >
            {/* Left Side: Transcript & Real-time Suggestions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3.5">
                {/* AI Bubble */}
                <div className="flex items-start gap-2.5">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      isLuminous
                        ? 'bg-indigo-100 text-[#4648d4]'
                        : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff]'
                    }`}
                  >
                    AI
                  </div>
                  <div
                    className={`rounded-2xl rounded-tl-none p-3.5 sm:p-4 max-w-lg shadow-sm border ${
                      isLuminous
                        ? 'bg-slate-50 border-slate-100 text-slate-800'
                        : 'bg-[#fafafa] border-[#f0f0f0] text-[#1f1f1f] rounded-[6px]'
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">
                      "{scenario.aiPrompt}"
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200/50">
                      <button
                        onClick={handlePlayAiVoice}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          isLuminous
                            ? 'text-[#4648d4] hover:text-[#6063ee]'
                            : 'text-[#1677ff] hover:text-[#4096ff]'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isAiSpeaking ? 'Playing...' : '0.9x Pitch Natural Pace'}</span>
                      </button>
                      <span className="text-[10px] text-slate-400">Audio playback ready</span>
                    </div>
                  </div>
                </div>

                {/* Learner Speech Bubble */}
                <div className="flex items-start justify-end gap-2.5">
                  <div
                    className={`rounded-2xl rounded-tr-none p-3.5 sm:p-4 max-w-lg shadow-md text-white ${
                      isLuminous
                        ? 'bg-[#4648d4]'
                        : 'bg-[#1677ff] rounded-[6px] shadow-[0_2px_0_rgba(5,145,255,0.1)]'
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {showAppliedReformulation ? (
                        <span>"{learnerText}"</span>
                      ) : (
                        <span>
                          "Honestly, we{' '}
                          <span
                            className="bg-rose-500/30 text-white font-semibold px-1 rounded underline decoration-wavy decoration-rose-300"
                            title="Tense inconsistency: 'yesterday' requires past simple"
                          >
                            {scenario.errorSnippet}
                          </span>{' '}
                          when calculating database failovers, but caching salvaged the response
                          window."
                        </span>
                      )}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1 text-[10px] text-white/80 border-t border-white/20">
                      <span>Learner Audio Input</span>
                      <button
                        onClick={() => setIsEditingLearner(!isEditingLearner)}
                        className="underline hover:text-white"
                      >
                        {isEditingLearner ? 'Cancel' : 'Edit Response'}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      isLuminous
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-blue-100 border border-blue-200 text-[#1677ff]'
                    }`}
                  >
                    ME
                  </div>
                </div>

                {/* Custom Edit Box (if user toggles edit) */}
                {isEditingLearner && (
                  <form
                    onSubmit={handleCustomInputSubmit}
                    className="ml-9 p-3 bg-slate-50 border border-slate-200 rounded-xl flex gap-2 animate-in fade-in"
                  >
                    <input
                      type="text"
                      value={userCustomInput}
                      onChange={(e) => setUserCustomInput(e.target.value)}
                      placeholder="Type your own sentence to practice..."
                      className="flex-1 text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                    >
                      Test
                    </button>
                  </form>
                )}

                {/* Live Surgical Repair Mini-Drawer */}
                <div
                  className={`ml-9 rounded-xl p-3.5 flex flex-col gap-1.5 border transition-all ${
                    isLuminous
                      ? 'bg-slate-50/90 border-slate-200/70 text-slate-800'
                      : 'bg-[#fffbe6] border-[#ffe58f] text-[#262626] rounded-[6px]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                        isLuminous ? 'text-rose-600' : 'text-[#d48806]'
                      }`}
                    >
                      <Wand2 className="w-3.5 h-3.5" />
                      Real-Time Grammar Alignment
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Polite Reformulation
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed">
                    Instead of{' '}
                    <span className="text-rose-600 font-medium line-through">
                      "{scenario.errorSnippet}"
                    </span>
                    , try{' '}
                    <button
                      onClick={() => handleApplyReformulation(scenario.suggestedFix)}
                      className="text-emerald-700 font-bold bg-white px-1.5 py-0.5 rounded shadow-sm hover:ring-2 hover:ring-emerald-400 transition-all inline-flex items-center gap-1"
                      title="Click to apply this phrase to the speech bubble"
                    >
                      <span>"{scenario.suggestedFix}"</span>
                      <Sparkles className="w-3 h-3 text-emerald-500" />
                    </button>
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-200/60">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">
                      Executive Alternatives:
                    </span>
                    {scenario.politeAlternatives.map((alt, i) => (
                      <button
                        key={i}
                        onClick={() => handleApplyReformulation(alt)}
                        className="text-[11px] text-indigo-700 hover:text-indigo-900 bg-white border border-indigo-100 px-2 py-0.5 rounded-full hover:border-indigo-300 transition-colors"
                      >
                        "{alt}"
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Active Mic Trigger Bar */}
              <div
                className={`flex items-center justify-between rounded-full p-1 pl-4 shadow-sm border transition-all mt-2 ${
                  isListening
                    ? 'ring-2 ring-emerald-500 bg-emerald-50/50 border-emerald-200'
                    : isLuminous
                    ? 'bg-white border-slate-200'
                    : 'bg-white border-[#d9d9d9] rounded-[6px]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      isListening ? 'text-emerald-600 animate-pulse' : 'text-emerald-500'
                    }`}
                  >
                    mic
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {isListening
                      ? 'Listening now... Click mic to stop and analyze'
                      : 'Tap mic or practice your response aloud...'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleToggleMic}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-md ${
                      isListening
                        ? 'bg-rose-600 text-white animate-pulse'
                        : isLuminous
                        ? 'bg-[#4648d4] text-white hover:scale-105 hover:bg-[#6063ee]'
                        : 'bg-[#1677ff] text-white hover:bg-[#4096ff] rounded-[4px]'
                    }`}
                    title={isListening ? 'Stop listening' : 'Start microphone practice'}
                    aria-label="Microphone practice button"
                  >
                    {isListening ? (
                      <MicOff className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Fluency Telemetry & Radar Gauge (5 cols) */}
            <div
              className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-4 border ${
                isLuminous
                  ? 'bg-slate-50/80 border-slate-100'
                  : 'bg-[#fafafa] border-[#f0f0f0] rounded-[6px]'
              }`}
            >
              <div className="flex items-center justify-between pb-1">
                <h4
                  className={`text-xs sm:text-sm font-bold ${
                    isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                  }`}
                >
                  Live Fluency Dial
                </h4>
                <span
                  className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isLuminous
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-[#f6ffed] border border-[#b7eb8f] text-[#52c41a] rounded-[2px]'
                  }`}
                >
                  {scenario.cefrLevel}
                </span>
              </div>

              {/* Inline SVG Dial Display */}
              <div className="flex items-center justify-center py-2">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      className={isLuminous ? 'stroke-slate-200' : 'stroke-[#f0f0f0]'}
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r={radius}
                      strokeWidth="7"
                    />
                    <circle
                      className={`transition-all duration-700 ease-out ${
                        isLuminous ? 'stroke-[#4648d4]' : 'stroke-[#1677ff]'
                      }`}
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      strokeWidth="7"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold leading-none ${
                        isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                      }`}
                    >
                      {fluencyScore}%
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">
                      Accuracy Score
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics Breakdown Mini Bars */}
              <div className="flex flex-col gap-2.5">
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span className="font-medium">Phonetic Clarity</span>
                    <span
                      className={`font-bold ${
                        isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
                      }`}
                    >
                      {scenario.phoneticClarity}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isLuminous ? 'bg-[#4648d4]' : 'bg-[#1677ff]'
                      }`}
                      style={{ width: `${scenario.phoneticClarity}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span className="font-medium">Conversational Flow (WPM)</span>
                    <span className="font-bold text-emerald-600">
                      {scenario.conversationalFlow}% ({scenario.wpm} WPM)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${scenario.conversationalFlow}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span className="font-medium">Vocabulary Sophistication</span>
                    <span className="font-bold text-rose-600">
                      {scenario.vocabularyScore}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${scenario.vocabularyScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Encouragement Footnote */}
              <div className="flex items-center gap-1.5 text-slate-500 text-xs pt-1 border-t border-slate-200/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{scenario.feedbackNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
