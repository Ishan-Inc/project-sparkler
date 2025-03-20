
export interface IdeaTag {
  name: string;
  color: string;
}

export interface TechStack {
  name: string;
  icon?: string;
}

export interface Idea {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  tags: IdeaTag[];
  techStack: TechStack[];
  learningOutcomes: string[];
  language: string; // Adding language field
}

// Utility function to generate random ID
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// Tags with predefined colors
export const tags: Record<string, IdeaTag> = {
  frontend: { name: 'Frontend', color: 'bg-blue-100 text-blue-800' },
  backend: { name: 'Backend', color: 'bg-green-100 text-green-800' },
  fullstack: { name: 'Full Stack', color: 'bg-purple-100 text-purple-800' },
  mobile: { name: 'Mobile', color: 'bg-orange-100 text-orange-800' },
  desktop: { name: 'Desktop', color: 'bg-red-100 text-red-800' },
  web: { name: 'Web', color: 'bg-sky-100 text-sky-800' },
  api: { name: 'API', color: 'bg-emerald-100 text-emerald-800' },
  database: { name: 'Database', color: 'bg-amber-100 text-amber-800' },
  ai: { name: 'AI/ML', color: 'bg-fuchsia-100 text-fuchsia-800' },
  game: { name: 'Game', color: 'bg-indigo-100 text-indigo-800' },
  productivity: { name: 'Productivity', color: 'bg-rose-100 text-rose-800' },
};

// Languages
export const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'PHP',
  'Go',
  'Rust',
  'Swift',
  'Kotlin'
];

// Tech stacks
export const techStacks: Record<string, TechStack> = {
  react: { name: 'React' },
  angular: { name: 'Angular' },
  vue: { name: 'Vue.js' },
  svelte: { name: 'Svelte' },
  node: { name: 'Node.js' },
  express: { name: 'Express' },
  django: { name: 'Django' },
  flask: { name: 'Flask' },
  rails: { name: 'Ruby on Rails' },
  laravel: { name: 'Laravel' },
  mongodb: { name: 'MongoDB' },
  postgres: { name: 'PostgreSQL' },
  mysql: { name: 'MySQL' },
  firebase: { name: 'Firebase' },
  aws: { name: 'AWS' },
  docker: { name: 'Docker' },
  kubernetes: { name: 'Kubernetes' },
  graphql: { name: 'GraphQL' },
  typescript: { name: 'TypeScript' },
  python: { name: 'Python' },
  javascript: { name: 'JavaScript' },
  java: { name: 'Java' },
  csharp: { name: 'C#' },
  flutter: { name: 'Flutter' },
  reactnative: { name: 'React Native' },
  swift: { name: 'Swift' },
  kotlin: { name: 'Kotlin' },
  go: { name: 'Go' },
  rust: { name: 'Rust' },
  ruby: { name: 'Ruby' },
  php: { name: 'PHP' },
};

