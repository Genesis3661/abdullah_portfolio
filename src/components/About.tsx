"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "3+", label: "Production AI Systems" },
  { value: "Full Stack", label: "End to End" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="grid gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-2"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-app bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
