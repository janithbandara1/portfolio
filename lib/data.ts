export const hero = {
  availability: "Open to work",
  headline: "Hi, I'm Janith Bandara",
  description:
    "I'm a Software Engineer with experience building full-stack web applications using the JavaScript/TypeScript stack.",
};

export const about = {
  heading: "Who I Am",
  paragraphs: [
    "I'm Janith Bandara, an Associate Software Engineer at X4 Digital Labs in Mawanella, Sri Lanka. I build SaaS platforms for restaurants and hospitality, including multi tenant systems, POS integrations, and real time order tracking.",
    "Outside of work, I build my own products, including an AI  SaaS that turns podcasts into short form clips, an e commerce platform for spare parts, and a course platform with purchasing price parity.",
    "I mainly work with the JavaScript/TypeScript stack. I enjoy every phase of the software development life cycle, from planning to deployment.",
  ],
};

export const skills = [
  {
    title: "Programming Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Tools and Technologies",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Node.js", "NestJS", "FastAPI", "PostgreSQL", "Prisma", "TypeORM", "Drizzle ORM", "Docker", "Git/GitHub", "AWS"],
  },
];

export type Project = {
  title: string;
  bullets: string[];
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "AI Podcast Clipper SaaS",
    bullets: [
      "Full-stack AI SaaS that generates viral short-form clips from podcasts.",
      "Used Gemini 2.5 for content analysis and WhisperX for transcription, with OpenCV-based speaker detection to convert horizontal video into vertical 9:16 format.",
      "Built serverless GPU rendering with Modal and background job processing with Inngest.",
      "Integrated Stripe for credit-based billing with a real-time status dashboard.",
    ],
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "Modal", "Amazon S3"],
    href: "#",
  },
  {
    title: "Course platform LMS⁠",
    bullets: [
      "Full-stack Next.js learning management system with admin content management, enrollment, and lesson tracking.",
      "Integrated secure payment processing with purchasing power parity pricing.",
      "Optimized server actions and caching for faster page loads, with role-based authentication securing user and admin routes.",
    ],
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    href: "#",
  },
  {
    title: "Spare Parts Web Application",
    bullets: [
      "Full-stack e-commerce platform for automotive spare parts management, built with Next.js 16, React 19, TypeScript, PostgreSQL, and Prisma.",
      "Features a server-side rendered product catalog with filtering by brand, model, and condition, plus a role-based admin system with secure authentication for inventory and media management.",
      "Integrated Cloudinary for media storage and WhatsApp inquiry workflows.",
    ],
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    href: "#",
  },
];

export type ExperienceRole = {
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export type ExperienceEntry = {
  company: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "X4 Digital Labs",
    roles: [
      {
        role: "Associate Software Engineer",
        period: "Jan 2026 — Present",
        bullets: [
          "Led the rebuild of a food ordering application using Next.js and NestJS, successfully integrating POS systems, menu management, and real-time order tracking.",
          "Collaborated with cross-functional teams to develop a multi-tenant SaaS platform for an All-in-One Restaurant Solution, utilizing a microservices architecture with NestJS.",
          "Contributed to the ongoing development and maintenance of restaurant and hospitality applications to enhance workflows and user experience.",
        ],
        tags: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "Docker", "Git/GitHub"],
      },
      {
        role: "Intern Software Engineer",
        period: "Jul 2025 — Dec 2025",
        bullets: [
          "Developed a web-based food ordering platform with integrated payment gateways to ensure 100% secure and seamless transactions.",
          "Enabled real-time order processing through Oracle Simphony POS integration, which improved order accuracy by 100%.",
          "Contributed to a scalable SaaS Restaurant Management System using Next.js, PostgreSQL, and Prisma, focusing on performance and maintainability.",
          "Dockerized applications, resulting in a 50% reduction in deployment time and improved system scalability.",
        ],
        tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma", "Docker", "Git/GitHub"],
      },
    ],
  },
];
