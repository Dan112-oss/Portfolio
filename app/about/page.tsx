import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story and process behind King Daniel / KD Designs.",
};

export default function AboutPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        About
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Story, process, and personality content goes here — built in Phase 7.
      </p>
    </section>
  );
}
