import Link from "next/link";

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} King Daniel — KD Designs. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-fg">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
