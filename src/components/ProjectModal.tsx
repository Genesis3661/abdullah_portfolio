"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Star, X } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // Lock background scroll while the modal is open.
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = original;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
        >
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-app bg-card shadow-2xl shadow-slate-950/30"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-app bg-[rgb(var(--background))]/80 text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
              {/* Header */}
              <div className="flex items-start gap-4 pr-10">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-app bg-gradient-to-br from-accent/15 to-purple-500/10 text-3xl">
                  {project.icon}
                </div>
                <div className="min-w-0">
                  {project.tier === "flagship" ? (
                    <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      <Star className="h-3 w-3 fill-current" />
                      Flagship
                    </span>
                  ) : null}
                  <h3 className="text-xl font-bold leading-tight sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-app px-2.5 py-0.5 text-xs font-medium text-muted"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <p className="mt-5 leading-relaxed text-muted">
                {project.overview}
              </p>

              {/* Highlights */}
              <h4 className="mt-7 font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
                Key Contributions
              </h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <h4 className="mt-7 font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
                Tech Stack
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-app bg-[rgb(var(--background))] px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 ? (
                <div className="mt-7 flex flex-wrap gap-4 border-t border-app pt-5 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
