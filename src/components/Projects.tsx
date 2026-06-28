"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import {
  projects,
  tierLabels,
  type Project,
  type ProjectCategory,
  type ProjectTier,
} from "@/data/projects";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "AI",
  "Data",
  "Backend",
  "Web",
  "Mobile",
  "Game",
];

const tierOrder: ProjectTier[] = ["flagship", "major", "minor"];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  const grouped = useMemo(() => {
    return tierOrder
      .map((tier) => ({
        tier,
        items: filtered.filter((p) => p.tier === tier),
      }))
      .filter((group) => group.items.length > 0);
  }, [filtered]);

  return (
    <section id="projects" className="border-t border-app py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="Agentic AI tools, conversational analytics, and the production data and backend systems behind them. Click any project to explore the details."
        />

        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-accent bg-accent text-white"
                  : "border-app bg-card text-muted hover:border-accent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {grouped.map((group) => (
            <div key={group.tier}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted">
                {tierLabels[group.tier]}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((project, i) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    index={i}
                    onSelect={setSelected}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
