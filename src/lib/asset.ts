// Prefixes a public asset path with the GitHub Pages base path in production
// so files like the CV PDF resolve correctly both locally and when deployed
// to https://<user>.github.io/abdullah_portfolio/.
const basePath = process.env.NODE_ENV === "production" ? "/abdullah_portfolio" : "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
