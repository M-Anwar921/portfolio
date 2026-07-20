import type {
  Project,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  Stat,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Muhammad Anwar",
  role: "AI Engineer | Machine Learning Developer | Full Stack Developer",
  tagline:
    "I build intelligent AI applications, modern web platforms, and machine learning solutions that solve real-world problems using Generative AI, LLMs, and modern software engineering practices.",
  email: "muhammadzoraiz921@gmail.com",
  phone: "0303-8512704",
  location: "Lahore, Pakistan",
  github: "https://github.com/M-Anwar921",
  githubUser: "M-Anwar921",
  linkedin: "https://linkedin.com/in/muhammad-anwar",
  resumeUrl: "/resume.pdf",
  url: "https://muhammadanwar.dev",
};

export const about = {
  cgpa: "3.62 / 4.0",
  story:
    "Passionate about Artificial Intelligence, Machine Learning, Full Stack Development, and Generative AI. I enjoy building scalable AI products that make technology more accessible and useful.",
  shortTerm:
    "Complete my Bachelor's with excellent academic performance while mastering AI technologies.",
  longTerm:
    "Become a Principal AI Engineer or AI Research Lead, building next-generation intelligent systems.",
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: ["Python", "JavaScript", "C++", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    icon: "Boxes",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Streamlit",
      "PyTorch",
      "HuggingFace",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Artificial Intelligence",
    icon: "BrainCircuit",
    skills: [
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "Prompt Engineering",
      "LLM Integration",
      "NLP",
      "Claude API",
      "Groq API",
      "Vision Models",
      "REST APIs",
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Socket.io"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer (Internship)",
    org: "Software House — Lahore, Pakistan",
    date: "2024 — 2025 · 6 months",
    points: [
      "Contributed to AI-integrated web applications using Python, Streamlit, and LLM APIs (Claude, Groq)",
      "Built a Finance Advisor Chatbot and an AI Document Analyzer alongside senior developers",
      "Participated in agile sprint cycles, code reviews, and product demos",
      "Delivered 6+ functional projects within deadlines, demonstrating strong time management",
    ],
  },
  {
    role: "Teacher — Computer Science & Mathematics",
    org: "Army Public School",
    date: "2023 — 2024",
    points: [
      "Taught Computer Science and Mathematics to secondary-level students",
      "Designed lesson plans and practical lab exercises that improved engagement and performance",
      "Developed communication, mentorship, and classroom management skills with 30+ students",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "University of Management & Technology (UMT)",
    program: "Bachelor of Science in Computer Science",
    date: "2022 — Present",
    score: "CGPA: 3.62 / 4.0",
    extra: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    school: "Military College Sui",
    program: "Intermediate — ICS (Pre-Engineering)",
    date: "2019 — 2022",
    score: "85%",
  },
  {
    school: "Military College Sui",
    program: "Matriculation (SSC)",
    date: "2017 — 2019",
    score: "92%",
  },
];

export const stats: Stat[] = [
  { label: "CGPA", value: 3.62, suffix: "/4.0" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Internship", value: 6, suffix: " mo" },
  { label: "Students Taught", value: 30, suffix: "+" },
  { label: "ML Models Trained", value: 7 },
  { label: "Hours Coding", value: 1000, suffix: "+" },
];

export const projects: Project[] = [
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    description:
      "End-to-end ML pipeline on 284,807 real transactions (0.17% fraud rate), handling extreme class imbalance and comparing 7 models.",
    details:
      "Built an end-to-end fraud detection pipeline handling extreme class imbalance with SMOTE, training and comparing Logistic Regression, Decision Tree, Random Forest, KNN, SVM, Naive Bayes, and an ANN. Evaluated with Precision, Recall, F1, and AUC-ROC rather than accuracy, which is misleading on imbalanced data. Threshold tuning on the ANN lifted precision from 0.69 to 0.89, and ROC / Precision-Recall curves were visualized for all seven models.",
    category: "AI/ML",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "SMOTE"],
    highlights: ["AUC-ROC 0.9836 (Random Forest)", "F1 Score 0.8324 (ANN)"],
    featured: true,
  },
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "Parses uploaded resumes, rates ATS compatibility, identifies keyword gaps, and recommends targeted improvements.",
    details:
      "An AI web app that parses uploaded resumes, rates ATS compatibility, identifies keyword gaps against a target role, and recommends targeted improvements — built to make job applications faster and smarter.",
    category: "NLP",
    tech: ["Python", "Streamlit", "Claude API", "NLP"],
    highlights: ["ATS compatibility scoring", "Keyword gap analysis"],
    featured: true,
  },
  {
    slug: "finance-advisor-chatbot",
    title: "Finance Advisor Chatbot",
    description:
      "A conversational finance assistant with multi-turn memory, delivering personalized budgeting and investment guidance.",
    details:
      "Developed a conversational finance assistant with multi-turn memory management, delivering personalized budgeting and investment guidance through natural language interaction.",
    category: "AI/ML",
    tech: ["Python", "Streamlit", "Groq API"],
    highlights: ["Multi-turn conversation memory", "Personalized guidance"],
  },
  {
    slug: "ai-image-document-analyzer",
    title: "AI Image & Document Analyzer",
    description:
      "A multimodal app supporting image captioning, document summarization, and Q&A over uploaded files.",
    details:
      "Created a multimodal app supporting image captioning, document summarization, and Q&A over user-uploaded files (PDF, PNG, JPEG) using vision-language models via the Groq Vision API.",
    category: "AI/ML",
    tech: ["Python", "Streamlit", "Groq Vision API"],
    highlights: ["Multimodal Q&A", "PDF, PNG, JPEG support"],
  },
  {
    slug: "textvoice",
    title: "TextVoice — Text-to-Audio Converter",
    description:
      "A full-stack TTS web app with multiple AI voice profiles, language selection, and one-click MP3 export.",
    details:
      "Engineered a full-stack text-to-speech web app with multiple AI voice profiles, language selection, and one-click MP3 export, powered by ElevenLabs' neural audio synthesis API.",
    category: "Full-Stack",
    tech: ["Next.js", "ElevenLabs API"],
    highlights: ["Multiple voice profiles", "One-click MP3 export"],
  },
  {
    slug: "ship-command-system",
    title: "Ship Command System",
    description:
      "A real-time collaborative command platform using WebSockets, with AI-powered command parsing and auto-suggestion.",
    details:
      "Architected a real-time collaborative command platform using WebSockets for multi-user synchronization, with Groq AI integration for intelligent command parsing and auto-suggestion.",
    category: "Systems",
    tech: ["React", "Node.js", "Socket.io", "Groq API"],
    highlights: ["Real-time multi-user sync", "AI command parsing"],
  },
  {
    slug: "custom-tts-model",
    title: "Custom TTS Model",
    description:
      "A fine-tuned speech synthesis neural network with natural prosody and optimized inference speed.",
    details:
      "Trained and fine-tuned a speech synthesis neural network, achieving natural prosody for English TTS and optimizing inference speed by restructuring the decoding pipeline.",
    category: "AI/ML",
    tech: ["Python", "PyTorch", "HuggingFace"],
    highlights: ["Natural prosody", "Optimized decoding pipeline"],
  },
  {
    slug: "management-systems",
    title: "Bank / Student / Library Management Systems",
    description:
      "Three CRUD-based management applications with SQL-backed persistent storage and authentication.",
    details:
      "Delivered three CRUD-based management applications with SQL-backed persistent storage, user authentication, and report generation for real-world administrative use cases.",
    category: "Full-Stack",
    tech: ["Python", "SQL"],
    highlights: ["User authentication", "Report generation"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Academic Supervisor",
    role: "UMT — Faculty",
    quote: "Recommendation available on request.",
    placeholder: true,
  },
  {
    name: "Internship Supervisor",
    role: "Software House, Lahore",
    quote: "Recommendation available on request.",
    placeholder: true,
  },
  {
    name: "Client",
    role: "Project Collaborator",
    quote: "Recommendation available on request.",
    placeholder: true,
  },
];

export const hobbies = [
  {
    title: "Chess",
    description:
      "Active chess player who uses the game to develop strategic thinking, pattern recognition, and decision-making under time pressure.",
    icon: "Crown",
  },
  {
    title: "Book Reading",
    description:
      "Passionate reader across technology, self-development, history, and fiction — sharpening analytical thinking and perspective.",
    icon: "BookOpen",
  },
  {
    title: "Competitive Debating",
    description:
      "Participated in formal English debate competitions, building public speaking confidence and the ability to argue multiple perspectives.",
    icon: "Mic2",
  },
];
