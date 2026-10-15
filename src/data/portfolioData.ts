import { OperatorProfile, LoreDialogue, ProjectDossier, SkillModule, OperationLogItem } from '../types/portfolio';

export const OPERATOR_PROFILE: OperatorProfile = {
  name: 'Syahrul Ramadhon',
  callsign: 'SYAHRUL_RAMAD',
  codename: 'OPERATOR SR-522',
  classType: 'Specialist',
  subClass: 'Data Scientist & Full-Stack Architect',
  rarityStars: 6,
  level: 92,
  currentExp: 3840,
  maxExp: 4000,
  sanity: '135/135',
  trust: '200%',
  location: 'Magelang, Central Java, Indonesia',
  email: 'syahrulram49@gmail.com',
  phone: '+62 856-4731-4783',
  github: 'https://github.com/sahrulramad',
  portfolioUrl: 'https://sahrulramad.github.io/portfolio/',
  statusBadge: 'AVAILABLE FOR DEPLOYMENT // OPEN TO WORK',
  headline: 'Informatics Graduate (S.Kom, Cum Laude) · Machine Learning Engineer & Full-Stack Developer',
  summary: 'I take data and software challenges from raw source to production-grade deployment: from exploratory data analysis and cross-validated ML models, to responsive Next.js/React front-ends and robust backend microservices. Focused on turning complex data intelligence into defensible, business-ready decisions.'
};

export const LORE_DIALOGUES: LoreDialogue[] = [
  {
    speaker: 'PRTS AI // ARCHIVE RECONSTRUCTION',
    paragraph: 'Operator Syahrul Ramadhon completed his Bachelor of Informatics (S.Kom) at Universitas Teknologi Yogyakarta with Cum Laude distinction (GPA 3.53/4.00). His academic and practical doctrine focuses on end-to-end data systems and robust web infrastructure.',
    chapterTag: 'DOSSIER CH.01 — ACADEMIC FOUNDATION'
  },
  {
    speaker: 'SYAHRUL RAMADHON // OPERATOR LOG',
    paragraph: 'My research doctrine pairs predictive machine learning with transparent decision-support architectures. In my undergraduate thesis, I developed a 97% accurate Random Forest dominant-intelligence classifier fused with an expert-weighted AHP-SAW engine to recommend university majors without black-box opacity.',
    chapterTag: 'DOSSIER CH.02 — RESEARCH PROTOCOL'
  },
  {
    speaker: 'RHODES ISLAND EMR // TACTICAL ANALYSIS',
    paragraph: 'Beyond machine learning, Operator Ramadhon actively engineers modern web systems. He contributed core architecture to Detecto (a production AI content detection platform with swappable detection engines) and engineered cipta.in (a multi-tenant SaaS website builder with on-demand cache revalidation).',
    chapterTag: 'DOSSIER CH.03 — FIELD DEPLOYMENT'
  },
  {
    speaker: 'PRTS TERMINAL // OPERATOR READINESS',
    paragraph: 'Equipped with a creative asset toolkit (Blender 3D, Adobe Premiere Pro, After Effects), Operator Ramadhon converts technical benchmarks into engaging visual storytelling and high-impact product presentations. Currently standing by with 135/135 Sanity for Data Science, ML Engineering, and Full-Stack roles.',
    chapterTag: 'DOSSIER CH.04 — READINESS MATRIX'
  }
];

