export const site = {
  name: "Deepak Nagaraj",
  title: "Software Engineer",
  location: "Bengaluru, India",
  tagline: "I build reliable product features and integrations for modern teams.",
  summary:
    "Technology professional with experience in software engineering and project delivery. I focus on clean product surfaces, API integrations, and practical tooling that helps teams ship with confidence.",
  image: "/avatar.jpg",
  links: {
    github: "https://github.com/iam-deepaknagaraj",
    linkedin: "https://www.linkedin.com/in/the-deepaknagaraj/",
    email: "",
  },
} as const;

/**
 * Work history from public LinkedIn profile.
 * Current employer name intentionally omitted.
 */
export const experience = [
  {
    role: "Software Engineer",
    org: "Enterprise product engineering",
    period: "Dec 2025 – Present",
    location: "Bengaluru, India",
    current: true,
    points: [
      "Contribute to design, development, and maintenance of scalable web applications across frontend and backend.",
      "Ship features, fix issues, and improve reliability in close collaboration with product, design, and QA.",
      "Write clean, maintainable code with a focus on seamless integration and performance.",
    ],
  },
  {
    role: "Technical Lead",
    org: "HCLTech",
    period: "Nov 2024 – Nov 2025",
    location: "Bengaluru, India",
    current: false,
    points: [
      "Led engineering delivery for product features and technical workstreams.",
      "Guided implementation decisions, code quality, and collaboration across the team.",
      "Partnered with stakeholders to translate requirements into reliable releases.",
    ],
  },
  {
    role: "Software Head",
    org: "Nara Technologies PVT LTD",
    period: "Aug 2024 – Oct 2024",
    location: "Bengaluru, India",
    current: false,
    points: [
      "Led engineering direction for software initiatives and end-to-end delivery.",
      "Drove cross-functional collaboration and continuous improvement practices.",
      "Mentored engineers and aligned technical execution with business goals.",
    ],
  },
  {
    role: "Software Developer",
    org: "Nara Technologies PVT LTD",
    period: "Aug 2019 – Jul 2021",
    location: "Bengaluru, India",
    current: false,
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

export const skills = [
  "Ruby",
  "Ruby on Rails",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "REST APIs",
  "Docker",
  "Git / GitHub",
  "CI / CD",
  "Integrations",
] as const;

export const projects = [
  {
    title: "Project tooling integrations",
    description:
      "Plugins and connectors that sync work items and workflows between project platforms.",
    tags: ["Ruby", "APIs", "Integrations"],
    href: "https://github.com/iam-deepaknagaraj?tab=repositories",
  },
  {
    title: "Plugin experiments",
    description:
      "Sandbox work exploring UI modules, custom fields, and extensibility patterns.",
    tags: ["Plugins", "UI", "DX"],
    href: "https://github.com/iam-deepaknagaraj/openproject-my_plugin",
  },
  {
    title: "Containerized local setups",
    description:
      "Docker Compose recipes for running product stacks locally with less friction.",
    tags: ["Docker", "DevEx"],
    href: "https://github.com/iam-deepaknagaraj/openproject-docker-compose",
  },
] as const;
