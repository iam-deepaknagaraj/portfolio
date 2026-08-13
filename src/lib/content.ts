export const site = {
  name: "Deepak Nagaraj",
  title: "Software Engineer",
  location: "Bengaluru, India",
  tagline: "I build reliable product features and integrations for modern teams.",
  summary:
    "Technology professional with experience in software engineering and project delivery. I focus on clean product surfaces, API integrations, and practical tooling that helps teams ship with confidence.",
  image: "/avatar.jpg",
  level: 12,
  xp: 7840,
  xpNext: 9000,
  links: {
    github: "https://github.com/iam-deepaknagaraj",
    linkedin: "https://www.linkedin.com/in/the-deepaknagaraj/",
  },
} as const;

export type SkillId =
  | "ruby"
  | "rails"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "postgresql"
  | "api"
  | "docker"
  | "git"
  | "cicd"
  | "integrations";

export const skills: {
  id: SkillId;
  label: string;
  level: number;
  xp: number;
}[] = [
  { id: "ruby", label: "Ruby", level: 88, xp: 880 },
  { id: "rails", label: "Ruby on Rails", level: 86, xp: 860 },
  { id: "javascript", label: "JavaScript", level: 82, xp: 820 },
  { id: "typescript", label: "TypeScript", level: 78, xp: 780 },
  { id: "react", label: "React", level: 80, xp: 800 },
  { id: "nextjs", label: "Next.js", level: 74, xp: 740 },
  { id: "postgresql", label: "PostgreSQL", level: 76, xp: 760 },
  { id: "api", label: "REST APIs", level: 90, xp: 900 },
  { id: "docker", label: "Docker", level: 72, xp: 720 },
  { id: "git", label: "Git / GitHub", level: 92, xp: 920 },
  { id: "cicd", label: "CI / CD", level: 70, xp: 700 },
  { id: "integrations", label: "Integrations", level: 88, xp: 880 },
];

/**
 * Work history from public LinkedIn profile.
 * Current employer name intentionally omitted (no Bayer branding).
 */
export const experience = [
  {
    role: "Software Engineer",
    org: "Enterprise product engineering",
    logo: "enterprise" as const,
    period: "Dec 2025 – Present",
    location: "Bengaluru, India",
    current: true,
    stack: ["react", "typescript", "api", "rails"] as SkillId[],
    points: [
      "Contribute to design, development, and maintenance of scalable web applications across frontend and backend.",
      "Ship features, fix issues, and improve reliability in close collaboration with product, design, and QA.",
      "Write clean, maintainable code with a focus on seamless integration and performance.",
    ],
  },
  {
    role: "Technical Lead",
    org: "HCLTech",
    logo: "hcl" as const,
    period: "Nov 2024 – Nov 2025",
    location: "Bengaluru, India",
    current: false,
    stack: ["javascript", "react", "api", "git"] as SkillId[],
    points: [
      "Led engineering delivery for product features and technical workstreams.",
      "Guided implementation decisions, code quality, and collaboration across the team.",
      "Partnered with stakeholders to translate requirements into reliable releases.",
    ],
  },
  {
    role: "Software Head",
    org: "Nara Technologies PVT LTD",
    logo: "nara" as const,
    period: "Aug 2024 – Oct 2024",
    location: "Bengaluru, India",
    current: false,
    stack: ["rails", "postgresql", "docker", "cicd"] as SkillId[],
    points: [
      "Led engineering direction for software initiatives and end-to-end delivery.",
      "Drove cross-functional collaboration and continuous improvement practices.",
      "Mentored engineers and aligned technical execution with business goals.",
    ],
  },
  {
    role: "Software Developer",
    org: "Nara Technologies PVT LTD",
    logo: "nara" as const,
    period: "Aug 2019 – Jul 2021",
    location: "Bengaluru, India",
    current: false,
    stack: ["ruby", "rails", "javascript", "postgresql"] as SkillId[],
    points: [
      "Built and maintained application features across the software stack.",
      "Supported product releases through development, fixes, and iterative improvements.",
      "Collaborated with teammates to deliver customer-facing functionality.",
    ],
  },
] as const;

export const education = [
  {
    school: "Sapthgiri College of Engineering",
    detail: "Bachelor of Engineering — Computer Science",
    location: "Bengaluru, India",
  },
] as const;

export const achievements = [
  {
    id: "quests-cleared",
    title: "Quest Clearer",
    detail: "Shipped product features across multiple releases",
    icon: "trophy" as const,
  },
  {
    id: "party-lead",
    title: "Party Lead",
    detail: "Led engineering delivery as Technical Lead",
    icon: "sword" as const,
  },
  {
    id: "integration-mage",
    title: "Integration Mage",
    detail: "Built connectors across project platforms",
    icon: "spark" as const,
  },
  {
    id: "mentor-buff",
    title: "Mentor Buff",
    detail: "Coached engineers and raised team throughput",
    icon: "shield" as const,
  },
] as const;

export const projects = [
  {
    title: "Project tooling integrations",
    description:
      "Plugins and connectors that sync work items and workflows between project platforms.",
    tags: ["Ruby", "APIs", "Integrations"],
    xp: 420,
    href: "https://github.com/iam-deepaknagaraj?tab=repositories",
  },
  {
    title: "Plugin experiments",
    description:
      "Sandbox work exploring UI modules, custom fields, and extensibility patterns.",
    tags: ["Plugins", "UI", "DX"],
    xp: 260,
    href: "https://github.com/iam-deepaknagaraj/openproject-my_plugin",
  },
  {
    title: "Containerized local setups",
    description:
      "Docker Compose recipes for running product stacks locally with less friction.",
    tags: ["Docker", "DevEx"],
    xp: 180,
    href: "https://github.com/iam-deepaknagaraj/openproject-docker-compose",
  },
] as const;
