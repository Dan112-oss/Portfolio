import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "What King Daniel offers: brand identity and web design services.",
};

export default function ServicesPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Services
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Offerings, process, and packages go here — built in Phase 7.
      </p>
    </section>
  );
}
