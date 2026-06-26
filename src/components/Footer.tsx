import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-app py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.email.href}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
