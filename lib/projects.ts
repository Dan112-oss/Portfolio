export type ProjectCategory = "brand" | "web";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  process: string;
  result: string;
  coverImage: string;
}

/**
 * Replace these with real case studies as they're written.
 * Each entry here becomes a real route at build time via
 * generateStaticParams() in app/work/[slug]/page.tsx — required
 * because the site uses static export (output: "export").
 */
export const PROJECTS: Project[] = [
  {
    slug: "sample-brand-identity",
    title: "Sample Brand Identity Project",
    category: "brand",
    summary: "Replace with a real project summary.",
    problem: "Replace with the real client problem this project solved.",
    process: "Replace with the real design process for this project.",
    result: "Replace with the real measurable outcome for this project.",
    coverImage: "/images/projects/sample-brand-identity.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug);
}
