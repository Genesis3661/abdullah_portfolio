"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-app py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A toolkit centered on production AI and full-stack engineering — spanning agents, backend, data, and cloud."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-app bg-card p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-app bg-[rgb(var(--background))] px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
