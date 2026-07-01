export default function HomePage(): React.JSX.Element {
  return (
    <section
      aria-label="Hero"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
        King Daniel builds{" "}
        <span className="bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
          brands and interfaces
        </span>{" "}
        that move.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Brand identity design and creative web development — this hero section
        will be replaced with an interactive 3D scene in Step 3.
      </p>
    </section>
  );
}
