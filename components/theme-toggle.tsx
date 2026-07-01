"use client";

import * as React from "react";
import { useTheme } from "next-themes";

/**
 * Renders nothing meaningful until mounted client-side. This prevents a
 * hydration mismatch: the server has no knowledge of the user's stored
 * theme preference (it lives in localStorage), so rendering theme-dependent
 * UI before mount would cause React to warn about a text/attribute mismatch.
 */
export function ThemeToggle(): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-border"
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-brand-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-start"
    >
      <span aria-hidden="true">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}