// Initial ideas database
export const ideasDatabase: Idea[] = [
  {
    id: generateId(),
    title: 'Personal Portfolio Website',
    description: 'Create a stunning portfolio website to showcase your projects and skills. Implement smooth animations and responsive design.',
    difficulty: 'beginner',
    duration: '1-2 weeks',
    tags: [tags.frontend, tags.web],
    techStack: [techStacks.react, techStacks.javascript, techStacks.html, techStacks.css],
    learningOutcomes: [
      'Building responsive layouts',
      'Basic animations and transitions',
      'Deploying a static website',
      'Optimizing for different devices'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Task Management Application',
    description: 'Build a Kanban-style task management app with drag-and-drop functionality. Include user authentication and task filtering.',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.react, techStacks.node, techStacks.express, techStacks.mongodb],
    learningOutcomes: [
      'User authentication and authorization',
      'Working with drag-and-drop libraries',
      'CRUD operations with a database',
      'State management in complex applications'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Weather Forecast App',
    description: 'Create a weather application that shows current conditions and forecasts. Use a weather API and implement geolocation.',
    difficulty: 'beginner',
    duration: '1-2 weeks',
    tags: [tags.frontend, tags.api],
    techStack: [techStacks.javascript, techStacks.html, techStacks.css],
    learningOutcomes: [
      'Working with third-party APIs',
      'Handling asynchronous operations',
      'Displaying dynamic data',
      'Using browser geolocation'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'E-commerce Platform',
    description: 'Develop a full-featured e-commerce site with product listings, shopping cart, and checkout process.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb, techStacks.stripe],
    learningOutcomes: [
      'Complex state management',
      'Payment processing integration',
      'Shopping cart functionality',
      'User sessions and authentication',
      'Order processing and management'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Real-time Chat Application',
    description: 'Build a real-time messaging app with private and group chats. Implement typing indicators and read receipts.',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.socket, techStacks.mongodb],
    learningOutcomes: [
      'Real-time communication with WebSockets',
      'Managing online/offline status',
      'Building a responsive chat interface',
      'Handling message history and storage'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Recipe Finder App',
    description: 'Create an app that allows users to search for recipes by ingredients they have on hand. Include filters for dietary restrictions.',
    difficulty: 'intermediate',
    duration: '2-3 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb],
    learningOutcomes: [
      'Complex search functionality',
      'Filtering and sorting data',
      'User preference management',
      'Responsive image galleries'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Budget Tracker',
    description: 'Develop a personal finance app to track income, expenses, and savings goals. Include data visualization.',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.react, techStacks.node, techStacks.postgres, techStacks.chart],
    learningOutcomes: [
      'Data visualization with charts',
      'Working with financial calculations',
      'Category management and tagging',
      'Secure handling of sensitive data'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Markdown Note Taking App',
    description: 'Build a note-taking application with Markdown support, tags, and search functionality.',
    difficulty: 'intermediate',
    duration: '2-3 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb],
    learningOutcomes: [
      'Working with text editors',
      'Markdown parsing and rendering',
      'Implementing search functionality',
      'Data synchronization'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Movie Recommendation Engine',
    description: 'Create a movie database with personalized recommendations based on user ratings and preferences.',
    difficulty: 'advanced',
    duration: '3-6 weeks',
    tags: [tags.fullstack, tags.ai],
    techStack: [techStacks.react, techStacks.python, techStacks.flask, techStacks.postgres],
    learningOutcomes: [
      'Recommendation algorithms',
      'Working with large datasets',
      'User preference analysis',
      'Building a search and filter system'
    ],
    language: 'Python'
  },
  {
    id: generateId(),
    title: 'Fitness Tracking Dashboard',
    description: 'Develop a fitness app to track workouts, set goals, and visualize progress over time.',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb, techStacks.chart],
    learningOutcomes: [
      'Data visualization and charting',
      'Progress tracking algorithms',
      'Goal setting and notifications',
      'Mobile-responsive design for on-the-go use'
    ],
    language: 'JavaScript'
  },
  // Adding additional projects for different languages and types
  {
    id: generateId(),
    title: 'Inventory Management System',
    description: 'Build a complete inventory system with barcode scanning, stock alerts, and reporting features.',
    difficulty: 'advanced',
    duration: '4-6 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.java, techStacks.spring, techStacks.mysql],
    learningOutcomes: [
      'Enterprise application architecture',
      'Database design and optimization',
      'Reporting and analytics',
      'Integration with external hardware'
    ],
    language: 'Java'
  },
  {
    id: generateId(),
    title: 'Blog Platform with CMS',
    description: 'Create a modern blogging platform with a custom content management system, SEO features, and analytics.',
    difficulty: 'intermediate',
    duration: '3-5 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb],
    learningOutcomes: [
      'Content management systems',
      'SEO optimization',
      'Rich text editing',
      'User and permissions management'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Social Media Dashboard',
    description: 'Build a dashboard for monitoring and posting to multiple social media platforms from a single interface.',
    difficulty: 'intermediate',
    duration: '3-4 weeks',
    tags: [tags.api, tags.web],
    techStack: [techStacks.vue, techStacks.node, techStacks.mongodb],
    learningOutcomes: [
      'Working with multiple APIs',
      'OAuth authentication',
      'Real-time data updates',
      'Social media analytics'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Machine Learning Image Classifier',
    description: 'Develop an image classification application using machine learning to identify objects in photos.',
    difficulty: 'advanced',
    duration: '3-6 weeks',
    tags: [tags.ai, tags.web],
    techStack: [techStacks.python, techStacks.tensorflow, techStacks.flask],
    learningOutcomes: [
      'Machine learning concepts',
      'Model training and evaluation',
      'Computer vision techniques',
      'Deploying ML models to production'
    ],
    language: 'Python'
  },
  {
    id: generateId(),
    title: 'Augmented Reality Product Viewer',
    description: 'Create an AR app that allows users to visualize products in their real environment through their device camera.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.mobile, tags.game],
    techStack: [techStacks.swift, techStacks.arkit],
    learningOutcomes: [
      'Augmented reality development',
      '3D modeling and rendering',
      'Camera and sensors integration',
      'User interaction in 3D space'
    ],
    language: 'Swift'
  },
  {
    id: generateId(),
    title: 'Project Management Tool',
    description: 'Build a comprehensive project management application with tasks, teams, timelines, and reporting.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.react, techStacks.typescript, techStacks.node, techStacks.postgres],
    learningOutcomes: [
      'Complex state management',
      'Team collaboration features',
      'Drag-and-drop interfaces',
      'Charts and data visualization'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Digital Asset Management System',
    description: 'Create a platform for organizing, storing, and searching digital assets like images, videos, and documents.',
    difficulty: 'intermediate',
    duration: '3-5 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.react, techStacks.node, techStacks.aws],
    learningOutcomes: [
      'File storage and retrieval',
      'Content indexing and search',
      'Metadata management',
      'Access control systems'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Event Management Platform',
    description: 'Develop a full-featured event platform with registration, ticketing, schedules, and attendee management.',
    difficulty: 'advanced',
    duration: '4-7 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.postgres, techStacks.stripe],
    learningOutcomes: [
      'Payment processing',
      'QR code generation',
      'Email notifications',
      'Calendar integrations'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Terminal-based Todo Manager',
    description: 'Create a command-line application for managing tasks and todos with a text-based interface.',
    difficulty: 'beginner',
    duration: '1-2 weeks',
    tags: [tags.productivity, tags.desktop],
    techStack: [techStacks.python],
    learningOutcomes: [
      'Command-line interfaces',
      'File I/O operations',
      'Text-based UI design',
      'Working with system commands'
    ],
    language: 'Python'
  },
  {
    id: generateId(),
    title: 'Containerized Microservices App',
    description: 'Build a system of microservices using Docker containers, orchestrated with Kubernetes.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.backend, tags.api],
    techStack: [techStacks.go, techStacks.docker, techStacks.kubernetes, techStacks.postgres],
    learningOutcomes: [
      'Microservices architecture',
      'Container orchestration',
      'Service discovery',
      'Distributed systems design'
    ],
    language: 'Go'
  },
  {
    id: generateId(),
    title: 'Real Estate Listing Platform',
    description: 'Create a platform for listing and searching properties with maps, filters, and virtual tours.',
    difficulty: 'intermediate',
    duration: '3-5 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb, techStacks.mapbox],
    learningOutcomes: [
      'Geospatial data and maps',
      'Advanced filtering systems',
      'Image galleries',
      'Property comparisons'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Voice-Controlled Smart Home App',
    description: 'Develop an application that controls smart home devices through voice commands and a mobile interface.',
    difficulty: 'advanced',
    duration: '4-7 weeks',
    tags: [tags.mobile, tags.api],
    techStack: [techStacks.reactnative, techStacks.node, techStacks.mongodb],
    learningOutcomes: [
      'Speech recognition',
      'IoT device integration',
      'Cross-platform mobile development',
      'State synchronization across devices'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Build an application to track cryptocurrency investments, with real-time prices and portfolio analytics.',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    tags: [tags.web, tags.api],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb, techStacks.chart],
    learningOutcomes: [
      'Working with financial APIs',
      'Real-time data processing',
      'Investment calculations',
      'Data visualization for finance'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Language Learning Flashcards App',
    description: 'Create a mobile app for language learning using spaced repetition and audio pronunciation.',
    difficulty: 'intermediate',
    duration: '3-5 weeks',
    tags: [tags.mobile, tags.productivity],
    techStack: [techStacks.flutter, techStacks.firebase],
    learningOutcomes: [
      'Educational app design',
      'Audio processing',
      'Spaced repetition algorithms',
      'Progress tracking'
    ],
    language: 'Dart'
  },
  {
    id: generateId(),
    title: 'PDF Generation Service',
    description: 'Build a service that generates professional PDF documents from various data sources and templates.',
    difficulty: 'intermediate',
    duration: '2-4 weeks',
    tags: [tags.backend, tags.api],
    techStack: [techStacks.node, techStacks.express, techStacks.mongodb],
    learningOutcomes: [
      'Document generation',
      'Template systems',
      'Data transformation',
      'API design'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Cross-platform Desktop File Sync',
    description: 'Create a desktop application for syncing files across devices, similar to Dropbox or Google Drive.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.desktop, tags.productivity],
    techStack: [techStacks.electron, techStacks.node, techStacks.aws],
    learningOutcomes: [
      'Cross-platform desktop development',
      'File system operations',
      'Conflict resolution strategies',
      'Secure data synchronization'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Health and Fitness Tracker',
    description: 'Develop a mobile application that tracks workouts, nutrition, and health metrics with visualizations.',
    difficulty: 'intermediate',
    duration: '3-5 weeks',
    tags: [tags.mobile, tags.productivity],
    techStack: [techStacks.kotlin, techStacks.firebase],
    learningOutcomes: [
      'Health metrics tracking',
      'Sensor integration',
      'Goal setting and rewards',
      'Fitness analytics'
    ],
    language: 'Kotlin'
  },
  {
    id: generateId(),
    title: 'Game Development Portfolio',
    description: 'Build a simple 2D game with multiple levels, scoring, and animations using a game engine.',
    difficulty: 'intermediate',
    duration: '3-6 weeks',
    tags: [tags.game, tags.desktop],
    techStack: [techStacks.unity, techStacks.csharp],
    learningOutcomes: [
      'Game design principles',
      'Physics engines',
      'Animation and sprites',
      'Game UI development'
    ],
    language: 'C#'
  },
  {
    id: generateId(),
    title: 'Distributed Data Processing Pipeline',
    description: 'Create a system for processing large datasets using distributed computing and batch processing.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.backend, tags.api],
    techStack: [techStacks.python, techStacks.spark, techStacks.aws],
    learningOutcomes: [
      'Big data processing',
      'Distributed systems',
      'Data transformation',
      'Performance optimization'
    ],
    language: 'Python'
  },
  {
    id: generateId(),
    title: 'Augmented Reality Navigation',
    description: 'Build a mobile app that provides AR-enhanced navigation for indoor and outdoor environments.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.mobile, tags.api],
    techStack: [techStacks.arcore, techStacks.kotlin, techStacks.firebase],
    learningOutcomes: [
      'AR development',
      'Location services',
      'Navigation algorithms',
      'Computer vision'
    ],
    language: 'Kotlin'
  },
  {
    id: generateId(),
    title: 'E-Learning Platform',
    description: 'Create a comprehensive e-learning platform with courses, quizzes, progress tracking, and certifications.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.postgres, techStacks.aws],
    learningOutcomes: [
      'Educational content management',
      'Assessment engines',
      'Progress tracking',
      'Video streaming'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Food Delivery App',
    description: 'Develop a mobile app for food ordering and delivery with real-time tracking and payment processing.',
    difficulty: 'advanced',
    duration: '4-8 weeks',
    tags: [tags.mobile, tags.fullstack],
    techStack: [techStacks.flutter, techStacks.firebase, techStacks.stripe],
    learningOutcomes: [
      'Location tracking',
      'Order management',
      'Payment integration',
      'Real-time status updates'
    ],
    language: 'Dart'
  },
  {
    id: generateId(),
    title: 'Peer-to-Peer File Sharing',
    description: 'Build a secure P2P file sharing application with encryption and direct connections between users.',
    difficulty: 'advanced',
    duration: '4-7 weeks',
    tags: [tags.desktop, tags.api],
    techStack: [techStacks.rust, techStacks.webrtc],
    learningOutcomes: [
      'P2P networking',
      'Encryption and security',
      'Distributed systems',
      'Binary data handling'
    ],
    language: 'Rust'
  },
  {
    id: generateId(),
    title: 'AI-Powered Image Editor',
    description: 'Create an image editing application that uses AI for intelligent photo enhancement and manipulation.',
    difficulty: 'advanced',
    duration: '5-9 weeks',
    tags: [tags.ai, tags.desktop],
    techStack: [techStacks.python, techStacks.tensorflow, techStacks.electron],
    learningOutcomes: [
      'Image processing techniques',
      'Integrating ML models',
      'UI design for creative applications',
      'Real-time processing'
    ],
    language: 'Python'
  },
  {
    id: generateId(),
    title: 'Podcast Hosting Platform',
    description: 'Build a platform for podcast creators to host, distribute, and monetize their content.',
    difficulty: 'intermediate',
    duration: '3-6 weeks',
    tags: [tags.fullstack, tags.web],
    techStack: [techStacks.react, techStacks.node, techStacks.aws],
    learningOutcomes: [
      'Audio streaming',
      'RSS feed generation',
      'Content distribution',
      'Analytics for creators'
    ],
    language: 'JavaScript'
  },
  {
    id: generateId(),
    title: 'Automated Testing Framework',
    description: 'Create a custom testing framework for automating UI, API, and performance tests for web applications.',
    difficulty: 'advanced',
    duration: '3-6 weeks',
    tags: [tags.api, tags.productivity],
    techStack: [techStacks.typescript, techStacks.node, techStacks.selenium],
    learningOutcomes: [
      'Test automation strategies',
      'Reporting and analytics',
      'CI/CD integration',
      'Test case management'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Low-Code App Builder',
    description: 'Develop a platform that allows users to build applications through a visual interface with minimal coding.',
    difficulty: 'advanced',
    duration: '5-9 weeks',
    tags: [tags.fullstack, tags.productivity],
    techStack: [techStacks.react, techStacks.node, techStacks.mongodb],
    learningOutcomes: [
      'Drag-and-drop interfaces',
      'Code generation',
      'Visual programming',
      'User-generated content management'
    ],
    language: 'TypeScript'
  },
  {
    id: generateId(),
    title: 'Browser Extension for Productivity',
    description: 'Create a browser extension that enhances productivity by blocking distractions and providing focused work sessions.',
    difficulty: 'beginner',
    duration: '1-3 weeks',
    tags: [tags.frontend, tags.productivity],
    techStack: [techStacks.javascript, techStacks.html, techStacks.css],
    learningOutcomes: [
      'Browser extension development',
      'Working with browser APIs',
      'User settings management',
      'Time tracking mechanisms'
    ],
    language: 'JavaScript'
  }
];

// Add missing tech stacks
techStacks.html = { name: 'HTML' };
techStacks.css = { name: 'CSS' };
techStacks.stripe = { name: 'Stripe' };
techStacks.socket = { name: 'Socket.io' };
techStacks.chart = { name: 'Chart.js' };
techStacks.spring = { name: 'Spring Boot' };
techStacks.tensorflow = { name: 'TensorFlow' };
techStacks.arkit = { name: 'ARKit' };
techStacks.mapbox = { name: 'Mapbox' };
techStacks.electron = { name: 'Electron' };
techStacks.unity = { name: 'Unity' };
techStacks.spark = { name: 'Apache Spark' };
techStacks.arcore = { name: 'ARCore' };
techStacks.webrtc = { name: 'WebRTC' };
techStacks.selenium = { name: 'Selenium' };

// Function to filter ideas by criteria
export const filterIdeas = (
  ideas: Idea[],
  { difficulty, tags, techs, language }: { difficulty?: string; tags?: string[]; techs?: string[], language?: string }
) => {
  return ideas.filter((idea) => {
    // Filter by difficulty
    if (difficulty && idea.difficulty !== difficulty) {
      return false;
    }

    // Filter by tags
    if (tags && tags.length > 0) {
      const ideaTagNames = idea.tags.map((tag) => tag.name.toLowerCase());
      if (!tags.some((tag) => ideaTagNames.includes(tag.toLowerCase()))) {
        return false;
      }
    }

    // Filter by tech stack
    if (techs && techs.length > 0) {
      const ideaTechNames = idea.techStack.map((tech) => tech.name.toLowerCase());
      if (!techs.some((tech) => ideaTechNames.includes(tech.toLowerCase()))) {
        return false;
      }
    }

    // Filter by language
    if (language && idea.language.toLowerCase() !== language.toLowerCase()) {
      return false;
    }

    return true;
  });
};

// Function to get random ideas
export const getRandomIdeas = (ideas: Idea[] = ideasDatabase, count: number = 3): Idea[] => {
  if (!ideas || ideas.length === 0) {
    return [];
  }
  const shuffled = [...ideas].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Function to get a random idea
export const getRandomIdea = (): Idea => {
  const randomIndex = Math.floor(Math.random() * ideasDatabase.length);
  return ideasDatabase[randomIndex];
};
