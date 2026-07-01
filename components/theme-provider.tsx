"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Wraps next-themes so theme state (light/dark) is available via the
 * `useTheme()` hook anywhere in the component tree, including inside
 * React Three Fiber canvases for theme-aware material colors.
 */
export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): React.JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
