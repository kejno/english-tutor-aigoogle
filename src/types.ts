export type ThemeMode = 'luminous' | 'antDesign';

export interface PracticeScenario {
  id: string;
  title: string;
  role: string;
  aiPrompt: string;
  sampleLearnerInput: string;
  errorSnippet: string;
  suggestedFix: string;
  politeAlternatives: string[];
  phoneticClarity: number;
  conversationalFlow: number;
  wpm: number;
  vocabularyScore: number;
  overallScore: number;
  cefrLevel: string;
  feedbackNote: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  meaning: string;
  status: 'Mastered' | 'In Practice' | 'Queued Today';
  ipa?: string;
  example: string;
}

export interface LearningTrack {
  id: string;
  label: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  roleplayScenario: string;
  features: string[];
  vocabularies: VocabularyItem[];
  progressPercent: number;
  stats?: { label: string; value: string; detail: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  badge: string;
  badgeColor: string;
  stars: number;
  quote: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  subtitle: string;
  popular?: boolean;
  features: { text: string; included: boolean; bold?: boolean }[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
