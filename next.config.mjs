/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Static Export: produces real .html files per route (e.g. out/work/index.html)
  // instead of requiring a Node.js server at runtime. This is the correct mode
  // for a portfolio site with no per-visitor server logic, and it's what makes
  // hosting on Cloudflare Pages trivial (no edge-runtime adapter needed).
  output: "export",
  distDir: "out",

  images: {
    // Next's built-in Image Optimization API requires a live server, which
    // static export does not run. Images are still compressed at build time
    // via manual <Image> usage, just without the on-request optimization.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  // Draco-compressed glTF assets are served as static files from /public/models.
  // No special webpack loader is needed since @react-three/drei's useGLTF
  // handles decoding client-side.
};

export default nextConfig;
