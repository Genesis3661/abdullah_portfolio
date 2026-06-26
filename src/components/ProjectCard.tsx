"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFlagship = project.tier === "flagship";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
      className={`group relative flex flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent ${
        isFlagship ? "border-accent/40" : "border-app"
      }`}
    >
      {isFlagship ? (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          <Star className="h-3 w-3 fill-current" />
          Flagship
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug">{project.name}</h3>
        {project.links?.[0] ? (
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="flex-shrink-0 text-muted transition-colors group-hover:text-accent"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 pt-1">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-app bg-[rgb(var(--background))] px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-app pt-4 text-sm">
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
    </motion.article>
  );
}
