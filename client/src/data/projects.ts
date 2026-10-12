export type ProjectCategory = 'all' | 'ai-ml' | 'fullstack' | 'mobile' | 'tools';

export interface ProjectArchitecture {
  client: string;
  server: string;
  database: string;
  mlOrCloud: string;
  highlights: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  personalContribution: string[];
  keyFeatures: string[];
  techStack: string[];
  architecture: ProjectArchitecture;
  statusBadge: {
    label: string;
    variant: 'default' | 'secondary' | 'outline' | 'destructive';
  };
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivateRepo?: boolean;
  canEmbedLivePreview: boolean;
  previewType: 'live-iframe' | 'mobile-mockup' | 'dashboard-mockup' | 'code-visualizer';
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'revflux',
    title: 'RevFlux',
    tagline: 'AI-Powered CRM & Revenue Intelligence Platform',
    category: 'ai-ml',
    categoryLabel: 'AI & Full Stack',
    description: 'Enterprise-grade revenue intelligence CRM integrating OpenRouter LLM for automated lead summarization, predictive risk scoring, and real-time deal alerts.',
    longDescription: 'RevFlux streamlines complex B2B sales pipelines by unifying lead capture, task tracking, CSV data onboarding, and LLM-driven deal insights. It features automated lead scoring, risk analysis on stale deals, and Socket.io real-time alerts to accelerate close rates.',
    problem: 'Sales teams lose critical deals due to unprioritized leads, manual data entry, and delayed follow-ups across disjointed spreadsheets.',
    solution: 'Designed an intelligent CRM backend with automated LLM reasoning for prompt deal summarization, actionable recommendations, and real-time WebSocket notifications.',
    personalContribution: [
      'Architected end-to-end MERN backend with MongoDB indexes for high-throughput CRM record queries',
      'Engineered OpenRouter LLM pipeline for contextual lead risk scoring and AI email follow-up generation',
      'Implemented secure JWT/OAuth 2.0 authentication and Socket.io event streaming for multi-seat sales teams',
    ],
    keyFeatures: [
      'Kanban deal pipeline with drag-and-drop revenue stages',
      'OpenRouter LLM lead summarization and smart objection handling',
      'CSV batch import/export workflows with automated schema validation',
      'Real-time WebSocket alerts for deal stage changes and notifications',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenRouter API', 'Socket.io', 'Tailwind CSS'],
    architecture: {
      client: 'React 18 + Tailwind CSS + Lucide Icons',
      server: 'Node.js + Express.js REST APIs + Socket.io Server',
      database: 'MongoDB Atlas with schema validation & indexing',
      mlOrCloud: 'OpenRouter LLM API (Structured prompts & JSON outputs)',
      highlights: [
        'Decoupled AI service layer with graceful retry & rate-limit handling',
        'Optimized pipeline aggregation pipelines for instant dashboard metrics',
      ],
    },
    statusBadge: {
      label: 'Private Architecture Showcase',
      variant: 'secondary',
    },
    metrics: [
      { label: 'Architecture', value: 'Decoupled Micro-services' },
      { label: 'AI Inference', value: 'Streaming LLM' },
      { label: 'Event Latency', value: '<50ms WebSocket' },
    ],
    isPrivateRepo: true,
    canEmbedLivePreview: false,
    previewType: 'dashboard-mockup',
  },
  {
    id: 'agrimitra',
    title: 'AgriMitra',
    tagline: 'Multilingual AI Crop Advisory & Disease Diagnosis Platform',
    category: 'ai-ml',
    categoryLabel: 'AI & Web PWA',
    description: 'Farmer-centric progressive web app featuring multilingual advisory, dynamic crop pricing, and real-time PyTorch MobileNetV2 plant leaf disease classification.',
    longDescription: 'AgriMitra bridges the agricultural technology gap for Indian farmers. The platform delivers real-time weather forecasts, regional market mandi pricing, and an on-device/cloud ML service that diagnoses crop leaf diseases in 1–2 seconds with 90%+ verified accuracy.',
    problem: 'Farmers face severe crop yield losses due to delayed pathogen diagnosis and lack of localized advisory in native languages.',
    solution: 'Engineered a lightweight MERN PWA backed by a FastAPI microservice executing an optimized PyTorch MobileNetV2 model for instant disease classification.',
    personalContribution: [
      'Designed and deployed responsive React PWA with multilingual support and offline caching',
      'Integrated FastAPI microservice running PyTorch MobileNetV2 for low-latency image inference',
      'Engineered localized market pricing and weather alert dashboards using external APIs',
    ],
    keyFeatures: [
      'FastAPI + PyTorch leaf image classification (1–2s inference)',
      'Multilingual interface tailored for regional agricultural usability',
      'Dynamic crop price tracking and localized weather radar',
      'Installable PWA architecture for low-bandwidth rural connectivity',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'PyTorch', 'MobileNetV2', 'Tailwind CSS'],
    architecture: {
      client: 'React PWA + Tailwind CSS + Service Workers',
      server: 'Node.js/Express API Gateway + FastAPI ML Service',
      database: 'MongoDB for user profiles, crop logs & market data',
      mlOrCloud: 'PyTorch MobileNetV2 deployed on high-efficiency container',
      highlights: [
        'Under 2-second leaf diagnosis response time via optimized tensor inference',
        'Responsive layout optimized for low-tier Android smartphones',
      ],
    },
    statusBadge: {
      label: 'Live Subdomain Active',
      variant: 'default',
    },
    metrics: [
      { label: 'Model Accuracy', value: '90%+ Verified' },
      { label: 'Inference Speed', value: '1–2 Seconds' },
      { label: 'PWA Support', value: 'Offline-Ready' },
    ],
    githubUrl: 'https://github.com/deepaksinghh12/Agrimitra',
    liveUrl: 'https://agrimitra.deepaksinghdev.in/',
    canEmbedLivePreview: true,
    previewType: 'live-iframe',
  },
  {
    id: 'city-guardian',
    title: 'City Guardian',
    tagline: 'AI-Based Road Hazard & Civic Monitoring Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile & On-Device AI',
    description: 'Flutter mobile application powered by TensorFlow Lite for on-device real-time pothole detection, GPS geo-tagging, and automated civic reporting via Firebase.',
    longDescription: 'City Guardian turns smartphones into automated road safety sensors. Utilizing device camera feeds and an onboard TensorFlow Lite neural network, the app detects road surface hazards in real time with 90%+ accuracy, uploads geo-tagged evidence to Firebase, and maps reports onto Google Maps.',
    problem: 'Manual civic hazard reporting is slow, resulting in unaddressed potholes that cause thousands of preventable vehicular accidents annually.',
    solution: 'Built an autonomous mobile scanner that performs edge inference using TFLite, extracts GPS coordinates, and syncs geo-tagged incident pins to a centralized map.',
    personalContribution: [
      'Developed cross-platform Flutter application with real-time camera stream processing',
      'Integrated TensorFlow Lite on-device model ensuring zero server dependency during live driving scans',
      'Implemented Google Maps SDK with custom cluster markers for 100+ geo-tagged hazard pins',
      'Constructed Firebase Authentication and Firestore real-time database synchronizer',
    ],
    keyFeatures: [
      'Real-time camera feed inference via quantized TensorFlow Lite model',
      'Automatic GPS geotagging and high-precision Google Maps visualization',
      'Firebase cloud synchronization with offline queueing support',
      'Community reward system incentivizing civic hazard reporting',
    ],
    techStack: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'Google Maps API'],
    architecture: {
      client: 'Flutter (Android/iOS) + Camera Plugin + Geolocation SDK',
      server: 'Firebase Cloud Functions & Firestore backend',
      database: 'Cloud Firestore with GeoPoint spatial queries',
      mlOrCloud: 'TensorFlow Lite Edge Model running on-device',
      highlights: [
        'Edge ML execution without cellular data latency or bandwidth consumption',
        'Interactive map cluster rendering for over 100+ geo-tagged reports',
      ],
    },
    statusBadge: {
      label: 'Mobile Engineering',
      variant: 'secondary',
    },
    metrics: [
      { label: 'Edge Detection', value: '90%+ Accuracy' },
      { label: 'Geo-Tagged Pins', value: '100+ Managed' },
      { label: 'Inference', value: 'On-Device Edge' },
    ],
    githubUrl: 'https://github.com/deepaksinghh12/City-Guardian-App',
    canEmbedLivePreview: false,
    previewType: 'mobile-mockup',
  },
  {
    id: 'cme-detection',
    title: 'CME Space Weather Platform',
    tagline: 'National Winner — Smart India Hackathon 2025',
    category: 'ai-ml',
    categoryLabel: 'AI & Space Tech',
    description: 'National-winning AI space-weather monitoring system built for an ISRO problem statement, predicting coronal mass ejections and solar radiation risks.',
    longDescription: 'Selected as the National Level Winner of Smart India Hackathon 2025 among 50,000+ competing teams. Developed for an ISRO problem statement, this platform processes solar coronagraph telemetry, classifies eruptive CME signatures, and forecasts geomagnetically induced disruption hazards.',
    problem: 'Coronal mass ejections cause catastrophic failures to orbital satellites, power grids, and GPS communication systems without predictive early warning.',
    solution: 'Engineered a FastAPI ML pipeline ingesting solar event parameters to predict CME arrival windows and severity classifications.',
    personalContribution: [
      'Constructed FastAPI machine learning backend for solar event data classification',
      'Won national-level SIH 2025 competing against 50,000+ teams nationwide',
      'Engineered automated reporting pipelines and space-weather alert dashboards',
    ],
    keyFeatures: [
      'Predictive space-weather severity index and impact timeline calculator',
      'FastAPI asynchronous ML prediction endpoints',
      'Coronal imagery telemetry dashboard with interactive severity curves',
      'Validated against ISRO space-weather operational criteria',
    ],
    techStack: ['Python', 'FastAPI', 'Machine Learning', 'Flutter', 'REST APIs', 'Vercel'],
    architecture: {
      client: 'React Web Dashboard + Flutter Mobile Client',
      server: 'FastAPI Python ML API + Asynchronous Workers',
      database: 'PostgreSQL for solar historical event logs',
      mlOrCloud: 'Python Scikit-Learn & PyTorch classification models',
      highlights: [
        'National Winner across 50,000+ teams in Smart India Hackathon 2025',
        'Direct alignment with ISRO space technology problem statements',
      ],
    },
    statusBadge: {
      label: 'SIH 2025 Winner',
      variant: 'default',
    },
    metrics: [
      { label: 'Competition Scale', value: '50,000+ Teams' },
      { label: 'Award', value: '1st Prize National' },
      { label: 'Domain', value: 'ISRO Space Weather' },
    ],
    githubUrl: 'https://github.com/deepaksinghh12/CME_Detection',
    liveUrl: 'https://cme-detection.vercel.app/',
    canEmbedLivePreview: true,
    previewType: 'live-iframe',
  },
  {
    id: 'algoquest',
    title: 'AlgoQuest',
    tagline: 'Interactive Algorithm Visualizer & Code Sandbox',
    category: 'fullstack',
    categoryLabel: 'Full-Stack EdTech',
    description: 'Interactive algorithm visualization platform built during CodeUnia internship, featuring 12+ modules for sorting, searching, and graph traversals with Monaco Editor.',
    longDescription: 'Developed during full-stack web development internship at CodeUnia. AlgoQuest provides university students and developers with an interactive step-by-step debugger for foundational algorithms, complete with customizable array inputs, speed throttles, and Monaco code editing.',
    problem: 'Abstract algorithmic concepts like dynamic programming and graph traversals are notoriously difficult to conceptualize without real-time state visualization.',
    solution: 'Engineered 12+ interactive visualization engines that synchronize animation frames with pseudo-code execution and custom data structures.',
    personalContribution: [
      'Engineered 12+ visualization engines (Bubble, Merge, Quick, Dijkstra, BFS/DFS, Binary Search)',
      'Integrated Monaco Editor for live code testing and custom test-case execution',
      'Implemented JWT session authentication and optimized MongoDB user progress persistence',
    ],
    keyFeatures: [
      '12+ interactive sorting, searching, and graph traversal modules',
      'Step-by-step forward/backward animation frame scrubber',
      'Embedded Monaco Editor with syntax highlighting and theme support',
      'Time and space complexity comparison matrices',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Monaco Editor', 'REST APIs'],
    architecture: {
      client: 'React 18 + Monaco Editor + HTML5 Canvas visualizers',
      server: 'Node.js + Express.js API',
      database: 'MongoDB Atlas',
      mlOrCloud: 'Vercel Deployment',
      highlights: [
        'Engineered during CodeUnia internship (July – August 2025)',
        'Custom execution throttler enabling pause, step, and benchmark playback',
      ],
    },
    statusBadge: {
      label: 'Internship Project',
      variant: 'secondary',
    },
    metrics: [
      { label: 'Modules', value: '12+ Interactive' },
      { label: 'Role', value: 'CodeUnia Intern' },
      { label: 'Editor', value: 'Monaco Core' },
    ],
    githubUrl: 'https://github.com/deepaksinghh12/AlgoQuest-Algorithm-Visualizer',
    canEmbedLivePreview: false,
    previewType: 'code-visualizer',
  },
  {
    id: 'quotely',
    title: 'Quotely',
    tagline: 'Visual Typography & Quote Design Web App',
    category: 'tools',
    categoryLabel: 'Developer Tool / UI',
    description: 'Responsive web application allowing users to design and export customized typography cards over curated backgrounds with live styling preview.',
    longDescription: 'Quotely provides creators with an intuitive design studio for creating visual quote graphics. Features responsive layout presets, custom typography pairings, background gradient generators, and client-side canvas image rendering.',
    problem: 'Creating clean visual quotes for social channels typically requires bloated graphic design software with steep learning curves.',
    solution: 'Built a lightweight, lightning-fast client-side studio with immediate canvas export and curated design templates.',
    personalContribution: [
      'Designed responsive UI/UX using Vite, React, and Tailwind CSS',
      'Engineered real-time canvas preview engine for typography and layout exports',
    ],
    keyFeatures: [
      'Real-time typography formatting and background template selector',
      'Instant client-side canvas rasterization and PNG export',
      'Lightweight bundle footprint under 50kB gzip',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    architecture: {
      client: 'Vite + React 18 + HTML5 Canvas API',
      server: 'Static Client-Side Application',
      database: 'Local State / Browser Storage',
      mlOrCloud: 'Vercel Edge Network',
      highlights: ['Sub-second load times via Vite asset optimization'],
    },
    statusBadge: {
      label: 'Live Utility',
      variant: 'secondary',
    },
    githubUrl: 'https://github.com/deepaksinghh12/Quotely-Turn-your-text-into-stunning-visual-posts.',
    liveUrl: 'https://quotely-turn-your-text-into-stunnin.vercel.app/',
    canEmbedLivePreview: true,
    previewType: 'live-iframe',
  },
  {
    id: 'sat-vex',
    title: 'SAT-VEX',
    tagline: 'Orbital Tracking & Ground Footprint Visualizer',
    category: 'tools',
    categoryLabel: 'Space Tech & 3D Web',
    description: 'Satellite tracking system using TLE + SGP4 propagation with 3D orbital trajectory rendering in CesiumJS and ML-based drift estimation.',
    longDescription: 'SAT-VEX models low-earth-orbit satellite trajectories using standard Two-Line Element sets and the SGP4 mathematical propagator. Visualizes real-time 3D orbital tracks and ground swath footprints inside CesiumJS.',
    problem: 'Calculating satellite coverage areas and ground footprint visibility requires complex orbital mechanics modeling.',
    solution: 'Engineered an SGP4 propagation pipeline integrated with CesiumJS 3D geospatial globes for visual footprint coverage analysis.',
    personalContribution: [
      'Implemented TLE orbital propagation using SGP4 mathematical models',
      'Rendered real-time 3D satellite trajectories and ground footprints in CesiumJS',
    ],
    keyFeatures: [
      'Two-Line Element (TLE) parsing and SGP4 orbital propagation',
      'CesiumJS 3D globe visualization with orbital path history',
      'Communication & imaging satellite ground footprint coverage estimation',
    ],
    techStack: ['CesiumJS', 'React', 'Python', 'SGP4/TLE', 'Machine Learning'],
    architecture: {
      client: 'React + CesiumJS 3D WebGL Globe',
      server: 'Python SGP4 data pipeline',
      database: 'TLE Orbital Ephemeris Store',
      mlOrCloud: 'ML Drift Correction Model',
      highlights: ['Accurate SGP4 mathematical satellite orbit modeling'],
    },
    statusBadge: {
      label: 'Research Project',
      variant: 'outline',
    },
    githubUrl: 'https://github.com/deepaksinghh12/Satvex',
    canEmbedLivePreview: false,
    previewType: 'dashboard-mockup',
  },
];
