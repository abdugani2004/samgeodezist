"use client";

import { useEffect, useState } from "react";

type ThemeMode = "default" | "navy";

const THEME_KEY = "samgeodezist-theme";

function applyTheme(theme: ThemeMode) {
  document.body.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const nextTheme = savedTheme === "navy" ? "navy" : "default";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "default" ? "navy" : "default";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Sayt rang mavzusini almashtirish"
      aria-pressed={theme === "navy"}
    >
      <span className="theme-toggle__track">
        <span className={`theme-toggle__thumb ${theme === "navy" ? "translate-x-5" : ""}`} />
      </span>
      <span className="theme-toggle__label">{theme === "navy" ? "Navy" : "Light"}</span>
    </button>
  );
}
