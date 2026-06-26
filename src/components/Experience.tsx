"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="Highlights from leading data engineering, backend, and AI delivery."
        />

        <div className="relative space-y-12 border-l border-app pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.role}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[2.6rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-[rgb(var(--background))]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className="mt-1 font-medium text-accent">{item.focus}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {item.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {item.highlights.map((highlight, j) => (
                  <li key={j} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
