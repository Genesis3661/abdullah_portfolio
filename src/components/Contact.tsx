"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-app bg-card p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

          <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            I&apos;m open to roles, freelance work, and interesting problems in
            AI-powered applications and full-stack engineering. The fastest way
            to reach me is email.
          </p>

          <a
            href={profile.socials.email.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-accent-soft"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-muted sm:flex-row sm:gap-8">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href={profile.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={profile.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
