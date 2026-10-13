import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BrandIcon } from './BrandIcon';
import { Sparkles, Layout, Globe, ChevronDown, Menu, X, LogIn } from 'lucide-react';

interface HeaderProps {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenTrial: () => void;
  onOpenLogin: () => void;
}

const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'ES', label: 'Español' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'FR', label: 'Français' },
  { code: 'JA', label: '日本語' },
];

export const Header: React.FC<HeaderProps> = ({
  theme,
  onThemeChange,
  activeSection,
  onNavigate,
  onOpenTrial,
  onOpenLogin,
}) => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLuminous = theme === 'luminous';

  const navItems = [
    { id: 'methodology', label: 'Methodology' },
    { id: 'personalized-paths', label: 'Personalized Paths' },
    { id: 'interactive-demo', label: 'Interactive Demo' },
    { id: 'results-stories', label: 'Results & Stories' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isLuminous
          ? 'bg-[#ffffff]/85 backdrop-blur-xl border-b border-indigo-100/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
          : 'bg-white/95 backdrop-blur-md border-b border-[#f0f0f0] shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none"
          >
            <BrandIcon
              className={`h-8 w-8 shrink-0 ${isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'}`}
            />
            <span
              className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                isLuminous ? 'text-slate-900' : 'text-[#1f1f1f]'
              }`}
            >
              Fluent
              <span className={isLuminous ? 'text-[#4648d4]' : 'text-[#1677ff]'}>
                AI
              </span>
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-sm whitespace-nowrap transition-all rounded-md ${
                  isLuminous
                    ? isActive
                      ? 'text-[#4648d4] font-bold bg-indigo-50/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    : isActive
                    ? 'text-[#1677ff] font-medium border-b-2 border-[#1677ff] rounded-none'
                    : 'text-[#595959] hover:text-[#1677ff] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Design Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Design Screen Theme Switcher (Toggles between Image 1 Luminous vs Image 3 Ant Design) */}
          <div
            className={`flex items-center p-0.5 rounded-full border text-xs ${
              isLuminous
                ? 'bg-slate-100/80 border-slate-200'
                : 'bg-[#eeeeee] border-[#d9d9d9]'
            }`}
            title="Toggle between the two design styles provided in your screens"
          >
            <button
              onClick={() => onThemeChange('luminous')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                isLuminous
                  ? 'bg-white text-[#4648d4] shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#4648d4]" />
              <span className="hidden sm:inline">Luminous</span>
            </button>
            <button
              onClick={() => onThemeChange('antDesign')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                !isLuminous
                  ? 'bg-white text-[#1677ff] shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layout className="w-3 h-3 text-[#1677ff]" />
              <span className="hidden sm:inline">Ant Design</span>
            </button>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                isLuminous
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  : 'bg-[#f5f5f5] text-[#262626] border border-[#d9d9d9] hover:border-[#1677ff]'
              }`}
              aria-label="Select language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{selectedLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langOpen && (
              <div
                className={`absolute right-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-50 animate-in fade-in zoom-in-95 duration-100 ${
                  !isLuminous ? 'rounded-md shadow-md' : ''
                }`}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-indigo-50/70 transition-colors ${
                      selectedLang === lang.code
                        ? 'font-bold text-[#4648d4]'
                        : 'text-slate-700'
                    }`}
                  >
                    <span>{lang.label}</span>
                    <span className="text-[10px] text-slate-400">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Log In Link */}
          <button
            onClick={onOpenLogin}
            className={`hidden md:inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 transition-colors ${
              isLuminous
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-[#595959] hover:text-[#1677ff]'
            }`}
          >
            <LogIn className="w-3.5 h-3.5 opacity-70" />
            <span>Log in</span>
          </button>

          {/* Primary CTA: Start Free Trial */}
          <button
            onClick={onOpenTrial}
            className={`inline-flex items-center justify-center font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 transition-all whitespace-nowrap ${
              isLuminous
                ? 'rounded-full bg-[#4648d4] text-white shadow-[0_4px_14px_rgba(70,72,212,0.35)] hover:bg-[#6063ee] hover:shadow-[0_6px_20px_rgba(70,72,212,0.45)] hover:scale-[1.02]'
                : 'rounded-[6px] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.1)] hover:bg-[#4096ff] active:bg-[#0958d9]'
            }`}
          >
            Start Free Trial
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center pl-0.5">
            <img
              alt="Profile"
              className={`w-8 h-8 rounded-full object-cover ring-2 ${
                isLuminous ? 'ring-indigo-100' : 'ring-[#d9d9d9]'
              }`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNf7Hwiy3CQfZNur8r6m4Xc0pyRtXbN6ScGHGiF6iVpSp4xmSyzMDjpkJeqYYWslMX-UGRL1k5NwzmF7cZOtJoZgoCkuW6eiGIVt5m5OCIMCq-ceilWjql1UPhBEEu-50AvbbVvu1ouQGbM2gk6KriFLYN0ecIYTyJQw7QuRwkVQDbD0F8c5mPc0bNwqQTWQbln8Ecf86HnaUHCEBb_Xt3OUlhXpKiuts698TBoyI7H2s0D6rlm7_fIw"
            />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-2 pb-6 border-b transition-all ${
            isLuminous
              ? 'bg-white border-slate-200'
              : 'bg-[#fafafa] border-[#f0f0f0]'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? isLuminous
                      ? 'bg-indigo-50 text-[#4648d4] font-bold'
                      : 'bg-blue-50 text-[#1677ff] font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenLogin();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 font-medium hover:bg-slate-100 rounded-lg flex items-center gap-2"
              >
                <LogIn className="w-4 h-4 text-slate-500" />
                <span>Log In</span>
              </button>
              <button
                onClick={() => {
                  onOpenTrial();
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 text-center font-bold text-sm text-white rounded-lg ${
                  isLuminous ? 'bg-[#4648d4]' : 'bg-[#1677ff]'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
