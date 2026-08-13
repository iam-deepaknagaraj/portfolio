export const site = {
  name: "Deepak Nagaraj",
  title: "Software Engineer",
  location: "Bengaluru, India",
  tagline: "I build reliable product features and integrations for modern teams.",
  summary:
    "Technology professional with experience in software engineering and project delivery. I focus on clean product surfaces, API integrations, and practical tooling that helps teams ship with confidence.",
  links: {
    github: "https://github.com/iam-deepaknagaraj",
    linkedin: "https://www.linkedin.com/in/the-deepaknagaraj/",
    email: "",
  },
} as const;

/** Generic roles — employer names intentionally omitted. */
export const experience = [
  {
    role: "Software Engineer",
    org: "Enterprise product engineering",
    period: "Present",
    location: "Bengaluru, India",
    points: [
      "Design and ship product features on web platforms used by cross-functional teams.",
      "Build integrations across project management and collaboration tools.",
      "Improve developer workflows with plugins, automation, and clear UX.",
    ],
  },
  {
    role: "Software Engineering",
    org: "Earlier roles & projects",
    period: "Prior experience",
    location: "India",
    points: [
      "Delivered application features across full-stack web stacks.",
      "Collaborated with product and engineering partners on iterative releases.",
      "Owned bug fixes, enhancements, and production support for customer-facing flows.",
    ],
  },
] as const;

export const education = [
  {
    school: "Sapthgiri College of Engineering",
    detail: "Engineering",
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
