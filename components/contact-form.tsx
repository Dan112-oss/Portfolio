"use client";

import * as React from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * Static export (output: "export") produces no server, so this form can't
 * run its own API route. It posts to an external form backend instead —
 * Formspree, Basin, or similar all accept this exact pattern. Set
 * NEXT_PUBLIC_FORM_ENDPOINT in .env.local once you've created that account.
 */
export function ContactForm(): React.JSX.Element {
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setErrorMessage(null);

    if (!formEndpoint) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Set NEXT_PUBLIC_FORM_ENDPOINT in .env.local.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Form backend responded with status ${response.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong sending your message. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-lg border border-border bg-surface p-6 text-fg">
        Thanks — your message has been sent. I'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-fg outline-none focus-visible:border-brand-start"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-fg outline-none focus-visible:border-brand-start"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-fg outline-none focus-visible:border-brand-start"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p role="alert" className="text-sm text-red-500">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gradient-to-r from-brand-start to-brand-end px-8 py-3 font-semibold text-black transition-opacity disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
