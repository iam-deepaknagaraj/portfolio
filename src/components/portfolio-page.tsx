"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/fade-in";
import {
  education,
  experience,
  projects,
  site,
  skills,
} from "@/lib/content";

export function PortfolioPage() {
  const reduce = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--page-ink)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,158,143,0.28),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[10%] left-[-8%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(212,161,92,0.18),transparent_65%)] blur-2xl" />
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
          <a href="#top" className="font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.08em]">
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
        <section className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-end pb-16 pt-20">
          <motion.p
            className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}
          </motion.p>
          <motion.h1
            className="mt-5 max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.4vw,2.25rem)] font-bold leading-tight tracking-[-0.02em]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.tagline}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-[42ch] text-base text-[var(--page-muted)] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.title} based in {site.location}. {site.summary}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              render={<a href="#work" />}
              size="lg"
              className="rounded-full bg-[var(--page-accent)] px-5 text-[var(--page-accent-ink)] hover:bg-[var(--page-accent-hover)]"
            >
              See selected work
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
        </section>

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
          <ul className="mt-8 border-t border-white/10">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.05}>
                <li>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border-b border-white/10 py-6 transition-[padding] duration-300 hover:pl-2"
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
                      <ArrowUpRight className="mt-1 size-5 shrink-0 text-[var(--page-muted)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--page-ink)]" />
                    </div>
                  </a>
                </li>
              </FadeIn>
            ))}
          </ul>
        </section>

        <section id="experience" className="scroll-mt-20 pb-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--page-accent)]">
              Experience
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
              Roles &amp; focus
            </h2>
            <p className="mt-3 max-w-[48ch] text-[var(--page-muted)]">
              Summarized generically from professional experience — company details kept private.
            </p>
          </FadeIn>
          <div className="mt-8 space-y-8">
            {experience.map((job, i) => (
              <FadeIn key={job.role + job.period} delay={i * 0.06}>
                <article className="grid gap-3 border-l border-[var(--page-accent)]/40 pl-5 sm:grid-cols-[10rem_1fr]">
                  <p className="text-sm text-[var(--page-muted)]">{job.period}</p>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {job.role}
                    </h3>
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
              </FadeIn>
            ))}
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
          <FadeIn delay={0.08} className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-full border-white/15 px-3 py-1.5 text-sm text-[var(--page-ink)]"
              >
                {skill}
              </Badge>
            ))}
          </FadeIn>
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
              {site.summary} Education: {education[0].school}, {education[0].location}.
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
              <Button
                render={<a href={site.links.github} target="_blank" rel="noopener noreferrer" />}
                size="lg"
                className="rounded-full bg-[var(--page-accent)] px-5 text-[var(--page-accent-ink)] hover:bg-[var(--page-accent-hover)]"
              >
                GitHub
                <ExternalLink data-icon="inline-end" />
              </Button>
              <Button
                render={<a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" />}
                variant="outline"
                size="lg"
                className="rounded-full border-white/15 bg-transparent px-5"
              >
                LinkedIn
                <ExternalLink data-icon="inline-end" />
              </Button>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-[var(--page-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.location}</p>
        </div>
      </footer>
    </div>
  );
}
