import type { SkillId } from "@/lib/content";
import {
  SiRuby,
  SiRubyonrails,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiGithubactions,
} from "react-icons/si";
import { FaPlug, FaNetworkWired } from "react-icons/fa6";
import type { IconType } from "react-icons";

const skillIcons: Record<SkillId, IconType> = {
  ruby: SiRuby,
  rails: SiRubyonrails,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  postgresql: SiPostgresql,
  api: FaNetworkWired,
  docker: SiDocker,
  git: SiGithub,
  cicd: SiGithubactions,
  integrations: FaPlug,
};

const skillColors: Record<SkillId, string> = {
  ruby: "#CC342D",
  rails: "#D30001",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  postgresql: "#4169E1",
  api: "#2F9E8F",
  docker: "#2496ED",
  git: "#E8E8E8",
  cicd: "#2088FF",
  integrations: "#D4A15C",
};

export function SkillIcon({
  id,
  className = "size-5",
}: {
  id: SkillId;
  className?: string;
}) {
  const Icon = skillIcons[id];
  return <Icon className={className} style={{ color: skillColors[id] }} aria-hidden />;
}

export function CompanyMark({
  logo,
  className = "",
}: {
  logo: "enterprise" | "hcl" | "nara";
  className?: string;
}) {
  if (logo === "hcl") {
    return (
      <div
        className={`flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#0b1f4a] text-[0.7rem] font-extrabold tracking-wide text-[#7ec8ff] ${className}`}
        aria-hidden
      >
        HCL
      </div>
    );
  }

  if (logo === "nara") {
    return (
      <div
        className={`flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#1a2a1f] text-[0.75rem] font-extrabold tracking-wide text-[#8fd6a8] ${className}`}
        aria-hidden
      >
        NT
      </div>
    );
  }

  return (
    <div
      className={`flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#1a242e] text-[0.75rem] font-extrabold tracking-wide text-[var(--page-accent)] ${className}`}
      aria-hidden
    >
      EP
    </div>
  );
}
