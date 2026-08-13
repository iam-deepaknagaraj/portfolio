"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import {
  education,
  experience,
  projects,
  site,
  skills,
} from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function PortfolioPage() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.35]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--page-ink)]">
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
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,243,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(238,243,248,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 50% 20%, black 15%, transparent 70%)",
          }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgba(10,14,20,0.72)] backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.08em]"
          >
            DN
          </a>
          <nav className="flex items-center gap-1 text-sm text-[var(--page-muted)]">
            <a className="hidden rounded-full px-3 py-1.5 hover:text-[var(--page-ink)] sm:inline" href="#work">
              Work
            </a>
            <a className="hidden rounded-full px-3 py-1.5 hover:text-[var(--page-ink)] sm:inline" href="#experience">
              Experience
            </a>
            <a className="hidden rounded-full px-3 py-1.5 hover:text-[var(--page-ink)] sm:inline" href="#about">
              About
            </a>
            <Button
              render={<a href={site.links.github} target="_blank" rel="noopener noreferrer" />}
              variant="outline"
              size="sm"
              className="ml-1 rounded-full border-white/15 bg-transparent"
            >
              GitHub
            </Button>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl px-5">
        <motion.section
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-end pb-16 pt-16"
        >
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
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
                {site.title} based in {site.location}. {site.summary}
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
                  View experience
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
                  src={site.image}
                  alt={`${site.name} portrait`}
                  width={400}
                  height={400}
                  priority
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section id="work" className="scroll-mt-20 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Selected work
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Projects &amp; experiments
            </h2>
            <p className="mt-3 max-w-[48ch] text-[var(--page-muted)]">
              Public work spanning integrations, plugin exploration, and local developer setups.
            </p>
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
                      <div className="mb-2 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full bg-[rgba(212,161,92,0.12)] text-[var(--page-warm)]"
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
                    <motion.span
                      className="mt-1 inline-flex"
                      whileHover={reduce ? undefined : { x: 3, y: -3 }}
                    >
                      <ArrowUpRight className="size-5 shrink-0 text-[var(--page-muted)] group-hover:text-[var(--page-ink)]" />
                    </motion.span>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="experience" className="scroll-mt-20 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Experience
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Where I&apos;ve worked
            </h2>
            <p className="mt-3 max-w-[48ch] text-[var(--page-muted)]">
              Full timeline of roles. Current employer name is kept private.
            </p>
          </FadeIn>

          <div className="relative mt-10 space-y-0">
            <motion.div
              className="absolute bottom-2 left-[0.4rem] top-2 w-px origin-top bg-[var(--page-accent)]/35 sm:left-[9.65rem]"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, ease }}
            />
            <Stagger>
              {experience.map((job) => (
                <StaggerItem key={`${job.org}-${job.role}-${job.period}`}>
                  <article className="relative grid gap-3 py-6 pl-8 sm:grid-cols-[10rem_1fr] sm:pl-0">
                    <span className="absolute left-0 top-8 size-2.5 rounded-full bg-[var(--page-accent)] shadow-[0_0_0_4px_rgba(47,158,143,0.2)] sm:left-[9.4rem]" />
                    <p className="pt-0.5 text-sm text-[var(--page-muted)] sm:pr-6 sm:text-right">
                      {job.period}
                    </p>
                    <div>
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

        <section id="skills" className="scroll-mt-20 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Skills
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Tools I work with
            </h2>
          </FadeIn>
          <Stagger className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <StaggerItem key={skill}>
                <motion.div whileHover={reduce ? undefined : { y: -3, scale: 1.04 }}>
                  <Badge
                    variant="outline"
                    className="rounded-full border-white/15 px-3 py-1.5 text-sm text-[var(--page-ink)]"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="about" className="scroll-mt-20 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              About
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

        <section id="contact" className="scroll-mt-20 pb-24">
          <FadeIn>
            <Separator className="mb-10 bg-white/10" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Contact
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
          <p>{site.location}</p>
        </div>
      </footer>
    </div>
  );
}
