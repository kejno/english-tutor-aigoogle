import React from 'react';
import { ThemeMode } from '../types';

interface StatsSectionProps {
  theme: ThemeMode;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ theme }) => {
  const isLuminous = theme === 'luminous';

  const stats = [
    {
      value: '3.4x',
      title: 'Faster Fluency Gains',
      detail: 'Compared to traditional flashcard apps',
      color: isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]',
    },
    {
      value: '87%',
      title: 'Passed Job Interview',
      detail: 'Within 60 days of consistent 15-min practice',
      color: isLuminous ? 'text-emerald-700' : 'text-[#52c41a]',
    },
    {
      value: '+1.5',
      title: 'Average IELTS Band Jump',
      detail: 'Documented across 12,000+ test-takers',
      color: isLuminous ? 'text-rose-600' : 'text-[#cf1322]',
    },
    {
      value: '12.4M',
      title: 'Spoken Minutes Logged',
      detail: 'Zero embarrassment. 100% private.',
      color: isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]',
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className={`rounded-3xl p-8 sm:p-12 transition-all border ${
          isLuminous
            ? 'bg-gradient-to-br from-indigo-50/70 to-slate-50 border-slate-100 shadow-sm'
            : 'bg-[#fafafa] border-[#f0f0f0] rounded-[8px]'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                !isLuminous ? 'bg-white border border-[#f0f0f0] p-6 rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]' : ''
              }`}
            >
              <span
                className={`text-4xl sm:text-5xl font-extrabold leading-none mb-2 tabular-nums ${stat.color}`}
              >
                {stat.value}
              </span>
              <span
                className={`text-base sm:text-lg font-bold mb-1 ${
                  isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
                }`}
              >
                {stat.title}
              </span>
              <p
                className={`text-xs ${
                  isLuminous ? 'text-slate-500' : 'text-[#8c8c8c]'
                }`}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
