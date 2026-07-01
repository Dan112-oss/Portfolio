/**
 * Single source of truth for KD Designs brand colors.
 *
 * IMPORTANT: These values are duplicated (intentionally) in app/globals.css
 * as CSS custom properties, because Tailwind's @theme directive cannot read
 * TypeScript at build time. If you change a value here, you MUST update the
 * matching CSS variable in globals.css. Both are kept in this one file's
 * comments as the canonical reference to avoid drift.
 *
 * Any React Three Fiber material that needs brand colors (e.g. the 3D KD
 * logo mesh) should import from here directly — never hardcode hex values
 * inside a component.
 */

export const BRAND_COLORS = {
  gradientStart: "#E8820C",
  gradientEnd: "#FDB847",
} as const;

export const LIGHT_THEME = {
  background: "#FFFFFF",
  foreground: "#0A0A0A",
  surface: "#F5F5F5",
  border: "#E5E5E5",
  muted: "#6B6B6B",
} as const;

export const DARK_THEME = {
  background: "#0A0A0A",
  foreground: "#FFFFFF",
  surface: "#141414",
  border: "#262626",
  muted: "#A3A3A3",
} as const;

export type ThemeMode = "light" | "dark";

/**
 * Resolves the correct theme palette for use inside React Three Fiber
 * components, where CSS variables aren't directly readable by Three.js
 * material constructors.
 */
export function getThemePalette(mode: ThemeMode): typeof LIGHT_THEME {
  return mode === "dark" ? DARK_THEME : LIGHT_THEME;
}
