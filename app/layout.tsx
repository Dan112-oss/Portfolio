import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KD Designs — Brand & Web Design by King Daniel",
    template: "%s | KD Designs",
  },
  description:
    "Portfolio of King Daniel (KD Designs): brand identity design and creative web development, featuring interactive 3D case studies.",
  metadataBase: new URL("https://kddesigns.example.com"),
  openGraph: {
    title: "KD Designs — Brand & Web Design by King Daniel",
    description:
      "Portfolio of King Daniel (KD Designs): brand identity design and creative web development.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-bg font-sans text-fg antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-fg"
          >
            Skip to main content
          </a>

          <Nav />

          <main id="main-content" className="pt-16">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
