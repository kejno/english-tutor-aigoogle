import React from 'react';
import { ThemeMode } from '../types';

interface TrustLogosProps {
  theme: ThemeMode;
}

export const TrustLogos: React.FC<TrustLogosProps> = ({ theme }) => {
  const isLuminous = theme === 'luminous';

  const companies = [
    'Google',
    'Spotify',
    'McKinsey',
    'Stanford',
    'Uber',
    'Revolut',
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        className={`rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center border transition-all ${
          isLuminous
            ? 'bg-slate-50/70 border-slate-100 shadow-sm'
            : 'bg-[#fafafa] border-[#f0f0f0] rounded-[6px]'
        }`}
      >
        <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-6">
          Trusted by ambitious professionals & graduate students from top institutions worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center w-full opacity-70 hover:opacity-100 transition-opacity">
          {companies.map((company) => (
            <div
              key={company}
              className={`text-lg sm:text-xl font-bold tracking-tight select-none transition-colors ${
                isLuminous ? 'text-slate-800 hover:text-[#4648d4]' : 'text-[#262626] hover:text-[#1677ff]'
              }`}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
