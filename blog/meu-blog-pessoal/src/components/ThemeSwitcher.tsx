"use client";

import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
