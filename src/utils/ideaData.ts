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
  },
];

// Function to filter ideas by criteria
export const filterIdeas = (
  ideas: Idea[],
  { difficulty, tags, techs }: { difficulty?: string; tags?: string[]; techs?: string[] }
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

    return true;
  });
};

// Function to get random ideas
export const getRandomIdeas = (ideas: Idea[] = ideasDatabase, count: number = 3): Idea[] => {
  const shuffled = [...ideas].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to get a random idea
export const getRandomIdea = (): Idea => {
  const randomIndex = Math.floor(Math.random() * ideasDatabase.length);
  return ideasDatabase[randomIndex];
};

// Add missing tech stacks
techStacks.html = { name: 'HTML' };
techStacks.css = { name: 'CSS' };
techStacks.stripe = { name: 'Stripe' };
techStacks.socket = { name: 'Socket.io' };
techStacks.chart = { name: 'Chart.js' };
