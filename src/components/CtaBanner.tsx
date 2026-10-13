import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  theme: ThemeMode;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ theme, onShowToast }) => {
  const isLuminous = theme === 'luminous';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Valid Email Required', 'Please provide a valid email address.', 'warning');
      return;
    }
    setSubmitted(true);
    onShowToast('Free Trial Reserved!', `Invitation sent to ${email}. You have 7 days unrestricted access.`, 'success');
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div
        className={`rounded-3xl p-8 sm:p-14 md:p-20 text-center relative overflow-hidden transition-all ${
          isLuminous
            ? 'bg-gradient-to-r from-[#4648d4] to-[#6063ee] text-white shadow-2xl'
            : 'bg-white border border-[#f0f0f0] rounded-[8px] text-[#1f1f1f] shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
        }`}
      >
        {/* Ambient decorative flares for luminous */}
        {isLuminous && (
          <>
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </>
        )}

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span
            className={`text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-4 ${
              isLuminous
                ? 'bg-white/20 text-white'
                : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
            }`}
          >
            Unlock Global Opportunities
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Your Next Career Milestone Requires Fluent English.
          </h2>

          <p
            className={`text-sm sm:text-lg max-w-xl mb-8 leading-relaxed ${
              isLuminous ? 'text-white/90' : 'text-[#595959]'
            }`}
          >
            Start speaking out loud today without performance anxiety. Your private AI tutor is ready when you are.
          </p>

          {/* Quick Signup Form */}
          {submitted ? (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-sm border border-emerald-400/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Welcome aboard! Check {email} for immediate setup access.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`w-full max-w-md flex flex-col sm:flex-row items-center gap-2 p-1.5 shadow-lg ${
                isLuminous
                  ? 'bg-white rounded-full'
                  : 'bg-white border border-[#d9d9d9] rounded-[6px]'
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-2.5 bg-transparent text-slate-800 text-xs sm:text-sm focus:outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className={`w-full sm:w-auto shrink-0 font-bold text-xs sm:text-sm px-6 py-2.5 transition-all whitespace-nowrap ${
                  isLuminous
                    ? 'rounded-full bg-[#4648d4] text-white hover:bg-[#6063ee]'
                    : 'rounded-[4px] bg-[#1677ff] text-white hover:bg-[#4096ff]'
                }`}
              >
                Claim 7 Days Free
              </button>
            </form>
          )}

          <p
            className={`text-[11px] sm:text-xs mt-4 ${
              isLuminous ? 'text-white/75' : 'text-[#8c8c8c]'
            }`}
          >
            No credit card required upfront • Setup takes 90 seconds
          </p>
        </div>
      </div>
    </section>
  );
};
