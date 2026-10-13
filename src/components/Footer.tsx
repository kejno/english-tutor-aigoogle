import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BrandIcon } from './BrandIcon';
import { ShieldCheck, Lock, Check } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onNavigate: (sectionId: string) => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  onNavigate,
  onShowToast,
}) => {
  const isLuminous = theme === 'luminous';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Newsletter Notice', 'Please enter a valid work email address.', 'warning');
      return;
    }
    setSubscribed(true);
    onShowToast('Subscribed!', `Speech Insights Weekly will be sent to ${newsletterEmail} every Tuesday.`, 'success');
  };

  return (
    <footer
      className={`w-full transition-colors border-t ${
        isLuminous
          ? 'bg-slate-50 border-slate-200/80 text-slate-600'
          : 'bg-white border-[#f0f0f0] text-[#595959]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200/80">
          {/* Col 1: Brand & Compliance (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <BrandIcon
                className={`h-7 w-7 shrink-0 ${isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'}`}
              />
              <span
                className={`text-lg font-bold tracking-tight ${
                  isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                }`}
              >
                Fluent
                <span className={isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'}>
                  AI
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-slate-500">
              The real-time conversational partner engineered for ambitious professionals and students. Achieve effortless verbal fluency without performance anxiety.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SOC2 Certified</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>GDPR Compliant</span>
              </span>
            </div>
          </div>

          {/* Col 2: Curriculum & Tech (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4
              className={`text-xs font-bold uppercase tracking-wider ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Curriculum & Tech
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('methodology')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  Pronunciation Coach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('personalized-paths')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  IELTS & TOEFL Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('personalized-paths')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  Business English Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interactive-demo')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  Real-time Accent Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('methodology')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  Acoustic Wave Analysis
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4
              className={`text-xs font-bold uppercase tracking-wider ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('results-stories')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  Learner Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-indigo-600 text-left transition-colors"
                >
                  Institutional Plans
                </button>
              </li>
              <li>
                <span className="text-slate-400 cursor-default">Speech Science Lab</span>
              </li>
              <li>
                <span className="text-slate-400 cursor-default">Careers</span>
              </li>
              <li>
                <span className="text-slate-400 cursor-default">Press Kit</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4
              className={`text-xs font-bold uppercase tracking-wider ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Speech Insights Weekly
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get cognitive linguistics techniques and AI prompt exercises delivered every Tuesday.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg">
                <Check className="w-4 h-4" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-1.5 w-full">
                <div
                  className={`flex items-center rounded-lg p-1 border shadow-sm ${
                    isLuminous
                      ? 'bg-white border-slate-200'
                      : 'bg-white border-[#d9d9d9] rounded-[4px]'
                  }`}
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email"
                    required
                    className="w-full px-2.5 py-1.5 bg-transparent text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className={`px-3 py-1.5 text-xs font-bold text-white shrink-0 transition-colors ${
                      isLuminous
                        ? 'rounded-md bg-[#4648d4] hover:bg-[#6063ee]'
                        : 'rounded-[3px] bg-[#1677ff] hover:bg-[#4096ff]'
                    }`}
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-slate-400">Zero spam. Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© 2025 FluentAI Technologies Inc. All rights reserved.</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-slate-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Security Whitepaper
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
