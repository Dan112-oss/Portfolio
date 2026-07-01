import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with King Daniel / KD Designs.",
};

export default function ContactPage(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Let's work together
      </h1>
      <p className="mt-4 text-muted">
        Tell me a bit about your project and I'll get back to you.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
