import React from 'react';
import { ThemeMode } from '../types';
import { TESTIMONIALS } from '../data/mockData';

interface TestimonialsSectionProps {
  theme: ThemeMode;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme }) => {
  const isLuminous = theme === 'luminous';

  return (
    <section id="results-stories" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 mb-2.5 ${
            isLuminous
              ? 'bg-indigo-100 text-[#4648d4] rounded-full'
              : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
          }`}
        >
          Learner Proof
        </span>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 ${
            isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
          }`}
        >
          Real Transformations, Real Careers
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${isLuminous ? 'text-slate-600' : 'text-[#595959]'}`}>
          Hear how ambitious professionals shifted from hesitating mid-sentence to commanding meetings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
              isLuminous
                ? 'bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
                : 'bg-white border border-[#f0f0f0] rounded-[8px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                    t.badgeColor === 'primary'
                      ? 'bg-indigo-100 text-[#4648d4]'
                      : t.badgeColor === 'tertiary'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {t.badge}
                </span>

                <div className="flex items-center text-amber-500">
                  {[...Array(t.stars)].map((_, s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 italic ${isLuminous ? 'text-slate-700' : 'text-[#595959]'}`}>
                {t.quote}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <img
                className="w-11 h-11 rounded-full object-cover border border-slate-200"
                alt={t.name}
                src={t.avatar}
              />
              <div>
                <h4
                  className={`text-sm font-bold ${
                    isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                  }`}
                >
                  {t.name}
                </h4>
                <p className="text-xs text-slate-400">{t.role} • {t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
