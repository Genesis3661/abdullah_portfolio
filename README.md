# Abdullah — Developer Portfolio

A modern, responsive developer portfolio for **Muhammad Abdullah** (Senior AI Data Engineer & Technical Lead), built with **Next.js (App Router, static export)** and **Tailwind CSS**, with tasteful animations via **Framer Motion**. It deploys automatically to **GitHub Pages** through **GitHub Actions**.

Live URL (after deploy): `https://Genesis3661.github.io/abdullah_portfolio/`

## Tech Stack

- **Next.js 14** (App Router) with `output: 'export'` for a fully static site
- **TypeScript**
- **Tailwind CSS** (dark-mode-first with a light-mode toggle)
- **Framer Motion** (scroll/entrance animations)
- **lucide-react** (icons)

## Getting Started

> Requires Node.js 18+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: in development the site is served at the root (`/`). In production it is
> served under `/abdullah_portfolio` (the GitHub Pages project path), configured
> automatically in `next.config.mjs`.

### Build a static export

```bash
npm run build
```

The static site is generated into the `out/` directory.

## Editing Content

All content lives in `src/data/` so you can update the site without touching components:

- `src/data/profile.ts` — name, title, tagline, bio, contact, social links
- `src/data/skills.ts` — grouped skill lists
- `src/data/experience.ts` — experience timeline
- `src/data/projects.ts` — projects (with `tier` and `categories`)

### Adding your CV (Download CV button)

Place your CV PDF at:

```
public/abdullah-cv.pdf
```

The "Download CV" button links to it automatically (path configured via
`profile.resumePath` in `src/data/profile.ts`). If you use a different filename,
update `resumePath` to match.

### Adding Upwork (or other) projects

Add new entries to the `projects` array in `src/data/projects.ts`. Each project
supports:

```ts
{
  name: "Project Name",
  tier: "flagship" | "major" | "minor",
  categories: ["AI" | "Data" | "Backend" | "Web" | "Mobile" | "Game"],
  summary: "One-line summary",
  description: "Longer description",
  tech: ["Tech", "Stack"],
  links: [{ label: "Live", href: "https://..." }], // optional
}
```

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`
that builds the static export and deploys it to GitHub Pages on every push to
`main`.

One-time setup:

1. Create a GitHub repo named **`abdullah_portfolio`** and push this project to
   the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the Actions tab). The site
   will be published at `https://Genesis3661.github.io/abdullah_portfolio/`.

> If your GitHub username is different from `Genesis3661`, update the social
> links in `src/data/profile.ts`. The base path only depends on the repo name
> (`abdullah_portfolio`), set in `next.config.mjs`.

### Using a custom domain or `username.github.io` repo

If you later host at the domain root (a `username.github.io` repo or a custom
domain), remove/empty the `basePath` and `assetPrefix` in `next.config.mjs` and
update `basePath` in `src/lib/asset.ts`.

## Project Structure

```
src/
  app/
    layout.tsx        # root layout, fonts, theme bootstrap, metadata
    page.tsx          # assembles all sections
    globals.css       # Tailwind + design tokens
  components/          # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer, ...
  data/                # editable content (profile, skills, experience, projects)
  lib/
    asset.ts          # base-path-aware asset helper
public/
  .nojekyll           # ensures _next/ assets are served on GitHub Pages
  abdullah-cv.pdf     # (add this) your CV for the Download button
.github/workflows/
  deploy.yml          # GitHub Pages CI/CD
```