export const PROJECTS_DATA: ProjectDossier[] = [
  {
    id: 'stage-17-1',
    stageNumber: 'STAGE 17-1',
    title: 'UMKM Success Prediction',
    subtitle: 'Data Science Competition (DSC INFEST26)',
    category: 'AI & Deep Learning',
    difficulty: 'HARD',
    stars: 5,
    status: 'PUBLISHED',
    date: '2026',
    nodePosition: { x: 20, y: 35 },
    summary: 'Binary classifier predicting Indonesian small-business (UMKM) viability with F1-optimized threshold on an imbalanced dataset (~25% positive).',
    description: 'Micro, small, and medium enterprises (UMKM) are the backbone of the economy, but support programs possess limited capital. This project benchmarks 5 ML models (Logistic Regression, Random Forest, HistGradientBoosting, XGBoost, LightGBM) under Stratified 5-Fold Cross-Validation. The winning class-weighted model with out-of-fold F1 threshold tuning extracted permutation feature importance, translating into 4 concrete incubator policy interventions.',
    technicalObjectives: [
      'Analyze 250 enterprise profiles with 12 socioeconomic attributes',
      'Handle extreme class imbalance (~25% positive) via class weighting',
      'Optimize classification threshold from OOF predictions to maximize F1 score',
      'Deliver actionable policy recommendations (Internet adoption, business planning, capital access, financial recordkeeping)'
    ],
    metrics: [
      { label: 'Evaluation Metric', value: 'Highest ROC-AUC & F1' },
      { label: 'Validation Protocol', value: 'Stratified 5-Fold CV' },
      { label: 'Dataset Scope', value: '250 Profiles, 12 Features' },
      { label: 'Policy Impact', value: '4 Concrete Incubator Actions' }
    ],
    techStack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib', 'Stratified K-Fold', 'Threshold Tuning'],
    githubUrl: 'https://github.com/sahrulramad/dsc-infest26-umkm'
  },
  {
    id: 'stage-17-2',
    stageNumber: 'STAGE 17-2',
    title: 'Dominant-Intelligence & Major DSS',
    subtitle: 'Undergraduate Thesis (S.Kom, Cum Laude)',
    category: 'AI & Deep Learning',
    difficulty: 'HARD',
    stars: 5,
    status: 'COMPLETED',
    date: '2026',
    nodePosition: { x: 42, y: 22 },
    summary: 'Random Forest classifier achieving 97% accuracy on student intelligence profiles, paired with a transparent AHP-SAW decision support system deployed in Flask.',
    description: 'High-school students frequently face high-stakes university major choices without objective guidance. This system solves the problem in two complementary engines: a Random Forest classifier identifying dominant intelligence (IQ, EQ, AQ, SQ) with 97% cross-validated accuracy, and an auditable AHP-SAW multi-criteria evaluation engine that transparently ranks 19 university majors based on expert-calibrated criteria weights.',
    technicalObjectives: [
      'Collect and preprocess 200+ multi-intake student psychometric records',
      'Train Random Forest classifier with score-difference feature engineering',
      'Implement AHP pairwise comparison matrix and SAW ranking algorithm across 19 majors',
      'Deploy full pipeline as an interactive Flask counselor terminal'
    ],
    metrics: [
      { label: 'Classification Accuracy', value: '97% (5-Fold CV)' },
      { label: 'Academic Majors Covered', value: '19 Programs' },
      { label: 'Decision Transparency', value: '100% Auditable SAW' },
      { label: 'Deployment State', value: 'Interactive Flask App' }
    ],
    techStack: ['Python', 'Random Forest', 'scikit-learn', 'Flask', 'AHP-SAW', 'MCDM'],
    githubUrl: 'https://github.com/sahrulramad'
  },
  {
    id: 'stage-17-3',
    stageNumber: 'STAGE 17-3',
    title: 'Detecto: AI Content Detector',
    subtitle: 'Enterprise AI Detection Platform (detecto.co)',
    category: 'Web Systems',
    difficulty: 'ELITE',
    stars: 5,
    status: 'LIVE PRODUCTION',
    date: '2026',
    nodePosition: { x: 65, y: 38 },
    summary: 'Production AI content-detection platform detecting synthetic text, images, video, and audio with a modular swappable detection layer.',
    description: 'Detecto is a commercial privacy-first platform engineered to detect artificial intelligence generation across multiple modalities. Engineered with Next.js 16 and React 19, the platform features a bilingual (ID/EN) user interface, secure authentication, transactional credit system, scan history with cloud persistence, client-side PDF forensic reports, and an engine-agnostic detection abstraction.',
    technicalObjectives: [
      'Architect swappable detection layer isolating UI from upstream AI inference engines',
      'Implement transactional user credits and billing ledger backed by PostgreSQL',
      'Build client-side PDF forensic generation with custom branding and cryptographic hashes',
      'Support bilingual localization (English / Indonesian) and responsive dashboard'
    ],
    metrics: [
      { label: 'Production Status', value: 'Active Live at detecto.co' },
      { label: 'Supported Modalities', value: 'Text, Image, Video, Audio' },
      { label: 'Architecture', value: 'Decoupled Inference Layer' },
      { label: 'Framework Version', value: 'Next.js 16 / React 19' }
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    liveUrl: 'https://detecto.co'
  },
  {
    id: 'stage-17-4',
    stageNumber: 'STAGE 17-4',
    title: 'cipta.in: Multi-Tenant SaaS',
    subtitle: 'Creator Website Publishing Engine',
    category: 'Web Systems',
    difficulty: 'ADVANCED',
    stars: 4,
    status: 'IN DEVELOPMENT',
    date: '2026',
    nodePosition: { x: 80, y: 62 },
    summary: 'Multi-tenant website builder publishing creator sites to custom subdomains via host-based middleware routing and on-demand ISR cache purge.',
    description: 'cipta.in enables creators and independent businesses to publish high-performance websites instantly. Sites are routed dynamically to name.cipta.in subdomains or custom domains using Next.js Edge Middleware. Features an atomic draft-to-publish pipeline that promotes draft records to production and executes instant on-demand ISR revalidation.',
    technicalObjectives: [
      'Host-based dynamic tenant routing via Next.js Edge Middleware',
      'Draft-to-publish state synchronization with atomic database transactions',
      'Automated ISR (Incremental Static Regeneration) cache purging on publish',
      'Custom theme engine with live component previews'
    ],
    metrics: [
      { label: 'Routing Latency', value: '<15ms Edge Middleware' },
      { label: 'Multi-Tenancy Mode', value: 'Subdomain + Custom Domain' },
      { label: 'Cache Strategy', value: 'On-Demand Tag Revalidation' },
      { label: 'State Pipeline', value: 'Draft / Staging / Published' }
    ],
    techStack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Supabase', 'TypeScript', 'Edge Middleware'],
    githubUrl: 'https://github.com/sahrulramad'
  },
  {
    id: 'stage-17-5',
    stageNumber: 'STAGE 17-5',
    title: 'Eskala Web Studio Platform',
    subtitle: 'Studio Order Pipeline & Role-Protected Dashboard',
    category: 'Web Systems',
    difficulty: 'ADVANCED',
    stars: 4,
    status: 'COMPLETED',
    date: '2026',
    nodePosition: { x: 55, y: 72 },
    summary: 'Company profile and order system for a creative digital studio: animated customer portal, role-protected admin dashboard, and WhatsApp integration.',
    description: 'Built for a web development agency, Eskala Web integrates a high-conversion landing page with a validated ordering pipeline. Inbound project submissions undergo Zod schema validation, send automated email confirmations via Resend and trigger WhatsApp notifications, while administrators manage deliverables through an internal dashboard.',
    technicalObjectives: [
      'Construct animated landing page and multi-step project ordering form',
      'Configure role-based access control (Admin / Editor) using Auth.js v5 and Prisma',
      'Automate client email notifications with Resend and WhatsApp click-to-chat links',
      'Build internal administrative order status management table'
    ],
    metrics: [
      { label: 'Order Processing', value: 'Realtime Zod Validation' },
      { label: 'Auth Provider', value: 'Auth.js v5 RBAC' },
      { label: 'Notification', value: 'Resend Email + WhatsApp' },
      { label: 'Database ORM', value: 'Prisma + PostgreSQL' }
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Prisma', 'Auth.js v5']
  },
  {
    id: 'stage-17-6',
    stageNumber: 'STAGE 17-6',
    title: 'High-Fidelity PDF & Screenshot API',
    subtitle: 'Headless Chromium Document Renderer',
    category: 'Microservices & Tools',
    difficulty: 'NORMAL',
    stars: 3,
    status: 'PUBLISHED',
    date: '2026',
    nodePosition: { x: 30, y: 68 },
    summary: 'Microservice converting dynamic HTML, URLs, or Handlebars templates into pixel-perfect PDF documents and high-resolution screenshots via Playwright.',
    description: 'Designed as a cloud-ready API service suitable for distribution on RapidAPI. Powered by Node.js, Express, and headless Playwright Chromium. Supports dynamic templating via Handlebars, custom headers/footers, CSS media print emulations, API key validation, and automated commercial invoice generation.',
    technicalObjectives: [
      'Containerize headless Playwright Chromium instance for deterministic PDF rasterization',
      'Implement API key authorization and rate-limiting middleware',
      'Provide pre-compiled financial invoice and report templates',
      'Support multi-viewport screenshot capture and raw binary streaming'
    ],
    metrics: [
      { label: 'Render Accuracy', value: 'Pixel-Perfect Print CSS' },
      { label: 'Execution Engine', value: 'Playwright Chromium' },
      { label: 'Security', value: 'API-Key Bearer Tokens' },
      { label: 'Output Formats', value: 'PDF, PNG, JPEG Stream' }
    ],
    techStack: ['Node.js', 'Express', 'Playwright', 'Handlebars', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/sahrulramad'
  },
  {
    id: 'stage-17-7',
    stageNumber: 'STAGE 17-7',
    title: 'Dermist Bot: Autonomous Discord Agent',
    subtitle: 'Server Governance & LLM Tool-Calling Suite',
    category: 'Experimental',
    difficulty: 'ADVANCED',
    stars: 4,
    status: 'PUBLISHED',
    date: '2026',
    nodePosition: { x: 15, y: 82 },
    summary: 'Autonomous Discord bot fusing full moderation utilities with an agentic LLM layer running on Cloudflare Workers AI with persistent KV memory.',
    description: 'Dermist Bot bridges classic community administration tools with generative AI agent capabilities. Uses Cloudflare Workers AI (Llama 3.3 70B) for zero-cold-start inference, Cloudflare KV for conversational long-term memory, dynamic persona hot-reloading, and an extensible skill system for Discord guild moderation.',
    technicalObjectives: [
      'Deploy Cloudflare Workers AI edge runtime with Llama 3.3 70B reasoning',
      'Design conversation memory schema on Cloudflare KV store',
      'Build autonomous tool-calling engine for Discord moderation commands',
      'Support hot-reloadable persona definition files and skill cheatsheets'
    ],
    metrics: [
      { label: 'LLM Model', value: 'Llama 3.3 70B Instruct' },
      { label: 'Edge Runtime', value: 'Cloudflare Workers AI' },
      { label: 'Memory Store', value: 'Cloudflare KV Namespace' },
      { label: 'Agent Protocol', value: 'Autonomous Tool-Calling' }
    ],
    techStack: ['Node.js', 'Discord.js', 'Cloudflare Workers AI', 'Cloudflare KV', 'Llama 3.3'],
    githubUrl: 'https://github.com/sahrulramad'
  },
  {
    id: 'stage-17-8',
    stageNumber: 'STAGE 17-8',
    title: 'Indonesian Election C1 Plano Classifier',
    subtitle: 'Document Computer Vision & Verification',
    category: 'AI & Deep Learning',
    difficulty: 'NORMAL',
    stars: 3,
    status: 'COMPLETED',
    date: '2024',
    nodePosition: { x: 88, y: 25 },
    summary: 'Python machine learning pipeline classifying Indonesian election C1 Plano tally forms with end-to-end evaluation.',
    description: 'An open-source computer vision and document classification project developed to verify and classify Indonesian election C1 Plano tally forms. Features an end-to-end workflow covering image preprocessing, alignment, feature extraction, model benchmarking, and metric visualization.',
    technicalObjectives: [
      'Document preprocessing and contour isolation on ballot tally sheets',
      'Model training and comparative classification benchmarking',
      'Detailed metric evaluation report for election integrity transparency'
    ],
    metrics: [
      { label: 'Domain', value: 'Election Document AI' },
      { label: 'Pipeline', value: 'Preprocessing to Evaluation' },
      { label: 'Deliverable', value: 'Open Source Model & Report' }
    ],
    techStack: ['Python', 'Machine Learning', 'Computer Vision', 'Data Preprocessing'],
    githubUrl: 'https://github.com/sahrulramad/Klasifikasi-C1-Plano'
  }
];

export const SKILL_MODULES: SkillModule[] = [
  // WEAPONS (Languages)
  {
    id: 'lang-python',
    name: 'Python 3',
    category: 'WEAPONS',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Primary computational language for data science, ML classification pipelines, scikit-learn modeling, and Flask microservices.',
    statModifiers: [
      { stat: 'Data & ML Mastery', value: '+98' },
      { stat: 'Algorithmic Speed', value: '+92' },
      { stat: 'Pipeline Reliability', value: '+95' }
    ],
    equipped: true,
    iconName: 'Code'
  },
  {
    id: 'lang-ts',
    name: 'TypeScript',
    category: 'WEAPONS',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Strict type systems for robust frontend and backend architectures in Next.js 16 and enterprise software systems.',
    statModifiers: [
      { stat: 'Type Safety', value: '+95' },
      { stat: 'Architecture Rigor', value: '+92' },
      { stat: 'Refactoring Speed', value: '+90' }
    ],
    equipped: true,
    iconName: 'FileCode'
  },
  {
    id: 'lang-js',
    name: 'JavaScript (ESNext)',
    category: 'WEAPONS',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Comprehensive DOM manipulation, modern async/await patterns, IntersectionObserver, and HTML5 Canvas graphics programming.',
    statModifiers: [
      { stat: 'Async Execution', value: '+94' },
      { stat: 'DOM Fluency', value: '+96' }
    ],
    equipped: true,
    iconName: 'Cpu'
  },
  {
    id: 'lang-sql',
    name: 'SQL (PostgreSQL / MySQL)',
    category: 'WEAPONS',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Relational data modeling, complex analytical queries, indexing strategies, and Row-Level Security policies.',
    statModifiers: [
      { stat: 'Query Optimization', value: '+92' },
      { stat: 'Relational Integrity', value: '+90' }
    ],
    equipped: true,
    iconName: 'Database'
  },
  {
    id: 'lang-r',
    name: 'R (Integration)',
    category: 'WEAPONS',
    rarity: '★★★★☆',
    tierName: 'ADVANCED',
    description: 'Statistical modeling workflows, exploratory data analysis, and cross-language analytics integration with RapidMiner.',
    statModifiers: [
      { stat: 'Statistical Modeling', value: '+85' },
      { stat: 'Analytical Depth', value: '+88' }
    ],
    equipped: true,
    iconName: 'BarChart'
  },

  // ARMOR (Frameworks)
  {
    id: 'fw-nextjs',
    name: 'Next.js 16 (App Router)',
    category: 'ARMOR',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Production React framework with Server Actions, Edge Middleware tenant routing, and on-demand ISR cache revalidation.',
    statModifiers: [
      { stat: 'Server Components', value: '+96' },
      { stat: 'Tenant Routing', value: '+94' },
      { stat: 'ISR Caching', value: '+95' }
    ],
    equipped: true,
    iconName: 'Layers'
  },
  {
    id: 'fw-react',
    name: 'React 19',
    category: 'ARMOR',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Component-driven state architecture, concurrent rendering, custom hooks, and high-performance UI composition.',
    statModifiers: [
      { stat: 'Component Modularity', value: '+95' },
      { stat: 'State Reactivity', value: '+92' }
    ],
    equipped: true,
    iconName: 'Atom'
  },
  {
    id: 'fw-sklearn',
    name: 'scikit-learn',
    category: 'ARMOR',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Core ML library for classification, Stratified K-Fold validation, out-of-fold threshold tuning, and permutation importance.',
    statModifiers: [
      { stat: 'Model Optimization', value: '+96' },
      { stat: 'Evaluation Metrics', value: '+94' }
    ],
    equipped: true,
    iconName: 'Binary'
  },
  {
    id: 'fw-pandas',
    name: 'Pandas & NumPy',
    category: 'ARMOR',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'High-performance vectorized mathematical computation, dataset cleaning, aggregation, and feature transformations.',
    statModifiers: [
      { stat: 'Vector Computation', value: '+98' },
      { stat: 'Data Wrangling', value: '+95' }
    ],
    equipped: true,
    iconName: 'Table'
  },
  {
    id: 'fw-flask',
    name: 'Flask',
    category: 'ARMOR',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Lightweight WSGI Python web framework ideal for deploying trained scikit-learn models as REST microservices.',
    statModifiers: [
      { stat: 'Microservice Agility', value: '+90' },
      { stat: 'ML Inference Serving', value: '+92' }
    ],
    equipped: true,
    iconName: 'Server'
  },
  {
    id: 'fw-tailwind',
    name: 'Tailwind CSS (v3 / v4)',
    category: 'ARMOR',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Utility-first styling with custom keyframe animations, glassmorphism, responsive breakpoints, and tactile design systems.',
    statModifiers: [
      { stat: 'UI Speed & Polish', value: '+96' },
      { stat: 'Responsive Precision', value: '+92' }
    ],
    equipped: true,
    iconName: 'Palette'
  },

  // KEY ITEMS (Tools & Cloud)
  {
    id: 'tool-git',
    name: 'Git & GitHub Enterprise',
    category: 'KEY ITEMS',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Version control discipline, atomic commits, pull request workflows, CI/CD action triggers, and open-source release protocols.',
    statModifiers: [
      { stat: 'Version Control', value: '+96' },
      { stat: 'Collaboration', value: '+92' }
    ],
    equipped: true,
    iconName: 'GitBranch'
  },
  {
    id: 'tool-supabase',
    name: 'Supabase & PostgreSQL',
    category: 'KEY ITEMS',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Cloud PostgreSQL backend with real-time websocket subscriptions, Row Level Security, and secure OAuth authentication.',
    statModifiers: [
      { stat: 'Database Reliability', value: '+94' },
      { stat: 'Auth Security', value: '+90' }
    ],
    equipped: true,
    iconName: 'Shield'
  },
  {
    id: 'tool-rapidminer',
    name: 'Altair RapidMiner Master',
    category: 'KEY ITEMS',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Certified Master in visual predictive modeling workflows, automated feature engineering, and cross-validation pipelines.',
    statModifiers: [
      { stat: 'Workflow Architecture', value: '+98' },
      { stat: 'Predictive Modeling', value: '+94' }
    ],
    equipped: true,
    iconName: 'Award'
  },
  {
    id: 'tool-docker',
    name: 'Docker',
    category: 'KEY ITEMS',
    rarity: '★★★★☆',
    tierName: 'ADVANCED',
    description: 'Multi-stage containerization ensuring deterministic, isolated runtime environments for Python and Node.js microservices.',
    statModifiers: [
      { stat: 'Reproducibility', value: '+88' },
      { stat: 'Container Security', value: '+85' }
    ],
    equipped: true,
    iconName: 'Box'
  },
  {
    id: 'tool-jupyter',
    name: 'Jupyter Notebook',
    category: 'KEY ITEMS',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: 'Iterative data science research environment for exploratory data analysis, algorithmic experimentation, and model verification.',
    statModifiers: [
      { stat: 'Research Speed', value: '+96' },
      { stat: 'Visualization Depth', value: '+92' }
    ],
    equipped: true,
    iconName: 'BookOpen'
  },

  // ORIGINIUM ARTS (Specialties)
  {
    id: 'spec-ml-class',
    name: 'Predictive Classification & Threshold Tuning',
    category: 'ORIGINIUM ARTS',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Strategic calibration of decision thresholds on imbalanced real-world datasets to maximize precision/recall and F1 benchmarks.',
    statModifiers: [
      { stat: 'Imbalance Handling', value: '+98' },
      { stat: 'F1 Maximization', value: '+96' },
      { stat: 'Out-Of-Fold Validation', value: '+95' }
    ],
    equipped: true,
    iconName: 'Sparkles'
  },
  {
    id: 'spec-ahp-saw',
    name: 'AHP-SAW Decision Support Systems',
    category: 'ORIGINIUM ARTS',
    rarity: '★★★★★★',
    tierName: 'EPIC',
    description: 'Multi-Criteria Decision Making (MCDM) pairing expert pairwise comparisons (AHP) with auditable additive weighting (SAW).',
    statModifiers: [
      { stat: 'Auditable Transparency', value: '+98' },
      { stat: 'Multi-Criteria Rigor', value: '+95' }
    ],
    equipped: true,
    iconName: 'Sliders'
  },
  {
    id: 'spec-blender-creative',
    name: 'Blender 3D & Technical Visual Storytelling',
    category: 'ORIGINIUM ARTS',
    rarity: '★★★★★',
    tierName: 'ELITE',
    description: '3D modeling, animation, Premiere Pro editing, and After Effects motion graphics translating complex data into striking demos.',
    statModifiers: [
      { stat: 'Visual Impact', value: '+92' },
      { stat: 'Product Storytelling', value: '+90' }
    ],
    equipped: true,
    iconName: 'Video'
  }
];

export const OPERATION_LOGS: OperationLogItem[] = [
  {
    code: 'OP-EDU-01',
    type: 'MAIN OPERATION',
    category: 'EDUCATION',
    title: 'Bachelor of Informatics (S.Kom, Cum Laude)',
    institution: 'Universitas Teknologi Yogyakarta',
    period: '2022 – 2026 · Graduated Aug 29, 2026',
    progress: '1/1 CLEARED',
    scoreOrAward: 'GPA 3.53 / 4.00 · Cum Laude',
    description: [
      'Successfully graduated with high academic distinction (Cum Laude, Student ID 5220411289) specializing in Software Engineering and Machine Learning.',
      'Undergraduate Thesis: Dominant-intelligence classification using Random Forest (97% cross-validation accuracy) synthesized with an auditable AHP-SAW decision-support system ranking 19 university majors.',
      'Completed comprehensive coursework in Algorithmic Analysis, Database Systems, Object-Oriented Software Engineering, Artificial Intelligence, and Applied Statistics.'
    ],
    rewards: ['S.Kom Degree', 'Cum Laude Honor', 'Thesis Excellence Certification']
  },
  {
    code: 'OP-CERT-01',
    type: 'MAIN OPERATION',
    category: 'CERTIFICATION',
    title: 'Machine Learning Master Certification',
    institution: 'Altair RapidMiner',
    period: '2026',
    progress: '1/1 CLEARED',
    scoreOrAward: 'Altair Certified Master',
    description: [
      'Demonstrated advanced proficiency in complex predictive modeling, hyperparameter optimization, feature engineering, and time-series forecasting.',
      'Mastered rigorous cross-validation protocols, model selection strategies, and seamless bi-directional integration of Python and R analytical workflows.'
    ],
    rewards: ['Master Credential', 'Altair Verified Badge', 'Advanced ML License']
  },
  {
    code: 'OP-CERT-02',
    type: 'MAIN OPERATION',
    category: 'CERTIFICATION',
    title: 'English Proficiency Test (EPT / TOEFL-Equivalent)',
    institution: 'UTY Education, Certification, and Training Center',
    period: 'Feb 2026',
    progress: '1/1 CLEARED',
    scoreOrAward: 'Score: 460 · Certificate ID: 9000260010941',
    description: [
      'Verified English language proficiency across technical documentation, academic writing, and cross-border project collaboration.',
      'Score breakdown: Reading Comprehension 480, Listening Comprehension 460, Structure and Written Expression 440.'
    ],
    rewards: ['Professional Working Proficiency', 'Institutional Verification']
  },
  {
    code: 'OP-WORK-01',
    type: 'SIDE OPERATION',
    category: 'EXPERIENCE',
    title: 'Core Full-Stack Developer — Detecto Platform',
    institution: 'Detecto (detecto.co) · Team Project',
    period: '2026',
    progress: '1/1 CLEARED',
    scoreOrAward: 'Live Production Architecture',
    description: [
      'Built core product features (secure authentication, credits system, persisted scan history, client-side PDF forensic reports) for a production app with a bilingual (ID/EN) interface.',
      'Architected a swappable detection layer so the underlying AI detection engines can change without any UI rewrite, cutting future integration overhead.'
    ],
    rewards: ['Production Shipped', 'TypeScript & Next.js 16 Mastery']
  },
  {
    code: 'OP-WORK-02',
    type: 'SIDE OPERATION',
    category: 'EXPERIENCE',
    title: 'Lead Architect & Creator — cipta.in SaaS',
    institution: 'cipta.in Platform · Personal Project',
    period: '2026',
    progress: '1/1 CLEARED',
    scoreOrAward: 'Active SaaS Engine',
    description: [
      'Engineered a multi-tenant website publishing platform deploying creator portals to name.cipta.in subdomains via host-based Edge Middleware routing.',
      'Implemented an atomic draft-to-publish pipeline that promotes draft records to live state and purges on-demand ISR tags.'
    ],
    rewards: ['Multi-Tenant SaaS Architecture', 'ISR Cache Revalidation']
  },
  {
    code: 'OP-COMP-01',
    type: 'SIDE OPERATION',
    category: 'COMPETITION',
    title: 'Data Science Competition Finalist (DSC INFEST26)',
    institution: 'INFEST Data Science Benchmark',
    period: '2026',
    progress: '1/1 CLEARED',
    scoreOrAward: 'Top Benchmark ROC-AUC & F1',
    description: [
      'Engineered a binary classifier predicting small-business (UMKM) viability across 12 attributes under Stratified 5-Fold Cross-Validation on an imbalanced dataset (~25% positive).',
      'Extracted permutation feature importance into 4 concrete policy interventions for government business incubators.'
    ],
    rewards: ['Competition Benchmark Badge', 'Policy Impact Formulation']
  }
];
