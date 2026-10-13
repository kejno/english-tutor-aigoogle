# FluentAI — Next-Gen AI English Tutor

> **Speak English with Natural Confidence in Just 15 Minutes a Day.**  
> Overcome speaking anxiety with a private, hyper-realistic AI tutor that listens, repairs grammar gently in real time, and tailors every simulated dialogue to your exact career ambitions.

---

## ✨ Features at a Glance

### 🎙️ 1. Interactive Live Voice Simulator
- **Natural Voice Synthesis**: Coach Emma speaks at natural cadence (`0.95x pace`) via the browser Web Speech API.
- **Real-Time Audio Waveforms**: Dynamic animated frequency visualizer reacting to incoming and outgoing speech.
- **Speech Recognition & Practice Input**: Practice out loud with live microphone audio recognition, one-click preset test prompts, or custom written responses.
- **Surgical Grammar Repair**: Instant error identification with highlighted corrections and polite, executive-level alternatives.
- **Live Fluency Dial**: Circular accuracy gauge (`0–100%`), CEFR trend classification, and metric telemetry for *Phonetic Clarity*, *Conversational Flow (WPM)*, and *Vocabulary Sophistication*.
- **Multi-Scenario Switcher**:
  - *Tech Lead Architecture Pitch & Executive Q&A*
  - *Salary Adjustment Review with VP*
  - *IELTS Speaking Part 2 & 3: Environmental Initiatives*
  - *Rooftop Mixer Banter & Cultural Discussion*

### 🎨 2. Dual Design System (Real-Time Switcher)
- **Luminous SaaS Edition**: Electric Indigo (`#4648d4`), radiant glow meshes, floating achievement chips (`+420 XP Streak`, `IELTS Band 7.5 Projected`), and frosted glass surfaces.
- **Ant Design Systematic Edition**: Daybreak Blue (`#1677ff`), structured segmented controls, clean bordered containers, and systematic typographic rhythm.

### 🎯 3. Targeted Learning Tracks
- **💼 Business & Tech Pitching**: Boardroom diplomacy, executive phrasing vault, pushback handling, and C-Suite metaphor masterclasses.
- **🎓 IELTS & Academic Prep**: Cambridge/IDP rubric simulation, Band 8.5 forecasting, and timed cue card drills.
- **🌍 Everyday Casual Conversation**: Natural phrasal verbs, humor, banter timing, and connected speech.
- **✈️ Relocation & Travel Fluency**: Tenancy agreements, municipal administration, healthcare symptoms, and utility escalations.
- *Includes interactive vocabulary cards with IPA transcriptions, audio pronunciation, and readiness progress tracking.*

### 🔬 4. Speech Science Bento Grid
- **Zero-Judgment Conversational Haven**: Infinitely patient listening designed to eradicate performance anxiety.
- **Phonetic Accent Tuner**: Isolate difficult sound pairings (e.g., `/θ/` in *"Thorough"* vs `/s/` in *"Severe"*) with interactive waveform comparisons.
- **1,200+ Roleplay Scenarios**: Coffee shop orders, VC seed pitches, hospital check-ins, and boardroom negotiations.
- **Adaptive Persistent Memory**: Auto-synced reinforcement tracking vocabulary and grammar stumbling blocks.

### 🚀 5. Onboarding & Demo Workflows
- **Interactive Diagnostic Assessment**: 3-step baseline calibration (Goals, CEFR Level, Speaking Anxiety).
- **2-Minute Interactive Video Demo**: Step-by-step simulated meeting roleplay walkthrough.
- **Pricing Calculator**: Seamless switch between Monthly and Annual (-40% savings) tiers with a 30-Day Unconditional Fluency Guarantee.
- **FAQ Accordion & Instant Free Trial Signup**: Complete with toast feedback.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Google Material Symbols](https://fonts.google.com/icons)
- **Audio & Speech**: Browser Native [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) (SpeechSynthesis & SpeechRecognition)
- **Motion & Interactions**: CSS Transitions & [Motion](https://motion.dev/)

---

## 📂 Project Architecture

```
├── index.html                   # Entry point with Google Fonts (Plus Jakarta Sans, Inter, Noto Sans)
├── package.json                 # Project dependencies & scripts
├── src/
│   ├── App.tsx                  # Main application shell with theme & modal orchestration
│   ├── main.tsx                 # React DOM mount point
│   ├── index.css                # Tailwind CSS v4 directives & font imports
│   ├── types.ts                 # TypeScript interfaces for scenarios, tracks, plans
│   ├── data/
│   │   └── mockData.ts          # Authentic scenarios, curriculum tracks, testimonials, FAQs
│   └── components/
│       ├── Header.tsx           # Responsive navigation with live Design Switcher & language selector
│       ├── HeroSimulator.tsx    # Live voice simulator, audio visualizer, grammar drawer, fluency dial
│       ├── TrustLogos.tsx       # Institutional proof strip
│       ├── MethodologySection.tsx # The 3-Step Rapid Fluency Method
│       ├── TrackSection.tsx     # Targeted track tabs, roleplay scenarios, interactive vocabulary
│       ├── BentoGrid.tsx        # Accent tuner, memory engine, zero-judgment haven
│       ├── StatsSection.tsx     # Quantitative proof metrics
│       ├── TestimonialsSection.tsx # Career transformation stories & verified ratings
│       ├── PricingSection.tsx   # Monthly/Annual billing calculator with tier comparisons
│       ├── FaqSection.tsx       # Interactive FAQ accordion
│       ├── CtaBanner.tsx        # High-converting trial registration banner
│       ├── Footer.tsx           # Comprehensive footer with compliance badges & newsletter
│       ├── DiagnosticModal.tsx  # 3-step diagnostic speaking test & onboarding modal
│       ├── VideoDemoModal.tsx   # Interactive 2-minute video walkthrough simulation
│       ├── LoginModal.tsx       # User authentication & demo guest sign-in
│       └── Toast.tsx            # Clean feedback toast notifications
└── vite.config.ts               # Vite configuration with Tailwind CSS plugin
```

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/fluent-ai.git
cd fluent-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📄 License

This project is licensed under the Apache-2.0 License.
