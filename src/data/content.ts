export interface Project {
  id: string;
  number: string; // e.g. "01", "02"
  title: string;
  description: string;
  category: "Full Stack" | "Computer Vision" | "Deep Learning";
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  year: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  points: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    firstName: "Sibam",
    lastName: "Sasmal",
    role: "Full-Stack Developer & AI/ML Engineer",
    taglineTags: "DEVELOPER. ENGINEER. BUILDER.",
    locationLine: "BASED IN INDIA · SHAPING INTELLIGENT SYSTEMS",
    presenceLabel: "01 / PRESENCE",
    presenceList: [
      "ENGINEERING",
      "COMPUTER VISION",
      "SCALABLE SYSTEMS",
    ],
    photoCaption: "A HUMAN PERSPECTIVE ON INTELLIGENT TECHNOLOGY",
    subtitleLine1: "I build scalable web platforms, train real-time computer vision models,",
    subtitleLine2: "and engineer high-throughput distributed systems.",
    aboutHeading: "Engineering with purpose, precision, and human curiosity.",
    aboutBio: [
      "I am a final-year Computer Science & Engineering student at NIST University with deep expertise in scalable backend architectures and real-time computer vision.",
      "From engineering automated PPE workplace safety monitors for high-risk industrial facilities to developing deep learning screening models for dermatology, my mission is to transform complex algorithmic research into reliable, accessible software.",
      "As 1st-place winner of Hacktriad 2.0 (out of 832 nationwide teams) and runner-up at Hackerena, I bring relentless drive, systematic rigor, and curiosity to every codebase I touch.",
    ],
    email: "shivamsasmal7@gmail.com",
    phone: "+91-8298006402",
    location: "Jamshedpur / Bhubaneswar, India",
    photoUrl: "/images/me.png",
    photoFallback: "/images/me.jpg",
    stats: [
      { label: "CGPA (NIST)", value: "8.5" },
      { label: "Hacktriad Rank", value: "#1" },
      { label: "Teams Beat", value: "830+" },
      { label: "Projects Shipped", value: "5+" },
    ],
  },

  socials: {
    github: "https://github.com/sasmalshivam",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:shivamsasmal7@gmail.com",
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C", "C++"],
    },
    {
      category: "Frontend & UI",
      items: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "Three.js", "HTML5/CSS3"],
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express.js", "Django", "REST APIs", "JWT Authentication", "PostgreSQL"],
    },
    {
      category: "AI & Computer Vision",
      items: ["OpenCV", "Deep Learning (CNNs)", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Git & GitHub", "Docker (basics)", "Postman", "Swagger", "Vercel", "AWS (basics)"],
    },
  ],

  projects: [
    {
      id: "ppe-detection",
      number: "01",
      title: "PPE Detection System for High-Risk Industries",
      description:
        "Real-time workplace safety monitor leveraging deep computer vision models to detect safety equipment (helmets, vests, goggles) and automate non-compliance penalties.",
      category: "Computer Vision",
      techStack: ["Python", "Django", "OpenCV", "Deep Learning", "YOLO"],
      githubUrl: "https://github.com/sasmalshivam/ppe-detection-system",
      liveUrl: "https://github.com/sasmalshivam/ppe-detection-system",
      year: "2026",
      featured: true,
      highlights: [
        "Real-time multi-class gear detection with bounding-box tracking",
        "Automated compliance tracking & penalty monitoring workflows",
        "Built for RTSP industrial surveillance feeds",
      ],
    },
    {
      id: "social-media-super-app",
      number: "02",
      title: "Social Media Super App Manager",
      description:
        "Centralized platform designed to orchestrate and manage multiple social media accounts seamlessly on an optimized, highly scalable backend.",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Postman"],
      githubUrl: "https://github.com/sasmalshivam/social-media-super-app",
      liveUrl: "https://github.com/sasmalshivam/social-media-super-app",
      year: "2026",
      featured: true,
      highlights: [
        "Handled concurrent user interactions with robust backend queuing",
        "Unified dashboard with granular analytics and token refreshes",
        "End-to-end API validation with automated Postman test suites",
      ],
    },
    {
      id: "healthnautix",
      number: "03",
      title: "HealthNautix – AI Skin Disease Detector",
      description:
        "An intelligent diagnostic companion leveraging convolutional neural networks and medical heuristics for early-stage screening of dermatological lesions.",
      category: "Deep Learning",
      techStack: ["Python", "Deep Learning", "CNN", "Flask", "NumPy"],
      githubUrl: "https://github.com/sasmalshivam/HealthNautix",
      liveUrl: "https://github.com/sasmalshivam/HealthNautix",
      year: "2025",
      featured: true,
      highlights: [
        "CNN image classifier trained on augmented medical datasets",
        "Integrated heuristic validation for risk calibration",
        "Low-latency inference designed for telemedicine",
      ],
    },
    {
      id: "ghoomakkads",
      number: "04",
      title: "Ghoomakkads – Travel Networking Platform",
      description:
        "Full-stack traveler ecosystem connecting wanderers across India with interactive trip planning, itinerary coordination, and traveler matching algorithms.",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/sasmalshivam/Ghoomakkads",
      liveUrl: "https://github.com/sasmalshivam/Ghoomakkads",
      year: "2024",
      featured: true,
      highlights: [
        "Runner-Up at Hackerena Hackathon (top 0.2% nationwide)",
        "Traveler matching algorithm by destinations & dates",
        "Collaborative itinerary planner with cost estimation",
      ],
    },
    {
      id: "face-detection",
      number: "05",
      title: "Real-Time Face Detection & Tracking",
      description:
        "Ultra-low latency facial landmark tracking and stream processing application engineered for lightweight surveillance integrations.",
      category: "Computer Vision",
      techStack: ["Python", "OpenCV", "Haar Cascades", "NumPy"],
      githubUrl: "https://github.com/sasmalshivam/real-time-face-detection",
      liveUrl: "https://github.com/sasmalshivam/real-time-face-detection",
      year: "2025",
      featured: false,
      highlights: [
        "Sub-30ms per frame detection latency on standard hardware",
        "Robust against lighting fluctuations and occlusion",
      ],
    },
  ] as Project[],

  experience: [
    {
      id: "webbocket",
      role: "Backend Developer Intern",
      company: "Webbocket",
      location: "Bhubaneswar, India",
      period: "2026",
      type: "Internship",
      points: [
        "Developed and stress-tested RESTful APIs using Node.js and Express.js for production features.",
        "Implemented secure user authentication with JWT and verified contracts with Postman.",
        "Collaborated with senior engineers using Git/GitHub for code reviews and delivery.",
      ],
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Postman", "Git"],
    },
    {
      id: "cttc",
      role: "AI/ML Summer Intern",
      company: "Central Tool Room & Training Centre (CTTC)",
      location: "Bhubaneswar, India",
      period: "2025",
      type: "Internship",
      points: [
        "Implemented supervised and unsupervised ML models in Python using Scikit-Learn.",
        "Applied end-to-end data preprocessing, feature engineering, and evaluation techniques.",
        "Analyzed multi-dimensional datasets with Pandas, NumPy, and Matplotlib.",
      ],
      skills: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
    },
  ] as Experience[],

  education: [
    {
      institution: "NIST University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      score: "CGPA: 8.5 / 10",
      location: "Berhampur, Odisha",
    },
    {
      institution: "S.D.S.M School for Excellence",
      degree: "Higher Secondary (Science)",
      period: "2019 – 2022",
      score: "Intermediate: 75% | Matriculation: 87%",
      location: "Jamshedpur, Jharkhand",
    },
  ] as Education[],

  achievements: [
    {
      title: "Winner – Hacktriad 2.0 (Manufacturing Domain)",
      organization: "National Hackathon",
      year: "2026",
      badge: "Rank 1 of 832 Teams",
      description: "Ranked #1 nationwide for AI-driven industrial safety compliance system.",
    },
    {
      title: "Runner-Up (Top 0.2%) – Hackerena",
      organization: "Hackerena Hackathon",
      year: "2024",
      badge: "Top 0.2%",
      description: "Recognized for Ghoomakkads collaborative travel networking platform.",
    },
    {
      title: "Second Prize – Research Paper Presentation",
      organization: "National Technical Symposium",
      year: "2024",
      badge: "2nd Prize",
      description: "Authored paper on affective computing & Emotionally Intelligent Machines.",
    },
  ] as Achievement[],

  navigation: [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
};

