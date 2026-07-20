"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Info, Search, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ProjectModal } from "@/components/project-modal";
import { projects, siteConfig } from "@/lib/data";
import type { Project } from "@/types";

const categories = ["All", "AI/ML", "Full-Stack", "NLP", "Systems"] as const;

export function Projects() {
  const [category, setCategory] = React.useState<(typeof categories)[number]>("All");
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="border-t border-border py-28">
      <div className="section-container">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-brand-blue dark:text-brand-cyan">
            04 · Featured Projects
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve shipped
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === c
                    ? "border-transparent bg-gradient-brand text-white"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              aria-label="Search projects"
            />
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            No projects match &ldquo;{query}&rdquo;. Try a different search or category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 0.08}>
                <Card className="group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1.5 hover:border-brand-cyan/50 hover:shadow-xl hover:shadow-brand-blue/10">
                  <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-brand">
                    <motion.div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {project.featured && (
                      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-current" /> Featured
                      </span>
                    )}
                    <span className="font-mono text-xs text-white/70">{project.category}</span>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col pt-0">
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge key={t} className="text-[11px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 border-t border-border pt-4">
                      <a
                        href={project.github ?? siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                      <button
                        onClick={() => setActive(project)}
                        className="flex items-center gap-1.5 text-sm font-medium text-brand-blue transition-colors hover:text-brand-cyan dark:text-brand-cyan"
                      >
                        <Info className="h-4 w-4" /> Details
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
