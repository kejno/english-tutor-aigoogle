import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { FAQS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  theme: ThemeMode;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ theme }) => {
  const isLuminous = theme === 'luminous';
  const [openIds, setOpenIds] = useState<string[]>(['f1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 mb-2.5 inline-block ${
            isLuminous
              ? 'bg-indigo-100 text-[#4648d4] rounded-full'
              : 'bg-[#e6f4ff] border border-[#91caff] text-[#1677ff] rounded-[4px]'
          }`}
        >
          Got Questions?
        </span>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-1 ${
            isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
          }`}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div
        className={`flex flex-col gap-3 ${
          !isLuminous ? 'border border-[#f0f0f0] rounded-[8px] overflow-hidden divide-y divide-[#f0f0f0] gap-0' : ''
        }`}
      >
        {FAQS.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className={`transition-all ${
                isLuminous
                  ? 'bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100'
                  : 'bg-white p-4 sm:p-5'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-slate-900 gap-4"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  className={`pt-3 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200 ${
                    isLuminous ? 'text-slate-600' : 'text-[#595959] border-t border-[#f0f0f0] mt-3 pt-3 bg-[#fafafa] -mx-4 sm:-mx-5 px-4 sm:px-5 pb-2'
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
