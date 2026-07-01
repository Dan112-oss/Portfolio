import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Required for static export (output: "export"). Without this, Next.js
 * has no way to know which /work/[slug] pages exist at build time, since
 * there's no server running to resolve dynamic params on request.
 */
export function generateStaticParams(): { slug: string }[] {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-wide text-brand-start">
        {project.category === "brand" ? "Brand Design" : "Web Design"}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
        {project.title}
      </h1>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-sm uppercase tracking-wide text-muted">Problem</h2>
          <p className="mt-2 text-lg">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-wide text-muted">Process</h2>
          <p className="mt-2 text-lg">{project.process}</p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-wide text-muted">Result</h2>
          <p className="mt-2 text-lg">{project.result}</p>
        </section>
      </div>
    </article>
  );
}
