"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Sword, Shield, Trophy } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { CompanyMark, SkillIcon } from "@/components/brand-icons";
import {
  achievements,
  education,
  experience,
  projects,
  site,
  skills,
} from "@/lib/content";
import { assetPath } from "@/lib/paths";

const ease = [0.22, 1, 0.36, 1] as const;

const achievementIcons = {
  trophy: Trophy,
  sword: Sword,
  spark: Sparkles,
  shield: Shield,
} as const;

export function PortfolioPage() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const [explored, setExplored] = useState(0);

  useMotionValueEvent(progress, "change", (v) => {
    setExplored(Math.round(v * 100));
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 70]);
  const heroOpacity = useTransform(heroProgress, [0, 0.9], [1, reduce ? 1 : 0.4]);

  const xpPct = useMemo(
    () => Math.round((site.xp / site.xpNext) * 100),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--page-ink)]">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[var(--page-accent)]"
        style={{ scaleX: progress }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,158,143,0.28),transparent_65%)] blur-2xl"
          animate={
            reduce
              ? undefined
              : { x: [0, -30, 10, 0], y: [0, 20, -10, 0], scale: [1, 1.08, 0.96, 1] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-8%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(212,161,92,0.18),transparent_65%)] blur-2xl"
          animate={
            reduce
              ? undefined
              : { x: [0, 24, -12, 0], y: [0, -18, 14, 0], scale: [1, 0.94, 1.06, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-3 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex w-full max-w-xl items-center gap-3 rounded-full border border-white/10 bg-[rgba(10,14,20,0.82)] px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <a
            href="#top"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--page-accent)]/20 font-[family-name:var(--font-display)] text-xs font-extrabold text-[var(--page-accent)]"
          >
            Lv{site.level}
          </a>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.12em] text-[var(--page-muted)]">
              <span>Profile XP</span>
              <span>
                {site.xp.toLocaleString()} / {site.xpNext.toLocaleString()}
              </span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,#2f9e8f,#d4a15c)]"
                initial={reduce ? false : { width: 0 }}
                animate={{ width: `${xpPct}%` }}
                transition={{ duration: 1.1, ease }}
              />
            </div>
          </div>
          <div className="hidden items-center gap-1 text-[0.7rem] text-[var(--page-muted)] sm:flex">
            <span className="rounded-full border border-white/10 px-2 py-1">
              Map {explored}%
            </span>
          </div>
        </div>
      </div>

      <main id="top" className="mx-auto w-full max-w-5xl px-5">
        <motion.section
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="flex min-h-[calc(100vh-1rem)] flex-col justify-end pb-16 pt-28"
        >
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <motion.p
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--page-muted)]"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                <Sparkles className="size-3.5 text-[var(--page-warm)]" />
                Class: Full-stack builder · Region: {site.location}
              </motion.p>
              <motion.p
                className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease }}
              >
                {site.name}
              </motion.p>
              <motion.h1
                className="mt-5 max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.4vw,2.25rem)] font-bold leading-tight tracking-[-0.02em]"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease }}
              >
                {site.tagline}
              </motion.h1>
              <motion.p
                className="mt-4 max-w-[42ch] text-base text-[var(--page-muted)] sm:text-lg"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16, ease }}
              >
                {site.title}. {site.summary}
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.24, ease }}
              >
                <Button
                  render={<a href="#experience" />}
                  size="lg"
                  className="rounded-full bg-[var(--page-accent)] px-5 text-[var(--page-accent-ink)] hover:bg-[var(--page-accent-hover)]"
                >
                  Start quest log
                </Button>
                <Button
                  render={<a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" />}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/15 bg-transparent px-5"
                >
                  LinkedIn
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-[220px] sm:w-[260px] lg:mx-0 lg:mb-2"
              initial={reduce ? false : { opacity: 0, scale: 0.88, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
            >
              <motion.div
                className="absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(47,158,143,0.45),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(212,161,92,0.28),transparent_50%)] blur-md"
                animate={reduce ? undefined : { opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <Image
                  src={assetPath(site.image)}
                  alt={`${site.name} portrait`}
                  width={400}
                  height={400}
                  priority
                  unoptimized
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-[rgba(10,14,20,0.92)] px-3 py-1.5 text-xs shadow-lg">
                <span className="text-[var(--page-accent)]">★</span>
                <span>Level {site.level} unlocked</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section id="achievements" className="scroll-mt-24 pb-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Achievements
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Unlocked badges
            </h2>
          </FadeIn>
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
            {achievements.map((item) => {
              const Icon = achievementIcons[item.icon];
              return (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--page-accent)]/15 text-[var(--page-accent)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm text-[var(--page-muted)]">{item.detail}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </section>

        <section id="work" className="scroll-mt-24 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Side quests
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Projects &amp; experiments
            </h2>
          </FadeIn>
          <Stagger className="mt-8 border-t border-white/10">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-white/10 py-6"
                  whileHover={reduce ? undefined : { x: 8 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge className="rounded-full bg-[var(--page-warm)]/15 text-[var(--page-warm)]">
                          +{project.xp} XP
                        </Badge>
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full bg-white/5 text-[var(--page-muted)]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-[var(--page-muted)]">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-[var(--page-muted)] group-hover:text-[var(--page-ink)]" />
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="experience" className="scroll-mt-24 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Quest log
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Where I&apos;ve worked
            </h2>
            <p className="mt-3 max-w-[48ch] text-[var(--page-muted)]">
              Company marks for past roles. Current employer stays generic.
            </p>
          </FadeIn>

          <div className="relative mt-10">
            <motion.div
              className="absolute bottom-4 left-[1.35rem] top-4 w-px origin-top bg-[var(--page-accent)]/35 sm:left-[11.15rem]"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, ease }}
            />
            <Stagger>
              {experience.map((job) => (
                <StaggerItem key={`${job.org}-${job.role}-${job.period}`}>
                  <article className="relative grid gap-4 py-6 pl-14 sm:grid-cols-[9.5rem_1fr] sm:gap-6 sm:pl-0">
                    <span className="absolute left-[1.05rem] top-9 size-2.5 rounded-full bg-[var(--page-accent)] shadow-[0_0_0_4px_rgba(47,158,143,0.2)] sm:left-[10.85rem]" />
                    <p className="pt-2 text-sm text-[var(--page-muted)] sm:pr-2 sm:text-right">
                      {job.period}
                    </p>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
                      <div className="flex flex-wrap items-start gap-3">
                        <CompanyMark logo={job.logo} />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                              {job.role}
                            </h3>
                            {job.current ? (
                              <Badge className="rounded-full bg-[var(--page-accent)]/20 text-[var(--page-accent)]">
                                Current
                              </Badge>
                            ) : null}
                          </div>
                          <p className="mt-1 text-sm text-[var(--page-warm)]">
                            {job.org} · {job.location}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.stack.map((id) => (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-[var(--page-ink)]"
                          >
                            <SkillIcon id={id} className="size-3.5" />
                            {skills.find((s) => s.id === id)?.label}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-3 space-y-2 text-[var(--page-muted)]">
                        {job.points.map((point) => (
                          <li key={point} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Skill tree
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Tools I work with
            </h2>
            <p className="mt-3 max-w-[48ch] text-[var(--page-muted)]">
              Each skill has a level bar — hover to power up the card.
            </p>
          </FadeIn>
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <StaggerItem key={skill.id}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/25">
                      <SkillIcon id={skill.id} className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate font-semibold">{skill.label}</p>
                        <span className="text-xs text-[var(--page-accent)]">Lv {Math.round(skill.level / 10)}</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#2f9e8f,#58c4b4)]"
                          initial={reduce ? false : { width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease }}
                        />
                      </div>
                      <p className="mt-1 text-[0.7rem] text-[var(--page-muted)]">
                        {skill.xp} XP · {skill.level}% mastery
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="about" className="scroll-mt-24 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Lore
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Building useful software
            </h2>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-[var(--page-muted)]">
              {site.summary}
            </p>
            <p className="mt-3 max-w-[58ch] text-[var(--page-muted)]">
              {education[0].detail} · {education[0].school}, {education[0].location}.
            </p>
          </FadeIn>
        </section>

        <section id="contact" className="scroll-mt-24 pb-24">
          <FadeIn>
            <Separator className="mb-10 bg-white/10" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Multiplayer
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Let&apos;s connect
            </h2>
            <p className="mt-3 max-w-[48ch] text-[var(--page-muted)]">
              Open to conversations about product engineering, integrations, and web platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  render={<a href={site.links.github} target="_blank" rel="noopener noreferrer" />}
                  size="lg"
                  className="rounded-full bg-[var(--page-accent)] px-5 text-[var(--page-accent-ink)] hover:bg-[var(--page-accent-hover)]"
                >
                  GitHub
                  <ExternalLink data-icon="inline-end" />
                </Button>
              </motion.div>
              <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  render={<a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" />}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/15 bg-transparent px-5"
                >
                  LinkedIn
                  <ExternalLink data-icon="inline-end" />
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-[var(--page-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            Map explored: {explored}%
          </p>
        </div>
      </footer>
    </div>
  );
}
