"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const MAX_TECH = 4;

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const isFlagship = project.tier === "flagship";
  const visibleTech = project.tech.slice(0, MAX_TECH);
  const hiddenCount = project.tech.length - visibleTech.length;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
      aria-label={`View details for ${project.name}`}
      className={`group relative flex h-full flex-col rounded-2xl border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))] ${
        isFlagship ? "border-accent/30" : "border-app"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-app bg-gradient-to-br from-accent/15 to-purple-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
          {project.icon}
        </div>
        {isFlagship ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
            <Star className="h-3 w-3 fill-current" />
            Flagship
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-bold leading-snug">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>

      <p className="mt-3 line-clamp-3 flex-grow text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {visibleTech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-app bg-[rgb(var(--background))] px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
        {hiddenCount > 0 ? (
          <span className="rounded-md border border-app bg-[rgb(var(--background))] px-2.5 py-1 font-mono text-xs text-muted">
            +{hiddenCount}
          </span>
        ) : null}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 border-t border-app pt-4 text-sm font-medium text-muted transition-colors group-hover:text-accent">
        View details
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
}
