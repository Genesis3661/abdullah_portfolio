"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="container-page py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-app bg-card px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.shortName}</span>
          </h1>

          <p className="mt-4 text-xl font-semibold sm:text-2xl">
            {profile.title}{" "}
            <span className="text-muted">· {profile.yearsExperience} yrs</span>
          </p>
          <p className="mt-1 text-lg font-medium text-accent sm:text-xl">
            {profile.specialization}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {profile.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-app bg-card px-3 py-1 font-mono text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-app bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
            <a
              href={asset(profile.resumePath)}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
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
            <a
              href={profile.socials.email.href}
              aria-label="Email"
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
