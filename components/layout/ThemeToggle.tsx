"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: 12,
        fontWeight: 700,
        padding: "10px 16px",
        background: "transparent",
        color: "#ffffff",
        border: "none",
        cursor: "pointer",
        textTransform: "uppercase",
        letterSpacing: 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {dark ? "◑ DARK" : "☀ LIGHT"}
    </button>
  );
}
