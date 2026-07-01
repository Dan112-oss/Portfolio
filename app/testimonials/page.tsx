import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with King Daniel / KD Designs.",
};

export default function TestimonialsPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Testimonials
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Client testimonials and social proof go here — built in Phase 7.
      </p>
    </section>
  );
}
