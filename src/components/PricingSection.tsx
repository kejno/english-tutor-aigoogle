import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { PRICING_PLANS } from '../data/mockData';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  theme: ThemeMode;
  onOpenTrial: () => void;
  onShowToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  theme,
  onOpenTrial,
  onShowToast,
}) => {
  const isLuminous = theme === 'luminous';
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggleBilling = (annual: boolean) => {
    setIsAnnual(annual);
    onShowToast(
      annual ? 'Annual Billing Selected' : 'Monthly Billing Selected',
      annual ? '40% discount applied across all tiers.' : 'Standard monthly plan rate active.',
      'info'
    );
  };

  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 mb-2.5 ${
            isLuminous
              ? 'bg-indigo-100 text-[#4648d4] rounded-full'
              : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
          }`}
        >
          Simple Plans
        </span>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 ${
            isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
          }`}
        >
          Invest in Your Verbal Future
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
          Less than the price of a single private tutor session per month. Full speech science stack included.
        </p>

        {/* Billing Period Toggle */}
        <div
          className={`inline-flex items-center p-1 rounded-full mt-6 border transition-all ${
            isLuminous
              ? 'bg-slate-100 border-slate-200'
              : 'bg-[#eeeeee] border-[#d9d9d9] rounded-[6px]'
          }`}
        >
          <button
            onClick={() => handleToggleBilling(false)}
            className={`px-4 py-1.5 text-xs font-bold transition-all rounded-full ${
              !isAnnual
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            } ${!isLuminous && !isAnnual ? 'rounded-[4px]' : ''}`}
          >
            Billed Monthly
          </button>
          <button
            onClick={() => handleToggleBilling(true)}
            className={`px-4 py-1.5 text-xs font-bold transition-all rounded-full flex items-center gap-1 ${
              isAnnual
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            } ${!isLuminous && isAnnual ? 'rounded-[4px]' : ''}`}
          >
            <span>Billed Annually</span>
            <span className="text-emerald-600 font-bold ml-1">Save 40%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? isLuminous
                    ? 'bg-white border-2 border-[#4648d4] shadow-2xl scale-[1.02] z-10'
                    : 'bg-white border-2 border-[#1677ff] rounded-[8px] shadow-[0_6px_16px_rgba(0,0,0,0.08)] scale-[1.01]'
                  : isLuminous
                  ? 'bg-white border border-slate-100 shadow-sm hover:shadow-md'
                  : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
              }`}
            >
              {plan.popular && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold px-4 py-1 rounded-full shadow-md ${
                    isLuminous
                      ? 'bg-[#4648d4] text-white'
                      : 'bg-[#1677ff] text-white'
                  }`}
                >
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isLuminous
                          ? 'bg-indigo-100 text-[#4648d4]'
                          : 'bg-[#e6f4ff] text-[#1677ff] rounded-[2px]'
                      }`}
                    >
                      All Features
                    </span>
                  )}
                </div>

                <p className={`text-xs mb-4 ${isLuminous ? 'text-slate-500' : 'text-[#8c8c8c]'}`}>
                  {plan.subtitle}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-4 border-b border-slate-100">
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold tabular-nums transition-all ${
                      isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                    }`}
                  >
                    ${price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feat, f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-xs sm:text-sm ${
                        feat.included
                          ? feat.bold
                            ? 'font-bold text-slate-900'
                            : 'text-slate-700'
                          : 'text-slate-400'
                      }`}
                    >
                      {feat.included ? (
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'
                          }`}
                        />
                      ) : (
                        <X className="w-4 h-4 shrink-0 mt-0.5 text-slate-300" />
                      )}
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenTrial}
                className={`w-full py-2.5 sm:py-3 text-xs sm:text-sm font-bold transition-all ${
                  plan.popular
                    ? isLuminous
                      ? 'rounded-full bg-[#4648d4] text-white shadow-[0_4px_14px_rgba(70,72,212,0.35)] hover:bg-[#6063ee]'
                      : 'rounded-[6px] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.1)] hover:bg-[#4096ff]'
                    : isLuminous
                    ? 'rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200'
                    : 'rounded-[6px] bg-white border border-[#d9d9d9] text-[#262626] hover:border-[#1677ff] hover:text-[#1677ff]'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          );
        })}
      </div>

      {/* Money-back Guarantee Footnote */}
      <div className="flex items-center justify-center gap-2 text-center pt-8 text-slate-500 text-xs">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          <strong>30-Day Unconditional Fluency Guarantee:</strong> If your confidence does not dramatically expand, request a full refund with 1-click.
        </span>
      </div>
    </section>
  );
};
