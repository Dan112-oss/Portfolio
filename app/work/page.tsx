import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Brand design and web design projects by King Daniel.",
};

export default function WorkPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Work
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Filterable project gallery goes here — built in Phase 6.
      </p>
    </section>
  );
}
