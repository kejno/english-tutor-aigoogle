import { PracticeScenario, LearningTrack, Testimonial, PricingPlan, FaqItem } from '../types';

export const SCENARIOS: PracticeScenario[] = [
  {
    id: 'tech-lead',
    title: 'Tech Lead Architecture Pitch & Executive Q&A',
    role: 'Staff Solutions Architect & VP of Engineering',
    aiPrompt: 'That migration strategy makes total sense. Could you elaborate on how your team addressed the latency spike during the initial deployment phase?',
    sampleLearnerInput: 'Honestly, we make mistakes yesterday when calculating database failovers, but caching salvaged the response window.',
    errorSnippet: 'make mistakes yesterday',
    suggestedFix: 'we made mistakes yesterday',
    politeAlternatives: [
      'we encountered an oversight yesterday',
      'we ran into an unexpected anomaly during initial testing'
    ],
    phoneticClarity: 91,
    conversationalFlow: 88,
    wpm: 138,
    vocabularyScore: 86,
    overallScore: 94,
    cefrLevel: 'C1 Native Trend',
    feedbackNote: 'Filler word hesitation dropped by 42% since session 3.'
  },
  {
    id: 'salary-negotiation',
    title: 'Salary Adjustment Review with VP',
    role: 'Senior Product Manager & Division Head',
    aiPrompt: 'We appreciate the deliverable outcomes from Q3. However, broad budget constraints mean any off-cycle raise requires solid business justification.',
    sampleLearnerInput: 'Looking at my results, I give more value than required and feel I should get paid higher money.',
    errorSnippet: 'I give more value than required and feel I should get paid higher money',
    suggestedFix: 'I delivered measurable ROI beyond my baseline KPI targets and would like to adjust compensation accordingly',
    politeAlternatives: [
      'My track record this quarter reflects a 30% pipeline expansion, warranting a market compensation review',
      'Given the scope of responsibilities I have absorbed, I propose aligning my base with tier-one benchmarks'
    ],
    phoneticClarity: 93,
    conversationalFlow: 85,
    wpm: 132,
    vocabularyScore: 89,
    overallScore: 92,
    cefrLevel: 'C1 Executive',
    feedbackNote: 'Pitch cadence was assertive without sounding adversarial.'
  },
  {
    id: 'ielts-cue-card',
    title: 'IELTS Speaking Part 2 & 3: Environmental Initiatives',
    role: 'Official Cambridge IELTS Examiner Simulator',
    aiPrompt: 'Could you outline how civic policy in your metropolitan district successfully tackled plastic waste reduction?',
    sampleLearnerInput: 'The municipal council do many good things, but citizens didn\'t agree easily in the first beginning.',
    errorSnippet: 'do many good things / in the first beginning',
    suggestedFix: 'The municipal council implemented progressive incentives, though public adoption was initially hesitant',
    politeAlternatives: [
      'The municipality instituted targeted sustainability bylaws that gradually cultivated civic compliance',
      'Local authorities launched comprehensive subsidization policies to ease public transition'
    ],
    phoneticClarity: 89,
    conversationalFlow: 92,
    wpm: 145,
    vocabularyScore: 91,
    overallScore: 93,
    cefrLevel: 'Band 8.5 Predicted',
    feedbackNote: 'Cohesive discourse markers used naturally: "furthermore", "in retrospect".'
  },
  {
    id: 'casual-social',
    title: 'Rooftop Mixer Banter & Indie Film Discussion',
    role: 'Local Creative & Film Producer in Brooklyn',
    aiPrompt: 'Did you catch that new Scandinavian thriller screened at BAM last Thursday? The cinematography felt intensely claustrophobic.',
    sampleLearnerInput: 'Yeah I seen it! The sound was so loud and made me feel weird, but acting was great.',
    errorSnippet: 'I seen it / made me feel weird',
    suggestedFix: 'I watched it! The ambient audio design was visceral and somewhat unsettling, but the performances were stellar',
    politeAlternatives: [
      'I managed to catch it! The sound design was jarringly immersive, though the cast delivered masterfully',
      'Totally! It really got under my skin, which made the narrative tension even more palpable'
    ],
    phoneticClarity: 95,
    conversationalFlow: 94,
    wpm: 152,
    vocabularyScore: 84,
    overallScore: 95,
    cefrLevel: 'C2 Conversational',
    feedbackNote: 'Natural phrasal verbs flowed seamlessly without textbook awkwardness.'
  }
];

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: 'business',
    label: '💼 Business & Tech Pitching',
    icon: 'business_center',
    badge: 'Recommended for Senior Engineers, PMs, and Consultants',
    title: 'Ace C-Suite Reviews and Executive Phrasing Without Stumbling',
    description: 'Simulate high-pressure boardroom interactions. Practice diplomacy, conflict resolution, active pushback, and crisp technical storytelling.',
    roleplayScenario: '"Negotiating a 15% salary adjustment with your Vice President after exceeding quarterly KPI metrics."',
    features: [
      'C-Suite Phrasing Vault',
      'Real-time Tone Polisher',
      'Impromptu Pitch Drills',
      'Tech Metaphor Masterclass'
    ],
    progressPercent: 78,
    vocabularies: [
      {
        id: 'v1',
        word: 'Leverage synergies',
        meaning: 'Executive alternative to "work together"',
        status: 'Mastered',
        ipa: '/ˈlɛvərɪdʒ ˈsɪnərdʒiz/',
        example: 'We can leverage synergies between mobile and web infra teams.'
      },
      {
        id: 'v2',
        word: 'Streamline overhead',
        meaning: 'Alternative to "make cost cheaper"',
        status: 'In Practice',
        ipa: '/ˈstriːmlaɪn ˈoʊvərˌhɛd/',
        example: 'Automating regression pipelines will streamline overhead by 22%.'
      },
      {
        id: 'v3',
        word: 'Paradigm shift',
        meaning: 'Express fundamental structural evolution',
        status: 'Queued Today',
        ipa: '/ˈpærəˌdaɪm ʃɪft/',
        example: 'Adopting event-driven architecture represented a true paradigm shift.'
      }
    ]
  },
  {
    id: 'ielts',
    label: '🎓 IELTS & Academic Prep',
    icon: 'school',
    badge: 'Certified Cambridge & IDP Examination Rubric',
    title: 'Simulate Speaking Part 1, 2 & 3 with Exact Band Score Forecasts',
    description: 'Train under realistic 2-minute cue card timers. Eliminate hesitation penalties, refine your lexical resource, and master cohesive transitions.',
    roleplayScenario: '"Describe an environmental initiative in your hometown that positively impacted civic health."',
    features: [
      'Band 8.0+ Predictor',
      'Strict Timing Alarms',
      'Lexical Diversity Matrix',
      'Discourse Marker Drills'
    ],
    progressPercent: 84,
    stats: [
      { label: 'Fluency & Coherence', value: 'Band 8.5', detail: 'Targeting zero awkward pauses' },
      { label: 'Grammatical Range', value: 'Band 8.0', detail: 'Complex subjunctive clauses' },
      { label: 'Phonological Accuracy', value: 'Band 8.0', detail: 'Intonation & connected speech' }
    ],
    vocabularies: [
      {
        id: 'v4',
        word: 'Ubiquitous deployment',
        meaning: 'Present, appearing, or found everywhere',
        status: 'Mastered',
        ipa: '/juːˈbɪkwɪtəs/',
        example: 'Smartphone adoption has become ubiquitous across urban demographics.'
      },
      {
        id: 'v5',
        word: 'Catalyze reform',
        meaning: 'To accelerate meaningful systemic change',
        status: 'In Practice',
        ipa: '/ˈkætəlaɪz rɪˈfɔːrm/',
        example: 'The investigation catalyzed nationwide ecological reforms.'
      },
      {
        id: 'v6',
        word: 'In retrospect',
        meaning: 'Looking back on past events with clarity',
        status: 'Queued Today',
        ipa: '/ɪn ˈrɛtrəˌspɛkt/',
        example: 'In retrospect, the preventative lockdowns mitigated worse fallout.'
      }
    ]
  },
  {
    id: 'casual',
    label: '🌍 Everyday Casual Conversation',
    icon: 'chat_bubble',
    badge: 'Real Native Idioms & Slang',
    title: 'Talk About Culture, Movies, Sports & Socialize Comfortably',
    description: 'Drop the stiff textbook greetings. Learn natural phrasal verbs, humor dynamics, banter, and small-talk openers used at dinner parties and casual meetups.',
    roleplayScenario: '"Bantering at a rooftop barbecue in Brooklyn about indie film releases."',
    features: [
      'Natural Phrasal Verbs',
      'Slang & Idiom Nuances',
      'Humor & Banter Timing',
      'Connected Speech Linking'
    ],
    progressPercent: 91,
    stats: [
      { label: 'Phrasal Verb Vault', value: '420+ Verbs', detail: '"Hit it off", "Touch base"' },
      { label: 'Contraction Mastery', value: '98%', detail: 'Linking consonants smoothly' },
      { label: 'Social Ease Index', value: 'Top 5%', detail: 'Low hesitation latency' }
    ],
    vocabularies: [
      {
        id: 'v7',
        word: 'Hit it off',
        meaning: 'Be naturally friendly immediately upon meeting',
        status: 'Mastered',
        ipa: '/hɪt ɪt ɔːf/',
        example: 'We hit it off right away discussing vintage synths.'
      },
      {
        id: 'v8',
        word: 'Call it a day',
        meaning: 'Decide or agree to stop doing something',
        status: 'In Practice',
        ipa: '/kɔːl ɪt ə deɪ/',
        example: 'Let\'s wrap up this code sprint and call it a day.'
      },
      {
        id: 'v9',
        word: 'Take a rain check',
        meaning: 'Politely postpone an offer or invitation',
        status: 'Queued Today',
        ipa: '/teɪk ə reɪn tʃɛk/',
        example: 'I have a late sync tonight, mind if I take a rain check?'
      }
    ]
  },
  {
    id: 'relocation',
    label: '✈️ Relocation & Travel Fluency',
    icon: 'flight_takeoff',
    badge: 'Everyday Logistics & Expat Life',
    title: 'Apartment Leases, Bank Accounts, Clinics & Neighborhood Life',
    description: 'Conquer the real anxiety of settling into London, New York, or Sydney. Never freeze when signing utility agreements or scheduling appointments.',
    roleplayScenario: '"Disputing an unexpected water utility bill over phone customer support."',
    features: [
      'Emergency & Healthcare Protocol',
      'Housing Lease Clauses',
      'Financial & Tax Terminology',
      'Municipal Bureaucracy Prep'
    ],
    progressPercent: 72,
    stats: [
      { label: 'Healthcare Readiness', value: '100%', detail: 'Symptom & dosage precision' },
      { label: 'Tenancy Contracts', value: '88%', detail: 'Deposit disputes & covenants' },
      { label: 'Utility Escalations', value: '95%', detail: 'Direct assertive negotiations' }
    ],
    vocabularies: [
      {
        id: 'v10',
        word: 'Discrepancy in billing',
        meaning: 'An illogical difference or error on an invoice',
        status: 'Mastered',
        ipa: '/dɪˈskrɛpənsi/',
        example: 'There appears to be a billing discrepancy on item four.'
      },
      {
        id: 'v11',
        word: 'Security deposit refund',
        meaning: 'Reclaiming lease collateral upon moving out',
        status: 'In Practice',
        ipa: '/sɪˈkjʊərɪti dɪˈpɒzɪt/',
        example: 'Under city tenancy law, my security deposit is due within 14 days.'
      },
      {
        id: 'v12',
        word: 'Counteroffer stipulation',
        meaning: 'A conditional reply in lease negotiation',
        status: 'Queued Today',
        ipa: '/ˈkaʊntərˌɔːfər/',
        example: 'We accepted their counteroffer with an added paint stipulation.'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marco S.',
    role: 'Senior Tech Lead',
    location: 'Berlin Hub',
    badge: 'CEFR: B1 ➔ C1 Level',
    badgeColor: 'primary',
    stars: 5,
    quote: '"FluentAI cured my imposter syndrome before standups. I went from hesitant one-word answers to leading multi-team architecture sprint reviews at our Berlin office with zero anxiety."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABdjpopj-mWqHclxT71sfAJ6AyeD2y42QQ9uHXJe-BO-Orhw1NiTUEqfNnSt0fSK0QbwT1yCbMUZh2v_WBdsMbDKWwjvjMCrhHs5mCuF0rkgcFRd7Tmt1UhRqctP0tHpn6pF7-mOPQrEsHkBfmDmeAM54zZzIcRDTQW1yjmzcLUcFrUCIMjcKpPmsAStES1wHEo344tkq-chx55ndQNM_hWXu9aiWvjEHg6GQtj2SQvn5BiM1SFKtLfw'
  },
  {
    name: 'Aiko T.',
    role: 'Medical Researcher',
    location: 'Tokyo',
    badge: 'IELTS 6.5 ➔ Band 8.5',
    badgeColor: 'tertiary',
    stars: 5,
    quote: '"The IELTS examiner simulator gave me exact Band 8.0 predictions before my official exam. Scored an overall 8.5 last weekend! The instant feedback on transition words made all the difference."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD0loKVhYLf9xd3tx7LpwMdHULz6YxFK_3IzFG3LkfPnJCs173vV4ZX_K-cWmPabpZAMasRDoctBvygLzE24AnMcYZVmB8-u71dRQ30hlw5H5Gb3ZJXXx808d5nBEoUkBI9_GvwzUkgEInsxQ7-MNp_9L2oa6UWztXx2oMkDKjexWZHHcw2Up8YidUmM1wCEGV2wxFSq927sbMvUsbEKf20auZGgKmUd-A9_L7AFXWYBVuCeYVZsAScA'
  },
  {
    name: 'Carlos M.',
    role: 'Marketing Director',
    location: 'Madrid',
    badge: 'Promoted to VP',
    badgeColor: 'secondary',
    stars: 5,
    quote: '"Like having an Oxford linguistics professor in your pocket available at 11 PM after work. It caught every recurring habit I had with irregular verbs within just 3 days."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa6bxqHPMDbObtAfx4P5DUm8gY2As4N2F7A05TYXlvFYElhvU6zpfWn1zT48vxaQ5vaqSz9pvXFKOJWhbuODSnCuXa-4Hq5faT9-FVNA5dpBQkdXSAusWIklinFXArJLgaj5NHglaQ5sLL8yuNyNK4lf6nv56dBRdMJHMympq9W2IXpeQxDcNTqNj-wmpX_--iPPZ6aqSvL6Mrsh5-jPCiZMizPs8ooRbLgarTDMRkOBXeIidQ5kL1NA'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 14,
    annualPrice: 8,
    subtitle: 'Perfect for casual learners building daily habits.',
    ctaText: 'Start Free 7-Day Trial',
    features: [
      { text: '15 mins daily voice conversation', included: true },
      { text: 'Standard grammar correction', included: true },
      { text: '100+ basic roleplay scenarios', included: true },
      { text: 'Phonetic accent waveforms', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Pro Fluency',
    popular: true,
    monthlyPrice: 24,
    annualPrice: 14,
    subtitle: 'For professionals, expats, and exam candidates.',
    ctaText: 'Start Free 7-Day Trial',
    features: [
      { text: 'Unlimited voice conversation minutes', included: true, bold: true },
      { text: 'Phonetic Accent Tuner & Mouth Shapes', included: true },
      { text: 'IELTS Speaking Examiner Simulator', included: true },
      { text: 'Executive & Tech Business tracks', included: true },
      { text: 'Ultra-low latency audio (<300ms)', included: true }
    ]
  },
  {
    id: 'executive',
    name: 'Executive 1-on-1 AI+',
    monthlyPrice: 49,
    annualPrice: 29,
    subtitle: 'For founders, diplomats, and senior executives.',
    ctaText: 'Start Free 7-Day Trial',
    features: [
      { text: 'Everything in Pro Fluency', included: true, bold: true },
      { text: 'Monthly human linguist accent audit', included: true },
      { text: 'Custom corporate scenarios uploaded', included: true },
      { text: 'VIP Priority Voice Infrastructure', included: true }
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Is an AI tutor genuinely better than a human tutor?',
    answer: 'Human tutors are wonderful, but they cost $35-$70/hr, require strict calendar booking, and naturally introduce social hesitation. FluentAI provides zero-anxiety unlimited practice at 11 PM or 7 AM, never gets fatigued, and instantly records phonetic data that no human ear can measure in real time.'
  },
  {
    id: 'f2',
    question: 'How does the 7-day free trial work?',
    answer: 'You get complete, unrestricted access to the Pro tier for 7 full days. We send a friendly reminder email 48 hours before the trial ends. If you decide it is not for you, cancel in your settings with a single click.'
  },
  {
    id: 'f3',
    question: 'What English level do I need before starting?',
    answer: 'FluentAI is optimal for learners from high-beginner (A2) through fluent professional (C1). The initial 3-minute diagnostic test automatically assesses your baseline, so Emma never uses vocabulary too trivial or overwhelmingly complex.'
  },
  {
    id: 'f4',
    question: 'Will FluentAI help me eliminate my native accent completely?',
    answer: 'Our pedagogical philosophy prioritizes clarity, cadence, and intelligibility over sterile native replication. Having an accent is part of your identity! We focus on repairing phonemes that cause misunderstandings so you are heard clearly anywhere in the world.'
  }
];
