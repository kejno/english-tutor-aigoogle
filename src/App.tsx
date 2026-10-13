/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeMode } from './types';
import { Header } from './components/Header';
import { HeroSimulator } from './components/HeroSimulator';
import { TrustLogos } from './components/TrustLogos';
import { MethodologySection } from './components/MethodologySection';
import { TrackSection } from './components/TrackSection';
import { BentoGrid } from './components/BentoGrid';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { VideoDemoModal } from './components/VideoDemoModal';
import { LoginModal } from './components/LoginModal';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('luminous');
  const [activeSection, setActiveSection] = useState<string>('methodology');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isVideoDemoOpen, setIsVideoDemoOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const addToast = (
    title: string,
    description?: string,
    type: 'success' | 'info' | 'warning' = 'info'
  ) => {
    const newToast: ToastMessage = {
      id: Date.now().toString(),
      title,
      description,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    addToast(
      newTheme === 'luminous' ? 'Luminous Edition Activated' : 'Ant Design Edition Activated',
      newTheme === 'luminous'
        ? 'Electric Indigo palette with ambient glow meshes & fluid curves.'
        : 'Daybreak Blue palette with systematic Ant Design precision.',
      'info'
    );
  };

  const handleTrialComplete = (details: { goal: string; level: string; plan: string }) => {
    addToast(
      '7-Day Trial Initialized!',
      `Ready for ${details.goal}. Baseline calibrated at ${details.level}.`,
      'success'
    );
  };

  const handleLoginSuccess = (email: string) => {
    addToast('Welcome Back!', `Logged in as ${email}. Your XP streak is preserved.`, 'success');
  };

  const isLuminous = theme === 'luminous';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isLuminous
          ? 'bg-[#faf8ff] text-[#131b2e] selection:bg-indigo-100 selection:text-indigo-900 font-sans'
          : 'bg-[#fafafa] text-[#262626] selection:bg-[#e6f4ff] selection:text-[#1677ff] font-sans'
      }`}
    >
      {/* Top Navigation */}
      <Header
        theme={theme}
        onThemeChange={handleThemeChange}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenTrial={() => setIsTrialModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="w-full pt-20">
        <div id="interactive-demo">
          <HeroSimulator
            theme={theme}
            onOpenTrial={() => setIsTrialModalOpen(true)}
            onOpenVideoDemo={() => setIsVideoDemoOpen(true)}
            onShowToast={addToast}
          />
        </div>

        <TrustLogos theme={theme} />

        <MethodologySection
          theme={theme}
          onOpenDiagnostic={() => setIsTrialModalOpen(true)}
        />

        <TrackSection
          theme={theme}
          onShowToast={addToast}
        />

        <BentoGrid
          theme={theme}
          onSelectScenarioTag={(tag) => {
            const el = document.getElementById('interactive-demo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onShowToast={addToast}
        />

        <StatsSection theme={theme} />

        <TestimonialsSection theme={theme} />

        <PricingSection
          theme={theme}
          onOpenTrial={() => setIsTrialModalOpen(true)}
          onShowToast={addToast}
        />

        <FaqSection theme={theme} />

        <CtaBanner
          theme={theme}
          onShowToast={addToast}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onNavigate={handleNavigate}
        onShowToast={addToast}
      />

      {/* Modals & Overlays */}
      <DiagnosticModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        theme={theme}
        onComplete={handleTrialComplete}
      />

      <VideoDemoModal
        isOpen={isVideoDemoOpen}
        onClose={() => setIsVideoDemoOpen(false)}
        theme={theme}
        onOpenTrial={() => {
          setIsVideoDemoOpen(false);
          setIsTrialModalOpen(true);
        }}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        theme={theme}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Toast Feedback */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
