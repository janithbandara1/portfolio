export const siteConfig = {
  name: "Janith Bandara",
  role: "Full-Stack Developer",
  email: "janithbandara001@gmail.com",
  location: "Sri Lanka",
  social: {
    github: "https://github.com/janithbandara1",
    linkedin: "https://linkedin.com/in/janithbandara",
  },
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  availability: "Available for new opportunities",
  headline: "Full-Stack Developer building fast, reliable web products.",
  description:
    "I design and build modern web applications end-to-end — from interfaces in React and Next.js to APIs and databases that power them. Currently focused on crafting clean, performant products.",
};

export const about = {
  heading: "A developer who cares about the details.",
  paragraphs: [
    "I'm a full-stack developer specializing in building modern web applications with React, Next.js, and Node.js, alongside backend systems in Laravel and PHP. I enjoy turning ideas into polished, production-ready products — from database design and API architecture to pixel-perfect, accessible interfaces.",
    "I'm always learning and exploring new tools, and I care deeply about writing clean, maintainable code and delivering work that solves real problems for real users.",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Laravel", "PHP", "REST APIs", "Express"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Vercel", "Figma", "Linux"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo: string;
};

export const projects: Project[] = [
  {
    title: "SaaS Engagement Platform",
    description:
      "A multi-tenant SaaS platform for restaurants to manage orders, menus, and customer engagement in real time.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    href: "#",
    repo: "#",
  },
  {
    title: "Ride Booking App",
    description:
      "A ride-hailing web app with driver and rider flows, live trip tracking, and multi-language support.",
    tags: ["Next.js", "React", "Node.js"],
    href: "#",
    repo: "#",
  },
  {
    title: "Business Management System",
    description:
      "An internal system for managing operations, inventory, and reporting for a growing business.",
    tags: ["Laravel", "PHP", "MySQL"],
    href: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and shadcn/ui to showcase projects and experience.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    href: "#",
    repo: "#",
  },
];

export type ExperienceRole = {
  role: string;
  period: string;
  description: string;
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
        role: "Software Engineer",
        period: "2024 — Present",
        description:
          "Building and maintaining SaaS products with Next.js and Node.js, including a restaurant engagement platform and a ride-booking application.",
        tags: ["Next.js", "TypeScript", "Node.js"],
      },
      {
        role: "Intern Software Engineer",
        period: "2023 — 2024",
        description:
          "Contributed to frontend and backend features across internal tools, learning the team's workflow with React, Next.js, and REST APIs.",
        tags: ["React", "Next.js", "REST APIs"],
      },
    ],
  },
];
