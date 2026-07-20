"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-brand-navy/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-border bg-card p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <Badge variant="brand" className="mb-4">
              {project.category}
            </Badge>
            <h3 id="project-modal-title" className="mb-4 text-2xl font-bold">
              {project.title}
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {project.details}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <ul className="mb-8 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-cyan" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github ?? siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                <Github className="h-4 w-4" /> View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "sm" }))}
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
